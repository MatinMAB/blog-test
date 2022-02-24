<template lang="">
  <div>
    <Navbar />
    <PageTitle title="سایت بلاگ" description="به سایت ما خوش آمدید"/>
    <HomeADS />
    <HomeContent />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/shared/Navbar";
import PageTitle from "../components/shared/PageTitle";
import Footer from "../components/shared/Footer";
import HomeContent from "../components/Home/HomeContent";
import HomeADS from "../components/Home/HomeADS";
export default {
  name: "Home",
  components: {
    HomeContent,
    HomeADS,
    PageTitle,
    Navbar,
    Footer
  },
};
</script>

<style scoped>
@import "../assets/css/home.css";
</style>
