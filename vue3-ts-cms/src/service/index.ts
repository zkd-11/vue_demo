//  service 统一出口
import HYrequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/utils/cache'

const hyquest = new HYrequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 传入具体的操作，在接口中只是声明，这里是主要实现
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // console.log('请求成功拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      // console.log('响应成功拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败拦截')
      return err
    }
  }
})

export default hyquest
