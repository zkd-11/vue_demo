import { createApp } from 'vue'
// import App from './01_render函数的使用/App.vue'
// import App from './01_render函数的使用/Home.vue'
// import App from './02_jsx的使用/App.vue'
// import App from './03_自定义指令/App.vue'


import App from './04_teleport内置组件/App.vue'

import registerDirectives from './directives'
import pluginObject from './plugins/plugins_object'
import pluginFunction from './plugins/plugins_function'



const app = createApp(App);
app.use(pluginObject);
app.use(pluginFunction);
registerDirectives(app);
// 全局自定义命令
app.directive("focus", {
    mounted(el, bingdings, vnode, preVnode) {
      console.log('focus mounted');
      el.focus();
    }
})




app.mount('#app');
