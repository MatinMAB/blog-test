<template lang="">
  <div class="container">
    <h2>محل تبلیغات</h2>
    <div class="ui stackable celled grid">
      <div class="five column row">
        <div class="column" v-for="col in 5">
          <div class="ui segment">
            <a href="#" class="ui image">
              <img src="../../assets/images/image.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoriesADS",
};
</script>
<style scoped>
h2 {
  margin: 30px  0!important;
  border-bottom: 2px solid silver;
}
</style>
