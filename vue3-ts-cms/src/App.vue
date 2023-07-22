<template>
  <el-button>哈哈哈</el-button>
  <el-button type="primary">哈哈哈</el-button>
  <el-button type="danger">哈哈哈</el-button>

  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  props: {
    name: {
      type: String
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
