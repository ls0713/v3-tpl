import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'

import api from '@/service/index'

const APP_INSTANCE = createApp(App)
APP_INSTANCE.config.globalProperties.$api = api
APP_INSTANCE.use(router).mount('#app')
