<template>

  <div>
    <h2>这是子组件开始</h2>
    <slot > </slot>
     
    <h2>这是子组件结束</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '子组件的信息'
    }
  },
  components: { 
  },
  methods: {},
}
</script>

<style scoped>
</style>