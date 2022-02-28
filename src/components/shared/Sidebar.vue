<template lang="">
  <div class="ui card">
    <p>دسته بندی ها</p>
    <div class="ui list">
      <div class="item" v-for="category in categories" :key="category.id">
        <i class="icon" :class="category.icon"></i>
        <div class="content" v-on:click="showAccordion">{{ category.name }} <i class="angle double down icon"></i></div>
        <div class="ui list subCategory">
          <div class="item" v-for="subCategory in 2" :key="category.id">
            <i class="icon" :class="category.icon"></i>
            <div class="content">{{ category.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {};
  },
  computed: {
    categories() {
      return this.$store.state.category;
    },
  },
  methods: {
    showAccordion(e) {
      e.target.nextElementSibling.classList.toggle("accordione");
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

@media screen and (max-width: 767px) {
  .ui.card {
    width: 100% !important;
  }
}
</style>
