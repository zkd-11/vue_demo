function createApp(rootComponent) {
  return {
    mount(selector) {
      const container = document.querySelector(selector);
      let isMounted = false;
      let oldVNode = null;

      // watchEffect  为判断组件是否发生变化
      watchEffect(function() {
        if (!isMounted) {
          // 初始挂载
          oldVNode = rootComponent.render();
          // 此挂载为 render.js 中的挂载
          //  将组件的 render执行后 虚拟节点进行挂载到id= app 块上
          mount(oldVNode, container);
          isMounted = true;
        } else {
          // 挂载后  如二次挂载， 则对组件进行一个 patch比较
          //  最节约性能 去进行重新挂载， patch =》 合保留， 异去除
          const newVNode = rootComponent.render();
          patch(oldVNode, newVNode);
          // oldVnode 为当前挂载节点， 较于下个挂载节点 称为old -
          oldVNode = newVNode;
        }
      })
    }
  }
}