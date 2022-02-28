<template lang="">
  <div>
    <p style="direction:ltr">این تیتر صرفا یک متن تستی است برای تیتر خبر های سایت</p>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
div {
  background-color: #00a750;
  color: #fff;
  padding: 8px;
  overflow: hidden;
  line-height:8px;
}
p {
  -moz-animation: marquee 18s linear infinite;
  -webkit-animation: marquee 18s linear infinite;
  animation: marquee 18s linear infinite;
}
@keyframes marquee {
  0% {
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  100% {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
</style>
