<template>
  <main>
    <div class="fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div>
    <NuxtLayout>
      <NuxtPwaAssets />
      <PwaPrompt />
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

const initializeMinHeight = () => {
  document.body.style.minHeight = '100vh'
}

const updateThemeColor = () => {
  const metaThemeColor = document.querySelector('meta[name="theme-color"]')
  if (!metaThemeColor) return
  
  const isDarkMode = document.documentElement.classList.contains('dark')
  const themeColor = isDarkMode ? '#111827' : '#ffffff'
  metaThemeColor.setAttribute('content', themeColor)
}

onMounted(() => {
  initializeMinHeight()
  updateThemeColor()
})
</script>

<style scoped>
/* Add your CSS styles here */
</style>
