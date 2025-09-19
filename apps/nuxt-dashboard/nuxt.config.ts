import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true
  },
  alias: {
    '~~': fileURLToPath(new URL('./', import.meta.url)),
    '@@': fileURLToPath(new URL('./', import.meta.url)),
    '~': fileURLToPath(new URL('./', import.meta.url)),
    '@': fileURLToPath(new URL('./', import.meta.url)),
    assets: fileURLToPath(new URL('./assets', import.meta.url)),
    styles: fileURLToPath(new URL('./assets/css', import.meta.url)),
    components: fileURLToPath(new URL('./components', import.meta.url)),
    utils: fileURLToPath(new URL('./utils', import.meta.url))
  },
  css: ['~/assets/css/main.css'],
  imports: { dirs: ['composables', 'utils'] },
  nitro: {
    preset: process.env.NITRO_PRESET || 'node-server'
  },
  app: {
    head: {
      titleTemplate: (title?: string) => (title ? `${title} · Nuxt Dashboard` : 'Nuxt Dashboard'),
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'description', content: 'Nuxt 3 dashboard scaffold using TypeScript and Composition API.' },
        { name: 'theme-color', content: '#111827' },
        { property: 'og:site_name', content: 'Nuxt Dashboard' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  devtools: { enabled: false }
})
