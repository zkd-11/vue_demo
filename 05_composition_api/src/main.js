import { createApp } from 'vue';
// import App from './01_mixin和extends/App.vue';
// import App from './02_compositionAPI基础/App.vue';

// import App from './03_RefAPI的补充/App.vue';

// import App from './04_computed和watch/App.vue';
// import App from './05_生命周期钩子/App.vue';
// import App from './06_Provide和inject/App.vue';
// import App from './07_compositionAPI练习/App.vue';
import App from './08_setup的顶层编写/App.vue';

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
