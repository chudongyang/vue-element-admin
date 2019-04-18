<!-- <script>
export default {
  name: 'MenuItem',
  functional: true, // 使组件无状态 (没有 data ) 和无实例 (没有 this 上下文)
  props: {
    icon: { // 菜单的图标
      type: String,
      default: ''
    },
    title: { // 菜单的标题
      type: String,
      default: ''
    }
  },
  render (createElement, context) { // context是上下文，即this
    const { icon, title } = context.props;
    const vnodes = [];
    if (icon) {
      vnodes.push(<svg-icon icon-class={icon}/>);
    };

    if (title) {
      vnodes.push(<span slot="title">{(title)}</span>);
    };
    return vnodes;
  }
};
</script> -->
<template>
  <div class="icon-wrapper">
    <svg-icon v-if="icon" :icon-class="icon"/>
    <span v-if="title" class="menu-title" slot='title'>{{title}}</span>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    icon: { // 菜单的图标
      type: String,
      default: ''
    },
    title: { // 菜单的标题
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
  .menu-title{
    margin-left: 16px;
  }
</style>
