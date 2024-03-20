import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './MyComponent.vue'
import MySecondComponentVersion1 from './MySecondComponentVersion1.vue'
import MySecondComponentVersion2 from './MySecondComponentVersion2.vue'
import MyThirdComponentVersion1 from './MyThirdComponentVersion1.vue'
import MyThirdComponentVersion2 from './MyThirdComponentVersion2.vue'
import MyFourthComponentVersion1 from './MyFourthComponentVersion1.vue'
import MyFourthComponentVersion2 from './MyFourthComponentVersion2.vue'
import MyFifthComponentVersion1 from './MyFifthComponentVersion1.vue'

const app = createApp(App);
app.component('my-component', MyComponent);
app.component('my-second-component-version-1', MySecondComponentVersion1);
app.component('my-second-component-version-2', MySecondComponentVersion2);
app.component('my-third-component-version-1', MyThirdComponentVersion1);
app.component('my-third-component-version-2', MyThirdComponentVersion2);
app.component('my-fourth-component-version-1', MyFourthComponentVersion1);
app.component('my-fourth-component-version-2', MyFourthComponentVersion2);
app.component('my-fifth-component-version-1', MyFifthComponentVersion1);
app.mount('#app');
