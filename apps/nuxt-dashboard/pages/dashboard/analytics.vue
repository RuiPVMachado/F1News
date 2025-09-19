<template>
  <section>
    <h2>Analytics</h2>
    <p>Charts and KPIs will live here.</p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'dashboard', title: 'Analytics' })

const kpis = ref<number[]>([12, 34, 56])
const total = computed(() => kpis.value.reduce((a, b) => a + b, 0))
</script>
