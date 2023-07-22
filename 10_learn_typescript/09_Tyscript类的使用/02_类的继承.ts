//  相同的抽取为同个类

class Person {
  name: string = ''; //定义属性时， 需要为其初始化， 可使用constructor或直接赋值
  age: number = 0

  eating() {
    console.log("eating");
  }
}

class Student extends Person {
  sno: number = 0;

  studying() {
    console.log("悟律冲");
  }
}

class Teacher extends Person {
  title: string = "";

  teaching() {
    console.log("韩剧冲");
  }
}

const s1 = new Student();
s1.name = "悟律";
s1.age = 22;
s1.studying();