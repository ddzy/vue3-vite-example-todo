import { createApp } from 'vue';

import App from './App.vue';
import api from '@/api/api';
import router from '@/router/index';

const app = createApp(App);

app.config.globalProperties.$api = api;

app.use(router);
app.mount('#app');
