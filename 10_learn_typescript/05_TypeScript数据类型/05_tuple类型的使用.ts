// tuple 元素： 多种元素的组合， 并且对每个位置的元素进行类型声明
export {}

// 1.数组的弊端

// 里面类型都为any， 当取出一个数字操作时，不会提示报错
//  不安全
const info: any[] = ["悟律", 22, 1.77];
const name = info[0];
console.log(name.length);

const age = info[1];
console.log(age.length); // 这一处为错误的 但是没有报错

// 元组的特点
const info1: [string, number, number] = ["韩绝", 22, 1.78];
const name1 = info1[0];
const age1 = info1[1];
console.log(name1.length);
// console.log(age1.length);  会报错 数字没有length属性 


