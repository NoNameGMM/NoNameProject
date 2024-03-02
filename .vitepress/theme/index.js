// .vitepress/theme/index.js
import Theme from 'vitepress/theme'
import './custom.css'
import Layout from './layout.vue'

export default {
    extends: Theme,
    Layout: Layout
  }