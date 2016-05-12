this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('sw-1.1').then(function(cache) {
            return cache.addAll([
                './',
                'styles/style.css',
                'js/app.js'
            ]);
        })
    );
});

this.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if(response) {
                    console.log('found cached response', response);
                    return response;
                } else {
                    return fetchCache(event);
                }
            })
    );
});

function fetchCache(event) {
    return fetch(event.request).then(function(response) {
        return caches.open('sw-1.2').then(function(cache) {
            console.log('fetched and caching', event.request);
            cache.put(event.request, response.clone());
            return response;
        });
    });
}