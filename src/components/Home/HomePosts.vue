<template>
  <div class="ui special cards grid">
    <div class="card five wide column">
      <div class="blurring dimmable image">
        <img src="../../assets/images/image.png" />
      </div>
      <div class="content">
        <a class="header">Team Fu {{ width }}</a>
        <div class="meta">
          <span class="date">Created in Sep 2014</span>
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="users icon"></i>
          2 Members
        </a>
      </div>
    </div>
    <div class="card five wide column">
      <div class="blurring dimmable image">
        <div class="ui dimmer">
          <div class="content">
            <div class="center">
              <div class="ui inverted button">Add Friend</div>
            </div>
          </div>
        </div>
        <img src="../../assets/images/image.png" />
      </div>
      <div class="content">
        <a class="header">Team Fu</a>
        <div class="meta">
          <span class="date">Created in Sep 2014</span>
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="users icon"></i>
          2 Members
        </a>
      </div>
    </div>
    <div class="card five wide column">
      <div class="blurring dimmable image">
        <div class="ui dimmer">
          <div class="content">
            <div class="center">
              <div class="ui inverted button">Add Friend</div>
            </div>
          </div>
        </div>
        <img src="../../assets/images/image.png" />
      </div>
      <div class="content">
        <a class="header">Team Fu</a>
        <div class="meta">
          <span class="date">Created in Sep 2014</span>
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="users icon"></i>
          2 Members
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: window.innerWidth,
    };
  },
  mounted() {
    
  },
};
</script>

<style scoped>
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
