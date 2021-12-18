import { createApp } from "vue";
import router from "/src/router";
import App from "../src/App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const app = createApp(App);
app.use(router);
app.mount("#app");