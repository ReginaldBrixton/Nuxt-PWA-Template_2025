# Nuxt Minimal Starter

This is a minimal starter template for Nuxt 3 applications. It includes basic configurations and dependencies to get you started quickly.

## Documentation

For more information, refer to the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction).

## Setup

To set up the project, install the dependencies using your preferred package manager:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview the production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## PWA Support

This project includes support for Progressive Web Apps (PWA). The PWA functionality is implemented in the [`usePwa`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fe%3A%2FNuxt-PWA-Template_2025%2Fcomposables%2FusePwa.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22usePwa%22%2C%2284f1a30c-2a8f-4140-855c-2d2355f6588d%22%5D "e:\Nuxt-PWA-Template_2025\composables\usePwa.js") composable and the [`PwaPrompt`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fe%3A%2FNuxt-PWA-Template_2025%2Fcomponents%2FPwaPrompt.vue%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22PwaPrompt%22%2C%2284f1a30c-2a8f-4140-855c-2d2355f6588d%22%5D "e:\Nuxt-PWA-Template_2025\components\PwaPrompt.vue") component.

## Deployment

For deployment instructions, check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## Additional Scripts

Additional scripts available in the project:

- **Clean Up**: Remove [`node_modules`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fe%3A%2FNuxt-PWA-Template_2025%2Fnode_modules%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2284f1a30c-2a8f-4140-855c-2d2355f6588d%22%5D "e:\Nuxt-PWA-Template_2025\node_modules"), [`.nuxt`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fe%3A%2FNuxt-PWA-Template_2025%2F.nuxt%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2284f1a30c-2a8f-4140-855c-2d2355f6588d%22%5D "e:\Nuxt-PWA-Template_2025\.nuxt"), [`.output`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fe%3A%2FNuxt-PWA-Template_2025%2F.output%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2284f1a30c-2a8f-4140-855c-2d2355f6588d%22%5D "e:\Nuxt-PWA-Template_2025\.output"), and [`pnpm-lock.yaml`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fe%3A%2FNuxt-PWA-Template_2025%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2284f1a30c-2a8f-4140-855c-2d2355f6588d%22%5D "e:\Nuxt-PWA-Template_2025\pnpm-lock.yaml") directories.
  ```bash
  npm run clean-up
  ```

## License

This project is licensed under the MIT License.