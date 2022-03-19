<template lang="">
  <div class="container">
    <div class="fast-header">
      <h2>دسترسی سریع</h2>
      <p v-on:click="showMostViews" :class="{ selected: component === 'MostViewsPosts' }">پربازدیدترین ها</p>
      <p v-on:click="showMostLikes" :class="{ selected: component === 'MostLikesPosts' }">محبوب ترین ها</p>
    </div>
    <component :is="component"> </component>
  </div>
</template>
<script>
//Components
import MostViewsPosts from "./MostViewsPosts.vue";
import MostLikesPosts from "./MostLikesPosts.vue";

export default {
  name: "fastAccess",
  data() {
    return {
      component: "MostViewsPosts",
    };
  },
  components: {
    MostViewsPosts,
    MostLikesPosts,
  },
  methods: {
    showMostViews() {
      this.component = "MostViewsPosts";
    },
    showMostLikes() {
      this.component = "MostLikesPosts";
    },
  },
};
</script>
<style scoped>
.fast-header {
  margin: 50px 0 20px !important;
  border-bottom: 2px solid silver;
  display: flex;
  align-items: center;
  gap: 32px;
}
p {
  margin: 20px 0;
  cursor: pointer;
  padding: 5px !important;
}

p:last-child {
  margin-bottom: 20px !important;
}
.selected {
  color: #00a750;
  border-bottom: 2px solid #00a750;
}
</style>
