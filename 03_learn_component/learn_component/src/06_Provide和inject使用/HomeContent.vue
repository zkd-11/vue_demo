<template>
  <div>
    HomeContent: {{name}} - {{age}} - {{length}}
  </div>
</template>

<script>
  export default {
  //   setup() {
  //   // 使用 inject 接收父组件提供的属性
  //   const name = inject('name');
  //   const age = inject('age');
  //   const length = inject('length');
  //   return {
  //     name,
  //     age,
  //     length,
  //   };
  // },
  inject: ['name', 'age', 'length']
  }
</script>

<style scoped>

</style>