const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Paymov ADM',
    themeColor: '#0c0e8a',
    manifestOptions: {
      background_color: '#0c0e8a',
      icons: [
        { src: './img/icons/android-chrome-192x192.png', sizes: '192x191', type: 'image/png' },
        { src: './img/icons/android-chrome-512x512.png', sizes: '512x510', type: 'image/png' },
        { src: './img/icons/android-chrome-maskable-192x192192x192.png', sizes: '192x191', type: 'image/png' },
        { src: './img/icons/android-chrome-maskable-512x512.png', sizes: '512x510', type: 'image/png' },
        { src: './img/icons/apple-touch-icon-60x60.png', sizes: '60x64', type: 'image/png' },
        { src: './img/icons/apple-touch-icon-76x76.png', sizes: '76x76', type: 'image/png' },
        { src: './img/icons/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
        { src: './img/icons/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
        { src: './img/icons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
        { src: './img/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        { src: './img/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { src: './img/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { src: './img/icons/msapplication-icon-144x144.png', sizes: '144x144', type: 'image/png' },
        { src: './img/icons/mstile-150x150.png', sizes: '150x150', type: 'image/png' },
        { src: './img/icons/safari-pinned-tab.svg', sizes: '16x16', type: 'image/svg' },
      ],
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/mstile-150x150.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/mstile-150x150.png',
    },
  }
})
