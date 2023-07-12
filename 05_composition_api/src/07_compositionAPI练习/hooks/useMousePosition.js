import { ref } from 'vue';

export default function(){
  const mouseX = ref(0);
  const mouseY = ref(0);
  
  window.addEventListener("mousemove", (event)=>{
    mouseX.value = parseInt(event.pageX);
    mouseY.value = parseInt(event.pageY);
  })

  return {
    mouseX,
    mouseY,
  }
}