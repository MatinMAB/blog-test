<template lang="">
  <div class="ui inverted vertical footer segment" style="direction: ltr; text-align: center">
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="seven wide column">
          <h4 class="ui inverted header">صرافی داریک</h4>
          <p>...</p>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">تماس با ما</h4>
          <div class="ui inverted link list">
            <a href="#" class="item"> <i class="envelope icon"></i> info@darikex.com</a>
            <a href="#" class="item"> <i class="phone icon"></i> +98 21 88783840</a>
            <div class="ui divider"></div>
            <a href="#" class="item"> <i class="twitter icon"></i> Twitter</a><a href="#" class="item"> <i class="telegram icon"></i> Telegram</a
            ><a href="#" class="item"> <i class="instagram icon"></i> Instagram</a>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">لینک های مفید</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">مراحل ثبت نام</a>
            <a href="#" class="item">مراحل خرید ارز دیجیتال</a>
            <a href="#" class="item">مراحل فروش ارز دیجیتال</a>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">درباره صرافی داریک</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">درباره ما</a>
            <a href="#" class="item">بلاگ داریک</a>
            <a href="#" class="item">امنیت کیف پول</a>
            <a href="#" class="item">تماس با ما</a>
            <a href="#" class="item">موقعیت های شغلی</a>
          </div>
        </div>
      </div>
    </div>
    <div class="ui divider" style="margin: 30px 0"></div>
    <img class="ui centered mini image" src="../../assets/images/darikex-icon.png" />
    <div class="ui horizontal inverted small divided link list">
      <a class="item">FAQ</a>
      <a class="item">شرایط و قوانین</a>
      <a class="item">حریم خصوصی</a>
      <a class="item">قانون و امنیت</a>
      <a class="item">درباره ما</a>
      <a class="item">تماس با ما</a>
    </div>
  </div>
  <div>
    <i :class="{ 'angle up icon': isShownBackToTop }" v-on:click="backToTop"></i>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      isShownBackToTop: false,
    };
  },
  methods: {
    showBackToTop() {
      if (document.documentElement.scrollTop > 200) {
        this.isShownBackToTop = true;
      } else {
        this.isShownBackToTop = false;
      }
    },
    backToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  created() {
    window.addEventListener("scroll", this.showBackToTop);
  },
  unmounted() {
    window.removeEventListener("scroll", this.showBackToTop);
  },
};
</script>
<style scoped>
.ui.inverted.vertical.footer.segment {
  margin-top: 40px;
}

.angle.up.icon {
  width: 36px;
  background-color: #00a750;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 36px;
  position: fixed;
  left: 15px;
  bottom: 15px;
  z-index: 99;
  box-shadow: 0 0 10px rgba(34, 155, 10, 0.5);
}
.d-none {
  display: none !important;
}
@media screen and (max-width: 768px) {
  .ui.container {
    text-align: center !important;
  }
}
</style>
