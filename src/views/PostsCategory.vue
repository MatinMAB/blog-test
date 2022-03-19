<template lang="">
  <Navbar />
  <LiveCurrency/>
  <Categories/>
  <CategoriesADS/>
  <Footer/>
</template>
<script>
//Components
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Categories from "../components/Category/Categories"
import CategoriesADS from "../components/Category/CategoriesADS"
import LiveCurrency from "../components/shared/LiveCurrency.vue"

export default {
  name: "PostsCategory",
  components: {
    Navbar,
    Footer,
    Categories,
    CategoriesADS,
    LiveCurrency
  },

};
</script>
<style scoped>

</style>
