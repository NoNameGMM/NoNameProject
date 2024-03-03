import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  themeConfig: {
    lightModeSwitchTitle: 'Switch to Light Mode',
    darkModeSwitchTitle: 'Switch to Dark Mode',
    darkModeSwitchLabel: 'Appearance',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',
    outline: {
      level: [1,3],
      label: 'On this page'
    },
    docFooter: {
      prev: false,
      next: false
    },
    lastUpdated: {
      text: 'Last Updated at',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'long',
        hourCycle: 'h24'
      }
    },
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Bukkit Plugin',
        items: [
          { text: 'SignInForMiraiMC', link: './bukkit-plugins/signinformiraimc' }
        ]
      }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/NoNameGMM/NoNameProject/blob/main/LICENSE">GPL-3.0</a> License',
      copyright: `Copyright © 2010-${new Date().getFullYear()} NoNameGMM`
    },
    externalLinkIcon: true
  }
})