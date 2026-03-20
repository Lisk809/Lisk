<template>
  <div class="ssk-root">
    <!-- floating petals -->
    <div class="ssk-petals" aria-hidden="true">
      <span
        v-for="p in petals"
        :key="p.id"
        class="ssk-petal"
        :style="p.style"
      />
    </div>

    <div class="ssk-inner">
      <!-- header -->
      <header class="ssk-header">
        <p class="ssk-label">Sticker Gacha · 表情包抽取</p>
        <h2 class="ssk-title">铃芽<span>表情包</span></h2>
        <p class="ssk-sub">{{ loaded ? `共收录 ${totalCount} 个表情包` : '加载清单中…' }}</p>
      </header>

      <!-- card -->
      <div class="ssk-card">
        <!-- skeleton -->
        <div v-if="imgLoading" class="ssk-skeleton">
          <div class="ssk-sk-img" />
          <div class="ssk-sk-line" style="width:120px" />
          <div class="ssk-sk-line" style="width:72px;height:10px;opacity:.55" />
        </div>

        <!-- sticker -->
        <Transition name="ssk-fade" mode="out-in">
          <div v-if="!imgLoading && current" :key="current.url" class="ssk-sticker">
            <div class="ssk-img-wrap">
              <img
                class="ssk-img"
                :src="current.url"
                :alt="current.name"
                @load="imgLoading = false"
                @error="onImgError"
              />
            </div>
            <p class="ssk-name">{{ current.name }}</p>
            <span class="ssk-tag">🐱 {{ folderLabel(current.folder) }}</span>
          </div>

          <div v-else-if="!imgLoading && loaded && !current" class="ssk-empty">
            <span class="ssk-cat">🐱</span>
            <p>点击下方按钮<br />随机获取一张铃芽表情包</p>
          </div>

          <div v-else-if="!loaded && !error" class="ssk-empty">
            <span class="ssk-cat" style="animation:none;font-size:32px;opacity:.35">⏳</span>
            <p>正在加载表情包清单…</p>
          </div>

          <div v-else-if="error" class="ssk-error">
            😿 清单加载失败<br /><small>{{ error }}</small>
          </div>
        </Transition>
      </div>

      <!-- buttons -->
      <div class="ssk-btns">
        <button class="ssk-btn ssk-btn-main" :disabled="!loaded || imgLoading" @click="roll">
          🎲 随机一张
        </button>
        <button v-if="current" class="ssk-btn ssk-btn-sec" :disabled="!loaded || imgLoading" @click="rollSameFolder">
          🔁 同系列
        </button>
        <button v-if="current" class="ssk-btn ssk-btn-sec" :disabled="imgLoading" @click="download">
          ⬇ 下载
        </button>
      </div>

      <!-- chips -->
      <div v-if="loaded" class="ssk-chips">
        <span class="ssk-chip">合集 <b>{{ folderCount }}</b> 个</span>
        <span class="ssk-chip">已抽 <b>{{ rollCount }}</b> 次</span>
        <span v-if="current" class="ssk-chip">当前 <b>{{ folderLabel(current.folder) }}</b></span>
      </div>

      <p class="ssk-footer">
        表情包来源
        <a href="https://github.com/SamuNatsu/suzume-stickers" target="_blank" rel="noopener">
          suzume-stickers
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// ── constants ──────────────────────────────────────────────────────────────
const BASE = 'https://raw.githubusercontent.com/SamuNatsu/suzume-stickers/refs/heads/main'

// ── state ──────────────────────────────────────────────────────────────────
const manifest   = ref({})
const loaded     = ref(false)
const error      = ref('')
const current    = ref(null)
const imgLoading = ref(false)
const rollCount  = ref(0)
const petals     = ref([])

// ── computed ───────────────────────────────────────────────────────────────
const allItems = computed(() => {
  const items = []
  for (const [folder, names] of Object.entries(manifest.value)) {
    for (const name of names) {
      items.push({
        folder,
        name,
        url: `${BASE}/stickers/${folder}/${encodeURIComponent(name)}.webp`,
      })
    }
  }
  return items
})

