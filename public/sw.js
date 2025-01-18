// Service worker source
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING')
    self.skipWaiting()
})

// Inject manifest here
self.__WB_MANIFEST

const CACHE_NAME = 'my-pwa-cache-v1'

// Cache all the files to make a PWA
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Our application only has two files here index.html and manifest.json
        // but you can add more such as style.css as your app grows
        return cache.addAll([
          '/',
          '/manifest.json'
        ])
      })
  )
})

// Our service worker will intercept all fetch requests
// and check if we have cached the file
// if so it will serve the cached file
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response
        }
        return fetch(event.request)
      })
      .catch(() => {
        // If both fail, show a generic fallback:
        return caches.match('/')
      })
  )
})

// Clear old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key)
          }
        })
      )
    })
  )
}) 