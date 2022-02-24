<template lang="">
  <Navbar />
  <PageTitle :title="`مقاله با آیدی : ${$route.params.id}`" description="توضیحات" />
  <PostContent />
  <RelativePosts />
  <Footer/>
</template>
<script>
import Navbar from "../components/shared/Navbar.vue";
import PageTitle from "../components/shared/PageTitle.vue";
import PostContent from "../components/Post/PostContent.vue";
import RelativePosts from "../components/Post/RelativePosts.vue";
import Footer from "../components/shared/Footer.vue";

export default {
  name: "PostPage",
  components: {
    Navbar,
    PageTitle,
    PostContent,
    RelativePosts,
    Footer
  },
};
</script>
<style scoped></style>
