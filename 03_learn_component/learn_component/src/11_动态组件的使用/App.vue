<template>
  <div>
    <button 
    v-for="item in tabs" 
    :key="item"
    @click="itemClick(item)"
    class="btn"
    :class ="{active: currentTab === item}"
    >
    {{ item }}
  </button>
  <!--  第一种 使用if切换 -->
      <!-- <template v-if="currentTab==='home'">
          <home></home>
      </template>
      <template v-else-if="currentTab==='about'">
          <about></about>
      </template>
      <template v-else>
          <category></category>
      </template> -->

      <!-- 使用 component: is -->
      <!-- 父组件传递时 传递Number类型 加：表示number类型识别 -->

      <keep-alive include="about" exclude="category">
        <component 
        :is="currentTab"
        name="wulv"
        :age="20" 
        @pageClick="pageClick"
        ></component>
    </keep-alive>
  </div>
</template>

<script>
import About from './pages/About.vue'
import Category from './pages/Category.vue'
import Home from './pages/Home.vue'
export default {
  data() {
    return {
      tabs: ['home', 'about', 'category'],
      currentTab: 'home'
    }
  },
  components: { 
    About,
    Category,
    Home
  },
  methods: {
    itemClick (item) {
      this.currentTab = item;
    },
    pageClick() {
    console.log('page内部发生了点击事件！');
   }
   },
}
</script>

<style scoped>
  .btn {
    position: relative;
    margin: 0px 8px 4px 4px
  }
  .active {
    color: red
  }
</style>