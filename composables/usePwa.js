export const usePwa = () => {
  const deferredPrompt = ref(null)
  const isInstallable = ref(false)

  const install = async () => {
    if (!deferredPrompt.value) return

    deferredPrompt.value.prompt()
    const { outcome } = await deferredPrompt.value.userChoice

    if (outcome === 'accepted') {
      deferredPrompt.value = null
      isInstallable.value = false
    }
  }

  onMounted(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      deferredPrompt.value = e
      isInstallable.value = true
    })
  })

  return {
    install,
    isInstallable
  }
} 