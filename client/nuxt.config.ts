// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt'],
  spaLoadingTemplate: './loader.html',
})
