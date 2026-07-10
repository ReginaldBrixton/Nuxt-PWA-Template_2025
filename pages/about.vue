<template>
  <div class="relative py-16 bg-white dark:bg-gray-900 overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <span class="block text-base text-center text-emerald-600 dark:text-emerald-500 font-semibold tracking-wide uppercase">About</span>
          <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Our Nuxt PWA Template
          </span>
        </h1>
        <p class="mt-8 text-xl text-gray-500 dark:text-gray-400 leading-8 animate-fade-in">
          This template is built with <span class="text-emerald-600 dark:text-emerald-500 font-medium transition-colors duration-200 hover:text-emerald-700 dark:hover:text-emerald-400">modern web technologies</span> to provide a seamless Progressive Web App experience. It combines the power of <a href="https://nuxt.com" target="_blank" rel="noopener" class="text-emerald-600 dark:text-emerald-500 font-medium hover:underline transition-all duration-200">Nuxt 3</a> with <span class="text-emerald-600 dark:text-emerald-500 font-medium">PWA capabilities</span>, offering both exceptional performance and rich functionality.
        </p>
      </div>
      <div class="mt-12 mx-auto max-w-prose">
        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-sm hover:shadow-md transition-shadow duration-200">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Key Features
          </h2>
          <ul class="list-none space-y-3 text-gray-500 dark:text-gray-400">
            <li class="flex items-center">
              <svg class="h-5 w-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Built with Nuxt 3 and Vue 3 Composition API
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Progressive Web App (PWA) capabilities
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Dark mode support with smooth transitions
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Responsive design using Tailwind CSS
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Modern animations and transitions
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              SEO optimized
            </li>
          </ul>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-sm hover:shadow-md transition-shadow duration-200">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            Technologies Used
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <span class="font-semibold mr-2">Frontend Framework:</span>
              <span class="text-emerald-600 dark:text-emerald-400">Nuxt 3 (Vue 3)</span>
            </div>
            <div class="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <span class="font-semibold mr-2">Styling:</span>
              <span class="text-emerald-600 dark:text-emerald-400">Tailwind CSS</span>
            </div>
            <div class="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <span class="font-semibold mr-2">PWA:</span>
              <span class="text-emerald-600 dark:text-emerald-400">@vite-pwa/nuxt</span>
            </div>
            <div class="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <span class="font-semibold mr-2">Package Manager:</span>
              <span class="text-emerald-600 dark:text-emerald-400">PNPM</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Getting Started
          </h2>
          <p class="text-gray-500 dark:text-gray-400 mb-4">
            To get started with this template, you can clone the repository and install dependencies using PNPM:
          </p>
          <div class="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto mb-4">
            <code class="text-sm text-emerald-400 font-mono">pnpm install
pnpm dev</code>
          </div>

          <p class="text-gray-500 dark:text-gray-400">
            This will start the development server, and you can begin customizing the template to suit your needs.
          </p>
          <div class="mt-8 flex justify-center">
            <a href="https://example.com/docs" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200">
              View Documentation
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
