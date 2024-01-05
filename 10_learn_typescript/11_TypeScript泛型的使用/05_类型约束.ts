export {};

//  接口类 - ，
interface ILength {
  length: number;
}

function getLength<T extends ILength>(arg: T) {
  return arg.length;
}

getLength("abc");
getLength(["abc", "a"]);
getLength({ length: 100 });

// 参数 继承 Ilength 意味着  需要传入包含 length属性的参数 - 数组/对象/字符串

const lengthContainObj = getLength({ length: 111 });
console.log("[ lengthContainObj ] >", lengthContainObj);
