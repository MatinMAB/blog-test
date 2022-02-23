<template lang="">
  <div class="pusher">
    <div class="ui inverted vertical masthead center aligned segment">
      <div class="ui text container">
        <h1 class="ui inverted header">{{ title }}</h1>
        <h2>{{ description }}</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageTitle",
  props: {
    title: String,
    description: String,
  },
};
</script>
<style></style>
