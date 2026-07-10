<template>
  <ClientOnly>
    <button 
      class="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-gray-700 transition-colors"
      @click="toggleColorMode"
      aria-label="Toggle color mode"
    >
      <span class="sr-only">{{ colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode' }}</span>
      <svg v-if="colorMode.value === 'dark'" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <svg v-else class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  </ClientOnly>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useColorMode } from '#imports'

const colorMode = useColorMode()

// Update theme-color meta tag when color mode changes
watch(() => colorMode.value, (newValue) => {
  if (process.client) {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    metaThemeColor?.setAttribute('content', newValue === 'dark' ? '#111827' : '#ffffff')
  }
}, { immediate: true })

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// Initialize color mode based on system preference if not already set
onMounted(() => {
  if (!colorMode.preference) {
    colorMode.preference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
})
</script>