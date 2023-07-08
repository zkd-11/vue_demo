<template>
  <button @click="addOne">+</button>
  <button @click="subOne">-</button>

  <input type="text" v-model.number="num">
  <button @click="increment">+n</button>
</template>

<script>

export default {
  // emits: ["add", "sub", "increment"],
  // 对象写法- 验证
  emits: {
    add: null,
    sub: null,
    increment: (num, name, age) => {
      if( num > 5){
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      num: 0
    }
  },
  components: { 
  },
  methods: {
    addOne () {
      this.$emit("add")
    },
    subOne () {
      this.$emit("sub")
    },
    increment () {
      this.$emit("increment", this.num, 'wulv', 22)
    }
  },
}
</script>

<style scoped>
</style>