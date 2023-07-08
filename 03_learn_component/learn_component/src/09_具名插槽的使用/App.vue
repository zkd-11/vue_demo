<template>
  <div>
    <nav-bar :name="name">
      <template #left>
          <button>我是左边的按钮</button>
      </template>
      <template #center> 
          <h3>中间文本</h3>
      </template>
      <template v-slot:right>
          <i>我是右边的i元素</i>
      </template>
      <!-- 高级插槽， 使用组件中data内部属性值 -->
      <template v-slot:[name]>
        悟律
      </template>
    </nav-bar>
</div>

</template>

<script>
import NavBar from './NavBar.vue'
export default {
  data() {
    return {
      name: 'wulv'
    }
  },
  components: { 
    NavBar
  },
  methods: {},
}
</script>

<style scoped>
</style>