//  ts中 不推荐对一个数组类型， 存储不同的数据类型， 需要固定

// 两种类型注解 推荐使用第二种
const names: Array<string> = [];
const names1: string[] = [];

//  类型存放一致
names1.push("韩绝");
names1.push("悟律");
// names1.push(11); 报错

console.log(`字符串数组： ${names1}`);


