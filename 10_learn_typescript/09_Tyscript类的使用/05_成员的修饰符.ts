export {};

class Person {
  private name: string = "";
  //  为社么使用 private， 更安全 只能在内部使用， 外界无法访问

  getName() {
    return this.name;
  }

  setName(newName: string) {
    this.name = newName;
  }
}

const p = new Person();
console.log(p.getName());
p.setName("悟律");
console.log(p.getName());

