//  never 表示不会执行的路径， 无返回值

import { log } from "console"

//  用于 - 提高代码健壮性
export {}
function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
  case 'string':
    console.log("string处理");
    break;
  case 'number':
    console.log("number处理");
    break;
  case 'boolean':
    console.log("布尔处理");
    break;
    // 不可能到达的路径 上面已穷举所有类型
    default:
      // 如果 函数参数 接收后续添加了 布尔类型，但是没对布尔类型进行操作
      //  参数会被赋值到 check这个never 类型 报错
      const check: never = message
  } 
}

handleMessage(true);



