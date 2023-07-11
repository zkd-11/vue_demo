<template>
  <div>
    home组件
    {{ message }}
  </div>

</template>

<script>

export default {
 props: {
  message: {
    type: String,
    required: true
  }
 },
//  setup 无this指向
  // setup(props, context){
  // 可以使用解构函数
  setup(props, {attrs, slots, emit}){
    console.log(props.message);
    console.log(attrs.id);
 }

}
</script>

<style scoped>
</style>