<template>
  <div class="hy-form">
    <!-- 提供首部插槽 -->
    <div class="header">
      <slot name="header"></slot>
    </div>
    <!-- width 为输入框前 文本所占宽度 ， 可由自定义传入或用 默认值 -->
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <!--

            遍历 每个form标签， el为行标签
              以下三个template 每次渲染进行逻辑判断， 判断item类型
            label为 文字
            placeholder: 占位符， 用户未输入时 提示内容
            colLayout 也为 一行占据标签数 24/x， 8为4个， 12 两个 24 1个
            itemStyle 有默认值 - return 导出不同的引用对象

          -->

          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <!-- input类型  password 触发 show-password 属性 -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <!--
                此处的v-bind直接传入整个对象， 内部会进行逐个解析并赋值对应的属性
                此处width：100% 是将选择框铺满剩余位置
                el-option 为 选项
              -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>

              <!-- otherOptions 直接传入对象， 内部解析并赋值对应属性  -->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <!-- 提供尾部插槽 -->
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      // vue3兼容性- 为prop属性设置 proType- 类型断言
      type: Array as PropType<IFormItem[]>,
      // 默认需要使用函数返回， 使得父组件引用为 专属的实例对象
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },

    itemStyle: {
      type: Object,
      // 对象或数组类型 使用默认值 需要使用箭头函数- 否则会出问题
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        // 响应数据识别界面
        xl: 6, // >1920px 4个
        lg: 8, // >1200 3个
        md: 12, // >992 2个
        sm: 24, // 768-992
        xs: 24 // <768
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue) => {
        console.log(newValue)
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )

    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.hy-form {
  padding-top: 22px;
}
</style>
