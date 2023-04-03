import '../dist/vuersatile-components.css'
import { AppInit } from '../dist/vuersatile-components.js'

import messages from './messages.json';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

AppInit(app, {
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    en: {
        messages // set locale messages
    }
});

app.use(createPinia())
app.use(router)

app.mount('#app')
