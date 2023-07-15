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
const info = { counter:100 };

function watchEffect(effect) {
  activeEffect = effect;
  dep.depend();
  activeEffect = null;
  // watcheffect 默认执行一次
  effect();
}

const dep = new Dep();
watchEffect(
  function () {
  console.log(info.counter * 2);
}
) 

watchEffect(
  function () {
    console.log(info.counter * info.counter);
  }
) 




info.counter++;
dep.notify();


