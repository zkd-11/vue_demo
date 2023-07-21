//  可选类型必须写在必须按类型的后面

//  当一个参数为可选参数时， 其默认值为 undefined | 所定义的类型
export {};

function foo(x: number, y?: number) {

}

foo(20, 30)
foo(20)