<template>
  <div>
    <h2>{{info.name}}</h2>
    <h2>{{info.friend.name}}</h2>
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
      const info = reactive({
        name: '韩绝', 
        age: 22, 
        friend: {
          name: 'james'
      }}); 
      const name = ref('wulv');

//  默认侦听reactive对象时，都是深层侦听，普通对象需要手动设置

    // watch(()=>
    //   ({...info}),
    //   (newInfo, oldInfo) =>{
    //     console.log(newInfo, oldInfo);
    //   },{
    //   deep: true,
    //   immediate: true
    //   });

    watch( ()=>  
        ({...info}).friend.name
    ,
      (newInfo, oldInfo) =>{
        console.log(newInfo, oldInfo);
      },
      {
      deep: true,
      immediate: true
      });

      const changeName = ()=>{
        info.friend.name = '悟律';
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