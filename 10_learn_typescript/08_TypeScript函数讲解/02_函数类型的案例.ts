export {};


type myFn = (num1: number, num2: number) => number;
//返回值设置为void， 不会报错, void相当于可覆盖， 但是不严谨

function calc(n1: number, n2: number, fn: myFn) {
  return fn(n1, n2);
} 

const result = calc(20, 30, function(a1, a2) {
  return a1 + a2;
})


const result1 = calc(20, 30, function(a1, a2) {
  return a1 * a2;
})

console.log(`运行加函数： ${result},  运行乘函数: ${result1}`);

