import { createApp } from 'vue'
import App from './App.vue'
import MyFirstComponentVue from './components/MyFirstComponentVue.vue'

const app = createApp(App)
app.component('my-first-component-vue', MyFirstComponentVue)
app.mount('#app')
