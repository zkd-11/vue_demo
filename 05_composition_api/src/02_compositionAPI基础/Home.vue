<template>
  <div>
    <!-- 模板字符串中内部会自动进行对ref对象的解包 - 浅层解包 -->

    <button @click="rewriteName">修改名字</button>

  </div>

</template>

<script>
import { ref, reactive, readonly} from 'vue';
export default {
 props: {
  message: {
    type: String,
    required: true
  }
 },
//  setup 无this指向
  // setup(props, context){
  // 可以使用解构函数
  setup(){
    // 普通对象， 使用readonly 一般比较少，
    // 使用readOnly, 就是传递子组件时， 不希望能修改响应式原值
    const info1 = {name: '韩绝'}
    const readonlyInfo1 = readonly(info1);

    // ref对象 设置 readonly
    // const info2 = ref({name: '韩绝'});
    const info2 = ref('韩绝');
    const readonlyInfo2 = readonly(info2);

    const info3 = reactive({name: '韩绝'});
    const readonlyInfo3 = readonly(info3);


    // 局部函数
    const rewriteName = ()=>{
      // 需要手动对 ref对象进行解包
      // readonlyInfo1.name = "悟律";

      // console.log(readonlyInfo2.value.name);
      // console.log(readonlyInfo2.value);
      // ref对象 修改姓名
      // readonlyInfo2.value.name = "悟律";
      // readonlyInfo2.value = "悟律";

      // reactive修改姓名
    // 设置readonly 就是使响应式数据更加安全性， 可靠性
      readonlyInfo3.name = "悟律";
    }



    return{
      rewriteName
    }
 }

}
</script>

<style scoped>
</style>