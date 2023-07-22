//  protected 在类内部和子类中访问
export {};

class Person {
  protected name: string = "韩绝";
}

class Student extends Person {
  getName() {
    return this.name;
  }
}

const s1 = new Student();
const pName = s1.getName();
console.log(pName);
