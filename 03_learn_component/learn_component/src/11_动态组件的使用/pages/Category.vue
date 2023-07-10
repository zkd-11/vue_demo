<template>
  <div>
    这是Category组件
    {{ counter }}
    <button @click="counter++">+</button>
  </div>
</template>

<script>

export default {
  name: 'category',
  data() {
    return {
    counter: 0
    }
  },
  components: { 

  },
  emits: ['pageClick'],
  methods: {},
  activated() {
    console.log('该组件不被缓存，我是失效的activated活动生命周期');
  },
  mounted() {
    console.log('该组件不被缓存，每次都是重新生成挂载');
  },
  unmounted() {
    console.log('离开该组件时，我被销毁，我是unmounted生命周期，等价vue2的销毁');
  }
}

</script>

<style scoped>
</style>

