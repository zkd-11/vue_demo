export {};

class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  //  访问器 setter/ getter
  //  直接访问， 不需要通过方法 类似响应式 追踪
  //  定义了一个属性 - 自执行方法
  set name(newName) {
    this._name = newName;
  }
  
  // getter
  get name() {
    return this._name;
  }
}

const p = new Person("韩绝");
p.name = "悟律";
console.log(p.name);
