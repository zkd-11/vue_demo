<template>
  <div>
      <about></about>
  </div>
</template>

<script>
import emitter from './utils/eventbus'
import About from './About.vue'
export default {
  created() {
    emitter.on("wulv", (info)=>{
      console.log(info);
    }),
      //监听所有事件 
    emitter.on("*", (type, info)=>{
      console.log("* listener: ",type, info);
    });
    
  },  
  
  data() {
    return {
    
    }
  },
  components: { 
    About
  },
  methods: {},
}
</script>

<style scoped>
</style>