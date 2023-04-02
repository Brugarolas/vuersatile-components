/* =========================================================================================
  File Name: vue.config.js
  Description: configuration file of vue
========================================================================================== */
const path = require('path');

// Add app version as environment variable
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  // publicPath: '/v2',

  css: {
    extract: {
      filename: 'styles/app.[contenthash].css'
    },
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/scss/main.scss";'
      }
    }
  },

  filenameHashing: true,

  devServer: {
    port: 4000
  },

  configureWebpack: {
    /* optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }, */
    output: {
      filename: 'js/app.[contenthash].js'
    }
  },

  outputDir: 'dist',
  
  chainWebpack: (config) => {
      config
        .entry('app')
        .clear()
        // .add(process.env.NODE_ENV === 'development' ? './src/main.js' : './src/lib.js')
        .add('./src/main.js')
        .end();

      config.resolve.alias
        .set('@', path.join(__dirname, './lib'));
  },
  /* chainWebpack: config => {
    // https://v3-migration.vuejs.org/migration-build.html
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      }) <

    // https://github.com/jeerbl/webfonts-loader/issues/66
    config.module
      .rule('js')
      .exclude
      .add(/-font\.config\.js$/)
      .end()

    config.module
      .rule('font-icons')
      .test(/-font\.config\.js$/)
      .use('css-extract')
      .loader(require('mini-css-extract-plugin').loader)
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()
      .use('webfonts-loader')
      .loader('webfonts-loader')
      .end()
  } */
}
