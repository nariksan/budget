const CACHE_NAME = 'parent-budget-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Установка и кэширование файлов
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Перехват запросов и отдача из кэша
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});