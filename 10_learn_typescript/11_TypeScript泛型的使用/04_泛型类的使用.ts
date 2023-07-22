export {};

class Point<T> {
  x: T;
  y: T;
  z: T;

  constructor(x: T, y: T, z: T) {
    this.x = x; 
    this.y = y;
    this.z = z;
  }
  
}

// 自动推导
const p1 = new Point("1.22", "2.33", "3.33");
const p2 = new Point<number>(1, 2, 3);

//  类型提前声明， 限制赋值
const p3: Point<string> = new Point("1.22", "2.33", "3.33");


// 数组赋值
const names1: string[] = ["a","n"];
const names2: Array<string> = ["a","b"] //不建议使用， 容易起冲突 - react, jsx, 因为识别 <>

