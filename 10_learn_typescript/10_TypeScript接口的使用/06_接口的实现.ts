//  类： 单继承， 只能继承一个父类， 类能实现多个接口

interface ISwim {
  swimming: ()=> void;
}

interface IEat {
  eating: ()=> void;
}

// 类实现接口
class Animal {

}

//  类能实现多接口
class Fish extends Animal implements ISwim, IEat {
  name: string  = 'fish';
  swimming() {
    console.log("鱼类-- 游");
    
  }
  eating() {
    console.log('鱼类-- 吃');
  }  
}

class Person implements ISwim {
  swimming() {
    console.log("悟律 自由泳 冲！");
  }
}

// 编写公共的API ： 面向接口编程
function swimAction(swimable: ISwim) {
  swimable.swimming();
}

// 实现过 ISwim 的类都可传入
swimAction(new Fish());
swimAction(new Person()); 

swimAction({ swimming() {
  console.log("手动生成类实现-- ♥💓🐟冲！");
},
})