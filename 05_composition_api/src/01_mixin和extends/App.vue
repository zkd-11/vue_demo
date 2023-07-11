<template>
  <div>
      <h2>{{ message }}</h2>
      <button @click="foo">触发包函数</button>
      <home></home>
  </div>
</template>

<script>
import Home from '../pages/Home.vue'
// 配置提出与导入
import { demoMixin } from './mixins/demoMixin'
export default {
  mixins: [ demoMixin ],
  data() {
    return {
      title: '悟律冲冲'
    }
  },
  components: { 
    Home,
  },
  // 相同名的函数会覆盖mixin的函数
  methods: {
    foo() {
      console.log('111');
    }
  },
  created() {
    console.log('执行了组件的的created生命周期函数');
  }
}
</script>

<style scoped>
</style>