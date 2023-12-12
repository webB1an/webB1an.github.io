// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import DefaultTheme from 'vitepress/theme'
// import './style.css'

import './styles/index.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(ElementPlus)
  }
} satisfies Theme
