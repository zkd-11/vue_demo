<template>
  <div class="page-content">
    <hy-table :listData="dataList" v-bind="contentTableConfig">
      <!-- 头部插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="mini">新建用户</el-button>
      </template>
      <!--
          内部动态插槽
          动态插槽 - 设置样式 转为button 原状态码为 0/ 1
          首先需要拿到scope 作用域对象
          通过对象拿到内部 具名插槽， 对插槽的展示内容进行调整
         -->
      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <!-- 插槽 选择 用户创建时间列 -->
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #handler>
        <el-button icon="el-icon-edit" size="mini" type="text">
          编辑
        </el-button>
        <el-button icon="el-icon-delete" size="mini" type="text">
          删除
        </el-button>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import HyTable from '@/base-ui/table'
import { useStore } from '@/store'
export default defineComponent({
  components: {
    HyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // const userCount = computed(() => store.state.system.userCount)

    return {
      dataList
    }
  }
})
</script>

<style scoped lang="less"></style>
