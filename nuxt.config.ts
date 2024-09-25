
export default defineNuxtConfig({
  
  devServer: {
    host: '0.0.0.0',
    port: 5555
  },

  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css'  // Path to your custom CSS
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-jsonld',  
    '@nuxtjs/device',
    'nuxt-jsonld',
    '@nuxtjs/sitemap'
  ],

  compatibilityDate: '2024-09-13',

  sitemap: {
    
  },

  // nitro: {
  //   s
  //   prerender: {
      
  //     crawlLinks: true,
  //     routes: ["/sitemap.xml", "/robots.txt"],
  //   },
  // },
})