const totalCount  = computed(() => allItems.value.length)
const folderCount = computed(() => Object.keys(manifest.value).length)

// ── helpers ────────────────────────────────────────────────────────────────
function folderLabel(folder) {
  if (folder === 'bili')     return 'Bilibili 粉丝装扮'
  if (folder === 'emotelab') return 'EmoteLab 动态'
  if (folder === 'misc')     return '其他合集'
  return `撕梓咩 ${folder}`
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// ── actions ────────────────────────────────────────────────────────────────
function roll() {
  if (!allItems.value.length) return
  imgLoading.value = true
  current.value = pickRandom(allItems.value)
  rollCount.value++
}

function rollSameFolder() {
  if (!current.value) return
  const same = allItems.value.filter(i => i.folder === current.value.folder)
  if (same.length <= 1) { roll(); return }
  imgLoading.value = true
  let item
  do { item = pickRandom(same) } while (item.url === current.value.url)
  current.value = item
  rollCount.value++
}

function onImgError() {
  imgLoading.value = false
  roll()
}

async function download() {
  if (!current.value) return
  try {
    const res  = await fetch(current.value.url)
    const blob = await res.blob()
    const a    = document.createElement('a')
    a.href     = URL.createObjectURL(blob)
    a.download = `${current.value.name}.webp`
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 5000)
  } catch {
    alert('下载失败，请手动右键保存图片')
  }
}

