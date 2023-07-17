import { createStore } from "vuex"
// 导入 函数变量名 文件
import { INCREMENT_N } from './multation-type'

const store = createStore({
  state() {
    return {
      counter: 100,
      age: '悟律18',
      name: '韩绝',
      books: [
        {
          name: '被讨厌的勇气',
          price: 188,
          count: 2
        },
        {
          name: '百炼成钢',
          price: 223,
          count: 4
        },
        {
          name: '消失的新南洋',
          price: 331,
          count: 5
        },
      ],
      discount: 0.8
    }
  },
  // getters 相当于 computed对象， 内部属性返回可为 函数
  getters: {
    //  函数两个 参数 ， 一个为 state对象 ， 一个为getters
    totalPrice(state, getters) {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.count * book.price
      }
      return `${Math.round(totalPrice * getters.currentDiscount)} 元`
    },

    currentDiscount(state) {
      return state.discount * 0.9;
    },

    //  getter 返回一个函数
    totalPriceCountGreaterN(state,  getters) {
      return function(n) {
        let totalPrice =  0;
        for (const book of state.books) {
          if(book.count > n) {
            totalPrice += book.count * book.price
          }
        }     
         return `${Math.round(totalPrice * getters.currentDiscount)} 元`;
      }
    },

    // 使用 getter返回 state内属性值  拼接后返回
    nameInfo(state) {
      return `姓名： ${state.name}`
    } ,
    ageInfo(state) {
      return `${state.age} 岁`
    } ,
    
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },

    // incrementN(state, payload){
    //   console.log(payload);
    //   // state.counter += payload
    //   state.counter += payload.n
    // }
    // 使用变量名 - 函数名 封装
    [INCREMENT_N] (state, payload){
      console.log(payload);
      // state.counter += payload
      state.counter += payload.n
    }
  },
});

export default store;
