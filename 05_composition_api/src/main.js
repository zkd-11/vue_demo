import { createApp } from 'vue';
// import App from './01_mixin和extends/App.vue';
import App from './02_compositionAPI基础/App.vue';

// createApp(App).mount("#app");

// 全局生命周期混入
const app = createApp(App);

// app.mixin({
//   data() {
//     return {}
//   },
//   methods: {

//   },
//   created() {
//     console.log('全局的created生命周期');
//   }
// })

app.mount('#app')