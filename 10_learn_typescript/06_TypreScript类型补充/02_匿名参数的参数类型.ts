import { log } from "console";

export {};

// 通常情况下 ， 函数定义时， 都会为其添加类型注释
function foo(message: string) {
  return 11;
}

const names = ["ac", "wulv", 'dd'];

// item 匿名函数中， 会根据上下文自动 推导， 可不添加注解
//  因为item的遍历是从一个被识别为 字符串数组提取出来的 ， 所以编译器会到自动推导为字符串
names.forEach((item)=>{
  console.log(item.split(""));
})