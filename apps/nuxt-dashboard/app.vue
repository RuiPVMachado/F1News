<template>
  <div>
    <header style="padding: 1rem; border-bottom: 1px solid #eee">
      <strong>Nuxt Dashboard</strong>
    </header>
    <main style="padding: 1rem">
      <h1>Welcome to Nuxt Dashboard</h1>
      <p>{{ greeting }}</p>
      <p>Current F1 season (from Ergast API): {{ season }}</p>
    </main>
  </div>
</template>

<script setup lang="ts">
import { hello } from '@packages/shared'
import { getErgastSeason } from '@packages/api-clients'
import { ref, onMounted } from 'vue'

const greeting = hello('Nuxt')
const season = ref<string>('...')

onMounted(async () => {
  try {
    season.value = await getErgastSeason()
  } catch {
    season.value = 'unknown'
  }
})
</script>
