<template>
  <div class="sidebar-logo-container">
    <transition name="fade">
      <router-link to="/" key="hidden" class="logo-router-link " v-if="collapse">
        <img :src="logo" alt="" class="logo-icon"/>
      </router-link>
      <router-link to="/" key="collapse" class="logo-router-link" v-else>
        <img :src="logo" alt="" class="logo-icon"/>
        <h1 class="logo-title">{{title}}</h1>
      </router-link>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    collapse: { // 是否水平折叠起logo
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
      title: 'Vue Element Admin'
    }
  },
  created () {},
  methods: {}
}
</script>
<style scoped lang='stylus'>
  /* 不能定义leave-active的动画 */
  .fade-enter-active{
    transition: opacity 1.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .sidebar-logo-container{
    width: 100%;
    height: 50px;
    overflow: hidden;
    background: #2b2f3a;
    .logo-router-link{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      .logo-icon{
        width: 32px;
        height: 32px;
      }
      .logo-title{
        margin-left: 12px;
        font-size: 14px;
        color: #fff;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        font-weight: 600;
      }
    }
  }
</style>
