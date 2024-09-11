export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: '/'
  },

  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ],
    '@vueuse/nuxt',
    '@nuxtjs/device'
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config'
  },

  imports: {
    dirs: ['stores']
  },

  router: {
    options: {
      hashMode: true
    }
  }
})
