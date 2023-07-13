
<script>
import { h } from 'vue';
export default {
  render() {
    return h("div", null, 
    [
      h("h2", null,"home"),
      // 传入插槽可以接收属性, 插槽可以default函数内可以接收对象， 作用域插槽
      this.$slots.default ? this.$slots.default({name: 'wulv'}) : h("span", null, "我是home中默认插槽")
    ]
    )
  }
}

</script>

<style scoped>
</style>