<template>
  <!-- 可以接收父组件所传递的name -->
  <div class="nav-bar">
    <div class="left">
       <slot name="left"> </slot> 
    </div>       
    <div class="center">
       <slot name="center"> </slot> 
    </div>       
    <div class="right">
       <slot name="right"> </slot> 
    </div>       
    <div>
       <slot :name='name'> </slot> 
    </div>       
  </div>
</template>

<script>

export default {
  props: {
    name: String
  },
  data() {
    return {
    
    }
  },
  components: { 

  },
  methods: {},
}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    font-size: 10px;
    height: 52px;
    line-height: 52px;
    text-align: center;
  }
  .left, .right{
    width: 120px;
  }
  .center {
    /* position: relative; */
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>