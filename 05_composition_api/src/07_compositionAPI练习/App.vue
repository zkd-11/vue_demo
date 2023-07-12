<template>
  <h2> 计数： {{ counter }}</h2>
  <h2> 计数 *2：{{ doubleCounter }}</h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>

  <button @click="changeData">修改本地缓存info</button>

  <h2>{{data}}</h2>

  <p class="content"></p>
  <div class="scroll">
    <div class="scroll-x">scrollX: {{ scrollX }}</div>
    <div class="scroll-y">scrollY: {{ scrollY }}</div>
  </div>

  <div class="mouse">
    <div class="mouse-x">mouseX: {{ mouseX }}</div>
    <div class="mouse-y">mouseY: {{ mouseY }}</div>
  </div>
</template>

<script>
import {
  useCounter,
  useTitle,
  useScrollPosition,
  useMousePosition,
  useLocalStorage
} from './hooks'

  export default {
    setup() {
      const { counter, doubleCounter, increment, decrement } = useCounter();


      // title
      const titleRef = useTitle('wulv');
      setTimeout(()=>{
        titleRef.value = '韩绝修改';
      },2000)

      // scroll  滚动条位置
      const { scrollX, scrollY } = useScrollPosition();

    // mouse 位置
      const { mouseX, mouseY } = useMousePosition();

      // localStorage 初次设置后， 已加入缓存，如要修改的生效，需要进行注释
      // useLocalStorage("info", "wulv");
      const data = useLocalStorage("info");
      console.log('info取值', data.value);

      const changeData = ()=>{ data.value = '悟律'}


      return{
        counter,
        doubleCounter,
        increment,
        decrement,

        scrollX,
        scrollY,

        mouseX,
        mouseY,

        data,
        changeData
    }
  }
}
</script>

<style scoped>
  .content {
    width: 3000px;
    height: 3000px;
  }

  .scroll{
    position: fixed;
    bottom: 30px;
    right: 30px;
  }

  .mouse{
    position: fixed;
    bottom: 90px;
    right: 30px;
  }
</style>