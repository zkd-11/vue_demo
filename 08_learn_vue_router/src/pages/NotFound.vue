<template>
  <div>
    <h2>Page Not Found</h2>
    <p>您打开的路径页面不存在，请确认您的路径是否正确~</p>
    <h4>错误路径： {{ $route.params.pathMatch }}</h4>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
  name: 'NotFound',

  setup() {
    const route = useRoute();
    console.log(route);
    console.log(route.params.pathMatch);
  }
  
}
</script>

<style scoped>
</style>