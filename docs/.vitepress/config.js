import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { SearchPlugin } from "vitepress-plugin-search";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en",
  title: "Vuersatile Components",
  description: "A Vue 3 component library with a SCSS framework integrated",
  tagline: "Simple, powerful, and fast. Meet the modern components library and SCSS framework you've always wanted.",
  base: '/vuersatile-components/',

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
              { text: 'InputDate', link: '/components/form/input-date' },
              { text: 'InputDateRange', link: '/components/form/input-date-range' },
              { text: 'InputSelect', link: '/components/form/input-select' },
              { text: 'InputMultiSelect', link: '/components/form/input-multi-select' },
              { text: 'InputNumber', link: '/components/form/input-number' },
              { text: 'InputPassword', link: '/components/form/input-password' },
              { text: 'InputRange', link: '/components/form/input-range' },
              { text: 'InputText', link: '/components/form/input-text' },
              { text: 'InputTextarea', link: '/components/form/input-textarea' },
              { text: 'RadioButtonGroup', link: '/components/form/radio-button-group' },
              { text: 'SegmentedControl', link: '/components/form/segmented-control' },
              { text: 'ToggleSwitch', link: '/components/form/toggle-switch' }
            ]
          },
          {
            text: 'Info',
            items: [
              { text: 'Card', link: '/components/info/card' },
              { text: 'Icon', link: '/components/info/icon' },
              { text: 'Tooltip', link: '/components/info/tooltip' }
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
          additionalData: `@import "@/scss/custom/base-theme/support/index.scss"; @import "@/../docs/.vitepress/styles/_icons.scss"; @import "@/../docs/.vitepress/styles/index.scss";`
        }
      }
    },

    build: {
      ssr: false,
      cssCodeSplit: false,
      assetsInlineLimit: 8096,
      minify: true,
    },

    optimizeDeps: {
      force: true 
    },
    
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../lib', import.meta.url))
      }
    },

    plugins: [
      SearchPlugin({
        previewLength: 62,
        buttonLabel: "Search",
        placeholder: "Search docs",
        allow: [],
        ignore: []
      })
    ]
  },

  build: {
    cacheDir: './.vitepress/.vitepress-cache'
  },

  lastUpdated: true
})
