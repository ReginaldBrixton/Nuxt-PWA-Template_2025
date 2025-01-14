export default defineNuxtPlugin(() => {
  // Only run in client-side environment
  if (!process.client) {
    return
  }

  // Handle service worker updates with improved error handling
  const handleServiceWorkerUpdate = (registration) => {
    try {
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing

        newWorker?.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            const updateConfirm = window.confirm(
              'New content is available! Would you like to refresh to see the updates?'
            )
            if (updateConfirm) {
              window.location.reload()
            }
          }
        })
      })
    } catch (error) {
      const errorInfo = {
        name: error.name,
        message: error.message,
        fileName: error.fileName,
        lineNumber: error.lineNumber
      }

      if (process.env.NODE_ENV === 'development') {
        errorInfo.stack = error.stack
      }

      console.error('Error handling service worker update:', errorInfo)
    }
  }

  // Register service worker when DOM is fully loaded
  window.addEventListener('load', async () => {
    // Check if service worker is supported
    if (!('serviceWorker' in navigator)) {
      console.log('ServiceWorker is not supported in this browser')
      return
    }

    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        type: 'module'
      })

      console.info('ServiceWorker registration successful', {
        scope: registration.scope,
        active: !!registration.active,
        installing: !!registration.installing,
        waiting: !!registration.waiting
      })

      // Set up update handling
      handleServiceWorkerUpdate(registration)

      // Check for updates every hour
      setInterval(() => registration.update(), 60 * 60 * 1000)

    } catch (error) {
      // Log detailed error information
      const errorDetails = {
        name: error.name,
        message: error.message,
        fileName: error.fileName,
        lineNumber: error.lineNumber
      }

      if (process.env.NODE_ENV === 'development') {
        errorDetails.stack = error.stack
        console.warn('PWA functionality will not be available - Service Worker failed to register')
      }

      console.error('ServiceWorker registration failed:', errorDetails)

      if (typeof window.reportError === 'function') {
        window.reportError('ServiceWorker registration failed', error)
      }
    }
  })
})