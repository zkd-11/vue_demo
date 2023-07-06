import { sum} from './js/math'
const { priceFormat} = require('./js/format')
// import { createApp } from 'vue/dist/vue.esm-bundler';

// 当根组件可以直接使用 runtime的vue文件， 更节省空间， 子组件: 已经利用vue-loader、 vue-complile解析
import { createApp } from 'vue';

import App from "./vue/App.vue"

import './js/element';
console.log(sum(20, 30));
console.log(priceFormat())

import './demo'
const message = 'hello';
const names = ['avc', 'cna', 'dd'];

// 这里有template不能直接 使用template解析

// const app = createApp({
//   template: `<h2>我是vue渲染出来的</h2>`,
//   data() {
//     return {
//       title: 'i am vue'
//     }
//   }
// });
const app = createApp(App)
app.mount('#app')

names.forEach(item => console.log(item));

 