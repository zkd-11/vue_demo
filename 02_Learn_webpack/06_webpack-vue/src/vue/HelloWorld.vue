<template>
  <h2>我是home组件</h2>
  <h2>{{title}}</h2>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: 'hello homewold组件',
      message: '黑'
    }
  },
  methods() {},
}
</script>

<style>
</style>