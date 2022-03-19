<template lang="">
  <div>
    <Navbar />
    <PageTitle/>
    <HomeADS />
    <FastAccess/>
    <HomeContent />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
//Components
import Navbar from "../components/shared/Navbar";
import PageTitle from "../components/Home/PageTitle";
import Footer from "../components/shared/Footer";
import HomeContent from "../components/Home/HomeContent";
import HomeADS from "../components/Home/HomeADS";
import FastAccess from "../components/Home/FastAccess";
export default {
  name: "Home",
  components: {
    HomeContent,
    FastAccess,
    HomeADS,
    PageTitle,
    Navbar,
    Footer
  },
};
</script>

<style scoped>
</style>
