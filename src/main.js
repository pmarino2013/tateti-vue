import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
// import "./style.css";
import App from "./App.vue";

createApp(App).use(VueSweetalert2).mount("#app");
