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
  netlify: {
    baseURL: process.env.IMAGE_BASE_URL || 'https://generator-obrazkow-jashtem.netlify.app/',
  },
  runtimeConfig: {
    public: {
      replicateApiToken: process.env.REPLICATE_API_TOKEN
    }
  },
})