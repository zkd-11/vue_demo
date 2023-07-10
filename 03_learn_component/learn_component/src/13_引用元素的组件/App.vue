<template>
    <div>
        <h2 ref="title">这是title文件</h2>
      <nav-bar ref="navBar">
          <template v-slot:nr >
              <strong>我是父元素传递进插槽的标签</strong>
          </template>
      </nav-bar>
        <button class="btn" @click="btnClick">获取元素</button>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  data() {
    return {
      parentData: '父组件的data信息'
    }
  },
  components: { 
    NavBar
  },
  methods: {
    btnClick () {
      console.log(this.$refs.title);
      console.log(this.$refs.navBar.message);
    }
  },
}
</script>

<style scoped>
  .btn {
    position: relative;
    display: block;
    margin: 40px 20px;
    float: left;
  }
</style>