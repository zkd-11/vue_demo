<template>
  <div id="app">
    <Header></Header>  
    <main-product-list></main-product-list>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header';
import MainProductList from './MainProductList';
import Footer from './Footer.vue';
export default {
  data() {
    return {
      title: 'hello world',
    }
  },
  components: { 
    Header,
    MainProductList,
    Footer, 
  },
  methods() {},
}
</script>

<style scoped>
  h2 {
    color: red;
  }
</style>