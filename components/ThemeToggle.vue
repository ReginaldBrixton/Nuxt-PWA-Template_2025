<script setup>
const colorMode = useColorMode()

const modeLabel = computed(() => {
  if (colorMode.preference === 'system') return 'System theme'
  return colorMode.preference === 'dark' ? 'Dark theme' : 'Light theme'
})

const nextModeLabel = computed(() => {
  if (colorMode.preference === 'system') return 'Switch to light theme'
  if (colorMode.preference === 'light') return 'Switch to dark theme'
  return 'Use system theme'
})

const cycleTheme = () => {
  const nextPreference = {
    system: 'light',
    light: 'dark',
    dark: 'system'
  }

  colorMode.preference = nextPreference[colorMode.preference] || 'system'
}

watch(
  () => colorMode.value,
  (mode) => {
    if (!import.meta.client) return
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      mode === 'dark' ? '#020617' : '#ffffff'
    )
  },
  { immediate: true }
)
</script>

<template>
  <ClientOnly>
    <button
      type="button"
      class="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-900 dark:focus-visible:ring-offset-slate-950"
      :aria-label="nextModeLabel"
      :title="nextModeLabel"
      @click="cycleTheme"
    >
      <svg v-if="colorMode.preference === 'system'" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" stroke-linecap="round" />
      </svg>
      <svg v-else-if="colorMode.value === 'dark'" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke-linecap="round" />
      </svg>
      <span class="hidden sm:inline">{{ modeLabel }}</span>
    </button>
    <template #fallback>
      <span class="block h-10 w-10 rounded-xl border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/80" aria-hidden="true" />
    </template>
  </ClientOnly>
</template>
