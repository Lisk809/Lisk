/**
 * @vue/shared v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Zs(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const re = {},
  Lt = [],
  He = () => {},
  vl = () => !1,
  un = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  er = (e) => e.startsWith('onUpdate:'),
  de = Object.assign,
  tr = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  yl = Object.prototype.hasOwnProperty,
  ee = (e, t) => yl.call(e, t),
  K = Array.isArray,
  Ft = (e) => fn(e) === '[object Map]',
  bi = (e) => fn(e) === '[object Set]',
  xr = (e) => fn(e) === '[object Date]',
  q = (e) => typeof e == 'function',
  ce = (e) => typeof e == 'string',
  We = (e) => typeof e == 'symbol',
  se = (e) => e !== null && typeof e == 'object',
  _i = (e) => (se(e) || q(e)) && q(e.then) && q(e.catch),
  wi = Object.prototype.toString,
  fn = (e) => wi.call(e),
  bl = (e) => fn(e).slice(8, -1),
  Si = (e) => fn(e) === '[object Object]',
  nr = (e) =>
    ce(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Nt = Zs(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Zn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  _l = /-(\w)/g,
  $e = Zn((e) => e.replace(_l, (t, n) => (n ? n.toUpperCase() : ''))),
  wl = /\B([A-Z])/g,
  ht = Zn((e) => e.replace(wl, '-$1').toLowerCase()),
  es = Zn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ln = Zn((e) => (e ? `on${es(e)}` : '')),
  at = (e, t) => !Object.is(e, t),
  Fn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Hs = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n
    })
  },
  Ds = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  Sl = (e) => {
    const t = ce(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Er
const ts = () =>
  Er ||
  (Er =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function ns(e) {
  if (K(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ce(s) ? Cl(s) : ns(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (ce(e) || se(e)) return e
}
const Tl = /;(?![^(]*\))/g,
  xl = /:([^]+)/,
  El = /\/\*[^]*?\*\//g
function Cl(e) {
  const t = {}
  return (
    e
      .replace(El, '')
      .split(Tl)
      .forEach((n) => {
        if (n) {
          const s = n.split(xl)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function ss(e) {
  let t = ''
  if (ce(e)) t = e
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const s = ss(e[n])
      s && (t += s + ' ')
    }
  else if (se(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
function tf(e) {
  if (!e) return null
  let { class: t, style: n } = e
  return (t && !ce(t) && (e.class = ss(t)), n && (e.style = ns(n)), e)
}
const Al =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Rl = Zs(Al)
function Ti(e) {
  return !!e || e === ''
}
function Ml(e, t) {
  if (e.length !== t.length) return !1
  let n = !0
  for (let s = 0; n && s < e.length; s++) n = Vn(e[s], t[s])
  return n
}
function Vn(e, t) {
  if (e === t) return !0
  let n = xr(e),
    s = xr(t)
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1
  if (((n = We(e)), (s = We(t)), n || s)) return e === t
  if (((n = K(e)), (s = K(t)), n || s)) return n && s ? Ml(e, t) : !1
  if (((n = se(e)), (s = se(t)), n || s)) {
    if (!n || !s) return !1
    const r = Object.keys(e).length,
      i = Object.keys(t).length
    if (r !== i) return !1
    for (const o in e) {
      const l = e.hasOwnProperty(o),
        c = t.hasOwnProperty(o)
      if ((l && !c) || (!l && c) || !Vn(e[o], t[o])) return !1
    }
  }
  return String(e) === String(t)
}
const xi = (e) => !!(e && e.__v_isRef === !0),
  Ol = (e) =>
    ce(e)
      ? e
      : e == null
        ? ''
        : K(e) || (se(e) && (e.toString === wi || !q(e.toString)))
          ? xi(e)
            ? Ol(e.value)
            : JSON.stringify(e, Ei, 2)
          : String(e),
  Ei = (e, t) =>
    xi(t)
      ? Ei(e, t.value)
      : Ft(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[ms(s, i) + ' =>'] = r), n),
              {}
            )
          }
        : bi(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => ms(n)) }
          : We(t)
            ? ms(t)
            : se(t) && !K(t) && !Si(t)
              ? String(t)
              : t,
  ms = (e, t = '') => {
    var n
    return We(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
function Pl(e) {
  return e == null
    ? 'initial'
    : typeof e == 'string'
      ? e === ''
        ? ' '
        : e
      : String(e)
}
/**
 * @vue/reactivity v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let we
class Il {
  constructor(t = !1) {
    ;((this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = we),
      !t && we && (this.index = (we.scopes || (we.scopes = [])).push(this) - 1))
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = we
      try {
        return ((we = this), t())
      } finally {
        we = n
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = we), (we = this))
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((we = this.prevScope), (this.prevScope = void 0))
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function Ci() {
  return we
}
function Ll(e, t = !1) {
  we && we.cleanups.push(e)
}
let oe
const vs = new WeakSet()
class Ai {
  constructor(t) {
    ;((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      we && we.active && we.effects.push(this))
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), vs.has(this) && (vs.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Mi(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;((this.flags |= 2), Cr(this), Oi(this))
    const t = oe,
      n = Ve
    ;((oe = this), (Ve = !0))
    try {
      return this.fn()
    } finally {
      ;(Pi(this), (oe = t), (Ve = n), (this.flags &= -3))
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) ir(t)
      ;((this.deps = this.depsTail = void 0),
        Cr(this),
        this.onStop && this.onStop(),
        (this.flags &= -2))
    }
  }
  trigger() {
    this.flags & 64
      ? vs.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty()
  }
  runIfDirty() {
    $s(this) && this.run()
  }
  get dirty() {
    return $s(this)
  }
}
let Ri = 0,
  Xt,
  Yt
function Mi(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;((e.next = Yt), (Yt = e))
    return
  }
  ;((e.next = Xt), (Xt = e))
}
function sr() {
  Ri++
}
function rr() {
  if (--Ri > 0) return
  if (Yt) {
    let t = Yt
    for (Yt = void 0; t; ) {
      const n = t.next
      ;((t.next = void 0), (t.flags &= -9), (t = n))
    }
  }
  let e
  for (; Xt; ) {
    let t = Xt
    for (Xt = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function Oi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t))
}
function Pi(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    ;(s.version === -1 ? (s === n && (n = r), ir(s), Fl(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r))
  }
  ;((e.deps = t), (e.depsTail = n))
}
function $s(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Ii(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function Ii(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === tn) ||
    ((e.globalVersion = tn),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !$s(e)))
  )
    return
  e.flags |= 2
  const t = e.dep,
    n = oe,
    s = Ve
  ;((oe = e), (Ve = !0))
  try {
    Oi(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || at(r, e._value)) &&
      ((e.flags |= 128), (e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;((oe = n), (Ve = s), Pi(e), (e.flags &= -3))
  }
}
function ir(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let i = n.computed.deps; i; i = i.nextDep) ir(i, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Fl(e) {
  const { prevDep: t, nextDep: n } = e
  ;(t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0)))
}
let Ve = !0
const Li = []
function Ze() {
  ;(Li.push(Ve), (Ve = !1))
}
function et() {
  const e = Li.pop()
  Ve = e === void 0 ? !0 : e
}
function Cr(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = oe
    oe = void 0
    try {
      t()
    } finally {
      oe = n
    }
  }
}
let tn = 0
class Nl {
  constructor(t, n) {
    ;((this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0))
  }
}
class rs {
  constructor(t) {
    ;((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0))
  }
  track(t) {
    if (!oe || !Ve || oe === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== oe)
      ((n = this.activeLink = new Nl(oe, this)),
        oe.deps
          ? ((n.prevDep = oe.depsTail),
            (oe.depsTail.nextDep = n),
            (oe.depsTail = n))
          : (oe.deps = oe.depsTail = n),
        Fi(n))
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;((s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = oe.depsTail),
        (n.nextDep = void 0),
        (oe.depsTail.nextDep = n),
        (oe.depsTail = n),
        oe.deps === n && (oe.deps = s))
    }
    return n
  }
  trigger(t) {
    ;(this.version++, tn++, this.notify(t))
  }
  notify(t) {
    sr()
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify()
    } finally {
      rr()
    }
  }
}
function Fi(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) Fi(s)
    }
    const n = e.dep.subs
    ;(n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e))
  }
}
const kn = new WeakMap(),
  _t = Symbol(''),
  js = Symbol(''),
  nn = Symbol('')
function Te(e, t, n) {
  if (Ve && oe) {
    let s = kn.get(e)
    s || kn.set(e, (s = new Map()))
    let r = s.get(n)
    ;(r || (s.set(n, (r = new rs())), (r.map = s), (r.key = n)), r.track())
  }
}
function Je(e, t, n, s, r, i) {
  const o = kn.get(e)
  if (!o) {
    tn++
    return
  }
  const l = (c) => {
    c && c.trigger()
  }
  if ((sr(), t === 'clear')) o.forEach(l)
  else {
    const c = K(e),
      u = c && nr(n)
    if (c && n === 'length') {
      const a = Number(s)
      o.forEach((f, p) => {
        ;(p === 'length' || p === nn || (!We(p) && p >= a)) && l(f)
      })
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(nn)), t)
      ) {
        case 'add':
          c ? u && l(o.get('length')) : (l(o.get(_t)), Ft(e) && l(o.get(js)))
          break
        case 'delete':
          c || (l(o.get(_t)), Ft(e) && l(o.get(js)))
          break
        case 'set':
          Ft(e) && l(o.get(_t))
          break
      }
  }
  rr()
}
function Hl(e, t) {
  const n = kn.get(e)
  return n && n.get(t)
}
function Ot(e) {
  const t = Q(e)
  return t === e ? t : (Te(t, 'iterate', nn), De(e) ? t : t.map(me))
}
function is(e) {
  return (Te((e = Q(e)), 'iterate', nn), e)
}
const Dl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ys(this, Symbol.iterator, me)
  },
  concat(...e) {
    return Ot(this).concat(...e.map((t) => (K(t) ? Ot(t) : t)))
  },
  entries() {
    return ys(this, 'entries', (e) => ((e[1] = me(e[1])), e))
  },
  every(e, t) {
    return Ye(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return Ye(this, 'filter', e, t, (n) => n.map(me), arguments)
  },
  find(e, t) {
    return Ye(this, 'find', e, t, me, arguments)
  },
  findIndex(e, t) {
    return Ye(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Ye(this, 'findLast', e, t, me, arguments)
  },
  findLastIndex(e, t) {
    return Ye(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Ye(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return bs(this, 'includes', e)
  },
  indexOf(...e) {
    return bs(this, 'indexOf', e)
  },
  join(e) {
    return Ot(this).join(e)
  },
  lastIndexOf(...e) {
    return bs(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return Ye(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return Ut(this, 'pop')
  },
  push(...e) {
    return Ut(this, 'push', e)
  },
  reduce(e, ...t) {
    return Ar(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return Ar(this, 'reduceRight', e, t)
  },
  shift() {
    return Ut(this, 'shift')
  },
  some(e, t) {
    return Ye(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return Ut(this, 'splice', e)
  },
  toReversed() {
    return Ot(this).toReversed()
  },
  toSorted(e) {
    return Ot(this).toSorted(e)
  },
  toSpliced(...e) {
    return Ot(this).toSpliced(...e)
  },
  unshift(...e) {
    return Ut(this, 'unshift', e)
  },
  values() {
    return ys(this, 'values', me)
  }
}
function ys(e, t, n) {
  const s = is(e),
    r = s[t]()
  return (
    s !== e &&
      !De(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next()
        return (i.value && (i.value = n(i.value)), i)
      })),
    r
  )
}
const $l = Array.prototype
function Ye(e, t, n, s, r, i) {
  const o = is(e),
    l = o !== e && !De(e),
    c = o[t]
  if (c !== $l[t]) {
    const f = c.apply(e, i)
    return l ? me(f) : f
  }
  let u = n
  o !== e &&
    (l
      ? (u = function (f, p) {
          return n.call(this, me(f), p, e)
        })
      : n.length > 2 &&
        (u = function (f, p) {
          return n.call(this, f, p, e)
        }))
  const a = c.call(o, u, s)
  return l && r ? r(a) : a
}
function Ar(e, t, n, s) {
  const r = is(e)
  let i = n
  return (
    r !== e &&
      (De(e)
        ? n.length > 3 &&
          (i = function (o, l, c) {
            return n.call(this, o, l, c, e)
          })
        : (i = function (o, l, c) {
            return n.call(this, o, me(l), c, e)
          })),
    r[t](i, ...s)
  )
}
function bs(e, t, n) {
  const s = Q(e)
  Te(s, 'iterate', nn)
  const r = s[t](...n)
  return (r === -1 || r === !1) && cr(n[0]) ? ((n[0] = Q(n[0])), s[t](...n)) : r
}
function Ut(e, t, n = []) {
  ;(Ze(), sr())
  const s = Q(e)[t].apply(e, n)
  return (rr(), et(), s)
}
const jl = Zs('__proto__,__v_isRef,__isVue'),
  Ni = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(We)
  )
function Vl(e) {
  We(e) || (e = String(e))
  const t = Q(this)
  return (Te(t, 'has', e), t.hasOwnProperty(e))
}
class Hi {
  constructor(t = !1, n = !1) {
    ;((this._isReadonly = t), (this._isShallow = n))
  }
  get(t, n, s) {
    if (n === '__v_skip') return t.__v_skip
    const r = this._isReadonly,
      i = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return s === (r ? (i ? zl : Vi) : i ? ji : $i).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = K(t)
    if (!r) {
      let c
      if (o && (c = Dl[n])) return c
      if (n === 'hasOwnProperty') return Vl
    }
    const l = Reflect.get(t, n, fe(t) ? t : s)
    return (We(n) ? Ni.has(n) : jl(n)) || (r || Te(t, 'get', n), i)
      ? l
      : fe(l)
        ? o && nr(n)
          ? l
          : l.value
        : se(l)
          ? r
            ? dn(l)
            : Vt(l)
          : l
  }
}
class Di extends Hi {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    if (!this._isShallow) {
      const c = ft(i)
      if (
        (!De(s) && !ft(s) && ((i = Q(i)), (s = Q(s))), !K(t) && fe(i) && !fe(s))
      )
        return c ? !1 : ((i.value = s), !0)
    }
    const o = K(t) && nr(n) ? Number(n) < t.length : ee(t, n),
      l = Reflect.set(t, n, s, fe(t) ? t : r)
    return (
      t === Q(r) && (o ? at(s, i) && Je(t, 'set', n, s) : Je(t, 'add', n, s)),
      l
    )
  }
  deleteProperty(t, n) {
    const s = ee(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return (r && s && Je(t, 'delete', n, void 0), r)
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return ((!We(n) || !Ni.has(n)) && Te(t, 'has', n), s)
  }
  ownKeys(t) {
    return (Te(t, 'iterate', K(t) ? 'length' : _t), Reflect.ownKeys(t))
  }
}
class kl extends Hi {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const Wl = new Di(),
  Bl = new kl(),
  Ul = new Di(!0)
const Vs = (e) => e,
  wn = (e) => Reflect.getPrototypeOf(e)
function Kl(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = Q(r),
      o = Ft(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      c = e === 'keys' && o,
      u = r[e](...s),
      a = n ? Vs : t ? Wn : me
    return (
      !t && Te(i, 'iterate', c ? js : _t),
      {
        next() {
          const { value: f, done: p } = u.next()
          return p
            ? { value: f, done: p }
            : { value: l ? [a(f[0]), a(f[1])] : a(f), done: p }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function Sn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function ql(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = Q(i),
        l = Q(r)
      e || (at(r, l) && Te(o, 'get', r), Te(o, 'get', l))
      const { has: c } = wn(o),
        u = t ? Vs : e ? Wn : me
      if (c.call(o, r)) return u(i.get(r))
      if (c.call(o, l)) return u(i.get(l))
      i !== o && i.get(r)
    },
    get size() {
      const r = this.__v_raw
      return (!e && Te(Q(r), 'iterate', _t), Reflect.get(r, 'size', r))
    },
    has(r) {
      const i = this.__v_raw,
        o = Q(i),
        l = Q(r)
      return (
        e || (at(r, l) && Te(o, 'has', r), Te(o, 'has', l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      )
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        c = Q(l),
        u = t ? Vs : e ? Wn : me
      return (
        !e && Te(c, 'iterate', _t),
        l.forEach((a, f) => r.call(i, u(a), u(f), o))
      )
    }
  }
  return (
    de(
      n,
      e
        ? {
            add: Sn('add'),
            set: Sn('set'),
            delete: Sn('delete'),
            clear: Sn('clear')
          }
        : {
            add(r) {
              !t && !De(r) && !ft(r) && (r = Q(r))
              const i = Q(this)
              return (
                wn(i).has.call(i, r) || (i.add(r), Je(i, 'add', r, r)),
                this
              )
            },
            set(r, i) {
              !t && !De(i) && !ft(i) && (i = Q(i))
              const o = Q(this),
                { has: l, get: c } = wn(o)
              let u = l.call(o, r)
              u || ((r = Q(r)), (u = l.call(o, r)))
              const a = c.call(o, r)
              return (
                o.set(r, i),
                u ? at(i, a) && Je(o, 'set', r, i) : Je(o, 'add', r, i),
                this
              )
            },
            delete(r) {
              const i = Q(this),
                { has: o, get: l } = wn(i)
              let c = o.call(i, r)
              ;(c || ((r = Q(r)), (c = o.call(i, r))), l && l.call(i, r))
              const u = i.delete(r)
              return (c && Je(i, 'delete', r, void 0), u)
            },
            clear() {
              const r = Q(this),
                i = r.size !== 0,
                o = r.clear()
              return (i && Je(r, 'clear', void 0, void 0), o)
            }
          }
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = Kl(r, e, t)
    }),
    n
  )
}
function or(e, t) {
  const n = ql(e, t)
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(ee(n, r) && r in s ? n : s, r, i)
}
const Gl = { get: or(!1, !1) },
  Xl = { get: or(!1, !0) },
  Yl = { get: or(!0, !1) }
const $i = new WeakMap(),
  ji = new WeakMap(),
  Vi = new WeakMap(),
  zl = new WeakMap()
function Jl(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Ql(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Jl(bl(e))
}
function Vt(e) {
  return ft(e) ? e : lr(e, !1, Wl, Gl, $i)
}
function Zl(e) {
  return lr(e, !1, Ul, Xl, ji)
}
function dn(e) {
  return lr(e, !0, Bl, Yl, Vi)
}
function lr(e, t, n, s, r) {
  if (!se(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = Ql(e)
  if (i === 0) return e
  const o = r.get(e)
  if (o) return o
  const l = new Proxy(e, i === 2 ? s : n)
  return (r.set(e, l), l)
}
function wt(e) {
  return ft(e) ? wt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function ft(e) {
  return !!(e && e.__v_isReadonly)
}
function De(e) {
  return !!(e && e.__v_isShallow)
}
function cr(e) {
  return e ? !!e.__v_raw : !1
}
function Q(e) {
  const t = e && e.__v_raw
  return t ? Q(t) : e
}
function Nn(e) {
  return (
    !ee(e, '__v_skip') && Object.isExtensible(e) && Hs(e, '__v_skip', !0),
    e
  )
}
const me = (e) => (se(e) ? Vt(e) : e),
  Wn = (e) => (se(e) ? dn(e) : e)
function fe(e) {
  return e ? e.__v_isRef === !0 : !1
}
function ut(e) {
  return ki(e, !1)
}
function Y(e) {
  return ki(e, !0)
}
function ki(e, t) {
  return fe(e) ? e : new ec(e, t)
}
class ec {
  constructor(t, n) {
    ;((this.dep = new rs()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : Q(t)),
      (this._value = n ? t : me(t)),
      (this.__v_isShallow = n))
  }
  get value() {
    return (this.dep.track(), this._value)
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || De(t) || ft(t)
    ;((t = s ? t : Q(t)),
      at(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : me(t)),
        this.dep.trigger()))
  }
}
function ar(e) {
  return fe(e) ? e.value : e
}
function Z(e) {
  return q(e) ? e() : ar(e)
}
const tc = {
  get: (e, t, n) => (t === '__v_raw' ? e : ar(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t]
    return fe(r) && !fe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  }
}
function Wi(e) {
  return wt(e) ? e : new Proxy(e, tc)
}
class nc {
  constructor(t) {
    ;((this.__v_isRef = !0), (this._value = void 0))
    const n = (this.dep = new rs()),
      { get: s, set: r } = t(n.track.bind(n), n.trigger.bind(n))
    ;((this._get = s), (this._set = r))
  }
  get value() {
    return (this._value = this._get())
  }
  set value(t) {
    this._set(t)
  }
}
function sc(e) {
  return new nc(e)
}
class rc {
  constructor(t, n, s) {
    ;((this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0),
      (this._value = void 0))
  }
  get value() {
    const t = this._object[this._key]
    return (this._value = t === void 0 ? this._defaultValue : t)
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return Hl(Q(this._object), this._key)
  }
}
class ic {
  constructor(t) {
    ;((this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0))
  }
  get value() {
    return (this._value = this._getter())
  }
}
function oc(e, t, n) {
  return fe(e)
    ? e
    : q(e)
      ? new ic(e)
      : se(e) && arguments.length > 1
        ? lc(e, t, n)
        : ut(e)
}
function lc(e, t, n) {
  const s = e[t]
  return fe(s) ? s : new rc(e, t, n)
}
class cc {
  constructor(t, n, s) {
    ;((this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new rs(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = tn - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s))
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && oe !== this))
      return (Mi(this, !0), !0)
  }
  get value() {
    const t = this.dep.track()
    return (Ii(this), t && (t.version = this.dep.version), this._value)
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function ac(e, t, n = !1) {
  let s, r
  return (q(e) ? (s = e) : ((s = e.get), (r = e.set)), new cc(s, r, n))
}
const Tn = {},
  Bn = new WeakMap()
let vt
function uc(e, t = !1, n = vt) {
  if (n) {
    let s = Bn.get(n)
    ;(s || Bn.set(n, (s = [])), s.push(e))
  }
}
function fc(e, t, n = re) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: o,
      augmentJob: l,
      call: c
    } = n,
    u = (m) => (r ? m : De(m) || r === !1 || r === 0 ? Qe(m, 1) : Qe(m))
  let a,
    f,
    p,
    g,
    b = !1,
    w = !1
  if (
    (fe(e)
      ? ((f = () => e.value), (b = De(e)))
      : wt(e)
        ? ((f = () => u(e)), (b = !0))
        : K(e)
          ? ((w = !0),
            (b = e.some((m) => wt(m) || De(m))),
            (f = () =>
              e.map((m) => {
                if (fe(m)) return m.value
                if (wt(m)) return u(m)
                if (q(m)) return c ? c(m, 2) : m()
              })))
          : q(e)
            ? t
              ? (f = c ? () => c(e, 2) : e)
              : (f = () => {
                  if (p) {
                    Ze()
                    try {
                      p()
                    } finally {
                      et()
                    }
                  }
                  const m = vt
                  vt = a
                  try {
                    return c ? c(e, 3, [g]) : e(g)
                  } finally {
                    vt = m
                  }
                })
            : (f = He),
    t && r)
  ) {
    const m = f,
      R = r === !0 ? 1 / 0 : r
    f = () => Qe(m(), R)
  }
  const j = Ci(),
    O = () => {
      ;(a.stop(), j && j.active && tr(j.effects, a))
    }
  if (i && t) {
    const m = t
    t = (...R) => {
      ;(m(...R), O())
    }
  }
  let D = w ? new Array(e.length).fill(Tn) : Tn
  const v = (m) => {
    if (!(!(a.flags & 1) || (!a.dirty && !m)))
      if (t) {
        const R = a.run()
        if (r || b || (w ? R.some(($, _) => at($, D[_])) : at(R, D))) {
          p && p()
          const $ = vt
          vt = a
          try {
            const _ = [R, D === Tn ? void 0 : w && D[0] === Tn ? [] : D, g]
            ;((D = R), c ? c(t, 3, _) : t(..._))
          } finally {
            vt = $
          }
        }
      } else a.run()
  }
  return (
    l && l(v),
    (a = new Ai(f)),
    (a.scheduler = o ? () => o(v, !1) : v),
    (g = (m) => uc(m, !1, a)),
    (p = a.onStop =
      () => {
        const m = Bn.get(a)
        if (m) {
          if (c) c(m, 4)
          else for (const R of m) R()
          Bn.delete(a)
        }
      }),
    t ? (s ? v(!0) : (D = a.run())) : o ? o(v.bind(null, !0), !0) : a.run(),
    (O.pause = a.pause.bind(a)),
    (O.resume = a.resume.bind(a)),
    (O.stop = O),
    O
  )
}
function Qe(e, t = 1 / 0, n) {
  if (t <= 0 || !se(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e
  if ((n.add(e), t--, fe(e))) Qe(e.value, t, n)
  else if (K(e)) for (let s = 0; s < e.length; s++) Qe(e[s], t, n)
  else if (bi(e) || Ft(e))
    e.forEach((s) => {
      Qe(s, t, n)
    })
  else if (Si(e)) {
    for (const s in e) Qe(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Qe(e[s], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function hn(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    os(r, t, n)
  }
}
function Be(e, t, n, s) {
  if (q(e)) {
    const r = hn(e, t, n, s)
    return (
      r &&
        _i(r) &&
        r.catch((i) => {
          os(i, t, n)
        }),
      r
    )
  }
  if (K(e)) {
    const r = []
    for (let i = 0; i < e.length; i++) r.push(Be(e[i], t, n, s))
    return r
  }
}
function os(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || re
  if (t) {
    let l = t.parent
    const c = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; l; ) {
      const a = l.ec
      if (a) {
        for (let f = 0; f < a.length; f++) if (a[f](e, c, u) === !1) return
      }
      l = l.parent
    }
    if (i) {
      ;(Ze(), hn(i, null, 10, [e, c, u]), et())
      return
    }
  }
  dc(e, n, r, s, o)
}
function dc(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const Ae = []
let Ge = -1
const Ht = []
let ot = null,
  It = 0
const Bi = Promise.resolve()
let Un = null
function pn(e) {
  const t = Un || Bi
  return e ? t.then(this ? e.bind(this) : e) : t
}
function hc(e) {
  let t = Ge + 1,
    n = Ae.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Ae[s],
      i = sn(r)
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function ur(e) {
  if (!(e.flags & 1)) {
    const t = sn(e),
      n = Ae[Ae.length - 1]
    ;(!n || (!(e.flags & 2) && t >= sn(n))
      ? Ae.push(e)
      : Ae.splice(hc(t), 0, e),
      (e.flags |= 1),
      Ui())
  }
}
function Ui() {
  Un || (Un = Bi.then(qi))
}
function Ki(e) {
  ;(K(e)
    ? Ht.push(...e)
    : ot && e.id === -1
      ? ot.splice(It + 1, 0, e)
      : e.flags & 1 || (Ht.push(e), (e.flags |= 1)),
    Ui())
}
function Rr(e, t, n = Ge + 1) {
  for (; n < Ae.length; n++) {
    const s = Ae[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      ;(Ae.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2))
    }
  }
}
function Kn(e) {
  if (Ht.length) {
    const t = [...new Set(Ht)].sort((n, s) => sn(n) - sn(s))
    if (((Ht.length = 0), ot)) {
      ot.push(...t)
      return
    }
    for (ot = t, It = 0; It < ot.length; It++) {
      const n = ot[It]
      ;(n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2))
    }
    ;((ot = null), (It = 0))
  }
}
const sn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function qi(e) {
  try {
    for (Ge = 0; Ge < Ae.length; Ge++) {
      const t = Ae[Ge]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        hn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Ge < Ae.length; Ge++) {
      const t = Ae[Ge]
      t && (t.flags &= -2)
    }
    ;((Ge = -1),
      (Ae.length = 0),
      Kn(),
      (Un = null),
      (Ae.length || Ht.length) && qi())
  }
}
let be = null,
  ls = null
function qn(e) {
  const t = be
  return ((be = e), (ls = (e && e.type.__scopeId) || null), t)
}
function nf(e) {
  ls = e
}
function sf() {
  ls = null
}
const rf = (e) => Gi
function Gi(e, t = be, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && Br(-1)
    const i = qn(t)
    let o
    try {
      o = e(...r)
    } finally {
      ;(qn(i), s._d && Br(1))
    }
    return o
  }
  return ((s._n = !0), (s._c = !0), (s._d = !0), s)
}
function of(e, t) {
  if (be === null) return e
  const n = ds(be),
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = re] = t[r]
    i &&
      (q(i) && (i = { mounted: i, updated: i }),
      i.deep && Qe(o),
      s.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: c
      }))
  }
  return e
}
function Xe(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const l = r[o]
    i && (l.oldValue = i[o].value)
    let c = l.dir[s]
    c && (Ze(), Be(c, n, 8, [e.el, l, e, t]), et())
  }
}
const Xi = Symbol('_vte'),
  Yi = (e) => e.__isTeleport,
  zt = (e) => e && (e.disabled || e.disabled === ''),
  Mr = (e) => e && (e.defer || e.defer === ''),
  Or = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
  Pr = (e) => typeof MathMLElement == 'function' && e instanceof MathMLElement,
  ks = (e, t) => {
    const n = e && e.to
    return ce(n) ? (t ? t(n) : null) : n
  },
  zi = {
    name: 'Teleport',
    __isTeleport: !0,
    process(e, t, n, s, r, i, o, l, c, u) {
      const {
          mc: a,
          pc: f,
          pbc: p,
          o: { insert: g, querySelector: b, createText: w, createComment: j }
        } = u,
        O = zt(t.props)
      let { shapeFlag: D, children: v, dynamicChildren: m } = t
      if (e == null) {
        const R = (t.el = w('')),
          $ = (t.anchor = w(''))
        ;(g(R, n, s), g($, n, s))
        const _ = (x, P) => {
            D & 16 &&
              (r && r.isCE && (r.ce._teleportTarget = x),
              a(v, x, P, r, i, o, l, c))
          },
          V = () => {
            const x = (t.target = ks(t.props, b)),
              P = Ji(x, t, w, g)
            x &&
              (o !== 'svg' && Or(x)
                ? (o = 'svg')
                : o !== 'mathml' && Pr(x) && (o = 'mathml'),
              O || (_(x, P), Hn(t, !1)))
          }
        ;(O && (_(n, $), Hn(t, !0)),
          Mr(t.props)
            ? ((t.el.__isMounted = !1),
              Ce(() => {
                ;(V(), delete t.el.__isMounted)
              }, i))
            : V())
      } else {
        if (Mr(t.props) && e.el.__isMounted === !1) {
          Ce(() => {
            zi.process(e, t, n, s, r, i, o, l, c, u)
          }, i)
          return
        }
        ;((t.el = e.el), (t.targetStart = e.targetStart))
        const R = (t.anchor = e.anchor),
          $ = (t.target = e.target),
          _ = (t.targetAnchor = e.targetAnchor),
          V = zt(e.props),
          x = V ? n : $,
          P = V ? R : _
        if (
          (o === 'svg' || Or($)
            ? (o = 'svg')
            : (o === 'mathml' || Pr($)) && (o = 'mathml'),
          m
            ? (p(e.dynamicChildren, m, x, r, i, o, l), pr(e, t, !0))
            : c || f(e, t, x, P, r, i, o, l, !1),
          O)
        )
          V
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : xn(t, n, R, u, 1)
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const M = (t.target = ks(t.props, b))
          M && xn(t, M, null, u, 0)
        } else V && xn(t, $, _, u, 1)
        Hn(t, O)
      }
    },
    remove(e, t, n, { um: s, o: { remove: r } }, i) {
      const {
        shapeFlag: o,
        children: l,
        anchor: c,
        targetStart: u,
        targetAnchor: a,
        target: f,
        props: p
      } = e
      if ((f && (r(u), r(a)), i && r(c), o & 16)) {
        const g = i || !zt(p)
        for (let b = 0; b < l.length; b++) {
          const w = l[b]
          s(w, t, n, g, !!w.dynamicChildren)
        }
      }
    },
    move: xn,
    hydrate: pc
  }
function xn(e, t, n, { o: { insert: s }, m: r }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n)
  const { el: o, anchor: l, shapeFlag: c, children: u, props: a } = e,
    f = i === 2
  if ((f && s(o, t, n), (!f || zt(a)) && c & 16))
    for (let p = 0; p < u.length; p++) r(u[p], t, n, 2)
  f && s(l, t, n)
}
function pc(
  e,
  t,
  n,
  s,
  r,
  i,
  {
    o: {
      nextSibling: o,
      parentNode: l,
      querySelector: c,
      insert: u,
      createText: a
    }
  },
  f
) {
  const p = (t.target = ks(t.props, c))
  if (p) {
    const g = zt(t.props),
      b = p._lpa || p.firstChild
    if (t.shapeFlag & 16)
      if (g)
        ((t.anchor = f(o(e), t, l(e), n, s, r, i)),
          (t.targetStart = b),
          (t.targetAnchor = b && o(b)))
      else {
        t.anchor = o(e)
        let w = b
        for (; w; ) {
          if (w && w.nodeType === 8) {
            if (w.data === 'teleport start anchor') t.targetStart = w
            else if (w.data === 'teleport anchor') {
              ;((t.targetAnchor = w),
                (p._lpa = t.targetAnchor && o(t.targetAnchor)))
              break
            }
          }
          w = o(w)
        }
        ;(t.targetAnchor || Ji(p, t, a, u), f(b && o(b), t, p, n, s, r, i))
      }
    Hn(t, g)
  }
  return t.anchor && o(t.anchor)
}
const lf = zi
function Hn(e, t) {
  const n = e.ctx
  if (n && n.ut) {
    let s, r
    for (
      t
        ? ((s = e.el), (r = e.anchor))
        : ((s = e.targetStart), (r = e.targetAnchor));
      s && s !== r;

    )
      (s.nodeType === 1 && s.setAttribute('data-v-owner', n.uid),
        (s = s.nextSibling))
    n.ut()
  }
}
function Ji(e, t, n, s) {
  const r = (t.targetStart = n('')),
    i = (t.targetAnchor = n(''))
  return ((r[Xi] = i), e && (s(r, e), s(i, e)), i)
}
const lt = Symbol('_leaveCb'),
  En = Symbol('_enterCb')
function Qi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map()
  }
  return (
    Rt(() => {
      e.isMounted = !0
    }),
    co(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const Le = [Function, Array],
  Zi = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Le,
    onEnter: Le,
    onAfterEnter: Le,
    onEnterCancelled: Le,
    onBeforeLeave: Le,
    onLeave: Le,
    onAfterLeave: Le,
    onLeaveCancelled: Le,
    onBeforeAppear: Le,
    onAppear: Le,
    onAfterAppear: Le,
    onAppearCancelled: Le
  },
  eo = (e) => {
    const t = e.subTree
    return t.component ? eo(t.component) : t
  },
  gc = {
    name: 'BaseTransition',
    props: Zi,
    setup(e, { slots: t }) {
      const n = st(),
        s = Qi()
      return () => {
        const r = t.default && fr(t.default(), !0)
        if (!r || !r.length) return
        const i = to(r),
          o = Q(e),
          { mode: l } = o
        if (s.isLeaving) return _s(i)
        const c = Ir(i)
        if (!c) return _s(i)
        let u = rn(c, o, s, n, (f) => (u = f))
        c.type !== ye && At(c, u)
        let a = n.subTree && Ir(n.subTree)
        if (a && a.type !== ye && !yt(c, a) && eo(n).type !== ye) {
          let f = rn(a, o, s, n)
          if ((At(a, f), l === 'out-in' && c.type !== ye))
            return (
              (s.isLeaving = !0),
              (f.afterLeave = () => {
                ;((s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete f.afterLeave,
                  (a = void 0))
              }),
              _s(i)
            )
          l === 'in-out' && c.type !== ye
            ? (f.delayLeave = (p, g, b) => {
                const w = no(s, a)
                ;((w[String(a.key)] = a),
                  (p[lt] = () => {
                    ;(g(),
                      (p[lt] = void 0),
                      delete u.delayedLeave,
                      (a = void 0))
                  }),
                  (u.delayedLeave = () => {
                    ;(b(), delete u.delayedLeave, (a = void 0))
                  }))
              })
            : (a = void 0)
        } else a && (a = void 0)
        return i
      }
    }
  }
function to(e) {
  let t = e[0]
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ye) {
        t = n
        break
      }
  }
  return t
}
const mc = gc
function no(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return (s || ((s = Object.create(null)), n.set(t.type, s)), s)
}
function rn(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: u,
      onAfterEnter: a,
      onEnterCancelled: f,
      onBeforeLeave: p,
      onLeave: g,
      onAfterLeave: b,
      onLeaveCancelled: w,
      onBeforeAppear: j,
      onAppear: O,
      onAfterAppear: D,
      onAppearCancelled: v
    } = t,
    m = String(e.key),
    R = no(n, e),
    $ = (x, P) => {
      x && Be(x, s, 9, P)
    },
    _ = (x, P) => {
      const M = P[1]
      ;($(x, P),
        K(x) ? x.every((S) => S.length <= 1) && M() : x.length <= 1 && M())
    },
    V = {
      mode: o,
      persisted: l,
      beforeEnter(x) {
        let P = c
        if (!n.isMounted)
          if (i) P = j || c
          else return
        x[lt] && x[lt](!0)
        const M = R[m]
        ;(M && yt(e, M) && M.el[lt] && M.el[lt](), $(P, [x]))
      },
      enter(x) {
        let P = u,
          M = a,
          S = f
        if (!n.isMounted)
          if (i) ((P = O || u), (M = D || a), (S = v || f))
          else return
        let N = !1
        const z = (x[En] = (le) => {
          N ||
            ((N = !0),
            le ? $(S, [x]) : $(M, [x]),
            V.delayedLeave && V.delayedLeave(),
            (x[En] = void 0))
        })
        P ? _(P, [x, z]) : z()
      },
      leave(x, P) {
        const M = String(e.key)
        if ((x[En] && x[En](!0), n.isUnmounting)) return P()
        $(p, [x])
        let S = !1
        const N = (x[lt] = (z) => {
          S ||
            ((S = !0),
            P(),
            z ? $(w, [x]) : $(b, [x]),
            (x[lt] = void 0),
            R[M] === e && delete R[M])
        })
        ;((R[M] = e), g ? _(g, [x, N]) : N())
      },
      clone(x) {
        const P = rn(x, t, n, s, r)
        return (r && r(P), P)
      }
    }
  return V
}
function _s(e) {
  if (cs(e)) return ((e = dt(e)), (e.children = null), e)
}
function Ir(e) {
  if (!cs(e)) return Yi(e.type) && e.children ? to(e.children) : e
  if (e.component) return e.component.subTree
  const { shapeFlag: t, children: n } = e
  if (n) {
    if (t & 16) return n[0]
    if (t & 32 && q(n.default)) return n.default()
  }
}
function At(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), At(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function fr(e, t = !1, n) {
  let s = [],
    r = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i)
    o.type === ve
      ? (o.patchFlag & 128 && r++, (s = s.concat(fr(o.children, t, l))))
      : (t || o.type !== ye) && s.push(l != null ? dt(o, { key: l }) : o)
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2
  return s
}
/*! #__NO_SIDE_EFFECTS__ */ function so(e, t) {
  return q(e) ? de({ name: e.name }, t, { setup: e }) : e
}
function ro(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function Dt(e, t, n, s, r = !1) {
  if (K(e)) {
    e.forEach((b, w) => Dt(b, t && (K(t) ? t[w] : t), n, s, r))
    return
  }
  if (St(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Dt(e, t, n, s.component.subTree)
    return
  }
  const i = s.shapeFlag & 4 ? ds(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    u = t && t.r,
    a = l.refs === re ? (l.refs = {}) : l.refs,
    f = l.setupState,
    p = Q(f),
    g = f === re ? () => !1 : (b) => ee(p, b)
  if (
    (u != null &&
      u !== c &&
      (ce(u)
        ? ((a[u] = null), g(u) && (f[u] = null))
        : fe(u) && (u.value = null)),
    q(c))
  )
    hn(c, l, 12, [o, a])
  else {
    const b = ce(c),
      w = fe(c)
    if (b || w) {
      const j = () => {
        if (e.f) {
          const O = b ? (g(c) ? f[c] : a[c]) : c.value
          r
            ? K(O) && tr(O, i)
            : K(O)
              ? O.includes(i) || O.push(i)
              : b
                ? ((a[c] = [i]), g(c) && (f[c] = a[c]))
                : ((c.value = [i]), e.k && (a[e.k] = c.value))
        } else
          b
            ? ((a[c] = o), g(c) && (f[c] = o))
            : w && ((c.value = o), e.k && (a[e.k] = o))
      }
      o ? ((j.id = -1), Ce(j, n)) : j()
    }
  }
}
let Lr = !1
const Pt = () => {
    Lr ||
      (console.error('Hydration completed but contains mismatches.'), (Lr = !0))
  },
  vc = (e) => e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  yc = (e) => e.namespaceURI.includes('MathML'),
  Cn = (e) => {
    if (e.nodeType === 1) {
      if (vc(e)) return 'svg'
      if (yc(e)) return 'mathml'
    }
  },
  An = (e) => e.nodeType === 8
function bc(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: r,
        nextSibling: i,
        parentNode: o,
        remove: l,
        insert: c,
        createComment: u
      }
    } = e,
    a = (v, m) => {
      if (!m.hasChildNodes()) {
        ;(n(null, v, m), Kn(), (m._vnode = v))
        return
      }
      ;(f(m.firstChild, v, null, null, null), Kn(), (m._vnode = v))
    },
    f = (v, m, R, $, _, V = !1) => {
      V = V || !!m.dynamicChildren
      const x = An(v) && v.data === '[',
        P = () => w(v, m, R, $, _, x),
        { type: M, ref: S, shapeFlag: N, patchFlag: z } = m
      let le = v.nodeType
      ;((m.el = v), z === -2 && ((V = !1), (m.dynamicChildren = null)))
      let B = null
      switch (M) {
        case Et:
          le !== 3
            ? m.children === ''
              ? (c((m.el = r('')), o(v), v), (B = v))
              : (B = P())
            : (v.data !== m.children && (Pt(), (v.data = m.children)),
              (B = i(v)))
          break
        case ye:
          D(v)
            ? ((B = i(v)), O((m.el = v.content.firstChild), v, R))
            : le !== 8 || x
              ? (B = P())
              : (B = i(v))
          break
        case $t:
          if ((x && ((v = i(v)), (le = v.nodeType)), le === 1 || le === 3)) {
            B = v
            const X = !m.children.length
            for (let k = 0; k < m.staticCount; k++)
              (X && (m.children += B.nodeType === 1 ? B.outerHTML : B.data),
                k === m.staticCount - 1 && (m.anchor = B),
                (B = i(B)))
            return x ? i(B) : B
          } else P()
          break
        case ve:
          x ? (B = b(v, m, R, $, _, V)) : (B = P())
          break
        default:
          if (N & 1)
            (le !== 1 || m.type.toLowerCase() !== v.tagName.toLowerCase()) &&
            !D(v)
              ? (B = P())
              : (B = p(v, m, R, $, _, V))
          else if (N & 6) {
            m.slotScopeIds = _
            const X = o(v)
            if (
              (x
                ? (B = j(v))
                : An(v) && v.data === 'teleport start'
                  ? (B = j(v, v.data, 'teleport end'))
                  : (B = i(v)),
              t(m, X, null, R, $, Cn(X), V),
              St(m) && !m.type.__asyncResolved)
            ) {
              let k
              ;(x
                ? ((k = pe(ve)),
                  (k.anchor = B ? B.previousSibling : X.lastChild))
                : (k = v.nodeType === 3 ? Do('') : pe('div')),
                (k.el = v),
                (m.component.subTree = k))
            }
          } else
            N & 64
              ? le !== 8
                ? (B = P())
                : (B = m.type.hydrate(v, m, R, $, _, V, e, g))
              : N & 128 &&
                (B = m.type.hydrate(v, m, R, $, Cn(o(v)), _, V, e, f))
      }
      return (S != null && Dt(S, null, $, m), B)
    },
    p = (v, m, R, $, _, V) => {
      V = V || !!m.dynamicChildren
      const {
          type: x,
          props: P,
          patchFlag: M,
          shapeFlag: S,
          dirs: N,
          transition: z
        } = m,
        le = x === 'input' || x === 'option'
      if (le || M !== -1) {
        N && Xe(m, null, R, 'created')
        let B = !1
        if (D(v)) {
          B = Ao(null, z) && R && R.vnode.props && R.vnode.props.appear
          const k = v.content.firstChild
          if (B) {
            const ae = k.getAttribute('class')
            ;(ae && (k.$cls = ae), z.beforeEnter(k))
          }
          ;(O(k, v, R), (m.el = v = k))
        }
        if (S & 16 && !(P && (P.innerHTML || P.textContent))) {
          let k = g(v.firstChild, m, v, R, $, _, V)
          for (; k; ) {
            Rn(v, 1) || Pt()
            const ae = k
            ;((k = k.nextSibling), l(ae))
          }
        } else if (S & 8) {
          let k = m.children
          ;(k[0] ===
            `
` &&
            (v.tagName === 'PRE' || v.tagName === 'TEXTAREA') &&
            (k = k.slice(1)),
            v.textContent !== k &&
              (Rn(v, 0) || Pt(), (v.textContent = m.children)))
        }
        if (P) {
          if (le || !V || M & 48) {
            const k = v.tagName.includes('-')
            for (const ae in P)
              ((le && (ae.endsWith('value') || ae === 'indeterminate')) ||
                (un(ae) && !Nt(ae)) ||
                ae[0] === '.' ||
                k) &&
                s(v, ae, null, P[ae], void 0, R)
          } else if (P.onClick) s(v, 'onClick', null, P.onClick, void 0, R)
          else if (M & 4 && wt(P.style)) for (const k in P.style) P.style[k]
        }
        let X
        ;((X = P && P.onVnodeBeforeMount) && Fe(X, R, m),
          N && Xe(m, null, R, 'beforeMount'),
          ((X = P && P.onVnodeMounted) || N || B) &&
            Lo(() => {
              ;(X && Fe(X, R, m),
                B && z.enter(v),
                N && Xe(m, null, R, 'mounted'))
            }, $))
      }
      return v.nextSibling
    },
    g = (v, m, R, $, _, V, x) => {
      x = x || !!m.dynamicChildren
      const P = m.children,
        M = P.length
      for (let S = 0; S < M; S++) {
        const N = x ? P[S] : (P[S] = Ne(P[S])),
          z = N.type === Et
        v
          ? (z &&
              !x &&
              S + 1 < M &&
              Ne(P[S + 1]).type === Et &&
              (c(r(v.data.slice(N.children.length)), R, i(v)),
              (v.data = N.children)),
            (v = f(v, N, $, _, V, x)))
          : z && !N.children
            ? c((N.el = r('')), R)
            : (Rn(R, 1) || Pt(), n(null, N, R, null, $, _, Cn(R), V))
      }
      return v
    },
    b = (v, m, R, $, _, V) => {
      const { slotScopeIds: x } = m
      x && (_ = _ ? _.concat(x) : x)
      const P = o(v),
        M = g(i(v), m, P, R, $, _, V)
      return M && An(M) && M.data === ']'
        ? i((m.anchor = M))
        : (Pt(), c((m.anchor = u(']')), P, M), M)
    },
    w = (v, m, R, $, _, V) => {
      if ((Rn(v.parentElement, 1) || Pt(), (m.el = null), V)) {
        const M = j(v)
        for (;;) {
          const S = i(v)
          if (S && S !== M) l(S)
          else break
        }
      }
      const x = i(v),
        P = o(v)
      return (
        l(v),
        n(null, m, P, x, R, $, Cn(P), _),
        R && ((R.vnode.el = m.el), Po(R, m.el)),
        x
      )
    },
    j = (v, m = '[', R = ']') => {
      let $ = 0
      for (; v; )
        if (((v = i(v)), v && An(v) && (v.data === m && $++, v.data === R))) {
          if ($ === 0) return i(v)
          $--
        }
      return v
    },
    O = (v, m, R) => {
      const $ = m.parentNode
      $ && $.replaceChild(v, m)
      let _ = R
      for (; _; )
        (_.vnode.el === m && (_.vnode.el = _.subTree.el = v), (_ = _.parent))
    },
    D = (v) => v.nodeType === 1 && v.tagName === 'TEMPLATE'
  return [a, f]
}
const Fr = 'data-allow-mismatch',
  _c = { 0: 'text', 1: 'children', 2: 'class', 3: 'style', 4: 'attribute' }
function Rn(e, t) {
  if (t === 0 || t === 1) for (; e && !e.hasAttribute(Fr); ) e = e.parentElement
  const n = e && e.getAttribute(Fr)
  if (n == null) return !1
  if (n === '') return !0
  {
    const s = n.split(',')
    return t === 0 && s.includes('children') ? !0 : s.includes(_c[t])
  }
}
ts().requestIdleCallback
ts().cancelIdleCallback
const St = (e) => !!e.type.__asyncLoader,
  cs = (e) => e.type.__isKeepAlive
function wc(e, t) {
  io(e, 'a', t)
}
function Sc(e, t) {
  io(e, 'da', t)
}
function io(e, t, n = xe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((as(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; )
      (cs(r.parent.vnode) && Tc(s, t, n, r), (r = r.parent))
  }
}
function Tc(e, t, n, s) {
  const r = as(t, e, s, !0)
  gn(() => {
    tr(s[t], r)
  }, n)
}
function as(e, t, n = xe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          Ze()
          const l = mn(n),
            c = Be(t, n, e, o)
          return (l(), et(), c)
        })
    return (s ? r.unshift(i) : r.push(i), i)
  }
}
const nt =
    (e) =>
    (t, n = xe) => {
      ;(!cn || e === 'sp') && as(e, (...s) => t(...s), n)
    },
  xc = nt('bm'),
  Rt = nt('m'),
  oo = nt('bu'),
  lo = nt('u'),
  co = nt('bum'),
  gn = nt('um'),
  Ec = nt('sp'),
  Cc = nt('rtg'),
  Ac = nt('rtc')
