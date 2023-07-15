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

// vue2 对raw进行劫持- 绑定依赖集- 内部去执行depsMap
function reactive(raw) {
  // 为传入的对象 绑定整体依赖集 
  // 再对 key值 绑定 对应key值依赖 
  Object.keys(raw).forEach(key => {
    const dep = getDep(raw, key);
    let value = raw[key];

    Object.defineProperty(raw, key, {
      // 理解为 自定义时 就一直实时监测- 一直存在作用域 ， 有this指向
      //  后面调用info.counter 都是重新指向这片作用域 
      get() {
        dep.depend();
        return value;
      },
      set(newValue) {
        if (value !== newValue) {
          value = newValue;
          dep.notify();
        }
      }
    })
  })

  return raw;
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







