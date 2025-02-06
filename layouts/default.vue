<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900">
    <nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <img src="/icons/32x32.png" alt="Logo" class="w-8 h-8" />
              <span class="text-xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                Nuxt PWA
              </span>
            </NuxtLink>
            
            <div class="hidden sm:ml-6 sm:flex sm:space-x-4">
              <NuxtLink 
                to="/" 
                class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                :class="route.path === '/' ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'"
              >
                Home
              </NuxtLink>
              <NuxtLink 
                to="/about" 
                class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                :class="route.path === '/about' ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'"
              >
                About
              </NuxtLink>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>

    <main class="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <slot />
    </main>

    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-500 dark:text-gray-400">
          Built with Nuxt 3 and PWA capabilities
        </p>
      </div>
    </footer>

    <PwaPrompt />
  </div>
</template>

<script setup>
import ThemeToggle from '~/components/ThemeToggle.vue'
const route = useRoute()
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