// ── lifecycle ──────────────────────────────────────────────────────────────
onMounted(async () => {
  // generate petals (client-only, safe for SSR)
  petals.value = Array.from({ length: 16 }, (_, i) => {
    const size = 6 + Math.random() * 8
    const hue  = 12 + Math.random() * 20
    const sat  = 70 + Math.random() * 20
    const lit  = 78 + Math.random() * 12
    return {
      id: i,
      style: [
        `left:${Math.random() * 100}%`,
        `width:${size}px`,
        `height:${size}px`,
        `background:hsl(${hue},${sat}%,${lit}%)`,
        `animation-duration:${8 + Math.random() * 10}s`,
        `animation-delay:${-Math.random() * 14}s`,
        `transform:rotate(${Math.random() * 360}deg)`,
      ].join(';'),
    }
  })

  // fetch manifest
  try {
    const res = await fetch(`${BASE}/manifest.json`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    manifest.value = await res.json()
    loaded.value = true
  } catch (e) {
    error.value = e.message || '网络错误'
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&family=Kaisei+Opti:wght@400;700&display=swap');

/* ── tokens ────────────────────────────────────────────────────────────── */
.ssk-root {
  --ssk-cream:  #fdf6ee;
  --ssk-warm:   #f5e6d3;
  --ssk-blush:  #f2c4b0;
  --ssk-coral:  #e8856a;
  --ssk-deep:   #c85c3f;
  --ssk-ink:    #3a2318;
  --ssk-muted:  #9a7060;
  --ssk-card:   rgba(255, 255, 255, 0.72);
  --ssk-shadow: rgba(200, 110, 80, 0.18);

  position: relative;
  background: var(--ssk-cream);
  border-radius: 24px;
  overflow: hidden;
  padding: 48px 24px 40px;
  font-family: 'Zen Maru Gothic', sans-serif;
  color: var(--ssk-ink);
  /* reset any VitePress global styles that might bleed in */
  line-height: 1.5;
}

/* ── blobs ─────────────────────────────────────────────────────────────── */
.ssk-root::before,
.ssk-root::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.ssk-root::before {
  width: 440px; height: 440px;
  background: radial-gradient(circle, #f9d4c2 0%, transparent 70%);
  top: -140px; right: -100px;
  animation: ssk-drift 14s ease-in-out infinite alternate;
}
.ssk-root::after {
  width: 320px; height: 320px;
  background: radial-gradient(circle, #fde8d0 0%, transparent 70%);
  bottom: -80px; left: -60px;
  animation: ssk-drift 18s ease-in-out infinite alternate-reverse;
}

@keyframes ssk-drift {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(24px, 16px) scale(1.08); }
}

/* ── petals ────────────────────────────────────────────────────────────── */
.ssk-petals {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.ssk-petal {
  position: absolute;
  top: -20px;
  border-radius: 50% 0;
  opacity: 0;
  animation: ssk-fall linear infinite;
}
@keyframes ssk-fall {
  0%   { opacity: 0;   transform: translateY(0)       rotate(0deg); }
  10%  { opacity: 0.6; }
  90%  { opacity: 0.35; }
  100% { opacity: 0;   transform: translateY(108%) rotate(720deg); }
}

/* ── inner ─────────────────────────────────────────────────────────────── */
.ssk-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

/* ── header ────────────────────────────────────────────────────────────── */
.ssk-header {
  text-align: center;
  margin-bottom: 28px;
}
.ssk-label {
  font-family: 'Kaisei Opti', serif;
  font-size: 10px;
  letter-spacing: .32em;
  text-transform: uppercase;
  color: var(--ssk-coral);
  margin-bottom: 8px;
}
.ssk-title {
  font-family: 'Kaisei Opti', serif;
  font-size: clamp(1.7rem, 5vw, 2.6rem);
  font-weight: 700;
  color: var(--ssk-ink);
  line-height: 1.2;
  margin: 0 0 6px;
  /* override VitePress heading styles */
  border: none;
  padding: 0;
}
.ssk-title span { color: var(--ssk-coral); }
.ssk-sub {
  font-size: 12px;
  color: var(--ssk-muted);
  letter-spacing: .04em;
  margin: 0;
}

/* ── card ──────────────────────────────────────────────────────────────── */
.ssk-card {
  width: 100%;
  max-width: 380px;
  background: var(--ssk-card);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1.5px solid rgba(255, 255, 255, 0.88);
  border-radius: 24px;
  box-shadow: 0 8px 40px var(--ssk-shadow), 0 2px 0 rgba(255,255,255,0.7) inset;
  overflow: hidden;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 24px 22px;
  position: relative;
}
.ssk-card::before {
  content: '';
  position: absolute;
  top: 0; left: 20px; right: 20px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--ssk-blush) 30%, var(--ssk-coral) 50%, var(--ssk-blush) 70%, transparent);
  border-radius: 0 0 2px 2px;
}

/* ── skeleton ──────────────────────────────────────────────────────────── */
.ssk-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}
.ssk-sk-img {
  width: 200px; height: 200px;
  border-radius: 12px;
  background: linear-gradient(90deg, var(--ssk-warm) 25%, var(--ssk-blush) 50%, var(--ssk-warm) 75%);
  background-size: 400% 100%;
  animation: ssk-shimmer 1.4s infinite;
}
.ssk-sk-line {
  height: 14px;
  border-radius: 7px;
  background: linear-gradient(90deg, var(--ssk-warm) 25%, var(--ssk-blush) 50%, var(--ssk-warm) 75%);
  background-size: 400% 100%;
  animation: ssk-shimmer 1.4s infinite .2s;
}
@keyframes ssk-shimmer {
  0%   { background-position: 100% 50%; }
  100% { background-position:   0% 50%; }
}

/* ── empty / error states ──────────────────────────────────────────────── */
.ssk-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  opacity: .55;
  text-align: center;
}
.ssk-empty p { font-size: 13px; color: var(--ssk-muted); line-height: 1.7; margin: 0; }
.ssk-cat { font-size: 48px; display: block; animation: ssk-bob 3s ease-in-out infinite; }
@keyframes ssk-bob {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}
.ssk-error {
  text-align: center;
  color: var(--ssk-deep);
  font-size: 13px;
  background: rgba(232, 133, 106, 0.12);
  border: 1px solid rgba(232, 133, 106, 0.3);
  border-radius: 12px;
  padding: 14px 20px;
  line-height: 1.7;
}
.ssk-error small { opacity: .75; }

/* ── sticker ───────────────────────────────────────────────────────────── */
.ssk-sticker {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
}
.ssk-img-wrap {
  position: relative;
  display: inline-flex;
}
.ssk-img-wrap::after {
  content: '';
  position: absolute;
  inset: -6px;
  border-radius: 16px;
  background: radial-gradient(ellipse at 30% 20%, rgba(248, 180, 140, 0.32), transparent 60%);
  pointer-events: none;
}
.ssk-img {
  display: block;
  max-width: 240px;
  max-height: 240px;
  width: auto;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(200, 90, 60, 0.2);
  transition: transform .3s cubic-bezier(.34, 1.56, .64, 1);
}
.ssk-img:hover { transform: scale(1.05) rotate(-1.5deg); }
.ssk-name {
  font-family: 'Kaisei Opti', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ssk-ink);
  margin: 0;
}
.ssk-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  letter-spacing: .07em;
  color: var(--ssk-coral);
  background: rgba(232, 133, 106, 0.1);
  border: 1px solid rgba(232, 133, 106, 0.25);
  border-radius: 20px;
  padding: 3px 10px;
}

