<template>
  <div>
      <h2>{{ message }}</h2>
      <button @click="foo">触发包函数</button>
  </div>
</template>

<script>
// 配置提出与导入
//  合并规则- 相同覆盖， 不同纳入
import { demoMixin } from './mixins/demoMixin'
export default {
  mixins: [ demoMixin ],
  data() {
    return {
      title: '悟律冲冲'
    }
  },
  components: { 

  },
  methods: {},
}
</script>

<style scoped>
</style>