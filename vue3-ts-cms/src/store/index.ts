/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// 导入子模块
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import { IRootState, IStoreType } from './types'

import system from '@/store/main/product/system/system'

import { getPageListData } from '@/service/main/system/system'

import dashboard from './main/analysis/dashboard'
const store = createStore<IRootState>({
  state() {
    return {
      age: 22,
      name: '悟律',
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // 1. 请求部门和角色数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data

      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data

      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data

      // 2. 保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')

  // 刷新页面时对角色 /部门进行获取
  //此部分可能导致 显示异常， 未含token时去发送请求数据， 数据请求失败
  // store.dispatch('getInitialDataAction')
}
// 将方法 useStore方法进行导出
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
