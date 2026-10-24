const CACHE_NAME = 'easychinese-v35';
const CORE_ASSETS = [
  './',
  './index.html',
  './styles.css?v=35',
  './script.js?v=35',
  './pwa.js?v=35',
  './words.json',
  './manifest.json',
  './assets/app-icon-1.svg',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/chinese-landscape.jpg',
  './assets/bg-landscape.svg',
  './assets/bg-landscape-lite.svg',
  './assets/blossom-accent.svg',
  'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/hanzi-writer.min.js'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.allSettled(CORE_ASSETS.map(url => cache.add(url)))
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;

  // Always use Network-First with cache: 'no-store' for all same-origin files
  // so installed PWA users ALWAYS get the latest HTML, CSS, JS, and JSON updates
  // automatically whenever online, while still working 100% offline.
  event.respondWith(
    isSameOrigin ? networkFirstFresh(event.request) : cacheFirstAsset(event.request)
  );
});

async function networkFirstFresh(request) {
  try {
    const freshResponse = await fetch(request, { cache: 'no-store' });
    if (freshResponse && freshResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, freshResponse.clone());
    }
    return freshResponse;
  } catch (error) {
    const exactMatch = await caches.match(request);
    if (exactMatch) return exactMatch;
    const ignoreQueryMatch = await caches.match(request, { ignoreSearch: true });
    if (ignoreQueryMatch) return ignoreQueryMatch;
    return caches.match('./index.html', { ignoreSearch: true });
  }
}

async function cacheFirstAsset(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response && response.ok && response.type !== 'opaque') {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
  }
  return response;
}
