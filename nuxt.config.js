export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  generate: {
    fallback: true,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '8 anni',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
    script: [
      {
        src:
          'https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList',
      },
      {
        src:
          'https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js',
      },
    ],
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/prismic',
      {
        endpoint: 'https://artistlab.cdn.prismic.io/api/v2',
        apiOptions: {
          routes: [
            {
              type: 'page',
              path: '/:uid',
            },
          ],
        },
      },
    ],
    ['nuxt-sm'],
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm'],
  },
  storybook: {
    stories: ['~/slices/**/*.stories.js'],
  },
  ignore: ['**/*.stories.js'],
}
