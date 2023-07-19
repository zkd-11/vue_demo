const userModule = {
  namespaced: true,
  state() {
    return {
      userCounter: 101,
    }
  },
  getters: {

  },
  mutations: {
    increment(state) {
      state.userCounter++;
    }

  },
  actions: {

  }
}

export default userModule;