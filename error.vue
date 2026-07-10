<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

const statusCode = computed(() => props.error?.statusCode || 500)
const title = computed(() => statusCode.value === 404 ? 'Page not found' : 'Something went wrong')
const description = computed(() => (
  statusCode.value === 404
    ? 'The page may have moved, or the address may be incorrect.'
    : 'The application could not complete this request. Return home and try again.'
))

useSeoMeta({
  title: () => `${statusCode.value} — ${title.value}`,
  robots: 'noindex'
})

const returnHome = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="relative grid min-h-screen place-items-center overflow-hidden bg-white px-4 py-16 text-slate-950 dark:bg-slate-950 dark:text-white">
    <div class="app-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
    <div class="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/15 blur-3xl" />

    <main class="relative w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white/90 p-8 text-center shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/90 sm:p-12">
      <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-300" aria-hidden="true">
        <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 9v4m0 4h.01M10.3 3.6 2.7 17a2 2 0 0 0 1.74 3h15.12a2 2 0 0 0 1.74-3L13.7 3.6a2 2 0 0 0-3.4 0Z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <p class="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Error {{ statusCode }}</p>
      <h1 class="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{{ title }}</h1>
      <p class="mx-auto mt-5 max-w-md leading-7 text-slate-600 dark:text-slate-300">{{ description }}</p>
      <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button type="button" class="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400" @click="returnHome">Return home</button>
        <button type="button" class="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800" @click="window.location.reload()">Reload page</button>
      </div>
    </main>
  </div>
</template>
