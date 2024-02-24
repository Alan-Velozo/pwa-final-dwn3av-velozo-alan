self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("mi-cache").then((cache) => {
        return cache.addAll([
          './',
          'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
          './script.js',
          './index.html',
          './nosotros.html',
          './contacto.html',
          './api.php',
          './gracias.php',
          './images/bannerInicio.jpg'
        ]).catch((error) => {
          console.error('Error al añadir recursos al caché:', error);
        });
      })
    );
});


self.addEventListener('fetch', (event) => {
  if (event.request.method === 'POST' && event.request.url.includes('gracias.php')) {
      event.respondWith(
        fetch(event.request.clone())
          .catch(() => {
            const responseHTML = `
              <html>
                <head>
                  <meta charset="UTF-8">
                  <title>Rick y Morty API</title>
                </head>
                <body>
                  <h1>Ha ocurrido un error procesando el mensaje.</h1>
                  <p>Por favor, revise su conexión a internet y vuelva a intentarlo más tarde.</p>
                  <a href="index.html">Volver al inicio</a>
                </body>
              </html>
            `;
            return new Response(responseHTML, {
              headers: { 'Content-Type': 'text/html' }
            });
          })
      );
  }
});


self.addEventListener("fetch-cache-only", (e) => {
    const cacheResponse = caches.match(e.request);
    e.respondWith(cacheResponse);
});

self.addEventListener("fetch-and-network", (e) => {

    const cacheResponse = caches.match(e.request).then(response => {
        if(!response) {
            return fetch(e.request);
        }
        return response;
    });

    e.respondWith(cacheResponse);

});

self.addEventListener("fetch", (e) => {
    const response =
        fetch(e.request)
            .then((res) => {
              return caches.open('mi-cache').then(cache => {
                  cache.put(e.request, res.clone());
                  return res;
              })
            })
            .catch((err) => {
                return caches.match(e.request);
            })
    e.respondWith(response);
});