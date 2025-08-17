import { R as p } from './chunks/theme.CAlB4Z-k.js'
import {
  R as s,
  aB as i,
  aC as u,
  aD as c,
  aE as l,
  aF as f,
  aG as d,
  aH as m,
  aI as h,
  aJ as g,
  aK as A,
  d as v,
  u as C,
  v as R,
  s as w,
  aL as y,
  aM as P,
  aN as E,
  ap as b
} from './chunks/framework.B-lDWq_f.js'
function r(e) {
  if (e.extends) {
    const a = r(e.extends)
    return {
      ...a,
      ...e,
      async enhanceApp(t) {
        ;(a.enhanceApp && (await a.enhanceApp(t)),
          e.enhanceApp && (await e.enhanceApp(t)))
      }
    }
  }
  return e
}
const n = r(p),
  S = v({
    name: 'VitePressApp',
    setup() {
      const { site: e, lang: a, dir: t } = C()
      return (
        R(() => {
          w(() => {
            ;((document.documentElement.lang = a.value),
              (document.documentElement.dir = t.value))
          })
        }),
        e.value.router.prefetchLinks && y(),
        P(),
        E(),
        n.setup && n.setup(),
        () => b(n.Layout)
      )
    }
  })
async function T() {
  globalThis.__VITEPRESS__ = !0
  const e = F(),
    a = D()
  a.provide(u, e)
  const t = c(e.route)
  return (
    a.provide(l, t),
    a.component('Content', f),
    a.component('ClientOnly', d),
    Object.defineProperties(a.config.globalProperties, {
      $frontmatter: {
        get() {
          return t.frontmatter.value
        }
      },
      $params: {
        get() {
          return t.page.value.params
        }
      }
    }),
    n.enhanceApp && (await n.enhanceApp({ app: a, router: e, siteData: m })),
    { app: a, router: e, data: t }
  )
}
function D() {
  return A(S)
}
function F() {
  let e = s
  return h((a) => {
    let t = g(a),
      o = null
    return (
      t && (e && (t = t.replace(/\.js$/, '.lean.js')), (o = import(t))),
      s && (e = !1),
      o
    )
  }, n.NotFound)
}
s &&
  T().then(({ app: e, router: a, data: t }) => {
    a.go().then(() => {
      ;(i(a.route, t.site), e.mount('#app'))
    })
  })
export { T as createApp }
