
export default defineNuxtConfig({
  
  devServer: {
    host: '0.0.0.0',
    port: 5555
  },

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-jsonld',  
    '@nuxtjs/device',
    'nuxt-jsonld',
    '@nuxtjs/sitemap'
  ],

  compatibilityDate: '2024-09-13',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml", "/robots.txt"],
    },
  },
})