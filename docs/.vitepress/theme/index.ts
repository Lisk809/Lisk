import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import NotFound from './NotFound.vue'
import Intro from './Intro.vue'
import './index.less'

export default{
  ...DefaultTheme,
  enhanceApp(ctx){
    ctx.app.component("Intro", Intro)
  },
  NotFound
} as Theme
