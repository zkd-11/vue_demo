<template>
  <button @click="isShow = !isShow">显示/隐藏</button>

  <transition name="wulv">
    <h2 v-if="isShow">Hello wulv</h2>
  </transition>
</template>

<script>

export default {
  data() {
    return {
    isShow: true
    }
  },
  components: { 

  },
  methods: {},
}
</script>

<style scoped>
  .wulv-enter-from,
  .wulv-leave-to {
    opacity: 0;
  }

  .wulv-enter-to,
  .wulv-leave-from {
    opacity: 1;
  }
  
  .wulv-enter-active,
  .wulv-leave-active {
    transition: opacity 1s ease;
  }
</style>