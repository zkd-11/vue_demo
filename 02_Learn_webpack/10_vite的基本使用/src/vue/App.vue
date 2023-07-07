<template>
  <h2>我是vue渲染的组件</h2>
  <h2>{{title}}</h2>
</template>

<script>

export default {
  data() {
    return {
      title: 'hello world',
    }
  },
  components: { 
  },
  methods() {},
}
</script>

<style scoped>
  h2 {
    color: red;
  }
</style>