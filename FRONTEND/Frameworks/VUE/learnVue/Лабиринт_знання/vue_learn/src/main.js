import { createApp } from 'vue'
import App from './App.vue'
import MyComponentVue from './MyComponentVue'

const app = createApp(App);
app.component('my-component', MyComponentVue);
app.mount('#app');
