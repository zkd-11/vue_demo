export {};

interface IPerson<T1 = string, T2 = number> {
  name: T1;
  age: T2;
}

// 对象无法进行类型推导， 使用默认值赋值

const p: IPerson = {
  name: "wulv",
  age: 22,
};

// 类型 - 开发者自定义类型
const p1: IPerson<string, string> = {
  name: "wulv",
  age: "22",
};

// 自传入类型- 复习

const p2: IPerson<"代号001", number> = {
  name: "代号001",
  age: 11,
};

console.log("[ p2 ] >", p2);
