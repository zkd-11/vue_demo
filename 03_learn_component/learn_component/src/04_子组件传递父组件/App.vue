<template>
  <h2>当前计数： {{counter}}}</h2>
  <counter-operation @add="handleAdd" @sub="handleSub" @increment="handleIn"></counter-operation>
</template>

<script>
import CounterOperation from './CounterOperation.vue'
export default {
  data() {
    return {
      counter: 0
    }
  },
  components: { 
    CounterOperation
  },
  methods: {
    handleAdd () {
      this.counter++
    },
    handleSub () {
      this.counter--
    },
    handleIn (n, name, age) {
      console.log(name, age);
      this.counter += n
    }
  },
}
</script>

<style scoped>
</style>