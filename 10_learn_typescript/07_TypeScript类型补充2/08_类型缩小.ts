//  1. typeOf类型缩小
export {};

type IDType = number | string
function printID(id: IDType) {
  if(typeof id === 'string') {
    console.log(id.toUpperCase);
  } else {
    console.log(id);
  }
}

// 2. 平等的类型缩小 === !==  / switch 逻辑判断
type Direction = 'left' | 'right' | 'up' | 'down';

function printDirection(direction: Direction) {
  if (direction === 'left') {
    console.log('left');
  } else if (direction === 'right') {} 

  //  平等的缩小 二   
  switch (direction) {
    case 'left' : 
      console.log(direction);
      break;
    case "right":
      break;
  }
}

//  3. instanceof  判断参数类型是否为 类型中的实例化
function printTime (time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString);
  } else {
    console.log(time);
  }
}

//  4. in
//  别名模式， 为对象起别名  对象抽取  -- 变量表示

//  type 可用于规范化 
//  当 定义某个数据时， 参数声明为此类型 时
//      它的创造将遵循 内部规则
type Fish = {
  swimming: ()=> void;
}

type Dog = {
  running: ()=> void;
}

//  判断动物类型 - 是否属于某种两种对象的一种
// -  内部是否具备某 特定对线所具备的函数
function walk(animal: Fish | Dog) {
  // in 为判断内部是否具备某函数式
  if('swimming' in animal){
    animal.swimming();
  } else {
    animal.running();
  }
}

let fish: Fish = {
  swimming() {
    console.log('鱼游');
  }
}
walk(fish);

class Student {
  studying() {
    console.log('悟律冲冲！');
  }
}

class Teacher {
  teaching() {}
}

//  判断参数 是否 声明中类的实例化
function work(p: Student | Teacher) {
  if(p instanceof Student) {
    p.studying();
  } else {
    p.teaching();
  }
}

let s1 = new Student();
work(s1);

