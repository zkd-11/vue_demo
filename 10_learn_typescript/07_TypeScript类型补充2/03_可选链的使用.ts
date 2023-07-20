export {};

//  可选链为 ES11新增加的特性

type Person = {
  name: String,
  //  ？ 表示可能存在
  friend?: {
    name: string,
    age?: number,
    girlFrined?: {
      name: string,
    }
  }
}

const info: Person = {
  name: "悟律",
  friend: {
    name: "韩绝",
    girlFrined: {
      name: "lily"
    }
  }
}

// 模拟在另外的文件进行访问
console.log(info.name);
console.log(info.friend!.name); // 当朋友不存在时， 编译器检测， 但是运行报错
//  所谓非空类型， 就是开发者 断言它存在

//  代码不安全， 不严谨可以通过narrow的方式进行处理
// 当朋友不存在时， 仍然会报错， 所以需要对其使用可选链
  if(info.friend) {
    console.log(info.friend.name);    
  } 

  // 可选链 表示可能存在， 不存在 短路， 存在可执行
//  对原先所定义的属性 未选参数时（可选参数）， 打印 undefined
 
  console.log(info.friend?.age);
  console.log(info.friend?.girlFrined?.name);
  

