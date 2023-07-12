<template>
    {{ info }}
    <button @click="changeInfo">修改</button>
</template>

<script>
import { shallowRef, triggerRef } from 'vue' ;
export default {
  setup() {
    // 深层响应式
    // const info = ({name: 'Hanjue'})
    const info = shallowRef({name: 'Hanjue'})



    // 无this指向， 这里使用闭包的方式， 不能加this
    const changeInfo = ()=>{
      // 浅层不修改原引用， 需要使用triggleRef, 手动触发
      info.value.name = "wulv";
      triggerRef(info);
      console.log(info);
    }
    return {
      changeInfo,
      info,
    }
  }
}
</script>

<style scoped>
</style>