<template lang="">
  <div class="content" v-on:click="showAccordion">{{ category.name }} <i class="angle double icon" :class="isShownSubCategory ? 'up' : 'down'"></i></div>
  <div class="ui list subCategory" :class="{'accordione' : isShownSubCategory}">
    <div class="item" v-for="subCategory in 2" :key="category.id">
      <i class="icon" :class="category.icon"></i>
      <div class="content">{{ category.name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubCategorySidebar",
  data() {
    return {
      isShownSubCategory: false,
    };
  },
  props: {
    category: Object,
  },
  methods: {
    showAccordion() {
      this.isShownSubCategory = ! this.isShownSubCategory;
    },
  },
};
</script>
<style scoped>
.content {
  padding-right: 12px !important;
  color: #adadad !important;
  cursor: pointer;
}
.content:hover {
  color: #f9f9f9 !important;
}
.item {
  margin: 12px 0;
  color: #f7f7f7 !important;
}
.item:hover {
  color: silver;
}
.subCategory {
  padding: 10px 30px 0 0 !important;
  display: block;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
}
.accordione {
  height: 80px;
}
</style>
