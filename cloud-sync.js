// =============================================================
// Easy Chinese — Firestore Progress Sync (Phase 2A)
// =============================================================
// Syncs ONLY: learnedWords, streakData.xp, streakData.streak,
// streakData.lastLoginDate, dailyProgress. profileData, theme,
// quests, achievements, HSK percentages and the leaderboard stay
// local in this phase (quests/achievements/percentages are derived
// from the synced data and re-render locally).
//
// localStorage REMAINS the runtime source of truth. This file is a
// purely additive layer:
//   - Guest mode / Firebase failure / offline  → every call is a
//     guarded no-op; the app behaves exactly as before.
//   - Signed in → an initial cloud->local merge runs once, then all
//     cloud writes only MIRROR already-persisted local state.
//
// Firestore paths (matches production security rules users/{uid}):
//   users/{uid}                    — { schemaVersion, stats, daily, updatedAt }
//   users/{uid}/learned/{wordId}   — { learned: true|false, updatedAt }
//   users/{uid}/backups/{id}       — raw pre-merge local snapshot
//
// Merge rules (Phase 2A spec):
//   learnedWords : cloud is authoritative per word, INCLUDING
//                  learned:false tombstones (unlearn must sync).
//                  Local-only IDs migrate up as learned:true.
//   xp           : monotonic → max(local, cloud); empty/absent cloud
//                  values never erase nonzero local XP.
//   streak       : the side with the more recent lastLoginDate wins
//                  its streak value; same day → larger streak.
//   daily        : same day → max per field; different day → newer
//                  date wins completely; absent ≠ zero.
// =============================================================
(function () {
    'use strict';

    var ready = false;
    var syncedUid = null;       // uid whose initial cloud->local merge has completed
    var mergingUid = null;      // uid currently being merged (or null)
    var pendingWordWrites = []; // word syncs queued while a merge is in flight
    var pushTimer = null;
    var PUSH_DEBOUNCE_MS = 1200;
    var firestore = null; // Firestore compat instance (null when unavailable)

    // ---------- small helpers ----------
    function serverTimestamp() {
        try {
            return firebase.firestore.FieldValue.serverTimestamp();
        } catch (err) {
            return null; // field is omitted rather than crashing
        }
    }

    function userDoc(uid) { return firestore.collection('users').doc(uid); }
    function learnedCol(uid) { return userDoc(uid).collection('learned'); }
    function backupsCol(uid) { return userDoc(uid).collection('backups'); }

    // Reads and parses a localStorage JSON value. Anything missing,
    // unparsable, or not an object/array counts as ABSENT — never as zero.
    function readLSJSON(key) {
        try {
            var raw = localStorage.getItem(key);
            if (raw === null || raw === '') return null;
            var val = JSON.parse(raw);
            return (val && typeof val === 'object') ? val : null;
        } catch (err) {
            return null;
        }
    }

    // Non-negative finite number, or null (absent).
    function numOrNull(v) {
        return (typeof v === 'number' && isFinite(v) && v >= 0) ? v : null;
    }

    function toIntOrNull(v) {
        var n = Number(v);
        return (isFinite(n) && Math.floor(n) === n) ? n : null;
    }

    function dateOrNull(s) {
        if (typeof s !== 'string' || !s) return null;
        var t = new Date(s).getTime();
        return isFinite(t) ? t : null;
    }

    function sanitizeDaily(d) {
        return {
            date: (d && typeof d.date === 'string') ? d.date : '',
            traces: numOrNull(d && d.traces) || 0,
            xp: numOrNull(d && d.xp) || 0
        };
    }

    // ---------- merge logic (pure functions, no I/O) ----------
    // XP is monotonic: max of both sides. Absent data never becomes zero.
    // Streak: newer lastLoginDate wins its streak value; same day → larger
    // streak; one side absent → the other wins.
    function mergeStats(local, cloud) {
        var l = (local && typeof local === 'object') ? local : {};
        var c = (cloud && typeof cloud === 'object') ? cloud : {};

        var lXP = numOrNull(l.xp);
        var cXP = numOrNull(c.xp);
        var xp = (lXP === null && cXP === null) ? null : Math.max(lXP || 0, cXP || 0);

        var lDate = dateOrNull(l.lastLoginDate);
        var cDate = dateOrNull(c.lastLoginDate);
        var lStreak = numOrNull(l.streak);
        var cStreak = numOrNull(c.streak);
        var lHas = (lDate !== null) || (lStreak !== null);
        var cHas = (cDate !== null) || (cStreak !== null);

        var streak = null;
        var lastLoginDate = null;
        if (lHas && cHas && lDate !== null && cDate !== null) {
            if (lDate > cDate) {
                // Local login state is newer → local streak wins.
                streak = lStreak;
                lastLoginDate = l.lastLoginDate;
            } else if (lDate < cDate) {
                // Cloud login state is newer → cloud streak wins.
                streak = cStreak;
                lastLoginDate = c.lastLoginDate;
            } else {
                // Same day → the larger streak.
                streak = Math.max(lStreak || 0, cStreak || 0);
                lastLoginDate = l.lastLoginDate;
            }
        } else if (lHas && cHas) {
            // One side dated, the other undated → the dated side wins.
            if (lDate !== null) {
                streak = lStreak;
                lastLoginDate = l.lastLoginDate;
            } else {
                streak = cStreak;
                lastLoginDate = c.lastLoginDate;
            }
        } else if (lHas) {
            streak = lStreak;
            lastLoginDate = (typeof l.lastLoginDate === 'string') ? l.lastLoginDate : null;
        } else if (cHas) {
            streak = cStreak;
            lastLoginDate = (typeof c.lastLoginDate === 'string') ? c.lastLoginDate : null;
        }

        var out = {};
        if (xp !== null) out.xp = xp;
        if (streak !== null) out.streak = streak;
        if (lastLoginDate !== null && lastLoginDate !== '') out.lastLoginDate = lastLoginDate;
        return out;
    }

    // Same day → max per field. Different day → newer date wins completely.
    // Missing side or missing date counts as absent, never as zero progress.
    function mergeDaily(local, cloud) {
        var l = (local && typeof local === 'object') ? local : null;
        var c = (cloud && typeof cloud === 'object') ? cloud : null;
        if (!l && !c) return null;
        if (!l) return sanitizeDaily(c);
        if (!c) return sanitizeDaily(l);

        var lDate = dateOrNull(l.date);
        var cDate = dateOrNull(c.date);
        if (lDate !== null && cDate !== null) {
            if (lDate > cDate) return sanitizeDaily(l);
            if (lDate < cDate) return sanitizeDaily(c);
            return {
                date: (typeof l.date === 'string' && l.date) ? l.date : c.date,
                traces: Math.max(numOrNull(l.traces) || 0, numOrNull(c.traces) || 0),
                xp: Math.max(numOrNull(l.xp) || 0, numOrNull(c.xp) || 0)
            };
        }
        if (lDate !== null) return sanitizeDaily(l);
        if (cDate !== null) return sanitizeDaily(c);
        return sanitizeDaily(l); // both undated → runtime truth wins
    }

    // Cloud is authoritative per word, including learned:false tombstones:
    //  - cloud entry learned:true              → word stays learned
    //  - cloud entry learned:false (tombstone) → word stays UNLEARNED; a stale
    //    local ID never resurrects it
    //  - no cloud entry, but local has the ID  → migrate up as learned:true
    function planLearnedMerge(localIds, cloudMap) {
        var trueIds = [];
        var uploadIds = [];
        var seen = {};
        Object.keys(cloudMap).forEach(function (key) {
            var id = toIntOrNull(key);
            if (id === null) return;
            seen[id] = true;
            if (cloudMap[key].learned === true) trueIds.push(id);
        });
        (Array.isArray(localIds) ? localIds : []).forEach(function (raw) {
            var id = toIntOrNull(raw);
            if (id === null || seen[id]) return;
            seen[id] = true;
            trueIds.push(id);
            uploadIds.push(id);
        });
        trueIds.sort(function (a, b) { return a - b; });
        return { trueIds: trueIds, uploadIds: uploadIds };
    }

    // ---------- initial cloud -> local merge (runs once per sign-in) ----------
    function runInitialMerge(user) {
        var uid = user.uid;
        if (mergingUid === uid || syncedUid === uid) return Promise.resolve();
        mergingUid = uid;

        // RAW local values, read BEFORE anything is changed.
        var localLearned = readLSJSON('learnedWords');
        var localIds = Array.isArray(localLearned) ? localLearned : [];
        var localStreak = readLSJSON('streakData');
        var localDaily = readLSJSON('dailyProgress');

        // 1) BACKUP the raw local snapshot BEFORE changing any local data.
        //    If the backup fails, the whole merge aborts and local data
        //    stays exactly as it was.
        var backupId = 'preSync-' + Date.now() + '-' + Math.floor(Math.random() * 1000000);
        return backupsCol(uid).doc(backupId).set({
            learnedWords: localIds,
            streakData: localStreak,
            dailyProgress: localDaily,
            createdAt: serverTimestamp()
        }).then(function () {
            // 2) Read the cloud user document and learned subcollection.
            return userDoc(uid).get().then(function (userSnap) {
                var data = (userSnap && userSnap.exists) ? userSnap.data() : {};
                var cloudStats = (data && data.stats) ? data.stats : null;
                var cloudDaily = (data && data.daily) ? data.daily : null;
                return learnedCol(uid).get().then(function (learnedSnap) {
                    var cloudMap = {};
                    if (learnedSnap && typeof learnedSnap.forEach === 'function') {
                        learnedSnap.forEach(function (doc) {
                            cloudMap[String(doc.id)] = { learned: doc.get('learned') === true };
                        });
                    }
                    return { cloudStats: cloudStats, cloudDaily: cloudDaily, cloudMap: cloudMap };
                });
            });
        }).then(function (cloudState) {
            // 3) Upload local-only learned words + write merged stats/daily
            //    to the user document (single atomic batch).
            var learnedPlan = planLearnedMerge(localIds, cloudState.cloudMap);
            var batch = firestore.batch();
            learnedPlan.uploadIds.forEach(function (id) {
                batch.set(learnedCol(uid).doc(String(id)), {
                    learned: true,
                    updatedAt: serverTimestamp()
                });
            });

            var statsAtRead = mergeStats(localStreak, cloudState.cloudStats);
            var userPayload = { schemaVersion: 1, updatedAt: serverTimestamp() };
            if (Object.keys(statsAtRead).length > 0) userPayload.stats = statsAtRead;
            var dailyAtRead = mergeDaily(localDaily, cloudState.cloudDaily);
            if (dailyAtRead) userPayload.daily = dailyAtRead;
            batch.set(userDoc(uid), userPayload, { merge: true });

            return batch.commit().then(function () {
                return {
                    cloudStats: cloudState.cloudStats,
                    cloudDaily: cloudState.cloudDaily,
                    cloudMap: cloudState.cloudMap,
                    uploadIds: learnedPlan.uploadIds
                };
            });
        })
        .then(function (ctx) {
            // 4) Rebuild local state. Local values are RE-READ here so that a
            //    change made while the merge was in flight (e.g. the page-load
            //    streak update) is not clobbered by the merge.
            var nowLearned = readLSJSON('learnedWords');
            var nowIds = Array.isArray(nowLearned) ? nowLearned : [];
            var nowStreak = readLSJSON('streakData');
            var nowDaily = readLSJSON('dailyProgress');

            var statsFinal = mergeStats(nowStreak, ctx.cloudStats);
            var dailyFinal = mergeDaily(nowDaily, ctx.cloudDaily);

            // Preserve the app's existing daily-rollover rule: a merged day
            // that is not today is stale and starts fresh today (the same
            // thing script.js does at load when the stored date differs).
            if (dailyFinal) {
                var dTime = dateOrNull(dailyFinal.date);
                var todayStr = new Date().toDateString();
                if (dTime !== null && dTime !== dateOrNull(todayStr)) {
                    dailyFinal = { date: todayStr, traces: 0, xp: 0 };
                }
            }

            // Learned words = cloud truth (true IDs) ∪ words migrated up in
            // the batch ∪ current local IDs the cloud has no opinion about.
            // Tombstoned cloud docs are excluded and never resurrected.
            var trueSet = {};
            var cloudKnown = {};
            Object.keys(ctx.cloudMap).forEach(function (key) {
                var id = toIntOrNull(key);
                if (id === null) return;
                cloudKnown[id] = true;
                if (ctx.cloudMap[key].learned === true) trueSet[id] = true;
            });
            ctx.uploadIds.forEach(function (id) { trueSet[id] = true; });
            nowIds.forEach(function (raw) {
                var id = toIntOrNull(raw);
                if (id === null || cloudKnown[id]) return;
                trueSet[id] = true;
            });
            var mergedLearned = Object.keys(trueSet)
                .map(function (k) { return parseInt(k, 10); })
                .sort(function (a, b) { return a - b; });

            var mergedStreak = Object.assign(
                { streak: 0, lastLoginDate: null, totalLearned: 0, xp: 0 },
                (nowStreak && typeof nowStreak === 'object') ? nowStreak : {},
                statsFinal,
                { totalLearned: mergedLearned.length }
            );

            localStorage.setItem('streakData', JSON.stringify(mergedStreak));
            localStorage.setItem('learnedWords', JSON.stringify(mergedLearned));
            if (dailyFinal) {
                localStorage.setItem('dailyProgress', JSON.stringify(dailyFinal));
            }

            // 5) Push merged values into the live runtime variables + UI.
            if (typeof window.EasyCloudApplyMergedState === 'function') {
                window.EasyCloudApplyMergedState({
                    learnedWords: mergedLearned,
                    streakData: mergedStreak,
                    dailyProgress: dailyFinal
                });
            }

            syncedUid = uid;
            mergingUid = null;
            flushPendingWordWrites();
            schedulePushStats(); // pick up any local change made during the merge
        }).catch(function (err) {
            // On any failure local data is untouched; the merge retries on
            // the next sign-in / page load.
            console.warn('[EasyCloud] initial merge failed — continuing on local data.', (err && err.code) ? err.code : err);
            if (mergingUid === uid) mergingUid = null;
        });
    }

    // ---------- incremental mirrors (only after the initial merge) ----------
    // Mirrors ONE word's already-persisted local state. Never rewrites the
    // whole learned collection. Cloud failure never undoes the local action.
    function syncLearnedWord(wordId, learned) {
        if (!ready) return;
        var id = toIntOrNull(wordId);
        if (id === null) return;
        var uid = syncedUid;
        if (!uid) {
            // While the sign-in merge is in flight the word write is queued
            // and flushed right after the merge completes. Signed-out guests
            // never queue (nothing to sync to).
            if (mergingUid) pendingWordWrites.push({ wordId: id, learned: !!learned });
            return;
        }
        learnedCol(uid).doc(String(id)).set({
            learned: !!learned,
            updatedAt: serverTimestamp()
        }).catch(function (err) {
            console.warn('[EasyCloud] learned-word write failed (local state kept):', (err && err.code) ? err.code : err);
        });
    }

    function flushPendingWordWrites() {
        if (!pendingWordWrites.length) return;
        var queue = pendingWordWrites;
        pendingWordWrites = [];
        queue.forEach(function (item) {
            syncLearnedWord(item.wordId, item.learned);
        });
    }

    // Debounced mirror of streakData/dailyProgress to users/{uid}. Runs only
    // after the initial merge for the current user has completed, so a
    // page-load streak update can never overwrite cloud values pre-merge.
    function schedulePushStats() {
        if (!ready || !syncedUid) return;
        if (pushTimer) clearTimeout(pushTimer);
        pushTimer = setTimeout(function () {
            pushTimer = null;
            performPushStats();
        }, PUSH_DEBOUNCE_MS);
    }

    function performPushStats() {
        var uid = syncedUid;
        if (!ready || !uid) return;
        try {
            var stats = mergeStats(readLSJSON('streakData'), null);
            // Only push when the local snapshot is trustworthy (both xp and
            // streak present). An incomplete/empty snapshot is never pushed —
            // a zero/empty value can never erase nonzero cloud data.
            if (!stats || typeof stats.xp !== 'number' || typeof stats.streak !== 'number') return;

            var payload = { schemaVersion: 1, stats: stats, updatedAt: serverTimestamp() };
            var daily = readLSJSON('dailyProgress');
            if (daily && dateOrNull(daily.date) !== null) {
                payload.daily = sanitizeDaily(daily);
            }
            userDoc(uid).set(payload, { merge: true }).catch(function (err) {
                console.warn('[EasyCloud] stats push failed (local state kept):', (err && err.code) ? err.code : err);
            });
        } catch (err) {
            console.warn('[EasyCloud] stats push error:', err);
        }
    }

    // ---------- auth state ----------
    function handleAuthState(user) {
        if (!ready) return;
        if (user && user.uid) {
            if (syncedUid === user.uid || mergingUid === user.uid) return;
            return runInitialMerge(user);
        }
        // Signed out → back to pure guest mode. Local progress is never
        // touched here (matches firebase-auth.js sign-out behavior).
        syncedUid = null;
        mergingUid = null;
        pendingWordWrites = [];
        if (pushTimer) {
            clearTimeout(pushTimer);
            pushTimer = null;
        }
        return undefined;
    }

    // ---------- init ----------
    try {
        // firebase-auth.js initializes the app and runs first (script order).
        if (typeof firebase !== 'undefined' && firebase.firestore &&
            window.EasyAuth && window.EasyAuth.available) {
            firestore = firebase.firestore();
            ready = true;
        }
    } catch (err) {
        ready = false;
        firestore = null;
    }

    if (ready) {
        try {
            // Second auth listener: firebase-auth.js keeps handling identity;
            // this one only triggers progress sync. Fires on sign-in AND on
            // session restore after a page refresh.
            firebase.auth().onAuthStateChanged(handleAuthState);
        } catch (err) {
            console.warn('[EasyCloud] could not observe auth state — sync disabled.', err);
            ready = false;
        }
    }

    // ---------- public guarded API (safe to call at any time) ----------
    window.EasyCloud = {
        available: ready,
        isSynced: function () { return ready && !!syncedUid; },
        syncLearnedWord: syncLearnedWord,
        pushStats: schedulePushStats,
        flushNow: performPushStats,
        handleAuthState: handleAuthState
    };
})();
