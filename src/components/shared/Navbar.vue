<template>
  <div class="ui inverted segment">
    <div class="container">
      <div class="ui inverted secondary pointing menu">
        <div class="right menu">
          <router-link to="/" class="item" :class="{ active: $route.fullPath == '/' }"> خانه </router-link>
          <a class="item"> دسته بندی مقالات </a>
        </div>
        <div class="left menu">
          <router-link to="/sign-up" class="ui item"> ثبت نام </router-link>
          <router-link to="/login" class="ui item"> ورود </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../../assets/css/navbar.css";
</style>
