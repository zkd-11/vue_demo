export {};

const info = {
  name: "悟律",
  age: 22,
  work: "student"
}

info.work = "teacher"; 
//  可修改， 此时如需限制 属性限制设置化， 需要设置为字面量类型， 能进行比对

type Method = 'GET' | 'POST'

function request(url: string, method: Method) {}

// 如果定义了一个对象， 内部有属性关于method已定义时
//  3种处理方式， 提前为其属性 进行声明为同类型 method， 
//     否则即使为同联合类型 的一种也会报错

type Request = {
  url: string,
  method: Method
}

// 1. 将类型限制 提取， 在定义时， 在限制下进行对属性赋值  推荐使用这种
const options: Request = {
    url: 'http://localhost/test',
    method: 'GET'
}


request(options.url, options.method);

// 2. 字面量推导 推导出内部属性 都为string, 虽然值对
//  匹配不了 type = Method
const options2 = {
  url: 'http://localhost/test1',
  method: 'GET',
}

// request(options2.url, options2.method);
request(options2.url, options2.method as Method); // 类型断言， 不安全


//  字面量推导 - 设置为字面量类型， 能进行 数据 与type 比对
const options3 = {
  url: 'http://localhost/test2',
  method: 'GET',
} as const

request(options3.url, options3.method);






