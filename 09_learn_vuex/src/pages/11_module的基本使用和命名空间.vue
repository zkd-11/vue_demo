<template>
  <hr>
  <h2> root:  {{ $store.state.rootCounter }}</h2>
  <h2> home:  {{ $store.state.home.homeCounter }}</h2>
  <h2> user: {{ $store.state.user.userCounter }}</h2>
  <button @click="homeIncrement">HomeCounter +1</button>
  <button @click="homeIncrementAction">HomeAction +1</button>

  <hr>
  <!-- 使用getter  home模块中的 doubleHomeCounter -->
  <h2> homeGetters: {{ $store.getters["home/doubleHomeCounter"]}}</h2>

   
</template>

<script>

export default {
  methods: {
    homeIncrement() {
      console.log('commit-home');
      this.$store.commit("home/increment");
    },
    homeIncrementAction() {
      // 因为使用命名空间， 所以需要使用路径
      this.$store.dispatch("home/incrementAction");
    }

  }

}

  
</script>

<style scoped>
</style>