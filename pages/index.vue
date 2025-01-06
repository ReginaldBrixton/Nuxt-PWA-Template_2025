<script setup>
const { $pwa } = useNuxtApp()

const title = ref('Welcome to My PWA')
const message = ref('This is a sample page demonstrating PWA capabilities')

const checkInstallation = computed(() => {
  return $pwa?.showInstallPrompt ? 'You can install this app!' : 'App is ready to use'
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
        {{ title }}
      </h1>
      <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{{ message }}</p>
      
      <div class="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 mb-12">
        <span class="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
        </span>
        {{ checkInstallation }}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <div class="text-emerald-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Offline Support</h3>
          <p class="text-gray-600">Access your content anytime, anywhere - even without an internet connection!</p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <div class="text-blue-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">One-Click Install</h3>
          <p class="text-gray-600">Install instantly to your device for a native app-like experience</p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <div class="text-purple-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Seamless Updates</h3>
          <p class="text-gray-600">Always enjoy the latest features with automatic background updates</p>
        </div>
      </div>
    </div>
  </div>
</template>
