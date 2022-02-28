<template lang="">
  <div class="ui card">
    <p>دسته بندی ها</p>
    <div class="ui list">
      <div class="item" v-for="category in categories" :key="category.id">
        <i class="icon" :class="category.icon"></i>
        <SubCategorySidebar :category="category"/>
      </div>
    </div>
  </div>
</template>

<script>
import SubCategorySidebar from "./SubCategorySidebar.vue"
export default {
  name: "Sidebar",
  components : {
    SubCategorySidebar,
  },
  computed: {
    categories() {
      return this.$store.state.category;
    },
  },
  
};
</script>

<style scoped>

.item {
  margin: 12px 0;
  color: #f7f7f7 !important;
}
.item:hover {
  color: silver;
}
.ui.card {
  margin-top: 25px !important;
  padding: 5px;
  background-color: #1b1c1d;
  position: sticky !important;
  top: 90px !important;
}
p {
  padding: 5px 5px 0 0;
  color: #f9f9f9;
  border-bottom: 1px solid silver;
}


@media screen and (max-width: 767px) {
  .ui.card {
    width: 100% !important;
  }
}
</style>
