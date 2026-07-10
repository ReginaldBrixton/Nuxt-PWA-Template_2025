# Nuxt 3 PWA Starter

A minimal Nuxt 3 starter with Tailwind CSS, dark mode, install prompts, offline caching, and service-worker update handling.

## Requirements

- Node.js 20 or later
- pnpm 9 (the repository declares `pnpm@9.15.2`)

## Setup

```bash
corepack enable
pnpm install
pnpm dev
```

The development server runs at `http://localhost:3000`.

## Production

```bash
pnpm build
pnpm preview
```

The build command generates the PWA icons before running the Nuxt production build. Icon-generation failures return a non-zero exit code so CI cannot report a false success.

## PWA support

PWA integration is provided by [`@vite-pwa/nuxt`](https://vite-pwa-org.netlify.app/frameworks/nuxt.html) using an injected service-worker manifest.

- [`public/sw.js`](./public/sw.js) consumes the injected asset manifest, precaches the application shell, and provides navigation fallbacks.
- [`composables/usePwa.js`](./composables/usePwa.js) tracks browser installation events.
- [`components/PwaPrompt.vue`](./components/PwaPrompt.vue) exposes install and update prompts.
- [`nuxt.config.js`](./nuxt.config.js) defines the web app manifest and PWA settings.

## Available scripts

- `pnpm dev` cleans Nuxt's generated state and starts the development server.
- `pnpm build` generates icons and creates a production build.
- `pnpm generate` creates a statically generated build.
- `pnpm preview` previews the production build.
- `pnpm generate-icons` regenerates the 64, 192, and 512 pixel PWA icons.
- `pnpm clean-up` removes `node_modules`, `.nuxt`, and `.output`. It intentionally preserves package-manager lockfiles.

## Deployment

Review the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for platform-specific instructions. Confirm after deployment that the web app manifest and generated service worker are served from the application origin.
