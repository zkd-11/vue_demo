<template>
  <div>
    <h2 ref="title">韩绝</h2>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
  setup(){ 
    const title = ref(null);
    
    watchEffect(()=>{
      console.log(title.value);
    }, {
      flush: "post",
      // flush: "pre", 不加flush 推送， 默认为dom元素挂载前监听
      // 使用 post  dom元素 挂载后 监听
    })

    return {
      title,
    }
}

}
</script>

<style scoped>
</style>