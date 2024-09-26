
export default defineNuxtConfig({
  
  devServer: {
    host: '0.0.0.0',
    // port: 5555
  },

  devtools: { enabled: true },

  css: [
    '~/public/css/main.css' 
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-jsonld',  
    '@nuxtjs/device',
    'nuxt-jsonld',
    '@nuxtjs/sitemap'
  ],

  compatibilityDate: '2024-09-13',
})