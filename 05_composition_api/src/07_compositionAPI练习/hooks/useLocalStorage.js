import { ref, watch } from 'vue';

export default function(key, value){
  const data =ref(value);

  // 一个参数时， 取值， 两个参数存值
  if (value){
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    data.value = JSON.parse(window.localStorage.getItem(key));
  }

  // 为什么重置后的localStorage无效， 因为源代码刷新后重新赋值一次
  // 不理解 为什么能对应到key值
  watch(data, (newValue, oldValue)=> {
    console.log(data);
    console.log(`${oldValue}- 原键值已被修改为-  ${newValue}`);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  },{
    immediate: true,
  })

  return data;
}