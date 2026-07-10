const PRECACHE_PREFIX = 'nuxt-pwa-precache'
const PRECACHE_NAME = `${PRECACHE_PREFIX}-v2`
const PRECACHE_ENTRIES = self.__WB_MANIFEST
const PRECACHE_URLS = [
  ...new Set([
    '/',
    ...PRECACHE_ENTRIES.map((entry) => typeof entry === 'string' ? entry : entry.url)
  ])
]

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PRECACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => (
            (cacheName.startsWith(PRECACHE_PREFIX) && cacheName !== PRECACHE_NAME)
            || cacheName === 'my-pwa-cache-v1'
            || cacheName === 'nuxt-pwa-cache-v1'
          ))
          .map((cacheName) => caches.delete(cacheName))
      ))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event

  if (request.method !== 'GET') {
    return
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const responseClone = response.clone()
            caches.open(PRECACHE_NAME)
              .then((cache) => cache.put(request, responseClone))
          }

          return response
        })
        .catch(async () => (
          await caches.match(request)
          || await caches.match('/')
          || Response.error()
        ))
    )
    return
  }

  event.respondWith(
    caches.match(request)
      .then(async (cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse
        }

        const response = await fetch(request)
        const requestUrl = new URL(request.url)

        if (response.ok && requestUrl.origin === self.location.origin) {
          const responseClone = response.clone()
          caches.open(PRECACHE_NAME)
            .then((cache) => cache.put(request, responseClone))
        }

        return response
      })
  )
})
