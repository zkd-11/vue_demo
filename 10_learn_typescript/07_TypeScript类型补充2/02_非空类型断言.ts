
export {};
//  可选参数 表示 可存在可不存在  message： String | undefined
function printMessageLength(message?: string) {
    // 当不存在时  容易出现错误， undefined 无法调用string时方法
    //  1， 方法一 narrow 进行逻辑处理
    // if (message) {
    //   console.log(message.length);
    // }

    // 2. 非空类型断言， ！ 一定会存值，告诉编译器别给我报错
    console.log(message!.length);
    //  这种只是绕过编辑器， 不安全
}

// printMessageLength() //执行会报错
printMessageLength("aaa");

