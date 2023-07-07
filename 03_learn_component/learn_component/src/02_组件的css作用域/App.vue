<template>
  <h2>vue根组件</h2>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from './HelloWorld';
export default {
  data() {
    return {
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