import { createApp } from 'vue';
import App from './App.vue';
import { storeKey, store } from './store';

// import './assets/main.css';

const app = createApp(App);

app.use(store, storeKey);

app.mount('#app');
