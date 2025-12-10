import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "GMLAPI - 全球大模型API聚合平台",
  description: "一站式接入 OpenAI (GPT-4), Claude 3, Gemini, Midjourney 等全球主流大模型 API。无需代理，稳定高并发，精准计费，支持 Python/Node.js 等多种 SDK 快速接入。",
  head: [
    ['meta', { name: 'keywords', content: 'GMLAPI, 大模型API, OpenAI接口, GPT-4 API, Claude 3 API, Midjourney API, AI中转, API聚合平台' }],
    ['meta', { property: 'og:title', content: 'GMLAPI - 全球大模型API聚合平台' }],
    ['meta', { property: 'og:description', content: '一站式接入 OpenAI (GPT-4), Claude 3, Gemini, Midjourney 等全球主流大模型 API。无需代理，稳定高并发。' }],
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'GMLAPI',

    search: {
      provider: 'algolia',
      options: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'YOUR_INDEX_NAME'
      }
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '用户指南', link: '/guide/' },
      { text: '使用场景', link: '/scenarios/' },
      { text: '快速接入', link: '/access/' }
    ],

    sidebar: [
      {
        text: '文档目录',
        items: [
          { text: '用户指南', link: '/guide/' },
          { text: '使用场景', link: '/scenarios/' },
          { text: '快速接入', link: '/access/' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present gmlapi'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    editLink: {
      pattern: 'https://github.com/gzyxds/GMLAPI/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
