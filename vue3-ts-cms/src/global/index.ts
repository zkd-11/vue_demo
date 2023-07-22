import { App } from 'vue'
import registerElement from './register-element'

// ts 组件类型声明
export function globalRegister(app: App): void {
  app.use(registerElement)
}
