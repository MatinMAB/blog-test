import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SuiVue from 'semantic-ui-vue';

import 'semantic-ui-css/semantic.min.css';
import "../public/style.css"

createApp(App).use(store).use(router).use(SuiVue).mount('#app')
