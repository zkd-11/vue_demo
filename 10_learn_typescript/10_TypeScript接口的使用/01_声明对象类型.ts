// 通过类型 type 别名来声明对象类型
//  type InfoType = { name: string, age: number}

// 另一种声明对象 - 接口interface
//  可定义可选类型， 只读属性

//  命名方式 习惯于名前加I 标识
interface IInfoType {
  readonly name: string
  age: number
  friend?: {
    name: string
  }
}

const info: IInfoType = {
  name: "悟律",
  age: 22,
  friend: {
    name: "韩绝",
  }
}

console.log(info.friend?.name);
info.age = 23;
console.log(info.age);