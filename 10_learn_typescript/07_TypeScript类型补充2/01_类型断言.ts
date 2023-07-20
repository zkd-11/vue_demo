export {};

// 类型断言- 抽象具体化， 更具体的 ，给出推导值

const el = document.getElementById("wulv") as HTMLImageElement;
el.src = "url地址， 自动推导报错， 因为推出htmlELement类型，不具备src"

class Person {

}

class Student extends Person {
  saying() {

  }
}

 function sayHello(p: Person) {
  // 断言， 声明此对象为 具体的学生类， 可使用saying
  //  学生的父类为person
  (p as Student).saying;
 }

 const stu = new Student();
 sayHello(stu);

// 3. 了解 as any / unknown
//  绕过编译器， 不建议使用， 容易造成类型混乱

const message = "hello";
//  将变量 二次转换 从而绕过编辑器
const num: number = (message as any) as number;

