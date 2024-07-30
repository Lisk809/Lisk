import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import NotFound from './NotFound.vue'
import './index.less'

export default{
  ...DefaultTheme,
  NotFound
} as Theme
