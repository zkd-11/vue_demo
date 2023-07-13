
<script>
import { ref, h } from 'vue';
import Home from './Home.vue'

export default {
  render() {
    return h(Home, null, {
      // 插槽对应的一个函数， 箭头函数指向为插入子组件的标签
      default: props => h("span", null, `app传入到home组件的内容: ${props.name}`)
    });
  }
}
</script>

<style scoped>
</style>