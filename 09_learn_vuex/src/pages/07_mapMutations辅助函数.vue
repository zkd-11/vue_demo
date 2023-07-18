<template>
  <hr>
  <h2> {{ $store.state.counter }}</h2>
  <button @click="increment">+</button>
  <button @click="add">+</button>
  <button @click="decrement">-</button>
  <button @click="increment_n({n:10})">+10</button>
  
</template>

<script>
import { INCREMENT_N } from '../store/multation-type'
//  映射Mutations  自动执行提交
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(["increment", "decrement", INCREMENT_N ]),
    ...mapMutations({
        add: "increment",
    })
  },

  setup() {
    const storeMutations = mapMutations(["increment", "decrement", INCREMENT_N ]);

    return {
      ...storeMutations,
    }
  }
}

  
</script>

<style scoped>
</style>