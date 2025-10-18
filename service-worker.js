self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('app-cache-v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './manifest.json',
        // أضف هنا أيقونات التطبيق إذا وجدت
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
