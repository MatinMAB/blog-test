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
            <div class="ui compact menu">
              <div class="ui simple dropdown item">
                {{ item.name }}
                <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item" v-for="index in 2">{{ item.name }} - {{ index }}</div>
                </div>
              </div>
            </div>
            <div class="meta">نعداد مقالات : 14</div>
            <div class="description">توضیحی کوتاه در باب موضوع موجود در سایت ...</div>
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
  mounted() {
    $(".ui.dropdown").dropdown();
  },
};
</script>
<style scoped>
h2 {
  margin: 60px 0 40px !important;
  border-bottom: 2px solid silver;
}
.ui.small.image {
  margin-left: 20px !important;
}
.ui.relaxed.divided.items {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  grid-gap: 8px;
}
.item {
  border-top: none !important;
  padding: 1.5em 0 !important;
  border-bottom: 1px solid #00a750 !important;
}
.ui.divided.items > .item:first-child,
.ui.divided.items > .item:last-child {
  padding: 1.5em 0 !important;
}
.ui.divided.items > .item:last-child {
  border-bottom: 1px solid transparent !important;
}
.meta {
  color: #00c760 !important;
}
.ui.compact.menu {
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;
}
.ui.simple.dropdown.item {
  background: transparent !important;
  padding: 0 !important;
  font-size: 16px !important;
}
.ui.compact.menu .item {
  border-bottom: none !important;
}
@media screen and (max-width: 400px) {
  .ui.relaxed.divided.items {
    grid-template-columns: 1fr !important;
  }
}
</style>
