<script setup lang="ts">
interface Feature {
  title: string
  description: string
  icon: string
  accent: string
}

const { install, isInstallable, isInstalled, isOnline } = usePwa()
const installing = ref(false)

useSeoMeta({
  title: 'Nuxt PWA Studio',
  description: 'A production-minded Nuxt starter with offline support, install prompts, responsive navigation, dark mode, and a polished application shell.',
  ogTitle: 'Nuxt PWA Studio',
  ogDescription: 'Build installable, resilient Nuxt applications from a clean and accessible foundation.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

const features: Feature[] = [
  {
    title: 'Resilient by default',
    description: 'A custom service worker precaches the application shell and keeps previously visited routes available when connectivity drops.',
    icon: 'M4 14.5A5.5 5.5 0 0 1 9.5 9c.72 0 1.41.14 2.04.39A4.5 4.5 0 1 1 17.5 18H8a4 4 0 0 1-4-3.5Z',
    accent: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
  },
  {
    title: 'Installable experience',
    description: 'A centralized install flow handles browser prompts, installed state, updates, and offline readiness without duplicate listeners.',
    icon: 'M12 3v11m0 0 4-4m-4 4-4-4M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2',
    accent: 'bg-sky-500/10 text-sky-700 dark:text-sky-300'
  },
  {
    title: 'Accessible application shell',
    description: 'Responsive navigation, visible focus states, semantic landmarks, reduced-motion support, and a keyboard-accessible skip link are included.',
    icon: 'M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM5 10h14M8 21l1-7m7 7-1-7M12 10v11',
    accent: 'bg-violet-500/10 text-violet-700 dark:text-violet-300'
  },
  {
    title: 'Theme-aware design',
    description: 'System, light, and dark preferences stay aligned with Nuxt Color Mode and update the browser theme color automatically.',
    icon: 'M12 3v1m0 16v1M4.22 4.22l.7.7m14.16 14.16.7.7M3 12h1m16 0h1M4.22 19.78l.7-.7M19.08 4.92l.7-.7M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
    accent: 'bg-amber-500/10 text-amber-700 dark:text-amber-300'
  },
  {
    title: 'SEO-ready metadata',
    description: 'Page metadata, social previews, application identity, manifest shortcuts, and crawl-friendly prerendering are configured centrally.',
    icon: 'M10 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-5M14 3h7v7m0-7L10 14',
    accent: 'bg-rose-500/10 text-rose-700 dark:text-rose-300'
  },
  {
    title: 'Reviewable delivery',
    description: 'Every change is validated through a reproducible GitHub Actions production build using the declared pnpm and Node toolchain.',
    icon: 'm5 12 4 4L19 6',
    accent: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300'
  }
]

const workflow = [
  { step: '01', title: 'Clone and install', command: 'pnpm install' },
  { step: '02', title: 'Develop locally', command: 'pnpm dev' },
  { step: '03', title: 'Validate production', command: 'pnpm build' }
]

const installApp = async () => {
  installing.value = true
  try {
    await install()
  } finally {
    installing.value = false
  }
}
</script>

<template>
  <div class="overflow-hidden">
    <section class="relative isolate border-b border-slate-200 dark:border-slate-800">
      <div class="absolute inset-0 -z-20 bg-white dark:bg-slate-950" />
      <div class="app-grid absolute inset-0 -z-10 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div class="absolute left-1/2 top-0 -z-10 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />

      <div class="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-8 lg:py-32">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300">
            <span class="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Nuxt starter, upgraded for real products
          </div>

          <h1 class="mt-7 max-w-4xl text-5xl font-bold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Ship an installable web app without rebuilding the foundation.
          </h1>
          <p class="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            Nuxt PWA Studio combines a polished interface, offline resilience, accessible navigation, theme support, and a reviewable delivery workflow in one focused starter.
          </p>

          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              v-if="isInstallable"
              type="button"
              class="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-600 disabled:cursor-wait disabled:opacity-70 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400"
              :disabled="installing"
              @click="installApp"
            >
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ installing ? 'Opening installer…' : 'Install app' }}
            </button>
            <NuxtLink
              v-else
              to="/about"
              class="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-600 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400"
            >
              Explore the architecture
            </NuxtLink>
            <a
              href="https://github.com/ReginaldBrixton/Nuxt-PWA-Template_2025"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-900"
            >
              View source
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
            <span class="inline-flex items-center gap-2"><span class="text-emerald-500">✓</span> Nuxt 3 and Vue 3</span>
            <span class="inline-flex items-center gap-2"><span class="text-emerald-500">✓</span> Tailwind CSS</span>
            <span class="inline-flex items-center gap-2"><span class="text-emerald-500">✓</span> Custom service worker</span>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-xl">
          <div class="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/20 via-sky-400/10 to-violet-400/20 blur-2xl" />
          <div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 shadow-2xl shadow-slate-950/10 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
            <div class="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">
              <div class="flex items-center gap-2" aria-hidden="true">
                <span class="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span class="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span class="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300">app status</span>
            </div>

            <div class="p-6 sm:p-8">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-sm font-medium text-slate-500 dark:text-slate-400">Runtime overview</p>
                  <h2 class="mt-1 text-2xl font-bold text-slate-950 dark:text-white">Ready for the network and beyond</h2>
                </div>
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="m5 12 4 4L19 6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>

              <dl class="mt-8 grid gap-3 sm:grid-cols-2">
                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                  <dt class="text-xs font-semibold uppercase tracking-wider text-slate-500">Connection</dt>
                  <dd class="mt-2 flex items-center gap-2 font-semibold text-slate-950 dark:text-white">
                    <span class="h-2.5 w-2.5 rounded-full" :class="isOnline ? 'bg-emerald-500' : 'bg-amber-500'" />
                    {{ isOnline ? 'Online' : 'Offline mode' }}
                  </dd>
                </div>
                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                  <dt class="text-xs font-semibold uppercase tracking-wider text-slate-500">Installation</dt>
                  <dd class="mt-2 font-semibold text-slate-950 dark:text-white">{{ isInstalled ? 'Installed' : isInstallable ? 'Available' : 'Browser managed' }}</dd>
                </div>
                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                  <dt class="text-xs font-semibold uppercase tracking-wider text-slate-500">Navigation</dt>
                  <dd class="mt-2 font-semibold text-slate-950 dark:text-white">Network first</dd>
                </div>
                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                  <dt class="text-xs font-semibold uppercase tracking-wider text-slate-500">Application shell</dt>
                  <dd class="mt-2 font-semibold text-slate-950 dark:text-white">Precached</dd>
                </div>
              </dl>

              <div class="mt-5 rounded-2xl bg-slate-950 p-5 font-mono text-sm text-slate-300 dark:bg-black">
                <p><span class="text-emerald-400">$</span> pnpm build</p>
                <p class="mt-2 text-slate-500">✓ icons generated</p>
                <p class="text-slate-500">✓ client and server bundles built</p>
                <p class="text-slate-500">✓ service worker manifest injected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-20 dark:bg-slate-900/40 sm:py-28" aria-labelledby="features-title">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Included foundation</p>
          <h2 id="features-title" class="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">The unglamorous essentials are already handled.</h2>
          <p class="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">Focus on product-specific screens and data instead of repeatedly solving installation, navigation, theming, metadata, and offline behavior.</p>
        </div>

        <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="feature in features" :key="feature.title" class="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl" :class="feature.accent">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path :d="feature.icon" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="mt-6 text-xl font-semibold text-slate-950 dark:text-white">{{ feature.title }}</h3>
            <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">{{ feature.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-20 dark:bg-slate-950 sm:py-28" aria-labelledby="workflow-title">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div class="lg:sticky lg:top-28">
            <p class="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Simple workflow</p>
            <h2 id="workflow-title" class="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white">From clone to verified build in three commands.</h2>
            <p class="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">The template keeps its toolchain deliberate: pnpm for reproducibility, Nuxt for the application, and GitHub Actions for independent validation.</p>
          </div>

          <ol class="grid gap-4">
            <li v-for="item in workflow" :key="item.step" class="grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6">
              <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-sm font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ item.step }}</span>
              <div>
                <h3 class="font-semibold text-slate-950 dark:text-white">{{ item.title }}</h3>
                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Run from the repository root.</p>
              </div>
              <code class="rounded-xl bg-slate-950 px-4 py-2.5 text-sm text-emerald-400 dark:bg-black">{{ item.command }}</code>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
      <div class="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 text-white shadow-2xl sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,.2),transparent_32%)]" />
        <div class="relative max-w-2xl">
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Start with less debt</p>
          <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Use the foundation as-is or adapt it into your next client product.</h2>
          <p class="mt-4 text-lg leading-8 text-slate-300">The code is intentionally compact enough to understand, but complete enough to stop feeling like a blank starter.</p>
        </div>
        <div class="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:pl-10">
          <NuxtLink to="/about" class="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Review the stack</NuxtLink>
          <a href="https://github.com/ReginaldBrixton/Nuxt-PWA-Template_2025" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Open repository</a>
        </div>
      </div>
    </section>
  </div>
</template>
