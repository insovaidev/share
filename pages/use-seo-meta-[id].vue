<template>
   <div>
    <img :src="dataPostDetial?.meta?.image ?? ''" alt="">
    <pre>{{ dataPostDetial?.meta ?? ''}}</pre>
   </div>
</template>

<script setup>

useSeoMeta({
  title: 'My Amazing Site Tweeter just edit' + ' ' + new Date().getTime(),
  ogTitle: 'My Amazing Site Tweeter just edit' + ' ' + new Date().getTime(),
  ogDescription: 'This is my amazing site, let me tell you all about it. Tweeter',
  ogImage: 'https://images.khmer24.co/23-09-19/s-173807--1695116446-63078656-b.jpg',
  ogUrl: 'https://test-share-seo.netlify.app/new-test-share', 
  twitterTitle: 'My Amazing Site Tweeter just edit' + ' ' + new Date().getTime(),
  twitterDescription: 'This is my amazing site, let me tell you all about it Tweeter just edit',
  twitterImage: 'https://images.khmer24.co/23-09-19/s-173807--1695116446-63078656-b.jpg',
  twitterCard: 'summary',
  ogImageWidth: 1200,  
  ogImageHeight: 630
})

const route = useRoute()
const baseApiUrl = `https://test-post-share-api.onrender.com/`
const id = route.params.id
const dataPostDetial = ref('')
const contentTitle = ref('')
const contentImage = ref('')

const { data: dataPostRespone } = await useFetch(`${baseApiUrl}api/posts/${id}`)
dataPostDetial.value = dataPostRespone.value
contentTitle.value = dataPostRespone.value?.meta?.title ? dataPostRespone.value.meta.title + new Date().getTime() :  new Date().getTime()
contentImage.value = dataPostRespone.value?.meta?.image ?? ''

// useSeoMeta({
//   title: () => `${contentTitle.value}`,
//   ogTitle: () => `${contentTitle.value}`,
//   description: () => 'contentTitle',
//   ogDescription: () => 'contentTitle',
//   ogUrl: () => `${contentImage.value}`, 
//   ogImage: () => `${contentImage.value}`,
//   twitterCard: () => 'summary_large_image',
//   twitterImage: () => `${contentImage.value}`,
// })


</script>

