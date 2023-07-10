<template>
  <div>
    <template v-if="isShow">
        <home></home>
    </template>
    <button @click="isShow=!isShow">挂载/取消挂载组件</button>
  </div>
</template>

<script>
import Home from './Home.vue'
export default {
  data() {
    return {
    isShow: true,
    }
  },
  components: { 
    Home
  },
  methods: {},
}
</script>

<style scoped>
</style>