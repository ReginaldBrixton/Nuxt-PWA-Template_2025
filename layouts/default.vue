<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <img src="~/public/icons/32x32.png" alt="Logo" class="w-8 h-8" />
              <span class="text-xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                Nuxt PWA
              </span>
            </NuxtLink>
            
            <div class="hidden sm:ml-6 sm:flex sm:space-x-4">
              <NuxtLink 
                to="/" 
                class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                :class="$route.path === '/' ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'"
              >
                Home
              </NuxtLink>
              <NuxtLink 
                to="/about" 
                class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                :class="$route.path === '/about' ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'"
              >
                About
              </NuxtLink>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <button 
              class="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-gray-700 transition-colors"
              @click="toggleColorMode"
            >
              <span v-if="colorMode.value === 'dark'" class="sr-only">Switch to light mode</span>
              <span v-else class="sr-only">Switch to dark mode</span>
              <svg v-if="colorMode.value === 'dark'" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <slot />
    </main>

    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
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
const colorMode = useColorMode()
const route = useRoute()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
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
