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

    <!-- 使用 gsap运行 动画 -->
    <!-- :css 表示不再对css样式检测， 忽略,提高动画流畅性 ， 提高性能 -->
   <transition 
    @enter = 'enter'
    @leave = 'leave'
    :css="false"
    >
     <h2 class="title" v-if="isShow"> 悟律冲冲 </h2>

    </transition>
</div>
</template>

<script>
import gsap from 'gsap'

export default {
  data() {
    return {
    isShow: true
    }
  },
  components: { 
  },
  methods: {
    // done表示 动画执行完毕
    enter(el, done) {
      console.log('Enter');
      gsap.from(el, {
        scale: 0,
        x: 200,
        onComplete: done
      })
    },
    leave(el,done) {
      console.log('leave');
      gsap.to(el, {
        scale: 0,
        x: 200,
        onComplete: done
      })
    },

  },
}
</script>

<style scoped>
  #btn {
    display: block;
    margin: 20px auto;
    text-align: center
  }
  .title {
    /* display: inline-block; */
    margin-top: 100px;
    margin-left: 30px
  }


</style>