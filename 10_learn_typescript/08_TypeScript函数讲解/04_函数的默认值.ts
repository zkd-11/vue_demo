//  必传参数 - 默认值的参数 - 可选参数
export {};

function foo(x: number, y: number = 20) {
  console.log(x,y);
}

foo(30);

// 当一个值为默认值， 不想传此参数时， 传入undefined， 但是默认不将默认值参数放首位

function foo1(x: number=20, y: number) {
  console.log(x,y);
}

foo1(undefined, 30);

