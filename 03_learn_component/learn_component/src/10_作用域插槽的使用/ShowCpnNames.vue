<template>
  <div>
    <template v-for="(item, index) in names" :key="item">
      <slot :item="item" :index="index"> </slot>
       
    </template>
  </div>
</template>

<script>
export default {
  props:{
    names:{
      type: Array,
      default: ()=> {
        return [];
      }
    }
  },
  data() {
    return {
      message: '子组件的信息'
    }
  },
  components: { 
  },
  methods: {},
}
</script>

<style scoped>
</style>