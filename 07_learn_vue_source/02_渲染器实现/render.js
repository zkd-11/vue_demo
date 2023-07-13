const h = (tag, props,children) => {
  //  vnode-> 转化为JavaScript 对象

  return {
    tag,
    props,
    children
  }

}
  // 将虚拟dom挂载到页面上

const mount = (vnode, container) =>{
  // vnode -> element
  // 创建真实的原生， 并且在vnode保留el
  //  拷贝真实dom， 用于reactive系统进行比对

  const el = vnode.el = document.createElement(vnode.tag);

  // 2. 处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];

      if(key.startsWith("on")) {
        // 对事件监听判断
        el.addEventListener(key.slice(2).toLowerCase(), value)
      } else {
          el.setAttribute(key, value)
        }
      }
    }

  //  3. 处理children
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else {
      //  数组 子节点进行遍历
      vnode.children.forEach(item => {
        mount(item, el);
      })
    }
  }

  // 4 ， 将el 挂载到 container 上
  container.appendChild(el);
}
