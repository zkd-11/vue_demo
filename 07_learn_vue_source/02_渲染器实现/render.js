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
      //  数组 子节点进行 递归遍历
      vnode.children.forEach(item => {
        mount(item, el);
      })
    }
  }

  // 4 ， 将el 挂载到 container 上
  console.log(el);
  container.appendChild(el);
}

const patch = (n1, n2) =>{
  if (n1.tag !== n2.tag) {
    //  el为虚拟节点的属性， 真实节点的备份
    const n1ElParent = n1.el.parentElement;
    n1ElParent.removeChild(n1.el);
    mount(n2, n1ElParent);
  } else {
    //  1. 取出 el对象， 并储存在n2, 修改el相当于修改n1, 为引用类型
    const el = n2.el = n1.el;

    // 处理props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};
    for (const key in newProps){
        const oldValue = oldProps[key];
        const newValue = newProps[key];

        if(newValue !== oldValue){
          if (key.startsWith("on")) {
            el.addEventListener(key.slice(2).toLowerCase(), newValue)
          } else {
            el.setAttribute(key, newValue);
          }
        }
      }

    // 处理children
    const oldChildren = n1.children || [];
    const newChildren = n2.children || [];

    if(typeof newChildren === "string"){
      // 边界情况 判断
      if(typeof oldChildren === "string") {
        if(newChildren !== oldChildren){
           el.textContent = newChildren;
          //  这里不需要加else, 因为不变时不需要对原值进行赋值处理
        } 
      }  else {  //当oldChildren是对象时， 直接覆盖
          el.innerHTML = newChildren;
        }
      } 
      
      else {   // 当newChildren为数组类型时
        if (typeof oldChildren === "string") {
          // 将原引用dom元素， 内容清空， 再将子节点进行挂载
          el.innerHTML = "";
          newChildren.forEach(item =>{
            mount(item, el)
          })
        } else {
          // oldChildren 1 2 3 5 8
          //  newChildren 1 5 6 
          const commonLength = Math.min(oldChildren.length, newChildren.length);
          for (let i = 0; i < commonLength; i++){
            // 用递归对 子节点进行patch比较
            patch(oldChildren[i], newChildren[i]);
          }

          // 当进行比较完后， 剩下两种情况 ->  剩下节点的情况 new > old长度

          if(newChildren.length > oldChildren.length) {
            // 新子节点个数较长时，   slice分割后  剩余节点 依次挂载 
            newChildren.slice(oldChildren.length).forEach(item =>{
              mount(item, el);
            })
          } 
          
          //  新子节点 较少时， 将多余 旧子节点 进行去除
          if(newChildren.length < oldChildren.length) {
            oldChildren.slice(commonLength).forEach(item=>{
              //  el为当前item节点的父节点， item虚拟子节点,  .el表示所映射的真实元素节点 
              el.removeChild(item.el)
            })
          }
        }
      } 
      
    }


} 