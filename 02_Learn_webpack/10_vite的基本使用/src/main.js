import {sum} from './js/math'
// 直接使用浏览器自带解析模块 需要对文件加后缀， 但是浏览器会发送关于原包的多个文件请求
// import _ from '../node_modules/lodash-es/lodash.default.js'
import _ from 'lodash-es'

import "./css/style.css";
import "./css/title.less"; 
import mul from './ts/mul.ts';
import App from './vue/App.vue';
import { createApp } from 'vue';


console.log(sum(20,30));
console.log(mul(20,30));

console.log('韩绝重重');
console.log('韩绝重重');

console.log(_.join(["abc", "def"], "-"));

const titleEl = document.createElement('div');
titleEl.className = 'title';
titleEl.innerHTML = 'hello vite';
document.body.appendChild(titleEl);

createApp(App).mount("#app")