function Rc(e, t = xe) {
  as('ec', e, t)
}
const ao = 'components'
function cf(e, t) {
  return fo(ao, e, !0, t) || e
}
const uo = Symbol.for('v-ndc')
function af(e) {
  return ce(e) ? fo(ao, e, !1) || e : e || uo
}
function fo(e, t, n = !0, s = !1) {
  const r = be || xe
  if (r) {
    const i = r.type
    {
      const l = da(i, !1)
      if (l && (l === t || l === $e(t) || l === es($e(t)))) return i
    }
    const o = Nr(r[e] || i[e], t) || Nr(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function Nr(e, t) {
  return e && (e[t] || e[$e(t)] || e[es($e(t))])
}
function uf(e, t, n, s) {
  let r
  const i = n,
    o = K(e)
  if (o || ce(e)) {
    const l = o && wt(e)
    let c = !1,
      u = !1
    ;(l && ((c = !De(e)), (u = ft(e)), (e = is(e))), (r = new Array(e.length)))
    for (let a = 0, f = e.length; a < f; a++)
      r[a] = t(c ? (u ? Wn(me(e[a])) : me(e[a])) : e[a], a, void 0, i)
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i)
  } else if (se(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, i))
    else {
      const l = Object.keys(e)
      r = new Array(l.length)
      for (let c = 0, u = l.length; c < u; c++) {
        const a = l[c]
        r[c] = t(e[a], a, c, i)
      }
    }
  else r = []
  return r
}
function ff(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n]
    if (K(s)) for (let r = 0; r < s.length; r++) e[s[r].name] = s[r].fn
    else
      s &&
        (e[s.name] = s.key
          ? (...r) => {
              const i = s.fn(...r)
              return (i && (i.key = s.key), i)
            }
          : s.fn)
  }
  return e
}
function df(e, t, n = {}, s, r) {
  if (be.ce || (be.parent && St(be.parent) && be.parent.ce))
    return (
      t !== 'default' && (n.name = t),
      qs(),
      Gs(ve, null, [pe('slot', n, s && s())], 64)
    )
  let i = e[t]
  ;(i && i._c && (i._d = !1), qs())
  const o = i && ho(i(n)),
    l = n.key || (o && o.key),
    c = Gs(
      ve,
      { key: (l && !We(l) ? l : `_${t}`) + (!o && s ? '_fb' : '') },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2
    )
  return (
    !r && c.scopeId && (c.slotScopeIds = [c.scopeId + '-s']),
    i && i._c && (i._d = !0),
    c
  )
}
function ho(e) {
  return e.some((t) =>
    ln(t) ? !(t.type === ye || (t.type === ve && !ho(t.children))) : !0
  )
    ? e
    : null
}
function hf(e, t) {
  const n = {}
  for (const s in e) n[/[A-Z]/.test(s) ? `on:${s}` : Ln(s)] = e[s]
  return n
}
const Ws = (e) => (e ? ($o(e) ? ds(e) : Ws(e.parent)) : null),
  Jt = de(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ws(e.parent),
    $root: (e) => Ws(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => go(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ur(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = pn.bind(e.proxy)),
    $watch: (e) => zc.bind(e)
  }),
  ws = (e, t) => e !== re && !e.__isScriptSetup && ee(e, t),
  Mc = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: c
      } = e
      let u
      if (t[0] !== '$') {
        const g = o[t]
        if (g !== void 0)
          switch (g) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (ws(s, t)) return ((o[t] = 1), s[t])
          if (r !== re && ee(r, t)) return ((o[t] = 2), r[t])
          if ((u = e.propsOptions[0]) && ee(u, t)) return ((o[t] = 3), i[t])
          if (n !== re && ee(n, t)) return ((o[t] = 4), n[t])
          Bs && (o[t] = 0)
        }
      }
      const a = Jt[t]
      let f, p
      if (a) return (t === '$attrs' && Te(e.attrs, 'get', ''), a(e))
      if ((f = l.__cssModules) && (f = f[t])) return f
      if (n !== re && ee(n, t)) return ((o[t] = 4), n[t])
      if (((p = c.config.globalProperties), ee(p, t))) return p[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return ws(r, t)
        ? ((r[t] = n), !0)
        : s !== re && ee(s, t)
          ? ((s[t] = n), !0)
          : ee(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i
        }
      },
      o
    ) {
      let l
      return (
        !!n[o] ||
        (e !== re && ee(e, o)) ||
        ws(t, o) ||
        ((l = i[0]) && ee(l, o)) ||
        ee(s, o) ||
        ee(Jt, o) ||
        ee(r.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ee(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    }
  }
function pf() {
  return Oc().slots
}
function Oc(e) {
  const t = st()
  return t.setupContext || (t.setupContext = Vo(t))
}
function Hr(e) {
  return K(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Bs = !0
function Pc(e) {
  const t = go(e),
    n = e.proxy,
    s = e.ctx
  ;((Bs = !1), t.beforeCreate && Dr(t.beforeCreate, e, 'bc'))
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: u,
    created: a,
    beforeMount: f,
    mounted: p,
    beforeUpdate: g,
    updated: b,
    activated: w,
    deactivated: j,
    beforeDestroy: O,
    beforeUnmount: D,
    destroyed: v,
    unmounted: m,
    render: R,
    renderTracked: $,
    renderTriggered: _,
    errorCaptured: V,
    serverPrefetch: x,
    expose: P,
    inheritAttrs: M,
    components: S,
    directives: N,
    filters: z
  } = t
  if ((u && Ic(u, s, null), o))
    for (const X in o) {
      const k = o[X]
      q(k) && (s[X] = k.bind(n))
    }
  if (r) {
    const X = r.call(n, n)
    se(X) && (e.data = Vt(X))
  }
  if (((Bs = !0), i))
    for (const X in i) {
      const k = i[X],
        ae = q(k) ? k.bind(n, n) : q(k.get) ? k.get.bind(n, n) : He,
        bn = !q(k) && q(k.set) ? k.set.bind(n) : He,
        pt = ne({ get: ae, set: bn })
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => pt.value,
        set: (Ue) => (pt.value = Ue)
      })
    }
  if (l) for (const X in l) po(l[X], s, n, X)
  if (c) {
    const X = q(c) ? c.call(n) : c
    Reflect.ownKeys(X).forEach((k) => {
      $c(k, X[k])
    })
  }
  a && Dr(a, e, 'c')
  function B(X, k) {
    K(k) ? k.forEach((ae) => X(ae.bind(n))) : k && X(k.bind(n))
  }
  if (
    (B(xc, f),
    B(Rt, p),
    B(oo, g),
    B(lo, b),
    B(wc, w),
    B(Sc, j),
    B(Rc, V),
    B(Ac, $),
    B(Cc, _),
    B(co, D),
    B(gn, m),
    B(Ec, x),
    K(P))
  )
    if (P.length) {
      const X = e.exposed || (e.exposed = {})
      P.forEach((k) => {
        Object.defineProperty(X, k, {
          get: () => n[k],
          set: (ae) => (n[k] = ae),
          enumerable: !0
        })
      })
    } else e.exposed || (e.exposed = {})
  ;(R && e.render === He && (e.render = R),
    M != null && (e.inheritAttrs = M),
    S && (e.components = S),
    N && (e.directives = N),
    x && ro(e))
}
function Ic(e, t, n = He) {
  K(e) && (e = Us(e))
  for (const s in e) {
    const r = e[s]
    let i
    ;(se(r)
      ? 'default' in r
        ? (i = xt(r.from || s, r.default, !0))
        : (i = xt(r.from || s))
      : (i = xt(r)),
      fe(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o)
          })
        : (t[s] = i))
  }
}
function Dr(e, t, n) {
  Be(K(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function po(e, t, n, s) {
  let r = s.includes('.') ? Mo(n, s) : () => n[s]
  if (ce(e)) {
    const i = t[e]
    q(i) && ue(r, i)
  } else if (q(e)) ue(r, e.bind(n))
  else if (se(e))
    if (K(e)) e.forEach((i) => po(i, t, n, s))
    else {
      const i = q(e.handler) ? e.handler.bind(n) : t[e.handler]
      q(i) && ue(r, i, e)
    }
}
function go(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o }
    } = e.appContext,
    l = i.get(t)
  let c
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}),
          r.length && r.forEach((u) => Gn(c, u, o, !0)),
          Gn(c, t, o)),
    se(t) && i.set(t, c),
    c
  )
}
function Gn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  ;(i && Gn(e, i, n, !0), r && r.forEach((o) => Gn(e, o, n, !0)))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = Lc[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const Lc = {
  data: $r,
  props: jr,
  emits: jr,
  methods: Gt,
  computed: Gt,
  beforeCreate: Ee,
  created: Ee,
  beforeMount: Ee,
  mounted: Ee,
  beforeUpdate: Ee,
  updated: Ee,
  beforeDestroy: Ee,
  beforeUnmount: Ee,
  destroyed: Ee,
  unmounted: Ee,
  activated: Ee,
  deactivated: Ee,
  errorCaptured: Ee,
  serverPrefetch: Ee,
  components: Gt,
  directives: Gt,
  watch: Nc,
  provide: $r,
  inject: Fc
}
function $r(e, t) {
  return t
    ? e
      ? function () {
          return de(
            q(e) ? e.call(this, this) : e,
            q(t) ? t.call(this, this) : t
          )
        }
      : t
    : e
}
function Fc(e, t) {
  return Gt(Us(e), Us(t))
}
function Us(e) {
  if (K(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Ee(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Gt(e, t) {
  return e ? de(Object.create(null), e, t) : t
}
function jr(e, t) {
  return e
    ? K(e) && K(t)
      ? [...new Set([...e, ...t])]
      : de(Object.create(null), Hr(e), Hr(t ?? {}))
    : t
}
function Nc(e, t) {
  if (!e) return t
  if (!t) return e
  const n = de(Object.create(null), e)
  for (const s in t) n[s] = Ee(e[s], t[s])
  return n
}
function mo() {
  return {
    app: null,
    config: {
      isNativeTag: vl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let Hc = 0
function Dc(e, t) {
  return function (s, r = null) {
    ;(q(s) || (s = de({}, s)), r != null && !se(r) && (r = null))
    const i = mo(),
      o = new WeakSet(),
      l = []
    let c = !1
    const u = (i.app = {
      _uid: Hc++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: pa,
      get config() {
        return i.config
      },
      set config(a) {},
      use(a, ...f) {
        return (
          o.has(a) ||
            (a && q(a.install)
              ? (o.add(a), a.install(u, ...f))
              : q(a) && (o.add(a), a(u, ...f))),
          u
        )
      },
      mixin(a) {
        return (i.mixins.includes(a) || i.mixins.push(a), u)
      },
      component(a, f) {
        return f ? ((i.components[a] = f), u) : i.components[a]
      },
      directive(a, f) {
        return f ? ((i.directives[a] = f), u) : i.directives[a]
      },
      mount(a, f, p) {
        if (!c) {
          const g = u._ceVNode || pe(s, r)
          return (
            (g.appContext = i),
            p === !0 ? (p = 'svg') : p === !1 && (p = void 0),
            f && t ? t(g, a) : e(g, a, p),
            (c = !0),
            (u._container = a),
            (a.__vue_app__ = u),
            ds(g.component)
          )
        }
      },
      onUnmount(a) {
        l.push(a)
      },
      unmount() {
        c &&
          (Be(l, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__)
      },
      provide(a, f) {
        return ((i.provides[a] = f), u)
      },
      runWithContext(a) {
        const f = Tt
        Tt = u
        try {
          return a()
        } finally {
          Tt = f
        }
      }
    })
    return u
  }
}
let Tt = null
function $c(e, t) {
  if (xe) {
    let n = xe.provides
    const s = xe.parent && xe.parent.provides
    ;(s === n && (n = xe.provides = Object.create(s)), (n[e] = t))
  }
}
function xt(e, t, n = !1) {
  const s = st()
  if (s || Tt) {
    let r = Tt
      ? Tt._context.provides
      : s
        ? s.parent == null || s.ce
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && q(t) ? t.call(s && s.proxy) : t
  }
}
function vo() {
  return !!(st() || Tt)
}
const yo = {},
  bo = () => Object.create(yo),
  _o = (e) => Object.getPrototypeOf(e) === yo
function jc(e, t, n, s = !1) {
  const r = {},
    i = bo()
  ;((e.propsDefaults = Object.create(null)), wo(e, t, r, i))
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  ;(n
    ? (e.props = s ? r : Zl(r))
    : e.type.props
      ? (e.props = r)
      : (e.props = i),
    (e.attrs = i))
}
function Vc(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o }
    } = e,
    l = Q(r),
    [c] = e.propsOptions
  let u = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const a = e.vnode.dynamicProps
      for (let f = 0; f < a.length; f++) {
        let p = a[f]
        if (fs(e.emitsOptions, p)) continue
        const g = t[p]
        if (c)
          if (ee(i, p)) g !== i[p] && ((i[p] = g), (u = !0))
          else {
            const b = $e(p)
            r[b] = Ks(c, l, b, g, e, !1)
          }
        else g !== i[p] && ((i[p] = g), (u = !0))
      }
    }
  } else {
    wo(e, t, r, i) && (u = !0)
    let a
    for (const f in l)
      (!t || (!ee(t, f) && ((a = ht(f)) === f || !ee(t, a)))) &&
        (c
          ? n &&
            (n[f] !== void 0 || n[a] !== void 0) &&
            (r[f] = Ks(c, l, f, void 0, e, !0))
          : delete r[f])
    if (i !== l) for (const f in i) (!t || !ee(t, f)) && (delete i[f], (u = !0))
  }
  u && Je(e.attrs, 'set', '')
}
function wo(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let c in t) {
      if (Nt(c)) continue
      const u = t[c]
      let a
      r && ee(r, (a = $e(c)))
        ? !i || !i.includes(a)
          ? (n[a] = u)
          : ((l || (l = {}))[a] = u)
        : fs(e.emitsOptions, c) ||
          ((!(c in s) || u !== s[c]) && ((s[c] = u), (o = !0)))
    }
  if (i) {
    const c = Q(n),
      u = l || re
    for (let a = 0; a < i.length; a++) {
      const f = i[a]
      n[f] = Ks(r, c, f, u[f], e, !ee(u, f))
    }
  }
  return o
}
function Ks(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const l = ee(o, 'default')
    if (l && s === void 0) {
      const c = o.default
      if (o.type !== Function && !o.skipFactory && q(c)) {
        const { propsDefaults: u } = r
        if (n in u) s = u[n]
        else {
          const a = mn(r)
          ;((s = u[n] = c.call(null, t)), a())
        }
      } else s = c
      r.ce && r.ce._setProp(n, s)
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === ht(n)) && (s = !0))
  }
  return s
}
const kc = new WeakMap()
function So(e, t, n = !1) {
  const s = n ? kc : t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    l = []
  let c = !1
  if (!q(e)) {
    const a = (f) => {
      c = !0
      const [p, g] = So(f, t, !0)
      ;(de(o, p), g && l.push(...g))
    }
    ;(!n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a))
  }
  if (!i && !c) return (se(e) && s.set(e, Lt), Lt)
  if (K(i))
    for (let a = 0; a < i.length; a++) {
      const f = $e(i[a])
      Vr(f) && (o[f] = re)
    }
  else if (i)
    for (const a in i) {
      const f = $e(a)
      if (Vr(f)) {
        const p = i[a],
          g = (o[f] = K(p) || q(p) ? { type: p } : de({}, p)),
          b = g.type
        let w = !1,
          j = !0
        if (K(b))
          for (let O = 0; O < b.length; ++O) {
            const D = b[O],
              v = q(D) && D.name
            if (v === 'Boolean') {
              w = !0
              break
            } else v === 'String' && (j = !1)
          }
        else w = q(b) && b.name === 'Boolean'
        ;((g[0] = w), (g[1] = j), (w || ee(g, 'default')) && l.push(f))
      }
    }
  const u = [o, l]
  return (se(e) && s.set(e, u), u)
}
function Vr(e) {
  return e[0] !== '$' && !Nt(e)
}
const dr = (e) => e === '_' || e === '__' || e === '_ctx' || e === '$stable',
  hr = (e) => (K(e) ? e.map(Ne) : [Ne(e)]),
  Wc = (e, t, n) => {
    if (t._n) return t
    const s = Gi((...r) => hr(t(...r)), n)
    return ((s._c = !1), s)
  },
  To = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (dr(r)) continue
      const i = e[r]
      if (q(i)) t[r] = Wc(r, i, s)
      else if (i != null) {
        const o = hr(i)
        t[r] = () => o
      }
    }
  },
  xo = (e, t) => {
    const n = hr(t)
    e.slots.default = () => n
  },
  Eo = (e, t, n) => {
    for (const s in t) (n || !dr(s)) && (e[s] = t[s])
  },
  Bc = (e, t, n) => {
    const s = (e.slots = bo())
    if (e.vnode.shapeFlag & 32) {
      const r = t.__
      r && Hs(s, '__', r, !0)
      const i = t._
      i ? (Eo(s, t, n), n && Hs(s, '_', i, !0)) : To(t, s)
    } else t && xo(e, t)
  },
  Uc = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = re
    if (s.shapeFlag & 32) {
      const l = t._
      ;(l
        ? n && l === 1
          ? (i = !1)
          : Eo(r, t, n)
        : ((i = !t.$stable), To(t, r)),
        (o = t))
    } else t && (xo(e, t), (o = { default: 1 }))
    if (i) for (const l in r) !dr(l) && o[l] == null && delete r[l]
  },
  Ce = Lo
