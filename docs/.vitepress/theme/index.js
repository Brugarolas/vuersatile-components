import DefaultTheme from 'vitepress/theme'
import { VuersatileInit } from '../../../lib/index.js'

import messages from './messages.json';

export default {
    ...DefaultTheme,
    enhanceApp (context) {
        DefaultTheme.enhanceApp(context)
        const { app } = context

        VuersatileInit(app, {
            locale: 'en', // set locale
            messages: {
                en: messages // set locale messages
            }
        })
    },
}