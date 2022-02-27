<template lang="">
  <Navbar />
  <Marquee/>
  <PostContent />
  <RelativePosts />
  <Footer/>
</template>
<script>
import Navbar from "../components/shared/Navbar.vue";
import PostContent from "../components/Post/PostContent.vue";
import RelativePosts from "../components/Post/RelativePosts.vue";
import Footer from "../components/shared/Footer.vue";
import Marquee from "../components/shared/Marquee.vue";

export default {
  name: "PostPage",
  components: {
    Navbar,
    PostContent,
    RelativePosts,
    Footer,
    Marquee
  },
};
</script>
<style scoped></style>
