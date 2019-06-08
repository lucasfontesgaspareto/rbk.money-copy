importScripts('/rbk.money-copy/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/rbk.money-copy/_nuxt/3286fd4a8732d7565f54.js",
    "revision": "907cb95e3e3935223e1c046835cca16f"
  },
  {
    "url": "/rbk.money-copy/_nuxt/4a6233241931b61ab527.js",
    "revision": "fa22d4a878ffad8a0a2724e8fba1ba17"
  },
  {
    "url": "/rbk.money-copy/_nuxt/84ce085c5315600f5412.js",
    "revision": "18fda8d66a08fa0b32f351f2359c4b9b"
  },
  {
    "url": "/rbk.money-copy/_nuxt/de9fbe7f5e8f6eddba89.js",
    "revision": "8f368541623b0d1527256e394fb98a09"
  }
], {
  "cacheId": "rbk.money-copy",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/rbk.money-copy/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/rbk.money-copy/.*'), workbox.strategies.networkFirst({}), 'GET')
