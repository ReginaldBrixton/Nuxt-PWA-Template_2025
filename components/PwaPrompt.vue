<script setup>
const { $pwa } = useNuxtApp()

const close = async () => {
  await $pwa.cancelPrompt()
}

const update = async () => {
  await $pwa.updateServiceWorker()
}

const install = async () => {
  await $pwa.install()
}
</script>

<template>
  <div v-if="$pwa?.needRefresh || $pwa?.showInstallPrompt" class="pwa-prompt">
    <div v-if="$pwa.needRefresh" class="update-prompt">
      <p>New content available, click on reload button to update.</p>
      <button @click="update">Reload</button>
      <button @click="close">Close</button>
    </div>

    <div v-if="$pwa.showInstallPrompt" class="install-prompt">
      <p>Install app?</p>
      <button @click="install">Install</button>
      <button @click="$pwa.cancelInstall">Cancel</button>
    </div>
  </div>
</template>

<style scoped>
.pwa-prompt {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

button {
  margin: 0 5px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}

button:hover {
  background: #f0f0f0;
}
</style> 