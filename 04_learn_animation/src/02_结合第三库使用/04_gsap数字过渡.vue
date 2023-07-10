<template>
  <div class="app">
    <input type="Number" step="100" v-model="counter">
    <!-- 计算属性，可以省略  -->
    <!-- <h2> 当前计数： {{ showCounter }}  </h2>  -->
    <h2>当前计数：{{ showNumber.toFixed(0) }}</h2>
 
</div>
</template>

<script>
import gsap from 'gsap'
export default {
  data() {
    return {
     counter: 0,
     showNumber: 0
    }
  },
  components: { 
  },

  // computed: {
  //   showCounter() {
  //     return this.showNumber.toFixed(0);
  //   }
  // },
  //  监听 并将该数值 逐渐递增到  newValue, 不直接使用counter此数值
  //  因为文本框显示 和 文本显示的内容，是分开的， 一个是秒变 ， 一个是递增
  watch: {
    counter(newValue) {
      gsap.to(this, { duration: 1, showNumber: newValue})
    }
  },
  methods: {
  
  },
}
</script>

<style scoped>
</style>