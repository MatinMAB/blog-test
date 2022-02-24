<template lang="">
  <Navbar />
  <PageTitle title="دسته بندی مقالات" description="هر دسته از مقالات شامل چندین مقاله است. در این صفحه شاهد دسته بندی کلی موضوعات هستید" />
  <Categories/>
  <CategoriesADS/>
  <Footer/>
</template>
<script>
import Navbar from "../components/shared/Navbar";
import PageTitle from "../components/shared/PageTitle";
import Footer from "../components/shared/Footer";
import Categories from "../components/Category/Categories"
import CategoriesADS from "../components/Category/CategoriesADS"

export default {
  name: "PostsCategory",
  components: {
    Navbar,
    PageTitle,
    Footer,
    Categories,
    CategoriesADS
  },

};
</script>
<style scoped>

</style>
