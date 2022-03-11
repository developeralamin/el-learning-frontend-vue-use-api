import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router,axios).mount('#app')
