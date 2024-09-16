<template>
  <div>
    <p>details post</p>
    <button @click="share(dataPostDetial)">Shere</button>
    <pre>{{ dataPostDetial?.data ?? "" }}</pre>
  </div>
</template>
 
<script setup>
const route = useRoute();
const dataPostDetial = ref("");
const baseApiUrl = `https://test-post-share-api.onrender.com/`;
const id = route.params.id;

const { data: dataPostRespone } = useFetch(`${baseApiUrl}api/posts/${id}`);
dataPostDetial.value = dataPostRespone.value;

useSeoMeta({
  title: () => dataPostDetial.value?.meta?.title ?? "My default title.",
  ogTitle: () => dataPostDetial.value?.meta?.title ?? "",
  ogDescription: () => dataPostDetial.value?.meta?.title ?? "",
  ogImage: () => dataPostDetial.value?.meta?.image ?? "",
  ogUrl: () => dataPostDetial.value?.meta?.url ?? "",
  twitterTitle: () => dataPostDetial.value?.meta?.title ?? "",
  twitterDescription: () => dataPostDetial.value?.meta?.title ?? "",
  twitterImage: () => dataPostDetial.value?.meta?.image ?? "",
  twitterCard: "summary",
  ogImageWidth: 1200,
  ogImageHeight: 630,
});

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