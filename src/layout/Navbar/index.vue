<template>
  <div class="navbar-container">
    <div class="left-navbar">
      <hamburger @click.native="bindToggleSidebar" :is-active="sidebar.opened"/>
      <breadcrumb />
    </div>
    <div class="right-navbar">
      <el-dropdown class="dropdown-area hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar" alt="" class="user-avatar">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>项目地址</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import Hamburger from '@/components/Hamburger.vue';
import Breadcrumb from '@/components/Breadcrumb';
import { mapGetters, mapActions } from 'vuex';

export default {
  data () {
    return {};
  },
  computed: {
    ...mapGetters(['avatar', 'sidebar'])
  },
  created () {},
  methods: {
    ...mapActions('app', ['ToggleSidebar']),
    bindToggleSidebar () { // 切换sidebar
      console.log(this.$store);
      this.ToggleSidebar();
    }
  },
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
    box-shadow: 0 2px 8px rgba(0,21,41,0.2);
    overflow: hidden;
    z-index: 999;
    .left-navbar{
      display: flex;
      height: 50px;
    }
    .right-navbar{
      margin-right: 30px;
      .dropdown-area{
        position: relative;
        padding: 0 5px;
        height: 100%;
        .avatar-wrapper{
          display: flex;
          align-items: center;
          height: 100%;
          .user-avatar{
            height: 40px;
            width: 40px;
            border-radius: 10px;
          }
          .el-icon-caret-bottom{
            position: absolute;
            right: -15px;
            top: 32px;
            font-size: 12px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
