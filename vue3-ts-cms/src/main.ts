import { createApp } from 'vue'
import { globalRegister } from '../src_why/global'
import 'normalize.css'
import './assets/css/index.less'

// import './service/axios_demo'
import hyRequest from '../src_why/service'

import App from './App.vue'

import router from '../src_why/router'
import store from '../src_why/store'

const app = createApp(App)

// 注册element-plus/其他
app.use(globalRegister)
app.use(router)
app.use(store)

app.mount('#app')

// console.log(VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

hyRequest.request({
  url: '/home/multidata',
  method: 'GET',
  headers: {},
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      config.headers['token'] = '123'
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独响应的response')
      return res
    }
  }
})

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })

// hyRequest.get()
