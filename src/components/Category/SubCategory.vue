<template lang="">
  <div v-on:click="showDropDown">
    <div :class="{ 'fixed': isShownDropDown }"></div>
    {{ item.name }}
    <div class="ui dropdown">
      <div class="text"></div>
      &nbsp;
      <i class="dropdown icon"></i>
      <div class="menu" :class="{ 'show-dropdown': isShownDropDown }">
        <div class="item" v-for="(count, index) in 3">
          <span class="description">{{ item.name }} - {{ index }}</span>
          15
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubCategory",
  props: {
    item: Object,
  },
  data() {
    return {
      isShownDropDown: false,
    };
  },
  methods: {
    showDropDown() {
      this.isShownDropDown = !this.isShownDropDown;
    },
    closeDropDown(event) {
      console.log(event.target.classList.contains("show-dropdown").parentElement);
    },
  },
  mounted() {
    document.addEventListener("click", this.closeDropDown);
  },
};
</script>
<style scoped>
.show-dropdown {
  display: block !important;
  width: 200px !important;
  right: 0px;
  z-index: 20;
}
.fixed {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
}
</style>
