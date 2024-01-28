import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Lisk",
  description: "不知名业余程序员",
  head: [
    ["link", { rel: "preconnect", href: "https://unpkg.com" }],
    ["link", { rel: "dns-prefetch", href: "https://unpkg.com" }],
    ["link", { rel: "icon", type: "image/png", href: "/lisk.png" }],
    ["script", { src: "https://unpkg.com/twemoji@latest/dist/twemoji.min.js" }],
  ],
  lastUpdated: true,
  markdown: {
    theme: "one-dark-pro",
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/lisk.png",
    nav: [
      { text: "文档", link: "/intro" },
      {
        text: "找我",
        items: [
          {
            items: [
              { text: "GitHub", link: "https://github.com/Lisk809" },
              {
                text: "QQ",
                link: "https://qm.qq.com/cgi-bin/qm/qr?k=z_MhzXU1RM0HEnIOBmXiERGNuDxpHglV&noverify=0",
              },
            ],
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "开始",
        collapsible: true,
        items: [{ text: "简介", link: "/intro" }],
      },
      {
        text: "文章",
        collapsible: true,
        items: [{ text: "JS中的==和===", link: "/blog/compare" }],
      },
      {
        text: "Viki名场面珍藏馆",
        collapsible: true,
        items: [{ text: "第一页", link: "/Viki/index" }],
      },
      {
        text: "提问的艺术",
        collapsible: true,
        items: [
          {
            text: " RTFM 和 STFW：如何知道你已完全搞砸了",
            link: "/the-art-of-asking-questions/ RTFM 和 STFW：如何知道你已完全搞砸了.md",
          },

          {
            text: " 低声下气不能代替你的功课",
            link: "/the-art-of-asking-questions/ 低声下气不能代替你的功课.md",
          },

          {
            text: " 使用易于读取且标准的文件格式发送问题",
            link: "/the-art-of-asking-questions/ 使用易于读取且标准的文件格式发送问题.md",
          },

          {
            text: " 使用有意义且描述明确的标题",
            link: "/the-art-of-asking-questions/ 使用有意义且描述明确的标题.md",
          },

          {
            text: " 使问题容易回复",
            link: "/the-art-of-asking-questions/ 使问题容易回复.md",
          },

          {
            text: " 别动辄声称找到 Bug",
            link: "/the-art-of-asking-questions/ 别动辄声称找到 Bug.md",
          },

          {
            text: " 别把自己家庭作业的问题贴上来",
            link: "/the-art-of-asking-questions/ 别把自己家庭作业的问题贴上来.md",
          },

          {
            text: " 别要求使用私人电邮回复",
            link: "/the-art-of-asking-questions/ 别要求使用私人电邮回复.md",
          },

          {
            text: " 即使你很急也不要在标题写`紧急`",
            link: "/the-art-of-asking-questions/ 即使你很急也不要在标题写`紧急`.md",
          },

          {
            text: " 去掉无意义的提问句",
            link: "/the-art-of-asking-questions/ 去掉无意义的提问句.md",
          },

          {
            text: " 处理无礼的回应",
            link: "/the-art-of-asking-questions/ 处理无礼的回应.md",
          },

          {
            text: " 如果还是搞不懂",
            link: "/the-art-of-asking-questions/ 如果还是搞不懂.md",
          },

          {
            text: " 慎选提问的论坛",
            link: "/the-art-of-asking-questions/ 慎选提问的论坛.md",
          },

          {
            text: " 按发生时间先后列出问题症状",
            link: "/the-art-of-asking-questions/ 按发生时间先后列出问题症状.md",
          },

          {
            text: " 描述目标而不是过程",
            link: "/the-art-of-asking-questions/ 描述目标而不是过程.md",
          },

          {
            text: " 描述问题症状而非你的猜测",
            link: "/the-art-of-asking-questions/ 描述问题症状而非你的猜测.md",
          },

          {
            text: " 清楚明确地表达你的问题以及需求",
            link: "/the-art-of-asking-questions/ 清楚明确地表达你的问题以及需求.md",
          },

          {
            text: " 礼多人不怪，而且有时还很有帮助",
            link: "/the-art-of-asking-questions/ 礼多人不怪，而且有时还很有帮助.md",
          },

          {
            text: " 第二步，使用项目邮件列表",
            link: "/the-art-of-asking-questions/ 第二步，使用项目邮件列表.md",
          },

          {
            text: " 精确地描述问题并言之有物",
            link: "/the-art-of-asking-questions/ 精确地描述问题并言之有物.md",
          },

          {
            text: " 网站和 IRC 论坛",
            link: "/the-art-of-asking-questions/ 网站和 IRC 论坛.md",
          },

          {
            text: " 话不在多而在精",
            link: "/the-art-of-asking-questions/ 话不在多而在精.md",
          },

          {
            text: " 询问有关代码的问题时",
            link: "/the-art-of-asking-questions/ 询问有关代码的问题时.md",
          },

          {
            text: " 问题解决后，加个简短的补充说明",
            link: "/the-art-of-asking-questions/ 问题解决后，加个简短的补充说明.md",
          },

          {
            text: "前言",
            link: "/the-art-of-asking-questions/前言.md",
          },

          {
            text: "使用清晰、正确、精准且合乎语法的语句",
            link: "/the-art-of-asking-questions/使用清晰、正确、精准且合乎语法的语句.md",
          },
        ],
      },
    ],
    outline: 2,
    outlineTitle: "大纲",
    socialLinks: [{ icon: "github", link: "https://github.com/Lisk809/Lisk" }],
    footer: {
      message:
        '<a href="https://github.com/Lisk809/Lisk">博客</a>使用 <a href="https://github.com/KiviBotLab/docs/blob/main/LICENSE">MIT</a> 协议开放源代码\nPower by <a href="https://vitepress.docschina.org/">VitePress</a>',
      copyright:
        'Copyright © 2022-PRESENT <a href="https://github.com/Lisk809">Lisk</a>',
    },
    lastUpdatedText: "上次更新",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    editLink: {
      pattern: "https://github.com/Lisk809/Lisk/edit/main/src/docs/:path",
      text: "在 GitHub 上编辑",
    },
  },
});
