<template>
  <div>
    <h2>hello-world</h2>
    <h2>{{ message }}</h2>
    <button @click="emitEvent">发射事件</button>
  </div>
</template>

<script setup>
  import { ref, defineProps, defineEmit } from 'vue';
  const props = defineProps({
    message: {
      type: String,
      default: '韩绝'
    }
  })

  // 声明要触发的事件
  const emit = defineEmit(["increment", "decrement"]);

  const emitEvent = () =>{
    emit("increment", "1000")
  }

</script>

<style scoped>
</style>