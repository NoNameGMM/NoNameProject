import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-cn',
  themeConfig: {
    lightModeSwitchTitle: '切换至浅色',
    darkModeSwitchTitle: '切换至深色',
    darkModeSwitchLabel: '切换深浅模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    outline: {
      level: [1,3],
      label: '本页上的内容'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'long',
        hourCycle: 'h24'
      }
    },
    docFooter: {
      prev: false,
      next: false
    },
    nav: [
      { text: '首页', link: '/' },
    ],
    sidebar: [
      {
        text: 'Bukkit插件',
        items: [
          { text: 'SignInForMiraiMC', link: './bukkit-plugins/signinformiraimc' }
        ]
      }
    ],
    footer: {
      message: '基于 <a href="https://github.com/NoNameGMM/NoNameProject/blob/main/LICENSE">GPL-3.0</a> 协议',
      copyright: `Copyright © 2010-${new Date().getFullYear()} NoNameGMM`
    },
  }
})