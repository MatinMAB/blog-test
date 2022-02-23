<template lang="">
  <div class="ui inverted vertical footer segment">
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="three wide column">
          <h4 class="ui inverted header">درباره ما</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">نگاه کلی</a>
            <a href="#" class="item">تماس با ما</a>
            <a href="#" class="item">قوانین سایت</a>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">خدمات</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">خدمات 1</a>
            <a href="#" class="item">خدمات 2</a>
            <a href="#" class="item">خدمات 3</a>
            <a href="#" class="item">خدمات 4</a>
          </div>
        </div>
        <div class="seven wide column">
          <h4 class="ui inverted header">فوتر</h4>
          <p>متن اضافی</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>

.ui.inverted.vertical.footer.segment{
margin-top:30px;
}

@media screen and (max-width:768px){
  .ui.container{
    text-align:center !important;
  }
}

</style>
