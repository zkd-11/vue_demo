<template>

  <!-- <input type="text" :value="modelVlue" > -->

  <!-- 默认绑定和事件处理 -->
  <div>
    <button @click="btnClick">hyInput的按钮</button>
    <h2>子组件接收的信息 {{ modelValue }}</h2>
  </div>
<!-- 不绑定到 props属性， 父组件传递进的信息， 一般重新定义值，再接收此值， 不对props值进行修改 -->

<!-- input便签进行双向绑定， 再利用计算属性， 将input便签内的值传递给父组件 -->
  <input type="text" v-model="value">



</template>

<script>

export default {
  props: {
    modelValue: String
  },
  data() {
    return {
    
    }
  },
  components: { 

  },
  // 使用计算属性进行值返回
  emits: ['update:modelValue'],
  methods: {
    btnClick() {
      console.log('11');
      this.$emit('update:modelValue', '悟律冲冲')
    }  
  },
  computed: {
    value: {
      set(value) {
        
        // 使用计算属性实时赋值
        this.$emit('update:modelValue', value)
      },
      get() {
        // 通过将父组件传递的信息进行 return 赋值给input便签， 建立联系
        return this.modelValue;
      }
    }
  },  
}
</script>

<style scoped>
</style>