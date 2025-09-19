<template>
  <section>
    <h1>Welcome to Nuxt Dashboard</h1>
    <p style="margin: 1rem 0;">This is a minimal Nuxt 3 scaffold using TypeScript and the Composition API.</p>
    <div style="display:flex; gap:1rem; flex-wrap: wrap;">
      <NuxtLink to="/dashboard" class="button">Go to Dashboard</NuxtLink>
      <NuxtLink to="/login" class="button">Login</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Home'
})
</script>

<style scoped>
.button {
  padding: .5rem 1rem;
  background: #111827;
  color: white;
  border-radius: .5rem;
}
</style>
