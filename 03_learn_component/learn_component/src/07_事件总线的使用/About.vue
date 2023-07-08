<template>
<div>
  <button @click="btnClick">按钮点击</button>
</div>
</template>

<script>
import emitter from './utils/eventbus.js'
export default {
  data() {
    return { 
    }
  },
  components: { 

  },
  methods: {
    btnClick() {
      console.log('按钮被点击');
      emitter.emit("wulv",{name: "悟律", age: 22});
      emitter.emit("koby",{name: "koby", age: 22});
    }
  },
}
</script>

<style scoped>
</style>