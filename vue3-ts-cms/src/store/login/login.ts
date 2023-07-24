import { Module } from 'vuex'
// 表示为 vuex的子模块

// import { IAccount } from '@/service/login/types'
import { ILoginState } from './types'
import { IRootState } from '../types'

// 第一个参数为此模块的state数据类型， 第二个为根模块的state数据类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {},
  actions: {
    // 第一个参数为上下文对象
    accountLoginAction({ commit }, payload: any) {
      console.log('执行acla', payload)
    }
  }
}

export default loginModule
