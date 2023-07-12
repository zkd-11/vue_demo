<template>
  <div>
     <h2>{{ fullName }}</h2>
     <button @click="changeName">修改名字</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  setup(){
    const firstName =ref( 'kobe');
    const lastName = ref('Bryant');
    
    // 用法1 传入getter值
    // computed本身也为一个ref对象
    // const fullName = computed(()=>{
    //   return firstName.value + ' ' + lastName.value;
    // }); 

    const fullName = computed({
      get:() => firstName.value + ' ' + lastName.value,
      set(newValue){
        const names = newValue.split(' ');
        firstName.value = names[0];
        lastName.value = names[names.length - 1];
      }
    })

    const changeName = ()=>{
      console.log(fullName);
      fullName.value = 'wulv hanjue';
    }
    return {
      fullName,
      changeName,
      
    }
    
  }
}
</script>

<style scoped>
</style>