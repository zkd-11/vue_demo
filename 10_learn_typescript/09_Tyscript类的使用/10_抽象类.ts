//  抽象类 不实现方法， 由继承的子类实现
//  抽象类无法被实例化， 子类继承时需要实现抽象方法，如不实现需改为抽象类定义
export {};

abstract class Shape {
  abstract getArea(): number;
}

function makeArea(shape: Shape) {
  return shape.getArea();
}

class Rectangle extends Shape {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    super();
    this._width = width;
    this._height = height;
  }
   getArea() {
      return this._width * this._height; 
   }
} 

class Circle extends Shape { 
  private _r : number;
  constructor(r: number) {
    super();
    this._r = r;
  }
  getArea() {
    return this._r * this._r * 3.14;
  }
}
console.log(makeArea(new Rectangle(20, 30)));
console.log(makeArea(new Circle(30)));
// makeArea(new Shape()) 实例化无法被创建
