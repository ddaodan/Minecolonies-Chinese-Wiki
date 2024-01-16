import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default {
  lang: 'zh-CN',
  theme: hopeTheme({
    logo: "./assets/image/minecolonies_wiki.png",
    navbar: [
      {text: "主页", link: "/"},
      {
        text: "安装",
        prefix: "Installation/",
        link: "",
        children: [
          "gdlauncher",
          "java",
          "hmcl"
        ]
      },
      {
        text: "教程",
        prefix: "Tutorials/",
        children: [
          "getting-started",
          "datapacks",
          "schematics",
          "worldgencolonies"
        ]
      }
    ],
    sidebar: {
      "/Installation/": "structure",
      "/Tutorials/": "structure",
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
      }
    },
    pageInfo: ["Original", "Date", "Category", "Tag", "Word", "ReadingTime"],
  }),
  base: "/Minecolonies-Chinese-Wiki/",
  title: "模拟殖民地 中文Wiki",
  description: "由爱好者建立的模拟殖民地非官方中文Wiki",
  markdown: {
    lineNumbers: true
  },
  lastUpdated: true,
}