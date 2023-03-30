import appInit from '@/lib.js'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const i18n = createI18n()

appInit(app);

app.use(i18n);
app.use(createPinia())
app.use(router)

app.mount('#app')
