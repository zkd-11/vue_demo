//  空时合并运算符  赋予默认值
export {};

let message: string | null = null;


const content = message ?? "悟律";
//  等价于三目运算符 message ? message : "悟律"
console.log(content); // 打印 悟律
