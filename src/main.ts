import { createApp } from 'vue';
import App from './App.vue';

import api from '@/api/api';

const app = createApp(App);

app.config.globalProperties.$api = api;

app.mount('#app');
