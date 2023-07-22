export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log("父类e方法");
  }
}

class Student extends Person {
  sno: number;
  constructor(name: string, age: number, sno: number) {
  //   使用this前， 需要先使用super方法
    super(name, age); //调用父类的构造方法
    this.sno = sno;
  }
  // 重写
  eating() {
    super.eating();
    console.log("子类e");
  }
  studying() {
    console.log(`${this.sno}号  ${this.name} 学习了 ${this.age}年`);  
  }
}

const s1 = new Student("悟律", 22, 26);
s1.eating();
s1.studying();
