export {};

class Person {
  name: string = "123";
  eating() {
  }
}

// 类注解 - 
const p = new Person();

const p1: Person = {
  name: "悟律",
  eating(){
    console.log(11); //能对方法进行重写
  },
// 类型字面量 仅能赋值原有属性  完全等于
}

function printPerson(p: Person) {
  console.log(p.name);
}

printPerson(new Person());
printPerson({name: "韩绝", eating(){ console.log("韩绝冲冲");
}})


