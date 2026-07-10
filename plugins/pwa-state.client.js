export default defineNuxtPlugin(() => {
  if (window.__NUXT_PWA_STATE_READY__) {
    return
  }

  window.__NUXT_PWA_STATE_READY__ = true

  const isInstallable = useState('pwa:is-installable', () => false)
  const isInstalled = useState('pwa:is-installed', () => false)
  const isOnline = useState('pwa:is-online', () => navigator.onLine)

  const detectStandalone = () => (
    window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true
  )

  const syncInstalledState = () => {
    isInstalled.value = detectStandalone() || localStorage.getItem('pwa-installed') === 'true'
    if (isInstalled.value) {
      isInstallable.value = false
    }
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
    window.__NUXT_PWA_INSTALL_PROMPT__ = event
    isInstallable.value = !isInstalled.value
  })

  window.addEventListener('appinstalled', () => {
    window.__NUXT_PWA_INSTALL_PROMPT__ = null
    localStorage.setItem('pwa-installed', 'true')
    isInstalled.value = true
    isInstallable.value = false
  })

  window.addEventListener('online', () => {
    isOnline.value = true
  })

  window.addEventListener('offline', () => {
    isOnline.value = false
  })

  syncInstalledState()
})
