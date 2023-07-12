<template>
  <div>
    <input type="text" v-model="message">
    <h2> {{ message }}</h2>
  </div>
</template>

<script>
// 文件需注意命名格式， 原文加前缀数字
import debounceRef from './hook/useDebounceRef.js'
export default {
  setup() {
    const message = debounceRef('hello');

    return {
      message
    }
  }
}
</script>

<style scoped>
</style>