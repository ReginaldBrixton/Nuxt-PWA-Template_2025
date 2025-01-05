export default defineNuxtPlugin(() => {
  if (process.client) {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      // You can store the event for later use if needed
      window.deferredPrompt = e
    })
  }
}) 