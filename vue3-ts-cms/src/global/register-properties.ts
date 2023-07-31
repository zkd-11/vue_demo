// 注册函数 对数据处理
//  注册formaTime, 对时间数据进行处理

import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'

// 全局注册的属性对象， 具有多个函数
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
