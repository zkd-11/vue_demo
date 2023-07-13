<template>
  <div>
    <input type="text" ref="input">
  </div>
</template>

<script>
import { ref, onMounted } from "vue"
export default {
  setup() {
      const input = ref(null);

      onMounted(()=>{
        input.value.focus();
        console.log('11');
      })

    return{
      input,
    }
  }
}
</script>

<style scoped>
</style>