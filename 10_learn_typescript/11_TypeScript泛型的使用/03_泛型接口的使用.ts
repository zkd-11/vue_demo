export {};

interface IPerson<T1 = string, T2= number> {
  name: T1,
  age: T2,
}

// 对象无法进行类型推导， 使用默认值赋值

const p: IPerson ={
  name: "wulv",
  age: 22
}

// 类型 - 开发者自定义类型
const p1: IPerson<string, string> ={
  name: "wulv",
  age: "22"
}