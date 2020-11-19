<template>
  <div id="app">
      <NavBar />
      <SideBar />
      <div class="row row-cols-1 m-4 p-5">
        <h1>Analytics</h1>
      </div>
      <section style="background-color: #f4f5f8">
        <div class="row row-cols-1 row-cols-md-4 p-4">
          <Sales />
          <Engagement />
          <Acquisition />
          <Rewards />
        </div>
        <div class="p-4">
          <DateFilter />
        </div>
        <div class="p-4">
          <Overview title="Sales Overview" />
        </div>
        <div class="row p-4">
          <BranchPerformance />
          <RewardsPerformance />
        </div>
      </section>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import Sales from './components/Sales.vue'
import Engagement from './components/Engagement.vue'
import Acquisition from './components/Acquisition.vue'
import Rewards from './components/Rewards.vue'
import DateFilter from './components/DateFilter.vue'
import Overview from './components/Overview.vue'
import BranchPerformance from './components/BranchPerformance.vue'
import RewardsPerformance from './components/RewardsPerformance.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    NavBar, SideBar, Sales, Engagement, Acquisition, Rewards, DateFilter, Overview, BranchPerformance, RewardsPerformance
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
