let cacheName = "qi-ri2";
let filesToCache = [
  "./index.html",
  "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",
  "./static/css/app.14f6ab714153f2c9ba9547e4242e23a4.css",
  "./static/js/manifest.3ad1d5771e9b13dbdad2.js",
  "./static/js/vendor.d063e8079d0e3d2eac96.js",
  "./static/js/app.bbdd6938457a02ea4ef5.js"
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
