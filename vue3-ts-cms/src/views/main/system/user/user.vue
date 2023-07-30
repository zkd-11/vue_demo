<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig"></page-search>

    <div class="content">
      <hy-table :listData="userList" :propList="propList">
        <!-- 动态插槽 - 设置样式 转为button 原状态码为 0/ 1 -->
        <!--
          首先需要拿到scope 作用域对象
          通过对象拿到内部 具名插槽， 对插槽的展示内容进行调整
         -->
        <template #status="scope">
          <el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
        </template>
        <!-- 插槽 选择 用户创建时间列 -->
        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
        </template>
      </hy-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PageSearch from '@/components/page-search'

import { searchFormConfig } from './config/search-form-config'
import HyTable from '@/base-ui/table'
import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    HyTable
  },
  setup() {
    const store = useStore()
    // 触发animation 去发送post请求获得数据
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      // 加入用户清单- 偏移量0， 数量为10
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    // 获取用户信息表格信息 和 用户数量信息
    const userList = computed(() => store.state.system.userList)
    // 暂时未对userCount信息进行使用
    const userCount = computed(() => store.state.system.userCount)

    // 设置表格 列信息 单元格样式, hy-table 接收并设置
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      // 当传入的slotName时， 意味着使用具名插槽，为当前列使用插槽形式
      //  在父组件中可对该列进行样式调整
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      }
    ]

    return {
      searchFormConfig,
      userList,
      propList,
      userCount
    }
  }
})
</script>

<style scoped>
.btnControl {
  text-align: right;
  padding: 0 50px 20px 0px;
}
</style>
