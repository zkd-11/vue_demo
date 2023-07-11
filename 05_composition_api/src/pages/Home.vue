<template>
    <h2>home组件</h2>
    <h2>{{ title }}</h2>
    <button @click="foo">
      继承组件函数
    </button>
</template>

<script>
import pageBase from './pageBase.vue'
export default {
  extends: pageBase,
  data() {
    return {
    
    }
  },
  components: { 

  },
  methods: {},
}
</script>

<style scoped>
</style>