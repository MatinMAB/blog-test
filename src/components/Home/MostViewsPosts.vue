<template lang="">
  <div class="ui special cards grid">
    <div class="card five wide column" v-for="post in mostViewPosts" :key="post.id">
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
import { mapState } from "vuex";
export default {
  name: "MostViewsPosts",
  computed: {
    ...mapState(["posts"]),
    mostViewPosts() {
      return this.posts.slice(0, 3).sort((a, b) => b.id - a.id);
    },
  },
  methods: {
    shorten(title) {
      const newTitle = title.split(" ");
      return newTitle[0] + " " + newTitle[1];
    },
  },
};
</script>
<style scoped>
.ui.special.cards.grid {
  transform: scaleX(0.2);
  opacity: 0;
  animation: card 0.3s ease forwards;
  margin-bottom: 60px;
}
@keyframes card {
  0% {
    transform: scaleX(0.2);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
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
