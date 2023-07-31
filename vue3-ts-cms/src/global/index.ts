import { App } from 'vue'
import registerElement from './register-element'
import registerProperties from './register-properties'

// ts 组件类型声明
export function globalRegister(app: App): void {
  app.use(registerElement)
  app.use(registerProperties)
}
