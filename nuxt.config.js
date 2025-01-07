// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],

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
    renderJsonPayloads: false
  },

  runtimeConfig: {
    public: {
      pwa: true
    }
  },

  app: {
    baseURL: '/',
    head: {
      title: 'My PWA App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },

  ssr: true,
  compatibilityDate: '2025-01-07'
})