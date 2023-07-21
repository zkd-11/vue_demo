export {};

// 联合参数 函数重载  
//  缺点： 需要进行很多的逻辑判断
//    返回的类型无法确定

type ad = number | string;
function add(a1:ad, a2: ad ) {
  if(typeof a1 === "number" && a2 === "number") {
    return a1 + a2;
  }  else if (typeof a1 === "string" && a2 === "string") {
    return a1 + a2;
  }

//  为其它类型时， 进行函数拼接， 不允许
//  因为在ts中， 它会将类型识别为联合型， 而非单一的类型
  // return a1 + a2 ;
}

// 返回值推导 不准确
add(10, 20)