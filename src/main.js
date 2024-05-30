import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import 'nprogress/nprogress.css'
//create a global (reactive) object to share across multiple components
const GStore = reactive({ flashMessage: "" });

const app = createApp(App);

app.use(router).provide("GStore", GStore);

app.mount("#app");