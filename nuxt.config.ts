// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from 'url'

export default defineNuxtConfig({
  alias: {
    "@": fileURLToPath(new URL('./', import.meta.url)),
    "images": fileURLToPath(new URL('./assets/images', import.meta.url))
  },
  typescript: {
    typeCheck: true
  },
  build: {
    analyze: true,
  },
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY
    }
  },
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@vite-pwa/nuxt',
  ],  
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          charset: "utf-8"
        }
      ],
    }
  },
  pwa: {
    manifest: {
      name: "Base Site",
      short_name: "Base Site",
      description: "This is a Nuxt template project called Base Site",
      theme_color: "#e6ffff",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
})
