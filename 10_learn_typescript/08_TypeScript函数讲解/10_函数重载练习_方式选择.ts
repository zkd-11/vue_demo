export {};

// 实现方式1 ： 联合类型
//  返回值可确定， 能使用此方式 尽可能使用
function getLength(args: string | any[]) {
  return args.length;
}

console.log(getLength("hanjue"));
console.log(getLength([1, 2, 3]));


// 实现方式二  函数重载
function getLength1(args: string): number;
function getLength1(args: any[]): number;

function getLength1(args: any): number {
  return args.length;
}

console.log(getLength1("hanjue"));
console.log(getLength1(["aa", "aa", "cc",1]));
