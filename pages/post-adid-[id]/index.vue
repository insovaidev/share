<template>
  <div>
    <p>details post</p>
    <button @click="share(dataPostDetial)">Shere</button>
    <img :src="dataPostDetial?.meta?.image ?? ''" alt="">
    <img src="https://images.khmer24.co/24-09-04/scoopy-i-015--775039172541923673824722-b.jpg" alt="">
    <pre>{{ dataPostDetial?.meta ?? ''}}</pre>

  </div>
</template>

<script setup>

const route = useRoute()


onMounted(() => {
  
  console.log()
})

const dataPostDetial = useState('dataPostDetial', () => '')
const baseApiUrl = `https://test-post-share-api.onrender.com/`

useSeoMeta({
  title: dataPostDetial.value?.meta?.title ?? '',
  ogTitle: dataPostDetial.value?.meta?.title ?? '',
  ogDescription: dataPostDetial.value?.meta?.title ?? '',
  ogImage: dataPostDetial.value?.meta?.image ?? '',
  ogUrl: dataPostDetial.value?.meta?.url ?? '', 
  twitterTitle: dataPostDetial.value?.meta?.title ?? '',
  twitterDescription: dataPostDetial.value?.meta?.title ?? '',
  twitterImage: dataPostDetial.value?.meta?.image ?? '',
  twitterCard: 'summary',
  ogImageWidth: 1200,  
  ogImageHeight: 630
})




       


const id = route.params.id
const title = route.params.title

const { data: dataPostRespone } = await useFetch(`${baseApiUrl}api/posts/${id}`)

dataPostDetial.value = dataPostRespone.value


// const getPostDetail = async () => {
//    try {
//       const res = await $fetch(`${baseApiUrl}api/posts/${id}`)
//       if (res) {
//         dataPostDetial.value = res  
//       }
//    } catch (error) {
//       console.error(error)
//    }
// }

// getPostDetail()


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

const getArticlesRoutes = async () => {
  const url = "https://test-post-share-api.onrender.com";
  const posts = await $fetch(url + "/api/posts");
  const routes = [] 
  posts.map((post) => {
    routes.push(`/posdt-adid-${post.data.id}`)
  });

  return routes
};


onMounted(async () => {
  const res = await getArticlesRoutes()
  console.log(res)
})


</script>