<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
    <h2> 当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
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

    let counter = 100;
    // 局部函数
    const increment = ()=>{
      counter ++;
      console.log(counter);
    }

    return{
      title: 'hello home',
      counter,
      increment
    }
 }

}
</script>

<style scoped>
</style>