export default {
  registerType: 'autoUpdate',
  manifest: {
    name: 'My PWA App',
    short_name: 'My PWA',
    description: 'A Progressive Web Application built with Nuxt 3',
    theme_color: '#ffffff',
    background_color: '#ffffff',
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
    runtimeCaching: [
      {
        urlPattern: '/',
        handler: 'NetworkFirst',
        options: {
          cacheName: 'start-url',
          expiration: {
            maxEntries: 1,
            maxAgeSeconds: 24 * 60 * 60 // 24 hours
          }
        }
      }
    ],
    cleanupOutdatedCaches: true
  },
  client: {
    installPrompt: true,
    periodicSyncForUpdates: 3600
  },
  devOptions: {
    enabled: true,
    suppressWarnings: true,
    type: 'module',
    navigateFallback: '/'
  }
}
