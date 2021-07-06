import path from 'path';
import fs from 'fs';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Vercel Nuxt Vuetify Playground',
    title: 'Vercel Nuxt Vuetify Playground',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        href:
          'https://fonts.googleapis.com/css?family=Playfair+Display:400,400i|Raleway:400,800',
        rel: 'stylesheet',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/components.js',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  generate: {
    dir: 'vercel-nuxt-vuetify-cms-public',
  },

  // server: {
  //   timing: false,
  //   https: (function () {
  //     const dir = './env/cert'
  //     const key = path.join(dir, 'localhost.key')
  //     const crt = path.join(dir, 'localhost.crt')

  //     if (fs.existsSync(key) && fs.existsSync(crt)) {
  //       return { key: fs.readFileSync(key), cert: fs.readFileSync(crt) }
  //     } else {
  //       return null
  //     }
  //   })(),
  // },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      'storyblok-nuxt',
      {
        accessToken: '9y6VapMPfrJBXi1TeMSfVwtt', // ONLY FOR PREVIEW localhost & CMS
        // accessToken: 'RQJhaPVLA2QYy4Io84A9Qwtt', // STATIC SITES
        // accessToken: getStoryblokToken(isDev),
        cacheProvider: 'memory',
        timeout: 5000,
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'de',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          background: '#d0f0c0',
          primary: '#ce393b',
          accent: '#616161',
          secondary: '#ff8f00',
          info: '#26a69a',
          warning: '#ffc107',
          error: '#dd2c00',
          success: '#76ff03',
        },
        light: {
          background: '#d0f0c0',
          primary: '#ce393b',
          accent: '#616161',
          secondary: '#ff8f00',
          info: '#26a69a',
          warning: '#ffc107',
          error: '#dd2c00',
          success: '#76ff03',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
