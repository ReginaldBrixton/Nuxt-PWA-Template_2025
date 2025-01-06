// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt', '@nuxtjs/tailwindcss'],
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
        { rel: 'icon', type: 'image/png', href: '/icons/32x32.png' }
      ]
    }
  },

  pwa: {
    manifest: {
      name: 'Nuxt PWA Template',
      short_name: 'Nuxt PWA',
      description: 'A Nuxt 3 PWA Template',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'icons/32x32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          src: 'icons/64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'icons/144x144.png',
          sizes: '144x144',
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
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-01-06'
})