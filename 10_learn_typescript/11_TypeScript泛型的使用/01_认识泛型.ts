//  函数参数化， 参数类型由使用者决定

function sum<Type>(num: Type): Type {
  return num;
}

// 1. 调用方式一： 明确传入类型

sum<number>(20);
sum<{ name: string }>({ name: "wulv" });
sum<any[]>([1, 2, 3]);

// 类型推导

sum(20);
const selfDefine = sum({ name: "wulv", age: 22 });
console.log("[ selfDefine ] >", selfDefine);
