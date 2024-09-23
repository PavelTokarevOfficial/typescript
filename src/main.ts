import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import formaterObj from './plugins/formaterObj.ts';

const app = createApp(App);
app.use(formaterObj);
app.mount('#app');