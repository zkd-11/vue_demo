<template>
  <h2>Home: {{ $store.state.rootCounter }}</h2>
  <h2> {{ rootCounter }}</h2>
  <h2> {{ sAge }}</h2>
</template>

<script>
// vueX 辅助函数
import { mapState} from 'vuex'
export default {
    // 使用计算属性， 因为过于属性使用过于冗长
    computed: {
    // sCounter(){
    //   return this.$store.state.rootCounter; //这种不简洁，vueX提供了mapState
    // }

    // 数组形式
      ...mapState(["rootCounter", "age"]),

    // 对象形式 -> 可以自定义属性名 
    // 展开运算符 在对象内部使用- 会遍历mapState属性 并将属性放置computed对象内

    //  返回为函数 => 展开为返回一个个函数
        // 函数  return 为一个属性值， 在模板使用时为 使用计算属性， 实质上是一个函数return  
      ...mapState({
        sCounter: state => state.rootCounter,
        sAge: state => state.age
      })
  },

  
}
</script>

<style scoped>
</style>