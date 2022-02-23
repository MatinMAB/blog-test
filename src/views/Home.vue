<template>
  <div>
    <div class="pusher">
      <div class="ui inverted vertical masthead center aligned segment">
        <div class="ui text container">
          <h1 class="ui inverted header">سایت بلاگ</h1>
          <h2>به سایت ما خوش آمدید</h2>
        </div>
      </div>
    </div>
    <HomeContent />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from "../components/Home/HomeContent";
export default {
  name: "Home",
  components: {
    HomeContent,
  },
};
</script>

<style scoped>
@import "../assets/css/home.css";
</style>
