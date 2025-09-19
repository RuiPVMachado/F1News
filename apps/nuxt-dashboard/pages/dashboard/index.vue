<template>
  <section>
    <h2>Dashboard</h2>
    <p>Overview of your application.</p>
    <ul style="margin-top:1rem;">
      <li><NuxtLink to="/dashboard/analytics">Analytics</NuxtLink></li>
      <li><NuxtLink to="/dashboard/billing">Billing</NuxtLink></li>
    </ul>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'dashboard', title: 'Dashboard' })
</script>

<style scoped>
h2 { margin: 0 0 .5rem; }
</style>
