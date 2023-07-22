
// 声明模块
declare module 'lodash' {
  export function join(arr: any[]): void
}


// 声明变量/函数/类  会自动去寻找
declare let whyName: string
declare let whyAge: number
declare let whyHeight: number

//  声明index.html 已存在的函数
declare function whyFoo(): void

// 声明 类
declare class Person {
  name: string
  age: number
  constructor(name: string, age: number)
}

// 声明文件 将文件转化为模块化
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg'
declare module '*.gif'


// 声明命名空间  将识别index.html引入的jquery, 并将其中的ajax函数导出
//  在main.ts中可进行使用
declare namespace $ {
  export function ajax(settings: any): any
}




