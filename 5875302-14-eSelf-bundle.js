(() => {
	"use strict";
	var n = {
			51: n => {
				n.exports = function(n) {
					var t = document.createElement("style");
					return n.setAttributes(t, n.attributes), n.insert(t, n.options), t
				}
			},
			128: n => {
				var t = {};
				n.exports = function(n, e) {
					var i = function(n) {
						if (void 0 === t[n]) {
							var e = document.querySelector(n);
							if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
								e = e.contentDocument.head
							} catch (n) {
								e = null
							}
							t[n] = e
						}
						return t[n]
					}(n);
					if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
					i.appendChild(e)
				}
			},
			147: (n, t, e) => {
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.analytics = void 0;
				const i = e(907),
					o = {
						instance: null,
						initialized: !1,
						init() {
							this.initialized || (this.instance = i.mixpanel, this.initialized = !0)
						},
						track(n, t = {}) {
							this.initialized && this.instance ? this.instance.track(n, t) : console.warn("Analytics not initialized")
						},
						register(n) {
							this.initialized && this.instance ? this.instance.register(n) : console.warn("Analytics not initialized")
						},
						identify(n) {
							this.initialized && this.instance ? this.instance.identify(n) : console.warn("Analytics not initialized")
						}
					};
				o.init(), t.analytics = o
			},
			486: (n, t, e) => {
				e.r(t), e.d(t, {
					default: () => g
				});
				var i = e(591),
					o = e.n(i),
					a = e(740),
					r = e.n(a),
					s = e(128),
					p = e.n(s),
					l = e(855),
					c = e.n(l),
					d = e(51),
					u = e.n(d),
					f = e(656),
					h = e.n(f),
					x = e(652),
					m = {};
				m.styleTagTransform = h(), m.setAttributes = c(), m.insert = p().bind(null, "head"), m.domAPI = r(), m.insertStyleElement = u();
				o()(x.A, m);
				const g = x.A && x.A.locals ? x.A.locals : void 0
			},
			490: (n, t, e) => {
				e.r(t), e.d(t, {
					default: () => g
				});
				var i = e(591),
					o = e.n(i),
					a = e(740),
					r = e.n(a),
					s = e(128),
					p = e.n(s),
					l = e(855),
					c = e.n(l),
					d = e(51),
					u = e.n(d),
					f = e(656),
					h = e.n(f),
					x = e(908),
					m = {};
				m.styleTagTransform = h(), m.setAttributes = c(), m.insert = p().bind(null, "head"), m.domAPI = r(), m.insertStyleElement = u();
				o()(x.A, m);
				const g = x.A && x.A.locals ? x.A.locals : void 0
			},
			591: n => {
				var t = [];

				function e(n) {
					for (var e = -1, i = 0; i < t.length; i++)
						if (t[i].identifier === n) {
							e = i;
							break
						} return e
				}

				function i(n, i) {
					for (var a = {}, r = [], s = 0; s < n.length; s++) {
						var p = n[s],
							l = i.base ? p[0] + i.base : p[0],
							c = a[l] || 0,
							d = "".concat(l, " ").concat(c);
						a[l] = c + 1;
						var u = e(d),
							f = {
								css: p[1],
								media: p[2],
								sourceMap: p[3],
								supports: p[4],
								layer: p[5]
							};
						if (-1 !== u) t[u].references++, t[u].updater(f);
						else {
							var h = o(f, i);
							i.byIndex = s, t.splice(s, 0, {
								identifier: d,
								updater: h,
								references: 1
							})
						}
						r.push(d)
					}
					return r
				}

				function o(n, t) {
					var e = t.domAPI(t);
					e.update(n);
					return function(t) {
						if (t) {
							if (t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap && t.supports === n.supports && t.layer === n.layer) return;
							e.update(n = t)
						} else e.remove()
					}
				}
				n.exports = function(n, o) {
					var a = i(n = n || [], o = o || {});
					return function(n) {
						n = n || [];
						for (var r = 0; r < a.length; r++) {
							var s = e(a[r]);
							t[s].references--
						}
						for (var p = i(n, o), l = 0; l < a.length; l++) {
							var c = e(a[l]);
							0 === t[c].references && (t[c].updater(), t.splice(c, 1))
						}
						a = p
					}
				}
			},
			652: (n, t, e) => {
				e.d(t, {
					A: () => s
				});
				var i = e(758),
					o = e.n(i),
					a = e(935),
					r = e.n(a)()(o());
				r.push([n.id, ".talk-to-the {\n    margin: 0;\n}\n.first-ai-powered-agent {\n    margin: 0;\n    font-weight: 600;\n}\n.talk-to-the-container {\n    position: absolute;\n    top: 15%;\n    left: 5%;\n    font-size: 19px;\n    text-align: left;\n    display: inline-block;\n    line-height: 1.5em;\n}\n.close-icon {\n    position: absolute;\n    top: 8%;\n    right: 4%;\n    cursor: pointer;\n    max-width: 10%;\n    max-height: 10%;\n    z-index: 99999999999;\n    filter: blur(0.3px);\n}\n.eself-widget-container {\n    display: flex;\n    position: absolute;\n    text-align: right;\n    font-size: 11px;\n    color: #181433;\n    font-family: Poppins;\n    cursor: pointer;\n    right: 5%;\n    top: 120px;\n    width: 360px;\n    height: 120px;\n    background-color: white;\n    border-radius: 25px;\n    /*box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.3);*/\n    box-shadow: 10px 15px 20px 0px #00000073, -3px -3px 4px 0px #00000040 inset, 3px 3px 2px 0px #ffffff inset;\n    z-index: 9999999999;\n    opacity: 1;\n}\n.iframe-container {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.2);\n    z-index: 9999999999;\n}\n.iframe-box {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 80%;\n    height: 80%;\n    background-color: white;\n    box-shadow: -12px 12px 17px 3px #00000073, 7px -3.45px 7px 0px #00000040 inset, -3.45px 2px 7px 0px #ffffff inset;\n}\n.iframe-box,\n#eself-iframe {\n    border-radius: 55px;\n}\n.close-iframe-button {\n    position: absolute;\n    top: 25px;\n    right: 25px;\n    width: 20px;\n    height: 20px;\n    font-size: 18px;\n    cursor: pointer;\n    text-align: center;\n    z-index: 999999999999;\n}\n.close-iframe-button-container {\n    display: contents;\n}\n.left-side {\n    flex: 10;\n    height: 100%;\n}\n.right-side {\n    flex: 5;\n    height: 100%;\n    display: flex;\n    align-items: center; /* Vertical centering */\n    justify-content: center; /* Horizontal centering */\n}\n.agent-thumbnail-icon {\n    top: auto;\n    right: 5%;\n    max-height: 80%;\n    border-radius: 20px;\n}\n.bottom-container {\n    display: flex;\n    left: 5%;\n    bottom: 10%;\n    width: 100%;\n    position: absolute;\n}\n.open-link {\n    height: 2.5vh;\n    filter: drop-shadow(1px 2px 2px #00000040);\n}\n\n@media screen and (max-width: 500px) {\n    .iframe-box {\n        box-shadow: 0px 15px 20px 0px #00000080, 0px 5px 5px 0px #ffffff inset, 0px -1px 5px 0px #00000026,\n            0px -5px 5px 0px #00000080 inset;\n    }\n}\n", ""]);
				const s = r
			},
			656: n => {
				n.exports = function(n, t) {
					if (t.styleSheet) t.styleSheet.cssText = n;
					else {
						for (; t.firstChild;) t.removeChild(t.firstChild);
						t.appendChild(document.createTextNode(n))
					}
				}
			},
			740: n => {
				n.exports = function(n) {
					if ("undefined" == typeof document) return {
						update: function() {},
						remove: function() {}
					};
					var t = n.insertStyleElement(n);
					return {
						update: function(e) {
							! function(n, t, e) {
								var i = "";
								e.supports && (i += "@supports (".concat(e.supports, ") {")), e.media && (i += "@media ".concat(e.media, " {"));
								var o = void 0 !== e.layer;
								o && (i += "@layer".concat(e.layer.length > 0 ? " ".concat(e.layer) : "", " {")), i += e.css, o && (i += "}"), e.media && (i += "}"), e.supports && (i += "}");
								var a = e.sourceMap;
								a && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t.styleTagTransform(i, n, t.options)
							}(t, n, e)
						},
						remove: function() {
							! function(n) {
								if (null === n.parentNode) return !1;
								n.parentNode.removeChild(n)
							}(t)
						}
					}
				}
			},
			758: n => {
				n.exports = function(n) {
					return n[1]
				}
			},
			855: (n, t, e) => {
				n.exports = function(n) {
					var t = e.nc;
					t && n.setAttribute("nonce", t)
				}
			},
			907: (n, t) => {
				var e, i, o, a, r, s;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.mixpanel = void 0, e = document, (i = window.mixpanel || []).__SV || (window.mixpanel = i, i._i = [], i.init = function(n, t, e) {
					function o(n, t) {
						var e = t.split(".");
						2 == e.length && (n = n[e[0]], t = e[1]), n[t] = function() {
							n.push([t].concat(Array.prototype.slice.call(arguments, 0)))
						}
					}
					var a = i;
					for (void 0 !== e ? a = i[e] = [] : e = "mixpanel", a.people = a.people || [], a.toString = function(n) {
							var t = "mixpanel";
							return "mixpanel" !== e && (t += "." + e), n || (t += " (stub)"), t
						}, a.people.toString = function() {
							return a.toString(1) + ".people (stub)"
						}, r = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" "), s = 0; s < r.length; s++) o(a, r[s]);
					var p = "set set_once union unset remove delete".split(" ");
					a.get_group = function() {
						function n(n) {
							t[n] = function() {
								call2_args = arguments, call2 = [n].concat(Array.prototype.slice.call(call2_args, 0)), a.push([e, call2])
							}
						}
						for (var t = {}, e = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)), i = 0; i < p.length; i++) n(p[i]);
						return t
					}, i._i.push([n, t, e])
				}, i.__SV = 1.2, (o = e.createElement("script")).type = "text/javascript", o.async = !0, o.src = "undefined" != typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === e.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js", (a = e.getElementsByTagName("script")[0]).parentNode.insertBefore(o, a));
				const p = window.mixpanel;
				t.mixpanel = p, p.init("be838c707df58d0e9102fed30b1b55a6", {
					debug: !1
				})
			},
			908: (n, t, e) => {
				e.d(t, {
					A: () => s
				});
				var i = e(758),
					o = e.n(i),
					a = e(935),
					r = e.n(a)()(o());
				r.push([n.id, ".beta-box {\n    height: 2.5vh;\n    filter: drop-shadow(1px 2px 2px #00000030);\n}\n\n.eself-widget-container {\n    width: 260px !important;\n    height: 220px !important;\n    position: fixed !important;\n    bottom: 20px !important;\n    right: 20px !important;\n    top: auto !important;\n    left: auto !important;\n    transform: none !important;\n    z-index: 9999;\n    border-radius: 12px;\n    overflow: hidden;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n    cursor: pointer;\n}\n\n.iframe-box {\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n    border-radius: 12px;\n}\n\n#eself-iframe {\n    border-radius: 12px;\n}\n\n\n.widget-background-video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    z-index: 1;\n}\n\n.widget-content {\n    position: relative;\n    z-index: 2;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 20px;\n}\n\n.talk-now-button {\n    background: #0fbe2b !important;\n    border: none !important;\n    border-radius: 8px !important;\n    margin-top: 120px !important;\n    padding: 12px 20px !important;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    color: white !important;\n    min-width: 140px !important;\n    justify-content: center !important;\n}\n\n.talk-now-button svg {\n    width: 24px;\n    height: 24px;\n}\n\n.talk-now-button:hover {\n    background: #19b733 !important;\n    border: none !important;\n    border-radius: 8px !important;\n    color: white !important;\n}\n\n.camera-icon {\n    width: 18px;\n    height: 18px;\n    flex-shrink: 0;\n}\n\n.talk-now-text {\n    font-weight: 600;\n    letter-spacing: 0.5px;\n}\n\n.close-icon {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    width: 10px;\n    height: 10px;\n    cursor: pointer;\n    z-index: 3;\n    opacity: 0.6;\n    transition: opacity 0.2s ease;\n}\n\n\n.close-icon:hover {\n    opacity: 1;\n}\n\n.close-iframe-button {\n    width: 15px;\n    height: 15px;\n    opacity: 0.8;\n}\n\n\n/* Remove old styles that are no longer needed */\n.right-side,\n.agent-thumbnail-icon,\n.bottom-container,\n.open-link,\n.eself-logo {\n    display: none;\n}\n\n@media screen and (max-width: 640px) {\n    .eself-widget-container {\n        width: 280px !important;\n        height: 70px !important;\n    }\n\n    .talk-now-button {\n        padding: 10px 16px;\n        font-size: 13px;\n        min-width: 120px;\n    }\n\n    .camera-icon {\n        width: 16px;\n        height: 16px;\n    }\n}\n\n@media screen and (max-width: 450px) {\n    .eself-widget-container {\n        width: 260px !important;\n        height: 65px !important;\n    }\n\n    .talk-now-button {\n        padding: 8px 14px;\n        font-size: 12px;\n        min-width: 110px;\n    }\n\n    .camera-icon {\n        width: 15px;\n        height: 15px;\n    }\n}\n\n@media screen and (max-width: 435px) {\n    .eself-widget-container {\n        width: 240px !important;\n        height: 60px !important;\n    }\n\n    .talk-now-button {\n        padding: 8px 12px;\n        font-size: 11px;\n        min-width: 100px;\n    }\n\n    .camera-icon {\n        width: 14px;\n        height: 14px;\n    }\n}\n\n@media screen and (max-width: 340px) {\n    .eself-widget-container {\n        width: 220px !important;\n        height: 55px !important;\n    }\n\n    .talk-now-button {\n        padding: 6px 10px;\n        font-size: 10px;\n        min-width: 90px;\n    }\n\n    .camera-icon {\n        width: 13px;\n        height: 13px;\n    }\n}", ""]);
				const s = r
			},
			935: n => {
				n.exports = function(n) {
					var t = [];
					return t.toString = function() {
						return this.map(function(t) {
							var e = "",
								i = void 0 !== t[5];
							return t[4] && (e += "@supports (".concat(t[4], ") {")), t[2] && (e += "@media ".concat(t[2], " {")), i && (e += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), e += n(t), i && (e += "}"), t[2] && (e += "}"), t[4] && (e += "}"), e
						}).join("")
					}, t.i = function(n, e, i, o, a) {
						"string" == typeof n && (n = [
							[null, n, void 0]
						]);
						var r = {};
						if (i)
							for (var s = 0; s < this.length; s++) {
								var p = this[s][0];
								null != p && (r[p] = !0)
							}
						for (var l = 0; l < n.length; l++) {
							var c = [].concat(n[l]);
							i && r[c[0]] || (void 0 !== a && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = a), e && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = e) : c[2] = e), o && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = o) : c[4] = "".concat(o)), t.push(c))
						}
					}, t
				}
			}
		},
		t = {};

	function e(i) {
		var o = t[i];
		if (void 0 !== o) return o.exports;
		var a = t[i] = {
			id: i,
			exports: {}
		};
		return n[i](a, a.exports, e), a.exports
	}
	e.n = n => {
		var t = n && n.__esModule ? () => n.default : () => n;
		return e.d(t, {
			a: t
		}), t
	}, e.d = (n, t) => {
		for (var i in t) e.o(t, i) && !e.o(n, i) && Object.defineProperty(n, i, {
			enumerable: !0,
			get: t[i]
		})
	}, e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t), e.r = n => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(n, "__esModule", {
			value: !0
		})
	}, e.nc = void 0;
	(() => {
		e(486), e(490);
		const n = e(147);
		console.log(n.analytics);
		(async () => {
			const t = (() => {
					if (document.currentScript) return document.currentScript;
					const n = document.getElementsByTagName("script");
					return n[n.length - 1]
				})(),
				e = t.getAttribute("data-client"),
				i = t.getAttribute("data-flow-id");
			if (console.log(`eself script data | client ${e} | flowId ${i}`), !e || !i) return void console.error("Missing required parameters: data-client and data-flow-id attributes must be provided on the script tag");
			const o = `https://api.avatar.us.kaltura.ai/clients/${t.getAttribute("data-client")}/flow/${t.getAttribute("data-flow-id")}/sdk-assets`;
			console.log(`Fetching SDK assets from ${o}`);
			const a = await fetch(o).then(n => n.json());
			if (!a) return;
			const r = document.createElement("div");
			r.innerHTML = `\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" />\n\n        <div class="eself-widget-container" id="eself-open-button">\n            <video\n                class="widget-background-video"\n                autoplay\n                muted\n                playsinline\n                loop\n                src="${a.avatar.videos[0]}"\n                poster="${a.avatar.videos[0]}"\n            ></video>\n            <div class="widget-content">\n                <button class="talk-now-button">\n                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" class="svg-inline--fa fa-video fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" >\n                  <path fill="currentColor" d="M336.2 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h288.2c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM527.6 95.1L416 167.7v176.6l111.6 72.6c15.9 10.4 37.3-1.5 37.3-20.9V116c0-19.4-21.4-31.3-37.3-20.9z"></path>\n                </svg>\n                    <span class="talk-now-text">Virtual TA</span>\n                </button>\n                <img\n                    class="close-icon"\n                    id="eself-close-button"\n                    alt=""\n                    src="https://assets.eself.ai/generic/close.svg"\n                />\n            </div>\n        </div>\n        <div class="iframe-container" id="iframe-container">\n            <div class="iframe-box">\n                <span id="end-call-button"\n                    ><img class="close-iframe-button" src="https://assets.eself.ai/generic/end-call.svg"\n                /></span>\n                <iframe\n                    id="eself-iframe"\n                    src="${a.talk_url}"\n                    sandbox="allow-same-origin allow-scripts allow-forms"\n                    allow="camera https://meet.eself.ai/ https://meet.avatar.us.kaltura.ai/; microphone https://meet.eself.ai/ https://meet.avatar.us.kaltura.ai/; display-capture https://meet.eself.ai/ https://meet.avatar.us.kaltura.ai/"\n                    frameborder="0"\n                    width="100%"\n                    height="100%"\n                ></iframe>\n            </div>\n        </div>\n    `, document.body.appendChild(r);
			const s = document.getElementById("eself-open-button"),
				p = document.getElementById("eself-close-button"),
				l = document.getElementById("end-call-button"),
				c = document.getElementById("iframe-container"),
				d = document.getElementById("eself-iframe");
			var u;
			u = e, n.analytics.register({
				client: u
			}), n.analytics.track("SDK - Analytics loaded", {
				user_agent: navigator.userAgent.toLowerCase()
			}), s.addEventListener("click", () => {
				n.analytics.track("SDK - user clicked open widget button", {
					user_agent: navigator.userAgent.toLowerCase()
				}), c.style.display = "block", s.style.visibility = "hidden"
			}), p.addEventListener("click", t => {
				n.analytics.track("SDK - user clicked close widget button", {
					user_agent: navigator.userAgent.toLowerCase()
				}), s.style.display = "none", t.stopPropagation()
			}), l.addEventListener("click", () => {
				n.analytics.track("SDK - user clicked hangup button", {
					user_agent: navigator.userAgent.toLowerCase()
				}), c.style.display = "none";
				const t = d.src;
				d.src = t, s.style.visibility = "visible"
			})
		})()
	})()
})();
