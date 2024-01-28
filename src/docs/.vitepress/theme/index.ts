import DefaultTheme from 'vitepress/theme'
import NotFound from './NotFound.vue'
import plugin from './layouts/plugin/index.vue'
import yiyan from './components/yiyan.vue'
import codewindow from './components/Window.vue'
import type { Theme } from 'vitepress'
import './index.less'
export default {
  ...DefaultTheme,
  NotFound,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('Plugin', plugin)
    ctx.app.component('Yiyan', yiyan)
    ctx.app.component('cdw', codewindow)
  }
} as Theme
