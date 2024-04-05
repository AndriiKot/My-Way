import { createApp } from 'vue'
import App from './App.vue'
import MyFirstComponent from './MyFirstComponent.vue'

const app = createApp(App);
app.component('my-first-component', MyFirstComponent);
app.mount('#app')

