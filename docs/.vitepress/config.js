import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en",
  title: "Vuersatile Components",
  description: "A Vue 3 component library with a SCSS framework integrated",
  tagline: "Simple, powerful, and fast. Meet the modern components library and SCSS framework you've always wanted.",

  head: [
    ['link', { rel: "shortcut icon", href: "/favicon.ico" }]
  ],

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: '/logo-with-shadow.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/getting-started' },
      { text: 'Component library', link: '/components/form/checkbox' },
      { text: 'SCSS framework', link: '/scss/breakpoints' }
    ],

    sidebar: [
      {
        text: 'Getting started',
        link: '/getting-started'
      },
      {
        text: 'Components',
        items: [
          {
            text: 'Form',
            items: [
              { text: 'Checkbox', link: '/components/form/checkbox' },
              { text: 'Form', link: '/components/form/form' },
              { text: 'InputSelect', link: '/components/form/input-select' },
              { text: 'InputMultiSelect', link: '/components/form/input-multi-select' },
              { text: 'InputNumber', link: '/components/form/input-number' },
              { text: 'InputPassword', link: '/components/form/input-password' },
              { text: 'InputText', link: '/components/form/input-text' },
              { text: 'InputTextarea', link: '/components/form/input-textarea' },
              { text: 'RadioButtonGroup', link: '/components/form/radio-button-group' }
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
        text: 'Plugins',
        items: [
          { text: 'Validations', link: '/plugins/validations' },
        ]
      },
      {
        text: 'SCSS framework',
        items: [
          { text: 'Responsive/Breakpoints', link: '/scss/breakpoints' },
          { text: 'Colors', link: '/scss/colors' },
          { text: 'Layout/Grid', link: '/scss/layout-grid' },
          { text: 'Miscellaneous', link: '/scss/miscellaneous' },
          { text: 'Mixins/Functions', link: '/scss/mixins-functions' },
          { text: 'Spaces', link: '/scss/spaces' }
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
          additionalData: `@import "@/scss/custom/base-theme/support/index.scss"; @import "@/scss/custom/_icons.scss"; @import "@/../docs/.vitepress/styles/index.scss";`
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
