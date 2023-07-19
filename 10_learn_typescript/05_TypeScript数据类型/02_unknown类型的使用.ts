// unkonw 当不清楚数据的最终类形时，可使用any和unknown
//  unkown更安全， 因为它只能赋值给 unknown 和 any的数据，保护数据不被滥用
//  any 能被赋值给任意类型

export {};
let flag = true;
let result: unknown;

function foo () {
  return 11;
}

function bar () {
  return "wulv";
}

if(flag) {
  result = foo();
} else {
  result = bar();
}

// let message: string = result;
// let num: number = result;

console.log(result);
