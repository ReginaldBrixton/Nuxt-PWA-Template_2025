<template>
  <ClientOnly>
    <div>
      <!-- Persistent Install Button in Header/Navigation -->
      <div v-if="isInstallable" class="fixed top-4 right-4 z-[9999]">
        <button 
          @click="install"
          class="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Install App
        </button>
      </div>

      <!-- Update Notification -->
      <div v-if="$pwa?.needRefresh" class="fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg z-[9999]">
        <p class="text-gray-700 mb-2">
          New content available!
        </p>
        <button 
          @click="update"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Update Now
        </button>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const { $pwa } = useNuxtApp()
const { isInstallable, install: pwaInstall } = usePwa()

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
  } catch (err) {
    console.error('Failed to install:', err) 
  }
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>