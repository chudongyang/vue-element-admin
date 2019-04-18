<template>
  <div class="sidebar-container">
    <logo :collapse="isCollapse"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="$route.path"
        :collapse="isCollapse"
        mode="vertical"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        :collapse-transition="false"
        >
        <sidebar-item v-for="route in permissionRoutes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Logo from './Logo.vue';
import SidebarItem from './SidebarItem';

export default {
  data () {
    return {

    };
  },
  computed: {
    ...mapGetters(['permissionRoutes', 'sidebar']),
    activeMenu () { // 当前激活菜单的index
      return '1';
    },
    isCollapse () { // 是否水平折叠起菜单，默认是false
      return !this.sidebar.opened;
    }
  },
  created () {
    console.log(this.$router);
  },
  methods: {},
  components: {
    Logo,
    SidebarItem
  }
};
</script>
<style scoped lang='stylus'>
  .sidebar-container{
    height: 100%;
    width: $sideBarWidth;
    overflow: hidden;
    transition: width 0.28s;
    background-color: rgb(48, 65, 86);
    .el-menu{
      border: none;
    }
  }
</style>
