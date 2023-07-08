<template>
    <!-- 当接受父组件传递过来的className时默认赋值到根组件 -->
<div>
  <!-- 表示继承父组件的className -->
  <h2 :class="$attrs.class" >{{ title }}</h2>
  <h2>{{ content }}</h2>
</div>
</template>

<script>

export default {
  // 表示不继承父组件传递过来的className
  inheritAttrs: false,

  // props: ['title', 'content'],
  props: {
    title: String,
    content: {
      type: [String, Number],
      required: true,
      default: "默认值, 不与required并用",
    },
    info: {
      type: Object,
      deault() {
        return {name: '需要return， 因为当组件被多个使用需要引用不同地址的对象'}
      }
    }
  }
}
</script>

<style scoped>
</style>