class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  depend() {
    if( activeEffect ) {
      this.subscribers.add( activeEffect );
    } 
  }
  notify() {
    this.subscribers.forEach(effect => {
      effect();
    })
  }
}

let activeEffect = null;

function watchEffect(effect) {
  activeEffect = effect;
  //  watchEffect 函数执行， 先赋值activeEffect, 再进行执行函数
  // 函数的执行时，获取infor.counter值时
  //  触发infor.counter依赖集的 get方法，  已经将函数 添加到依赖集中
  effect();
  activeEffect = null;
  // watcheffect 默认执行一次
}


//  Map({key: value}) : key字符串
//  WeakMap({key(对象)： value任意值})
//  在此案例中， weal map，根据key值 获取对应的  map依赖集  1对1 



const targetMap = new WeakMap();
function getDep(target, key) {
  // 根据传入的对象target 取出对应的map对象
  let depsMap = targetMap.get(target);
  if( !depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  // 取出对应的dep对象， counter 对应 couter依赖集 
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }

  return dep;
}

// vue3 对 raw进行数据劫持 d
//  代理模式， 直接修改对象
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key);
      dep.depend();
      return target[key];
    },
    //  相较于vue2实现， 在此处即可实现新增属性添加同时， 并为其添加依赖
    set(target, key, newValue) {
      const dep = getDep(target, key);
      target[key] = newValue;
      dep.notify();
    }
  })
}




const info = reactive( {counter: 100, name: "悟律"});


watchEffect(
  function () {
  console.log("counter依赖集",info.counter * 2);
}
) 

watchEffect(
  function () {
    console.log("counter依赖集",info.counter * info.counter);
  }
) 
watchEffect(
  function () {
    console.log("name依赖集",info.name);
  }
) 


info.counter++;







