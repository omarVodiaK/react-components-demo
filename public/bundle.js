var app = (function () {
	'use strict'
	function t() {}
	function e(t) {
		return t()
	}
	function n() {
		return Object.create(null)
	}
	function o(t) {
		t.forEach(e)
	}
	function r(t) {
		return 'function' == typeof t
	}
	function s(t, e) {
		return t != t
			? e == e
			: t !== e || (t && 'object' == typeof t) || 'function' == typeof t
	}
	function c(t, e) {
		t.appendChild(e)
	}
	function i(t, e, n) {
		t.insertBefore(e, n || null)
	}
	function l(t) {
		t.parentNode.removeChild(t)
	}
	function a(t) {
		return document.createElement(t)
	}
	function u(t) {
		return document.createTextNode(t)
	}
	function d(t, e, n) {
		null == n
			? t.removeAttribute(e)
			: t.getAttribute(e) !== n && t.setAttribute(e, n)
	}
	let f
	function h(t) {
		f = t
	}
	const p = [],
		$ = [],
		m = [],
		b = [],
		g = Promise.resolve()
	let x = !1
	function y(t) {
		m.push(t)
	}
	let _ = !1
	const k = new Set()
	function v() {
		if (!_) {
			_ = !0
			do {
				for (let t = 0; t < p.length; t += 1) {
					const e = p[t]
					h(e), w(e.$$)
				}
				for (h(null), p.length = 0; $.length; ) $.pop()()
				for (let t = 0; t < m.length; t += 1) {
					const e = m[t]
					k.has(e) || (k.add(e), e())
				}
				m.length = 0
			} while (p.length)
			for (; b.length; ) b.pop()()
			;(x = !1), (_ = !1), k.clear()
		}
	}
	function w(t) {
		if (null !== t.fragment) {
			t.update(), o(t.before_update)
			const e = t.dirty
			;(t.dirty = [-1]),
				t.fragment && t.fragment.p(t.ctx, e),
				t.after_update.forEach(y)
		}
	}
	const E = new Set()
	function C(t, e) {
		;-1 === t.$$.dirty[0] &&
			(p.push(t), x || ((x = !0), g.then(v)), t.$$.dirty.fill(0)),
			(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
	}
	function A(s, c, i, a, u, d, p = [-1]) {
		const $ = f
		h(s)
		const m = c.props || {},
			b = (s.$$ = {
				fragment: null,
				ctx: null,
				props: d,
				update: t,
				not_equal: u,
				bound: n(),
				on_mount: [],
				on_destroy: [],
				before_update: [],
				after_update: [],
				context: new Map($ ? $.$$.context : []),
				callbacks: n(),
				dirty: p,
				skip_bound: !1,
			})
		let g = !1
		if (
			((b.ctx = i
				? i(s, m, (t, e, ...n) => {
						const o = n.length ? n[0] : e
						return (
							b.ctx &&
								u(b.ctx[t], (b.ctx[t] = o)) &&
								(!b.skip_bound && b.bound[t] && b.bound[t](o),
								g && C(s, t)),
							e
						)
				  })
				: []),
			b.update(),
			(g = !0),
			o(b.before_update),
			(b.fragment = !!a && a(b.ctx)),
			c.target)
		) {
			if (c.hydrate) {
				const t = (function (t) {
					return Array.from(t.childNodes)
				})(c.target)
				b.fragment && b.fragment.l(t), t.forEach(l)
			} else b.fragment && b.fragment.c()
			c.intro && (x = s.$$.fragment) && x.i && (E.delete(x), x.i(_)),
				(function (t, n, s) {
					const {
						fragment: c,
						on_mount: i,
						on_destroy: l,
						after_update: a,
					} = t.$$
					c && c.m(n, s),
						y(() => {
							const n = i.map(e).filter(r)
							l ? l.push(...n) : o(n), (t.$$.on_mount = [])
						}),
						a.forEach(y)
				})(s, c.target, c.anchor),
				v()
		}
		var x, _
		h($)
	}
	let T
	function M(e) {
		let n, o, r, s, f, h
		return {
			c() {
				;(n = a('div')),
					(o = a('div')),
					(r = a('input')),
					(s = u(' ')),
					(f = a('label')),
					(h = u(e[0])),
					(this.c = t),
					d(r, 'type', 'checkbox'),
					d(r, 'class', 'custom-control-input'),
					d(f, 'class', 'custom-control-label'),
					d(o, 'class', 'custom-control custom-checkbox'),
					d(n, 'class', 'seb-checkbox')
			},
			m(t, e) {
				i(t, n, e), c(n, o), c(o, r), c(o, s), c(o, f), c(f, h)
			},
			p(t, [e]) {
				1 & e &&
					(function (t, e) {
						;(e = '' + e), t.wholeText !== e && (t.data = e)
					})(h, t[0])
			},
			i: t,
			o: t,
			d(t) {
				t && l(n)
			},
		}
	}
	function j(t, e, n) {
		let { label: o } = e,
			{ id: r } = e,
			{ name: s } = e
		return (
			(t.$$set = t => {
				'label' in t && n(0, (o = t.label)),
					'id' in t && n(1, (r = t.id)),
					'name' in t && n(2, (s = t.name))
			}),
			[o, r, s]
		)
	}
	'function' == typeof HTMLElement &&
		(T = class extends HTMLElement {
			constructor() {
				super(), this.attachShadow({ mode: 'open' })
			}
			connectedCallback() {
				for (const t in this.$$.slotted)
					this.appendChild(this.$$.slotted[t])
			}
			attributeChangedCallback(t, e, n) {
				this[t] = n
			}
			$destroy() {
				!(function (t, e) {
					const n = t.$$
					null !== n.fragment &&
						(o(n.on_destroy),
						n.fragment && n.fragment.d(e),
						(n.on_destroy = n.fragment = null),
						(n.ctx = []))
				})(this, 1),
					(this.$destroy = t)
			}
			$on(t, e) {
				const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = [])
				return (
					n.push(e),
					() => {
						const t = n.indexOf(e)
						;-1 !== t && n.splice(t, 1)
					}
				)
			}
			$set(t) {
				var e
				this.$$set &&
					((e = t), 0 !== Object.keys(e).length) &&
					((this.$$.skip_bound = !0),
					this.$$set(t),
					(this.$$.skip_bound = !1))
			}
		})
	class H extends T {
		constructor(t) {
			super(),
				(this.shadowRoot.innerHTML =
					'<style>.seb-checkbox{padding:0.75rem 1rem}.seb-checkbox .custom-control-label:not(.disabled),.seb-checkbox .custom-control-input:not(.disabled){cursor:pointer;user-select:none}</style>'),
				A(this, { target: this.shadowRoot }, j, M, s, {
					label: 0,
					id: 1,
					name: 2,
				}),
				t &&
					(t.target && i(t.target, this, t.anchor),
					t.props && (this.$set(t.props), v()))
		}
		static get observedAttributes() {
			return ['label', 'id', 'name']
		}
		get label() {
			return this.$$.ctx[0]
		}
		set label(t) {
			this.$set({ label: t }), v()
		}
		get id() {
			return this.$$.ctx[1]
		}
		set id(t) {
			this.$set({ id: t }), v()
		}
		get name() {
			return this.$$.ctx[2]
		}
		set name(t) {
			this.$set({ name: t }), v()
		}
	}
	return customElements.define('svelte-checkbox', H), H
})()
//# sourceMappingURL=bundle.js.map
