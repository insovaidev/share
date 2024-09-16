<template>
  <div>
    <Head>
      <Title>My default title {{ new Date().getTime() }}</Title>
      <Meta property="og:type" content="article" />
      <Meta property="og:title" :content=contentTitle />
      <Meta property="og:description" content="Senior Selachimorpha at DigitalOcean Edit" />
      <Meta property="og:url" :content=contentImage />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="https://test-share-seo.netlify.app/test6-share" />
      <Meta name="twitter:title" :content=contentTitle />
      <Meta name="twitter:description" content="Senior Selachimorpha at DigitalOcean Edit" />
      <Meta name="twitter:image" :content=contentImage />
    </Head>
    <p>details post</p>
    <button @click="share(dataPostDetial)">Shere</button>
    <img :src="dataPostDetial?.meta?.image ?? ''" alt="">
    <pre>{{ dataPostDetial?.meta ?? ''}}</pre>
  </div>
</template>

<script setup>
const route = useRoute()
const dataPostDetial = ref('')
const baseApiUrl = `https://test-post-share-api.onrender.com/`
const id = route.params.id

const { data: dataPostRespone } = await useFetch(`${baseApiUrl}api/posts/${id}`)
dataPostDetial.value = dataPostRespone.value

const contentTitle = ref('')
const contentImage = ref('')
contentTitle.value = dataPostRespone.value?.meta?.title ? dataPostRespone.value.meta.title + new Date().getTime() :  new Date().getTime()
contentImage.value = dataPostRespone.value?.meta?.image ?? ''



const share = async (post) => {
  if (navigator.share) {
    try {
      const dataShare = {
        title: post.data.title || "",
        text: "Check out this amazing content!",
        url: post.data.short_link || "",
      };

      await navigator.share({
        ...dataShare,
      });
      console.log("Content shared successfully!");
    } catch (error) {
      console.error("Error sharing:", error);
    }
  } else {
    alert("Sharing not supported in your browser");
  }
};

</script>