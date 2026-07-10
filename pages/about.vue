<script setup lang="ts">
useSeoMeta({
  title: 'About the starter',
  description: 'Understand the architecture, PWA strategy, accessibility decisions, and development workflow behind Nuxt PWA Studio.'
})

const stack = [
  { name: 'Nuxt 3', role: 'SSR, routing, application structure, and prerendering' },
  { name: 'Vue 3', role: 'Composition API and reactive interface state' },
  { name: 'Tailwind CSS', role: 'Responsive, theme-aware presentation' },
  { name: 'Vite PWA', role: 'Manifest generation, registration, and precache injection' },
  { name: 'Nuxt Color Mode', role: 'System, light, and dark preference management' },
  { name: 'GitHub Actions', role: 'Independent production-build verification' }
]

const principles = [
  {
    title: 'Understandable over clever',
    body: 'The project stays small enough to audit. PWA state, service-worker behavior, layout, and page-level content are separated without introducing a large abstraction layer.'
  },
  {
    title: 'Progressive enhancement',
    body: 'The site remains a normal web application first. Installation, offline caching, update prompts, and standalone display are added when the browser supports them.'
  },
  {
    title: 'Accessible defaults',
    body: 'Semantic landmarks, keyboard navigation, visible focus states, restrained motion, usable color contrast, and status announcements are part of the shell rather than optional cleanup.'
  },
  {
    title: 'Honest offline behavior',
    body: 'Navigation uses the network when available, caches successful same-origin responses, and falls back to a dedicated offline screen when the requested content has never been visited.'
  }
]

const structure = [
  { path: 'layouts/default.vue', description: 'Responsive navigation, footer, skip link, and global PWA notifications.' },
  { path: 'plugins/pwa-state.client.js', description: 'Single browser-level listener registration for installation and connectivity events.' },
  { path: 'composables/usePwa.js', description: 'Reusable install action and reactive installed, installable, and online state.' },
  { path: 'public/sw.js', description: 'Custom install, activation, runtime caching, and offline fallback strategy.' },
  { path: 'nuxt.config.js', description: 'Application metadata, color mode, PWA manifest, prerendering, and build configuration.' }
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:py-28">
      <div class="app-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div class="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">About the foundation</p>
        <h1 class="mt-5 text-5xl font-bold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-6xl">A starter should remove uncertainty, not hide complexity.</h1>
        <p class="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
          Nuxt PWA Studio is structured as a readable reference implementation for teams that need installation, offline resilience, theming, metadata, and accessibility without adopting a large design system.
        </p>
      </div>
    </section>

    <section class="py-20 dark:bg-slate-950 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Design principles</p>
            <h2 class="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Decisions that keep the template useful after the demo.</h2>
          </div>
          <div class="grid gap-5 sm:grid-cols-2">
            <article v-for="principle in principles" :key="principle.title" class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 class="text-lg font-semibold text-slate-950 dark:text-white">{{ principle.title }}</h3>
              <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">{{ principle.body }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Technology stack</p>
          <h2 class="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white">A deliberate set of tools with clear responsibilities.</h2>
        </div>

        <dl class="mt-12 divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
          <div v-for="item in stack" :key="item.name" class="grid gap-2 px-6 py-5 sm:grid-cols-[12rem_1fr] sm:items-center">
            <dt class="font-semibold text-slate-950 dark:text-white">{{ item.name }}</dt>
            <dd class="text-slate-600 dark:text-slate-300">{{ item.role }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="py-20 dark:bg-slate-950 sm:py-28">
      <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Repository map</p>
          <h2 class="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white">The important behavior is easy to locate.</h2>
          <p class="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">Product teams can replace pages and branding while keeping the tested application shell and PWA plumbing intact.</p>
        </div>

        <div class="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl dark:border-slate-800 dark:bg-black">
          <div class="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span class="font-mono text-sm text-slate-400">project structure</span>
            <span class="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">core files</span>
          </div>
          <div class="divide-y divide-white/10">
            <div v-for="item in structure" :key="item.path" class="grid gap-2 px-5 py-5 sm:grid-cols-[13rem_1fr] sm:gap-5">
              <code class="text-sm text-emerald-300">{{ item.path }}</code>
              <p class="text-sm leading-6 text-slate-400">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
      <div class="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-12">
        <div class="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Development commands</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">Install, develop, and validate with pnpm.</h2>
            <p class="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">The production build generates PWA icons before Nuxt compiles, then CI repeats the same command in a clean environment.</p>
          </div>
          <div class="min-w-0 rounded-2xl bg-slate-950 p-5 font-mono text-sm text-slate-300 dark:bg-black sm:min-w-[22rem]">
            <p><span class="text-emerald-400">$</span> pnpm install</p>
            <p class="mt-2"><span class="text-emerald-400">$</span> pnpm dev</p>
            <p class="mt-2"><span class="text-emerald-400">$</span> pnpm build</p>
          </div>
        </div>

        <div class="mt-10 flex flex-wrap gap-3 border-t border-slate-200 pt-8 dark:border-slate-800">
          <a href="https://nuxt.com/docs" target="_blank" rel="noreferrer" class="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400">Read Nuxt documentation</a>
          <a href="https://github.com/ReginaldBrixton/Nuxt-PWA-Template_2025" target="_blank" rel="noreferrer" class="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800">Review the repository</a>
        </div>
      </div>
    </section>
  </div>
</template>
