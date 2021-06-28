const CACHE_NAME ="version-1belvo-1";
const urlsToCache = [ 'index.html', 'offline.html' ];
const self = this;

//Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened cache');

            return cache.addAll(urlsToCache);
        })
    )
});

//Listen for Requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
            .catch(() => caches.match('offline.html'))
        })
    )
});

//Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhilelist = [];
    cacheWhilelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            cacheNames.map((cacheName) => {
                if(!cacheWhilelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        })
    )
});