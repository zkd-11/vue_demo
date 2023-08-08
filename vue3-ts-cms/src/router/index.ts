import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import localCache from '../utils/cache'
import { firstMenu } from '@/utils/map-menus'

const routes: RouteRecordRaw[] = [
  {
    // 默认导入main界面，提高用户体验，可提取本地缓存
    // 初次登录 会进行路由守卫 检验token是否存在，未存在返回登录
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    // 路径需要为其添加名字
    name: 'main',
    path: '/main',
    component: () => import('@/views/main/main.vue')
  },
  // 添加未找到路径时， 跳转到not-found 页面
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

//  添加导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }

  // console.log(router.getRoutes())
  // console.log(to)

  if (to.path === '/main') {
    return firstMenu.url
  }

  // 这里主要实现 当去达路径 在main下- 当不存在时将其返回user界面
  if (to.path.indexOf('/main') !== -1) {
    if (to.name === 'notFound') {
      to.name = 'user'
    }
  }
})

export default router
