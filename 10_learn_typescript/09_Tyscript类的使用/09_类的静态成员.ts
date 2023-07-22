export {};

class Student {
  static time: string = "20:00"

  static daily() {
    console.log("去学习~");
  }
}

// 静态属性 ， 可直接通过类访问的属性
console.log(Student.time);
Student.daily();
