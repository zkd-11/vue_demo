export {};

// 剩余参数 传入， 以数组的形式储存
function foo<T, E, B> (arg1: T, arg2: E, arg3: B, ...args: T[]){

}

foo<number, string, boolean>(10, "悟律", false, 1, 2, 3, )