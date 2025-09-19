<template>
  <section style="max-width: 420px; margin: 4rem auto;">
    <h2>Login</h2>
    <form @submit.prevent="onSubmit" style="display:flex; flex-direction:column; gap:.75rem; margin-top:1rem;">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button class="button" type="submit">Sign in</button>
    </form>
  </section>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')
const router = useRouter()

function onSubmit() {
  router.push('/dashboard')
}

definePageMeta({ title: 'Login' })
</script>

<style scoped>
input {
  padding: .5rem .75rem;
  border: 1px solid #e5e7eb;
  border-radius: .5rem;
}
.button {
  padding: .5rem 1rem;
  background: #111827;
  color: white;
  border-radius: .5rem;
}
</style>
