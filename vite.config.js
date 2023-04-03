import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/custom/base-theme/support/index.scss";`
      }
    }
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./lib', import.meta.url))
      // vue: '@vue/compat'
    }
  },

  plugins: [
    vue(/*{
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    }*/),

    Unfonts({
      google: {
        families: [
          {
            name: 'Open Sans',
            styles: 'wght@300;400;600;700'
          },
          {
            name: 'Roboto Slab',
            styles: 'wght@300;400;600;700'
          }
        ]
      }
    })
  ],

  build: {
    cssCodeSplit: true,
    assetsInlineLimit: 0,

    lib: {
      // eslint-disable-next-line no-undef
      entry: resolve(__dirname, 'lib/index.js'),
      name: 'Vuersatile Components',
      fileName: 'vuersatile-components',
      emitAssets: true
    },

    commonjsOptions: {
      strictRequires: [
        new RegExp('@fortawesome/[.]*')
      ]
    }
  },

  rollupOptions: {
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue'
      }
    },
    sourceMap: false
  },

  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  }
})
