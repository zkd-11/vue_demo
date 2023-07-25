/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createStore } from 'vuex'
// 导入子模块
import login from './login/login'

import { IRootState } from './types'
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
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export default store
