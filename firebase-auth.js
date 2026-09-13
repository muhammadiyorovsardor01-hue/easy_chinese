// =============================================================
// Easy Chinese — Firebase Google Authentication (Phase 1)
// AUTHENTICATION ONLY: no cloud progress sync, no Firestore,
// no Realtime Database. XP, streak, learned words, HSK progress,
// quests and Canvas progress keep using local storage exactly
// as before.
//
// Everything in this file is guarded: if the Firebase CDN fails,
// the environment is unsupported, or sign-in fails, Easy Chinese
// keeps working in guest mode without any uncaught errors.
// =============================================================
(function () {
    'use strict';

    var FIREBASE_CONFIG = {
        apiKey: "AIzaSyAIOJLr-gMu6RymYs_mO2o7fGhGNgy2giI",
        authDomain: "easy-chinese-2e2d6.firebaseapp.com",
        projectId: "easy-chinese-2e2d6",
        storageBucket: "easy-chinese-2e2d6.firebasestorage.app",
        messagingSenderId: "41512543901",
        appId: "1:41512543901:web:c649cb62187eea9570d674"
    };

    var DEFAULT_USERNAME = 'Chinese Learner';
    var REDIRECT_FLAG = 'ecAuthRedirect';

    var currentUser = null;
    var auth = null;
    var googleProvider = null;
    var available = false;
    var messageTimer = null;

    // ---------- Profile storage helpers (localStorage only) ----------
    function readProfile() {
        try {
            return JSON.parse(localStorage.getItem('profileData')) || null;
        } catch (err) {
            return null;
        }
    }

    function writeProfile(profile) {
        try {
            localStorage.setItem('profileData', JSON.stringify(profile));
        } catch (err) { /* storage unavailable — ignore */ }
    }

    // Adds Phase 1 fields to older stored profiles without losing data.
    function normalizeProfile(profile) {
        if (!profile || typeof profile !== 'object') return profile;
        if (typeof profile.nickname !== 'string') {
            // Legacy profiles: a username different from the default counts
            // as a nickname the user chose inside Easy Chinese.
            profile.nickname = (profile.username && profile.username !== DEFAULT_USERNAME) ? profile.username : '';
        }
        if (profile.avatarPref !== 'google' && profile.avatarPref !== 'emoji') {
            profile.avatarPref = 'emoji';
        }
        return profile;
    }

    // Display-name rule: custom nickname > Google name (when signed in) >
    // default guest name. A custom nickname always survives sign-out.
    function effectiveName(profile, user) {
        if (profile && profile.nickname) return profile.nickname;
        if (user && user.displayName) return user.displayName;
        return DEFAULT_USERNAME;
    }

    // ---------- Small UI helpers ----------
    function el(id) { return document.getElementById(id); }

    function setAuthMessage(text) {
        var box = el('authMessage');
        if (!box) return;
        if (messageTimer) { clearTimeout(messageTimer); messageTimer = null; }
        box.textContent = text || '';
        box.hidden = !text;
        if (text) {
            messageTimer = setTimeout(function () {
                box.textContent = '';
                box.hidden = true;
                messageTimer = null;
            }, 6000);
        }
    }

    function friendlyError(code) {
        switch (code) {
            case 'auth/popup-closed-by-user':
            case 'auth/cancelled-popup-request':
                return 'Google sign-in was cancelled.';
            case 'auth/network-request-failed':
                return 'Network problem — check your connection and try again.';
            case 'auth/unauthorized-domain':
                return 'This domain is not authorized for Google sign-in.';
            case 'auth/operation-not-allowed':
                return 'Google sign-in is not enabled yet.';
            default:
                return 'Google sign-in failed. Please try again.';
        }
    }

    // ---------- Identity rendering (Profile card header only) ----------
    function renderIdentity() {
        var usernameEl = el('profileUsername');
        var emojiEl = el('profileAvatar');
        var photoEl = el('profilePhoto');
        var emailEl = el('profileEmail');
        var signInBtn = el('googleSignInBtn');
        var signOutBtn = el('googleSignOutBtn');
        var goalEl = el('dailyGoalDisplay');
        if (!usernameEl) return;

        var profile = normalizeProfile(readProfile()) || {
            username: DEFAULT_USERNAME,
            avatar: '👤',
            dailyGoal: 10,
            nickname: '',
            avatarPref: 'emoji'
        };

        var user = currentUser;
        var photoURL = (user && user.photoURL) || '';
        var usePhoto = !!(user && photoURL && profile.avatarPref === 'google');

        // Display name: nickname > Google name > guest default
        usernameEl.textContent = effectiveName(profile, user);

        // Avatar: Google photo (when available and preferred) or emoji
        if (photoEl && emojiEl) {
            if (usePhoto) {
                photoEl.onerror = function () {
                    photoEl.hidden = true;
                    emojiEl.hidden = false;
                };
                if (photoEl.getAttribute('src') !== photoURL) photoEl.src = photoURL;
                photoEl.hidden = false;
                emojiEl.hidden = true;
            } else {
                photoEl.removeAttribute('src');
                photoEl.hidden = true;
                emojiEl.hidden = false;
            }
        }

        // Email + auth buttons
        if (user) {
            if (emailEl) {
                emailEl.textContent = user.email || '';
                emailEl.hidden = !user.email;
            }
            if (signInBtn) signInBtn.hidden = true;
            if (signOutBtn) signOutBtn.hidden = false;
        } else {
            if (emailEl) emailEl.hidden = true;
            if (signInBtn) signInBtn.hidden = false;
            if (signOutBtn) signOutBtn.hidden = true;
        }

        if (goalEl && profile.dailyGoal != null) goalEl.textContent = profile.dailyGoal;
    }

    // Keeps profileData.username aligned with the effective display name so
    // other views (e.g. the leaderboard) show the same identity.
    function syncStoredIdentity() {
        var profile = normalizeProfile(readProfile());
        var name = effectiveName(profile, currentUser);
        if (!profile) {
            if (!currentUser) return; // fresh guest: nothing to store yet
            profile = { username: name, nickname: '', avatar: '👤', avatarPref: 'emoji', dailyGoal: 10 };
            writeProfile(profile);
            return;
        }
        if (profile.username !== name) {
            profile.username = name;
            writeProfile(profile);
        }
    }

    // ---------- Sign in / out ----------
    function handleSignInError(err) {
        var code = (err && err.code) || '';
        if (code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment') {
            // Popup blocked or unsupported → fall back to the redirect flow.
            tryRedirect();
            return;
        }
        setAuthMessage(friendlyError(code));
    }

    function signIn() {
        if (!available || !auth) {
            setAuthMessage('Google sign-in is unavailable right now — you can keep using Easy Chinese as a guest.');
            return;
        }
        setAuthMessage('');
        try {
            googleProvider = googleProvider || new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(googleProvider).catch(handleSignInError);
        } catch (err) {
            handleSignInError(err);
        }
    }

    function tryRedirect() {
        if (!available || !auth) return;
        try {
            googleProvider = googleProvider || new firebase.auth.GoogleAuthProvider();
            try { sessionStorage.setItem(REDIRECT_FLAG, '1'); } catch (e) { /* ignore */ }
            auth.signInWithRedirect(googleProvider).catch(function (err) {
                try { sessionStorage.removeItem(REDIRECT_FLAG); } catch (e) { /* ignore */ }
                setAuthMessage(friendlyError((err && err.code) || ''));
            });
        } catch (err) {
            try { sessionStorage.removeItem(REDIRECT_FLAG); } catch (e) { /* ignore */ }
            setAuthMessage(friendlyError((err && err.code) || ''));
        }
    }

    function signOut() {
        if (!available || !auth) return;
        try {
            // Only the UI switches back to guest mode; local progress data
            // (XP, streak, learned words, quests) is never touched here.
            auth.signOut().catch(function () {
                setAuthMessage('Could not sign out. Please try again.');
            });
        } catch (err) {
            setAuthMessage('Could not sign out. Please try again.');
        }
    }

    // ---------- Firebase init + auth state ----------
    try {
        if (typeof firebase !== 'undefined' && firebase.auth) {
            firebase.initializeApp(FIREBASE_CONFIG);
            auth = firebase.auth();
            available = true;
        }
    } catch (err) {
        available = false;
        auth = null;
    }

    if (available && auth) {
        // Surface errors from a redirect-based sign-in attempt, but only
        // when this page actually started one (avoids noise on plain loads).
        auth.getRedirectResult().then(function () {
            try { sessionStorage.removeItem(REDIRECT_FLAG); } catch (e) { /* ignore */ }
        }).catch(function (err) {
            var pending = false;
            try { pending = sessionStorage.getItem(REDIRECT_FLAG) === '1'; } catch (e) { pending = false; }
            try { sessionStorage.removeItem(REDIRECT_FLAG); } catch (e) { /* ignore */ }
            if (pending) setAuthMessage(friendlyError((err && err.code) || ''));
        });

        // Auth state observation: login survives page refresh.
        auth.onAuthStateChanged(function (user) {
            currentUser = user;
            if (user) setAuthMessage('');
            syncStoredIdentity();
            renderIdentity();
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var signInBtn = el('googleSignInBtn');
        var signOutBtn = el('googleSignOutBtn');
        if (signInBtn) signInBtn.addEventListener('click', signIn);
        if (signOutBtn) signOutBtn.addEventListener('click', signOut);
        renderIdentity();
    });

    // ---------- Public API (used by script.js; safe if Firebase fails) ----------
    window.EasyAuth = {
        available: available,
        isSignedIn: function () { return available && !!currentUser; },
        getUser: function () { return available ? currentUser : null; },
        getPhotoURL: function () { return (available && currentUser && currentUser.photoURL) || ''; },
        normalizeProfile: normalizeProfile,
        refreshIdentity: function () {
            syncStoredIdentity();
            renderIdentity();
        }
    };
})();