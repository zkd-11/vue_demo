import dayjs from 'dayjs'

export default function(app){
  let formatString = "YYYY-MM-DD HH:mm:ss";

  app.directive("format-time", {
  // 内部是函数， 如果要将变量两个函数同时可使用 需要提前全局声明

    created(el, bindings){
      console.log(bindings);
      if (bindings.value) {
        formatString = bindings.value;
      }

    },
    mounted(el, bindings) {
      // 放入 created生命钩子 
      // console.log(bindings);
      // let formatString = bindings.value;
      // console.log(formatString);

      // if(!formatString) {
      //   formatString = "YYYY-MM-DDTHH:mm:ss"
      // }

      const textContent = el.textContent;
      // 获取为 字符串， 需转化为 数字
      let timeStamp = parseInt(textContent);
      if (textContent.length === 10) {
        timeStamp = timeStamp * 1000
      }
      el.textContent = dayjs(timeStamp).format(formatString)
    }   
  })
}