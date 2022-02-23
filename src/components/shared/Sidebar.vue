<template>
  <div class="ui card">
    <p>دسته بندی ها</p>
    <div class="ui list">
      <div class="item" v-for="category in categories" :key="category.id">
        <i class="icon" :class="category.icon"></i>
        <div class="content">{{ category.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    categories() {
      return this.$store.state.category;
    },
  },
};
</script>

<style scoped>
.content {
  padding-right: 12px !important;
}
.item {
  margin: 12px 0;
  color : #f7f7f7;
  cursor: pointer;
}
.item:hover{
  color : silver;
}
.ui.card{
  margin-top : 25px !important;
  padding : 5px;
  background-color : #1B1C1D;
  position : sticky !important;
  top : 15px !important;
}
p{
  padding : 5px 5px 0 0;
  color : #f9f9f9;
  border-bottom : 1px solid silver;
}

@media screen and (max-width:767px){
  .ui.card{
    width : 100% !important;
  }
}
</style>
