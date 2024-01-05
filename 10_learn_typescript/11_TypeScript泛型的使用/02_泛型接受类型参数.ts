export {};

// 剩余参数 传入， 以数组的形式储存
function foo<T, E, B>(arg1: T, arg2: E, arg3: B, ...args: T[]) {}

foo<number, string, boolean>(10, "悟律", false, 1, 2, 3);

function argsContain<T, E>(a: T, b: E, ...args: E[]) {
  return args;
}

const argsShow = argsContain<Boolean, String>(
  true,
  "此处属于b参数 不会被打印",
  "b",
  "cc",
  "dd"
);
console.log(
  "%c [ argsShow ]-13",
  "font-size:15px; background:#7f2116; color:#c3655a;",
  argsShow
);
