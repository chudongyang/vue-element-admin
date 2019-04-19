<template>
  <!-- 路由元信息中 hidden为true，就不显示在侧边栏上-->
  <div class="menu-wrapper" v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <app-link :path="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <menu-item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title"></menu-item>
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <menu-item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title"></menu-item>
      </template>
      <sidebar-item v-for="child in item.children" :item="child" :key="child.path" :is-nest="true" class="nest-menu" :base-path="resolvePath(child.path)"></sidebar-item>
    </el-submenu>
  </div>
</template>
<script>
import AppLink from './AppLink'
import MenuItem from './MenuItem'
import { isExternal } from '@/assets/js/validate'
import path from 'path'

export default {
  name: 'SidebarItem', // 这个组件是递归生成菜单，加这个name是为了递归使用
  props: {
    item: { // 单个路由对象
      type: Object,
      required: true,
      default: () => ({})
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  created () {
    // 如果该路由下只有一个要显示的子路由，则保存子路由；没有符合条件的子路由，则保存父级路由
    this.onlyOneChild = null
  },
  methods: {
    hasOneShowingChild (children = [], parent) { // 判断该路由下的子路由
      const showingChildren = children.filter(item => {
        // 把这个路由下面的子路由中的含有hidden为true的路由过滤掉， 返回一个新的需要显示在侧边栏上的子路由集合
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      // 只有一个子路由的时候，默认显示子路由
      if (showingChildren.length === 1) {
        return true
      }

      // 如果没有要显示的子路由，则显示父级
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath (routePath) {
      // if (isExternal(routePath)) {
      //   return routePath;
      // }
      return path.resolve(this.basePath, routePath)
    }
  },
  components: {
    AppLink,
    MenuItem
  }
}
</script>
<style scoped lang='stylus'></style>
