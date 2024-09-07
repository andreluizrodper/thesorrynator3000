import { createApp } from "vue";
import "@/assets/index.css";
import App from "@/app.vue";
import store from "@/store";

const app = createApp(App);
app.use(store);
app.mount("#app");
