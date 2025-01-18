// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode'
  ],

  vue: {
    config: {
      silent: true,
      productionTip: false,
      compilerOptions: {
        isCustomElement: (tag) => ['theme-toggle'].includes(tag)
      }
    }
  },

  components: {
    dirs: ['~/components']
  },

  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'nuxt-color-mode'
  },

  css: [
    '~/assets/css/transitions.css',
    '~/assets/css/main.css'
  ],

  build: {
    transpile: ['vue-sonner', '@vite-pwa/nuxt']
  },

  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  experimental: {
    inlineSSRStyles: false,
    renderJsonPayloads: false,
    payloadExtraction: false
  },

  app: {
    head: {
      title: 'My PWA App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  pwa: {
    strategies: 'injectManifest',
    registerType: 'autoUpdate',
    manifest: {
      name: 'My PWA App',
      short_name: 'My PWA',
      description: 'A Progressive Web Application built with Nuxt 3',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: 'icons/64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'icons/192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icons/512x512.png',
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
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
            },
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

  runtimeConfig: {
    public: {
      pwa: true
    }
  },

  compatibilityDate: '2025-01-07',
})

