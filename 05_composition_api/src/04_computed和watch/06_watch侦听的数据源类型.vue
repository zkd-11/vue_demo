<template>
  <div>
    <h2>{{info.name}}</h2>
    <button @click="changeName">修改姓名</button>
    <h2>------分割-----</h2>
    <h2>{{ name }}</h2>
    <button @click="changeRefName">修改ref名</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
export default {
  setup(){ 
      const info = reactive({name: '韩绝', age: 22});

      //1.  侦听watch时， 传入getter函数, 需要放在第一个参数
      // watch(()=> info.name, (newValue, oldValue)=>{
      //   console.log("newValue: " + newValue, "oldValue: " + oldValue);
      // })


      // 2.传入一个可响应对象： reactive对象/ref对象
      // 情况1： reactive对象获取到的新值和旧值 本身都是reactive对象 proxy
      watch(info,(newValue, oldValue)=>{
        // 监听的返回的proxy值都是最新的， 因为watch无法侦听到内部属性的深层变化
        console.log("newValue: ",newValue, "oldValue: ",oldValue);
      })

//  如果希望返回的为普通对象， 将reactive用解构

      watch(()=>{return {...info}},(newValue, oldValue)=>{
        console.log("newValue: ",newValue, "oldValue: ",oldValue);
      })


      // 情况2: ref对象获取newValue和 oldValue值的本身
      
      const name = ref('wulv')
      watch(name, (newValue, oldValue) => {
        console.log("newValue: ",newValue, "oldValue: ",oldValue);
      })
      
      const changeName = ()=>{
        info.name = '悟律';
      }

      const changeRefName = ()=>{
        name.value = 'james';
      }

      return {
        info,
        changeName,
        name,
        changeRefName,
      }
}

}
</script>

<style scoped>
</style>