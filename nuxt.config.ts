// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image-edge', '@nuxt/image', "@nuxtjs/tailwindcss"],
  image: {
    provider: 'static', // Użyj statycznych linków zamiast optymalizacji przez zewnętrzny serwis
  },
  runtimeConfig: {
    public: {
      replicateApiToken: process.env.REPLICATE_API_TOKEN
    }
  },
})