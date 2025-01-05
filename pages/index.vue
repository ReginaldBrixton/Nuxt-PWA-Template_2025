<script setup>
const { $pwa } = useNuxtApp()

const title = ref('Welcome to My PWA')
const message = ref('This is a sample page demonstrating PWA capabilities')

const checkInstallation = computed(() => {
  return $pwa?.showInstallPrompt ? 'You can install this app!' : 'App is ready to use'
})
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <p class="status">{{ checkInstallation }}</p>
    
    <div class="features">
      <div class="feature-card">
        <h3>Offline Support Here</h3>
        <p>This app works even without internet connection</p>
      </div>
      
      <div class="feature-card">
        <h3>Installable</h3>
        <p>Add to your home screen for quick access</p>
      </div>
      
      <div class="feature-card">
        <h3>Auto Updates</h3>
        <p>Always stay up to date with the latest version</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.status {
  color: #42b883;
  font-weight: bold;
  margin: 1rem 0;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.feature-card {
  padding: 1.5rem;
  border-radius: 8px;
  background: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #666;
  font-size: 0.9rem;
}
</style>
