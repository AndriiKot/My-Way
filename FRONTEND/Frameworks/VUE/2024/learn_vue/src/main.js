import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './MyComponent.vue'
import MySecondComponent from './MySecondComponent.vue'

const app = createApp(App);
app.component('my-component', MyComponent);
app.component('my-second-component', MySecondComponent);
app.mount('#app');
