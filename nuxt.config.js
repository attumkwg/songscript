require('dotenv').config()

export default {
  mode: 'spa',
  srcDir: 'client/',
  /*
     ** Headers of the page
     */
  head: {
    title: 'Sample',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Sample'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  generate: {
    dir: 'public/dist'
  },
  /*
     ** Customize the progress-bar color
     */
  loading: { color: '#fff' },
  /*
     ** Global CSS
     */
  css: [],
  /*
     ** Plugins to load before mounting the App
     */
  plugins: ['~/plugins/dependency'],
  /*
     ** Nuxt.js dev-modules
     */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build'
  ],
  /*
     ** Nuxt.js modules
     */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  proxy: {
    '/api': 'http://localhost:8000',
  },
  /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
  axios: {
    baseURL: '/api'
  },
  /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
  vuetify: {
    customVariables: ['~/assets/variables.scss']
  },
  /*
     ** Build configuration
     */
  build: {
    /*
         ** You can extend webpack config here
         */
    extend () {}
  }
}
