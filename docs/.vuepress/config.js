import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    lang: 'zh-CN',
    logo: "./assets/image/minecolonies_wiki.png",
    navbar: [
      {text: "主页", link: "/"},
      {
        text: "安装",
        prefix: "Installation/",
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
        // 启用 GFM 警告
        alert: true,
      },
    },
  }),
  base: "/Minecolonies-Chinese-Wiki/",
  title: "模拟殖民地 中文Wiki",
  description: "由爱好者建立的模拟殖民地非官方中文Wiki",
  markdown: {
    lineNumbers: true
  },
  lastUpdated: true
}