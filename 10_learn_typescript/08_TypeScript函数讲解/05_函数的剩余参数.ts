// function sum(num1: number, num2: number) {
//   return num1 + num2
// }

//  剩余参数的使用， 重复计算同类型的数值进行计算时， 可使用此方法
function sum(initalNum: number, ...nums: number[]) {
  let total = initalNum
  for (const num of nums) {
    total += num
  }
  return total
}

function sum1( ...nums: number[]) {
  let total = 0;
  for (const num of nums) {
    total += num
  }
  return total
}

console.log(sum(20, 30))
console.log(sum(20, 30, 40))
console.log(sum(20, 30, 40, 50))

console.log(sum1(20, 30, 40, 50))