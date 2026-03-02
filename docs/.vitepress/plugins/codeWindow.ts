import type MarkdownIt from 'markdown-it'

export function codeWindowPlugin(md: MarkdownIt) {
  // 保存原始 fence 渲染函数
  const defaultFence = md.renderer.rules.fence!

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const lang = token.info.trim().split(/\s+/)[0] ?? ''

    // 提取 meta 中的 filename（如：```ts [utils.ts]）
    const filenameMatch = token.info.match(/\[(.+?)\]/)
    const filename = filenameMatch ? filenameMatch[1] : ''

    // 原始 VitePress 渲染结果
    const rawHtml = defaultFence(tokens, idx, options, env, self)

    // 用组件包裹（编译时 SSR 安全的 HTML 包裹写法）
    return `
<div
  class="code-window"
  data-lang="${lang}"
  data-filename="${filename}"
>
  <div class="code-window__titlebar">
    <div class="code-window__dots" aria-hidden="true">
      <span class="dot dot--close"></span>
      <span class="dot dot--min"></span>
      <span class="dot dot--full"></span>
    </div>
    <div class="code-window__tab">
      ${filename
        ? `<span class="code-window__lang-dot"></span>${filename}`
        : `<span class="code-window__lang-dot"></span>${lang.toUpperCase()}`
      }
    </div>
  </div>
  <div class="code-window__body">${rawHtml}</div>
</div>`
  }
}