import { createApp } from 'vue'
// import App from './01_组件的拆分和嵌套/App.vue'
// import App from './02_组件的css作用域/App.vue'
// import App from './03_父组件传递子组件/App.vue'
// import App from  './04_子组件传递父组件/App'
// import App from  './05_商品页面的切换/App'
// import App from  './06_Provide和inject使用/App.vue'
// import App from  './07_事件总线的使用/HomeContent.vue'
// import App from  './08_插槽的基本使用/App.vue'
// import App from  './09_具名插槽的使用/App'
// import App from  './10_作用域插槽的使用/App.vue'
// import App from  './11_动态组件的使用/App.vue'
import App from  './12_异步组件的使用/App.vue'

// import {sum} from './12_异步组件的使用/utils/math.js'
// console.log(sum(20,30));

import('./12_异步组件的使用/utils/math').then((res) => {
  console.log(res.sum(20,30));
})

createApp(App).mount('#app')
