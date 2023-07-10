<template>
  <div @click="divClick">
    这是Home组件 {{ name }} -- {{ age }}
  </div>
</template>

<script>

export default {
  props: {
    name:{
      type: String,
      default: ''
    },
    // 
    age:{
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    }
  },
  components: { 

  },
  emits: ['pageClick'],
  methods: {
    divClick() {
      this.$emit('pageClick')
    }
  },
}
</script>

<style scoped>
</style>

