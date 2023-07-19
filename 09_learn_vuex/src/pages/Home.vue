<template>
  <hr>
  <!-- state.home.xxx 只能是取到state内的属性信息 -->
  <!-- <h2> home:  {{ $store.state.home.homeCounter }}</h2> -->
  <h2> home:  {{ homeCounter }}</h2>

  <!-- <button @click="homeIncrement">HomeCounter +1</button> -->
  <button @click="increment">HomeCounter +1</button>
  <!-- <button @click="homeIncrementAction">HomeAction +1</button> -->
  <button @click="incrementAction">HomeAction +1</button>

  <hr>
  <!-- 使用getter  home模块中的 doubleHomeCounter -->
  <!-- <h2> homeGetters: {{ $store.getters["home/doubleHomeCounter"]}}</h2> -->
  <h2> homeGetters: {{ doubleHomeCounter }}</h2>

   
</template>

<script>
// import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import { createNamespacedHelpers } from 'vuex';
//  createNamespacedHelpers返回的为对象， 当子模块使用nameSpace后
//  传入参数为home后， 会自动添加路径， 从 home模块去找属性
const { mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers("home")

// setup内使用 ， 封装好的js文件直接调用
import { useState, useGetters } from '../hooks'

export default {
  // computed: {
    // 写法一
    // ...mapState({
    //   homeCounter: state => state.home.homeCounter
    // }),
    // ...mapGetters({
    //   doubleHomeCounter: state => state.home.doubleHomeCounter
    // }),

  //     // 写法二
  //     // 返回的为函数 经computed包裹后 外界使用为属性  
  //     // 映射到 home.state.homecounter
  //   // ...mapState("home", ["homeCounter"]),
  //   // ...mapGetters("home", ["doubleHomeCounter"])

  //   // 写法三
  //       ...mapState( ["homeCounter"]),
  //       ...mapGetters(["doubleHomeCounter"])
  // },
  // methods: {
  //   // 写法二
  //   // ...mapMutations("home",["increment"]),
  //   // ...mapActions("home",["incrementAction"]),

  //   // 写法三
  //   ...mapMutations(["increment"]),
  //   ...mapActions(["incrementAction"]),
  // }

    setup() {
      // 调用值后 内部经过计算后 返回的为值
      // 使用自己定义的封装函数， 可以将映射， 直接使用vueX的实际属性名
      //  较于mapState 省略一步放置 computed， 内部已实现
      const state = useState('home',["homeCounter"]);
      const getters = useGetters('home',["doubleHomeCounter"])

      // 
      const mutations = mapMutations(["increment"])
      const actions = mapActions(["incrementAction"])

      return {
        ...state,
        ...getters,
        ...mutations,
        ...actions
      }
    }

}

  
</script>

<style scoped>
</style>