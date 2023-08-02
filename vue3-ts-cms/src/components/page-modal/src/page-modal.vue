<template>
  <div class="page-modal">
    <el-dialog
      title="新建用户"
      v-model="dialogVisble"
      width="30%"
      center
      destroy-on-close
    >
      <hy-form v-bind="modalConfig" v-model="formData"></hy-form>
      <!-- 添加默认插槽, 父组件插入标签/组件位置 -->
      <slot></slot>
      <template #footer>
        <el-button @click="dialogVisble = false">取消</el-button>
        <el-button type="primary" @click="handleConfirmClick">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import HyForm from '@/base-ui/form'

import { useStore } from '@/store/index'

export default defineComponent({
  components: {
    HyForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const formData = ref<any>({})
    const dialogVisble = ref(false)

    // 对defalutInfo 进行监听
    watch(
      () => props.defaultInfo,
      (newValue) => {
        // 限制item为已传入的配置类型，显示的为form添加表格类型
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    // 为表单确认按钮 赋予功能, 创建/编辑

    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisble.value = false
      // 将对象的属性名转化为数组，键数组，判断其长度
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        console.log('编辑用户')
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          // defaultInfo为传入的行数据，具有用户数据，取出其id
          id: props.defaultInfo.id
        })
      } else {
        // 新建用户
        console.log('新建用户')
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          // 将otherInfo传入的权限表也赋值其中
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }
    return {
      formData,
      dialogVisble,
      handleConfirmClick
    }
  }
})
</script>

<style scoped lang="less"></style>
