var cacheVersion = 1;
var currentCache = {
  offline: 'offline-cache' + cacheVersion
};
const offlineUrl = 'cache.html';

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache.offline).then(function (cache) {
      return cache.addAll([
        './sw.js',
        './service-worker.js',
        './cache.html',
        './fallback.html',
        './index.html',
        './docs/media/favicon.ico',
        './docs/media/favicon.png',
        offlineUrl
      ]);
    })
  );
});

// Cache any new resources as they are fetched
self.addEventListener('fetch', function (event) {

  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function (response) {
            if (!response || response.status !== 200) {
              return response;
            }

            var responseToCache = response.clone();
            caches.open(cacheName)
              .then(function (cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(error => {

          if (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html')) {

            return caches.match(offlineUrl);
          }
        });
      })
  );

});
