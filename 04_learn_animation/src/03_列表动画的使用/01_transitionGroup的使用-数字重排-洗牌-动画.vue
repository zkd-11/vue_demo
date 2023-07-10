<template>
  <div>
    <button class="btn" @click="addNum">插入</button>
    <button class="btn" @click="removeNum">删除</button>
    <button @click="shuffleNum">数字洗牌</button>
    <!-- 不能嵌套div块， 会导致样式失效 -->
    <transition-group tag="p" name="wulv">
        <span class="item" v-for="item in numbers" :key="item">
        {{ item }}
        </span>
    </transition-group>


  </div>
</template>

<script>
import _ from 'lodash';
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10
    
    }
  },
  components: { 

  },
  methods: {
    addNum() {
      // 生成随机数的作用是随机找到下标插入数字
      this.numbers.splice(this.randomIndex(), 0, this.numCounter++);
    },
    removeNum() {
      this.numbers.splice(this.randomIndex(), 1);
    },
    // Math.random()：这是 JavaScript 的内置函数
    // 用于生成一个范围在 0 到 1 之间（不包括 1）的随机小数
    //  floor 向下取整
    randomIndex() {
      console.log(Math.random() * this.numbers.length);
      return Math.floor( Math.random() * this.numbers.length)
    },
    shuffleNum () {
      this.numbers = _.shuffle(this.numbers)
    }
  },
}
</script>

<style scoped>
  .btn {
    margin-right: 20px;
  }
  .item {
    display: inline-block; 
    margin: 100px 0px 20px 10px;
  }
  .wulv-enter-from,
  .wulv-leave-to {
    opacity: 0;
    transform: translateY(330px);
  }

  .wulv-enter-active,
  .wulv-leave-active {
    transition:all 1s ease;
  }
  .wulv-leave-active{
    position: absolute;
  }
  .wulv-move {
    transition: transform 1s ease;
  }
</style>