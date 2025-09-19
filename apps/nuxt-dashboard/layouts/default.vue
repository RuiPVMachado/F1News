<template>
  <div>
    <header class="p-4 border-b">
      <nav class="container" style="display:flex; gap: 1rem; align-items: center;">
        <NuxtLink to="/" class="font-bold">Nuxt Dashboard</NuxtLink>
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
        <NuxtLink to="/settings">Settings</NuxtLink>
        <NuxtLink to="/teams">Teams</NuxtLink>
        <NuxtLink to="/login">Login</NuxtLink>
      </nav>
    </header>
    <main class="container" style="padding: 1.5rem;">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// Default layout for marketing and auth pages
</script>
