<template>
  <div class="navbar-container">
    <div class="left-navbar">
      <hamburger />
      <breadcrumb />
    </div>
    <div class="right-navbar"></div>
  </div>
</template>
<script>
import Hamburger from '@/components/Hamburger.vue';
import Breadcrumb from '@/components/Breadcrumb';

export default {
  data () {
    return {};
  },
  created () {},
  methods: {},
  components: {
    Hamburger,
    Breadcrumb
  }
};
</script>
<style scoped lang='stylus'>
  .navbar-container{
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 50px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    overflow: hidden;
    z-index: 999;
    .left-navbar{
      display: flex;
      height: 50px;
    }
  }
</style>
