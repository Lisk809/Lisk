import { defineConfig } from "vitepress";
import { join } from 'node:path'
import { qq, bilibili, npm } from "./icons.ts";
import { 
	  GitChangelog, 
	    GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import {PageProperties} from '@nolebase/vitepress-plugin-page-properties/vite'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Lisk's Blog",
  titleTemplate: ":title - (=^▽^=)",
  description: "Lisk's Blog, welcome to visit!👋",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#88619A" }],
  ],
  vite: {
    plugins: [
      PageProperties(),
      GitChangelog({
        repoURL: () => "https://github.com/nolebase/integrations",
        rewritePaths: {
          "docs/": "",
        },
      }),
      GitChangelogMarkdownSection({
        getChangelogTitle: (_, __, { helpers }): string => {
          if (helpers.idStartsWith(join("pages", "en"))) return "File History";
          if (helpers.idStartsWith(join("pages", "zh-CN"))) return "文件历史";

          return "File History";
        },
        excludes: [],
        exclude: (_, { helpers }): boolean => {
          if (helpers.idEquals(join("pages", "en", "index.md"))) return true;
          if (helpers.idEquals(join("pages", "zh-CN", "index.md"))) return true;

          return false;
        },
      }),
    ],
  },
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
      message:
        'Released under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> License.',
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
    theme: "one-dark-pro",
    lineNumbers: true,
  },
  search: {
    provider: "local",
  },
  sitemap: {
    hostname: "https://lisk.pages.dev",
  },
});
