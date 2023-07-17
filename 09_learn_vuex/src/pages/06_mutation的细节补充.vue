<template>
  <hr>
  <h2> {{ $store.state.counter }}</h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="addTen">+10</button>
  
</template>

<script>
import { INCREMENT_N } from '../store/multation-type'
export default {
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    addTen() {
      // this.$store.commit("incrementN", 10); 
      // 另一种提交风格
      this.$store.commit({
        // type: 'incrementN',
        type: INCREMENT_N,
        n: 10,
        name: '悟律',
        age: 18
      })
    },
  }
  
}

  
</script>

<style scoped>
</style>