<template>
  <hr>
  <h2> {{ $store.state.counter }}</h2>
  <button @click="increment">action派发-dispatch</button>
  <button @click="getAxiosData">getAxiosData</button>
  
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch("incrementAction")
    },
    getAxiosData() {
      this.$store.dispatch("getHomeMultidata")
    },
    otherDetail() {
      this.$store.dispatch({
        type: "getHomeMultidata"
      })
    }
    },
}

  
</script>

<style scoped>
</style>