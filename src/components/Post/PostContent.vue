<template lang="">
  <div class="container">
    <h2>تک صفحه مقاله</h2>
    <div class="ui two column stackable grid">
      <div class="eleven wide column">
        <div class="ui segment">
          <PostDetails />
        </div>
      </div>
      <div class="five wide column">
        <Sidebar />
      </div>
    </div>
  </div>
</template>
<script>
import PostDetails from "./PostDetails.vue";
import Sidebar from "../shared/Sidebar.vue";
export default {
  name: "PostContent",
  components: {
    Sidebar,
    PostDetails,
  },
};
</script>
<style scoped>
h2 {
  margin: 40px 0 20px !important;
  border-bottom: 2px solid silver;
}
.ui.segment {
  margin-top: 25px;
}
</style>