/* ── transition ────────────────────────────────────────────────────────── */
.ssk-fade-enter-active { transition: all .38s cubic-bezier(.34, 1.56, .64, 1); }
.ssk-fade-leave-active { transition: all .22s ease; }
.ssk-fade-enter-from  { opacity: 0; transform: scale(.88) translateY(14px); }
.ssk-fade-leave-to    { opacity: 0; transform: scale(.95) translateY(-6px); }

/* ── buttons ───────────────────────────────────────────────────────────── */
.ssk-btns {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}
.ssk-btn {
  cursor: pointer;
  border: none;
  font-family: 'Zen Maru Gothic', sans-serif;
  font-weight: 700;
  border-radius: 50px;
  transition: all .18s cubic-bezier(.34, 1.56, .64, 1);
  position: relative;
  overflow: hidden;
  /* reset VitePress button styles */
  outline: none;
  text-decoration: none;
}
.ssk-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0);
  transition: background .14s;
}
.ssk-btn:hover::before { background: rgba(255,255,255,0.15); }
.ssk-btn:active { transform: scale(.93) !important; }
.ssk-btn:disabled { opacity: .5; cursor: not-allowed; transform: none !important; }

.ssk-btn-main {
  background: linear-gradient(135deg, var(--ssk-coral) 0%, var(--ssk-deep) 100%);
  color: #fff;
  font-size: 14px;
  padding: 13px 30px;
  letter-spacing: .06em;
  box-shadow: 0 6px 22px rgba(200, 90, 60, 0.36), 0 2px 0 rgba(255,255,255,0.16) inset;
}
.ssk-btn-main:not(:disabled):hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 10px 28px rgba(200, 90, 60, 0.44);
}

.ssk-btn-sec {
  background: var(--ssk-card);
  color: var(--ssk-coral);
  font-size: 12px;
  padding: 12px 18px;
  letter-spacing: .04em;
  border: 1.5px solid rgba(232, 133, 106, 0.38);
  box-shadow: 0 3px 10px var(--ssk-shadow);
}
.ssk-btn-sec:not(:disabled):hover {
  transform: translateY(-2px) scale(1.02);
  border-color: var(--ssk-coral);
}

/* ── chips ─────────────────────────────────────────────────────────────── */
.ssk-chips {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 14px;
}
.ssk-chip {
  font-size: 11px;
  letter-spacing: .05em;
  color: var(--ssk-muted);
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(200, 140, 110, 0.2);
  border-radius: 20px;
  padding: 3px 11px;
}
.ssk-chip b { color: var(--ssk-coral); }

/* ── footer ────────────────────────────────────────────────────────────── */
.ssk-footer {
  margin-top: 24px;
  font-size: 10px;
  color: var(--ssk-muted);
  letter-spacing: .08em;
  opacity: .65;
  text-align: center;
}
.ssk-footer a {
  color: var(--ssk-coral);
  text-decoration: none;
}
.ssk-footer a:hover { text-decoration: underline; }
</style>
