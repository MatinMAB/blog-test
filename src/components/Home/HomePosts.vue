<template lang="">
  <div v-if="posts.length == 0" class="ui segment" style="height: 80px">
    <div class="ui active inverted dimmer">
      <div class="ui text loader">Loading</div>
    </div>
    <p></p>
  </div>
  <div v-else class="ui special cards grid">
    <div class="card five wide column" v-for="post in posts" :key="post.id">
      <div class="blurring dimmable image">
        <img src="../../assets/images/image.png" />
      </div>
      <div class="content">
        <router-link :to="`/posts/${post.id}`" class="header">{{ shorten(post.title) }}</router-link>

        <div>
          <a>
            <i class="user icon violet"></i>
            Chelsey Dietrich
          </a>
        </div>

        <div class="ui green rating disabled mini" data-icon="star" data-rating="5" data-max-rating="7"></div>
      </div>
      <div class="extra content">
        <a>
          <i class="heart icon red"></i>
          17 بار پسندیده شده
        </a>
      </div>
      <div class="extra content">
        <a>
          <i class="comment icon black"></i>
          نوشته شده در آبان ، 1400
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePosts",
  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    shorten(title) {
      const newTitle = title.split(" ");
      return newTitle[0] + " " + newTitle[1];
    },
    mountRating() {
      $(".ui.rating").rating();
    },
  },
  mounted() {
    this.mountRating();
    this.$store.dispatch("getPosts");

    //using this code cause of 'ui.rating' does not render in the first ui rendered, So it's show in scrolling 
    document.addEventListener("scroll", this.mountRating);
  },
  unmounted() {
    document.removeEventListener("scroll", this.mountRating);
  },
};
</script>

<style scoped>
.card.five.wide.column:hover {
  background-color: rgb(248, 248, 248);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}
.ui.rating {
  padding: 5px;
}
@media screen and (max-width: 888px) {
  .card.five.wide.column {
    width: 47% !important;
    display: inline-block !important;
  }
}

@media screen and (max-width: 490px) {
  .card.five.wide.column {
    width: 100% !important;
    display: inline-block !important;
  }
}
</style>
