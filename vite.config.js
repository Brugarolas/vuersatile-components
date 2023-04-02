import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/main.scss";`
      }
    }
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./lib', import.meta.url)),
      // vue: '@vue/compat'
    }
  },

  plugins: [vue(/*{
    template: {
      compilerOptions: {
        compatConfig: {
          MODE: 2
        }
      }
    }
  }*/)],
})
