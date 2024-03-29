import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default {
  lang: 'zh-CN',
  theme: hopeTheme({
    logo: "./assets/image/minecolonies_wiki.png",
    navbar: [
      {text: "主页",link: "/",icon: "home"},
      {text: "安装",link: "Installation/"},
      {text: "教程",link: "Tutorials/"},
      {text: "建筑",link: "Buildings/"},
    ],
    sidebar: {
      "/Installation/": "structure",
      "/Tutorials/": "structure",
      "/Buildings/": "structure",
      "/": [
        "start"
      ],
    },
    plugins: {
      mdEnhance: {
        gfm: true,
        include: true,
      },
      searchPro: {
        indexContect: true,
        autoSuggestions: true,
      },
      pwa: true
    },
    pageInfo: ["Original", "Category", "Tag", "Word", "ReadingTime"],
  }),
  base: "/Minecolonies-Chinese-Wiki/",
  title: "模拟殖民地 中文Wiki",
  description: "由爱好者建立的模拟殖民地非官方中文Wiki",
  markdown: {
    lineNumbers: true
  },
  lastUpdated: true,
}