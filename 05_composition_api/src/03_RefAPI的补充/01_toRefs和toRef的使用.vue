<template>
    {{ name }} - {{ age }}
    <button @click="changeAge">修改</button>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue' ;
export default {
  setup() {
    // 如直接对reactive对象进行解构赋值，是直接赋值，属性失去响应式特性
    // 将reactive对象， 赋值解构响应式化
    const info = reactive({ name: '韩绝', age: 22});
  //  对对象属性进行遍历， 解构赋值响应式
    // let { name, age } = toRefs(info)

    // 如需使用单个属性， 需通过ref进行属性转化
    let { name } = info;
    let age = toRef(info, 'age');

    // 无this指向， 这里使用闭包的方式， 不能加this
    const changeAge = ()=>{
      age.value++;
    }
    return {
      // name,
      name,
      age,
      changeAge
    }
  }
}
</script>

<style scoped>
</style>