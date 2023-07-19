import { createStore } from "vuex"
import home from './modules/home'
import user from './modules/user'
const store = createStore({
  state() {
    return {
      rootCounter: 100,
    }
  },
  getters: {

  },
  mutations: {
    increment(state) {
      state.rootCounter++;
    }

  },
  Actions: {

  },
  modules: {
    home,
    user
  }
})


export default store;
