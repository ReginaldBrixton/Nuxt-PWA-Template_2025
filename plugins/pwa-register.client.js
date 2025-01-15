export default defineNuxtPlugin(() => {
  // Only run in client-side environment
  if (!process.client) return

  // Register service worker when DOM is fully loaded
  window.addEventListener('load', async () => {
    // Check if service worker is supported
    if (!('serviceWorker' in navigator)) {
      console.log('ServiceWorker is not supported in this browser')
      return
    }

    try {
      // Register the service worker
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        type: 'module'
      })
          
      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing
        
        newWorker?.addEventListener('statechange', () => {
          switch (newWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                // New content is available
                const updateConfirm = window.confirm(
                  'New content is available! Would you like to refresh to see the updates?'
                )
                if (updateConfirm) window.location.reload()
              }
              break
            case 'redundant':
              console.log('The installing service worker became redundant')
              break
          }
        })
      })

      // Check for updates every hour
      setInterval(() => {
        registration.update()
      }, 60 * 60 * 1000)

      console.log('ServiceWorker registration successful')
    } catch (error) {
      console.error('ServiceWorker registration failed:', error)
    }
  })
})