import DefaultTheme from 'vitepress/theme'
import appInit from '../../../lib/lib.js'

export default {
    ...DefaultTheme,
    enhanceApp (context) {
        DefaultTheme.enhanceApp(context)
        const { app } = context

        appInit(app)
    },
}