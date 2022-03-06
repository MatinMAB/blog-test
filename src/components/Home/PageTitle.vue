<template lang="">
  <div class="pusher">
    <div class="ui inverted vertical masthead center aligned segment">
      <div class="ui text container">
        <h1 class="ui inverted header">بلاگ صرافی داریک</h1>
        <h2>به سایت ما خوش آمدید</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageTitle",
};
</script>
<style scoped>
.ui.inverted.vertical.masthead.center.aligned.segment {
  height: calc(100vh - 70px);
    padding: 30px 0;

}
.ui.text.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.ui.text.container h1 {
  transform: translateX(-1000px);
  opacity: 0;
  animation: HomeTitle 1.2s ease-in-out forwards;
}
.ui.text.container h2 {
  transform: translateX(-1000px);
    opacity: 0;

  animation: HomeTitle 1.2s .2s ease-in-out forwards;
}
@keyframes HomeTitle {
  0% {
    transform: translateX(-1000px);
        opacity: 0;

  }
  90% {
    transform: translateX(40px);
        opacity: .8;

  }
  100% {
    transform: translateX(0px);
        opacity: 1;

  }
}
</style>
