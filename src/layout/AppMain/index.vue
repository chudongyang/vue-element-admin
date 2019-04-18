<template>
  <div class="app-main-container">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {};
  },
  created () {},
  methods: {}
};
</script>
<style scoped lang='stylus'>
  .app-main-container{
    flex-grow: 1;
  }
  /*fade-transform*/
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all .5s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
