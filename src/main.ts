import { createApp } from 'vue'
import '@/assets/style/index.scss'
import './index.css'

import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import '@/assets/style/element/index.scss'

import { createPinia } from 'pinia'

import { success, warning, error, info } from '@/components/Message'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

const APP_INSTANCE = createApp(App)

APP_INSTANCE.config.globalProperties.$success = success
APP_INSTANCE.config.globalProperties.$warning = warning
APP_INSTANCE.config.globalProperties.$error = error
APP_INSTANCE.config.globalProperties.$info = info

APP_INSTANCE.use(pinia)

APP_INSTANCE.use(router).mount('#app')

