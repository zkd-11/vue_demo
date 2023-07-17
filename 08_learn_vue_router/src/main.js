import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.mount("#app");

// create(App).use(router).mount("#app"); 可使用此行代码， 因为每个函数都会返回一个vue实例