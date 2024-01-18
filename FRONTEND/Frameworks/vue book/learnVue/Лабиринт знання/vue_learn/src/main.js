import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './MyComponentVue'

const app = createApp(App);
app.component('my-component', MyComponent);
app.mount('#app');