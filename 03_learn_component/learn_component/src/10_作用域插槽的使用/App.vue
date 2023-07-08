<template>
  <div>
      <!-- 编译作用域 -->
      <child-cpn>
        <!-- <button>{{ message }}</button> -->
      </child-cpn>
 
    <show-cpn-names :names="names">
      <template v-slot="slotProps">
          <button>{{ slotProps.item }}--{{ slotProps.index }}</button>
      </template>
    </show-cpn-names>
 </div>
</template>

<script>
import ChildCpn from './ChildCpn.vue';
import ShowCpnNames from './ShowCpnNames.vue'
export default {
  data() {
    return {
      names: [ '孟浩', '韩绝', '悟律']
    }
  },
  components: { 
    ChildCpn,
    ShowCpnNames
  },
  methods: {},
}
</script>

<style scoped>
</style>