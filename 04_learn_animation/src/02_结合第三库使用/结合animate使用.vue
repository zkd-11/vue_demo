<template>
  <div class="app">
    <button id='btn' @click="isShow = !isShow">显示/隐藏</button>
   
   <!-- type设置根据哪个动画来决定结束, 能打断另外一种动画-->
   <!-- :duration="{enter: 800, leave: 1000}" 此属性可以是对象类型 -->
   <!--mode 模式， in-out 先进入再离开 ， out-in 先离开再进入 一般为这种  -->
   <!-- :appear='true'  表示入场需要应用动画， 默认可写入appear -->

   <!-- <transition 
    name="wulv"
    >
     <h2 class="title" v-if="isShow"> 悟律冲冲 </h2>

    </transition> -->

    <!-- 直接使用类名应用动画 -->
   <transition 
    enter-active-class="animate__animated animate__wobble"
    leave-active-class="animate__animated animate__slideOutRight"
    >
     <h2 class="title" v-if="isShow"> 悟律冲冲 </h2>

    </transition>
</div>
</template>

<script>
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
export default {
  data() {
    return {
    isShow: true
    }
  },
  components: { 
    Home,
    About
  },
  methods: {},
}
</script>

<style scoped>
  .app {
    text-align: center;
  }
  #btn {
    display: block;
    margin: 20px auto;
    text-align: center
  }
  .title {
    /* display: inline-block; */
    margin-top: 100px
  }

  /* .wulv-enter-active
   {
    animation: bounceInUp 1s ease-in;
  }

  .wulv-leave-active {
    animation: backOutDown  2s ease-in;
  } */

</style>