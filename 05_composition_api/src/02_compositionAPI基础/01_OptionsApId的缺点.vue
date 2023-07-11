<template>
  {{ counter }}
  <button @click="increment">+</button>
  <button @click="decrement">+</button>
</template>

<script>
//  optionApi的缺点， 难以维护， 可读性较差， 难以复用组件
export default {
  data() {
    return {
      counter: 0,
    }
  },
  components: { 

  },
  methods: {
    increment() {
      this.increment++
    }
  },
}
</script>

<style scoped>
</style>