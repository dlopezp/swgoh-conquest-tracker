export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'swgoh-conquest-tracker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuesax/dist/vuesax.css',
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/rollbar',
    '@/plugins/vuesax',
    '@/plugins/fragment',
    '@/plugins/init',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          { code: 'en', iso: 'en-us', file: 'en.json', name: 'english' },
          { code: 'es', iso: 'es-es', file: 'es.json', name: 'castellano' }
        ],
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root',
        },
        defaultLocale: 'en',
        vueI18nLoader: true,
        langDir: '~/locales/',
        vueI18n: {
          fallbackLocale: 'en'
        }
      }
    ],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyAfzvdCwDd7cNc2HgOEo0gns-JoCVTj6us',
          authDomain: 'swgoh-conquest-tracker.firebaseapp.com',
          projectId: 'swgoh-conquest-tracker',
          storageBucket: 'swgoh-conquest-tracker.appspot.com',
          messagingSenderId: '377589165565',
          appId: '1:377589165565:web:194eaa7fb891a2ca25fd94',
          measurementId: 'G-DGCW7XNSBC'
        },
        services: {
          firestore: {
            memoryOnly: false, // default
            chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
            enablePersistence: true,
            emulatorPort: 8080,
            emulatorHost: 'localhost',
            settings: {
              // Firestore Settings - currently only works in SPA mode
            }
          },
          auth: {
            persistence: 'local',
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false,
            emulatorPort: 9099,
            emulatorHost: 'http://localhost',
          },
          analytics: true,
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
