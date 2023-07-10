<template>
  <!-- 组件使用v-model -->
  <!-- <hy-input v-model="message"></hy-input> -->

  <!-- 使用了语法糖  -->
  <!-- <hy-input :modelValue="message" @update:model-value="message = $event"></hy-input> -->
  <!-- <h2> 父组件的data内属性 {{ message }}</h2> -->


  <h2> 父组件：{{ message }} -- {{ title }}</h2>
  
  <!-- 绑定两个v-model  自定义名字 -->
  <hy-input v-model="message" v-model:title="title"></hy-input>
</template>

<script>
import HyInput from './HyInput.vue'
export default {
  data() {
    return {
      message: '韩绝冲冲！',
      title: '双向绑定title'
    }
  },
  components: { 
    HyInput
  },
  methods: {},
}
</script>

<style scoped>
</style>