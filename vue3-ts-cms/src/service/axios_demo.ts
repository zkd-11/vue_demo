import axios from 'axios'

// axios的实例对象
// 1.模拟get请求
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

// 2.get请求， 并传入参数
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: '韩绝',
//       age: 22
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// // 3.post请求
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'why',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// 额外补充的Promise中类型的使用  Promise本身是可以有类型
// new Promise<string>((resolve) => {
//   resolve('abc')
// }).then((res) => {
//   console.log(res.length)
// })

// axios 全局配置， 根路径
axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 10000
// axios.defaults.headers = {}

// 2.get请求， 并传入参数
axios
  .get('/get', {
    params: {
      name: '韩绝',
      age: 22
    }, //局部配置
    // timeout: 10000,
    headers: {}
  })
  .then((res) => {
    console.log(res)
  })

// 3.post请求
// axios
//   .post('/post', {
//     data: {
//       name: 'why',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios 拦截器 只对在拦截器定义后的请求有效
// fn1 成功执行函数、fn2发送失败执行的函数
axios.interceptors.request.use(
  (config) => {
    // 操作 为请求添加token 添加isLoading动画
    console.log('请求成功拦截')
    return config
  },
  (err) => {
    console.log('请求发送失败')
    return err
  }
)
// fn1: 数据响应成功 服务器正常返回了 数据20X
axios.interceptors.response.use(
  (res) => {
    console.log('拦截器成功拦截返回信息')
    return res
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)

// 多个请求一起返回
axios
  .all([
    axios.get('./get', { params: { name: '韩绝', age: 22 } }),
    axios.post('./post', { data: { name: '悟律', age: 22 } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })
