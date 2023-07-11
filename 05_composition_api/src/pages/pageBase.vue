<template>
    <h2>pageBase组件</h2>
</template>

<script>

export default {
  data() {
    return {
      title: "韩绝",
    }
  },
  components: { 
    
  },
  methods: {
    foo() {
      console.log('被继承的组件');
    }
  },
}
</script>

<style scoped>
</style>