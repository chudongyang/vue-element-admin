<template>
  <div class="sidebar-container">
    <logo />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        mode="vertical"
        >
        <sidebar-item v-for="route in permissionRoutes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Logo from '@/components/Logo.vue';

export default {
  data () {
    return {

    };
  },
  computed: {
    ...mapGetters(['permissionRoutes']),
    activeMenu () { // 当前激活菜单的index
      return '1';
    }
  },
  created () {},
  methods: {},
  components: {
    Logo
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

  }
</style>
