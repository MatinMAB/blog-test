<template lang="">
  <div v-if="!post" class="ui segment" style="height: 80px">
    <div class="ui active inverted dimmer">
      <div class="ui text loader">Loading</div>
    </div>
    <p></p>
  </div>
  <div v-else class="postDetail">
    <img src="../../assets/images/image.png" class="postImage" />
    <h2>عنوان : {{ post.title }}</h2>
    <h5>Chelsey Dietrich</h5>
    <p>
      {{ post.body }} --- reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur
      doloremque ipsam iure quis sunt voluptatem rerum illo velit reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis
      hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit reiciendis voluptatem adipisci sit amet autem
      assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit reiciendis
      voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt
      voluptatem rerum illo velit reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur
      doloremque ipsam iure quis sunt voluptatem rerum illo velit reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis
      hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit reiciendis voluptatem adipisci sit amet autem
      assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit reiciendis
      voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt
      voluptatem rerum illo velit reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur
      doloremque ipsam iure quis sunt voluptatem rerum illo velit reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis
      hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit reiciendis voluptatem adipisci sit amet autem
      assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit reiciendis
      voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt
      voluptatem rerum illo velit reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur
      doloremque ipsam iure quis sunt voluptatem rerum illo velit reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis
      hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit reiciendis voluptatem adipisci sit amet autem
      assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit reiciendis
      voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt
      voluptatem rerum illo velit
    </p>
    <div class="extra content">
      <div class="icons">
        <span>
          <i class="eye icon black"></i>
          22
        </span>
        <span>
          <i class="thumbs up icon blue"></i>
          17
        </span>
        <span>
          <i class="thumbs down icon red"></i>
          3
        </span>
      </div>
      <div class="ui green rating" data-icon="star" data-rating="5" data-max-rating="7" ></div>
      <div class="dateCreated">
        <span>آبان ماه ، 1400</span>
      </div>
    </div>

    <h3 class="ui dividing header">نظرات</h3>
    <div class="ui comments">
      <div class="comment">
        <a class="avatar">
          <img src="../../assets/images/image.png" />
        </a>
        <div class="content">
          <a class="author">مهدی</a>
          <div class="metadata">
            <span class="date">امروز در 17:42</span>
            <i class="thumbs down icon gray"></i>
            <i class="thumbs up icon gray"></i>
          </div>
          <div class="text">
            <p>مفید بود</p>
          </div>
          <div class="actions" v-if="isLoggedIn">
            <a class="reply">پاسخ دادن</a>
          </div>
        </div>
      </div>
      <div class="ui divider"></div>

      <div class="comment" style="margin-right: 40px">
        <a class="avatar">
          <img src="../../assets/images/image.png" />
        </a>
        <div class="content">
          <a class="author">حسین</a>
          <div class="metadata">
            <span class="date">دیروز در 00:48</span>
            <i class="thumbs down icon gray"></i>
            <i class="thumbs up icon gray"></i>
          </div>
          <div class="text">
            <p>متن لورم متنی بی معنی به مزاج برنامه نویسان و طراحان وب خوشایند باشد.</p>
          </div>
          <div class="actions" v-if="isLoggedIn">
            <a class="reply">پاسخ دادن</a>
          </div>
        </div>
      </div>
      <div class="ui divider"></div>

      <div class="comment">
        <a class="avatar">
          <img src="../../assets/images/image.png" />
        </a>
        <div class="content">
          <a class="author">محمد</a>
          <div class="metadata">
            <span class="date">5 روز پیش</span>
            <i class="thumbs down icon gray"></i>
            <i class="thumbs up icon gray"></i>
          </div>
          <div class="text">مقاله بسیار مفیدی بود</div>
          <div class="actions" v-if="isLoggedIn">
            <a class="reply">پاسخ دادن</a>
          </div>
        </div>
      </div>
      <div class="ui divider"></div>

      <div class="comment">
        <a class="avatar">
          <img src="../../assets/images/image.png" />
        </a>
        <div class="content">
          <a class="author">میتن</a>
          <div class="metadata">
            <span class="date">همین الان</span>
            <i class="thumbs down icon gray"></i>
            <i class="thumbs up icon gray"></i>
          </div>
          <div class="text">مفید بود 🌹</div>
          <div class="actions" v-if="isLoggedIn">
            <a class="reply">پاسخ دادن</a>
          </div>
        </div>
      </div>
      <form class="ui reply form" v-if="isLoggedIn">
        <grammarly-extension
          data-grammarly-shadow-root="true"
          style="position: absolute; top: 0px; left: 0px; pointer-events: none"
          class="cGcvT"
        ></grammarly-extension
        ><grammarly-extension
          data-grammarly-shadow-root="true"
          style="mix-blend-mode: darken; position: absolute; top: 0px; left: 0px; pointer-events: none"
          class="cGcvT"
        ></grammarly-extension>
        <div class="field">
          <textarea spellcheck="false"></textarea>
        </div>
        <div class="ui blue labeled submit icon button"><i class="icon edit"></i>ثبت نظر</div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "PostDetails",
  data() {
    return {};
  },
  computed: {
    ...mapState(["post", "isLoggedIn"]),
  },
  mounted() {
    this.$store.dispatch("getPost", this.$route.params.id);
    $(".ui.rating").rating();
  },
};
</script>
<style scoped>
.postDetail {
  padding: 5px;
}
.postImage {
  width: 100%;
}
h5 {
  color: silver;
}
p {
  text-align: justify;
  padding: 5px 15px;
}
.extra.content {
  margin-top: 60px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.extra.content .icons {
  display: flex;
  align-items: center;
  gap: 20px;
}
.extra.content .dateCreated {
  color: silver;
}
.icon {
  cursor: pointer;
}
h3.ui.dividing.header {
  margin-top: 55px !important;
}
.comments {
  margin: 30px auto;
}
.author {
  padding-left: 10px;
}
.metadata .date {
  margin-left: 15px !important;
}
.metadata i {
  display: inline-block !important;
  margin: 0 2px !important;
}
</style>
