import { ref } from 'vue';

export default function(){
  const scrollX = ref(0);
  const scrollY = ref(0);
  
  document.addEventListener("scroll", ()=>{
    scrollX.value = parseInt(window.scrollX);
    scrollY.value = parseInt(window.scrollY);
  })

  return {
    scrollX,
    scrollY,
  }
}