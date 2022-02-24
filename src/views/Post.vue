<template lang="">
  <Navbar />
  <PageTitle :title="`مقاله با آیدی : ${$route.params.id}`" description="توضیحات" />
  <PostContent/>
  
</template>
<script>
import Navbar from "../components/shared/Navbar.vue";
import PageTitle from "../components/shared/PageTitle.vue";
import PostContent from "../components/Post/PostContent.vue"

export default {
  name: "PostPage",
  components: {
    Navbar,
    PageTitle,
    PostContent,
  },
};
</script>
<style scoped></style>
