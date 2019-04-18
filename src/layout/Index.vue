<template>
  <div class="app-wrapper" :class="{'hide-sidebar': !sidebar.opened}">
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
import { mapGetters } from 'vuex';

export default {
  data () {
    return {};
  },
  computed: {
    ...mapGetters(['sidebar'])
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
<style lang='stylus'>
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
    .el-submenu .el-menu-item, .nest-menu .el-submenu .el-submenu__title{
      background-color: #1f2d3d !important;
    }
    &.hide-sidebar{
      .sidebar-container{
        width: 54px;
      }
      .el-menu{
        width: 54px;
      }
      .menu-title{
        display: none;
        height: 0;
        width: 0;
      }
      .el-submenu .el-submenu__icon-arrow{
        display: none;
      }
    }
  }
</style>
