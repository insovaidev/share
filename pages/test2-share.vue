<template>
   <div>
    <!-- <Head>
      <Title>My default title {{ new Date().getTime() }}</Title>
      <Meta property="og:type" content="article" />
      <Meta property="og:title" content="Sammy the Shark Edit" />
      <Meta property="og:description" content="Senior Selachimorpha at DigitalOcean Edit" />
      <Meta property="og:url" content="https://test-share-seo.netlify.app/test1-share" />
      <Meta property="og:image" content="https://images.khmer24.co/24-09-04/scoopy-i-015--775039172541923673824722-b.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="https://test-share-seo.netlify.app/test1-share" />
      <Meta name="twitter:title" content="Sammy the Shark Edit" />
      <Meta name="twitter:description" content="Senior Selachimorpha at DigitalOcean Edit" />
      <Meta name="twitter:image" content="https://images.khmer24.co/24-09-04/scoopy-i-015--775039172541923673824722-b.jpg" />
    </Head> -->
   </div>
</template>

<script setup>

// useSeoMeta({
//   title: 'My Amazing Site Tweeter just edit' + ' ' + new Date().getTime(),
//   ogTitle: 'My Amazing Site Tweeter just edit' + ' ' + new Date().getTime(),
//   ogDescription: 'This is my amazing site, let me tell you all about it. Tweeter',
//   ogImage: 'https://images.khmer24.co/24-09-04/scoopy-i-015--775039172541923673824722-b.jpg',
//   ogUrl: 'https://test-share-seo.netlify.app/new-test-share', 
//   twitterTitle: 'My Amazing Site Tweeter just edit' + ' ' + new Date().getTime(),
//   twitterDescription: 'This is my amazing site, let me tell you all about it Tweeter just edit',
//   twitterImage: 'https://images.khmer24.co/24-09-04/scoopy-i-015--775039172541923673824722-b.jpg',
//   twitterCard: 'summary',
//   ogImageWidth: 1200,  
//   ogImageHeight: 630
// })

useSeoMeta({
  title: () => 'My Amazing Site' + new Date().getTime() ,
  ogTitle: () => 'My Amazing Site',
  description: () => 'This is my amazing site, let me tell you all about it.',
  ogDescription: () => 'This is my amazing site, let me tell you all about it.',
  ogImage: () => 'https://images.khmer24.co/24-09-04/scoopy-i-015--775039172541923673824722-b.jpg',
  twitterCard: () => 'summary_large_image',
})

</script>

