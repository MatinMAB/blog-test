<template lang="">
  <div class="container">
    <h2>دسته بندی مقالات</h2>
    <div class="ui container">
      <div class="ui relaxed divided items">
        <div class="item" v-for="item in category">
          <div class="ui small image">
            <img src="../../assets/images/image.png" />
          </div>
          <div class="content">
            <a class="header">{{ item.name }}</a>
            <div class="meta">نعداد مقالات : 14</div>
            <div class="description">
              توضیحی کوتاه در باب موضوع موجود در سایت (این موضوع از موضوعاتی است که موضوع می‌شود موضوع اما این با موضوع می‌شود موضوع که خوب موضوعی
              است.)
            </div>
            <div class="extra">
              <div class="ui right floated black button">
                دیدن مقالات
                <i class="left chevron icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Categories",
  computed: {
    category() {
      return this.$store.state.category;
    },
  },
};
</script>
<style scoped>
h2 {
  margin: 30px 0 !important;
  border-bottom: 2px solid silver;
}
.ui.small.image {
  margin-left: 20px !important;
}
</style>
