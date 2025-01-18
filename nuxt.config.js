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
    strategies: 'generateSW',
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'icons/*'],
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
      globPatterns: [
        '**/*.{js,css,html,png,svg,ico,json,woff2}'
      ],
      runtimeCaching: [
        {
          urlPattern: '/_nuxt/builds/**',
          handler: 'CacheFirst',
          options: {
            cacheName: 'nuxt-builds',
            expiration: {
              maxEntries: 200,
              maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
            }
          }
        },
        {
          urlPattern: '/',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'pages',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        }
      ],
      cleanupOutdatedCaches: true,
      sourcemap: false
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600
    },
    devOptions: {
      enabled: true,
      type: 'module',
      suppressWarnings: true,
      navigateFallback: '/',
      disableDevLogs: false
    }
  },

  runtimeConfig: {
    public: {
      pwa: true
    }
  },

  compatibilityDate: '2025-01-07',
})