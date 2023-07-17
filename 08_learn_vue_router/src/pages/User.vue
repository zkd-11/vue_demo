<template>
  <div>
    <h2>User: {{ $route.params.username }} -- {{$route.params.id }}</h2>
  </div>
</template>

<script>
// 此方法用于解决 - setup函数内无this指向
import { useRoute } from 'vue-router';
export default {
  name: 'User',

  created() {
    console.log('creatd函数执行');
    console.log(this.$route);
    console.log(this.$route.params.username);
    console.log(this.$route.params.id);
  },

  setup() {
    // 通过useRoute 取到 $route实例
    const route = useRoute();
    console.log('setup函数先于created执行');
    console.log(route.params.username);
    console.log(route.params.id);
  }
}
</script>

<style scoped>
</style>