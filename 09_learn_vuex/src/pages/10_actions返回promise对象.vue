<template>
  <hr>
  <h2> {{ $store.state.counter }}</h2>
   
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex'
 import { mapActions } from 'vuex'
export default {

    setup() {
      const actions = mapActions(["incrementAnimation"] );

      const store = useStore();
      
      // 此功能使用 生命周期函数， 判断actions函数是否执行成功
      onMounted(()=>{
        const promise = store.dispatch("getHomeMultidata")
        promise.then(res => {
          console.log(res); //返回的为 resolve内容
        }).catch( err => {
          console.log(err);
        })
      })



      return {
        ...actions,
      }
    }
}

  
</script>

<style scoped>
</style>