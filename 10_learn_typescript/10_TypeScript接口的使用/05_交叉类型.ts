export {};

// 一种组合类型的方式: 联合类型
//  联合 满足其一
type WulvType = number | string;
type Direction = "left" | "right" | "up" | "down";

// 另一种 组合类型： 交叉类型

type WType = number | string;

interface ISwim {
  swimming: () => void;
}

interface IFly {
  flying: () => void;
}

type MyType1 = ISwim | IFly;
type MyType2 = ISwim & IFly;

const obj1: MyType1 = {
  flying() {},
  swimming() {},
};

const obj2: MyType2 = {
  flying() {
    console.log("交叉类型- fly");
  },
  swimming() {
    console.log("交叉类型- swim");
  },
};
