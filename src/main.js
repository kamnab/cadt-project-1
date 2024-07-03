import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Header from "./components/home/Header.vue";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("Header", Header);

app.mount("#app");
