<template>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus voluptas cum odio reiciendis? Repellendus dignissimos omnis debitis aut ut? Accusantium laboriosam alias molestiae distinctio, facere minus error tempora soluta perferendis.</p>
</template>

<script setup>
// useSeoMeta({
//   title: 'My Amazing Site Tweeter just edit',
//   ogTitle: 'My Amazing Site Tweeter just edit',
//   ogDescription: 'This is my amazing site, let me tell you all about it. Tweeter',
//   ogImage: 'https://images.khmer24.co/24-04-23/111248-business-house-for-rent-on-main-road-way-to-angkor-wat-1713857765-79938271-b.jpg',
//   ogUrl: 'https://test-share-seo.netlify.app/tweeter', 
//   twitterTitle: 'My Amazing Site Tweeter just edit',
//   twitterDescription: 'This is my amazing site, let me tell you all about it Tweeter just edit',
//   twitterImage: 'https://images.khmer24.co/24-04-23/111248-business-house-for-rent-on-main-road-way-to-angkor-wat-1713857765-79938271-b.jpg',
//   twitterCard: 'summary',
//   ogImageWidth: 1200,  
//   ogImageHeight: 630
// })



const setTwitterMeta = () => {
  const metaTags = [
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@nytimesbits' },
    { name: 'twitter:creator', content: '@nickbilton' },
    { name: 'twitter:image', content: 'https://images.khmer24.co/24-04-23/111248-business-house-for-rent-on-main-road-way-to-angkor-wat-1713857765-79938271-b.jpg' }
  ];

  metaTags.forEach(tag => {
    const metaElement = document.createElement('meta');
    metaElement.setAttribute('name', tag.name);
    metaElement.setAttribute('content', tag.content);
    document.head.appendChild(metaElement); // Add the meta tag to the document head
  });
};

setTwitterMeta()

</script>
