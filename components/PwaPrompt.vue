<script setup>
const { $pwa } = useNuxtApp()
const { install, installError, isInstallable, isOnline } = usePwa()

const installDismissed = ref(false)
const updateDismissed = ref(false)
const isInstalling = ref(false)
const isUpdating = ref(false)

const needsRefresh = computed(() => Boolean(unref($pwa?.needRefresh)))
const offlineReady = computed(() => Boolean(unref($pwa?.offlineReady)))

const installApp = async () => {
  isInstalling.value = true
  try {
    await install()
  } finally {
    isInstalling.value = false
  }
}

const updateApp = async () => {
  if (!$pwa?.updateServiceWorker) return

  isUpdating.value = true
  try {
    await $pwa.updateServiceWorker(true)
  } finally {
    isUpdating.value = false
  }
}
</script>

<template>
  <ClientOnly>
    <div aria-live="polite" aria-atomic="true">
      <Transition name="notice">
        <div
          v-if="!isOnline"
          class="fixed inset-x-0 top-20 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-xl items-center justify-center gap-2 rounded-2xl border border-amber-300/70 bg-amber-50/95 px-4 py-3 text-sm font-medium text-amber-950 shadow-lg backdrop-blur dark:border-amber-700/70 dark:bg-amber-950/95 dark:text-amber-100"
          role="status"
        >
          <span class="h-2.5 w-2.5 rounded-full bg-amber-500" aria-hidden="true" />
          You are offline. Previously visited pages remain available.
        </div>
      </Transition>

      <div class="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex flex-col items-center gap-3 px-4 sm:items-end">
        <Transition name="notice">
          <section
            v-if="isInstallable && !installDismissed"
            class="pointer-events-auto w-full max-w-sm rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95"
            aria-labelledby="install-app-title"
          >
            <div class="flex items-start gap-4">
              <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" aria-hidden="true">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" stroke-linecap="round" />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <h2 id="install-app-title" class="font-semibold text-slate-950 dark:text-white">Install Nuxt PWA Studio</h2>
                <p class="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">Launch faster, use it offline, and get a native app-like experience.</p>
              </div>
              <button
                type="button"
                class="rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:hover:bg-slate-800 dark:hover:text-white"
                aria-label="Dismiss install prompt"
                @click="installDismissed = true"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <p v-if="installError" class="mt-3 text-sm text-rose-600 dark:text-rose-400">{{ installError }}</p>
            <button
              type="button"
              class="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-wait disabled:opacity-70 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400"
              :disabled="isInstalling"
              @click="installApp"
            >
              {{ isInstalling ? 'Opening installer…' : 'Install app' }}
            </button>
          </section>
        </Transition>

        <Transition name="notice">
          <section
            v-if="needsRefresh && !updateDismissed"
            class="pointer-events-auto w-full max-w-sm rounded-3xl border border-sky-200/80 bg-white/95 p-5 shadow-2xl backdrop-blur dark:border-sky-800 dark:bg-slate-900/95"
            aria-labelledby="update-app-title"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <h2 id="update-app-title" class="font-semibold text-slate-950 dark:text-white">A new version is ready</h2>
                <p class="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">Refresh now to use the latest improvements.</p>
              </div>
              <button type="button" class="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Dismiss update prompt" @click="updateDismissed = true">×</button>
            </div>
            <button
              type="button"
              class="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:cursor-wait disabled:opacity-70"
              :disabled="isUpdating"
              @click="updateApp"
            >
              {{ isUpdating ? 'Updating…' : 'Update and refresh' }}
            </button>
          </section>
        </Transition>

        <Transition name="notice">
          <div
            v-if="offlineReady && !needsRefresh"
            class="pointer-events-auto rounded-full border border-emerald-200 bg-white/95 px-4 py-2 text-sm font-medium text-emerald-800 shadow-lg backdrop-blur dark:border-emerald-800 dark:bg-slate-900/95 dark:text-emerald-300"
            role="status"
          >
            Ready for offline use
          </div>
        </Transition>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.notice-enter-active,
.notice-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.notice-enter-from,
.notice-leave-to {
  opacity: 0;
  transform: translateY(0.75rem);
}
</style>
