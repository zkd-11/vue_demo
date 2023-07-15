class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  addEffect(effect) {
    this.subscribers.add(effect);
  }

  notify() {
    this.subscribers.forEach(effect => {
      effect();
    })
  }
}


const info = { counter:100 };

const dep = new Dep();
function doubleCounter() {
  console.log(info.counter * 2);
}

function powerComputer() {
  console.log(info.counter * info.counter);
}

dep.addEffect(doubleCounter);
dep.addEffect(powerComputer);

info.counter++;
dep.notify();


