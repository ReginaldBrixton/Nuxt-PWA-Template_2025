export default defineNuxtPlugin(() => {
  if (process.client) {
    window.addEventListener('load', async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/',
            type: 'module'
          })
          
          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            newWorker?.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, show update prompt
                console.log('New content is available; please refresh.')
              }
            })
          })

          console.log('ServiceWorker registration successful')
        } catch (error) {
          console.error('ServiceWorker registration failed:', error)
        }
      }
    })
  }
}) 