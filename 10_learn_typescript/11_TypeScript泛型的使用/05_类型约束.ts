export {};

//  接口类 - ， 
interface ILength {
  length: number;
}

function getLength <T extends ILength> (arg: T) {
  return arg.length;
}

getLength("abc");
getLength(["abc", "a"]);
getLength({length: 100})