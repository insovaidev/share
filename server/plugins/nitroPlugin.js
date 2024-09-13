export default defineNitroPlugin((nitroApp) => {
  
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    const userAgent = event.req.headers['user-agent'];
    const isMobile = /mobile/i.test(userAgent);

      
   console.log('test nitroPlugin', html.head[0])

    html.head.push(`
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0">
      <meta name="title", content="TMy Amazing Site">
      <meta name="description", content="This is my amazing site, let me tell you all about it.">
      <meta property="og:url" content="https://stately-squirrel-915b70.netlify.app/tweeter">
      <meta property="og:image", content="https://images.khmer24.co/24-09-06/dog-labubu-629490172558715920146508-b.jpg">
      <meta name="twitter:card", content="summary">
      <meta name="twitter:title", content="My Amazing Site" >
      <meta name="twitter:description", content="This is my amazing site, let me tell you all about it" >
      <meta name="twitter:image", content="https://images.khmer24.co/24-09-06/dog-labubu-629490172558715920146508-b.jpg" >
    `);

   //  if (!isMobile) {
   //    // Desktop: Set viewport and background style
      
   //    html.head.push(`
   //      <style>
   //        body {
   //          background-color: #f0f0f0; /* Light background for desktop */
   //        }
   //      </style>
   //    `);
   //  } else {
   //    // Mobile: Set viewport and background style
   //    html.head.push(`
   //      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=0.0, maximum-scale=0.0">
   //    `);
      html.head.push(`
        <style>
          body {
            background-color: #000000; /* Dark background for mobile */
          }
        </style>
      `);
   //  }
  });
});

