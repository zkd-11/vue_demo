// type: CalcFn = (n1: number, n2: number) => number
// 可调用的接口
export {};

interface CalcFn {
  (n1: number, n2: number):number;
  // 声明 函数
}

function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2)
}

const add: CalcFn = (num1, num2)=>{
  return num1 + num2;
}

console.log(calc(10, 20, add));
