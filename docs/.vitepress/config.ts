import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import {
  PageProperties,
  PagePropertiesMarkdownSection
} from '@nolebase/vitepress-plugin-page-properties/vite'
import {
  GitChangelog,
  GitChangelogMarkdownSection
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
import timeline from 'vitepress-markdown-timeline'
import taskLists from 'markdown-it-task-lists'
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from 'vitepress-plugin-group-icons'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

import { qq, bilibili, npm } from './icons.ts'
import { join } from 'node:path'

export default defineConfig({
  title: "Lisk's Blog",
  titleTemplate: ':title - (=^▽^=)',
  description: "Lisk's Blog, welcome to visit!👋",
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#88619A'
      }
    ]
  ],
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  vite: {
    ssr: {
      noExternal: ['@nolebase/*', 'element-plus']
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      GitChangelog({
        maxGitLogCount: 2000,
        repoURL: () => 'https://github.com/Lisk809/Lisk'
      }),
      GitChangelogMarkdownSection({
        exclude: (id) => id.endsWith('index.md'),
        sections: {
          // 禁用页面历史
          disableChangelog: false,
          // 禁用贡献者
          disableContributors: true
        }
      }) as any,
      PageProperties(),
      PagePropertiesMarkdownSection({
        excludes: ['index.md', 'intro.md']
      }),
      groupIconVitePlugin({
        customIcon: {
          ts: 'logos:typescript',
          js: 'logos:javascript', //js图标
          md: 'logos:markdown', //markdown图标
          css: 'logos:css-3' //css图标
        }
      })
    ]
  },
  markdown: {
    math: true,
    config: (md) => {
      // 时间线
      md.use(timeline)
      // 任务列表
      md.use(taskLists)
      // 行内链接预览
      md.use(InlineLinkPreviewElementTransform)
      // 代码组图标
      md.use(groupIconMdPlugin)
    },
    codeTransformers: [transformerTwoslash()]
  },
  themeConfig: {
    logo: '/lisk.png',
    nav: [
      {
        text: 'Home',
        link: '/index'
      },
      {
        text: 'Intro',
        link: '/intro'
      },
      {
        text: '我推',
        link: '/favors'
      },
      {
        text: 'Blog',
        items: [
          {
            text: 'lambda 演算',
            link: '/posts/lambda'
          }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Cordis',
        items: [
          {
            text: 'Home',
            link: '/index'
          },
          {
            text: 'Intro',
            link: '/intro'
          },
          {
            text: '我推',
            link: '/favors'
          },
        ]
      },
      {
        text: 'Blog',
        items: [
          {
            text: 'lambda 演算',
            link: '/posts/lambda'
          }
        ]
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/lisk809'
      },
      {
        icon: 'twitter',
        link: 'https://x.com/Lisk325301'
      },
      {
        icon: npm,
        link: 'https://www.npmjs.com/~lisk809'
      },
      {
        icon: qq,
        link: 'https://qm.qq.com/q/ddE5NFqmJy'
      },
      {
        icon: bilibili,
        link: 'https://space.bilibili.com/1358312343'
      }
    ],
    footer: {
      message:
        'Released under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> License.',
      copyright: `Copyright © ${(new Date()).getFullYear()} Lisk`
    },

    editLink: {
      pattern: 'https://github.com/lisk809/Lisk/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: 2,
    outlineTitle: '大纲'
  },
  sitemap: {
    hostname: 'https://lisks.icu/',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  }
})
