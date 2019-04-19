<template>
  <router-link :to="path">
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props: {
    path: { // 跳转的路由
      type: String,
      default: '/'
    }
  }
}
</script>
<style scoped lang='stylus'></style>
