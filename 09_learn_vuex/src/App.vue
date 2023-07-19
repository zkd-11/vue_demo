<template>

    <!-- <h2> App:  {{ $store.state.counter }}</h2> -->
    <h2> App:  {{ $store.state.rootCounter }}</h2>
    <button @click="increment">+</button>

    <home></home>
</template>

<script>
import Home from './pages/Home.vue'
// import Home from './pages/05_useGetters封装后使用.vue'


export default {
  name: "App",
  components: {
    Home,
  },

  //  vueX 管理状态， 公共储存资源储存库
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
  
}
</script>

<style scoped>
</style>