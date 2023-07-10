<template>
  <div >
    这是About组件
    {{ counter }}
    <button @click="counter++">+</button>
  </div>
</template>

<script>

export default {
  name: 'about',
  data() {
    return {
      counter: 0
    }
  },
  components: { 

  },
  emits: ['pageClick'],
  methods: {

  },
  activated() {
    console.log('该组件已被缓存，我是activated活动生命周期');
  }
}
</script>

<style scoped>
</style>



