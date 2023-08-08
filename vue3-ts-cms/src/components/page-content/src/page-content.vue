<template>
  <div class="page-content">
    <hy-table
      :listData="dataList"
      :listCount="dataCount"
      v-model:page="pageInfo"
      v-bind="contentTableConfig"
    >
      <!-- 头部插槽 -->
      <template #headerHandler>
        <el-button
          v-if="isCreate"
          type="primary"
          size="mini"
          @click="handleNewClick"
          >新建数据</el-button
        >
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
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <el-button
          v-if="isUpdate"
          icon="el-icon-edit"
          size="mini"
          type="text"
          @click="handleEditClick(scope.row)"
        >
          编辑
        </el-button>
        <el-button
          v-if="isDelete"
          icon="el-icon-delete"
          size="mini"
          type="text"
          @click="handleDeleteClick(scope.row)"
        >
          删除
        </el-button>
      </template>

      <!-- 在page-content 动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import HyTable from '@/base-ui/table'
import { useStore } from '@/store'

import { usePermission } from '@/hooks/use-permission'
export default defineComponent({
  components: {
    HyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()

    // 0. 获取操作的权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    // 1. 双向绑定pageInfo 传入table
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 2. 发送网络请求
    // 有默认值， 当未传入参数时， 默认调用 空对象
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      console.log('11')
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 3. 从vueX 中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    // 4. 获取动态插槽， 为其它独有表格设置插槽
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )

    // 5. 删除/ 编辑/ 新建操作
    const handleDeleteClick = (item: any) => {
      console.log(item)
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    // 新建操作
    const handleNewClick = () => {
      emit('newBtnClick')
    }
    // 编辑操作
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }

    return {
      dataList,
      getPageData,
      pageInfo,
      dataCount,
      otherPropSlots,

      isCreate,
      isUpdate,
      isDelete,
      isQuery,

      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>

<style scoped lang="less"></style>
