<template>
  <div class="app">
    <button id='btn' @click="isShow = !isShow">显示/隐藏</button>
   
   <!-- type设置根据哪个动画来决定结束, 能打断另外一种动画-->
   <!-- :duration="{enter: 800, leave: 1000}" 此属性可以是对象类型 -->
   <!--mode 模式， in-out 先进入再离开 ， out-in 先离开再进入 一般为这种  -->
   
   <transition 
    name="wulv"
    type="animation"
    :duration="1000"
    mode="out-in"
    >

          <h2 v-if="isShow">Hello wulv</h2>
          <h2 v-else >悟律冲冲</h2>

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
  #btn {
    margin-bottom: 100px;
  }
  .app {
    width: 200px;
    margin: 0 auto;
    text-align: center;
  }
  .wulv-enter-from,
  .wulv-leave-to {
    opacity: 0;
  }
  .wulv-enter-active {
    transition: opacity 2s ease;
    animation: bounce 2s ease;
  }
/* reverse 将动画效果反转 */
  .wulv-leave-active {
    transition: opacity 2s ease;
    animation: bounce 2s ease reverse;
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