function Kc(e) {
  return Co(e)
}
function qc(e) {
  return Co(e, bc)
}
function Co(e, t) {
  const n = ts()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: u,
      setElementText: a,
      parentNode: f,
      nextSibling: p,
      setScopeId: g = He,
      insertStaticContent: b
    } = e,
    w = (
      d,
      h,
      y,
      C = null,
      T = null,
      E = null,
      F = void 0,
      L = null,
      I = !!h.dynamicChildren
    ) => {
      if (d === h) return
      ;(d && !yt(d, h) && ((C = _n(d)), Ue(d, T, E, !0), (d = null)),
        h.patchFlag === -2 && ((I = !1), (h.dynamicChildren = null)))
      const { type: A, ref: U, shapeFlag: H } = h
      switch (A) {
        case Et:
          j(d, h, y, C)
          break
        case ye:
          O(d, h, y, C)
          break
        case $t:
          d == null && D(h, y, C, F)
          break
        case ve:
          S(d, h, y, C, T, E, F, L, I)
          break
        default:
          H & 1
            ? R(d, h, y, C, T, E, F, L, I)
            : H & 6
              ? N(d, h, y, C, T, E, F, L, I)
              : (H & 64 || H & 128) && A.process(d, h, y, C, T, E, F, L, I, Mt)
      }
      U != null && T
        ? Dt(U, d && d.ref, E, h || d, !h)
        : U == null && d && d.ref != null && Dt(d.ref, null, E, d, !0)
    },
    j = (d, h, y, C) => {
      if (d == null) s((h.el = l(h.children)), y, C)
      else {
        const T = (h.el = d.el)
        h.children !== d.children && u(T, h.children)
      }
    },
    O = (d, h, y, C) => {
      d == null ? s((h.el = c(h.children || '')), y, C) : (h.el = d.el)
    },
    D = (d, h, y, C) => {
      ;[d.el, d.anchor] = b(d.children, h, y, C, d.el, d.anchor)
    },
    v = ({ el: d, anchor: h }, y, C) => {
      let T
      for (; d && d !== h; ) ((T = p(d)), s(d, y, C), (d = T))
      s(h, y, C)
    },
    m = ({ el: d, anchor: h }) => {
      let y
      for (; d && d !== h; ) ((y = p(d)), r(d), (d = y))
      r(h)
    },
    R = (d, h, y, C, T, E, F, L, I) => {
      ;(h.type === 'svg' ? (F = 'svg') : h.type === 'math' && (F = 'mathml'),
        d == null ? $(h, y, C, T, E, F, L, I) : x(d, h, T, E, F, L, I))
    },
    $ = (d, h, y, C, T, E, F, L) => {
      let I, A
      const { props: U, shapeFlag: H, transition: W, dirs: G } = d
      if (
        ((I = d.el = o(d.type, E, U && U.is, U)),
        H & 8
          ? a(I, d.children)
          : H & 16 && V(d.children, I, null, C, T, Ss(d, E), F, L),
        G && Xe(d, null, C, 'created'),
        _(I, d, d.scopeId, F, C),
        U)
      ) {
        for (const ie in U)
          ie !== 'value' && !Nt(ie) && i(I, ie, null, U[ie], E, C)
        ;('value' in U && i(I, 'value', null, U.value, E),
          (A = U.onVnodeBeforeMount) && Fe(A, C, d))
      }
      G && Xe(d, null, C, 'beforeMount')
      const J = Ao(T, W)
      ;(J && W.beforeEnter(I),
        s(I, h, y),
        ((A = U && U.onVnodeMounted) || J || G) &&
          Ce(() => {
            ;(A && Fe(A, C, d), J && W.enter(I), G && Xe(d, null, C, 'mounted'))
          }, T))
    },
    _ = (d, h, y, C, T) => {
      if ((y && g(d, y), C)) for (let E = 0; E < C.length; E++) g(d, C[E])
      if (T) {
        let E = T.subTree
        if (
          h === E ||
          (Io(E.type) && (E.ssContent === h || E.ssFallback === h))
        ) {
          const F = T.vnode
          _(d, F, F.scopeId, F.slotScopeIds, T.parent)
        }
      }
    },
    V = (d, h, y, C, T, E, F, L, I = 0) => {
      for (let A = I; A < d.length; A++) {
        const U = (d[A] = L ? ct(d[A]) : Ne(d[A]))
        w(null, U, h, y, C, T, E, F, L)
      }
    },
    x = (d, h, y, C, T, E, F) => {
      const L = (h.el = d.el)
      let { patchFlag: I, dynamicChildren: A, dirs: U } = h
      I |= d.patchFlag & 16
      const H = d.props || re,
        W = h.props || re
      let G
      if (
        (y && gt(y, !1),
        (G = W.onVnodeBeforeUpdate) && Fe(G, y, h, d),
        U && Xe(h, d, y, 'beforeUpdate'),
        y && gt(y, !0),
        ((H.innerHTML && W.innerHTML == null) ||
          (H.textContent && W.textContent == null)) &&
          a(L, ''),
        A
          ? P(d.dynamicChildren, A, L, y, C, Ss(h, T), E)
          : F || k(d, h, L, null, y, C, Ss(h, T), E, !1),
        I > 0)
      ) {
        if (I & 16) M(L, H, W, y, T)
        else if (
          (I & 2 && H.class !== W.class && i(L, 'class', null, W.class, T),
          I & 4 && i(L, 'style', H.style, W.style, T),
          I & 8)
        ) {
          const J = h.dynamicProps
          for (let ie = 0; ie < J.length; ie++) {
            const te = J[ie],
              Re = H[te],
              _e = W[te]
            ;(_e !== Re || te === 'value') && i(L, te, Re, _e, T, y)
          }
        }
        I & 1 && d.children !== h.children && a(L, h.children)
      } else !F && A == null && M(L, H, W, y, T)
      ;((G = W.onVnodeUpdated) || U) &&
        Ce(() => {
          ;(G && Fe(G, y, h, d), U && Xe(h, d, y, 'updated'))
        }, C)
    },
    P = (d, h, y, C, T, E, F) => {
      for (let L = 0; L < h.length; L++) {
        const I = d[L],
          A = h[L],
          U =
            I.el && (I.type === ve || !yt(I, A) || I.shapeFlag & 198)
              ? f(I.el)
              : y
        w(I, A, U, null, C, T, E, F, !0)
      }
    },
    M = (d, h, y, C, T) => {
      if (h !== y) {
        if (h !== re)
          for (const E in h) !Nt(E) && !(E in y) && i(d, E, h[E], null, T, C)
        for (const E in y) {
          if (Nt(E)) continue
          const F = y[E],
            L = h[E]
          F !== L && E !== 'value' && i(d, E, L, F, T, C)
        }
        'value' in y && i(d, 'value', h.value, y.value, T)
      }
    },
    S = (d, h, y, C, T, E, F, L, I) => {
      const A = (h.el = d ? d.el : l('')),
        U = (h.anchor = d ? d.anchor : l(''))
      let { patchFlag: H, dynamicChildren: W, slotScopeIds: G } = h
      ;(G && (L = L ? L.concat(G) : G),
        d == null
          ? (s(A, y, C), s(U, y, C), V(h.children || [], y, U, T, E, F, L, I))
          : H > 0 && H & 64 && W && d.dynamicChildren
            ? (P(d.dynamicChildren, W, y, T, E, F, L),
              (h.key != null || (T && h === T.subTree)) && pr(d, h, !0))
            : k(d, h, y, U, T, E, F, L, I))
    },
    N = (d, h, y, C, T, E, F, L, I) => {
      ;((h.slotScopeIds = L),
        d == null
          ? h.shapeFlag & 512
            ? T.ctx.activate(h, y, C, F, I)
            : z(h, y, C, T, E, F, I)
          : le(d, h, I))
    },
    z = (d, h, y, C, T, E, F) => {
      const L = (d.component = ca(d, C, T))
      if ((cs(d) && (L.ctx.renderer = Mt), aa(L, !1, F), L.asyncDep)) {
        if ((T && T.registerDep(L, B, F), !d.el)) {
          const I = (L.subTree = pe(ye))
          ;(O(null, I, h, y), (d.placeholder = I.el))
        }
      } else B(L, d, h, y, T, E, F)
    },
    le = (d, h, y) => {
      const C = (h.component = d.component)
      if (ta(d, h, y))
        if (C.asyncDep && !C.asyncResolved) {
          X(C, h, y)
          return
        } else ((C.next = h), C.update())
      else ((h.el = d.el), (C.vnode = h))
    },
    B = (d, h, y, C, T, E, F) => {
      const L = () => {
        if (d.isMounted) {
          let { next: H, bu: W, u: G, parent: J, vnode: ie } = d
          {
            const Oe = Ro(d)
            if (Oe) {
              ;(H && ((H.el = ie.el), X(d, H, F)),
                Oe.asyncDep.then(() => {
                  d.isUnmounted || L()
                }))
              return
            }
          }
          let te = H,
            Re
          ;(gt(d, !1),
            H ? ((H.el = ie.el), X(d, H, F)) : (H = ie),
            W && Fn(W),
            (Re = H.props && H.props.onVnodeBeforeUpdate) && Fe(Re, J, H, ie),
            gt(d, !0))
          const _e = Ts(d),
            je = d.subTree
          ;((d.subTree = _e),
            w(je, _e, f(je.el), _n(je), d, T, E),
            (H.el = _e.el),
            te === null && Po(d, _e.el),
            G && Ce(G, T),
            (Re = H.props && H.props.onVnodeUpdated) &&
              Ce(() => Fe(Re, J, H, ie), T))
        } else {
          let H
          const { el: W, props: G } = h,
            { bm: J, m: ie, parent: te, root: Re, type: _e } = d,
            je = St(h)
          if (
            (gt(d, !1),
            J && Fn(J),
            !je && (H = G && G.onVnodeBeforeMount) && Fe(H, te, h),
            gt(d, !0),
            W && gs)
          ) {
            const Oe = () => {
              ;((d.subTree = Ts(d)), gs(W, d.subTree, d, T, null))
            }
            je && _e.__asyncHydrate ? _e.__asyncHydrate(W, d, Oe) : Oe()
          } else {
            Re.ce && Re.ce._def.shadowRoot !== !1 && Re.ce._injectChildStyle(_e)
            const Oe = (d.subTree = Ts(d))
            ;(w(null, Oe, y, C, d, T, E), (h.el = Oe.el))
          }
          if ((ie && Ce(ie, T), !je && (H = G && G.onVnodeMounted))) {
            const Oe = h
            Ce(() => Fe(H, te, Oe), T)
          }
          ;((h.shapeFlag & 256 ||
            (te && St(te.vnode) && te.vnode.shapeFlag & 256)) &&
            d.a &&
            Ce(d.a, T),
            (d.isMounted = !0),
            (h = y = C = null))
        }
      }
      d.scope.on()
      const I = (d.effect = new Ai(L))
      d.scope.off()
      const A = (d.update = I.run.bind(I)),
        U = (d.job = I.runIfDirty.bind(I))
      ;((U.i = d), (U.id = d.uid), (I.scheduler = () => ur(U)), gt(d, !0), A())
    },
    X = (d, h, y) => {
      h.component = d
      const C = d.vnode.props
      ;((d.vnode = h),
        (d.next = null),
        Vc(d, h.props, C, y),
        Uc(d, h.children, y),
        Ze(),
        Rr(d),
        et())
    },
    k = (d, h, y, C, T, E, F, L, I = !1) => {
      const A = d && d.children,
        U = d ? d.shapeFlag : 0,
        H = h.children,
        { patchFlag: W, shapeFlag: G } = h
      if (W > 0) {
        if (W & 128) {
          bn(A, H, y, C, T, E, F, L, I)
          return
        } else if (W & 256) {
          ae(A, H, y, C, T, E, F, L, I)
          return
        }
      }
      G & 8
        ? (U & 16 && Wt(A, T, E), H !== A && a(y, H))
        : U & 16
          ? G & 16
            ? bn(A, H, y, C, T, E, F, L, I)
            : Wt(A, T, E, !0)
          : (U & 8 && a(y, ''), G & 16 && V(H, y, C, T, E, F, L, I))
    },
    ae = (d, h, y, C, T, E, F, L, I) => {
      ;((d = d || Lt), (h = h || Lt))
      const A = d.length,
        U = h.length,
        H = Math.min(A, U)
      let W
      for (W = 0; W < H; W++) {
        const G = (h[W] = I ? ct(h[W]) : Ne(h[W]))
        w(d[W], G, y, null, T, E, F, L, I)
      }
      A > U ? Wt(d, T, E, !0, !1, H) : V(h, y, C, T, E, F, L, I, H)
    },
    bn = (d, h, y, C, T, E, F, L, I) => {
      let A = 0
      const U = h.length
      let H = d.length - 1,
        W = U - 1
      for (; A <= H && A <= W; ) {
        const G = d[A],
          J = (h[A] = I ? ct(h[A]) : Ne(h[A]))
        if (yt(G, J)) w(G, J, y, null, T, E, F, L, I)
        else break
        A++
      }
      for (; A <= H && A <= W; ) {
        const G = d[H],
          J = (h[W] = I ? ct(h[W]) : Ne(h[W]))
        if (yt(G, J)) w(G, J, y, null, T, E, F, L, I)
        else break
        ;(H--, W--)
      }
      if (A > H) {
        if (A <= W) {
          const G = W + 1,
            J = G < U ? h[G].el : C
          for (; A <= W; )
            (w(null, (h[A] = I ? ct(h[A]) : Ne(h[A])), y, J, T, E, F, L, I),
              A++)
        }
      } else if (A > W) for (; A <= H; ) (Ue(d[A], T, E, !0), A++)
      else {
        const G = A,
          J = A,
          ie = new Map()
        for (A = J; A <= W; A++) {
          const Pe = (h[A] = I ? ct(h[A]) : Ne(h[A]))
          Pe.key != null && ie.set(Pe.key, A)
        }
        let te,
          Re = 0
        const _e = W - J + 1
        let je = !1,
          Oe = 0
        const Bt = new Array(_e)
        for (A = 0; A < _e; A++) Bt[A] = 0
        for (A = G; A <= H; A++) {
          const Pe = d[A]
          if (Re >= _e) {
            Ue(Pe, T, E, !0)
            continue
          }
          let Ke
          if (Pe.key != null) Ke = ie.get(Pe.key)
          else
            for (te = J; te <= W; te++)
              if (Bt[te - J] === 0 && yt(Pe, h[te])) {
                Ke = te
                break
              }
          Ke === void 0
            ? Ue(Pe, T, E, !0)
            : ((Bt[Ke - J] = A + 1),
              Ke >= Oe ? (Oe = Ke) : (je = !0),
              w(Pe, h[Ke], y, null, T, E, F, L, I),
              Re++)
        }
        const wr = je ? Gc(Bt) : Lt
        for (te = wr.length - 1, A = _e - 1; A >= 0; A--) {
          const Pe = J + A,
            Ke = h[Pe],
            Sr = h[Pe + 1],
            Tr = Pe + 1 < U ? Sr.el || Sr.placeholder : C
          Bt[A] === 0
            ? w(null, Ke, y, Tr, T, E, F, L, I)
            : je && (te < 0 || A !== wr[te] ? pt(Ke, y, Tr, 2) : te--)
        }
      }
    },
    pt = (d, h, y, C, T = null) => {
      const { el: E, type: F, transition: L, children: I, shapeFlag: A } = d
      if (A & 6) {
        pt(d.component.subTree, h, y, C)
        return
      }
      if (A & 128) {
        d.suspense.move(h, y, C)
        return
      }
      if (A & 64) {
        F.move(d, h, y, Mt)
        return
      }
      if (F === ve) {
        s(E, h, y)
        for (let H = 0; H < I.length; H++) pt(I[H], h, y, C)
        s(d.anchor, h, y)
        return
      }
      if (F === $t) {
        v(d, h, y)
        return
      }
      if (C !== 2 && A & 1 && L)
        if (C === 0) (L.beforeEnter(E), s(E, h, y), Ce(() => L.enter(E), T))
        else {
          const { leave: H, delayLeave: W, afterLeave: G } = L,
            J = () => {
              d.ctx.isUnmounted ? r(E) : s(E, h, y)
            },
            ie = () => {
              H(E, () => {
                ;(J(), G && G())
              })
            }
          W ? W(E, J, ie) : ie()
        }
      else s(E, h, y)
    },
    Ue = (d, h, y, C = !1, T = !1) => {
      const {
        type: E,
        props: F,
        ref: L,
        children: I,
        dynamicChildren: A,
        shapeFlag: U,
        patchFlag: H,
        dirs: W,
        cacheIndex: G
      } = d
      if (
        (H === -2 && (T = !1),
        L != null && (Ze(), Dt(L, null, y, d, !0), et()),
        G != null && (h.renderCache[G] = void 0),
        U & 256)
      ) {
        h.ctx.deactivate(d)
        return
      }
      const J = U & 1 && W,
        ie = !St(d)
      let te
      if ((ie && (te = F && F.onVnodeBeforeUnmount) && Fe(te, h, d), U & 6))
        ml(d.component, y, C)
      else {
        if (U & 128) {
          d.suspense.unmount(y, C)
          return
        }
        ;(J && Xe(d, null, h, 'beforeUnmount'),
          U & 64
            ? d.type.remove(d, h, y, Mt, C)
            : A && !A.hasOnce && (E !== ve || (H > 0 && H & 64))
              ? Wt(A, h, y, !1, !0)
              : ((E === ve && H & 384) || (!T && U & 16)) && Wt(I, h, y),
          C && br(d))
      }
      ;((ie && (te = F && F.onVnodeUnmounted)) || J) &&
        Ce(() => {
          ;(te && Fe(te, h, d), J && Xe(d, null, h, 'unmounted'))
        }, y)
    },
    br = (d) => {
      const { type: h, el: y, anchor: C, transition: T } = d
      if (h === ve) {
        gl(y, C)
        return
      }
      if (h === $t) {
        m(d)
        return
      }
      const E = () => {
        ;(r(y), T && !T.persisted && T.afterLeave && T.afterLeave())
      }
      if (d.shapeFlag & 1 && T && !T.persisted) {
        const { leave: F, delayLeave: L } = T,
          I = () => F(y, E)
        L ? L(d.el, E, I) : I()
      } else E()
    },
    gl = (d, h) => {
      let y
      for (; d !== h; ) ((y = p(d)), r(d), (d = y))
      r(h)
    },
    ml = (d, h, y) => {
      const {
        bum: C,
        scope: T,
        job: E,
        subTree: F,
        um: L,
        m: I,
        a: A,
        parent: U,
        slots: { __: H }
      } = d
      ;(kr(I),
        kr(A),
        C && Fn(C),
        U &&
          K(H) &&
          H.forEach((W) => {
            U.renderCache[W] = void 0
          }),
        T.stop(),
        E && ((E.flags |= 8), Ue(F, d, h, y)),
        L && Ce(L, h),
        Ce(() => {
          d.isUnmounted = !0
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve()))
    },
    Wt = (d, h, y, C = !1, T = !1, E = 0) => {
      for (let F = E; F < d.length; F++) Ue(d[F], h, y, C, T)
    },
    _n = (d) => {
      if (d.shapeFlag & 6) return _n(d.component.subTree)
      if (d.shapeFlag & 128) return d.suspense.next()
      const h = p(d.anchor || d.el),
        y = h && h[Xi]
      return y ? p(y) : h
    }
  let hs = !1
  const _r = (d, h, y) => {
      ;(d == null
        ? h._vnode && Ue(h._vnode, null, null, !0)
        : w(h._vnode || null, d, h, null, null, null, y),
        (h._vnode = d),
        hs || ((hs = !0), Rr(), Kn(), (hs = !1)))
    },
    Mt = {
      p: w,
      um: Ue,
      m: pt,
      r: br,
      mt: z,
      mc: V,
      pc: k,
      pbc: P,
      n: _n,
      o: e
    }
  let ps, gs
  return (
    t && ([ps, gs] = t(Mt)),
    { render: _r, hydrate: ps, createApp: Dc(_r, ps) }
  )
}
function Ss({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n
}
function gt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function Ao(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function pr(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (K(s) && K(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let l = r[i]
      ;(l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = ct(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && pr(o, l)),
        l.type === Et && (l.el = o.el),
        l.type === ye && !l.el && (l.el = o.el))
    }
}
function Gc(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, l
  const c = e.length
  for (s = 0; s < c; s++) {
    const u = e[s]
    if (u !== 0) {
      if (((r = n[n.length - 1]), e[r] < u)) {
        ;((t[s] = r), n.push(s))
        continue
      }
      for (i = 0, o = n.length - 1; i < o; )
        ((l = (i + o) >> 1), e[n[l]] < u ? (i = l + 1) : (o = l))
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) ((n[i] = o), (o = t[o]))
  return n
}
function Ro(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ro(t)
}
function kr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Xc = Symbol.for('v-scx'),
  Yc = () => xt(Xc)
function gr(e, t) {
  return us(e, null, t)
}
function gf(e, t) {
  return us(e, null, { flush: 'post' })
}
function ue(e, t, n) {
  return us(e, t, n)
}
function us(e, t, n = re) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = de({}, n),
    c = (t && s) || (!t && i !== 'post')
  let u
  if (cn) {
    if (i === 'sync') {
      const g = Yc()
      u = g.__watcherHandles || (g.__watcherHandles = [])
    } else if (!c) {
      const g = () => {}
      return ((g.stop = He), (g.resume = He), (g.pause = He), g)
    }
  }
  const a = xe
  l.call = (g, b, w) => Be(g, a, b, w)
  let f = !1
  ;(i === 'post'
    ? (l.scheduler = (g) => {
        Ce(g, a && a.suspense)
      })
    : i !== 'sync' &&
      ((f = !0),
      (l.scheduler = (g, b) => {
        b ? g() : ur(g)
      })),
    (l.augmentJob = (g) => {
      ;(t && (g.flags |= 4),
        f && ((g.flags |= 2), a && ((g.id = a.uid), (g.i = a))))
    }))
  const p = fc(e, t, l)
  return (cn && (u ? u.push(p) : c && p()), p)
}
function zc(e, t, n) {
  const s = this.proxy,
    r = ce(e) ? (e.includes('.') ? Mo(s, e) : () => s[e]) : e.bind(s, s)
  let i
  q(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = mn(this),
    l = us(r, i.bind(s), n)
  return (o(), l)
}
function Mo(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const Jc = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${$e(t)}Modifiers`] || e[`${ht(t)}Modifiers`]
function Qc(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || re
  let r = n
  const i = t.startsWith('update:'),
    o = i && Jc(s, t.slice(7))
  o &&
    (o.trim && (r = n.map((a) => (ce(a) ? a.trim() : a))),
    o.number && (r = n.map(Ds)))
  let l,
    c = s[(l = Ln(t))] || s[(l = Ln($e(t)))]
  ;(!c && i && (c = s[(l = Ln(ht(t)))]), c && Be(c, e, 6, r))
  const u = s[l + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;((e.emitted[l] = !0), Be(u, e, 6, r))
  }
}
function Oo(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!q(e)) {
    const c = (u) => {
      const a = Oo(u, t, !0)
      a && ((l = !0), de(o, a))
    }
    ;(!n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c))
  }
  return !i && !l
    ? (se(e) && s.set(e, null), null)
    : (K(i) ? i.forEach((c) => (o[c] = null)) : de(o, i),
      se(e) && s.set(e, o),
      o)
}
function fs(e, t) {
  return !e || !un(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ee(e, t[0].toLowerCase() + t.slice(1)) || ee(e, ht(t)) || ee(e, t))
}
function Ts(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: c,
      render: u,
      renderCache: a,
      props: f,
      data: p,
      setupState: g,
      ctx: b,
      inheritAttrs: w
    } = e,
    j = qn(e)
  let O, D
  try {
    if (n.shapeFlag & 4) {
      const m = r || s,
        R = m
      ;((O = Ne(u.call(R, m, a, f, g, p, b))), (D = l))
    } else {
      const m = t
      ;((O = Ne(
        m.length > 1 ? m(f, { attrs: l, slots: o, emit: c }) : m(f, null)
      )),
        (D = t.props ? l : Zc(l)))
    }
  } catch (m) {
    ;((Qt.length = 0), os(m, e, 1), (O = pe(ye)))
  }
  let v = O
  if (D && w !== !1) {
    const m = Object.keys(D),
      { shapeFlag: R } = v
    m.length &&
      R & 7 &&
      (i && m.some(er) && (D = ea(D, i)), (v = dt(v, D, !1, !0)))
  }
  return (
    n.dirs &&
      ((v = dt(v, null, !1, !0)),
      (v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs)),
    n.transition && At(v, n.transition),
    (O = v),
    qn(j),
    O
  )
}
const Zc = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || un(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  ea = (e, t) => {
    const n = {}
    for (const s in e) (!er(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function ta(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    u = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? Wr(s, o, u) : !!o
    if (c & 8) {
      const a = t.dynamicProps
      for (let f = 0; f < a.length; f++) {
        const p = a[f]
        if (o[p] !== s[p] && !fs(u, p)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? Wr(s, o, u)
            : !0
          : !!o
  return !1
}
function Wr(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !fs(n, i)) return !0
  }
  return !1
}
function Po({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      (((e = t.vnode).el = n), (t = t.parent))
    else break
  }
}
const Io = (e) => e.__isSuspense
function Lo(e, t) {
  t && t.pendingBranch
    ? K(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ki(e)
}
const ve = Symbol.for('v-fgt'),
  Et = Symbol.for('v-txt'),
  ye = Symbol.for('v-cmt'),
  $t = Symbol.for('v-stc'),
  Qt = []
let Ie = null
function qs(e = !1) {
  Qt.push((Ie = e ? null : []))
}
function na() {
  ;(Qt.pop(), (Ie = Qt[Qt.length - 1] || null))
}
let on = 1
function Br(e, t = !1) {
  ;((on += e), e < 0 && Ie && t && (Ie.hasOnce = !0))
}
function Fo(e) {
  return (
    (e.dynamicChildren = on > 0 ? Ie || Lt : null),
    na(),
    on > 0 && Ie && Ie.push(e),
    e
  )
}
function mf(e, t, n, s, r, i) {
  return Fo(Ho(e, t, n, s, r, i, !0))
}
function Gs(e, t, n, s, r) {
  return Fo(pe(e, t, n, s, r, !0))
}
function ln(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function yt(e, t) {
  return e.type === t.type && e.key === t.key
}
const No = ({ key: e }) => e ?? null,
  Dn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? ce(e) || fe(e) || q(e)
        ? { i: be, r: e, k: t, f: !!n }
        : e
      : null
  )
function Ho(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === ve ? 0 : 1,
  o = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && No(t),
    ref: t && Dn(t),
    scopeId: ls,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: be
  }
  return (
    l
      ? (mr(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= ce(n) ? 8 : 16),
    on > 0 &&
      !o &&
      Ie &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Ie.push(c),
    c
  )
}
const pe = sa
function sa(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === uo) && (e = ye), ln(e))) {
    const l = dt(e, t, !0)
    return (
      n && mr(l, n),
      on > 0 &&
        !i &&
        Ie &&
        (l.shapeFlag & 6 ? (Ie[Ie.indexOf(e)] = l) : Ie.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((ha(e) && (e = e.__vccOpts), t)) {
    t = ra(t)
    let { class: l, style: c } = t
    ;(l && !ce(l) && (t.class = ss(l)),
      se(c) && (cr(c) && !K(c) && (c = de({}, c)), (t.style = ns(c))))
  }
  const o = ce(e) ? 1 : Io(e) ? 128 : Yi(e) ? 64 : se(e) ? 4 : q(e) ? 2 : 0
  return Ho(e, t, n, s, r, o, i, !0)
}
function ra(e) {
  return e ? (cr(e) || _o(e) ? de({}, e) : e) : null
}
function dt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
    u = t ? ia(r || {}, t) : r,
    a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && No(u),
      ref:
        t && t.ref
          ? n && i
            ? K(i)
              ? i.concat(Dn(t))
              : [i, Dn(t)]
            : Dn(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ve ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && dt(e.ssContent),
      ssFallback: e.ssFallback && dt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    }
  return (c && s && At(a, c.clone(a)), a)
}
function Do(e = ' ', t = 0) {
  return pe(Et, null, e, t)
}
function vf(e, t) {
  const n = pe($t, null, e)
  return ((n.staticCount = t), n)
}
function yf(e = '', t = !1) {
  return t ? (qs(), Gs(ye, null, e)) : pe(ye, null, e)
}
function Ne(e) {
  return e == null || typeof e == 'boolean'
    ? pe(ye)
    : K(e)
      ? pe(ve, null, e.slice())
      : ln(e)
        ? ct(e)
        : pe(Et, null, String(e))
}
function ct(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : dt(e)
}
function mr(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (K(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), mr(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !_o(t)
        ? (t._ctx = be)
        : r === 3 &&
          be &&
          (be.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    q(t)
      ? ((t = { default: t, _ctx: be }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Do(t)])) : (n = 8))
  ;((e.children = t), (e.shapeFlag |= n))
}
function ia(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = ss([t.class, s.class]))
      else if (r === 'style') t.style = ns([t.style, s.style])
      else if (un(r)) {
        const i = t[r],
          o = s[r]
        o &&
          i !== o &&
          !(K(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Fe(e, t, n, s = null) {
  Be(e, t, 7, [n, s])
}
const oa = mo()
let la = 0
function ca(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || oa,
    i = {
      uid: la++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Il(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: So(s, r),
      emitsOptions: Oo(s, r),
      emit: null,
      emitted: null,
      propsDefaults: re,
      inheritAttrs: s.inheritAttrs,
      ctx: re,
      data: re,
      props: re,
      attrs: re,
      slots: re,
      refs: re,
      setupState: re,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Qc.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let xe = null
const st = () => xe || be
let Xn, Xs
{
  const e = ts(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i)
        }
      )
    }
  ;((Xn = t('__VUE_INSTANCE_SETTERS__', (n) => (xe = n))),
    (Xs = t('__VUE_SSR_SETTERS__', (n) => (cn = n))))
}
const mn = (e) => {
    const t = xe
    return (
      Xn(e),
      e.scope.on(),
      () => {
        ;(e.scope.off(), Xn(t))
      }
    )
  },
  Ur = () => {
    ;(xe && xe.scope.off(), Xn(null))
  }
function $o(e) {
  return e.vnode.shapeFlag & 4
}
let cn = !1
function aa(e, t = !1, n = !1) {
  t && Xs(t)
  const { props: s, children: r } = e.vnode,
    i = $o(e)
  ;(jc(e, s, i, t), Bc(e, r, n || t))
  const o = i ? ua(e, t) : void 0
  return (t && Xs(!1), o)
}
function ua(e, t) {
  const n = e.type
  ;((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Mc)))
  const { setup: s } = n
  if (s) {
    Ze()
    const r = (e.setupContext = s.length > 1 ? Vo(e) : null),
      i = mn(e),
      o = hn(s, e, 0, [e.props, r]),
      l = _i(o)
    if ((et(), i(), (l || e.sp) && !St(e) && ro(e), l)) {
      if ((o.then(Ur, Ur), t))
        return o
          .then((c) => {
            Kr(e, c)
          })
          .catch((c) => {
            os(c, e, 0)
          })
      e.asyncDep = o
    } else Kr(e, o)
  } else jo(e)
}
function Kr(e, t, n) {
  ;(q(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : se(t) && (e.setupState = Wi(t)),
    jo(e))
}
function jo(e, t, n) {
  const s = e.type
  e.render || (e.render = s.render || He)
  {
    const r = mn(e)
    Ze()
    try {
      Pc(e)
    } finally {
      ;(et(), r())
    }
  }
}
const fa = {
  get(e, t) {
    return (Te(e, 'get', ''), e[t])
  }
}
function Vo(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    attrs: new Proxy(e.attrs, fa),
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}
function ds(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Wi(Nn(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in Jt) return Jt[n](e)
          },
          has(t, n) {
            return n in t || n in Jt
          }
        }))
    : e.proxy
}
function da(e, t = !0) {
  return q(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function ha(e) {
  return q(e) && '__vccOpts' in e
}
const ne = (e, t) => ac(e, t, cn)
function Ys(e, t, n) {
  const s = arguments.length
  return s === 2
    ? se(t) && !K(t)
      ? ln(t)
        ? pe(e, null, [t])
        : pe(e, t)
      : pe(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && ln(n) && (n = [n]),
      pe(e, t, n))
}
const pa = '3.5.18',
  bf = He
/**
 * @vue/runtime-dom v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let zs
const qr = typeof window < 'u' && window.trustedTypes
if (qr)
  try {
    zs = qr.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const ko = zs ? (e) => zs.createHTML(e) : (e) => e,
  ga = 'http://www.w3.org/2000/svg',
  ma = 'http://www.w3.org/1998/Math/MathML',
  ze = typeof document < 'u' ? document : null,
  Gr = ze && ze.createElement('template'),
  va = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? ze.createElementNS(ga, e)
          : t === 'mathml'
            ? ze.createElementNS(ma, e)
            : n
              ? ze.createElement(e, { is: n })
              : ze.createElement(e)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => ze.createTextNode(e),
    createComment: (e) => ze.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ze.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        Gr.innerHTML = ko(
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
              ? `<math>${e}</math>`
              : e
        )
        const l = Gr.content
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ]
    }
  },
  rt = 'transition',
  Kt = 'animation',
  kt = Symbol('_vtc'),
  Wo = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  },
  Bo = de({}, Zi, Wo),
  ya = (e) => ((e.displayName = 'Transition'), (e.props = Bo), e),
  _f = ya((e, { slots: t }) => Ys(mc, Uo(e), t)),
  mt = (e, t = []) => {
    K(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  Xr = (e) => (e ? (K(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Uo(e) {
  const t = {}
  for (const S in e) S in Wo || (t[S] = e[S])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: u = o,
      appearToClass: a = l,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: g = `${n}-leave-to`
    } = e,
    b = ba(r),
    w = b && b[0],
    j = b && b[1],
    {
      onBeforeEnter: O,
      onEnter: D,
      onEnterCancelled: v,
      onLeave: m,
      onLeaveCancelled: R,
      onBeforeAppear: $ = O,
      onAppear: _ = D,
      onAppearCancelled: V = v
    } = t,
    x = (S, N, z, le) => {
      ;((S._enterCancelled = le), it(S, N ? a : l), it(S, N ? u : o), z && z())
    },
    P = (S, N) => {
      ;((S._isLeaving = !1), it(S, f), it(S, g), it(S, p), N && N())
    },
    M = (S) => (N, z) => {
      const le = S ? _ : D,
        B = () => x(N, S, z)
      ;(mt(le, [N, B]),
        Yr(() => {
          ;(it(N, S ? c : i), qe(N, S ? a : l), Xr(le) || zr(N, s, w, B))
        }))
    }
  return de(t, {
    onBeforeEnter(S) {
      ;(mt(O, [S]), qe(S, i), qe(S, o))
    },
    onBeforeAppear(S) {
      ;(mt($, [S]), qe(S, c), qe(S, u))
    },
    onEnter: M(!1),
    onAppear: M(!0),
    onLeave(S, N) {
      S._isLeaving = !0
      const z = () => P(S, N)
      ;(qe(S, f),
        S._enterCancelled ? (qe(S, p), Js()) : (Js(), qe(S, p)),
        Yr(() => {
          S._isLeaving && (it(S, f), qe(S, g), Xr(m) || zr(S, s, j, z))
        }),
        mt(m, [S, z]))
    },
    onEnterCancelled(S) {
      ;(x(S, !1, void 0, !0), mt(v, [S]))
    },
    onAppearCancelled(S) {
      ;(x(S, !0, void 0, !0), mt(V, [S]))
    },
    onLeaveCancelled(S) {
      ;(P(S), mt(R, [S]))
    }
  })
}
function ba(e) {
  if (e == null) return null
  if (se(e)) return [xs(e.enter), xs(e.leave)]
  {
    const t = xs(e)
    return [t, t]
  }
}
function xs(e) {
  return Sl(e)
}
function qe(e, t) {
  ;(t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[kt] || (e[kt] = new Set())).add(t))
}
function it(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const n = e[kt]
  n && (n.delete(t), n.size || (e[kt] = void 0))
}
function Yr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let _a = 0
function zr(e, t, n, s) {
  const r = (e._endId = ++_a),
    i = () => {
      r === e._endId && s()
    }
  if (n != null) return setTimeout(i, n)
  const { type: o, timeout: l, propCount: c } = Ko(e, t)
  if (!o) return s()
  const u = o + 'end'
  let a = 0
  const f = () => {
      ;(e.removeEventListener(u, p), i())
    },
    p = (g) => {
      g.target === e && ++a >= c && f()
    }
  ;(setTimeout(() => {
    a < c && f()
  }, l + 1),
    e.addEventListener(u, p))
}
function Ko(e, t) {
  const n = window.getComputedStyle(e),
    s = (b) => (n[b] || '').split(', '),
    r = s(`${rt}Delay`),
    i = s(`${rt}Duration`),
    o = Jr(r, i),
    l = s(`${Kt}Delay`),
    c = s(`${Kt}Duration`),
    u = Jr(l, c)
  let a = null,
    f = 0,
    p = 0
  t === rt
    ? o > 0 && ((a = rt), (f = o), (p = i.length))
    : t === Kt
      ? u > 0 && ((a = Kt), (f = u), (p = c.length))
      : ((f = Math.max(o, u)),
        (a = f > 0 ? (o > u ? rt : Kt) : null),
        (p = a ? (a === rt ? i.length : c.length) : 0))
  const g =
    a === rt && /\b(transform|all)(,|$)/.test(s(`${rt}Property`).toString())
  return { type: a, timeout: f, propCount: p, hasTransform: g }
}
function Jr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => Qr(n) + Qr(e[s])))
}
function Qr(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Js() {
  return document.body.offsetHeight
}
function wa(e, t, n) {
  const s = e[kt]
  ;(s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
        ? e.setAttribute('class', t)
        : (e.className = t))
}
const Yn = Symbol('_vod'),
  qo = Symbol('_vsh'),
  wf = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;((e[Yn] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : qt(e, t))
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), qt(e, !0), s.enter(e))
            : s.leave(e, () => {
                qt(e, !1)
              })
          : qt(e, t))
    },
    beforeUnmount(e, { value: t }) {
      qt(e, t)
    }
  }
function qt(e, t) {
  ;((e.style.display = t ? e[Yn] : 'none'), (e[qo] = !t))
}
const Go = Symbol('')
function Sf(e) {
  const t = st()
  if (!t) return
  const n = (t.ut = (r = e(t.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
      ).forEach((i) => zn(i, r))
    }),
    s = () => {
      const r = e(t.proxy)
      ;(t.ce ? zn(t.ce, r) : Qs(t.subTree, r), n(r))
    }
  ;(oo(() => {
    Ki(s)
  }),
    Rt(() => {
      ue(s, He, { flush: 'post' })
      const r = new MutationObserver(s)
      ;(r.observe(t.subTree.el.parentNode, { childList: !0 }),
        gn(() => r.disconnect()))
    }))
}
function Qs(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense
    ;((e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          Qs(n.activeBranch, t)
        }))
  }
  for (; e.component; ) e = e.component.subTree
  if (e.shapeFlag & 1 && e.el) zn(e.el, t)
  else if (e.type === ve) e.children.forEach((n) => Qs(n, t))
  else if (e.type === $t) {
    let { el: n, anchor: s } = e
    for (; n && (zn(n, t), n !== s); ) n = n.nextSibling
  }
}
function zn(e, t) {
  if (e.nodeType === 1) {
    const n = e.style
    let s = ''
    for (const r in t) {
      const i = Pl(t[r])
      ;(n.setProperty(`--${r}`, i), (s += `--${r}: ${i};`))
    }
    n[Go] = s
  }
}
const Sa = /(^|;)\s*display\s*:/
function Ta(e, t, n) {
  const s = e.style,
    r = ce(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (ce(t))
        for (const o of t.split(';')) {
          const l = o.slice(0, o.indexOf(':')).trim()
          n[l] == null && $n(s, l, '')
        }
      else for (const o in t) n[o] == null && $n(s, o, '')
    for (const o in n) (o === 'display' && (i = !0), $n(s, o, n[o]))
  } else if (r) {
    if (t !== n) {
      const o = s[Go]
      ;(o && (n += ';' + o), (s.cssText = n), (i = Sa.test(n)))
    }
  } else t && e.removeAttribute('style')
  Yn in e && ((e[Yn] = i ? s.display : ''), e[qo] && (s.display = 'none'))
}
const Zr = /\s*!important$/
function $n(e, t, n) {
  if (K(n)) n.forEach((s) => $n(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = xa(e, t)
    Zr.test(n)
      ? e.setProperty(ht(s), n.replace(Zr, ''), 'important')
      : (e[s] = n)
  }
}
const ei = ['Webkit', 'Moz', 'ms'],
  Es = {}
function xa(e, t) {
  const n = Es[t]
  if (n) return n
  let s = $e(t)
  if (s !== 'filter' && s in e) return (Es[t] = s)
  s = es(s)
  for (let r = 0; r < ei.length; r++) {
    const i = ei[r] + s
    if (i in e) return (Es[t] = i)
  }
  return t
}
const ti = 'http://www.w3.org/1999/xlink'
function ni(e, t, n, s, r, i = Rl(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(ti, t.slice(6, t.length))
      : e.setAttributeNS(ti, t, n)
    : n == null || (i && !Ti(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : We(n) ? String(n) : n)
}
function si(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? ko(n) : n)
    return
  }
  const i = e.tagName
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const l = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;((l !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n))
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const l = typeof e[t]
    l === 'boolean'
      ? (n = Ti(n))
      : n == null && l === 'string'
        ? ((n = ''), (o = !0))
        : l === 'number' && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(r || t)
}
function bt(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Ea(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const ri = Symbol('_vei')
function Ca(e, t, n, s, r = null) {
  const i = e[ri] || (e[ri] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, c] = Aa(t)
    if (s) {
      const u = (i[t] = Oa(s, r))
      bt(e, l, u, c)
    } else o && (Ea(e, l, o, c), (i[t] = void 0))
  }
}
const ii = /(?:Once|Passive|Capture)$/
function Aa(e) {
  let t
  if (ii.test(e)) {
    t = {}
    let s
    for (; (s = e.match(ii)); )
      ((e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0))
  }
  return [e[2] === ':' ? e.slice(3) : ht(e.slice(2)), t]
}
let Cs = 0
const Ra = Promise.resolve(),
  Ma = () => Cs || (Ra.then(() => (Cs = 0)), (Cs = Date.now()))
function Oa(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Be(Pa(s, n.value), t, 5, [s])
  }
  return ((n.value = e), (n.attached = Ma()), n)
}
function Pa(e, t) {
  if (K(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        ;(n.call(e), (e._stopped = !0))
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const oi = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Ia = (e, t, n, s, r, i) => {
    const o = r === 'svg'
    t === 'class'
      ? wa(e, s, o)
      : t === 'style'
        ? Ta(e, n, s)
        : un(t)
          ? er(t) || Ca(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : La(e, t, s, o)
              )
            ? (si(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                ni(e, t, s, o, i, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !ce(s))
              ? si(e, $e(t), s, i, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                ni(e, t, s, o))
  }
function La(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && oi(t) && q(n))
    )
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'autocorrect' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE')
      return !1
  }
  return oi(t) && ce(n) ? !1 : t in e
}
const Xo = new WeakMap(),
  Yo = new WeakMap(),
  Jn = Symbol('_moveCb'),
  li = Symbol('_enterCb'),
  Fa = (e) => (delete e.props.mode, e),
  Na = Fa({
    name: 'TransitionGroup',
    props: de({}, Bo, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = st(),
        s = Qi()
      let r, i
      return (
        lo(() => {
          if (!r.length) return
          const o = e.moveClass || `${e.name || 'v'}-move`
          if (!ja(r[0].el, n.vnode.el, o)) {
            r = []
            return
          }
          ;(r.forEach(Ha), r.forEach(Da))
          const l = r.filter($a)
          ;(Js(),
            l.forEach((c) => {
              const u = c.el,
                a = u.style
              ;(qe(u, o),
                (a.transform = a.webkitTransform = a.transitionDuration = ''))
              const f = (u[Jn] = (p) => {
                ;(p && p.target !== u) ||
                  ((!p || /transform$/.test(p.propertyName)) &&
                    (u.removeEventListener('transitionend', f),
                    (u[Jn] = null),
                    it(u, o)))
              })
              u.addEventListener('transitionend', f)
            }),
            (r = []))
        }),
        () => {
          const o = Q(e),
            l = Uo(o)
          let c = o.tag || ve
          if (((r = []), i))
            for (let u = 0; u < i.length; u++) {
              const a = i[u]
              a.el &&
                a.el instanceof Element &&
                (r.push(a),
                At(a, rn(a, l, s, n)),
                Xo.set(a, a.el.getBoundingClientRect()))
            }
          i = t.default ? fr(t.default()) : []
          for (let u = 0; u < i.length; u++) {
            const a = i[u]
            a.key != null && At(a, rn(a, l, s, n))
          }
          return pe(c, null, i)
        }
      )
    }
  }),
  Tf = Na
function Ha(e) {
  const t = e.el
  ;(t[Jn] && t[Jn](), t[li] && t[li]())
}
function Da(e) {
  Yo.set(e, e.el.getBoundingClientRect())
}
function $a(e) {
  const t = Xo.get(e),
    n = Yo.get(e),
    s = t.left - n.left,
    r = t.top - n.top
  if (s || r) {
    const i = e.el.style
    return (
      (i.transform = i.webkitTransform = `translate(${s}px,${r}px)`),
      (i.transitionDuration = '0s'),
      e
    )
  }
}
function ja(e, t, n) {
  const s = e.cloneNode(),
    r = e[kt]
  ;(r &&
    r.forEach((l) => {
      l.split(/\s+/).forEach((c) => c && s.classList.remove(c))
    }),
    n.split(/\s+/).forEach((l) => l && s.classList.add(l)),
    (s.style.display = 'none'))
  const i = t.nodeType === 1 ? t : t.parentNode
  i.appendChild(s)
  const { hasTransform: o } = Ko(s)
  return (i.removeChild(s), o)
}
const Qn = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1
  return K(t) ? (n) => Fn(t, n) : t
}
function Va(e) {
  e.target.composing = !0
}
function ci(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const jt = Symbol('_assign'),
  xf = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e[jt] = Qn(r)
      const i = s || (r.props && r.props.type === 'number')
      ;(bt(e, t ? 'change' : 'input', (o) => {
        if (o.target.composing) return
        let l = e.value
        ;(n && (l = l.trim()), i && (l = Ds(l)), e[jt](l))
      }),
        n &&
          bt(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t ||
          (bt(e, 'compositionstart', Va),
          bt(e, 'compositionend', ci),
          bt(e, 'change', ci)))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } },
      o
    ) {
      if (((e[jt] = Qn(o)), e.composing)) return
      const l =
          (i || e.type === 'number') && !/^0\d/.test(e.value)
            ? Ds(e.value)
            : e.value,
        c = t ?? ''
      l !== c &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          ((s && t === n) || (r && e.value.trim() === c))) ||
          (e.value = c))
    }
  },
  Ef = {
    created(e, { value: t }, n) {
      ;((e.checked = Vn(t, n.props.value)),
        (e[jt] = Qn(n)),
        bt(e, 'change', () => {
          e[jt](ka(e))
        }))
    },
    beforeUpdate(e, { value: t, oldValue: n }, s) {
      ;((e[jt] = Qn(s)), t !== n && (e.checked = Vn(t, s.props.value)))
    }
  }
function ka(e) {
  return '_value' in e ? e._value : e.value
}
const Wa = ['ctrl', 'shift', 'alt', 'meta'],
  Ba = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => Wa.some((n) => e[`${n}Key`] && !t.includes(n))
  },
  Cf = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = Ba[t[o]]
          if (l && l(r, t)) return
        }
        return e(r, ...i)
      })
    )
  },
  Ua = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
  },
  Af = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!('key' in r)) return
        const i = ht(r.key)
        if (t.some((o) => o === i || Ua[o] === i)) return e(r)
      })
    )
  },
  zo = de({ patchProp: Ia }, va)
let Zt,
  ai = !1
function Ka() {
  return Zt || (Zt = Kc(zo))
}
function qa() {
  return ((Zt = ai ? Zt : qc(zo)), (ai = !0), Zt)
}
const Rf = (...e) => {
    const t = Ka().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (s) => {
        const r = Qo(s)
        if (!r) return
        const i = t._component
        ;(!q(i) && !i.render && !i.template && (i.template = r.innerHTML),
          r.nodeType === 1 && (r.textContent = ''))
        const o = n(r, !1, Jo(r))
        return (
          r instanceof Element &&
            (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
          o
        )
      }),
      t
    )
  },
  Mf = (...e) => {
    const t = qa().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (s) => {
        const r = Qo(s)
        if (r) return n(r, !0, Jo(r))
      }),
      t
    )
  }
function Jo(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function Qo(e) {
  return ce(e) ? document.querySelector(e) : e
}
const Ga = window.__VP_SITE_DATA__
function tt(e) {
  return Ci() ? (Ll(e), !0) : !1
}
const As = new WeakMap(),
  Xa = (...e) => {
    var t
    const n = e[0],
      s = (t = st()) == null ? void 0 : t.proxy
    if (s == null && !vo())
      throw new Error('injectLocal must be called in setup')
    return s && As.has(s) && n in As.get(s) ? As.get(s)[n] : xt(...e)
  },
  an = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const Zo = (e) => e != null,
  Ya = Object.prototype.toString,
  za = (e) => Ya.call(e) === '[object Object]',
  ke = () => {},
  ui = Ja()
function Ja() {
  var e, t
  return (
    an &&
    ((e = window == null ? void 0 : window.navigator) == null
      ? void 0
      : e.userAgent) &&
    (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
      (((t = window == null ? void 0 : window.navigator) == null
        ? void 0
        : t.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(
          window == null ? void 0 : window.navigator.userAgent
        )))
  )
}
function vr(e, t) {
  function n(...s) {
    return new Promise((r, i) => {
      Promise.resolve(
        e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })
      )
        .then(r)
        .catch(i)
    })
  }
  return n
}
const el = (e) => e()
function Qa(e, t = {}) {
  let n,
    s,
    r = ke
  const i = (c) => {
    ;(clearTimeout(c), r(), (r = ke))
  }
  let o
  return (c) => {
    const u = Z(e),
      a = Z(t.maxWait)
    return (
      n && i(n),
      u <= 0 || (a !== void 0 && a <= 0)
        ? (s && (i(s), (s = null)), Promise.resolve(c()))
        : new Promise((f, p) => {
            ;((r = t.rejectOnCancel ? p : f),
              (o = c),
              a &&
                !s &&
                (s = setTimeout(() => {
                  ;(n && i(n), (s = null), f(o()))
                }, a)),
              (n = setTimeout(() => {
                ;(s && i(s), (s = null), f(c()))
              }, u)))
          })
    )
  }
}
function Za(...e) {
  let t = 0,
    n,
    s = !0,
    r = ke,
    i,
    o,
    l,
    c,
    u
  !fe(e[0]) && typeof e[0] == 'object'
    ? ({
        delay: o,
        trailing: l = !0,
        leading: c = !0,
        rejectOnCancel: u = !1
      } = e[0])
    : ([o, l = !0, c = !0, u = !1] = e)
  const a = () => {
    n && (clearTimeout(n), (n = void 0), r(), (r = ke))
  }
  return (p) => {
    const g = Z(o),
      b = Date.now() - t,
      w = () => (i = p())
    return (
      a(),
      g <= 0
        ? ((t = Date.now()), w())
        : (b > g && (c || !s)
            ? ((t = Date.now()), w())
            : l &&
              (i = new Promise((j, O) => {
                ;((r = u ? O : j),
                  (n = setTimeout(
                    () => {
                      ;((t = Date.now()), (s = !0), j(w()), a())
                    },
                    Math.max(0, g - b)
                  )))
              })),
          !c && !n && (n = setTimeout(() => (s = !0), g)),
          (s = !1),
          i)
    )
  }
}
function eu(e = el, t = {}) {
  const { initialState: n = 'active' } = t,
    s = yr(n === 'active')
  function r() {
    s.value = !1
  }
  function i() {
    s.value = !0
  }
  const o = (...l) => {
    s.value && e(...l)
  }
  return { isActive: dn(s), pause: r, resume: i, eventFilter: o }
}
function fi(e) {
  return e.endsWith('rem') ? Number.parseFloat(e) * 16 : Number.parseFloat(e)
}
function tu(e) {
  return st()
}
function en(e) {
  return Array.isArray(e) ? e : [e]
}
function yr(...e) {
  if (e.length !== 1) return oc(...e)
  const t = e[0]
  return typeof t == 'function' ? dn(sc(() => ({ get: t, set: ke }))) : ut(t)
}
function tl(e, t = 200, n = {}) {
  return vr(Qa(t, n), e)
}
function Of(e, t = 200, n = {}) {
  const s = ut(e.value),
    r = tl(
      () => {
        s.value = e.value
      },
      t,
      n
    )
  return (ue(e, () => r()), s)
}
function nu(e, t = 200, n = !1, s = !0, r = !1) {
  return vr(Za(t, n, s, r), e)
}
function su(e, t, n = {}) {
  const { eventFilter: s = el, ...r } = n
  return ue(e, vr(s, t), r)
}
function ru(e, t, n = {}) {
  const { eventFilter: s, initialState: r = 'active', ...i } = n,
    {
      eventFilter: o,
      pause: l,
      resume: c,
      isActive: u
    } = eu(s, { initialState: r })
  return {
    stop: su(e, t, { ...i, eventFilter: o }),
    pause: l,
    resume: c,
    isActive: u
  }
}
function vn(e, t = !0, n) {
  tu() ? Rt(e, n) : t ? e() : pn(e)
}
function iu(e, t = 1e3, n = {}) {
  const { immediate: s = !0, immediateCallback: r = !1 } = n
  let i = null
  const o = Y(!1)
  function l() {
    i && (clearInterval(i), (i = null))
  }
  function c() {
    ;((o.value = !1), l())
  }
  function u() {
    const a = Z(t)
    a <= 0 ||
      ((o.value = !0), r && e(), l(), o.value && (i = setInterval(e, a)))
  }
  if ((s && an && u(), fe(t) || typeof t == 'function')) {
    const a = ue(t, () => {
      o.value && an && u()
    })
    tt(a)
  }
  return (tt(c), { isActive: o, pause: c, resume: u })
}
function ou(e, t, n) {
  return ue(e, t, { ...n, immediate: !0 })
}
function lu(e, t, n) {
  const s = ue(e, (...r) => (pn(() => s()), t(...r)), n)
  return s
}
const he = an ? window : void 0,
  cu = an ? window.document : void 0
function Me(e) {
  var t
  const n = Z(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
function ge(...e) {
  const t = [],
    n = () => {
      ;(t.forEach((l) => l()), (t.length = 0))
    },
    s = (l, c, u, a) => (
      l.addEventListener(c, u, a),
      () => l.removeEventListener(c, u, a)
    ),
    r = ne(() => {
      const l = en(Z(e[0])).filter((c) => c != null)
      return l.every((c) => typeof c != 'string') ? l : void 0
    }),
    i = ou(
      () => {
        var l, c
        return [
          (c = (l = r.value) == null ? void 0 : l.map((u) => Me(u))) != null
            ? c
            : [he].filter((u) => u != null),
          en(Z(r.value ? e[1] : e[0])),
          en(ar(r.value ? e[2] : e[1])),
          Z(r.value ? e[3] : e[2])
        ]
      },
      ([l, c, u, a]) => {
        if (
          (n(),
          !(l != null && l.length) ||
            !(c != null && c.length) ||
            !(u != null && u.length))
        )
          return
        const f = za(a) ? { ...a } : a
        t.push(
          ...l.flatMap((p) => c.flatMap((g) => u.map((b) => s(p, g, b, f))))
        )
      },
      { flush: 'post' }
    ),
    o = () => {
      ;(i(), n())
    }
  return (tt(n), o)
}
function au() {
  const e = Y(!1),
    t = st()
  return (
    t &&
      Rt(() => {
        e.value = !0
      }, t),
    e
  )
}
function yn(e) {
  const t = au()
  return ne(() => (t.value, !!e()))
}
function nl(e, t, n = {}) {
  const { window: s = he, ...r } = n
  let i
  const o = yn(() => s && 'MutationObserver' in s),
    l = () => {
      i && (i.disconnect(), (i = void 0))
    },
    c = ne(() => {
      const p = Z(e),
        g = en(p).map(Me).filter(Zo)
      return new Set(g)
    }),
    u = ue(
      () => c.value,
      (p) => {
        ;(l(),
          o.value &&
            p.size &&
            ((i = new MutationObserver(t)), p.forEach((g) => i.observe(g, r))))
      },
      { immediate: !0, flush: 'post' }
    ),
    a = () => (i == null ? void 0 : i.takeRecords()),
    f = () => {
      ;(u(), l())
    }
  return (tt(f), { isSupported: o, stop: f, takeRecords: a })
}
function uu(e, t, n = {}) {
  const {
    window: s = he,
    document: r = s == null ? void 0 : s.document,
    flush: i = 'sync'
  } = n
  if (!s || !r) return ke
  let o
  const l = (a) => {
      ;(o == null || o(), (o = a))
    },
    c = gr(
      () => {
        const a = Me(e)
        if (a) {
          const { stop: f } = nl(
            r,
            (p) => {
              p
                .map((b) => [...b.removedNodes])
                .flat()
                .some((b) => b === a || b.contains(a)) && t(p)
            },
            { window: s, childList: !0, subtree: !0 }
          )
          l(f)
        }
      },
      { flush: i }
    ),
    u = () => {
      ;(c(), l())
    }
  return (tt(u), u)
}
function fu(e) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string'
      ? (t) => t.key === e
      : Array.isArray(e)
        ? (t) => e.includes(t.key)
        : () => !0
}
function Pf(...e) {
  let t,
    n,
    s = {}
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (s = e[2]))
    : e.length === 2
      ? typeof e[1] == 'object'
        ? ((t = !0), (n = e[0]), (s = e[1]))
        : ((t = e[0]), (n = e[1]))
      : ((t = !0), (n = e[0]))
  const {
      target: r = he,
      eventName: i = 'keydown',
      passive: o = !1,
      dedupe: l = !1
    } = s,
    c = fu(t)
  return ge(
    r,
    i,
    (a) => {
      ;(a.repeat && Z(l)) || (c(a) && n(a))
    },
    o
  )
}
function du(e, t = {}) {
  const {
      immediate: n = !0,
      fpsLimit: s = void 0,
      window: r = he,
      once: i = !1
    } = t,
    o = Y(!1),
    l = ne(() => (s ? 1e3 / Z(s) : null))
  let c = 0,
    u = null
  function a(g) {
    if (!o.value || !r) return
    c || (c = g)
    const b = g - c
    if (l.value && b < l.value) {
      u = r.requestAnimationFrame(a)
      return
    }
    if (((c = g), e({ delta: b, timestamp: g }), i)) {
      ;((o.value = !1), (u = null))
      return
    }
    u = r.requestAnimationFrame(a)
  }
  function f() {
    !o.value && r && ((o.value = !0), (c = 0), (u = r.requestAnimationFrame(a)))
  }
  function p() {
    ;((o.value = !1), u != null && r && (r.cancelAnimationFrame(u), (u = null)))
  }
  return (n && f(), tt(p), { isActive: dn(o), pause: p, resume: f })
}
const hu = Symbol('vueuse-ssr-width')
function pu() {
  const e = vo() ? Xa(hu, null) : null
  return typeof e == 'number' ? e : void 0
}
function sl(e, t = {}) {
  const { window: n = he, ssrWidth: s = pu() } = t,
    r = yn(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function'),
    i = Y(typeof s == 'number'),
    o = Y(),
    l = Y(!1),
    c = (u) => {
      l.value = u.matches
    }
  return (
    gr(() => {
      if (i.value) {
        i.value = !r.value
        const u = Z(e).split(',')
        l.value = u.some((a) => {
          const f = a.includes('not all'),
            p = a.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
            g = a.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/)
          let b = !!(p || g)
          return (
            p && b && (b = s >= fi(p[1])),
            g && b && (b = s <= fi(g[1])),
            f ? !b : b
          )
        })
        return
      }
      r.value && ((o.value = n.matchMedia(Z(e))), (l.value = o.value.matches))
    }),
    ge(o, 'change', c, { passive: !0 }),
    ne(() => l.value)
  )
}
const Mn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  On = '__vueuse_ssr_handlers__',
  gu = mu()
function mu() {
  return (On in Mn || (Mn[On] = Mn[On] || {}), Mn[On])
}
function rl(e, t) {
  return gu[e] || t
}
function il(e) {
  return sl('(prefers-color-scheme: dark)', e)
}
function vu(e) {
  return e == null
    ? 'any'
    : e instanceof Set
      ? 'set'
      : e instanceof Map
        ? 'map'
        : e instanceof Date
          ? 'date'
          : typeof e == 'boolean'
            ? 'boolean'
            : typeof e == 'string'
              ? 'string'
              : typeof e == 'object'
                ? 'object'
                : Number.isNaN(e)
                  ? 'any'
                  : 'number'
}
const yu = {
    boolean: { read: (e) => e === 'true', write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries()))
    },
    set: {
      read: (e) => new Set(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e))
    },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() }
  },
  di = 'vueuse-storage'
function ol(e, t, n, s = {}) {
  var r
  const {
      flush: i = 'pre',
      deep: o = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: c = !0,
      mergeDefaults: u = !1,
      shallow: a,
      window: f = he,
      eventFilter: p,
      onError: g = (M) => {
        console.error(M)
      },
      initOnMounted: b
    } = s,
    w = (a ? Y : ut)(typeof t == 'function' ? t() : t),
    j = ne(() => Z(e))
  if (!n)
    try {
      n = rl('getDefaultStorage', () => {
        var M
        return (M = he) == null ? void 0 : M.localStorage
      })()
    } catch (M) {
      g(M)
    }
  if (!n) return w
  const O = Z(t),
    D = vu(O),
    v = (r = s.serializer) != null ? r : yu[D],
    { pause: m, resume: R } = ru(w, () => _(w.value), {
      flush: i,
      deep: o,
      eventFilter: p
    })
  ;(ue(j, () => x(), { flush: i }),
    f &&
      l &&
      vn(() => {
        ;(n instanceof Storage
          ? ge(f, 'storage', x, { passive: !0 })
          : ge(f, di, P),
          b && x())
      }),
    b || x())
  function $(M, S) {
    if (f) {
      const N = { key: j.value, oldValue: M, newValue: S, storageArea: n }
      f.dispatchEvent(
        n instanceof Storage
          ? new StorageEvent('storage', N)
          : new CustomEvent(di, { detail: N })
      )
    }
  }
  function _(M) {
    try {
      const S = n.getItem(j.value)
      if (M == null) ($(S, null), n.removeItem(j.value))
      else {
        const N = v.write(M)
        S !== N && (n.setItem(j.value, N), $(S, N))
      }
    } catch (S) {
      g(S)
    }
  }
  function V(M) {
    const S = M ? M.newValue : n.getItem(j.value)
    if (S == null) return (c && O != null && n.setItem(j.value, v.write(O)), O)
    if (!M && u) {
      const N = v.read(S)
      return typeof u == 'function'
        ? u(N, O)
        : D === 'object' && !Array.isArray(N)
          ? { ...O, ...N }
          : N
    } else return typeof S != 'string' ? S : v.read(S)
  }
  function x(M) {
    if (!(M && M.storageArea !== n)) {
      if (M && M.key == null) {
        w.value = O
        return
      }
      if (!(M && M.key !== j.value)) {
        m()
        try {
          ;(M == null ? void 0 : M.newValue) !== v.write(w.value) &&
            (w.value = V(M))
        } catch (S) {
          g(S)
        } finally {
          M ? pn(R) : R()
        }
      }
    }
  }
  function P(M) {
    x(M.detail)
  }
  return w
}
const bu =
  '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
function _u(e = {}) {
  const {
      selector: t = 'html',
      attribute: n = 'class',
      initialValue: s = 'auto',
      window: r = he,
      storage: i,
      storageKey: o = 'vueuse-color-scheme',
      listenToStorageChanges: l = !0,
      storageRef: c,
      emitAuto: u,
      disableTransition: a = !0
    } = e,
    f = { auto: '', light: 'light', dark: 'dark', ...(e.modes || {}) },
    p = il({ window: r }),
    g = ne(() => (p.value ? 'dark' : 'light')),
    b =
      c ||
      (o == null
        ? yr(s)
        : ol(o, s, i, { window: r, listenToStorageChanges: l })),
    w = ne(() => (b.value === 'auto' ? g.value : b.value)),
    j = rl('updateHTMLAttrs', (m, R, $) => {
      const _ =
        typeof m == 'string'
          ? r == null
            ? void 0
            : r.document.querySelector(m)
          : Me(m)
      if (!_) return
      const V = new Set(),
        x = new Set()
      let P = null
      if (R === 'class') {
        const S = $.split(/\s/g)
        Object.values(f)
          .flatMap((N) => (N || '').split(/\s/g))
          .filter(Boolean)
          .forEach((N) => {
            S.includes(N) ? V.add(N) : x.add(N)
          })
      } else P = { key: R, value: $ }
      if (V.size === 0 && x.size === 0 && P === null) return
      let M
      a &&
        ((M = r.document.createElement('style')),
        M.appendChild(document.createTextNode(bu)),
        r.document.head.appendChild(M))
      for (const S of V) _.classList.add(S)
      for (const S of x) _.classList.remove(S)
      ;(P && _.setAttribute(P.key, P.value),
        a && (r.getComputedStyle(M).opacity, document.head.removeChild(M)))
    })
  function O(m) {
    var R
    j(t, n, (R = f[m]) != null ? R : m)
  }
  function D(m) {
    e.onChanged ? e.onChanged(m, O) : O(m)
  }
  ;(ue(w, D, { flush: 'post', immediate: !0 }), vn(() => D(w.value)))
  const v = ne({
    get() {
      return u ? b.value : w.value
    },
    set(m) {
      b.value = m
    }
  })
  return Object.assign(v, { store: b, system: g, state: w })
}
function wu(e = {}) {
  const { valueDark: t = 'dark', valueLight: n = '' } = e,
    s = _u({
      ...e,
      onChanged: (o, l) => {
        var c
        e.onChanged
          ? (c = e.onChanged) == null || c.call(e, o === 'dark', l, o)
          : l(o)
      },
      modes: { dark: t, light: n }
    }),
    r = ne(() => s.system.value)
  return ne({
    get() {
      return s.value === 'dark'
    },
    set(o) {
      const l = o ? 'dark' : 'light'
      r.value === l ? (s.value = 'auto') : (s.value = l)
    }
  })
}
function Su(e, t, n = {}) {
  const { window: s = he, ...r } = n
  let i
  const o = yn(() => s && 'ResizeObserver' in s),
    l = () => {
      i && (i.disconnect(), (i = void 0))
    },
    c = ne(() => {
      const f = Z(e)
      return Array.isArray(f) ? f.map((p) => Me(p)) : [Me(f)]
    }),
    u = ue(
      c,
      (f) => {
        if ((l(), o.value && s)) {
          i = new ResizeObserver(t)
          for (const p of f) p && i.observe(p, r)
        }
      },
      { immediate: !0, flush: 'post' }
    ),
    a = () => {
      ;(l(), u())
    }
  return (tt(a), { isSupported: o, stop: a })
}
function If(e, t = {}) {
  const {
      reset: n = !0,
      windowResize: s = !0,
      windowScroll: r = !0,
      immediate: i = !0,
      updateTiming: o = 'sync'
    } = t,
    l = Y(0),
    c = Y(0),
    u = Y(0),
    a = Y(0),
    f = Y(0),
    p = Y(0),
    g = Y(0),
    b = Y(0)
  function w() {
    const O = Me(e)
    if (!O) {
      n &&
        ((l.value = 0),
        (c.value = 0),
        (u.value = 0),
        (a.value = 0),
        (f.value = 0),
        (p.value = 0),
        (g.value = 0),
        (b.value = 0))
      return
    }
    const D = O.getBoundingClientRect()
    ;((l.value = D.height),
      (c.value = D.bottom),
      (u.value = D.left),
      (a.value = D.right),
      (f.value = D.top),
      (p.value = D.width),
      (g.value = D.x),
      (b.value = D.y))
  }
  function j() {
    o === 'sync' ? w() : o === 'next-frame' && requestAnimationFrame(() => w())
  }
  return (
    Su(e, j),
    ue(
      () => Me(e),
      (O) => !O && j()
    ),
    nl(e, j, { attributeFilter: ['style', 'class'] }),
    r && ge('scroll', j, { capture: !0, passive: !0 }),
    s && ge('resize', j, { passive: !0 }),
    vn(() => {
      i && j()
    }),
    {
      height: l,
      bottom: c,
      left: u,
      right: a,
      top: f,
      width: p,
      x: g,
      y: b,
      update: j
    }
  )
}
function Lf(e) {
  const {
      x: t,
      y: n,
      document: s = cu,
      multiple: r,
      interval: i = 'requestAnimationFrame',
      immediate: o = !0
    } = e,
    l = yn(() =>
      Z(r) ? s && 'elementsFromPoint' in s : s && 'elementFromPoint' in s
    ),
    c = Y(null),
    u = () => {
      var f, p
      c.value = Z(r)
        ? (f = s == null ? void 0 : s.elementsFromPoint(Z(t), Z(n))) != null
          ? f
          : []
        : (p = s == null ? void 0 : s.elementFromPoint(Z(t), Z(n))) != null
          ? p
          : null
    },
    a =
      i === 'requestAnimationFrame'
        ? du(u, { immediate: o })
        : iu(u, i, { immediate: o })
  return { isSupported: l, element: c, ...a }
}
function Ff(e, t = {}) {
  const {
      delayEnter: n = 0,
      delayLeave: s = 0,
      triggerOnRemoval: r = !1,
      window: i = he
    } = t,
    o = Y(!1)
  let l
  const c = (u) => {
    const a = u ? n : s
    ;(l && (clearTimeout(l), (l = void 0)),
      a ? (l = setTimeout(() => (o.value = u), a)) : (o.value = u))
  }
  return (
    i &&
      (ge(e, 'mouseenter', () => c(!0), { passive: !0 }),
      ge(e, 'mouseleave', () => c(!1), { passive: !0 }),
      r &&
        uu(
          ne(() => Me(e)),
          () => c(!1)
        )),
    o
  )
}
function Tu(e, t, n = {}) {
  const {
      root: s,
      rootMargin: r = '0px',
      threshold: i = 0,
      window: o = he,
      immediate: l = !0
    } = n,
    c = yn(() => o && 'IntersectionObserver' in o),
    u = ne(() => {
      const b = Z(e)
      return en(b).map(Me).filter(Zo)
    })
  let a = ke
  const f = Y(l),
    p = c.value
      ? ue(
          () => [u.value, Me(s), f.value],
          ([b, w]) => {
            if ((a(), !f.value || !b.length)) return
            const j = new IntersectionObserver(t, {
              root: Me(w),
              rootMargin: r,
              threshold: i
            })
            ;(b.forEach((O) => O && j.observe(O)),
              (a = () => {
                ;(j.disconnect(), (a = ke))
              }))
          },
          { immediate: l, flush: 'post' }
        )
      : ke,
    g = () => {
      ;(a(), p(), (f.value = !1))
    }
  return (
    tt(g),
    {
      isSupported: c,
      isActive: f,
      pause() {
        ;(a(), (f.value = !1))
      },
      resume() {
        f.value = !0
      },
      stop: g
    }
  )
}
function Nf(e, t = {}) {
  const {
      window: n = he,
      scrollTarget: s,
      threshold: r = 0,
      rootMargin: i,
      once: o = !1
    } = t,
    l = Y(!1),
    { stop: c } = Tu(
      e,
      (u) => {
        let a = l.value,
          f = 0
        for (const p of u) p.time >= f && ((f = p.time), (a = p.isIntersecting))
        ;((l.value = a),
          o &&
            lu(l, () => {
              c()
            }))
      },
      { root: s, window: n, threshold: r, rootMargin: Z(i) }
    )
  return l
}
function Rs(e) {
  return typeof Window < 'u' && e instanceof Window
    ? e.document.documentElement
    : typeof Document < 'u' && e instanceof Document
      ? e.documentElement
      : e
}
const hi = 1
function xu(e, t = {}) {
  const {
      throttle: n = 0,
      idle: s = 200,
      onStop: r = ke,
      onScroll: i = ke,
      offset: o = { left: 0, right: 0, top: 0, bottom: 0 },
      eventListenerOptions: l = { capture: !1, passive: !0 },
      behavior: c = 'auto',
      window: u = he,
      onError: a = (_) => {
        console.error(_)
      }
    } = t,
    f = Y(0),
    p = Y(0),
    g = ne({
      get() {
        return f.value
      },
      set(_) {
        w(_, void 0)
      }
    }),
    b = ne({
      get() {
        return p.value
      },
      set(_) {
        w(void 0, _)
      }
    })
  function w(_, V) {
    var x, P, M, S
    if (!u) return
    const N = Z(e)
    if (!N) return
    ;(M = N instanceof Document ? u.document.body : N) == null ||
      M.scrollTo({
        top: (x = Z(V)) != null ? x : b.value,
        left: (P = Z(_)) != null ? P : g.value,
        behavior: Z(c)
      })
    const z =
      ((S = N == null ? void 0 : N.document) == null
        ? void 0
        : S.documentElement) ||
      (N == null ? void 0 : N.documentElement) ||
      N
    ;(g != null && (f.value = z.scrollLeft),
      b != null && (p.value = z.scrollTop))
  }
  const j = Y(!1),
    O = Vt({ left: !0, right: !1, top: !0, bottom: !1 }),
    D = Vt({ left: !1, right: !1, top: !1, bottom: !1 }),
    v = (_) => {
      j.value &&
        ((j.value = !1),
        (D.left = !1),
        (D.right = !1),
        (D.top = !1),
        (D.bottom = !1),
        r(_))
    },
    m = tl(v, n + s),
    R = (_) => {
      var V
      if (!u) return
      const x =
          ((V = _ == null ? void 0 : _.document) == null
            ? void 0
            : V.documentElement) ||
          (_ == null ? void 0 : _.documentElement) ||
          Me(_),
        { display: P, flexDirection: M, direction: S } = getComputedStyle(x),
        N = S === 'rtl' ? -1 : 1,
        z = x.scrollLeft
      ;((D.left = z < f.value), (D.right = z > f.value))
      const le = Math.abs(z * N) <= (o.left || 0),
        B =
          Math.abs(z * N) + x.clientWidth >= x.scrollWidth - (o.right || 0) - hi
      ;(P === 'flex' && M === 'row-reverse'
        ? ((O.left = B), (O.right = le))
        : ((O.left = le), (O.right = B)),
        (f.value = z))
      let X = x.scrollTop
      ;(_ === u.document && !X && (X = u.document.body.scrollTop),
        (D.top = X < p.value),
        (D.bottom = X > p.value))
      const k = Math.abs(X) <= (o.top || 0),
        ae =
          Math.abs(X) + x.clientHeight >= x.scrollHeight - (o.bottom || 0) - hi
      ;(P === 'flex' && M === 'column-reverse'
        ? ((O.top = ae), (O.bottom = k))
        : ((O.top = k), (O.bottom = ae)),
        (p.value = X))
    },
    $ = (_) => {
      var V
      if (!u) return
      const x = (V = _.target.documentElement) != null ? V : _.target
      ;(R(x), (j.value = !0), m(_), i(_))
    }
  return (
    ge(e, 'scroll', n ? nu($, n, !0, !1) : $, l),
    vn(() => {
      try {
        const _ = Z(e)
        if (!_) return
        R(_)
      } catch (_) {
        a(_)
      }
    }),
    ge(e, 'scrollend', v, l),
    {
      x: g,
      y: b,
      isScrolling: j,
      arrivedState: O,
      directions: D,
      measure() {
        const _ = Z(e)
        u && _ && R(_)
      }
    }
  )
}
function Hf(e, t, n = {}) {
  const { window: s = he } = n
  return ol(e, t, s == null ? void 0 : s.localStorage, n)
}
const Eu = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => (e instanceof MouseEvent ? [e.movementX, e.movementY] : null)
}
function Cu(e = {}) {
  const {
    type: t = 'page',
    touch: n = !0,
    resetOnTouchEnds: s = !1,
    initialValue: r = { x: 0, y: 0 },
    window: i = he,
    target: o = i,
    scroll: l = !0,
    eventFilter: c
  } = e
  let u = null,
    a = 0,
    f = 0
  const p = Y(r.x),
    g = Y(r.y),
    b = Y(null),
    w = typeof t == 'function' ? t : Eu[t],
    j = (_) => {
      const V = w(_)
      ;((u = _),
        V && (([p.value, g.value] = V), (b.value = 'mouse')),
        i && ((a = i.scrollX), (f = i.scrollY)))
    },
    O = (_) => {
      if (_.touches.length > 0) {
        const V = w(_.touches[0])
        V && (([p.value, g.value] = V), (b.value = 'touch'))
      }
    },
    D = () => {
      if (!u || !i) return
      const _ = w(u)
      u instanceof MouseEvent &&
        _ &&
        ((p.value = _[0] + i.scrollX - a), (g.value = _[1] + i.scrollY - f))
    },
    v = () => {
      ;((p.value = r.x), (g.value = r.y))
    },
    m = c ? (_) => c(() => j(_), {}) : (_) => j(_),
    R = c ? (_) => c(() => O(_), {}) : (_) => O(_),
    $ = c ? () => c(() => D(), {}) : () => D()
  if (o) {
    const _ = { passive: !0 }
    ;(ge(o, ['mousemove', 'dragover'], m, _),
      n &&
        t !== 'movement' &&
        (ge(o, ['touchstart', 'touchmove'], R, _),
        s && ge(o, 'touchend', v, _)),
      l && t === 'page' && ge(i, 'scroll', $, _))
  }
  return { x: p, y: g, sourceType: b }
}
function Df(e, t = {}) {
  const { handleOutside: n = !0, window: s = he } = t,
    r = t.type || 'page',
    { x: i, y: o, sourceType: l } = Cu(t),
    c = Y(e ?? (s == null ? void 0 : s.document.body)),
    u = Y(0),
    a = Y(0),
    f = Y(0),
    p = Y(0),
    g = Y(0),
    b = Y(0),
    w = Y(!0)
  let j = () => {}
  return (
    s &&
      ((j = ue(
        [c, i, o],
        () => {
          const O = Me(c)
          if (!O || !(O instanceof Element)) return
          const {
            left: D,
            top: v,
            width: m,
            height: R
          } = O.getBoundingClientRect()
          ;((f.value = D + (r === 'page' ? s.pageXOffset : 0)),
            (p.value = v + (r === 'page' ? s.pageYOffset : 0)),
            (g.value = R),
            (b.value = m))
          const $ = i.value - f.value,
            _ = o.value - p.value
          ;((w.value = m === 0 || R === 0 || $ < 0 || _ < 0 || $ > m || _ > R),
            (n || !w.value) && ((u.value = $), (a.value = _)))
        },
        { immediate: !0 }
      )),
      ge(document, 'mouseleave', () => (w.value = !0), { passive: !0 })),
    {
      x: i,
      y: o,
      sourceType: l,
      elementX: u,
      elementY: a,
      elementPositionX: f,
      elementPositionY: p,
      elementHeight: g,
      elementWidth: b,
      isOutside: w,
      stop: j
    }
  )
}
function ll(e) {
  const t = window.getComputedStyle(e)
  if (
    t.overflowX === 'scroll' ||
    t.overflowY === 'scroll' ||
    (t.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
    (t.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
  )
    return !0
  {
    const n = e.parentNode
    return !n || n.tagName === 'BODY' ? !1 : ll(n)
  }
}
function Au(e) {
  const t = e || window.event,
    n = t.target
  return ll(n)
    ? !1
    : t.touches.length > 1
      ? !0
      : (t.preventDefault && t.preventDefault(), !1)
}
const Ms = new WeakMap()
function $f(e, t = !1) {
  const n = Y(t)
  let s = null,
    r = ''
  ue(
    yr(e),
    (l) => {
      const c = Rs(Z(l))
      if (c) {
        const u = c
        if (
          (Ms.get(u) || Ms.set(u, u.style.overflow),
          u.style.overflow !== 'hidden' && (r = u.style.overflow),
          u.style.overflow === 'hidden')
        )
          return (n.value = !0)
        if (n.value) return (u.style.overflow = 'hidden')
      }
    },
    { immediate: !0 }
  )
  const i = () => {
      const l = Rs(Z(e))
      !l ||
        n.value ||
        (ui &&
          (s = ge(
            l,
            'touchmove',
            (c) => {
              Au(c)
            },
            { passive: !1 }
          )),
        (l.style.overflow = 'hidden'),
        (n.value = !0))
    },
    o = () => {
      const l = Rs(Z(e))
      !l ||
        !n.value ||
        (ui && (s == null || s()),
        (l.style.overflow = r),
        Ms.delete(l),
        (n.value = !1))
    }
  return (
    tt(o),
    ne({
      get() {
        return n.value
      },
      set(l) {
        l ? i() : o()
      }
    })
  )
}
function jf(e = {}) {
  const { window: t = he, ...n } = e
  return xu(t, n)
}
function Vf(e = {}) {
  const {
      window: t = he,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: s = Number.POSITIVE_INFINITY,
      listenOrientation: r = !0,
      includeScrollbar: i = !0,
      type: o = 'inner'
    } = e,
    l = Y(n),
    c = Y(s),
    u = () => {
      if (t)
        if (o === 'outer') ((l.value = t.outerWidth), (c.value = t.outerHeight))
        else if (o === 'visual' && t.visualViewport) {
          const { width: f, height: p, scale: g } = t.visualViewport
          ;((l.value = Math.round(f * g)), (c.value = Math.round(p * g)))
        } else
          i
            ? ((l.value = t.innerWidth), (c.value = t.innerHeight))
            : ((l.value = t.document.documentElement.clientWidth),
              (c.value = t.document.documentElement.clientHeight))
    }
  ;(u(), vn(u))
  const a = { passive: !0 }
  if (
    (ge('resize', u, a),
    t &&
      o === 'visual' &&
      t.visualViewport &&
      ge(t.visualViewport, 'resize', u, a),
    r)
  ) {
    const f = sl('(orientation: portrait)')
    ue(f, () => u())
  }
  return { width: l, height: c }
}
const Os = {}
var Ps = {}
const cl = /^(?:[a-z]+:|\/\/)/i,
  Ru = 'vitepress-theme-appearance',
  Mu = /#.*$/,
  Ou = /[?#].*$/,
  Pu = /(?:(^|\/)index)?\.(?:md|html)$/,
  Se = typeof document < 'u',
  al = {
    relativePath: '404.md',
    filePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
    isNotFound: !0
  }
function Iu(e, t, n = !1) {
  if (t === void 0) return !1
  if (((e = pi(`/${e}`)), n)) return new RegExp(t).test(e)
  if (pi(t) !== e) return !1
  const s = t.match(Mu)
  return s ? (Se ? location.hash : '') === s[0] : !0
}
function pi(e) {
  return decodeURI(e).replace(Ou, '').replace(Pu, '$1')
}
function Lu(e) {
  return cl.test(e)
}
function Fu(e, t) {
  return (
    Object.keys((e == null ? void 0 : e.locales) || {}).find(
      (n) => n !== 'root' && !Lu(n) && Iu(t, `/${n}/`, !0)
    ) || 'root'
  )
}
function Nu(e, t) {
  var s, r, i, o, l, c, u
  const n = Fu(e, t)
  return Object.assign({}, e, {
    localeIndex: n,
    lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
    dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
    title: ((i = e.locales[n]) == null ? void 0 : i.title) ?? e.title,
    titleTemplate:
      ((o = e.locales[n]) == null ? void 0 : o.titleTemplate) ??
      e.titleTemplate,
    description:
      ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
    head: fl(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
    themeConfig: {
      ...e.themeConfig,
      ...((u = e.locales[n]) == null ? void 0 : u.themeConfig)
    }
  })
}
function ul(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate
  if (typeof s == 'string' && s.includes(':title'))
    return s.replace(/:title/g, n)
  const r = Hu(e.title, s)
  return n === r.slice(3) ? n : `${n}${r}`
}
function Hu(e, t) {
  return t === !1
    ? ''
    : t === !0 || t === void 0
      ? ` | ${e}`
      : e === t
        ? ''
        : ` | ${t}`
}
function Du(e, t) {
  const [n, s] = t
  if (n !== 'meta') return !1
  const r = Object.entries(s)[0]
  return r == null ? !1 : e.some(([i, o]) => i === n && o[r[0]] === r[1])
}
function fl(e, t) {
  return [...e.filter((n) => !Du(t, n)), ...t]
}
const $u = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  ju = /^[a-z]:/i
function gi(e) {
  const t = ju.exec(e),
    n = t ? t[0] : ''
  return (
    n +
    e
      .slice(n.length)
      .replace($u, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  )
}
const Is = new Set()
function Vu(e) {
  if (Is.size === 0) {
    const n =
      (typeof process == 'object' &&
        (Ps == null ? void 0 : Ps.VITE_EXTRA_EXTENSIONS)) ||
      (Os == null ? void 0 : Os.VITE_EXTRA_EXTENSIONS) ||
      ''
    ;(
      '3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip' +
      (n && typeof n == 'string' ? ',' + n : '')
    )
      .split(',')
      .forEach((s) => Is.add(s))
  }
  const t = e.split('.').pop()
  return t == null || !Is.has(t.toLowerCase())
}
const ku = Symbol(),
  Ct = Y(Ga)
function kf(e) {
  const t = ne(() => Nu(Ct.value, e.data.relativePath)),
    n = t.value.appearance,
    s =
      n === 'force-dark'
        ? ut(!0)
        : n === 'force-auto'
          ? il()
          : n
            ? wu({
                storageKey: Ru,
                initialValue: () => (n === 'dark' ? 'dark' : 'auto'),
                ...(typeof n == 'object' ? n : {})
              })
            : ut(!1),
    r = ut(Se ? location.hash : '')
  return (
    Se &&
      window.addEventListener('hashchange', () => {
        r.value = location.hash
      }),
    ue(
      () => e.data,
      () => {
        r.value = Se ? location.hash : ''
      }
    ),
    {
      site: t,
      theme: ne(() => t.value.themeConfig),
      page: ne(() => e.data),
      frontmatter: ne(() => e.data.frontmatter),
      params: ne(() => e.data.params),
      lang: ne(() => t.value.lang),
      dir: ne(() => e.data.frontmatter.dir || t.value.dir),
      localeIndex: ne(() => t.value.localeIndex || 'root'),
      title: ne(() => ul(t.value, e.data)),
      description: ne(() => e.data.description || t.value.description),
      isDark: s,
      hash: ne(() => r.value)
    }
  )
}
function Wu() {
  const e = xt(ku)
  if (!e) throw new Error('vitepress data not properly injected in app')
  return e
}
function Bu(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/')
}
function mi(e) {
  return cl.test(e) || !e.startsWith('/') ? e : Bu(Ct.value.base, e)
}
function Uu(e) {
  let t = e.replace(/\.html$/, '')
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, '/index')), Se)) {
    const n = '/'
    t = gi(t.slice(n.length).replace(/\//g, '_') || 'index') + '.md'
    let s = __VP_HASH_MAP__[t.toLowerCase()]
    if (
      (s ||
        ((t = t.endsWith('_index.md')
          ? t.slice(0, -9) + '.md'
          : t.slice(0, -3) + '_index.md'),
        (s = __VP_HASH_MAP__[t.toLowerCase()])),
      !s)
    )
      return null
    t = `${n}assets/${t}.${s}.js`
  } else t = `./${gi(t.slice(1).replace(/\//g, '_'))}.md.js`
  return t
}
let jn = []
function Wf(e) {
  ;(jn.push(e),
    gn(() => {
      jn = jn.filter((t) => t !== e)
    }))
}
function Ku() {
  let e = Ct.value.scrollOffset,
    t = 0,
    n = 24
  if (
    (typeof e == 'object' &&
      'padding' in e &&
      ((n = e.padding), (e = e.selector)),
    typeof e == 'number')
  )
    t = e
  else if (typeof e == 'string') t = vi(e, n)
  else if (Array.isArray(e))
    for (const s of e) {
      const r = vi(s, n)
      if (r) {
        t = r
        break
      }
    }
  return t
}
function vi(e, t) {
  const n = document.querySelector(e)
  if (!n) return 0
  const s = n.getBoundingClientRect().bottom
  return s < 0 ? 0 : s + t
}
const qu = Symbol(),
  dl = 'http://a.com',
  Gu = () => ({ path: '/', component: null, data: al })
function Bf(e, t) {
  const n = Vt(Gu()),
    s = { route: n, go: r }
  async function r(l = Se ? location.href : '/') {
    var c, u
    ;((l = Ls(l)),
      (await ((c = s.onBeforeRouteChange) == null ? void 0 : c.call(s, l))) !==
        !1 &&
        (Se &&
          l !== Ls(location.href) &&
          (history.replaceState({ scrollPosition: window.scrollY }, ''),
          history.pushState({}, '', l)),
        await o(l),
        await ((u = s.onAfterRouteChange ?? s.onAfterRouteChanged) == null
          ? void 0
          : u(l))))
  }
  let i = null
  async function o(l, c = 0, u = !1) {
    var p, g
    if (
      (await ((p = s.onBeforePageLoad) == null ? void 0 : p.call(s, l))) === !1
    )
      return
    const a = new URL(l, dl),
      f = (i = a.pathname)
    try {
      let b = await e(f)
      if (!b) throw new Error(`Page not found: ${f}`)
      if (i === f) {
        i = null
        const { default: w, __pageData: j } = b
        if (!w) throw new Error(`Invalid route component: ${w}`)
        ;(await ((g = s.onAfterPageLoad) == null ? void 0 : g.call(s, l)),
          (n.path = Se ? f : mi(f)),
          (n.component = Nn(w)),
          (n.data = Nn(j)),
          Se &&
            pn(() => {
              let O =
                Ct.value.base +
                j.relativePath.replace(/(?:(^|\/)index)?\.md$/, '$1')
              if (
                (!Ct.value.cleanUrls && !O.endsWith('/') && (O += '.html'),
                O !== a.pathname &&
                  ((a.pathname = O),
                  (l = O + a.search + a.hash),
                  history.replaceState({}, '', l)),
                a.hash && !c)
              ) {
                let D = null
                try {
                  D = document.getElementById(
                    decodeURIComponent(a.hash).slice(1)
                  )
                } catch (v) {
                  console.warn(v)
                }
                if (D) {
                  yi(D, a.hash)
                  return
                }
              }
              window.scrollTo(0, c)
            }))
      }
    } catch (b) {
      if (
        (!/fetch|Page not found/.test(b.message) &&
          !/^\/404(\.html|\/)?$/.test(l) &&
          console.error(b),
        !u)
      )
        try {
          const w = await fetch(Ct.value.base + 'hashmap.json')
          ;((window.__VP_HASH_MAP__ = await w.json()), await o(l, c, !0))
          return
        } catch {}
      if (i === f) {
        ;((i = null),
          (n.path = Se ? f : mi(f)),
          (n.component = t ? Nn(t) : null))
        const w = Se
          ? f
              .replace(/(^|\/)$/, '$1index')
              .replace(/(\.html)?$/, '.md')
              .replace(/^\//, '')
          : '404.md'
        n.data = { ...al, relativePath: w }
      }
    }
  }
  return (
    Se &&
      (history.state === null && history.replaceState({}, ''),
      window.addEventListener(
        'click',
        (l) => {
          if (
            l.defaultPrevented ||
            !(l.target instanceof Element) ||
            l.target.closest('button') ||
            l.button !== 0 ||
            l.ctrlKey ||
            l.shiftKey ||
            l.altKey ||
            l.metaKey
          )
            return
          const c = l.target.closest('a')
          if (
            !c ||
            c.closest('.vp-raw') ||
            c.hasAttribute('download') ||
            c.hasAttribute('target')
          )
            return
          const u =
            c.getAttribute('href') ??
            (c instanceof SVGAElement ? c.getAttribute('xlink:href') : null)
          if (u == null) return
          const {
              href: a,
              origin: f,
              pathname: p,
              hash: g,
              search: b
            } = new URL(u, c.baseURI),
            w = new URL(location.href)
          f === w.origin &&
            Vu(p) &&
            (l.preventDefault(),
            p === w.pathname && b === w.search
              ? (g !== w.hash &&
                  (history.pushState({}, '', a),
                  window.dispatchEvent(
                    new HashChangeEvent('hashchange', {
                      oldURL: w.href,
                      newURL: a
                    })
                  )),
                g
                  ? yi(c, g, c.classList.contains('header-anchor'))
                  : window.scrollTo(0, 0))
              : r(a))
        },
        { capture: !0 }
      ),
      window.addEventListener('popstate', async (l) => {
        var u
        if (l.state === null) return
        const c = Ls(location.href)
        ;(await o(c, (l.state && l.state.scrollPosition) || 0),
          await ((u = s.onAfterRouteChange ?? s.onAfterRouteChanged) == null
            ? void 0
            : u(c)))
      }),
      window.addEventListener('hashchange', (l) => {
        l.preventDefault()
      })),
    s
  )
}
function Xu() {
  const e = xt(qu)
  if (!e) throw new Error('useRouter() is called without provider.')
  return e
}
function hl() {
  return Xu().route
}
function yi(e, t, n = !1) {
  let s = null
  try {
    s = e.classList.contains('header-anchor')
      ? e
      : document.getElementById(decodeURIComponent(t).slice(1))
  } catch (r) {
    console.warn(r)
  }
  if (s) {
    let r = function () {
      !n || Math.abs(o - window.scrollY) > window.innerHeight
        ? window.scrollTo(0, o)
        : window.scrollTo({ left: 0, top: o, behavior: 'smooth' })
    }
    const i = parseInt(window.getComputedStyle(s).paddingTop, 10),
      o = window.scrollY + s.getBoundingClientRect().top - Ku() + i
    requestAnimationFrame(r)
  }
}
function Ls(e) {
  const t = new URL(e, dl)
  return (
    (t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, '$1')),
    Ct.value.cleanUrls
      ? (t.pathname = t.pathname.replace(/\.html$/, ''))
      : !t.pathname.endsWith('/') &&
        !t.pathname.endsWith('.html') &&
        (t.pathname += '.html'),
    t.pathname + t.search + t.hash
  )
}
const Pn = () => jn.forEach((e) => e()),
  Uf = so({
    name: 'VitePressContent',
    props: { as: { type: [Object, String], default: 'div' } },
    setup(e) {
      const t = hl(),
        { frontmatter: n, site: s } = Wu()
      return (
        ue(n, Pn, { deep: !0, flush: 'post' }),
        () =>
          Ys(
            e.as,
            s.value.contentProps ?? { style: { position: 'relative' } },
            [
              t.component
                ? Ys(t.component, {
                    onVnodeMounted: Pn,
                    onVnodeUpdated: Pn,
                    onVnodeUnmounted: Pn
                  })
                : '404 Page Not Found'
            ]
          )
      )
    }
  }),
  Kf = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  qf = so({
    setup(e, { slots: t }) {
      const n = ut(!1)
      return (
        Rt(() => {
          n.value = !0
        }),
        () => (n.value && t.default ? t.default() : null)
      )
    }
  })
function Gf() {
  Se &&
    window.addEventListener('click', (e) => {
      var n
      const t = e.target
      if (t.matches('.vp-code-group input')) {
        const s = (n = t.parentElement) == null ? void 0 : n.parentElement
        if (!s) return
        const r = Array.from(s.querySelectorAll('input')).indexOf(t)
        if (r < 0) return
        const i = s.querySelector('.blocks')
        if (!i) return
        const o = Array.from(i.children).find((u) =>
          u.classList.contains('active')
        )
        if (!o) return
        const l = i.children[r]
        if (!l || o === l) return
        ;(o.classList.remove('active'), l.classList.add('active'))
        const c = s == null ? void 0 : s.querySelector(`label[for="${t.id}"]`)
        c == null || c.scrollIntoView({ block: 'nearest' })
      }
    })
}
function Xf() {
  if (Se) {
    const e = new WeakMap()
    window.addEventListener('click', (t) => {
      var s
      const n = t.target
      if (n.matches('div[class*="language-"] > button.copy')) {
        const r = n.parentElement,
          i = (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling
        if (!r || !i) return
        const o = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className),
          l = ['.vp-copy-ignore', '.diff.remove'],
          c = i.cloneNode(!0)
        c.querySelectorAll(l.join(',')).forEach((a) => a.remove())
        let u = c.textContent || ''
        ;(o && (u = u.replace(/^ *(\$|>) /gm, '').trim()),
          Yu(u).then(() => {
            ;(n.classList.add('copied'), clearTimeout(e.get(n)))
            const a = setTimeout(() => {
              ;(n.classList.remove('copied'), n.blur(), e.delete(n))
            }, 2e3)
            e.set(n, a)
          }))
      }
    })
  }
}
async function Yu(e) {
  try {
    return navigator.clipboard.writeText(e)
  } catch {
    const t = document.createElement('textarea'),
      n = document.activeElement
    ;((t.value = e),
      t.setAttribute('readonly', ''),
      (t.style.contain = 'strict'),
      (t.style.position = 'absolute'),
      (t.style.left = '-9999px'),
      (t.style.fontSize = '12pt'))
    const s = document.getSelection(),
      r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null
    ;(document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand('copy'),
      document.body.removeChild(t),
      r && (s.removeAllRanges(), s.addRange(r)),
      n && n.focus())
  }
}
function Yf(e, t) {
  let n = !0,
    s = []
  const r = (i) => {
    if (n) {
      ;((n = !1),
        i.forEach((l) => {
          const c = Fs(l)
          for (const u of document.head.children)
            if (u.isEqualNode(c)) {
              s.push(u)
              return
            }
        }))
      return
    }
    const o = i.map(Fs)
    ;(s.forEach((l, c) => {
      const u = o.findIndex((a) =>
        a == null ? void 0 : a.isEqualNode(l ?? null)
      )
      u !== -1 ? delete o[u] : (l == null || l.remove(), delete s[c])
    }),
      o.forEach((l) => l && document.head.appendChild(l)),
      (s = [...s, ...o].filter(Boolean)))
  }
  gr(() => {
    const i = e.data,
      o = t.value,
      l = i && i.description,
      c = (i && i.frontmatter.head) || [],
      u = ul(o, i)
    u !== document.title && (document.title = u)
    const a = l || o.description
    let f = document.querySelector('meta[name=description]')
    ;(f
      ? f.getAttribute('content') !== a && f.setAttribute('content', a)
      : Fs(['meta', { name: 'description', content: a }]),
      r(fl(o.head, Ju(c))))
  })
}
function Fs([e, t, n]) {
  const s = document.createElement(e)
  for (const r in t) s.setAttribute(r, t[r])
  return (
    n && (s.innerHTML = n),
    e === 'script' && t.async == null && (s.async = !1),
    s
  )
}
function zu(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description'
}
function Ju(e) {
  return e.filter((t) => !zu(t))
}
const Ns = new Set(),
  pl = () => document.createElement('link'),
  Qu = (e) => {
    const t = pl()
    ;((t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t))
  },
  Zu = (e) => {
    const t = new XMLHttpRequest()
    ;(t.open('GET', e, (t.withCredentials = !0)), t.send())
  }
let In
const ef =
  Se &&
  (In = pl()) &&
  In.relList &&
  In.relList.supports &&
  In.relList.supports('prefetch')
    ? Qu
    : Zu
function zf() {
  if (!Se || !window.IntersectionObserver) return
  let e
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return
  const t = window.requestIdleCallback || setTimeout
  let n = null
  const s = () => {
    ;(n && n.disconnect(),
      (n = new IntersectionObserver((i) => {
        i.forEach((o) => {
          if (o.isIntersecting) {
            const l = o.target
            n.unobserve(l)
            const { pathname: c } = l
            if (!Ns.has(c)) {
              Ns.add(c)
              const u = Uu(c)
              u && ef(u)
            }
          }
        })
      })),
      t(() => {
        document.querySelectorAll('#app a').forEach((i) => {
          const { hostname: o, pathname: l } = new URL(
              i.href instanceof SVGAnimatedString ? i.href.animVal : i.href,
              i.baseURI
            ),
            c = l.match(/\.\w+$/)
          ;(c && c[0] !== '.html') ||
            (i.target !== '_blank' &&
              o === location.hostname &&
              (l !== location.pathname ? n.observe(i) : Ns.add(l)))
        })
      }))
  }
  Rt(s)
  const r = hl()
  ;(ue(() => r.path, s),
    gn(() => {
      n && n.disconnect()
    }))
}
export {
  pf as $,
  Ku as A,
  uf as B,
  cf as C,
  Y as D,
  Wf as E,
  ve as F,
  pe as G,
  af as H,
  cl as I,
  hl as J,
  ia as K,
  xt as L,
  Vf as M,
  ns as N,
  Pf as O,
  pn as P,
  jf as Q,
  Se as R,
  dn as S,
  _f as T,
  $f as U,
  $c as V,
  hf as W,
  Af as X,
  co as Y,
  Cf as Z,
  Kf as _,
  Do as a,
  of as a0,
  Ef as a1,
  Ff as a2,
  xf as a3,
  wf as a4,
  ff as a5,
  Z as a6,
  Sf as a7,
  oc as a8,
  au as a9,
  bf as aA,
  Yf as aB,
  qu as aC,
  kf as aD,
  ku as aE,
  Uf as aF,
  qf as aG,
  Ct as aH,
  Bf as aI,
  Uu as aJ,
  Mf as aK,
  zf as aL,
  Xf as aM,
  Gf as aN,
  If as aa,
  lf as ab,
  tl as ac,
  Hf as ad,
  fe as ae,
  ol as af,
  Cu as ag,
  Df as ah,
  Lf as ai,
  Vt as aj,
  Nf as ak,
  ge as al,
  Rf as am,
  nf as an,
  sf as ao,
  Ys as ap,
  tf as aq,
  ra as ar,
  rf as as,
  Of as at,
  Tf as au,
  vf as av,
  st as aw,
  ce as ax,
  se as ay,
  ee as az,
  Gs as b,
  mf as c,
  so as d,
  yf as e,
  Vu as f,
  mi as g,
  ne as h,
  Lu as i,
  Ho as j,
  ar as k,
  Iu as l,
  sl as m,
  ss as n,
  qs as o,
  ut as p,
  ue as q,
  df as r,
  gr as s,
  Ol as t,
  Wu as u,
  Rt as v,
  Gi as w,
  gn as x,
  gf as y,
  lo as z
}
