# Nuxt PWA Studio

A production-minded Nuxt 3 starter for installable and resilient web applications. It includes a responsive application shell, system-aware theming, accessible navigation, centralized installation state, update notifications, runtime caching, a dedicated offline fallback, SEO metadata, and GitHub Actions build verification.

## What is included

- Nuxt 3 and Vue 3 Composition API
- Tailwind CSS with light and dark design tokens
- System, light, and dark theme preferences through Nuxt Color Mode
- Responsive desktop and mobile navigation
- Keyboard-accessible skip navigation and visible focus states
- Custom inject-manifest service worker
- Network-first page navigation with cached route fallback
- Stale-while-revalidate caching for same-origin assets
- Install, update, offline-ready, and connectivity notifications
- Branded offline and application error pages
- Web app manifest shortcuts and platform metadata
- Automated production build and PWA artifact checks

## Requirements

- Node.js 20 or later
- pnpm 9.15.2, as declared in `package.json`

The repository includes an `.nvmrc` file for Node version managers.

## Start locally

```bash
corepack enable
pnpm install
pnpm dev
```

The development server is available at `http://localhost:3000`.

## Production validation

```bash
pnpm build
pnpm preview
```

The build command generates the required PWA icons before Nuxt compiles the application. Icon-generation failures return a non-zero exit code.

## Project structure

```text
.
├── assets/css/
│   ├── main.css                 # Global styles, motion, focus, and grid utilities
│   └── theme.css                # Light and dark design tokens
├── components/
│   ├── PwaPrompt.vue            # Install, update, connectivity, and offline-ready UI
│   └── ThemeToggle.vue          # System, light, and dark preference control
├── composables/
│   └── usePwa.js                # Reusable installation and connectivity state
├── layouts/
│   └── default.vue              # Responsive application shell
├── pages/
│   ├── index.vue                # Product landing page
│   └── about.vue                # Architecture and implementation guide
├── plugins/
│   └── pwa-state.client.js      # One-time browser event registration
├── public/
│   ├── offline.html             # Standalone offline fallback
│   └── sw.js                    # Custom service worker source
├── scripts/
│   └── generate-pwa-icons.js    # Reproducible icon generation
├── error.vue                    # Branded Nuxt error page
└── nuxt.config.js               # Metadata, PWA manifest, headers, and modules
```

## PWA architecture

The project uses `@vite-pwa/nuxt` with the `injectManifest` strategy.

1. During the production build, Vite PWA injects the generated asset manifest into `public/sw.js` at `self.__WB_MANIFEST`.
2. The service worker precaches the application shell and offline page.
3. Page navigations use the network first. Successful responses are stored in a dedicated page cache.
4. If navigation fails, the worker checks the requested page cache, the cached home shell, and finally `offline.html`.
5. Same-origin scripts, styles, images, and fonts use a stale-while-revalidate strategy.
6. Old caches owned by this application are removed during service-worker activation.

Browser installation events are registered once in `plugins/pwa-state.client.js`. Components consume shared state through `composables/usePwa.js`, preventing duplicated listeners when several parts of the interface need installation status.

## Available scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Nuxt development server |
| `pnpm build` | Generate icons and create a production build |
| `pnpm generate` | Generate icons and create a static build |
| `pnpm preview` | Preview the production output |
| `pnpm generate-icons` | Regenerate 64, 192, and 512 pixel icons |
| `pnpm clean` | Remove generated Nuxt and build directories |
| `pnpm clean-up` | Compatibility alias for `pnpm clean` |

## Continuous integration

The GitHub Actions workflow runs for pull requests and pushes targeting `main`, `Beta`, and `Dev`. It:

1. Installs dependencies with pnpm on Node.js 20.
2. Runs the complete production build.
3. Verifies that the manifest, service worker, and offline page were generated.
4. Confirms that the generated service worker contains the offline fallback.

## Customization checklist

Before using the starter for a new product:

- Replace the product name and description in `nuxt.config.js`.
- Replace the generated placeholder icon artwork in `scripts/generate-pwa-icons.js` or supply branded icons.
- Update the repository and documentation links in the layout and pages.
- Review the runtime cache rules in `public/sw.js` for your data sensitivity and API behavior.
- Add product-specific routes, analytics, authentication, and tests as required.

## Deployment

Follow the Nuxt deployment guidance for the chosen hosting platform. After deployment, confirm that:

- `/manifest.webmanifest` is served with a valid manifest content type.
- `/sw.js` is served from the application origin and root scope.
- `/offline.html` is publicly accessible.
- HTTPS is enabled, except for local development.
- The browser installation prompt and update notification behave as expected.
