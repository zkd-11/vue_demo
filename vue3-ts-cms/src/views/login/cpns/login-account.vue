<template>
  <div class="login-account">
    <!-- ：model表示将对象的信息实时传递给外标签， 进行规则检验 -->
    <el-form label-width="60px" :model="account" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <!-- 对于标签框 需要动态绑定属性 -->
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'

import { rules } from '../config/account-config'
import localCache from '@/utils/cache'

import { useStore } from 'vuex'
export default defineComponent({
  components: {},
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 判断是否记住密码
          if (isKeepPassword) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 表单验证通过，执行登录逻辑
          // 2.开始进行登录验证- 进行展开运算符传出对象
          store.dispatch('login/accountLoginAction', { ...account })
        } else {
          // 表单验证未通过，显示错误信息
          console.log('表单验证未通过')
        }
      })
    }
    return {
      account,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>

<style scoped lang="less"></style>
