<template>
  <el-breadcrumb separator="/" class="app-breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{item.meta.title}}</span>
        <a v-else @click.prevent="bindBreadcrumb(item)">{{item.meta.title}}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script>
import pathToRegexp from 'path-to-regexp';

export default {
  data () {
    return {
      levelList: [] // 面包屑的路径集合，根据路径的变化动态改变
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created () {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb () { // 获取面包屑的导航列表
      let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];
      if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
        matched = [{ path: '/dashboard', meta: { title: '面板' } }].concat(matched);
      }
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false);
    },
    pathCompile (path) { // 处理带参数的路径
      let { params } = this.$route;
      let toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    bindBreadcrumb (item) { // 点击面包屑跳转
      console.log(item);
      let { redirect, path } = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(this.pathCompile(path));
    }
  }
};
</script>
<style scoped lang='stylus'>
  .app-breadcrumb{
    display: flex;
    align-items: center;
  }
</style>
