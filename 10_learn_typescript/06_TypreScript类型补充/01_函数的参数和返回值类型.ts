// 给参数加上类型注解： num1: number, num2: number, num3: number
//  返回值可加可不加， 在（参数） : number
//      返回值 会自动推导

export {};

function sum( num: number, num2: number) {
  return num + num2;
}

sum(1,2);

