import {ref, watch } from 'vue';

export default function(title = "默认标题"){
  const titleRef = ref(title);

  // watch 具有惰性， 初次赋值并不会立即执行，需要设置immediate
  watch(titleRef, (newValue)=>{
    document.title = newValue;
  },
  {
    immediate: true
  }
  )

  return titleRef;
}