//  函数作为参数时 参数中如何编写类型

export {};

function foo() {};

type FooFnType = ()=>void;

  function bar(fn: FooFnType) {
    fn();
  }

  bar(foo);

  // 定义常量时， 编写函数的类型

  type AddFnType = (num1: number, num2: number) => number;
   //返回值设置为void， 不会报错, void相当于可覆盖， 但是不严谨

  const add: AddFnType = (n1: number, n2: number)=> {
    return n1 + n2;
  }

  let sum = add(1,2)
  console.log(sum);
  
