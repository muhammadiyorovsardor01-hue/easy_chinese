// PWA install banner, iOS install guide and Service Worker auto-update.
// Moved out of index.html so the Content Security Policy can forbid inline scripts.
  if ('serviceWorker' in navigator) {
    (function() {
      function isRunningStandalone() {
        return window.matchMedia('(display-mode: standalone)').matches ||
               window.matchMedia('(display-mode: fullscreen)').matches ||
               window.navigator.standalone === true ||
               document.referrer.includes('android-app://');
      }

      function isIosDevice() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream;
      }

      const banner = document.getElementById('pwaInstallBanner');
      const bannerSub = document.getElementById('pwaBannerSub');
      const installBtn = document.getElementById('pwaInstallBtn');
      const dismissBtn = document.getElementById('pwaDismissBtn');
      const profileInstallRow = document.getElementById('profileInstallRow');
      const profileInstallBtn = document.getElementById('profileInstallAppBtn');
      const iosSheet = document.getElementById('iosInstallSheet');
      const closeIosSheetBtn = document.getElementById('closeIosSheetBtn');
      let deferredInstallPrompt = null;

      function canOfferInstall() {
        if (isRunningStandalone()) return false;
        return Boolean(deferredInstallPrompt || isIosDevice());
      }

      function syncProfileInstallRow() {
        if (!profileInstallRow) return;
        profileInstallRow.hidden = !canOfferInstall();
      }

      function showInstallReminder() {
        syncProfileInstallRow();
        if (!banner || !canOfferInstall()) {
          if (banner) banner.hidden = true;
          document.body.classList.remove('has-pwa-banner');
          return;
        }
        if (bannerSub) {
          bannerSub.textContent = isIosDevice() && !deferredInstallPrompt
            ? 'iPhone ekraniga ilova sifatida qo\u2018shish'
            : '1 bosishda telefonga yuklab olish';
        }
        banner.hidden = false;
        requestAnimationFrame(() => {
          banner.classList.add('visible');
          document.body.classList.add('has-pwa-banner');
        });
      }

      function hideInstallReminder() {
        if (!banner) return;
        banner.classList.remove('visible');
        document.body.classList.remove('has-pwa-banner');
        setTimeout(() => { banner.hidden = true; }, 220);
      }

      async function triggerDirectInstall() {
        if (deferredInstallPrompt) {
          const promptEvent = deferredInstallPrompt;
          deferredInstallPrompt = null;
          try {
            await promptEvent.prompt();
            await promptEvent.userChoice;
          } catch (err) {}
          hideInstallReminder();
          syncProfileInstallRow();
          return;
        }
        if (isIosDevice() && iosSheet) {
          hideInstallReminder();
          iosSheet.hidden = false;
        }
      }

      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredInstallPrompt = e;
        showInstallReminder();
      });

      window.addEventListener('appinstalled', () => {
        deferredInstallPrompt = null;
        if (iosSheet) iosSheet.hidden = true;
        hideInstallReminder();
        syncProfileInstallRow();
      });

      if (isIosDevice() && !isRunningStandalone()) {
        setTimeout(showInstallReminder, 900);
      }

      if (installBtn) installBtn.addEventListener('click', triggerDirectInstall);
      if (profileInstallBtn) profileInstallBtn.addEventListener('click', triggerDirectInstall);
      if (dismissBtn) dismissBtn.addEventListener('click', hideInstallReminder);
      if (closeIosSheetBtn && iosSheet) {
        closeIosSheetBtn.addEventListener('click', () => { iosSheet.hidden = true; });
      }

      // Service Worker Registration + Live Automatic App Updates
      let isRefreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (isRefreshing) return;
        isRefreshing = true;
        window.location.reload();
      });

      navigator.serviceWorker.register('./sw.js?v=34', { updateViaCache: 'none' }).then((reg) => {
        if (reg.waiting) {
          reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        }

        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (!newWorker) return;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              newWorker.postMessage({ type: 'SKIP_WAITING' });
            }
          });
        });

        reg.update().catch(() => {});
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') {
            reg.update().catch(() => {});
          }
        });
        setInterval(() => {
          reg.update().catch(() => {});
        }, 5 * 60 * 1000);
      }).catch(() => {});
    })();
  }
