import { createApp } from 'vue'
//We import CreatePinia to be able to use it
import { createPinia } from "pinia";
import App from './App.vue'

import './assets/main.css'

const app = createApp(App);

app.use(createPinia());

// app.mount("#app");

createApp(App).mount('#app');
