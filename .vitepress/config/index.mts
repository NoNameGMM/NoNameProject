import { defineConfig } from 'vitepress'
import { shared } from './shared.mjs'
import { en } from './en.mjs'
import { zh } from './zh.mjs'

export default defineConfig({
  ...shared,
  locales: {
    zh: { label: '简体中文', ...zh },
    root: { label: 'English', ...en }
  }
})
