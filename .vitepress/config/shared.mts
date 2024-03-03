import { defineConfig } from 'vitepress'
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'

export const shared = defineConfig({
  title: "NoNameProject",
  titleTemplate: 'By NoNameGMM',
  head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
  description: "A Website For NoNameGMM's Project",
  lastUpdated: true,
  vite: {
    plugins: [pagefindPlugin({
      customSearchQuery: chineseSearchOptimize,
      indexingCommand:'npx pagefind --source "docs/.vitepress/dist" --bundle-dir "pagefind" --exclude-selectors "div.aside, a.header-anchor"',
      excludeSelector:['img','a.header-anchor'],
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
        en:{
          btnPlaceholder: 'Search',
          placeholder: 'Search Docs...',
          emptyText: 'No results',
          heading: 'Total: {{searchResult}} search results.'
        },
      }
    })],
  },
  themeConfig: {
    logo: './favicon.ico',
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NoNameGMM' }
    ]
  }
})
