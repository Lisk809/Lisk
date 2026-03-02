<script setup lang="ts">
import { ref, computed, useSlots } from 'vue'
import { useClipboard } from '@vueuse/core'

const props = withDefaults(defineProps<{
  filename?: string
  lang?: string
  code?: string
}>(), {
  filename: '',
  lang: '',
  code: '',
})

// 从 slot 或 prop 获取原始代码文本
const slots = useSlots()

const rawCode = computed(() => {
  if (props.code) return props.code
  // 从默认 slot 提取纯文本（用于复制）
  return extractText(slots.default?.())
})

function extractText(vnodes: any): string {
  if (!vnodes) return ''
  return vnodes
    .map((v: any) => {
      if (typeof v.children === 'string') return v.children
      if (Array.isArray(v.children)) return extractText(v.children)
      return ''
    })
    .join('')
}

// 复制按钮
const { copy, copied } = useClipboard({ source: rawCode })

// 语言显示名映射
const langLabel = computed(() => {
  const map: Record<string, string> = {
    js: 'JavaScript', ts: 'TypeScript', jsx: 'JSX', tsx: 'TSX',
    vue: 'Vue', css: 'CSS', scss: 'SCSS', html: 'HTML',
    py: 'Python', python: 'Python', sh: 'Shell', bash: 'Bash',
    zsh: 'Zsh', json: 'JSON', yaml: 'YAML', yml: 'YAML',
    md: 'Markdown', rust: 'Rust', go: 'Go', java: 'Java',
    cpp: 'C++', c: 'C', sql: 'SQL', graphql: 'GraphQL',
  }
  return map[props.lang?.toLowerCase()] ?? props.lang?.toUpperCase() ?? ''
})

// 显示的标签（filename 优先）
const tabLabel = computed(() => props.filename || langLabel.value || 'Code')
</script>

<template>
  <div class="code-window">
    <!-- 标题栏 -->
    <div class="code-window__titlebar">
      <!-- 红绿灯 -->
      <div class="code-window__dots" aria-hidden="true">
        <span class="dot dot--close"  title="关闭" />
        <span class="dot dot--min"    title="最小化" />
        <span class="dot dot--full"   title="最大化" />
      </div>

      <!-- 文件名 / 语言标签 -->
      <div class="code-window__tab">
        <span v-if="lang" class="code-window__lang-dot" :data-lang="lang" />
        {{ tabLabel }}
      </div>

      <!-- 复制按钮 -->
      <button
        class="code-window__copy"
        :class="{ copied }"
        @click="copy(rawCode)"
        :aria-label="copied ? '已复制' : '复制代码'"
      >
        <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span>{{ copied ? '已复制' : '复制' }}</span>
      </button>
    </div>

    <!-- 代码内容区 -->
    <div class="code-window__body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* ── 窗口容器 ───────────────────────────────── */
.code-window {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-border, #e2d9ce);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.08),
    0 8px 24px rgba(0, 0, 0, 0.06),
    0 0 0 0.5px rgba(0, 0, 0, 0.04);
  margin: 1.75em 0;
  background: #1e1e1e;
  transition: box-shadow 0.25s ease;
}
.code-window:hover {
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.12),
    0 12px 32px rgba(0, 0, 0, 0.08),
    0 0 0 0.5px rgba(0, 0, 0, 0.06);
}

/* ── 标题栏 ─────────────────────────────────── */
.code-window__titlebar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  height: 40px;
  background: #2a2a2a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  user-select: none;
}

/* ── 红绿灯 ─────────────────────────────────── */
.code-window__dots {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: relative;
  cursor: default;
  transition: filter 0.15s ease;
}

.dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.15s ease;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 7px 7px;
}

/* 红 */
.dot--close {
  background: #ff5f57;
  box-shadow: inset 0 0 0 0.5px rgba(0,0,0,0.15);
}
.dot--close::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M2 2l6 6M8 2l-6 6' stroke='%23700' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
}

/* 黄 */
.dot--min {
  background: #febc2e;
  box-shadow: inset 0 0 0 0.5px rgba(0,0,0,0.12);
}
.dot--min::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M2 5h6' stroke='%23700' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
}

/* 绿 */
.dot--full {
  background: #28c840;
  box-shadow: inset 0 0 0 0.5px rgba(0,0,0,0.12);
}
.dot--full::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M2 2l6 6M2 8h6V2' stroke='%23006400' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

/* hover 时整组亮起图标 */
.code-window__dots:hover .dot::after { opacity: 1; }
.code-window__dots:hover .dot--close { background: #ff5f57; filter: brightness(1.05); }
.code-window__dots:hover .dot--min   { background: #febc2e; filter: brightness(1.05); }
.code-window__dots:hover .dot--full  { background: #28c840; filter: brightness(1.05); }

/* ── 文件名标签 ──────────────────────────────── */
.code-window__tab {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Menlo', monospace;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.01em;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 语言色块 */
.code-window__lang-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  background: #555;
}
[data-lang="js"]   .code-window__lang-dot,
[data-lang="jsx"]  .code-window__lang-dot { background: #f7df1e; }
[data-lang="ts"]   .code-window__lang-dot,
[data-lang="tsx"]  .code-window__lang-dot { background: #3178c6; }
[data-lang="vue"]  .code-window__lang-dot { background: #42b883; }
[data-lang="py"],
[data-lang="python"] .code-window__lang-dot { background: #3572a5; }
[data-lang="css"]  .code-window__lang-dot { background: #563d7c; }
[data-lang="html"] .code-window__lang-dot { background: #e34c26; }
[data-lang="json"] .code-window__lang-dot { background: #f7df1e; }
[data-lang="sh"],
[data-lang="bash"] .code-window__lang-dot { background: #4eaa25; }
[data-lang="rust"] .code-window__lang-dot { background: #dea584; }
[data-lang="go"]   .code-window__lang-dot { background: #00add8; }

/* ── 复制按钮 ────────────────────────────────── */
.code-window__copy {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 5px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.35);
  font-size: 0.72rem;
  font-family: ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.18s ease;
  letter-spacing: 0.02em;
}
.code-window__copy:hover {
  background: rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.8);
  border-color: rgba(255,255,255,0.2);
}
.code-window__copy.copied {
  color: #28c840;
  border-color: rgba(40, 200, 64, 0.35);
  background: rgba(40, 200, 64, 0.08);
}

/* ── 代码区 ─────────────────────────────────── */
.code-window__body {
  overflow-x: auto;
}

/* 消除 VitePress 默认代码块的外层样式 */
.code-window__body :deep(div[class*="language-"]) {
  margin: 0 !important;
  border-radius: 0 !important;
  border: none !important;
  box-shadow: none !important;
}

.code-window__body :deep(pre) {
  margin: 0 !important;
  border-radius: 0 !important;
  background: #1e1e1e !important;
  padding: 1.1em 1.4em !important;
}

.code-window__body :deep(code) {
  font-family: 'JetBrains Mono', 'Fira Code', 'Menlo', monospace !important;
  font-size: 0.875rem !important;
  line-height: 1.75 !important;
}

/* 隐藏 VitePress 原生复制按钮和 lang badge */
.code-window__body :deep(.copy) { display: none !important; }
.code-window__body :deep(.lang) { display: none !important; }
</style>