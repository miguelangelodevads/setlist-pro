const CACHE_NAME = 'setlist-pro-v1';
const ASSETS = [
  '/',
  '/index.html'
];

// Instalação: Guarda os ficheiros na cache para funcionar offline
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Ativação: Limpa caches antigas se houver atualizações na app
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Fetch: Interceta os pedidos para carregar a app mesmo sem internet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
