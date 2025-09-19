export default defineNuxtConfig({
  devtools: { enabled: false },
  nitro: {
    preset: 'node-server'
  },
  typescript: {
    strict: true
  },
  srcDir: '.',
  alias: {
    '@packages/shared': '../../packages/shared/src',
    '@packages/api-clients': '../../packages/api-clients/src'
  }
})
