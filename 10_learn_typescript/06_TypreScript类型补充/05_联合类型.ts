export {};

function printID(id: number|string|boolean) {
  // 使用联合类型需要特别小心
  //  需要将内部特定方法进行 逻辑判断， 缩小范围
  // 如果 直接打印id.toUpperCase, 对于其它非字符串类型会报错
  // narrow缩小

  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printID(123);
printID("abc");
