export default defineNuxtPlugin(() => {
  if (process.client) {
    const { isInstallable } = usePwa()

    // Optional: Log PWA status
    watch(isInstallable, (value) => {
      console.log('PWA installable:', value)
    })
  }
}) 