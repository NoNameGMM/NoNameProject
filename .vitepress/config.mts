import { defineConfig } from 'vitepress'
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NoNameProject",
  titleTemplate: 'By NoNameGMM',
  head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
  description: "A Website For NoNameGMM's Project",
  vite:{
    plugins:[pagefindPlugin({
      excludeSelector:['img','a.header-anchor'],
      customSearchQuery: chineseSearchOptimize,
      resultOptimization: false,
      filter(searchItem, idx, originArray) {
        console.log(searchItem);
        return !searchItem.route.includes('404') 
      },
      locales: {
        root:{
          btnPlaceholder: '搜索',
          placeholder: '搜索文档',
          emptyText: '空空如也',
          heading: '共: {{searchResult}} 条结果',
        },
        en: {
          btnPlaceholder: 'Search',
          placeholder: 'Search Docs...',
          emptyText: 'No results',
          heading: 'Total: {{searchResult}} search results.',
        }
      }
    })],
  },
  themeConfig: {
    logo: './favicon.ico',
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NoNameGMM' }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/NoNameGMM/NoNameProject/blob/main/LICENSE">GPL-3.0</a> License',
      copyright: 'Copyright © 2010-present NoNameGMM'
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-cn',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
        ],
        sidebar: [
          {
            text: '案例',
            items: [
              { text: 'NoNameGMM', link: '/markdown-examples' },
              { text: 'NoNameCDN', link: '/api-examples' }
            ]
          }
        ],
      }
    },
    en: {
      label: 'English',
      lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/en/', // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
        ],
        sidebar: [
          {
            text: 'Example',
            items: [
              { text: '1arkdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],
      }
    }
  }
})
