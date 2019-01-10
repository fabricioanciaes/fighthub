import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "./assets/styles/global.scss";

import "../fa.config.js";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
