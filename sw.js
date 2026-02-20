const CACHE_NAME = 'mj-admin-v15-cache';
const assets = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap'
];

// Instalação
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Intercepta requisições para funcionar offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
