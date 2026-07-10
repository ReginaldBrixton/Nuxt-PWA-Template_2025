export const usePwa = () => {
  const isInstallable = useState('pwa:is-installable', () => false)
  const isInstalled = useState('pwa:is-installed', () => false)
  const isOnline = useState('pwa:is-online', () => true)
  const installError = useState('pwa:install-error', () => '')

  const install = async () => {
    if (!import.meta.client) {
      return false
    }

    const prompt = window.__NUXT_PWA_INSTALL_PROMPT__
    if (!prompt) {
      installError.value = 'Installation is not available in this browser yet.'
      return false
    }

    installError.value = ''
    await prompt.prompt()
    const choice = await prompt.userChoice

    if (choice.outcome === 'accepted') {
      window.__NUXT_PWA_INSTALL_PROMPT__ = null
      localStorage.setItem('pwa-installed', 'true')
      isInstalled.value = true
      isInstallable.value = false
      return true
    }

    return false
  }

  return {
    install,
    installError,
    isInstallable,
    isInstalled,
    isOnline
  }
}
