import { createApp } from 'vue'

import { globalRegister } from './global'

import 'element-plus/lib/theme-chalk/index.css'
// 使用 elementui-Plus 组件
// app.use(ElementPlus)-上述导入直接一键导入

import 'normalize.css'
import './assets/css/index.less'

// import './service/axios_demo' //axios_练手
// 待开启
// import hyRequest from './service'
import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

// 注册element-plus/其他
// 表示调用封装出来的index.ts函数，函数作用为注册全局组件
// globalRegister(app)
app.use(globalRegister)
app.use(router)
app.use(store)

app.mount('#app')

// 这种方式是第三种获得换的环境变量的方式
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   headers: {},
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       config.headers['token'] = '123'
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// hyRequest
//   .get<DataType>({
//     url: '/home/multidata',
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })

// hyRequest.get()
