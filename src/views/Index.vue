<template>
  <div class="home">
    <Topbar />
    <Navbar />
    <Banner />
    <About />
    <Plans />
    <VideoSection />
    <Analysis />
    <Leaderboard />
    <Trade />
    <!-- <Market /> -->
    <!-- <Testimonials /> -->
    <!-- <AppBanner /> -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import About from '@/components/About.vue'
import Plans from '@/components/Plans.vue'
import VideoSection from '@/components/VideoSection.vue'
import Analysis from '@/components/Analysis.vue'
import Leaderboard from '@/components/Leaderboard.vue'
import Trade from '@/components/Trade.vue'
import Market from '@/components/Market.vue'
import Testimonials from '@/components/Testimonials.vue'
import AppBanner from '@/components/AppBanner.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Index',
  components:{
    Topbar,
    Navbar,
    Banner,
    About,
    Plans,
    VideoSection,
    Analysis,
    Leaderboard,
    Trade,
    Market,
    Testimonials,
    AppBanner,
    Footer
  }
}
</script>
