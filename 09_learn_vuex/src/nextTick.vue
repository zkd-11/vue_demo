<template>
  <div>
    <h2>{{counter}}</h2>
    <button @click="increment">+1</button>
    <h2 class="title" ref="titleRef">{{ message }}</h2>
    <button @click="addMessageContent">添加内容</button>
  </div>
</template>

<script>
import { nextTick } from 'process';
import { ref } from 'vue'
export default {
  setup() {
    const message = ref("");
    const titleRef = ref(null);

    const counter = ref(0);

    const increment = ()=> {
      counter.value ++;
    }
    const addMessageContent = ()=> {
      message.value += "韩绝冲冲";

      // 更新dom后执行
      nextTick(() => {
        console.log(titleRef.value.offsetHeight);
      })
      

    }

    return{
      counter,
      message,
      increment,
      titleRef,
      addMessageContent
      

    }
  }
}
</script>

<style scoped>
</style>