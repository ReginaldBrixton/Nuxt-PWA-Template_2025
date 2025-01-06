<template>
  <ClientOnly>
    <Teleport to="body">
      <div v-if="forceShow" class="fixed bottom-5 right-5 bg-white p-5 rounded-lg shadow-lg z-[9999]">
        <div class="space-y-4">
          <p class="text-gray-700 font-medium">
            Would you like to install this app?
            <span class="text-sm text-gray-500 ml-2">({{ countdown }}s)</span>
          </p>
          <div class="flex gap-2">
            <button 
              @click="install"
              class="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors duration-200"
            >
              Install
            </button>
            <button 
              @click="close"
              class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </div>

        <div v-if="$pwa?.needRefresh" class="mt-4 space-y-4 border-t pt-4">
          <p class="text-gray-700">
            New content available. Click reload to update.
          </p>
          <button 
            @click="update"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Reload
          </button>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
const { $pwa } = useNuxtApp()
const { isInstallable, install: pwaInstall } = usePwa()

const isVisible = ref(false)
const countdown = ref(5)
let timer = null

const close = async () => {
  if ($pwa?.cancelPrompt) {
    await $pwa.cancelPrompt()
  }
  isVisible.value = false
  if (timer) {
    clearInterval(timer)
  }
}

const update = async () => {
  try {
    if ($pwa?.updateServiceWorker) {
      await $pwa.updateServiceWorker()
      window.location.reload()
    }
  } catch (err) {
    console.error('Failed to update:', err)
  }
}

const install = async () => {
  try {
    await pwaInstall()
    isVisible.value = false
    if (timer) {
      clearInterval(timer)
    }
  } catch (err) {
    console.error('Failed to install:', err) 
  }
}

const forceShow = computed(() => {
  return isVisible.value && countdown.value > 0 && isInstallable.value
})

onMounted(() => {
  if (process.client) {
    // Start countdown when installable
    watch(isInstallable, (newValue) => {
      if (newValue) {
        isVisible.value = true
        timer = setInterval(() => {
          countdown.value--
          if (countdown.value <= 0) {
            clearInterval(timer)
            isVisible.value = false
          }
        }, 1000)
      }
    }, { immediate: true })
  }
})

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
/* Add any component-specific styles here */
</style>