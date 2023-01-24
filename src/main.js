import {createPinia} from 'pinia'
import {createApp} from 'vue'
import App from './App.vue'

import './assets/main.css'
import router from "@/router"
import Pagination from 'v-pagination-3';

const app = createApp(App)
app.component("pagination", Pagination)

app.use(createPinia()).use(router).mount('#app')
