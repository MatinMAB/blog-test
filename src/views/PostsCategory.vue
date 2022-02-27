<template lang="">
  <Navbar />
  <Categories/>
  <CategoriesADS/>
  <Footer/>
</template>
<script>
import Navbar from "../components/shared/Navbar";

import Footer from "../components/shared/Footer";
import Categories from "../components/Category/Categories"
import CategoriesADS from "../components/Category/CategoriesADS"

export default {
  name: "PostsCategory",
  components: {
    Navbar,
    Footer,
    Categories,
    CategoriesADS
  },

};
</script>
<style scoped>

</style>
