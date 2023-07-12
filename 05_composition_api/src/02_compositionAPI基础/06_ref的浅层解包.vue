<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
    <!-- 模板字符串中内部会自动进行对ref对象的解包 - 浅层解包 -->
    <h2> 当前计数: {{ counter}}</h2>
    <!-- 普通对象内定义一个ref对象， 无法对其进行解包 -->
    <h2> 当前计数: {{ info.counter}}</h2>

    <!-- reactive对象， 可以解包ref对象 -->
    <h2> 当前计数: {{ reactiveInfo.counter}}</h2>

    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>

</template>

<script>
import { ref, reactive} from 'vue';
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
// 普通对象包含 ref对象属性
    const info = {
      counter 
    }

    // 如何该对象为reactive对象， 可以对其进行解包
    const reactiveInfo = reactive({
      counter
    })


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
      increment,
      info,
      reactiveInfo
    }
 }

}
</script>

<style scoped>
</style>