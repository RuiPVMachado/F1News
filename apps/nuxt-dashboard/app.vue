<template>
  <div id="__app" class="min-h-screen bg-gray-50 text-gray-900">
    <NuxtLoadingIndicator color="#6366f1" :height="2" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nuxt Dashboard',
  meta: [
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
  ]
})
</script>

<style>
html, body, #__app {
  height: 100%;
}
:root {
  color-scheme: light dark;
}
* { box-sizing: border-box; }
body { margin: 0; }
</style>
