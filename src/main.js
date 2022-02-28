import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SuiVue from "../semantic/dist/semantic.min";

import "../semantic/dist/semantic.min.css";
// import style (>= Semantic 6.x)
import "../public/style.css";

createApp(App).use(store).use(router).use(SuiVue).mount("#app");
