<template>
    <h2>这是home组件</h2>
    <div>
      <strong ref="me">{{ message }}</strong>
      <button @click="updata">更新标签</button>
    </div>
</template>

<script>

export default {
  data() {
    return {
      message: 'hello'
    }
  },
  components: { 
  },
  
  beforeCreate(){
    console.log('组件创建前');
  },
  created (){
    console.log('组件已经创建');
  },
  beforeMount (){
    console.log('组件挂载前');
  },
  beforeUpdate (){
    console.log(this.$refs.me.innerText);
    console.log('组件更新前');
  },
  updated (){
    console.log(this.$refs.me.innerText);
    console.log('组件信息更新后');
  },
  mounted (){
    console.log('组件挂载ing');
  },
  beforeUnmount (){
    console.log('组件取消挂载前: beforeUnmount');
  },
  unmounted (){
    console.log('组件取消挂载');
  },

  methods: {
    updata () {
      this.message = '韩绝冲冲'
    }
  },

}
</script>

<style scoped>
</style>