<template>
  <div class="hy-table">
    <el-table :data="listData" border style="width: 100%">
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <!-- 设置插槽， 为父组件提供 动态设置指定具有插槽名的指定列样式 -->
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      // 将其断言为 内部数据为any类型的数组
      type: Array as () => any[],
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
