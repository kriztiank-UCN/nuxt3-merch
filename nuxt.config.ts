export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      // browser tab title & meta tags
      title: 'Nuxt | Home',
      meta: [
        {name: 'description', content: 'Everything about Nuxt 3'}
      ],
      // external link to material icons
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})