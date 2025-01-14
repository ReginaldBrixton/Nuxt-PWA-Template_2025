export const usePwa = () => {
  if (process.server) return {
    install: () => {},
    isInstallable: ref(false),
    hasInstalled: ref(false)
  }

  const deferredPrompt = ref(null)
  const isInstallable = ref(false)
  const hasInstalled = ref(false)

  const install = async () => {
    if (!deferredPrompt.value) return

    try {
      deferredPrompt.value.prompt()
      const { outcome } = await deferredPrompt.value.userChoice

      if (outcome === 'accepted') {
        deferredPrompt.value = null
        isInstallable.value = false
        hasInstalled.value = true
        localStorage.setItem('pwa-installed', 'true')
      }
    } catch (error) {
      console.error('Installation failed:', error)
    }
  }

  // Check if already installed
  if (process.client) {
    hasInstalled.value = localStorage.getItem('pwa-installed') === 'true'
    
    // Listen for installation event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      deferredPrompt.value = e
      isInstallable.value = true
    })

    // Listen for successful installation
    window.addEventListener('appinstalled', () => {
      hasInstalled.value = true
      isInstallable.value = false
      localStorage.setItem('pwa-installed', 'true')
    })
  }

  return {
    install,
    isInstallable: computed(() => isInstallable.value && !hasInstalled.value),
    hasInstalled
  }
}