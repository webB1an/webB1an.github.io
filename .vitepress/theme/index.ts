import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import DefaultTheme from 'vitepress/theme'


import './styles/index.css'


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
  }
}
