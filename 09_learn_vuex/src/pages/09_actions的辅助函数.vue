<template>
  <hr>
  <h2> {{ $store.state.counter }}</h2>
  <button @click="incrementAction">action派发-dispatch</button>
  <button @click="GAD">getAxiosData</button>
  
</template>

<script>
 import { mapActions } from 'vuex'
export default {
  // methods: {
  //   ...mapActions(["incrementAction", "getHomeMultidata"]),
  //   ...mapActions({
  //     GAD: "getHomeMultidata",
  //   }),   
  //   },

    setup() {
      const actions = mapActions(["incrementAction", "getHomeMultidata"] );
      const actions2 = mapActions({
        GAD: "getHomeMultidata",
      })

      return {
        ...actions,
        ...actions2
      }
    }
}

  
</script>

<style scoped>
</style>