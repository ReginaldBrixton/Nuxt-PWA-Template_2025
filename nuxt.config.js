// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],

  devtools: { enabled: true },

  app: {
    head: {
      title: 'My PWA App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'description', content: 'My Progressive Web App' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '@32x32.png' }
      ]
    }
  },

  pwa: {
    registerType: 'autoUpdate',
    strategies: 'generateSW',
    manifest: {
      name: 'My PWA App',
      short_name: 'PWA App',
      description: 'My Progressive Web App',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '@64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: '@144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: '@192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '@512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/placehold\.co\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'image-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      type: 'module'
    }
  },

  compatibilityDate: '2025-01-05',

  css: [
    '~/assets/css/main.css',
  ],
})