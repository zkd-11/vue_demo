//  让一个参数本身为可选的

//  可选时  类似于 类型|undefined --  

export {};

function foo(message?: string) {
  console.log(message);
}

foo();

function foo1(message: string | undefined) {
  console.log(message);
}
foo1(undefined);