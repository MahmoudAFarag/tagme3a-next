if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/MYwXVpbmc8krjzNj6BUkQ/_buildManifest.js",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/MYwXVpbmc8krjzNj6BUkQ/_ssgManifest.js",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/chunks/996-3f90bb6b74a7ba2ca305.js",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/chunks/commons-d3aa6f89dfc76abd07fb.js",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/chunks/framework-5e33f488d9410ce9ba9d.js",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/chunks/main-a82148bc74c1822ce588.js",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/chunks/pages/%5Bsubject%5D-1de5c18397dbb20cb831.js",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/chunks/pages/_app-35c23f1734a053ee7d4c.js",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/chunks/pages/_error-e3d82d5754bafbb43d7e.js",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/chunks/pages/index-4330a8865a9640dee965.js",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/chunks/polyfills-8683bd742a84c1edd48c.js",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/chunks/webpack-900097ed3e1202a8de75.js",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/css/501872b1298be674b33f.css",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/css/70992ae28fddea8e843a.css",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/css/b8d8ac126718ba174850.css",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/media/ArefRuqaa-Regular.12ee94ccf2a0a97c99579da6bee17915.woff2",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/media/ArefRuqaa-Regular.5be43b8ff2c4142b07dc65eef3a906ee.woff",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/media/Poppins-Regular.6665771c893949778d870c5ae29a5665.woff",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/_next/static/media/Poppins-Regular.e5916eb4870527c2b7eb32286359535b.woff2",revision:"MYwXVpbmc8krjzNj6BUkQ"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/fonts/ArefRuqaa-Regular.woff",revision:"b47532b67fdb882a0b6cfa7eb3c71f53"},{url:"/fonts/ArefRuqaa-Regular.woff2",revision:"6855cfce07336d22a2415423733b8efa"},{url:"/fonts/Poppins-Regular.woff",revision:"734b8856356acb3bb786f27971ac5dc5"},{url:"/fonts/Poppins-Regular.woff2",revision:"81f9dd27f1fb93cb2777ce14a555b00e"},{url:"/icons/apple-icon-180.png",revision:"daa68af231c53432ec5a0152753b7dab"},{url:"/icons/apple-splash-1125-2436.jpg",revision:"8ef0f45d63ac26932e428d1a0b76534f"},{url:"/icons/apple-splash-1136-640.jpg",revision:"47d566b621f5bf86a1c76fcf619e5e80"},{url:"/icons/apple-splash-1170-2532.jpg",revision:"2c2c818f34dac2831dc8d26ba03db190"},{url:"/icons/apple-splash-1242-2208.jpg",revision:"27234d12d72cdaaaeecbb89ffcfd9116"},{url:"/icons/apple-splash-1242-2688.jpg",revision:"0183815ba961e3027512f91d44dc112e"},{url:"/icons/apple-splash-1284-2778.jpg",revision:"60db1ffdaf46188d5f9624e017429e80"},{url:"/icons/apple-splash-1334-750.jpg",revision:"950b7766f082b45738b13cafa063ab58"},{url:"/icons/apple-splash-1536-2048.jpg",revision:"614b54351eaf5a1b360d38ea26b87c69"},{url:"/icons/apple-splash-1620-2160.jpg",revision:"c38545f83d375e906f76dd14f45456dd"},{url:"/icons/apple-splash-1668-2224.jpg",revision:"8dfa6384419c71575ae01784798bb61a"},{url:"/icons/apple-splash-1668-2388.jpg",revision:"8221f035c31379856d01a2d71740e444"},{url:"/icons/apple-splash-1792-828.jpg",revision:"1ca3e935353466a686410c3a124be878"},{url:"/icons/apple-splash-2048-1536.jpg",revision:"29b0f490e4d4ee1258a315d5186c0e59"},{url:"/icons/apple-splash-2048-2732.jpg",revision:"6941b4d279232bc17f60562f59802efc"},{url:"/icons/apple-splash-2160-1620.jpg",revision:"e2f6f46e02cedb7ad3a18decf44b4cb0"},{url:"/icons/apple-splash-2208-1242.jpg",revision:"85ba499a72c42d0565cf8206c80c2ba8"},{url:"/icons/apple-splash-2224-1668.jpg",revision:"ca564c32aa0734431cca36f264c34241"},{url:"/icons/apple-splash-2388-1668.jpg",revision:"1f605128a7e488e30309fa4f2f4b1506"},{url:"/icons/apple-splash-2436-1125.jpg",revision:"772cdf59b7ccae958a633fb1c4b7636a"},{url:"/icons/apple-splash-2532-1170.jpg",revision:"b0f34878e425bf39280058efade0d612"},{url:"/icons/apple-splash-2688-1242.jpg",revision:"76c84743420b59b51a62c94cdf4d85cc"},{url:"/icons/apple-splash-2732-2048.jpg",revision:"e2356ce6e68c0feac3dedd8c9a1dcb03"},{url:"/icons/apple-splash-2778-1284.jpg",revision:"ffc4e08b4898224c5f855b634756ff90"},{url:"/icons/apple-splash-640-1136.jpg",revision:"0106854236ebe7b0ba74bfadc5f5c1c5"},{url:"/icons/apple-splash-750-1334.jpg",revision:"7cc25eefd6f2b16127e07863e6b99e9d"},{url:"/icons/apple-splash-828-1792.jpg",revision:"d06a48433ab8f08b6c3514186d1f3d42"},{url:"/icons/icon-192x192.png",revision:"7ed6c669e8798ec8a5843ddb9104333c"},{url:"/icons/icon-256x256.png",revision:"885d7d0b121c914641900de3633fbd7a"},{url:"/icons/icon-384x384.png",revision:"370a26b111eef080feb3184241b1642b"},{url:"/icons/icon-512x512.png",revision:"b8b357f48623441ec9716b9343b02c72"},{url:"/site.webmanifest",revision:"32e2ee4b9c7320998ef92dab348497ff"},{url:"/sprite.svg",revision:"9cb03ad898941e95bcbc61e2f27c2977"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/api\/(?!auth\/callback\/).*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/(?!api\/).*$/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
