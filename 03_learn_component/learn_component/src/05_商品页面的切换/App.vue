<template>
  <tab-control :titles="titles" @titleClick="titleReplace"></tab-control>
  <h2 class="content">{{ contents[currentIndex] }}</h2>
</template>

<script>
import TabControl from './TabControl.vue'
export default {
  data() {
    return {
      titles: ['衣服', '鞋子', '裤子'],
      contents: ["衣服界面","鞋子界面", "裤子界面"],
      currentIndex: 0
    }
  },
  components: { 
    TabControl
  },
  methods: {
    titleReplace(index) {
      this.currentIndex = index

    }

  },
}
</script>

<style scoped> 
  .content {
    font-size: 20px;
    text-align: center;
    margin: 30px 10px
  }


</style>