import { defineConfig } from 'vitepress'
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NoNameProject",
  titleTemplate: 'By NoNameGMM',
  head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
  description: "A Website For NoNameGMM's Project",
  themeConfig: {
    logo: './favicon.ico',
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NoNameGMM' }
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: 'MDBFONMY3I',
        apiKey: '5a21b5aabbc7830addc296654ebe0e5e',
        indexName: 'NoNameProject',
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
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
            text: 'Bukkit插件',
            items: [
              { text: 'SignInForMiraiMC', link: '#' }
            ]
          }
        ],
        footer: {
          message: '基于 <a href="https://github.com/NoNameGMM/NoNameProject/blob/main/LICENSE">GPL-3.0</a> 协议',
          copyright: 'Copyright © 2010-present NoNameGMM'
        },
        docFooter: {
          prev: '浏览上一页',
          next: '浏览下一页'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
        ],
        sidebar: [
          {
            text: 'Bukkit Plugin',
            items: [
              { text: 'SignInForMiraiMC', link: '#' }
            ]
          }
        ],
        footer: {
          message: 'Released under the <a href="https://github.com/NoNameGMM/NoNameProject/blob/main/LICENSE">GPL-3.0</a> License',
          copyright: 'Copyright © 2010-present NoNameGMM'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        }
      }
    }
  }
})
