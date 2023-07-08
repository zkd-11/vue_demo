<template>
  <div>
    <h2>开头</h2> 
       <slot>
        <!-- 不插入值时，不会被渲染所以能默认显示 -->
        <i>我的默认的i元素</i>
       </slot> 
    <h2>结尾</h2>  
  </div>
</template>

<script>

export default {
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
</style>