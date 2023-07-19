const homeModule = {
  //  使用命名空间后， 当事件commit/ dispatch 仅从根组件查找
  //  如需 触发当前模块 需用路径上  home/increment
  namespaced: true,
  state() {
    return {
      homeCounter: 102,
    }
  },
  getters: {
    doubleHomeCounter(state, getters, rootState, rootGetters) {
      return state.homeCounter  *2;
    },
    otherGetters(state, getters) {
      return 100;
    }


  },
  mutations: {
    increment(state, payload) {
      state.homeCounter++;
    }

  },
  actions: {
    // ctx在模块中含6个属性， 
    // commit dispatch state rootState(根模块) getters rootGetters(根模块) 
    incrementAction({commit, dispatch, state, rootState, getters, rootGettrs}) {
      commit("increment");
      // 并 commit提交至 根模块的increment事件
      commit("increment", null, { root: true}) //表示将事件派发至根模块

    }

  }
}

export default homeModule;