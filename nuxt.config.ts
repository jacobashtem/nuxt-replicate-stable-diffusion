// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image-edge', "@nuxtjs/tailwindcss"],
  image: {
    domains: ['replicate.com', 'replicate.delivery'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'replicate.com',
      },
      {
        protocol: 'https',
        hostname: 'replicate.delivery',
      },
    ],
  },
  runtimeConfig: {
    public: {
      replicateApiToken: process.env.REPLICATE_API_TOKEN
    }
  },
})