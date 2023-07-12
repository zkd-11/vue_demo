<template>
  <button @click="btnClick">{{ count }}</button>
</template>

<script>
import { ref, onMounted, onUpdated } from 'vue';
export default {
  setup(){
    const count = ref(0);

    // 生命周期函数可以重复定义，利于导出
     onMounted(()=>{
      console.log('onMounted');
     }),
     onMounted(()=>{
      console.log('onMounted');
     }),
     onUpdated(()=>{
      console.log('onUpdated');
     })

     const btnClick = ()=>{
      count.value++;
     }
     return {
      count,
      btnClick
     }
  }
}
</script>

<style scoped>
</style>