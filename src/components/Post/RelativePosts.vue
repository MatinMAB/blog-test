<template lang="">
  <div class="container">
    <h2>مقالات مرتبط</h2>
    <div class="swiper" ref="swiperSlider">
      <div class="swiper-wrapper">
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<script>
//Use Swiper Slider
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

//Components
import SwiperSlide from "../Post/SwiperSlide.vue";

export default {
  name: "RelativePosts",
  components: {
    SwiperSlide,
  },
  mounted() {
    new Swiper(this.$refs.swiperSlider, {
      // Optional parameters
      slidesPerView: 4,
      loop: false,
      spaceBetween: 20,
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1200: { slidesPerView: 4, spaceBetween: 20 },
        992: { slidesPerView: 3, spaceBetween: 20 },
        680: { slidesPerView: 2, spaceBetween: 10 },
        360: { slidesPerView: 1, spaceBetween: 5 },
      },
    });
  },
};
</script>
<style scoped>
.swiper-button-prev::after,.swiper-button-next::after{
  text-shadow: 0 0 5px #000;
  color : #000;
}
.swiper{
  padding:10px ;
}
h2 {
  margin: 80px 0 30px !important;
  border-bottom: 2px solid silver;
}
.box {
  width: 100%;
  height: 100px;
  background-color: red;
  margin-bottom: 40px;
}
</style>
