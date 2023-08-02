import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

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
  // 多层时， 从最底层往外扩

  // 加下划线_表示内部辅助函数_ 内有递归处理，不适用于外部

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        //  应该提前注册所有组件， 一般不可能出现匹配不了的情况
        //  但是当路径写错， 后端新增menu， 前端未更新会导致false

        if (route) routes.push(route)

        // 将首个Menu进行赋值， 解除main刷新无法导向失败
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  return routes
}

// 为注册映射函数 进行扩展功能， 直接在面包屑函数 进行调用即可
//  获得面包屑文本数组
// 获取面包屑 文本 路径文本
export function pathMapBreadcrumbs(userMenus: any, currentPath: string): any {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)

  return breadcrumbs
}

export function pathMapToMenu(
  userMenus: any,
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// 函数为获取 级别为3的菜单权限 转化为字符串
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermissions = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermissions(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermissions(userMenus)

  return permissions
}

export { firstMenu }

// 获取叶子结点
export function menuMapLeafKeys(menuList: any[]) {
  const leftKeys: number[] = []

  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)

  return leftKeys
}

// // 获取面包屑 文本 路径文本
// export function pathMapBreadcrumbs(userMenus: any, currentPath: string): any {
//   const breadcrumbs: IBreadcrumb[] = []

//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (findMenu) {
//         // 因为是顶层所以不用跳转， 也无URL，去除
//         breadcrumbs.push({ name: menu.name })
//         breadcrumbs.push({ name: findMenu.name, path: findMenu.url })
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//     return breadcrumbs
//   }
// }

// export function pathMapToMenu(userMenus: any, currentPath: string): any {
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       // 进行遍历获取匹配， 将当前路径与菜单信息 进行比对
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (findMenu) {
//         return findMenu
//       }
//     }
//     // 此部分是为 无子菜单的  菜单逻辑判断，返回本身，
//     // 在此案例中，作为递归的调用出口
//     //  遍历至子菜单时， 将菜单Menu 进行返回
//     else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }
// }
