<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ counter }}</h2>
    <button @click="increment">home内＋</button>
</div>
</template>

<script>
import {  inject } from 'vue';
export default {
  setup() {
    const name = inject("name");
    const counter = inject("counter");
    
    const increment = ()=>{
      counter.value++;
    } 
    return{
      name,
      counter,
      increment
    }
  }
}
</script>

<style scoped>
</style>