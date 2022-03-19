<template lang="">
  <div class="container">
    <h2>محل تبلیغات</h2>
    <div class="ui stackable celled grid container" style="direction: ltr">
      <div class="three column row">
        <div class="column ui" v-for="col in 3">
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
  name: "HomeADS",
};
</script>
<style scoped>
h2 {
  margin: 50px 0 30px !important;
  border-bottom: 2px solid silver;
}
</style>
