<template>
  <div class="container"> 
    <h2>مقالات</h2>
    <div class="ui two column stackable grid">
      <div class="twelve wide column">
        <HomePosts />
      </div>
      <div class="four wide column">
        <HomeSidebar />
      </div>
    </div>
  </div>
</template>

<script>
import HomePosts from "./HomePosts";
import HomeSidebar from "./HomeSidebar";
export default {
  name: "HomeContent",
  components: {
    HomePosts,
    HomeSidebar,
  },
};
</script>

<style scoped>
.ui.grid{
  margin-top: 15px;
}
h2{
  margin-top: 30px !important;
  border-bottom : 2px solid silver;
}
</style>
