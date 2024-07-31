import { defineConfig } from "vitepress";
import { qq, bilibili, npm } from "./icons.ts";

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Lisk's Blog",
  titleTemplate: ":title - (=^▽^=)",
  description: "Lisk's Blog, welcome to visit!👋",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#88619A" }],
  ],
  lang: "zh-CN",
  lastUpdated: true,
  themeConfig: {
    logo: "/lisk.png",
    nav: [
      { text: "Home", link: "/index" },
      { text: "Intro", link: "/intro" },
      { text: "Blog", items: [{ text: "lambda 演算", link: "/blog/lambda" }] },
    ],
    sidebar: [
      {
        text: "Cordis",
        items: [
          { text: "Home", link: "/index" },
          { text: "Intro", link: "/intro" },
        ],
      },
      { text: "Blog", items: [{ text: "lambda 演算", link: "/blog/lambda" }] },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/lisk809" },
      { icon: "twitter", link: "https://x.com/Lisk325301" },
      { icon: npm, link: "https://www.npmjs.com/~lisk809" },
      { icon: qq, link: "https://qm.qq.com/q/ddE5NFqmJy" },
      { icon: bilibili, link: "https://space.bilibili.com/1358312343" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024 Lisk",
    },
    editLink: {
      pattern: "https://github.com/lisk809/Lisk/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: 2,
    outlineTitle: "大纲",
  },
  markdown: {
    math: true,
//    theme: "one-dark-pro",
//    lineNumbers: true,
  },
  search: {
    provider: "local",
   }
});
