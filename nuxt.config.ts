// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  // vite: {
  //   server: {
  //     watch: {
  //       usePolling: true,
  //     },
  //   },
  // },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  // pinia: {
  //   storesDirs: ['./stores/**', './custom-folder/stores/**'],
  // },
  spaLoadingTemplate: './loader.html',
})
