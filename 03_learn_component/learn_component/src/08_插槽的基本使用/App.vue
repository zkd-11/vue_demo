<template>
  <div>
    <my-slot-cpn>
      <my-button></my-button>
    </my-slot-cpn>

    <my-slot-cpn>
    </my-slot-cpn>
   
    <my-slot-cpn>
      <h3>插槽全部插入</h3>
      <h3>全部插入, 父组件全部插入，若要一对一， 需要用具名插槽</h3>
    </my-slot-cpn>
  </div>
</template>

<script>
import MySlotCpn from './MySlotCpn'
import MyButton from './MyButton'
export default {
  data() {
    return {
    
    }
  },
  components: { 
    MySlotCpn,
    MyButton
  },
  methods: {},
}
</script>

<style scoped>
</style>