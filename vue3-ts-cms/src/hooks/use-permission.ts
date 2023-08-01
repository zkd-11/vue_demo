import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  // 拼接权限Name 去进行比对
  const verifyPermission = `system:${pageName}:${handleName}`
  // 返回布尔值  判断是否有无某项权限
  return !!permissions.find((item) => item === verifyPermission)
}
