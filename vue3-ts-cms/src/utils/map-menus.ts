import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 先加载默认所有routes
  const allRoutes: RouteRecordRaw[] = []
  // 这里使用webpack的require方法执行context 返回上下文
  //  参数解析： 路径， 递归查找（设置为true）， 正则表达式， \转义
  const routeFiles = require.context('../router/main', true, /\.ts/)
  // 返回所有路径的方法， 但是需要对相对路径进行分跟 ./system/xx.ts ,以. 分割
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 根据菜单需要添加的routes 进行匹配
  //  type ===1 说明为二级菜单
  //  需要先遍历子菜单
  //  type ===2 说明一级菜单， 直接映射即可， 此处需要使用到 递归

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        //  应该提前注册所有组件， 一般不可能出现匹配不了的情况
        //  但是当路径写错， 后端新增menu， 前端未更新会导致false
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  return routes
}
