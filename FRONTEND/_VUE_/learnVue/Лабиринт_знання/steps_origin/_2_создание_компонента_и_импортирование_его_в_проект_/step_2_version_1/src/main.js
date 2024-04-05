import { createApp } from "vue";
import App from "./App.vue";
import MyComponentVue1 from "./components/MyComponentVue1.vue";

const app = createApp(App);
app.component("my-component-vue1", MyComponentVue1);
app.mount("#app");

