import '../dist/style.css'
import '../dist/style.scss'
import { VuersatileInit } from '../dist/vuersatile-components.js'

import messages from './messages.json';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

VuersatileInit(app, {
    locale: 'en', // set locale
    messages: {
        en: messages // set locale messages
    }
});

app.use(createPinia())
app.use(router)

app.mount('#app')
