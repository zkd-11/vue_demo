// 自定义ref

// 如何使用下列导出， 需用赋值解构导出 {f1}
// export function f1(){
// }

import { customRef } from "vue";
export default function(value, delay = 500) {
  let timer = null;

// 自定义ref， track为通知追踪依赖（副作用） - trigger通知触发更新
  return customRef((track, trigger) =>{
    return {
      // 通知vue正跟踪依赖， 再将储存在ref对象中的value值返回组件 获取
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() =>{
          value = newValue;
          trigger();
        }, 1000)
      }

    }
  })
}