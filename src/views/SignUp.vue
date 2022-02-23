<template lang="">
  <div class="loginBox">
    <div class="ui middle aligned center aligned grid container">
      <div class="column">
        <h2 class="ui teal image header">
          <div class="content">ساخت حساب کاربری جدید</div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="email" placeholder="آدرس ایمیل" />
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="phone icon"></i>
                <input type="text" name="email" placeholder="شماره همراه" />
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="رمز عبور" />
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="تایید رمز عبور" />
              </div>
            </div>
            <div class="ui fluid large black submit button">ثبت نام</div>
            <div class="ui message">از قبل حساب کاربری دارید ؟ <router-link to="/login">از اینجا وارد شوید</router-link></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.container {
}
.ui.stacked.segment {
  padding: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.content {
  color: #000;
  margin-bottom: 20px;
}
.column {
  max-width: 500px !important;
}
.loginBox {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/images/Circles.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
input::placeholder {
  font-family: "sahel";
}
</style>
