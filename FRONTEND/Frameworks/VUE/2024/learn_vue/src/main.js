import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './MyComponent.vue'
import MySecondComponent from './MySecondComponent.vue'
import MyThirdComponentVersion1 from './MyThirdComponentVersion1.vue'
import MyThirdComponentVersion2 from './MyThirdComponentVersion2.vue'

const app = createApp(App);
app.component('my-component', MyComponent);
app.component('my-second-component', MySecondComponent);
app.component('my-third-component-version-1', MyThirdComponentVersion1);
app.component('my-third-component-version-2', MyThirdComponentVersion2);
app.mount('#app');
