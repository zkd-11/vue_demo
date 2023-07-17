<template>
  <hr>
  <h2>书籍总价： {{ $store.getters.totalPrice }}</h2>
  <h2>数量大于3的书籍总价： {{ $store.getters.totalPriceCountGreaterN(2)}}</h2>
  <hr>
  <h2>getter拼接属性返回： {{ nameInfo }}</h2>
  <h2>getter拼接属性返回： {{ sAge }}</h2>
</template>

<script>


import { useGetters } from '../hooks/useGetters'
export default {
  setup() {
    //  getters 逻辑与state一致 
    // 可传入对象（自定义属性名） 和 数组
    const storeState = useGetters(["nameInfo", "ageInfo"]);
    const storeState1 = useGetters({
        sAge: "ageInfo"
      }
    );

    return {
      ...storeState1,
      ...storeState, //将对象中的属性进行遍历, 展开返回

    }
  }
  

  
}
</script>

<style scoped>
</style>