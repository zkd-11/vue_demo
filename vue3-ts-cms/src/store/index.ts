/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// 导入子模块
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import { IRootState, IStoreType } from './types'

import system from './main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      age: 22,
      name: '悟律'
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
// 将方法 useStore方法进行导出
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
