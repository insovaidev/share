
// const getArticlesRoutes = async () => {
//   const url = "https://test-post-share-api.onrender.com";
//   const res = await fetch(url + "/api/posts");
//   const posts = await res.json()
//   const routes = [] 
//   posts.map((post) => {
//     routes.push(`/post-adid-${post.data.id}`)
//   });

//   return routes
// };


export default defineNuxtConfig({
  
  devServer: {
    host: '0.0.0.0',
    port: 5555
  },

  // hooks: {
  //   async "nitro:config"(nitroConfig) {
  //     if (nitroConfig.dev && !process.argv?.includes("generate")) { return }
      
  //     const routes = await getArticlesRoutes();

  //     nitroConfig.prerender?.routes?.push(...routes);
  //   }
  // },

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-jsonld',
    '@nuxtjs/device',
    'nuxt-jsonld'
  ],

  compatibilityDate: '2024-09-13'
})