export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: '/'
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/device'
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config'
  },

  // imports: {
  //   dirs: ['stores', 'pages', 'components'],
  // },

  generate: {
    routes: ['/', '/me', '/projects', '/works', '/contact']
  }

})
