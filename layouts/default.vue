<script setup>
const route = useRoute()
const mobileMenuOpen = ref(false)
const { isOnline } = usePwa()

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' }
]

const isActive = (path) => route.path === path

watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false
  }
)
</script>

<template>
  <div class="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
    <a
      href="#main-content"
      class="fixed left-4 top-4 z-[100] -translate-y-24 rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-xl transition focus:translate-y-0 dark:bg-white dark:text-slate-950"
    >
      Skip to content
    </a>

    <header class="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85">
      <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <NuxtLink to="/" class="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-slate-950">
          <span class="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-slate-950 shadow-lg shadow-slate-950/10 transition group-hover:-translate-y-0.5 dark:bg-white">
            <img src="/icons/64x64.png" alt="" class="h-8 w-8 rounded-lg" width="32" height="32">
          </span>
          <span>
            <span class="block text-sm font-bold tracking-tight text-slate-950 dark:text-white">Nuxt PWA Studio</span>
            <span class="block text-xs text-slate-500 dark:text-slate-400">Production-ready starter</span>
          </span>
        </NuxtLink>

        <div class="hidden items-center gap-1 md:flex">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            :class="isActive(item.to)
              ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'"
            :aria-current="isActive(item.to) ? 'page' : undefined"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <div class="flex items-center gap-2">
          <div class="hidden items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 dark:border-slate-800 dark:text-slate-300 sm:flex" role="status">
            <span class="h-2 w-2 rounded-full" :class="isOnline ? 'bg-emerald-500' : 'bg-amber-500'" aria-hidden="true" />
            {{ isOnline ? 'Online' : 'Offline' }}
          </div>
          <ThemeToggle />
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-navigation"
            :aria-label="mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <svg v-if="!mobileMenuOpen" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
            </svg>
            <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      <Transition name="mobile-menu">
        <div v-if="mobileMenuOpen" id="mobile-navigation" class="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div class="mx-auto grid max-w-7xl gap-2">
            <NuxtLink
              v-for="item in navigation"
              :key="item.to"
              :to="item.to"
              class="rounded-xl px-4 py-3 text-sm font-semibold"
              :class="isActive(item.to)
                ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900'"
              :aria-current="isActive(item.to) ? 'page' : undefined"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </header>

    <main id="main-content" class="min-h-[calc(100vh-10rem)]">
      <slot />
    </main>

    <footer class="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div class="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
        <div>
          <div class="flex items-center gap-3">
            <img src="/icons/64x64.png" alt="" class="h-9 w-9 rounded-xl" width="36" height="36">
            <div>
              <p class="font-semibold text-slate-950 dark:text-white">Nuxt PWA Studio</p>
              <p class="text-sm text-slate-500 dark:text-slate-400">A focused foundation for installable web products.</p>
            </div>
          </div>
          <p class="mt-5 text-sm text-slate-500 dark:text-slate-400">Built with Nuxt, Vue, Tailwind CSS, and Vite PWA.</p>
        </div>

        <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="https://nuxt.com/docs" target="_blank" rel="noreferrer" class="hover:text-emerald-600 dark:hover:text-emerald-400">Nuxt docs</a>
          <a href="https://github.com/ReginaldBrixton/Nuxt-PWA-Template_2025" target="_blank" rel="noreferrer" class="hover:text-emerald-600 dark:hover:text-emerald-400">GitHub</a>
          <NuxtLink to="/about" class="hover:text-emerald-600 dark:hover:text-emerald-400">About</NuxtLink>
        </div>
      </div>
    </footer>

    <PwaPrompt />
  </div>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 160ms ease, transform 160ms ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>
