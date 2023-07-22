export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(this.name + "eating" ); 
  }
}

const p1 = new Person("悟律", 22);
console.log(`${p1.name} ${p1.age} ${p1.eating()}`);

