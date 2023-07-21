//  表示 期望调用此函数的对象拥有一个name的变量属性
type ThisType = { name: string};

//  这里的this 表示作用域的this指向 
function eating(this: ThisType, message: string) {
  console.log(this.name + " eating", message);
}

const info = {
  name: "wulv",
  // 对象满足即可
  age:18,
  eating: eating,
};

// 隐式绑定  自动绑定info对象
info.eating("哈哈哈");

// 显示绑定
eating.call({name: "kobe", age:18}, "呵呵呵")
eating.apply({name: "james"}, ["嘿嘿嘿"])

export {};
