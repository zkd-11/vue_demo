<template>
    <h2>  APP中的数字： {{ counter }}</h2>
    <button @click="increment">APP +1 </button>
    <home></home>
</template>

<script>
import Home from './Home.vue'
import { ref, readonly, provide,  } from 'vue';

export default {
  components: {
      Home
    },
  setup() {

    const name = ref('悟律');
    const counter = ref(100);


    provide("name", readonly(name));
    // provide("counter", counter);
    provide("counter", readonly(counter));
    
    const increment = ()=> counter.value++;
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