<template lang="">
  <div class="swiper-slide">
    <div class="ui card">
      <div class="content">
        <div class="left floated meta">14h</div>
        <img class="ui avatar image" src="../../assets/images/image.png" /> Elliot
      </div>
      <div class="image">
        <img src="../../assets/images/image.png" />
      </div>
      <div class="content">
        <span class="right floated">
          <i class="heart outline like icon"></i>
          17 likes
        </span>
        <span class="left floated">
          <i class="comment icon"></i>
          3 comments
        </span>
      </div>
      <div class="extra content">
        <div class="ui large transparent left icon input">
          <i class="heart outline icon"></i>
          <input type="text" placeholder="Add Comment..." />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SwiperSilde",
};
</script>
<style scoped>
.ui.card{
  cursor: pointer;
  width: 100%;
}
</style>
