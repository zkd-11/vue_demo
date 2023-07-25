<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <span class="s1">悟律冲冲</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex; /* 使用flex布局 */
  align-items: center; /* 垂直方向居中 */
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
.s1 {
  flex: 1; /* 占满剩余空间 */
  margin-left: 5px;
  line-height: 30px;
  text-align: center; /* 水平方向居中 */
}
</style>
