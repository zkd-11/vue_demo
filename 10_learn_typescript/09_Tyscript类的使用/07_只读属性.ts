export {};

class Person {
  // 只读属性可在构造器中进行赋值， 赋值后不可修改
  //  属性本身不进行修改， 如是对象类型， 可修改内部 不为只读属性的属性
  readonly name: string;
  age?: number;
  readonly friend?: Person

  constructor(name: string, friend?: Person) {
    this.name = name;
    this.friend = friend;
  }
}

const p = new Person("悟律", new Person("韩绝"));
console.log(p.name, p.friend);

// p.name ="无法赋值 报错" 
if(p.friend) {
  p.friend.age = 22;
}

