let cacheName = "qi-ri2";
let filesToCache = [
  "./index.html",
  "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
];

self.addEventListener("install", function(event) {
  console.log("ServiceWorker installing...");
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("ServiceWorker caching app shell...");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", function(event) {
  console.log("ServiceWorker activating...");
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== cacheName) {
            console.log("ServiceWorker removing old cache...", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  console.log("ServiceWorker fetching...", event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
