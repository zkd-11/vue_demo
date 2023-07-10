<template>
  <h3>子组件message的信息为： {{ message }}</h3>

  <div>
   <slot name="nr" > </slot> 
</div>
  <button class="btn" @click="getParent">获取父元素按钮</button> 
</template>

<script>

export default {
  data() {
    return {
    message: '韩绝冲冲'
    }
  },
  components: { 

  },
  methods: {
    getParent () {
      console.log(this.$parent.parentData);
      console.log(this.$root.parentData);
    }
  },
}
</script>

<style scoped>
  .btn {
    position: relative;
    display: block;
    margin: 40px 20px;
    float: right;
  }
  .slot {
    position: relative;
    display: block;
    width: 100%;
  }
</style>