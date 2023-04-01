import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en",
  title: "Vuersatile Components",
  description: "A Vue 3 component library with a CSS framework integrated",

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/getting-started' },
      { text: 'Component library', link: '/component-library' },
      { text: 'SCSS framework', link: '/scss-framework' }
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          {
            text: 'Form',
            items: [
              { text: 'Checkbox', link: '/components/form/checkbox' },
              { text: 'Form', link: '/components/form/form' }
            ]
          },
          {
            text: 'Info',
            items: [
              { text: 'Card', link: '/components/info/card' }
            ]
          }
        ]
      },
      {
        text: 'Mixins',
        items: [
          {
            text: 'Form',
            items: [
              { text: 'BasicInputMixin', link: '/components/form/basic-input-mixin' },
              { text: 'RequiredInputMixin', link: '/components/form/required-input-mixin' },
              { text: 'ValidationsInputMixin', link: '/components/form/validations-input-mixin' },
            ]
          }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Component library', link: '/component-library' },
          { text: 'SCSS framework', link: '/scss-framework' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Brugarolas/vuersatile-components' }
    ]
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/scss/main.scss";`
        }
      }
    },
    
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../lib', import.meta.url))
      }
    }
  },

  lastUpdated: true
})
