<template>
  <home></home>

  <suspense>
      <template #default>
        <div>
          <async-category></async-category>
       </div>
      </template>
      <template #fallback>
        <div>
          <loading></loading>
       </div>
      </template>
  </suspense>

</template>

<script>
import Home from "./Home.vue"
// import AsyncCategory from './AsyncCategory.vue'
// 异步导入
import { defineAsyncComponent } from 'vue';
import Loading from './Loading.vue';


// 将导入的模块进行异步处理, 按需加载，返回一个promise对象， 不需要执行then, 
// defineAsyncComponent 会自动解析
const AsyncCategory = defineAsyncComponent(() => import( "./AsyncCategory.vue"))


//  const AsyncCategory = defineAsyncComponent({
//   loader: ()=> import( "./AsyncCategory"),
//   loadingComponent: Loading,
//   // errorComponent,
//   // 显示loadingComponent组件之前， 等待多长时间
//   // delay: 2000  表示2秒才进行加载loading页面

//   // err: 错误信息
//   //  retry: 函数， 调用retry 尝试重新加载
//   //  fail: 函数， 指示加载程序结束退出
//   //  attempts: 记录尝试的次数
//   onError: function(err, retry, fail, attempts) {
//     console.log(errm, retry, attempts);
//   }
// })



export default {
  data() {
    return {
    
    }
  },
  components: { 
    Home,
    AsyncCategory,
    Loading
  },
  methods: {},
}
</script>

<style scoped>
</style>