import { Module } from 'vuex'
// 表示为 vuex的子模块

// import { IAccount } from '@/service/login/types'
import { IAccount } from '@/service/login/type'
import { ILoginState } from './types'
import { IRootState } from '../types'

// 导入路由映射表函数-
import { mapMenusToRoutes } from '@/utils/map-menus'
// 导入权限表函数-
import { mapMenusToPermissions } from '@/utils/map-menus'

// 导入三个请求分别对应 登录请求- 用户请求 - 菜单请求
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'

// 导入缓存对象-  路由
import localCache from '@/utils/cache'
import router from '@/router'

// 第一个参数为此模块的state数据类型， 第二个为根模块的state数据类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // 注册动态路由组件
      // console.log('注册动态路由组件')
      // 将userMenus -> routes， 数组
      const routes = mapMenusToRoutes(userMenus)
      //逐一遍历添加进规则- mainChildren
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 在为用户生成菜单时 就需为其绑定权限
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    // 第一个参数为上下文对象
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 💓🐟fix: 登录获得token对 部门/角色表单数据请求- 触发根路径的animation
      this.dispatch('getInitialDataAction', null, { root: true })
      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4.跳到首页
      router.push('/main')
    },

    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行pla', payload)
    // } //后面实现 逻辑， 上传手机的号码即可
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
        // 💓🐟
        this.dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
