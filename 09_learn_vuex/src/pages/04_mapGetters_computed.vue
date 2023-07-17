<template>
  <hr>
  <h2>书籍总价： {{ $store.getters.totalPrice }}</h2>
  <h2>数量大于3的书籍总价： {{ $store.getters.totalPriceCountGreaterN(2)}}</h2>
  <hr>
  <h2>getter拼接属性返回： {{ nameInfo }}</h2>
  <h2>getter拼接属性返回： {{ sAge }}</h2>
</template>

<script>
import { mapGetters } from 'vuex'
import { computed } from 'vue'
export default {
  computed: {
    ...mapGetters(["nameInfo", "ageInfo"]),
    ...mapGetters({
      sName: "nameInfo",
      sAge: "ageInfo",
    })
  },



  
}
</script>

<style scoped>
</style>