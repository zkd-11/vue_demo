<template>
  <div>
     <h2> {{ name }} + {{ age }}</h2>
     <button @click="changeName">修改姓名</button>
     <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
  setup(){
    const name =ref('wulv');
    const age = ref(22);



    // 有返回值， 用于终止监听
    const stop = watchEffect(()=>{
      // 默认会执行一次， 自动收集依赖
      console.log("name:", name.value, "age:", age.value);
    })

    // 调用停止监听
    const changeAge = ()=> {
      age.value++
      if( age.value > 25)
      stop();
    };
    const changeName = ()=> name.value='韩绝';
    return {
      name,
      age,
      changeAge,
      changeName

    }
    
  }
}
</script>

<style scoped>
</style>