export {};

// 类的多态: 指- 父类引用子类对象

class Animal {
  action() {
    console.log('animal actoin');    
  }
}

class Dog extends Animal {
  action() {
    console.log("dog running!!");
  }
}

class Fish extends Animal {
  action() {
    console.log('fish running!');
  }
}
// 多态目的是为了写出更加具备通用的代码
function makeActions(animals: Animal[]) {
  animals.forEach(animal =>{
    animal.action()
  })
}

makeActions([new Dog(), new Fish()]);

