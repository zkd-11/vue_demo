//  当需要对一个对象，同个属性进行赋值时，可先使用symbol分割
//  对象数组分割

const title1 = Symbol("title");
const title2  = Symbol("title");

const info = {
  [title1]: "程序员",
  [title2]: "老师"
};

console.log(info[title1]);

const symbols = Object.getOwnPropertySymbols(info);

symbols.forEach(symbol => {
  console.log('1');
  console.log(symbol);

  console.log(info[title2]);
  // 无法进行编译 bug ，待解决
  // console.log(info[symbol]);
});

export {}