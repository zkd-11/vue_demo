<template>
  <h2>Home: {{ $store.state.counter }}</h2>
  <h2> {{ counter }}</h2>
  <h2> {{ age }}</h2>
</template>

<script>
// vueX 辅助函数
import { mapState, useStore } from 'vuex'
import { computed } from 'vue'; 
//  在无this指向的setup() 函数中使用mapState
export default {
  setup() {
    const store = useStore();
    //  computed返回单属性
    const sAge = computed(()=> store.state.age );

    const storeStateFns = mapState(["counter", "age"]); //mapState 返回为函数
    const storeState = {};
    Object.keys(storeStateFns).forEach(fnKey => {
      const fn = storeStateFns[fnKey].bind({$store: store}) //为函数绑定this指向为 store
      storeState[fnKey] = computed(fn) //将绑定后的函数放置computed内部, 获得值
    })

    return {
      sAge,
      ...storeState, //将对象中的属性进行遍历, 展开返回

    }
  }
  
}
</script>

<style scoped>
</style>