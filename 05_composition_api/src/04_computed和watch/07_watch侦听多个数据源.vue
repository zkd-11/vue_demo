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
      const name = ref('wulv');

//  侦听多个数据源  对对象进行解构， 并转化为数组形式
    watch([()=>({...info}), name], ([newInfo, newName],[oldInfo, oldName])=>{
      console.log(newInfo, newName, oldInfo, oldName);
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