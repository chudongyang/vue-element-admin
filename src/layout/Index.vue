<template>
  <div class="app-wrapper">
    <sidebar />
    <div class="main-container">
      <navbar />
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import AppMain from './AppMain';

export default {
  data () {
    return {};
  },
  created () {},
  methods: {},
  components: {
    Sidebar,
    Navbar,
    AppMain
  }
};
</script>
<style scoped lang='stylus'>
  .app-wrapper{
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
    .main-container{
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
  }
</style>
