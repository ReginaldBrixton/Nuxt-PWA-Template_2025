<script setup lang="ts">
const features = [
  {
    title: 'Offline Support',
    description: 'Access your content anytime, anywhere - even without an internet connection!',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
  },
  {
    title: 'Modern UI',
    description: 'Beautiful and responsive design with dark mode support',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Fast Performance',
    description: 'Optimized for speed and efficiency across all devices',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
]
</script>
<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
    <main>
      <div class="container mx-auto px-4 py-16">
        <!-- Hero Section -->
        <div class="relative pt-6 pb-16 sm:pb-24">
          <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div class="text-center">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span class="block">Welcome to</span>
                <span class="block text-emerald-600 dark:text-emerald-500">Nuxt PWA Template</span>
              </h1>
              <p class="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                A modern Progressive Web App template built with Nuxt 3, featuring offline support and a beautiful responsive design.
              </p>
            </div>
          </div>
        </div>

        <!-- Features Section -->
        <div class="relative bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
          <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 class="text-base font-semibold tracking-wider text-emerald-600 dark:text-emerald-500 uppercase">Features</h2>
            <p class="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
              Everything you need to get started
            </p>
            <div class="mt-12">
              <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="feature in features"
                  :key="feature.title"
                  class="pt-6"
                >
                  <div class="flow-root bg-white dark:bg-gray-900 rounded-lg px-6 pb-8 h-full transform transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                    <div class="-mt-6">
                      <div>
                        <span class="inline-flex items-center justify-center p-3 bg-emerald-500 rounded-md shadow-lg">
                          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                          </svg>
                        </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">{{ feature.title }}</h3>
                      <p class="mt-5 text-base text-gray-500 dark:text-gray-400">
                        {{ feature.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
