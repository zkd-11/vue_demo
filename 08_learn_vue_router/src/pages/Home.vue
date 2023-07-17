<template>
   <div>
    <h2>Home组件</h2>
    <ul>
      <li>home..</li>
      <li>home..</li>
      <li>home..</li>
    </ul>
    <router-link  class="link"  to="/home/message">消息组件</router-link>
    <router-link  class="link" to="/home/shops">商品组件</router-link>
    <router-link  class="link" to="/home/moment">动态</router-link>
    <router-view/> 
  </div>


</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
 .link {
    text-decoration:none;
    color: #333;
    margin-right: 10px;
    margin-left: 10px;
    
  }
  .router-link-active {
    color: rgb(165, 126, 78)
  }
</style>