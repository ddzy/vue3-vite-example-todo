import { createApp } from 'vue';
import App from './App.vue';

import * as api from '@/api/api';

const app = createApp(App);

app.config.globalProperties['$api'] = api;

app.mount('#app');
