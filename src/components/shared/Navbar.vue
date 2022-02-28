<template lang="">
  <div class="ui inverted segment">
    <div class="container">
      <div class="ui inverted secondary pointing menu">
        <div class="right menu">
          <router-link to="/" class="item" :class="{ active: $route.fullPath == '/' }"> خانه </router-link>
          <router-link to="/categories" class="item" :class="{ active: $route.fullPath == '/categories' }"> دسته بندی مقالات </router-link>
        </div>
        <div class="left menu">
          <a href="https://darikex.com/auth/signup" class="ui item"> ثبت نام </a>
          <a href="https://darikex.com/auth/signin" class="ui item"> ورود </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ui.inverted.segment {
  border-radius: 0;
  margin-bottom: 0 !important;
  position: sticky !important;
  top: 0 !important;
  z-index: 99 !important;
}

</style>
