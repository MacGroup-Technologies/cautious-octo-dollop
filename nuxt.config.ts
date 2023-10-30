// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'netlify'
  },
  modules: ['@element-plus/nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', 'nuxt-lodash'],
  css: ['~/assets/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  elementPlus: { /** Options */ },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      baseURL: process.env.API_BASE_URL || 'https://alexzypolska.pythonanywhere.com/api/v1/'
    }
  }
})
