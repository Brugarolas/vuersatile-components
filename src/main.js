import AppInit from '@/lib.js'
// import AppInit from './vuersatile-components.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

AppInit(app);

app.use(createPinia())
app.use(router)

app.mount('#app')
