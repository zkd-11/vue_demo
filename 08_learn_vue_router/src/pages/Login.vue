<template>
  <div class="loginBtn">
    <button @click="upToken">登录</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();

     const upToken = ()=> {
      window.localStorage.setItem("token","悟律");

      router.push({
        path: "/home"
      })
    }


    return{
      upToken,
    }
  }
}
</script>

<style scoped>
  .loginBtn {
    margin: 40px 0 0 -30px;
    text-align: center;
  }
</style>