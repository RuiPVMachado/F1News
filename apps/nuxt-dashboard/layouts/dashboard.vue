<template>
  <div class="dashboard-layout" style="display:grid; grid-template-columns: 240px 1fr; min-height: 100vh;">
    <aside style="border-right:1px solid #e5e7eb; padding:1rem;">
      <p class="font-bold" style="margin-bottom: .5rem;">Dashboard</p>
      <ul style="display:flex; flex-direction:column; gap:.5rem;">
        <li><NuxtLink to="/dashboard">Home</NuxtLink></li>
        <li><NuxtLink to="/dashboard/analytics">Analytics</NuxtLink></li>
        <li><NuxtLink to="/dashboard/billing">Billing</NuxtLink></li>
        <li><NuxtLink to="/settings">Settings</NuxtLink></li>
      </ul>
    </aside>
    <section style="padding: 1.5rem;">
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
// Sidebar + content layout for dashboard routes
</script>
