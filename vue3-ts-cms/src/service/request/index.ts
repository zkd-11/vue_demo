import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { HYRequestInterceptors, HYRequestConfig } from './type'

import { ElLoading } from 'element-plus' //导入加载组件
// 因为需要用到loading的返回值 需导入type
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

// 自定义接口扩展原config功能，添加拦截器功能  封装进type.ts
// interface HYRequestInterceptors<T = AxiosResponse> {
//   requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
//   requestInterceptorCatch?: (error: any) => any
//   responseInterceptor?: (res: T) => T
//   responseInterceptorCatch?: (error: any) => any
// }
// interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
//   // 自定义接口使用 并拓展拦截功能- 可选
//   interceptors?: HYRequestInterceptors<T>
//   showLoading?: boolean
// }

// 默认展示加载动画 true显示
const DEAFULT_LOADING = true

class HYrequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  // showLoading为实例化对象传入的值，来决定是否加载动画
  showLoading: boolean
  loading?: ILoadingInstance

  constructor(config: HYRequestConfig) {
    // 相当于创建实例请求，并为其赋值配置
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 展示动画按钮，这样的设置当未传入showLoading时默认为true 展示动画
    this.showLoading = config.showLoading ?? DEAFULT_LOADING

    // 使用接口的请求答复-函数-可选，实例对象可以传入此配置，可选
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器-
    //请求- 后添加 先执行，响应先添加先执行
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('默认实例拦截器: 请求成功拦截')

        if (this.showLoading) {
          // 执行加载动画组件 lock 为执行蒙版- text加载时文本
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('默认实例拦截器: 请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('默认实例拦截器: 响应成功拦截')

        // 请求成功后 将loading移除, 不一定有使用加载动画配置，不需要使用if
        this.loading?.close()
        // 结果拦截， 发送请求后，结果经过拦截处理后再返回

        // 由于对AxiosResponse类型数据进行取值， 变为any
        const data = res.data

        // 将loading移除
        this.loading?.close()

        // 此情况为请求失败，但失败的状态返回在请求成功中
        if (data.returnCode === '-1001') {
          console.log(`请求失败,错误码为${data.returnCode}`)
        } else {
          return data
        }
        return res
      },
      (err) => {
        console.log('默认实例拦截器: 响应拦截失败')

        // 将loading移除
        this.loading?.close()
        // 请求失败 在相应失败设置
        if (err.response.status === 404) {
          console.log('404错误')
        }
        return err
      }
    )
  }

  // 这里的request函数， 内部再发起真正的http请求，通过instance实例的request方法
  request<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 有拦截器的存在时进行执行拦截器内函数，再将config返回
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 这个请求开关，将影响加载动画开启， 默认不填入时为true,看类中constructor
      if (config.showLoading === false) {
        this.showLoading = false
      }

      // 单独请求有自带拦截器执行响应拦截器
      this.instance
        // 泛型 any传给一个参数
        .request<any, T>(config)
        .then((res) => {
          // 1. 单个请求数据处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 将showLoading设置为true， 不影响下次请求
          this.showLoading = DEAFULT_LOADING

          // 3. 将结果返回
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading 设置为true, 不影响下个请求
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }

  // 当不传入时， 默认将参数设置为any型， 返回promise对象属性也为 any类型
  get<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HYrequest
