import { mapGetters, useStore } from 'vuex'
import { computed } from 'vue'; 

export function useState(mapper) {
  // 拿到 store对象
  const store = useStore();

  // 获取 对应的对象 functions {name: function, age: function}
  const storeStateFns = mapGetters(mapper); //mapGetters 返回为函数
  const storeState = {};
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store}) //为函数绑定this指向为 store
    storeState[fnKey] = computed(fn) //将绑定后的函数放置computed内部, 获得值
  })

  return storeState;
}