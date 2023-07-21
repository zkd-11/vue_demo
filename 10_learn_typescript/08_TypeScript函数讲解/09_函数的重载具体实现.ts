export {};

//  提前声明参数类型 - 返回值类型， 不给出具体操作
//  在给完所有后， 再写出具体得函数实现

function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;

//  调用函数时， 需将类型转化为any 
//  会在已声明的函数中， 进行类型匹配 - 且只能匹配已有的类型
function add(num1: any, num2: any): any {
  if(typeof num1 === 'string') {
    return `${num1.toUpperCase()} - ${num2.toUpperCase()}`
  } 
  return num1 + num2;
} 

const result = add(20, 30);
const result1 = add("aa", "vv");
// const result2 = add("aa", 22);  //报错重载类型匹配不上
console.log(result1);
console.log(result);
