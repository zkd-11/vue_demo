<template>
  <h2>Home: {{ $store.state.counter }}</h2>
  <h2> {{ counter }}</h2>
  <h2> {{ sAge }}</h2>
</template>

<script>

import { useState } from "../hooks/useState"
export default {
  setup() {
    // 可传入对象（自定义属性名） 和 数组
    const storeState = useState(["counter", "age"]);
    const storeState1 = useState({
        sAge: state => state.age
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