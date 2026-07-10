const isDevelopment = process.env.NODE_ENV !== 'production'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-07',

  devtools: {
    enabled: isDevelopment
  },

  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  colorMode: {
    classSuffix: '',
    fallback: 'light',
    preference: 'system',
    storageKey: 'nuxt-color-mode'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Nuxt PWA Studio',
      titleTemplate: '%s | Nuxt PWA Studio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'A production-minded Nuxt starter with offline support, installation, accessible navigation, and theme-aware design.' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'color-scheme', content: 'light dark' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { property: 'og:site_name', content: 'Nuxt PWA Studio' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/icons/192x192.png' }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  routeRules: {
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
      }
    }
  },

  pwa: {
    strategies: 'injectManifest',
    srcDir: 'public',
    filename: 'sw.js',
    registerType: 'prompt',
    injectRegister: 'auto',
    includeAssets: [
      'favicon.ico',
      'offline.html',
      'icons/64x64.png',
      'icons/192x192.png',
      'icons/512x512.png'
    ],
    manifest: {
      id: '/',
      name: 'Nuxt PWA Studio',
      short_name: 'PWA Studio',
      description: 'A production-minded Nuxt starter for installable and resilient web applications.',
      theme_color: '#020617',
      background_color: '#020617',
      display: 'standalone',
      display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
      orientation: 'any',
      scope: '/',
      start_url: '/',
      categories: ['developer tools', 'productivity'],
      shortcuts: [
        {
          name: 'Open home',
          short_name: 'Home',
          url: '/',
          icons: [{ src: 'icons/192x192.png', sizes: '192x192', type: 'image/png' }]
        },
        {
          name: 'View architecture',
          short_name: 'About',
          url: '/about',
          icons: [{ src: 'icons/192x192.png', sizes: '192x192', type: 'image/png' }]
        }
      ],
      icons: [
        {
          src: 'icons/64x64.png',
          sizes: '64x64',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'icons/192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'icons/512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'icons/512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}'],
      maximumFileSizeToCacheInBytes: 4 * 1024 * 1024
    },
    client: {
      periodicSyncForUpdates: 3600
    },
    devOptions: {
      enabled: isDevelopment,
      suppressWarnings: true,
      type: 'module'
    }
  }
})
