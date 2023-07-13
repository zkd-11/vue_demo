<template>
  <div class="app">
    <teleport to="#why">
        <h2>这里是使用teleport挂载到指定why块上</h2>
    </teleport>

    <teleport to="#why">
       <home></home>
    </teleport>

  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
import Home from './Home.vue'
export default {
  components: {
    Home,
  },
  mounted() {

    console.log(this);
    console.log(this.$name);
  },
  setup() {
    // setup 没有this指向
    const instance = getCurrentInstance();
    console.log("setup中访问全局属性：",instance.appContext.config.globalProperties.$name);

    return{

    }
  }
}
</script>

<style scoped>
</style>