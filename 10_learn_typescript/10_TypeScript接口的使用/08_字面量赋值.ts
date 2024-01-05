export {};

interface IPerson {
  name: string;
  age: number;
  height: number;
}

const info = {
  name: "韩绝",
  age: 22,
  height: 1.78,
  address: "广州市",
};

// freshness 擦除
//  将对象引用进行赋值时， 他会将多余的属性进行删除， 在使用p时无法使用多余的属性
const p: IPerson = info;
// console.log(p.address);// 报错， 因为只会将符合字面量的属性进行传入赋值
console.log(`直接引用对象才能显现的属性： ${info.address}`); // 不会报错， 因为其本身具有address属性

function printInfo(pfo: IPerson) {
  console.log(pfo.name);
}

printInfo(info);
printInfo({
  name: "悟律",
  age: 22,
  height: 1.78,
  // address: "广州"  // 当多余时 会报错， 无进行擦除
});

// 使用index 索引签名接收多余的属性, 不执行freshness 擦除
interface IPerson1 {
  name: string;
  age: number;
  height: number;
  [name: string]: string | number;
}

function printInfo1(pfo: IPerson1) {
  console.log(pfo.name);
  console.log(pfo.city);
  console.log(pfo.additionalInformation);
}

const info1 = {
  name: "whyT",
  age: 40,
  height: 1.75,
  city: "北京",
};

console.log(
  "%c [ 分割线 ]: ",
  "color: #bf2c9f; background: pink; font-size: 13px;",
  "分割线"
);
printInfo1(info1);
console.log(info1);
