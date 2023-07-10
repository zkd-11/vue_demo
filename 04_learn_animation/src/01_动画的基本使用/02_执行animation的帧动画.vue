<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="wulv">

          <h2 v-if="isShow">Hello wulv</h2>

    </transition>
</div>
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
  .app {
    width: 200px;
    margin: 0 auto;
    text-align: center;
  }
  .wulv-enter-active {
    
    animation: bounce 1s ease;
  }
/* reverse 将动画效果反转 */
  .wulv-leave-active {
    animation: bounce 1s ease reverse;
  }

  @keyframes bounce {
    0% {
      transform: scale(0)
    }
    50% {
      transform: scale(1.2)
    }
    100% {
      transform: scale(1)
    }
  }
</style>