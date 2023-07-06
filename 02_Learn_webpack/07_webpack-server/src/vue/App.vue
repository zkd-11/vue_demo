<template>
  <h2>我是vue渲染的组件</h2>
  <h2>{{title}}</h2>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
export default {
  data() {
    return {
      title: 'hello world',
      message: '黑'
    }
  },
  components: { 
    HelloWorld
  },
  methods() {},
}
</script>

<style scoped>
  h2 {
    color: red;
  }
</style>