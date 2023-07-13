//  该插件导出的为对象形式
export default {
  install(app) {
    // 是对象， 键值队 { "$name": "悟律冲冲"}
   app.config.globalProperties.$name = "悟律冲冲"; 
   console.log(app.config.globalProperties);
  }
}