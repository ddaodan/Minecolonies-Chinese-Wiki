if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const l=e=>a(e,r),c={module:{uri:r},exports:t,require:l};s[r]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(d(...e),t)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-FzwsIe5I.js",revision:"5c55e9a42f0fec55873e49d006eb89e9"},{url:"assets/404.html-YbRkGhD2.js",revision:"4ae042fd346da9c1b3a8161eb881505e"},{url:"assets/app-rX80dX-Q.js",revision:"e2ab66c7da7d00868155af52c56e1a08"},{url:"assets/datapacks.html-XoM--KFN.js",revision:"bb82ba7f243b0340eec0071bcbf4b783"},{url:"assets/datapacks.html-XY14g8Fx.js",revision:"e44c0e37221ea77f149ef3fee9795c83"},{url:"assets/gdlauncher.html-gLJsbJFe.js",revision:"987992e42ae67e073608c5b946feec97"},{url:"assets/gdlauncher.html-LPHvh2kO.js",revision:"48c5362af53afda1a225506a75d1015c"},{url:"assets/getting-started.html-cmKU-xSg.js",revision:"f20038fef7dd4198055d5ea85ec4447e"},{url:"assets/getting-started.html-K6-kH37m.js",revision:"2d5e37a676abc529edb01cad3d0e0c2f"},{url:"assets/hmcl.html-nuGELm3C.js",revision:"2acd7bb8ca15e26fde9a31c0edc9f71f"},{url:"assets/hmcl.html-XybsHrXO.js",revision:"e0a835734858eedc4a74af8f5b26288b"},{url:"assets/image/advanced.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/image/blog.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/image/box.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/image/features.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/image/github-dark.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/image/github-light.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/image/layout.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/image/markdown.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-26zp0mBY.js",revision:"e4ef0ef48aaa171fb9b958a748ad31b4"},{url:"assets/index.html-5FyXhD0v.js",revision:"013305c6eb9b774a4feee157fba22fd0"},{url:"assets/index.html-Gvxye8Fe.js",revision:"d59ce7ed4c1e27d0aada314978d8a766"},{url:"assets/index.html-iGaRDsYP.js",revision:"82c92ae2d652ddfb5f63dd29d8094931"},{url:"assets/index.html-pFrUCak5.js",revision:"29345e45c0eb87306e5b45a3e2f69eb2"},{url:"assets/index.html-QIJUgJxO.js",revision:"dcfdc2cd2b37d31532128b96d8978be9"},{url:"assets/index.html-qMHFXmIa.js",revision:"0b08acd2689fa5b174704aae49550276"},{url:"assets/index.html-SgfpfqAF.js",revision:"41a1ef0d1765581c4d8ddfedac7ee17f"},{url:"assets/java.html-b4gnrsFa.js",revision:"980c054a42445e82b95b8977a5287b7e"},{url:"assets/java.html-cvzZEkzf.js",revision:"c302245a673efa211fddadd036193b93"},{url:"assets/photoswipe.esm-08_zHRDQ.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/schematics.html-xW3zIrup.js",revision:"22c7a1775c689ccaaf1375b5e89a41e1"},{url:"assets/schematics.html-ZIiwWZQs.js",revision:"f09cadeccc729f32436960a23181593d"},{url:"assets/SearchResult-IzeXNURa.js",revision:"8656b585b24d1777eb15a263fba15a40"},{url:"assets/style-vzLtS47N.css",revision:"d63456a53102f8acbc744e03231fd8e2"},{url:"assets/temp.html-KkJJgK1Y.js",revision:"beae9ad14ae9ded48367846ba21e270e"},{url:"assets/temp.html-mJuis2h8.js",revision:"4bc82667d763bdec584b8e8026e9855b"},{url:"assets/townhall.html-f05QP5j6.js",revision:"992c11f3105ae0789d03e3f78fa379bd"},{url:"assets/townhall.html-hfvW79OU.js",revision:"e9b32cf4c0faea99720d503511e96615"},{url:"assets/worldgencolonies.html-hBZXKTdx.js",revision:"2c4ede12ca2f319842fcb524bd012212"},{url:"assets/worldgencolonies.html-lvv6_fgg.js",revision:"820721db80dcbcfef5689dfde578a0d0"},{url:"logo.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"index.html",revision:"68e46a2896fe73591b163e7eb58d1464"},{url:"404.html",revision:"4925ff3b0b48d1152e44567381624191"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map