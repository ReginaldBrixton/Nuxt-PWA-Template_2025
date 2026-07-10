const CACHE_PREFIX = 'nuxt-pwa-studio'
const PRECACHE_NAME = `${CACHE_PREFIX}-precache-v3`
const PAGE_CACHE_NAME = `${CACHE_PREFIX}-pages-v3`
const ASSET_CACHE_NAME = `${CACHE_PREFIX}-assets-v3`
const OFFLINE_URL = '/offline.html'

const injectedManifest = self.__WB_MANIFEST || []
const precacheUrls = [
  ...new Set([
    '/',
    OFFLINE_URL,
    ...injectedManifest.map((entry) => typeof entry === 'string' ? entry : entry.url)
  ])
]

const canCache = (response) => (
  response
  && response.ok
  && (response.type === 'basic' || response.type === 'cors')
)

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }

  if (event.data?.type === 'CLEAR_RUNTIME_CACHES') {
    event.waitUntil(Promise.all([
      caches.delete(PAGE_CACHE_NAME),
      caches.delete(ASSET_CACHE_NAME)
    ]))
  }
})

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PRECACHE_NAME)
      .then((cache) => cache.addAll(precacheUrls))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  const activeCaches = new Set([
    PRECACHE_NAME,
    PAGE_CACHE_NAME,
    ASSET_CACHE_NAME
  ])

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith(CACHE_PREFIX) && !activeCaches.has(cacheName))
          .map((cacheName) => caches.delete(cacheName))
      ))
      .then(() => self.clients.claim())
  )
})

const handleNavigation = async (request) => {
  try {
    const response = await fetch(request)

    if (canCache(response)) {
      const cache = await caches.open(PAGE_CACHE_NAME)
      await cache.put(request, response.clone())
    }

    return response
  } catch {
    return (
      await caches.match(request)
      || await caches.match('/')
      || await caches.match(OFFLINE_URL)
      || Response.error()
    )
  }
}

const handleAsset = async (request) => {
  const cachedResponse = await caches.match(request)

  const networkResponse = fetch(request)
    .then(async (response) => {
      if (canCache(response) && new URL(request.url).origin === self.location.origin) {
        const cache = await caches.open(ASSET_CACHE_NAME)
        await cache.put(request, response.clone())
      }
      return response
    })
    .catch(() => null)

  return cachedResponse || await networkResponse || Response.error()
}

self.addEventListener('fetch', (event) => {
  const { request } = event

  if (request.method !== 'GET') return

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(request))
    return
  }

  if (['style', 'script', 'image', 'font'].includes(request.destination)) {
    event.respondWith(handleAsset(request))
  }
})
