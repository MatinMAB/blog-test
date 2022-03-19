<template lang="">
  <div class="ui card">
    <p>دسته بندی ها</p>
    <div class="ui list">
      <div class="item" v-for="category in categories" :key="category.id">
        <div class="ui accordion">
          <div class="title">
            <i class="icon" :class="category.icon"></i>
            {{ category.name }}
            <i class="dropdown icon"></i>
          </div>
          <div class="content">
            <p v-for="(index, subCategory) in 2" :key="subCategory">
              {{ category.name }} - {{ index }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  computed: {
    categories() {
      return this.$store.state.category;
    },
  },
  mounted() {
    $(".ui.accordion").accordion();
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
.icon,
.title {
  color: #f9f9f9 !important;
}
.content p {
  padding-right: 24px !important;
  color: #adadad !important;
  cursor: pointer;
  border-bottom: none !important;
}
.content p:hover {
  color: #f9f9f9 !important;
}
@media screen and (max-width: 767px) {
  .ui.card {
    width: 100% !important;
  }
}
</style>
