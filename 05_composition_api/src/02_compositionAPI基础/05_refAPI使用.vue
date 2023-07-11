<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
    <!-- 模板字符串中内部会自动进行对ref对象的解包 -->
    <h2> 当前计数: {{ counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>

</template>

<script>
import { ref } from 'vue';
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
  setup(){
    
    let counter = ref(100);
    // 局部函数
    const increment = ()=>{
      // 需要手动对 ref对象进行解包
      counter.value ++;
      console.log(counter.value);
      console.log(counter);
    }

    return{
      title: 'hello home',
      counter,
      increment
    }
 }

}
</script>

<style scoped>
</style>