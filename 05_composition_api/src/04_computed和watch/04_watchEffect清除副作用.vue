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



    // // 有返回值， 用于终止监听
    // const stop = watchEffect(()=>{
    //   // 默认会执行一次， 自动收集依赖
    //   console.log("name:", name.value, "age:", age.value);
    // })

    // 该方法可以接收一个参数， 会提前执行函数， 一般用于取消上一次的网络请求
    //  当监听到频繁更新, 清除副作用, 清除上次操作, 常见于搜索 防抖
    const stop = watchEffect((onInvalidate)=>{
      // 默认会执行一次， 自动收集依赖
      
      // 用计时器模拟
      const timer = setTimeout(()=>{
        console.log('网络请求成功！');
      }, 2000)

      // 在onInvalidate函数中清除副作用
      // 根据name 和 age 发送网络请求
      onInvalidate(()=>{
        clearTimeout(timer);
      })
      // 由age和name的变化 来触发整个watchEffect， 包括设置定时器（模拟请求）
      console.log("name", name.value, "age", age.value);
    })

    // 调用停止监听
    const changeAge = ()=> {
      age.value++
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