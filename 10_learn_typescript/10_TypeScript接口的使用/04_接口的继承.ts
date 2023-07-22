// 接口继承 -  接口可继承其它接口
export {};

interface ISwim {
  swimming: ()=>void;
}

interface IFly {
  flying: ()=>void;
}

interface IAll extends ISwim, IFly{

}

const actions:IAll = {
  swimming() {
    console.log("接口继承之游行为！");   
  },
  flying() {
    console.log('接口继承之飞行为');
  }
}

// 因为上述两函数无返回值， 直接执行即可， 不需要打印
actions.flying();
actions.swimming();

