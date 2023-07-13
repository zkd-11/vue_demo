<template>
  <div>
    <!-- 自定义指令 
      传入修饰符 是指将modifiers值 将传入对应的属性转化为true
          自定义某些函数 去执行操作
      传入值为 属性中的 value
    -->
    <button 
    @click="increment" 
    v-if="counter < 2"
    v-wulv.aaaa.vvvv = "'悟律冲冲'"
    >当前计数: {{ counter }}</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"
export default {
  directives: {
    wulv: {
      created(el, bindings, vnode, preVnode){
        console.log(el, bindings, vnode, preVnode);
        console.log('created');
        console.log(bindings.value);
        // 返回对象
        console.log(bindings.modifiers);
      },
      beforeMount() {
        console.log('beforeMount');
      },
      mounted() {
        console.log('mounted');
      },
      beforeUpdate() {
        console.log('beforeUpdate');
      },
      updated() {
        console.log('updated');
      },
      beforeUnmount() {
        console.log('beforeUnmount');
      },
      unmounted() {
        console.log('unmounted');
      }
    
    }
  },


  setup() {
    const counter = ref(0);
    const increment = ()=>{
      counter.value++;
    }

    return{
      counter,
      increment
    }
  }
}
</script>

<style scoped>
</style>