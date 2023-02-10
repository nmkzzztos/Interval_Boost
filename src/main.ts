import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

createApp(App)
  .use(store)
  .use(router)
  .use(Quasar, {
    plugins: {},
  })
  .use(mdiVue, {
    icons: mdijs,
  })
  .mount("#app");
