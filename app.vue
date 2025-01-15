<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
    <div class="fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div>
    <NuxtLayout>
      <NuxtPwaAssets />
      <PwaPrompt />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Initialize theme class on body
onMounted(() => {
  // Add min-height to prevent layout shift
  document.body.style.minHeight = '100vh'
  
  // Set initial color scheme meta tag
  const metaThemeColor = document.querySelector('meta[name="theme-color"]')
  if (metaThemeColor) {
    if (document.documentElement.classList.contains('dark')) {
      metaThemeColor.setAttribute('content', '#111827') // dark mode background
    } else {
      metaThemeColor.setAttribute('content', '#ffffff') // light mode background
    }
  }
})
</script>

<style scoped>
/* Add your CSS styles here */
</style>
