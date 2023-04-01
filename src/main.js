import appInit from '@/lib.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

appInit(app);

app.use(createPinia())
app.use(router)

app.mount('#app')
