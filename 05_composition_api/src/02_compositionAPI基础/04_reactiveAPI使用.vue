<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
    <h2> 当前计数: {{ state.counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>

</template>

<script>
import { reactive } from 'vue';
export default {
 props: {
  message: {
    type: String,
    required: true
  }
 },
//  setup 无this指向
  // setup(props, context){
  // 可以使用解构函数
  setup(props, {attrs, slots, emit}){
    const state = reactive({
      counter: 100
    })

    console.log(props.message);
    console.log(attrs.id);

    // 局部函数
    const increment = ()=>{
      state.counter ++;
      console.log(state.counter);
    }

    return{
      title: 'hello home',
      state,
      increment
    }
 }

}
</script>

<style scoped>
</style>