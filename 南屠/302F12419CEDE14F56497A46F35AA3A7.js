require("@babel/runtime/helpers/Arrayincludes.js");
var t = require("@babel/runtime/helpers/createForOfIteratorHelper.js"),
  e = require("@babel/runtime/helpers/classCallCheck.js"),
  n = require("@babel/runtime/helpers/createClass.js"),
  r = require("@babel/runtime/helpers/typeof.js"),
  i = require("@babel/runtime/helpers/defineProperty.js"),
  o = require("@babel/runtime/helpers/slicedToArray.js"),
  s = require("@babel/runtime/helpers/toConsumableArray.js");

function a(t, e) {
  for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
  return e ? function (t) {
    return !!n[t.toLowerCase()]
  } : function (t) {
    return !!n[t]
  }
}
var u = /;(?![^(]*\))/g,
  c = /:([^]+)/,
  h = /\/\*[\s\S]*?\*\//g;

function l(t) {
  var e = {};
  return t.replace(h, "").split(u).forEach((function (t) {
    if (t) {
      var n = t.split(c);
      n.length > 1 && (e[n[0].trim()] = n[1].trim())
    }
  })), e
}
var f = function t(e, n) {
    return n && n.__v_isRef ? t(e, n.value) : E(n) ? i({}, "Map(".concat(n.size, ")"), s(n.entries()).reduce((function (t, e) {
      var n = o(e, 2),
        r = n[0],
        i = n[1];
      return t["".concat(r, " =>")] = i, t
    }), {})) : O(n) ? i({}, "Set(".concat(n.size, ")"), s(n.values())) : !C(n) || T(n) || N(n) ? n : String(n)
  },
  p = {},
  d = [],
  v = function () {},
  g = function () {
    return !1
  },
  m = /^on[^a-z]/,
  y = function (t) {
    return m.test(t)
  },
  b = function (t) {
    return t.startsWith("onUpdate:")
  },
  x = Object.assign,
  w = function (t, e) {
    var n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
  },
  S = Object.prototype.hasOwnProperty,
  _ = function (t, e) {
    return S.call(t, e)
  },
  T = Array.isArray,
  E = function (t) {
    return "[object Map]" === I(t)
  },
  O = function (t) {
    return "[object Set]" === I(t)
  },
  k = function (t) {
    return "function" == typeof t
  },
  A = function (t) {
    return "string" == typeof t
  },
  D = function (t) {
    return "symbol" == r(t)
  },
  C = function (t) {
    return null !== t && "object" == r(t)
  },
  P = function (t) {
    return C(t) && k(t.then) && k(t.catch)
  },
  R = Object.prototype.toString,
  I = function (t) {
    return R.call(t)
  },
  N = function (t) {
    return "[object Object]" === I(t)
  },
  V = function (t) {
    return A(t) && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t
  },
  j = a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  B = function (t) {
    var e = Object.create(null);
    return function (n) {
      return e[n] || (e[n] = t(n))
    }
  },
  $ = /-(\w)/g,
  M = B((function (t) {
    return t.replace($, (function (t, e) {
      return e ? e.toUpperCase() : ""
    }))
  })),
  L = /\B([A-Z])/g,
  H = B((function (t) {
    return t.replace(L, "-$1").toLowerCase()
  })),
  q = B((function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1)
  })),
  U = B((function (t) {
    return t ? "on".concat(q(t)) : ""
  })),
  F = function (t, e) {
    return !Object.is(t, e)
  },
  K = function (t, e) {
    for (var n = 0; n < t.length; n++) t[n](e)
  },
  z = function (t) {
    var e = parseFloat(t);
    return isNaN(e) ? t : e
  },
  G = "onShow",
  W = "onHide",
  Z = "onLaunch",
  J = "onError",
  Y = "onThemeChange",
  Q = "onPageNotFound",
  X = "onUnhandledRejection",
  tt = "onLoad",
  et = "onReady",
  nt = "onUnload",
  rt = "onSaveExitState",
  it = "onResize",
  ot = "onBackPress",
  st = "onPageScroll",
  at = "onTabItemTap",
  ut = "onReachBottom",
  ct = "onPullDownRefresh",
  ht = "onShareTimeline",
  lt = "onAddToFavorites",
  ft = "onShareAppMessage",
  pt = "onNavigationBarButtonTap",
  dt = "onNavigationBarSearchInputClicked",
  vt = "onNavigationBarSearchInputChanged",
  gt = "onNavigationBarSearchInputConfirmed",
  mt = "onNavigationBarSearchInputFocusChanged",
  yt = /:/g;

function bt(t) {
  var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  return function () {
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
    return t && (e = t.apply(n, i), t = null), e
  }
}

function xt(t) {
  var e = {};
  return N(t) && Object.keys(t).sort().forEach((function (n) {
    var r = n;
    e[r] = t[r]
  })), Object.keys(e) ? e : t
}
var wt = encodeURIComponent;

function St(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wt,
    n = t ? Object.keys(t).map((function (n) {
      var i = t[n];
      return void 0 === r(i) || null === i ? i = "" : N(i) && (i = JSON.stringify(i)), e(n) + "=" + e(i)
    })).filter((function (t) {
      return t.length > 0
    })).join("&") : null;
  return n ? "?".concat(n) : ""
}
var _t, Tt = ["onInit", tt, G, W, nt, ot, st, at, ut, ct, ht, ft, lt, rt, pt, dt, vt, gt, mt],
  Et = [G, W, Z, J, Y, Q, X, "onExit", "onInit", tt, et, nt, it, ot, st, at, ut, ct, ht, lt, ft, rt, pt, dt, vt, gt, mt],
  Ot = {
    onPageScroll: 1,
    onShareAppMessage: 2,
    onShareTimeline: 4
  };

function kt(t, e) {
  var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  return !(n && !k(e)) && (Et.indexOf(t) > -1 || 0 === t.indexOf("on"))
}
var At = [],
  Dt = bt((function (t, e) {
    if (k(t._component.onError)) return e(t)
  })),
  Ct = function () {};
Ct.prototype = {
  on: function (t, e, n) {
    var r = this.e || (this.e = {});
    return (r[t] || (r[t] = [])).push({
      fn: e,
      ctx: n
    }), this
  },
  once: function (t, e, n) {
    var r = this;

    function i() {
      r.off(t, i), e.apply(n, arguments)
    }
    return i._ = e, this.on(t, i, n)
  },
  emit: function (t) {
    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, e);
    return this
  },
  off: function (t, e) {
    var n = this.e || (this.e = {}),
      r = n[t],
      i = [];
    if (r && e)
      for (var o = 0, s = r.length; o < s; o++) r[o].fn !== e && r[o].fn._ !== e && i.push(r[o]);
    return i.length ? n[t] = i : delete n[t], this
  }
};
var Pt = Ct,
  Rt = ["{", "}"],
  It = /^(?:\d)+/,
  Nt = /^(?:\w)+/,
  Vt = "zh-Hans",
  jt = "zh-Hant",
  Bt = "en",
  $t = Object.prototype.hasOwnProperty,
  Mt = function (t, e) {
    return $t.call(t, e)
  },
  Lt = new(function () {
    function t() {
      e(this, t), this._caches = Object.create(null)
    }
    return n(t, [{
      key: "interpolate",
      value: function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Rt;
        if (!e) return [t];
        var i = this._caches[t];
        return i || (i = function (t, e) {
            for (var n = o(e, 2), r = n[0], i = n[1], s = [], a = 0, u = ""; a < t.length;) {
              var c = t[a++];
              if (c === r) {
                u && s.push({
                  type: "text",
                  value: u
                }), u = "";
                var h = "";
                for (c = t[a++]; void 0 !== c && c !== i;) h += c, c = t[a++];
                var l = c === i,
                  f = It.test(h) ? "list" : l && Nt.test(h) ? "named" : "unknown";
                s.push({
                  value: h,
                  type: f
                })
              } else u += c
            }
            return u && s.push({
              type: "text",
              value: u
            }), s
          }(t, n), this._caches[t] = i),
          function (t, e) {
            var n, i = [],
              o = 0,
              s = Array.isArray(e) ? "list" : null !== (n = e) && "object" == r(n) ? "named" : "unknown";
            if ("unknown" === s) return i;
            for (; o < t.length;) {
              var a = t[o];
              switch (a.type) {
                case "text":
                  i.push(a.value);
                  break;
                case "list":
                  i.push(e[parseInt(a.value, 10)]);
                  break;
                case "named":
                  "named" === s && i.push(e[a.value])
              }
              o++
            }
            return i
          }(i, e)
      }
    }]), t
  }());

function Ht(t, e) {
  if (t) {
    if (t = t.trim().replace(/_/g, "-"), e && e[t]) return t;
    if ("chinese" === (t = t.toLowerCase())) return Vt;
    if (0 === t.indexOf("zh")) return t.indexOf("-hans") > -1 ? Vt : t.indexOf("-hant") > -1 ? jt : (n = t, ["-tw", "-hk", "-mo", "-cht"].find((function (t) {
      return -1 !== n.indexOf(t)
    })) ? jt : Vt);
    var n, r = [Bt, "fr", "es"];
    return e && Object.keys(e).length > 0 && (r = Object.keys(e)),
      function (t, e) {
        return e.find((function (e) {
          return 0 === t.indexOf(e)
        }))
      }(t, r) || void 0
  }
}
var qt = function () {
  function t(n) {
    var r = n.locale,
      i = n.fallbackLocale,
      o = n.messages,
      s = n.watcher,
      a = n.formater;
    e(this, t), this.locale = Bt, this.fallbackLocale = Bt, this.message = {}, this.messages = {}, this.watchers = [], i && (this.fallbackLocale = i), this.formater = a || Lt, this.messages = o || {}, this.setLocale(r || Bt), s && this.watchLocale(s)
  }
  return n(t, [{
    key: "setLocale",
    value: function (t) {
      var e = this,
        n = this.locale;
      this.locale = Ht(t, this.messages) || this.fallbackLocale, this.messages[this.locale] || (this.messages[this.locale] = {}), this.message = this.messages[this.locale], n !== this.locale && this.watchers.forEach((function (t) {
        t(e.locale, n)
      }))
    }
  }, {
    key: "getLocale",
    value: function () {
      return this.locale
    }
  }, {
    key: "watchLocale",
    value: function (t) {
      var e = this,
        n = this.watchers.push(t) - 1;
      return function () {
        e.watchers.splice(n, 1)
      }
    }
  }, {
    key: "add",
    value: function (t, e) {
      var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        r = this.messages[t];
      r ? n ? Object.assign(r, e) : Object.keys(e).forEach((function (t) {
        Mt(r, t) || (r[t] = e[t])
      })) : this.messages[t] = e
    }
  }, {
    key: "f",
    value: function (t, e, n) {
      return this.formater.interpolate(t, e, n).join("")
    }
  }, {
    key: "t",
    value: function (t, e, n) {
      var r = this.message;
      return "string" == typeof e ? (e = Ht(e, this.messages)) && (r = this.messages[e]) : n = e, Mt(r, t) ? this.formater.interpolate(r[t], n).join("") : t
    }
  }]), t
}();

function Ut(t) {
  return function () {
    try {
      return t.apply(t, arguments)
    } catch (t) {}
  }
}
var Ft = 1,
  Kt = {};

function zt(t, e, n) {
  if ("number" == typeof t) {
    var r = Kt[t];
    if (r) return r.keepAlive || delete Kt[t], r.callback(e, n)
  }
  return e
}
var Gt = "success",
  Wt = "fail",
  Zt = "complete";
var Jt = "success",
  Yt = "fail",
  Qt = "complete",
  Xt = {},
  te = {};

function ee(t, e) {
  return function (n) {
    return t(n, e) || n
  }
}

function ne(t, e, n) {
  for (var r = !1, i = 0; i < t.length; i++) {
    var o = t[i];
    if (r) r = Promise.resolve(ee(o, n));
    else {
      var s = o(e, n);
      if (P(s) && (r = Promise.resolve(s)), !1 === s) return {
        then: function () {},
        catch: function () {}
      }
    }
  }
  return r || {
    then: function (t) {
      return t(e)
    },
    catch: function () {}
  }
}

function re(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return [Jt, Yt, Qt].forEach((function (n) {
    var r = t[n];
    if (T(r)) {
      var i = e[n];
      e[n] = function (t) {
        ne(r, t, e).then((function (t) {
          return k(i) && i(t) || t
        }))
      }
    }
  })), e
}

function ie(t, e) {
  var n = [];
  T(Xt.returnValue) && n.push.apply(n, s(Xt.returnValue));
  var r = te[t];
  return r && T(r.returnValue) && n.push.apply(n, s(r.returnValue)), n.forEach((function (t) {
    e = t(e) || e
  })), e
}

function oe(t) {
  var e = Object.create(null);
  Object.keys(Xt).forEach((function (t) {
    "returnValue" !== t && (e[t] = Xt[t].slice())
  }));
  var n = te[t];
  return n && Object.keys(n).forEach((function (t) {
    "returnValue" !== t && (e[t] = (e[t] || []).concat(n[t]))
  })), e
}

function se(t, e, n, r) {
  var i = oe(t);
  return i && Object.keys(i).length ? T(i.invoke) ? ne(i.invoke, n).then((function (n) {
    return e.apply(void 0, [re(oe(t), n)].concat(s(r)))
  })) : e.apply(void 0, [re(i, n)].concat(s(r))) : e.apply(void 0, [n].concat(s(r)))
}

function ae(t, e, n, r) {
  return zt(t, x({
    errMsg: e + ":fail" + (n ? " " + n : "")
  }, r))
}

function ue(t, e, n, r) {
  if (r && r.beforeInvoke) {
    var i = r.beforeInvoke(e);
    if (A(i)) return i
  }
  var o = function (t, e) {
    var n = t[0];
    if (e && (N(e.formatArgs) || !N(n)))
      for (var r = e.formatArgs, i = Object.keys(r), o = 0; o < i.length; o++) {
        var s = i[o],
          a = r[s];
        if (k(a)) {
          var u = a(t[0][s], n);
          if (A(u)) return u
        } else _(n, s) || (n[s] = a)
      }
  }(e, r);
  if (o) return o
}

function ce(t, e, n, r) {
  return function (n) {
    var i = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.beforeAll,
          i = n.beforeSuccess;
        N(e) || (e = {});
        var o = function (t) {
            var e = {};
            for (var n in t) {
              var r = t[n];
              k(r) && (e[n] = Ut(r), delete t[n])
            }
            return e
          }(e),
          s = o.success,
          a = o.fail,
          u = o.complete,
          c = k(s),
          h = k(a),
          l = k(u),
          f = Ft++;
        return function (t, e, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          Kt[t] = {
            name: e,
            keepAlive: r,
            callback: n
          }
        }(f, t, (function (n) {
          (n = n || {}).errMsg = function (t, e) {
            return t && -1 !== t.indexOf(":fail") ? e + t.substring(t.indexOf(":fail")) : e + ":ok"
          }(n.errMsg, t), k(r) && r(n), n.errMsg === t + ":ok" ? (k(i) && i(n, e), c && s(n)) : h && a(n), l && u(n)
        })), f
      }(t, n, r),
      o = ue(0, [n], 0, r);
    return o ? ae(i, t, o) : e(n, {
      resolve: function (e) {
        return function (t, e, n) {
          return zt(t, x(n || {}, {
            errMsg: e + ":ok"
          }))
        }(i, t, e)
      },
      reject: function (e, n) {
        return ae(i, t, function (t) {
          return !t || A(t) ? t : t.stack ? t.message : t
        }(e), n)
      }
    })
  }
}

function he(t, e, n, r) {
  return function (t, e, n, r) {
    return function () {
      for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      var o = ue(0, n, 0, r);
      if (o) throw new Error(o);
      return e.apply(null, n)
    }
  }(0, e, 0, r)
}
var le = !1,
  fe = 0,
  pe = 0;
var de = he(0, (function (t, e) {
  if (0 === fe && function () {
      var t = wx.getSystemInfoSync(),
        e = t.platform,
        n = t.pixelRatio,
        r = t.windowWidth;
      fe = r, pe = n, le = "ios" === e
    }(), 0 === (t = Number(t))) return 0;
  var n = t / 750 * (e || fe);
  return n < 0 && (n = -n), 0 === (n = Math.floor(n + 1e-4)) && (n = 1 !== pe && le ? .5 : 1), t < 0 ? -n : n
}));

function ve(t, e) {
  Object.keys(e).forEach((function (n) {
    k(e[n]) && (t[n] = function (t, e) {
      var n = e ? t ? t.concat(e) : T(e) ? e : [e] : t;
      return n ? function (t) {
        for (var e = [], n = 0; n < t.length; n++) - 1 === e.indexOf(t[n]) && e.push(t[n]);
        return e
      }(n) : n
    }(t[n], e[n]))
  }))
}

function ge(t, e) {
  t && e && Object.keys(e).forEach((function (n) {
    var r = t[n],
      i = e[n];
    T(r) && k(i) && w(r, i)
  }))
}
var me, ye, be, xe = he(0, (function (t, e) {
    A(t) && N(e) ? ve(te[t] || (te[t] = {}), e) : N(t) && ve(Xt, t)
  })),
  we = he(0, (function (t, e) {
    A(t) ? N(e) ? ge(te[t], e) : delete te[t] : N(t) && ge(Xt, t)
  })),
  Se = new Pt,
  _e = he(0, (function (t, e) {
    return Se.on(t, e),
      function () {
        return Se.off(t, e)
      }
  })),
  Te = he(0, (function (t, e) {
    return Se.once(t, e),
      function () {
        return Se.off(t, e)
      }
  })),
  Ee = he(0, (function (t, e) {
    t ? (T(t) || (t = [t]), t.forEach((function (t) {
      return Se.off(t, e)
    }))) : Se.e = {}
  })),
  Oe = he(0, (function (t) {
    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
    Se.emit.apply(Se, [t].concat(n))
  }));

function ke(t) {
  try {
    return JSON.parse(t)
  } catch (t) {}
  return t
}
var Ae = [];

function De(t, e) {
  Ae.forEach((function (n) {
    n(t, e)
  })), Ae.length = 0
}
var Ce = function (t, e) {
    return function () {
      for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
      return function (t) {
        return !(!N(t) || ![Gt, Wt, Zt].find((function (e) {
          return k(t[e])
        })))
      }(n) ? ie(t, se(t, e, n, i)) : ie(t, new Promise((function (r, o) {
        se(t, e, x(n, {
          success: r,
          fail: o
        }), i)
      })))
    }
  }("getPushClientId", ce("getPushClientId", (function (t, e) {
    var n = e.resolve,
      r = e.reject;
    Promise.resolve().then((function () {
      void 0 === be && (be = !1, me = "", ye = "uniPush is not enabled"), Ae.push((function (t, e) {
        t ? n({
          cid: t
        }) : r(e)
      })), void 0 !== me && De(me, ye)
    }))
  }), 0, void 0)),
  Pe = [],
  Re = /^\$|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/,
  Ie = /^create|Manager$/,
  Ne = ["createBLEConnection"],
  Ve = ["createBLEConnection"],
  je = /^on|^off/;

function Be(t) {
  return Ie.test(t) && -1 === Ne.indexOf(t)
}

function $e(t) {
  return Re.test(t) && -1 === Ve.indexOf(t)
}

function Me(t, e) {
  return function (t) {
    return !(Be(t) || $e(t) || function (t) {
      return je.test(t) && "onPush" !== t
    }(t))
  }(t) && k(e) ? function () {
    for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
    return k(n.success) || k(n.fail) || k(n.complete) ? ie(t, se(t, e, n, i)) : ie(t, new Promise((function (r, o) {
      se(t, e, x({}, n, {
        success: r,
        fail: o
      }), i)
    })))
  } : e
}
Promise.prototype.finally || (Promise.prototype.finally = function (t) {
  var e = this.constructor;
  return this.then((function (n) {
    return e.resolve(t && t()).then((function () {
      return n
    }))
  }), (function (n) {
    return e.resolve(t && t()).then((function () {
      throw n
    }))
  }))
});
var Le = ["success", "fail", "cancel", "complete"],
  He = function () {
    var t = k(getApp) && getApp({
      allowDefault: !0
    });
    return t && t.$vm ? t.$vm.$locale : Ht(wx.getSystemInfoSync().language) || Bt
  },
  qe = [];
"undefined" != typeof global && (global.getLocale = He);
var Ue, Fe = "__DC_STAT_UUID";

function Ke() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wx;
  return function (e, n) {
    (Ue = Ue || t.getStorageSync(Fe)) || (Ue = Date.now() + "" + Math.floor(1e7 * Math.random()), wx.setStorage({
      key: Fe,
      data: Ue
    })), n.deviceId = Ue
  }
}

function ze(t, e) {
  if (t.safeArea) {
    var n = t.safeArea;
    e.safeAreaInsets = {
      top: n.top,
      left: n.left,
      right: t.windowWidth - n.right,
      bottom: t.screenHeight - n.bottom
    }
  }
}

function Ge(t, e) {
  for (var n = t.deviceType || "phone", r = {
      ipad: "pad",
      windows: "pc",
      mac: "pc"
    }, i = Object.keys(r), o = e.toLocaleLowerCase(), s = 0; s < i.length; s++) {
    var a = i[s];
    if (-1 !== o.indexOf(a)) {
      n = r[a];
      break
    }
  }
  return n
}

function We(t) {
  var e = t;
  return e && (e = e.toLocaleLowerCase()), e
}

function Ze(t) {
  return He ? He() : t
}

function Je(t) {
  var e = t.hostName || "WeChat";
  return t.environment ? e = t.environment : t.host && t.host.env && (e = t.host.env), e
}
var Ye = {
    returnValue: function (t, e) {
      ze(t, e), Ke()(t, e),
        function (t, e) {
          var n, r = t.brand,
            i = void 0 === r ? "" : r,
            o = t.model,
            s = void 0 === o ? "" : o,
            a = t.system,
            u = void 0 === a ? "" : a,
            c = t.language,
            h = void 0 === c ? "" : c,
            l = t.theme,
            f = t.version,
            p = (t.platform, t.fontSizeSetting),
            d = t.SDKVersion,
            v = t.pixelRatio,
            g = t.deviceOrientation,
            m = "";
          m = u.split(" ")[0] || "", n = u.split(" ")[1] || "";
          var y = f,
            b = Ge(t, s),
            w = We(i),
            S = Je(t),
            _ = g,
            T = v,
            E = d,
            O = h.replace(/_/g, "-"),
            k = {
              appId: "",
              appName: "",
              appVersion: "1.0.0",
              appVersionCode: "100",
              appLanguage: Ze(O),
              uniCompileVersion: "3.98",
              uniRuntimeVersion: "3.98",
              uniPlatform: "mp-weixin",
              deviceBrand: w,
              deviceModel: s,
              deviceType: b,
              devicePixelRatio: T,
              deviceOrientation: _,
              osName: m.toLocaleLowerCase(),
              osVersion: n,
              hostTheme: l,
              hostVersion: y,
              hostLanguage: O,
              hostName: S,
              hostSDKVersion: E,
              hostFontSizeSetting: p,
              windowTop: 0,
              windowBottom: 0,
              osLanguage: void 0,
              osTheme: void 0,
              ua: void 0,
              hostPackageName: void 0,
              browserName: void 0,
              browserVersion: void 0
            };
          x(e, k)
        }(t, e)
    }
  },
  Qe = Ye,
  Xe = {
    args: function (t, e) {
      var n = parseInt(t.current);
      if (!isNaN(n)) {
        var r = t.urls;
        if (T(r)) {
          var i = r.length;
          return i ? (n < 0 ? n = 0 : n >= i && (n = i - 1), n > 0 ? (e.current = r[n], e.urls = r.filter((function (t, e) {
            return !(e < n) || t !== r[n]
          }))) : e.current = r[0], {
            indicator: !1,
            loop: !1
          }) : void 0
        }
      }
    }
  },
  tn = {
    returnValue: function (t, e) {
      var n = t.brand,
        r = t.model,
        i = Ge(t, r),
        o = We(n);
      Ke()(t, e), e = xt(x(e, {
        deviceType: i,
        deviceBrand: o,
        deviceModel: r
      }))
    }
  },
  en = {
    returnValue: function (t, e) {
      var n = t.version,
        r = t.language,
        i = t.SDKVersion,
        o = t.theme,
        s = Je(t),
        a = r.replace(/_/g, "-");
      e = xt(x(e, {
        hostVersion: n,
        hostLanguage: a,
        hostName: s,
        hostSDKVersion: i,
        hostTheme: o,
        appId: "",
        appName: "",
        appVersion: "1.0.0",
        appVersionCode: "100",
        appLanguage: Ze(a)
      }))
    }
  },
  nn = {
    returnValue: function (t, e) {
      ze(t, e), e = xt(x(e, {
        windowTop: 0,
        windowBottom: 0
      }))
    }
  },
  rn = {
    $on: _e,
    $off: Ee,
    $once: Te,
    $emit: Oe,
    upx2px: de,
    interceptors: {},
    addInterceptor: xe,
    removeInterceptor: we,
    onCreateVueApp: function (t) {
      if (_t) return t(_t);
      At.push(t)
    },
    invokeCreateVueAppHook: function (t) {
      _t = t, At.forEach((function (e) {
        return e(t)
      }))
    },
    getLocale: He,
    setLocale: function (t) {
      var e = k(getApp) && getApp();
      return !!e && (e.$vm.$locale !== t && (e.$vm.$locale = t, qe.forEach((function (e) {
        return e({
          locale: t
        })
      })), !0))
    },
    onLocaleChange: function (t) {
      -1 === qe.indexOf(t) && qe.push(t)
    },
    getPushClientId: Ce,
    onPushMessage: function (t) {
      -1 === Pe.indexOf(t) && Pe.push(t)
    },
    offPushMessage: function (t) {
      if (t) {
        var e = Pe.indexOf(t);
        e > -1 && Pe.splice(e, 1)
      } else Pe.length = 0
    },
    invokePushCallback: function (t) {
      if ("enabled" === t.type) be = !0;
      else if ("clientId" === t.type) me = t.cid, ye = t.errMsg, De(me, t.errMsg);
      else if ("pushMsg" === t.type)
        for (var e = {
            type: "receive",
            data: ke(t.message)
          }, n = 0; n < Pe.length && ((0, Pe[n])(e), !e.stopped); n++);
      else "click" === t.type && Pe.forEach((function (e) {
        e({
          type: "click",
          data: ke(t.message)
        })
      }))
    }
  },
  on = ["qy", "env", "error", "version", "lanDebug", "cloud", "serviceMarket", "router", "worklet", "__webpack_require_UNI_MP_PLUGIN__"],
  sn = ["lanDebug", "router", "worklet"],
  an = wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : null;

function un(t) {
  return (!an || 1154 !== an.scene || !sn.includes(t)) && (on.indexOf(t) > -1 || "function" == typeof wx[t])
}

function cn() {
  var t = {};
  for (var e in wx) un(e) && (t[e] = wx[e]);
  return "undefined" != typeof globalThis && "undefined" == typeof requireMiniProgram && (globalThis.wx = t), t
}
var hn, ln = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"],
  fn = (hn = {
    oauth: ["weixin"],
    share: ["weixin"],
    payment: ["wxpay"],
    push: ["weixin"]
  }, function (t) {
    var e, n = t.service,
      r = t.success,
      i = t.fail,
      o = t.complete;
    hn[n] ? (e = {
      errMsg: "getProvider:ok",
      service: n,
      provider: hn[n]
    }, k(r) && r(e)) : (e = {
      errMsg: "getProvider:fail:服务[" + n + "]不存在"
    }, k(i) && i(e)), k(o) && o(e)
  }),
  pn = cn(),
  dn = pn.getAppBaseInfo && pn.getAppBaseInfo();
dn || (dn = pn.getSystemInfoSync());
var vn, gn, mn = dn ? dn.host : null,
  yn = mn && "SAAASDK" === mn.env ? pn.miniapp.shareVideoMessage : pn.shareVideoMessage,
  bn = Object.freeze({
    __proto__: null,
    createSelectorQuery: function () {
      var t = pn.createSelectorQuery(),
        e = t.in;
      return t.in = function (t) {
        return e.call(this, function (t) {
          var e = Object.create(null);
          return ln.forEach((function (n) {
            e[n] = t[n]
          })), e
        }(t))
      }, t
    },
    getProvider: fn,
    shareVideoMessage: yn
  }),
  xn = Object.freeze({
    __proto__: null,
    compressImage: {
      args: function (t, e) {
        t.compressedHeight && !e.compressHeight && (e.compressHeight = t.compressedHeight), t.compressedWidth && !e.compressWidth && (e.compressWidth = t.compressedWidth)
      }
    },
    getAppAuthorizeSetting: {
      returnValue: function (t, e) {
        var n = t.locationReducedAccuracy;
        e.locationAccuracy = "unsupported", !0 === n ? e.locationAccuracy = "reduced" : !1 === n && (e.locationAccuracy = "full")
      }
    },
    getAppBaseInfo: en,
    getDeviceInfo: tn,
    getSystemInfo: Ye,
    getSystemInfoSync: Qe,
    getWindowInfo: nn,
    previewImage: Xe,
    redirectTo: {},
    showActionSheet: {
      args: function (t, e) {
        e.alertText = t.title
      }
    }
  }),
  wn = cn(),
  Sn = function (t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wx,
      r = function (t) {
        function e(t, e, n) {
          return function (i) {
            return e(r(t, i, n))
          }
        }

        function n(t, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (N(n)) {
            var s = !0 === o ? n : {};
            for (var a in k(r) && (r = r(n, s) || {}), n)
              if (_(r, a)) {
                var u = r[a];
                k(u) && (u = u(n[a], n, s)), u && (A(u) ? s[u] = n[a] : N(u) && (s[u.name ? u.name : a] = u.value))
              } else if (-1 !== Le.indexOf(a)) {
              var c = n[a];
              k(c) && (s[a] = e(t, c, i))
            } else o || _(s, a) || (s[a] = n[a]);
            return s
          }
          return k(n) && (n = e(t, n, i)), n
        }

        function r(e, r, i) {
          var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          return k(t.returnValue) && (r = t.returnValue(e, r)), n(e, r, i, {}, o)
        }
        return function (e, i) {
          if (!_(t, e)) return i;
          var o = t[e];
          return o ? function (t, i) {
            var s = o;
            k(o) && (s = o(t));
            var a = [t = n(e, t, s.args, s.returnValue)];
            void 0 !== i && a.push(i);
            var u = wx[s.name || e].apply(wx, a);
            return $e(e) ? r(e, u, s.returnValue, Be(e)) : u
          } : function () {}
        }
      }(e);
    return new Proxy({}, {
      get: function (e, i) {
        return _(e, i) ? e[i] : _(t, i) ? Me(i, t[i]) : _(rn, i) ? Me(i, rn[i]) : Me(i, r(i, n[i]))
      }
    })
  }(bn, xn, wn),
  _n = function () {
    function t() {
      var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      e(this, t), this.detached = n, this._active = !0, this.effects = [], this.cleanups = [], this.parent = vn, !n && vn && (this.index = (vn.scopes || (vn.scopes = [])).push(this) - 1)
    }
    return n(t, [{
      key: "active",
      get: function () {
        return this._active
      }
    }, {
      key: "run",
      value: function (t) {
        if (this._active) {
          var e = vn;
          try {
            return vn = this, t()
          } finally {
            vn = e
          }
        }
      }
    }, {
      key: "on",
      value: function () {
        vn = this
      }
    }, {
      key: "off",
      value: function () {
        vn = this.parent
      }
    }, {
      key: "stop",
      value: function (t) {
        if (this._active) {
          var e, n;
          for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].stop();
          for (e = 0, n = this.cleanups.length; e < n; e++) this.cleanups[e]();
          if (this.scopes)
            for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].stop(!0);
          if (!this.detached && this.parent && !t) {
            var r = this.parent.scopes.pop();
            r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
          }
          this.parent = void 0, this._active = !1
        }
      }
    }]), t
  }(),
  Tn = function (t) {
    var e = new Set(t);
    return e.w = 0, e.n = 0, e
  },
  En = function (t) {
    return (t.w & Dn) > 0
  },
  On = function (t) {
    return (t.n & Dn) > 0
  },
  kn = new WeakMap,
  An = 0,
  Dn = 1,
  Cn = Symbol(""),
  Pn = Symbol(""),
  Rn = function () {
    function t(n) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        i = arguments.length > 2 ? arguments[2] : void 0;
      e(this, t), this.fn = n, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0,
        function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vn;
          e && e.active && e.effects.push(t)
        }(this, i)
    }
    return n(t, [{
      key: "run",
      value: function () {
        if (!this.active) return this.fn();
        for (var t = gn, e = Nn; t;) {
          if (t === this) return;
          t = t.parent
        }
        try {
          return this.parent = gn, gn = this, Nn = !0, Dn = 1 << ++An, An <= 30 ? function (t) {
            var e = t.deps;
            if (e.length)
              for (var n = 0; n < e.length; n++) e[n].w |= Dn
          }(this) : In(this), this.fn()
        } finally {
          An <= 30 && function (t) {
            var e = t.deps;
            if (e.length) {
              for (var n = 0, r = 0; r < e.length; r++) {
                var i = e[r];
                En(i) && !On(i) ? i.delete(t) : e[n++] = i, i.w &= ~Dn, i.n &= ~Dn
              }
              e.length = n
            }
          }(this), Dn = 1 << --An, gn = this.parent, Nn = e, this.parent = void 0, this.deferStop && this.stop()
        }
      }
    }, {
      key: "stop",
      value: function () {
        gn === this ? this.deferStop = !0 : this.active && (In(this), this.onStop && this.onStop(), this.active = !1)
      }
    }]), t
  }();

function In(t) {
  var e = t.deps;
  if (e.length) {
    for (var n = 0; n < e.length; n++) e[n].delete(t);
    e.length = 0
  }
}
var Nn = !0,
  Vn = [];

function jn() {
  Vn.push(Nn), Nn = !1
}

function Bn() {
  var t = Vn.pop();
  Nn = void 0 === t || t
}

function $n(t, e, n) {
  if (Nn && gn) {
    var r = kn.get(t);
    r || kn.set(t, r = new Map);
    var i = r.get(n);
    i || r.set(n, i = Tn()), Mn(i)
  }
}

function Mn(t, e) {
  var n = !1;
  An <= 30 ? On(t) || (t.n |= Dn, n = !En(t)) : n = !t.has(gn), n && (t.add(gn), gn.deps.push(t))
}

function Ln(e, n, r, i, o, a) {
  var u = kn.get(e);
  if (u) {
    var c = [];
    if ("clear" === n) c = s(u.values());
    else if ("length" === r && T(e)) {
      var h = Number(i);
      u.forEach((function (t, e) {
        ("length" === e || e >= h) && c.push(t)
      }))
    } else switch (void 0 !== r && c.push(u.get(r)), n) {
      case "add":
        T(e) ? V(r) && c.push(u.get("length")) : (c.push(u.get(Cn)), E(e) && c.push(u.get(Pn)));
        break;
      case "delete":
        T(e) || (c.push(u.get(Cn)), E(e) && c.push(u.get(Pn)));
        break;
      case "set":
        E(e) && c.push(u.get(Cn))
    }
    if (1 === c.length) c[0] && Hn(c[0]);
    else {
      var l, f = [],
        p = t(c);
      try {
        for (p.s(); !(l = p.n()).done;) {
          var d = l.value;
          d && f.push.apply(f, s(d))
        }
      } catch (t) {
        p.e(t)
      } finally {
        p.f()
      }
      Hn(Tn(f))
    }
  }
}

function Hn(e, n) {
  var r, i = T(e) ? e : s(e),
    o = t(i);
  try {
    for (o.s(); !(r = o.n()).done;) {
      var a = r.value;
      a.computed && qn(a)
    }
  } catch (t) {
    o.e(t)
  } finally {
    o.f()
  }
  var u, c = t(i);
  try {
    for (c.s(); !(u = c.n()).done;) {
      var h = u.value;
      h.computed || qn(h)
    }
  } catch (t) {
    c.e(t)
  } finally {
    c.f()
  }
}

function qn(t, e) {
  (t !== gn || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run())
}
var Un = a("__proto__,__v_isRef,__isVue"),
  Fn = new Set(Object.getOwnPropertyNames(Symbol).filter((function (t) {
    return "arguments" !== t && "caller" !== t
  })).map((function (t) {
    return Symbol[t]
  })).filter(D)),
  Kn = Jn(),
  zn = Jn(!1, !0),
  Gn = Jn(!0),
  Wn = function () {
    var t = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach((function (e) {
      t[e] = function () {
        for (var t = Ir(this), n = 0, r = this.length; n < r; n++) $n(t, 0, n + "");
        for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
        var u = t[e].apply(t, o);
        return -1 === u || !1 === u ? t[e].apply(t, s(o.map(Ir))) : u
      }
    })), ["push", "pop", "shift", "unshift", "splice"].forEach((function (e) {
      t[e] = function () {
        jn();
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        var i = Ir(this)[e].apply(this, n);
        return Bn(), i
      }
    })), t
  }();

function Zn(t) {
  var e = Ir(this);
  return $n(e, 0, t), e.hasOwnProperty(t)
}

function Jn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return function (n, r, i) {
    if ("__v_isReactive" === r) return !t;
    if ("__v_isReadonly" === r) return t;
    if ("__v_isShallow" === r) return e;
    if ("__v_raw" === r && i === (t ? e ? Or : Er : e ? Tr : _r).get(n)) return n;
    var o = T(n);
    if (!t) {
      if (o && _(Wn, r)) return Reflect.get(Wn, r, i);
      if ("hasOwnProperty" === r) return Zn
    }
    var s = Reflect.get(n, r, i);
    return (D(r) ? Fn.has(r) : Un(r)) ? s : (t || $n(n, 0, r), e ? s : Mr(s) ? o && V(r) ? s : s.value : C(s) ? t ? Ar(s) : kr(s) : s)
  }
}

function Yn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return function (e, n, r, i) {
    var o = e[n];
    if (Pr(o) && Mr(o) && !Mr(r)) return !1;
    if (!t && (Rr(r) || Pr(r) || (o = Ir(o), r = Ir(r)), !T(e) && Mr(o) && !Mr(r))) return o.value = r, !0;
    var s = T(e) && V(n) ? Number(n) < e.length : _(e, n),
      a = Reflect.set(e, n, r, i);
    return e === Ir(i) && (s ? F(r, o) && Ln(e, "set", n, r) : Ln(e, "add", n, r)), a
  }
}
var Qn = {
    get: Kn,
    set: Yn(),
    deleteProperty: function (t, e) {
      var n = _(t, e);
      t[e];
      var r = Reflect.deleteProperty(t, e);
      return r && n && Ln(t, "delete", e, void 0), r
    },
    has: function (t, e) {
      var n = Reflect.has(t, e);
      return D(e) && Fn.has(e) || $n(t, 0, e), n
    },
    ownKeys: function (t) {
      return $n(t, 0, T(t) ? "length" : Cn), Reflect.ownKeys(t)
    }
  },
  Xn = {
    get: Gn,
    set: function (t, e) {
      return !0
    },
    deleteProperty: function (t, e) {
      return !0
    }
  },
  tr = x({}, Qn, {
    get: zn,
    set: Yn(!0)
  }),
  er = function (t) {
    return t
  },
  nr = function (t) {
    return Reflect.getPrototypeOf(t)
  };

function rr(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    i = Ir(t = t.__v_raw),
    o = Ir(e);
  n || (e !== o && $n(i, 0, e), $n(i, 0, o));
  var s = nr(i),
    a = s.has,
    u = r ? er : n ? jr : Vr;
  return a.call(i, e) ? u(t.get(e)) : a.call(i, o) ? u(t.get(o)) : void(t !== i && t.get(e))
}

function ir(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = this.__v_raw,
    r = Ir(n),
    i = Ir(t);
  return e || (t !== i && $n(r, 0, t), $n(r, 0, i)), t === i ? n.has(t) : n.has(t) || n.has(i)
}

function or(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return t = t.__v_raw, !e && $n(Ir(t), 0, Cn), Reflect.get(t, "size", t)
}

function sr(t) {
  t = Ir(t);
  var e = Ir(this);
  return nr(e).has.call(e, t) || (e.add(t), Ln(e, "add", t, t)), this
}

function ar(t, e) {
  e = Ir(e);
  var n = Ir(this),
    r = nr(n),
    i = r.has,
    o = r.get,
    s = i.call(n, t);
  s || (t = Ir(t), s = i.call(n, t));
  var a = o.call(n, t);
  return n.set(t, e), s ? F(e, a) && Ln(n, "set", t, e) : Ln(n, "add", t, e), this
}

function ur(t) {
  var e = Ir(this),
    n = nr(e),
    r = n.has,
    i = n.get,
    o = r.call(e, t);
  o || (t = Ir(t), o = r.call(e, t)), i && i.call(e, t);
  var s = e.delete(t);
  return o && Ln(e, "delete", t, void 0), s
}

function cr() {
  var t = Ir(this),
    e = 0 !== t.size,
    n = t.clear();
  return e && Ln(t, "clear", void 0, void 0), n
}

function hr(t, e) {
  return function (n, r) {
    var i = this,
      o = i.__v_raw,
      s = Ir(o),
      a = e ? er : t ? jr : Vr;
    return !t && $n(s, 0, Cn), o.forEach((function (t, e) {
      return n.call(r, a(t), a(e), i)
    }))
  }
}

function lr(t, e, n) {
  return function () {
    var r = this.__v_raw,
      o = Ir(r),
      s = E(o),
      a = "entries" === t || t === Symbol.iterator && s,
      u = "keys" === t && s,
      c = r[t].apply(r, arguments),
      h = n ? er : e ? jr : Vr;
    return !e && $n(o, 0, u ? Pn : Cn), i({
      next: function () {
        var t = c.next(),
          e = t.value,
          n = t.done;
        return n ? {
          value: e,
          done: n
        } : {
          value: a ? [h(e[0]), h(e[1])] : h(e),
          done: n
        }
      }
    }, Symbol.iterator, (function () {
      return this
    }))
  }
}

function fr(t) {
  return function () {
    return "delete" !== t && this
  }
}
var pr = function () {
    var t = {
        get: function (t) {
          return rr(this, t)
        },
        get size() {
          return or(this)
        },
        has: ir,
        add: sr,
        set: ar,
        delete: ur,
        clear: cr,
        forEach: hr(!1, !1)
      },
      e = {
        get: function (t) {
          return rr(this, t, !1, !0)
        },
        get size() {
          return or(this)
        },
        has: ir,
        add: sr,
        set: ar,
        delete: ur,
        clear: cr,
        forEach: hr(!1, !0)
      },
      n = {
        get: function (t) {
          return rr(this, t, !0)
        },
        get size() {
          return or(this, !0)
        },
        has: function (t) {
          return ir.call(this, t, !0)
        },
        add: fr("add"),
        set: fr("set"),
        delete: fr("delete"),
        clear: fr("clear"),
        forEach: hr(!0, !1)
      },
      r = {
        get: function (t) {
          return rr(this, t, !0, !0)
        },
        get size() {
          return or(this, !0)
        },
        has: function (t) {
          return ir.call(this, t, !0)
        },
        add: fr("add"),
        set: fr("set"),
        delete: fr("delete"),
        clear: fr("clear"),
        forEach: hr(!0, !0)
      };
    return ["keys", "values", "entries", Symbol.iterator].forEach((function (i) {
      t[i] = lr(i, !1, !1), n[i] = lr(i, !0, !1), e[i] = lr(i, !1, !0), r[i] = lr(i, !0, !0)
    })), [t, n, e, r]
  }(),
  dr = o(pr, 4),
  vr = dr[0],
  gr = dr[1],
  mr = dr[2],
  yr = dr[3];

function br(t, e) {
  var n = e ? t ? yr : mr : t ? gr : vr;
  return function (e, r, i) {
    return "__v_isReactive" === r ? !t : "__v_isReadonly" === r ? t : "__v_raw" === r ? e : Reflect.get(_(n, r) && r in e ? n : e, r, i)
  }
}
var xr = {
    get: br(!1, !1)
  },
  wr = {
    get: br(!1, !0)
  },
  Sr = {
    get: br(!0, !1)
  },
  _r = new WeakMap,
  Tr = new WeakMap,
  Er = new WeakMap,
  Or = new WeakMap;

function kr(t) {
  return Pr(t) ? t : Dr(t, !1, Qn, xr, _r)
}

function Ar(t) {
  return Dr(t, !0, Xn, Sr, Er)
}

function Dr(t, e, n, r, i) {
  if (!C(t)) return t;
  if (t.__v_raw && (!e || !t.__v_isReactive)) return t;
  var o = i.get(t);
  if (o) return o;
  var s, a = (s = t).__v_skip || !Object.isExtensible(s) ? 0 : function (t) {
    switch (t) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0
    }
  }(function (t) {
    return I(t).slice(8, -1)
  }(s));
  if (0 === a) return t;
  var u = new Proxy(t, 2 === a ? r : n);
  return i.set(t, u), u
}

function Cr(t) {
  return Pr(t) ? Cr(t.__v_raw) : !(!t || !t.__v_isReactive)
}

function Pr(t) {
  return !(!t || !t.__v_isReadonly)
}

function Rr(t) {
  return !(!t || !t.__v_isShallow)
}

function Ir(t) {
  var e = t && t.__v_raw;
  return e ? Ir(e) : t
}

function Nr(t) {
  return function (t, e, n) {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      value: n
    })
  }(t, "__v_skip", !0), t
}
var Vr = function (t) {
    return C(t) ? kr(t) : t
  },
  jr = function (t) {
    return C(t) ? Ar(t) : t
  };

function Br(t) {
  Nn && gn && Mn((t = Ir(t)).dep || (t.dep = Tn()))
}

function $r(t, e) {
  var n = (t = Ir(t)).dep;
  n && Hn(n)
}

function Mr(t) {
  return !(!t || !0 !== t.__v_isRef)
}
var Lr = function () {
  function t(n, r) {
    e(this, t), this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? n : Ir(n), this._value = r ? n : Vr(n)
  }
  return n(t, [{
    key: "value",
    get: function () {
      return Br(this), this._value
    },
    set: function (t) {
      var e = this.__v_isShallow || Rr(t) || Pr(t);
      t = e ? t : Ir(t), F(t, this._rawValue) && (this._rawValue = t, this._value = e ? t : Vr(t), $r(this))
    }
  }]), t
}();

function Hr(t) {
  return Mr(t) ? t.value : t
}
var qr, Ur = {
  get: function (t, e, n) {
    return Hr(Reflect.get(t, e, n))
  },
  set: function (t, e, n, r) {
    var i = t[e];
    return Mr(i) && !Mr(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r)
  }
};

function Fr(t) {
  return Cr(t) ? t : new Proxy(t, Ur)
}
var Kr = function () {
  function t(n, r, i, o) {
    var s = this;
    e(this, t), this._setter = r, this.dep = void 0, this.__v_isRef = !0, this[qr] = !1, this._dirty = !0, this.effect = new Rn(n, (function () {
      s._dirty || (s._dirty = !0, $r(s))
    })), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = i
  }
  return n(t, [{
    key: "value",
    get: function () {
      var t = Ir(this);
      return Br(t), !t._dirty && t._cacheable || (t._dirty = !1, t._value = t.effect.run()), t._value
    },
    set: function (t) {
      this._setter(t)
    }
  }]), t
}();

function zr(t, e, n, r) {
  var i;
  try {
    i = r ? t.apply(void 0, s(r)) : t()
  } catch (t) {
    Wr(t, e, n)
  }
  return i
}

function Gr(t, e, n, r) {
  if (k(t)) {
    var i = zr(t, e, n, r);
    return i && P(i) && i.catch((function (t) {
      Wr(t, e, n)
    })), i
  }
  for (var o = [], s = 0; s < t.length; s++) o.push(Gr(t[s], e, n, r));
  return o
}

function Wr(t, e, n) {
  if (e && e.vnode, e) {
    for (var r = e.parent, i = e.proxy, o = n; r;) {
      var s = r.ec;
      if (s)
        for (var a = 0; a < s.length; a++)
          if (!1 === s[a](t, i, o)) return;
      r = r.parent
    }
    var u = e.appContext.config.errorHandler;
    if (u) return void zr(u, null, 10, [t, i, o])
  }
}
qr = "__v_isReadonly";
var Zr = !1,
  Jr = !1,
  Yr = [],
  Qr = 0,
  Xr = [],
  ti = null,
  ei = 0,
  ni = Promise.resolve(),
  ri = null;

function ii(t) {
  var e = ri || ni;
  return t ? e.then(this ? t.bind(this) : t) : e
}

function oi(t) {
  Yr.length && Yr.includes(t, Zr && t.allowRecurse ? Qr + 1 : Qr) || (null == t.id ? Yr.push(t) : Yr.splice(function (t) {
    for (var e = Qr + 1, n = Yr.length; e < n;) {
      var r = e + n >>> 1;
      ci(Yr[r]) < t ? e = r + 1 : n = r
    }
    return e
  }(t.id), 0, t), si())
}

function si() {
  Zr || Jr || (Jr = !0, ri = ni.then(li))
}

function ai(t) {
  T(t) ? Xr.push.apply(Xr, s(t)) : ti && ti.includes(t, t.allowRecurse ? ei + 1 : ei) || Xr.push(t), si()
}

function ui(t) {
  for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr ? Qr + 1 : 0; e < Yr.length; e++) {
    var n = Yr[e];
    n && n.pre && (Yr.splice(e, 1), e--, n())
  }
}
var ci = function (t) {
    return null == t.id ? 1 / 0 : t.id
  },
  hi = function (t, e) {
    var n = ci(t) - ci(e);
    if (0 === n) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1
    }
    return n
  };

function li(t) {
  Jr = !1, Zr = !0, Yr.sort(hi);
  try {
    for (Qr = 0; Qr < Yr.length; Qr++) {
      var e = Yr[Qr];
      e && !1 !== e.active && zr(e, null, 14)
    }
  } finally {
    Qr = 0, Yr.length = 0,
      function (t) {
        if (Xr.length) {
          var e, n = s(new Set(Xr));
          if (Xr.length = 0, ti) return void(e = ti).push.apply(e, s(n));
          for ((ti = n).sort((function (t, e) {
              return ci(t) - ci(e)
            })), ei = 0; ei < ti.length; ei++) ti[ei]();
          ti = null, ei = 0
        }
      }(), Zr = !1, ri = null, (Yr.length || Xr.length) && li()
  }
}

function fi(t, e) {
  if (!t.isUnmounted) {
    for (var n = t.vnode.props || p, r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o];
    var s = i,
      a = e.startsWith("update:"),
      u = a && e.slice(7);
    if (u && u in n) {
      var c = "".concat("modelValue" === u ? "model" : u, "Modifiers"),
        h = n[c] || p,
        l = h.number,
        f = h.trim;
      f && (s = i.map((function (t) {
        return A(t) ? t.trim() : t
      }))), l && (s = i.map(z))
    }
    var d, v = n[d = U(e)] || n[d = U(M(e))];
    !v && a && (v = n[d = U(H(e))]), v && Gr(v, t, 6, s);
    var g = n[d + "Once"];
    if (g) {
      if (t.emitted) {
        if (t.emitted[d]) return
      } else t.emitted = {};
      t.emitted[d] = !0, Gr(g, t, 6, s)
    }
  }
}

function pi(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = e.emitsCache,
    i = r.get(t);
  if (void 0 !== i) return i;
  var o = t.emits,
    s = {},
    a = !1;
  if (!k(t)) {
    var u = function (t) {
      var n = pi(t, e, !0);
      n && (a = !0, x(s, n))
    };
    !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u)
  }
  return o || a ? (T(o) ? o.forEach((function (t) {
    return s[t] = null
  })) : x(s, o), C(t) && r.set(t, s), s) : (C(t) && r.set(t, null), null)
}

function di(t, e) {
  return !(!t || !y(e)) && (e = e.slice(2).replace(/Once$/, ""), _(t, e[0].toLowerCase() + e.slice(1)) || _(t, H(e)) || _(t, e))
}
var vi = null;

function gi(t) {
  var e = vi;
  return vi = t, t && t.type.__scopeId, e
}

function mi(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = yo || vi;
  if (r) {
    var i = null == r.parent ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && k(e) ? e.call(r.proxy) : e
  }
}
var yi = {};

function bi(t, e, n) {
  return xi(t, e, n)
}

function xi(t, e) {
  var n, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p,
    o = i.immediate,
    s = i.deep,
    a = i.flush,
    u = (i.onTrack, i.onTrigger, vn === (null == yo ? void 0 : yo.scope) ? yo : null),
    c = !1,
    h = !1;
  if (Mr(t) ? (n = function () {
      return t.value
    }, c = Rr(t)) : Cr(t) ? (n = function () {
      return t
    }, s = !0) : T(t) ? (h = !0, c = t.some((function (t) {
      return Cr(t) || Rr(t)
    })), n = function () {
      return t.map((function (t) {
        return Mr(t) ? t.value : Cr(t) ? _i(t) : k(t) ? zr(t, u, 2) : void 0
      }))
    }) : n = k(t) ? e ? function () {
      return zr(t, u, 2)
    } : function () {
      if (!u || !u.isUnmounted) return r && r(), Gr(t, u, 3, [d])
    } : v, e && s) {
    var l = n;
    n = function () {
      return _i(l())
    }
  }
  var f, d = function (t) {
      r = y.onStop = function () {
        zr(t, u, 4)
      }
    },
    g = h ? new Array(t.length).fill(yi) : yi,
    m = function () {
      if (y.active)
        if (e) {
          var t = y.run();
          (s || c || (h ? t.some((function (t, e) {
            return F(t, g[e])
          })) : F(t, g))) && (r && r(), Gr(e, u, 3, [t, g === yi ? void 0 : h && g[0] === yi ? [] : g, d]), g = t)
        } else y.run()
    };
  m.allowRecurse = !!e, "sync" === a ? f = m : "post" === a ? f = function () {
    return po(m, u && u.suspense)
  } : (m.pre = !0, u && (m.id = u.uid), f = function () {
    return oi(m)
  });
  var y = new Rn(n, f);
  return e ? o ? m() : g = y.run() : "post" === a ? po(y.run.bind(y), u && u.suspense) : y.run(),
    function () {
      y.stop(), u && u.scope && w(u.scope.effects, y)
    }
}

function wi(t, e, n) {
  var r, i = this.proxy,
    o = A(t) ? t.includes(".") ? Si(i, t) : function () {
      return i[t]
    } : t.bind(i, i);
  k(e) ? r = e : (r = e.handler, n = e);
  var s = yo;
  xo(this);
  var a = xi(o, r.bind(i), n);
  return s ? xo(s) : wo(), a
}

function Si(t, e) {
  var n = e.split(".");
  return function () {
    for (var e = t, r = 0; r < n.length && e; r++) e = e[n[r]];
    return e
  }
}

function _i(t, e) {
  if (!C(t) || t.__v_skip) return t;
  if ((e = e || new Set).has(t)) return t;
  if (e.add(t), Mr(t)) _i(t.value, e);
  else if (T(t))
    for (var n = 0; n < t.length; n++) _i(t[n], e);
  else if (O(t) || E(t)) t.forEach((function (t) {
    _i(t, e)
  }));
  else if (N(t))
    for (var r in t) _i(t[r], e);
  return t
}
var Ti = function (t) {
  return t.type.__isKeepAlive
};

function Ei(t, e) {
  ki(t, "a", e)
}

function Oi(t, e) {
  ki(t, "da", e)
}

function ki(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yo,
    r = t.__wdc || (t.__wdc = function () {
      for (var e = n; e;) {
        if (e.isDeactivated) return;
        e = e.parent
      }
      return t()
    });
  if (Di(e, r, n), n)
    for (var i = n.parent; i && i.parent;) Ti(i.parent.vnode) && Ai(r, e, n, i), i = i.parent
}

function Ai(t, e, n, r) {
  var i = Di(e, t, r, !0);
  ji((function () {
    w(r[e], i)
  }), n)
}

function Di(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yo,
    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (n) {
    (function (t) {
      return Tt.indexOf(t) > -1
    })(t) && (n = n.root);
    var i = n[t] || (n[t] = []),
      o = e.__weh || (e.__weh = function () {
        if (!n.isUnmounted) {
          jn(), xo(n);
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
          var s = Gr(e, n, t, i);
          return wo(), Bn(), s
        }
      });
    return r ? i.unshift(o) : i.push(o), o
  }
}
var Ci = function (t) {
    return function (e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yo;
      return (!_o || "sp" === t) && Di(t, (function () {
        return e.apply(void 0, arguments)
      }), n)
    }
  },
  Pi = Ci("bm"),
  Ri = Ci("m"),
  Ii = Ci("bu"),
  Ni = Ci("u"),
  Vi = Ci("bum"),
  ji = Ci("um"),
  Bi = Ci("sp"),
  $i = Ci("rtg"),
  Mi = Ci("rtc");

function Li(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yo;
  Di("ec", t, e)
}
var Hi = "components";

function qi(t, e) {
  return t && (t[e] || t[M(e)] || t[q(M(e))])
}
var Ui = function t(e) {
    return e ? So(e) ? Eo(e) || e.proxy : t(e.parent) : null
  },
  Fi = x(Object.create(null), {
    $: function (t) {
      return t
    },
    $el: function (t) {
      return t.__$el || (t.__$el = {})
    },
    $data: function (t) {
      return t.data
    },
    $props: function (t) {
      return t.props
    },
    $attrs: function (t) {
      return t.attrs
    },
    $slots: function (t) {
      return t.slots
    },
    $refs: function (t) {
      return t.refs
    },
    $parent: function (t) {
      return Ui(t.parent)
    },
    $root: function (t) {
      return Ui(t.root)
    },
    $emit: function (t) {
      return t.emit
    },
    $options: function (t) {
      return Ji(t)
    },
    $forceUpdate: function (t) {
      return t.f || (t.f = function () {
        return oi(t.update)
      })
    },
    $watch: function (t) {
      return wi.bind(t)
    }
  }),
  Ki = function (t, e) {
    return t !== p && !t.__isScriptSetup && _(t, e)
  },
  zi = {
    get: function (t, e) {
      var n, r = t._,
        i = r.ctx,
        o = r.setupState,
        s = r.data,
        a = r.props,
        u = r.accessCache,
        c = r.type,
        h = r.appContext;
      if ("$" !== e[0]) {
        var l = u[e];
        if (void 0 !== l) switch (l) {
          case 1:
            return o[e];
          case 2:
            return s[e];
          case 4:
            return i[e];
          case 3:
            return a[e]
        } else {
          if (Ki(o, e)) return u[e] = 1, o[e];
          if (s !== p && _(s, e)) return u[e] = 2, s[e];
          if ((n = r.propsOptions[0]) && _(n, e)) return u[e] = 3, a[e];
          if (i !== p && _(i, e)) return u[e] = 4, i[e];
          Gi && (u[e] = 0)
        }
      }
      var f, d, v = Fi[e];
      return v ? ("$attrs" === e && $n(r, 0, e), v(r)) : (f = c.__cssModules) && (f = f[e]) ? f : i !== p && _(i, e) ? (u[e] = 4, i[e]) : (d = h.config.globalProperties, _(d, e) ? d[e] : void 0)
    },
    set: function (t, e, n) {
      var r = t._,
        i = r.data,
        o = r.setupState,
        s = r.ctx;
      return Ki(o, e) ? (o[e] = n, !0) : i !== p && _(i, e) ? (i[e] = n, !0) : !(_(r.props, e) || "$" === e[0] && e.slice(1) in r || (s[e] = n, 0))
    },
    has: function (t, e) {
      var n, r = t._,
        i = r.data,
        o = r.setupState,
        s = r.accessCache,
        a = r.ctx,
        u = r.appContext,
        c = r.propsOptions;
      return !!s[e] || i !== p && _(i, e) || Ki(o, e) || (n = c[0]) && _(n, e) || _(a, e) || _(Fi, e) || _(u.config.globalProperties, e)
    },
    defineProperty: function (t, e, n) {
      return null != n.get ? t._.accessCache[e] = 0 : _(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n)
    }
  },
  Gi = !0;

function Wi(t, e, n) {
  Gr(T(t) ? t.map((function (t) {
    return t.bind(e.proxy)
  })) : t.bind(e.proxy), e, n)
}

function Zi(t, e, n, r) {
  var i = r.includes(".") ? Si(n, r) : function () {
    return n[r]
  };
  if (A(t)) {
    var o = e[t];
    k(o) && bi(i, o)
  } else if (k(t)) bi(i, t.bind(n));
  else if (C(t))
    if (T(t)) t.forEach((function (t) {
      return Zi(t, e, n, r)
    }));
    else {
      var s = k(t.handler) ? t.handler.bind(n) : e[t.handler];
      k(s) && bi(i, s, t)
    }
}

function Ji(t) {
  var e, n = t.type,
    r = n.mixins,
    i = n.extends,
    o = t.appContext,
    s = o.mixins,
    a = o.optionsCache,
    u = o.config.optionMergeStrategies,
    c = a.get(n);
  return c ? e = c : s.length || r || i ? (e = {}, s.length && s.forEach((function (t) {
    return Yi(e, t, u, !0)
  })), Yi(e, n, u)) : e = n, C(n) && a.set(n, e), e
}

function Yi(t, e, n) {
  var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    i = e.mixins,
    o = e.extends;
  for (var s in o && Yi(t, o, n, !0), i && i.forEach((function (e) {
      return Yi(t, e, n, !0)
    })), e)
    if (r && "expose" === s);
    else {
      var a = Qi[s] || n && n[s];
      t[s] = a ? a(t[s], e[s]) : e[s]
    } return t
}
var Qi = {
  data: Xi,
  props: no,
  emits: no,
  methods: no,
  computed: no,
  beforeCreate: eo,
  created: eo,
  beforeMount: eo,
  mounted: eo,
  beforeUpdate: eo,
  updated: eo,
  beforeDestroy: eo,
  beforeUnmount: eo,
  destroyed: eo,
  unmounted: eo,
  activated: eo,
  deactivated: eo,
  errorCaptured: eo,
  serverPrefetch: eo,
  components: no,
  directives: no,
  watch: function (t, e) {
    if (!t) return e;
    if (!e) return t;
    var n = x(Object.create(null), t);
    for (var r in e) n[r] = eo(t[r], e[r]);
    return n
  },
  provide: Xi,
  inject: function (t, e) {
    return no(to(t), to(e))
  }
};

function Xi(t, e) {
  return e ? t ? function () {
    return x(k(t) ? t.call(this, this) : t, k(e) ? e.call(this, this) : e)
  } : e : t
}

function to(t) {
  if (T(t)) {
    for (var e = {}, n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e
  }
  return t
}

function eo(t, e) {
  return t ? s(new Set([].concat(t, e))) : e
}

function no(t, e) {
  return t ? x(x(Object.create(null), t), e) : e
}

function ro(t, e, n) {
  var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    i = {},
    o = {};
  for (var s in t.propsDefaults = Object.create(null), io(t, e, i, o), t.propsOptions[0]) s in i || (i[s] = void 0);
  n ? t.props = r ? i : Dr(i, !1, tr, wr, Tr) : t.type.props ? t.props = i : t.props = o, t.attrs = o
}

function io(t, e, n, r) {
  var i, s = o(t.propsOptions, 2),
    a = s[0],
    u = s[1],
    c = !1;
  if (e)
    for (var h in e)
      if (!j(h)) {
        var l = e[h],
          f = void 0;
        a && _(a, f = M(h)) ? u && u.includes(f) ? (i || (i = {}))[f] = l : n[f] = l : di(t.emitsOptions, h) || h in r && l === r[h] || (r[h] = l, c = !0)
      } if (u)
    for (var d = Ir(n), v = i || p, g = 0; g < u.length; g++) {
      var m = u[g];
      n[m] = oo(a, d, m, v[m], t, !_(v, m))
    }
  return c
}

function oo(t, e, n, r, i, o) {
  var s = t[n];
  if (null != s) {
    var a = _(s, "default");
    if (a && void 0 === r) {
      var u = s.default;
      if (s.type !== Function && k(u)) {
        var c = i.propsDefaults;
        n in c ? r = c[n] : (xo(i), r = c[n] = u.call(null, e), wo())
      } else r = u
    }
    s[0] && (o && !a ? r = !1 : !s[1] || "" !== r && r !== H(n) || (r = !0))
  }
  return r
}

function so(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = e.propsCache,
    i = r.get(t);
  if (i) return i;
  var a = t.props,
    u = {},
    c = [],
    h = !1;
  if (!k(t)) {
    var l = function (t) {
      h = !0;
      var n = so(t, e, !0),
        r = o(n, 2),
        i = r[0],
        a = r[1];
      x(u, i), a && c.push.apply(c, s(a))
    };
    !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l)
  }
  if (!a && !h) return C(t) && r.set(t, d), d;
  if (T(a))
    for (var f = 0; f < a.length; f++) {
      var v = M(a[f]);
      ao(v) && (u[v] = p)
    } else if (a)
      for (var g in a) {
        var m = M(g);
        if (ao(m)) {
          var y = a[g],
            b = u[m] = T(y) || k(y) ? {
              type: y
            } : Object.assign({}, y);
          if (b) {
            var w = ho(Boolean, b.type),
              S = ho(String, b.type);
            b[0] = w > -1, b[1] = S < 0 || w < S, (w > -1 || _(b, "default")) && c.push(m)
          }
        }
      }
  var E = [u, c];
  return C(t) && r.set(t, E), E
}

function ao(t) {
  return "$" !== t[0]
}

function uo(t) {
  var e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : null === t ? "null" : ""
}

function co(t, e) {
  return uo(t) === uo(e)
}

function ho(t, e) {
  return T(e) ? e.findIndex((function (e) {
    return co(e, t)
  })) : k(e) && co(e, t) ? 0 : -1
}

function lo() {
  return {
    app: null,
    config: {
      isNativeTag: g,
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
    optionsCache: new WeakMap,
    propsCache: new WeakMap,
    emitsCache: new WeakMap
  }
}
var fo = 0,
  po = ai;
var vo = lo(),
  go = 0;

function mo(t, e, n) {
  var r = t.type,
    i = (e ? e.appContext : t.appContext) || vo,
    o = {
      uid: go++,
      vnode: t,
      type: r,
      parent: e,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new _n(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: so(r, i),
      emitsOptions: pi(r, i),
      emit: null,
      emitted: null,
      propsDefaults: p,
      inheritAttrs: r.inheritAttrs,
      ctx: p,
      data: p,
      props: p,
      attrs: p,
      slots: p,
      refs: p,
      setupState: p,
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
    };
  return o.ctx = {
    _: o
  }, o.root = e ? e.root : o, o.emit = fi.bind(null, o), t.ce && t.ce(o), o
}
var yo = null,
  bo = function () {
    return yo || vi
  },
  xo = function (t) {
    yo = t, t.scope.on()
  },
  wo = function () {
    yo && yo.scope.off(), yo = null
  };

function So(t) {
  return 4 & t.vnode.shapeFlag
}
var _o = !1;

function To(t, e, n) {
  var r = t.type;
  t.render || (t.render = r.render || v), xo(t), jn(),
    function (t) {
      var e = Ji(t),
        n = t.proxy,
        r = t.ctx;
      Gi = !1, e.beforeCreate && Wi(e.beforeCreate, t, "bc");
      var i = e.data,
        o = e.computed,
        s = e.methods,
        a = e.watch,
        u = e.provide,
        c = e.inject,
        h = e.created,
        l = e.beforeMount,
        f = e.mounted,
        p = e.beforeUpdate,
        d = e.updated,
        g = e.activated,
        m = e.deactivated,
        y = (e.beforeDestroy, e.beforeUnmount),
        b = (e.destroyed, e.unmounted),
        x = e.render,
        w = e.renderTracked,
        S = e.renderTriggered,
        _ = e.errorCaptured,
        E = e.serverPrefetch,
        O = e.expose,
        A = e.inheritAttrs,
        D = e.components,
        P = e.directives;
      if (e.filters, c && function (t, e) {
          var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          T(t) && (t = to(t));
          var r = function () {
            var r, o = t[i];
            Mr(r = C(o) ? "default" in o ? mi(o.from || i, o.default, !0) : mi(o.from || i) : mi(o)) && n ? Object.defineProperty(e, i, {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return r.value
              },
              set: function (t) {
                return r.value = t
              }
            }) : e[i] = r
          };
          for (var i in t) r()
        }(c, r, null, t.appContext.config.unwrapInjectedRef), s)
        for (var R in s) {
          var I = s[R];
          k(I) && (r[R] = I.bind(n))
        }
      if (i) {
        var N = i.call(n, n);
        C(N) && (t.data = kr(N))
      }
      if (Gi = !0, o) {
        var V = function () {
          var t = o[j],
            e = k(t) ? t.bind(n, n) : k(t.get) ? t.get.bind(n, n) : v,
            i = !k(t) && k(t.set) ? t.set.bind(n) : v,
            s = Oo({
              get: e,
              set: i
            });
          Object.defineProperty(r, j, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return s.value
            },
            set: function (t) {
              return s.value = t
            }
          })
        };
        for (var j in o) V()
      }
      if (a)
        for (var B in a) Zi(a[B], r, n, B);
      if (u) {
        var $ = k(u) ? u.call(n) : u;
        Reflect.ownKeys($).forEach((function (t) {
          ! function (t, e) {
            if (yo) {
              var n = yo.provides,
                r = yo.parent && yo.parent.provides;
              r === n && (n = yo.provides = Object.create(r)), n[t] = e, "app" === yo.type.mpType && yo.appContext.app.provide(t, e)
            }
          }(t, $[t])
        }))
      }

      function M(t, e) {
        T(e) ? e.forEach((function (e) {
          return t(e.bind(n))
        })) : e && t(e.bind(n))
      }
      if (h && Wi(h, t, "c"), M(Pi, l), M(Ri, f), M(Ii, p), M(Ni, d), M(Ei, g), M(Oi, m), M(Li, _), M(Mi, w), M($i, S), M(Vi, y), M(ji, b), M(Bi, E), T(O))
        if (O.length) {
          var L = t.exposed || (t.exposed = {});
          O.forEach((function (t) {
            Object.defineProperty(L, t, {
              get: function () {
                return n[t]
              },
              set: function (e) {
                return n[t] = e
              }
            })
          }))
        } else t.exposed || (t.exposed = {});
      x && t.render === v && (t.render = x), null != A && (t.inheritAttrs = A), D && (t.components = D), P && (t.directives = P), t.ctx.$onApplyOptions && t.ctx.$onApplyOptions(e, t, n)
    }(t), Bn(), wo()
}

function Eo(t) {
  if (t.exposed) return t.exposeProxy || (t.exposeProxy = new Proxy(Fr(Nr(t.exposed)), {
    get: function (e, n) {
      return n in e ? e[n] : t.proxy[n]
    },
    has: function (t, e) {
      return e in t || e in Fi
    }
  }))
}
var Oo = function (t, e) {
  return function (t, e) {
    var n, r, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      o = k(t);
    return o ? (n = t, r = v) : (n = t.get, r = t.set), new Kr(n, r, o || !r, i)
  }(t, 0, _o)
};

function ko(t) {
  return Hr(t)
}
var Ao, Do, Co = "[object Array]",
  Po = "[object Object]";

function Ro(t, e) {
  var n = {};
  return function t(e, n) {
      if ((e = ko(e)) === n) return;
      var r = I(e),
        i = I(n);
      if (r == Po && i == Po)
        for (var o in n) {
          var s = e[o];
          void 0 === s ? e[o] = null : t(s, n[o])
        } else r == Co && i == Co && e.length >= n.length && n.forEach((function (n, r) {
          t(e[r], n)
        }))
    }(t, e),
    function t(e, n, r, i) {
      if ((e = ko(e)) === n) return;
      var o = I(e),
        s = I(n);
      if (o == Po)
        if (s != Po || Object.keys(e).length < Object.keys(n).length) Io(i, r, e);
        else {
          var a = function (o) {
            var s = ko(e[o]),
              a = n[o],
              u = I(s),
              c = I(a);
            if (u != Co && u != Po) s != a && Io(i, ("" == r ? "" : r + ".") + o, s);
            else if (u == Co) c != Co || s.length < a.length ? Io(i, ("" == r ? "" : r + ".") + o, s) : s.forEach((function (e, n) {
              t(e, a[n], ("" == r ? "" : r + ".") + o + "[" + n + "]", i)
            }));
            else if (u == Po)
              if (c != Po || Object.keys(s).length < Object.keys(a).length) Io(i, ("" == r ? "" : r + ".") + o, s);
              else
                for (var h in s) t(s[h], a[h], ("" == r ? "" : r + ".") + o + "." + h, i)
          };
          for (var u in e) a(u)
        }
      else o == Co ? s != Co || e.length < n.length ? Io(i, r, e) : e.forEach((function (e, o) {
        t(e, n[o], r + "[" + o + "]", i)
      })) : Io(i, r, e)
    }(t, e, "", n), n
}

function Io(t, e, n) {
  t[e] = n
}

function No(t) {
  var e = t.ctx.__next_tick_callbacks;
  if (e && e.length) {
    var n = e.slice(0);
    e.length = 0;
    for (var r = 0; r < n.length; r++) n[r]()
  }
}

function Vo(t, e) {
  var n, r = t.ctx;
  return r.__next_tick_pending || function (t) {
    return Yr.includes(t.update)
  }(t) ? (r.__next_tick_callbacks || (r.__next_tick_callbacks = []), r.__next_tick_callbacks.push((function () {
    e ? zr(e.bind(t.proxy), t, 14) : n && n(t.proxy)
  })), new Promise((function (t) {
    n = t
  }))) : ii(e && e.bind(t.proxy))
}

function jo(t) {
  return function t(e, n) {
    var i = r(e = ko(e));
    if ("object" === i && null !== e) {
      var o = n.get(e);
      if (void 0 !== o) return o;
      if (T(e)) {
        var s = e.length;
        o = new Array(s), n.set(e, o);
        for (var a = 0; a < s; a++) o[a] = t(e[a], n)
      } else
        for (var u in o = {}, n.set(e, o), e) _(e, u) && (o[u] = t(e[u], n));
      return o
    }
    if ("symbol" !== i) return e
  }(t, "undefined" != typeof WeakMap ? new WeakMap : new Map)
}

function Bo(t, e, n) {
  if (e) {
    e = jo(e);
    var r = t.ctx,
      i = r.mpType;
    if ("page" === i || "component" === i) {
      e.r0 = 1;
      var o = r.$scope,
        s = Object.keys(e),
        a = Ro(e, n || function (t, e) {
          var n = t.data,
            r = Object.create(null);
          return e.forEach((function (t) {
            r[t] = n[t]
          })), r
        }(o, s));
      Object.keys(a).length ? (r.__next_tick_pending = !0, o.setData(a, (function () {
        r.__next_tick_pending = !1, No(t)
      })), ui()) : No(t)
    }
  }
}

function $o(t, e, n) {
  e.appContext.config.globalProperties.$applyOptions(t, e, n);
  var r = t.computed;
  if (r) {
    var i = Object.keys(r);
    if (i.length) {
      var o, s = e.ctx;
      s.$computedKeys || (s.$computedKeys = []), (o = s.$computedKeys).push.apply(o, i)
    }
  }
  delete e.ctx.$onApplyOptions
}

function Mo(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = t.setupState,
    r = t.$templateRefs,
    i = t.ctx,
    o = i.$scope,
    s = i.$mpPlatform;
  if ("mp-alipay" !== s && r && o) {
    if (e) return r.forEach((function (t) {
      return Lo(t, null, n)
    }));
    var a = "mp-baidu" === s || "mp-toutiao" === s,
      u = function (t) {
        var e = (o.selectAllComponents(".r") || []).concat(o.selectAllComponents(".r-i-f") || []);
        return t.filter((function (t) {
          var r = function (t, e) {
            var n = t.find((function (t) {
              return t && (t.properties || t.props).uI === e
            }));
            if (n) {
              var r = n.$vm;
              return r ? Eo(r.$) || r : function (t) {
                return C(t) && Nr(t), t
              }(n)
            }
            return null
          }(e, t.i);
          return !(!a || null !== r) || (Lo(t, r, n), !1)
        }))
      },
      c = function () {
        var e = u(r);
        e.length && t.proxy && t.proxy.$scope && t.proxy.$scope.setData({
          r1: 1
        }, (function () {
          u(e)
        }))
      };
    o._$setRef ? o._$setRef(c) : Vo(t, c)
  }
}

function Lo(t, e, n) {
  var r = t.r,
    i = t.f;
  if (k(r)) r(e, {});
  else {
    var o = A(r),
      s = Mr(r);
    if (o || s)
      if (i) {
        if (!s) return;
        T(r.value) || (r.value = []);
        var a = r.value;
        if (-1 === a.indexOf(e)) {
          if (a.push(e), !e) return;
          Vi((function () {
            return w(a, e)
          }), e.$)
        }
      } else o ? _(n, r) && (n[r] = e) : Mr(r) && (r.value = e)
  }
}(Do = Ao || (Ao = {})).APP = "app", Do.PAGE = "page", Do.COMPONENT = "component";
var Ho = ai;

function qo(t, e) {
  var n = t.component = mo(t, e.parentComponent, null);
  return n.ctx.$onApplyOptions = $o, n.ctx.$children = [], "app" === e.mpType && (n.render = v), e.onBeforeSetup && e.onBeforeSetup(n, e),
    function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      _o = e;
      var n = t.vnode.props,
        r = So(t);
      ro(t, n, r, e);
      var i = r ? function (t, e) {
        var n = t.type;
        t.accessCache = Object.create(null), t.proxy = Nr(new Proxy(t.ctx, zi));
        var r = n.setup;
        if (r) {
          var i = t.setupContext = r.length > 1 ? function (t) {
            var e;
            return {
              get attrs() {
                return e || (e = function (t) {
                  return new Proxy(t.attrs, {
                    get: function (e, n) {
                      return $n(t, 0, "$attrs"), e[n]
                    }
                  })
                }(t))
              },
              slots: t.slots,
              emit: t.emit,
              expose: function (e) {
                t.exposed = e || {}
              }
            }
          }(t) : null;
          xo(t), jn();
          var o = zr(r, t, 0, [t.props, i]);
          Bn(), wo(), P(o) ? o.then(wo, wo) : function (t, e, n) {
            k(e) ? t.render = e : C(e) && (t.setupState = Fr(e)), To(t)
          }(t, o)
        } else To(t)
      }(t) : void 0;
      _o = !1
    }(n), e.parentComponent && n.proxy && e.parentComponent.ctx.$children.push(Eo(n) || n.proxy),
    function (t) {
      var e = Go.bind(t);
      t.$updateScopedSlots = function () {
        return ii((function () {
          return oi(e)
        }))
      };
      var n = t.effect = new Rn((function () {
          if (t.isMounted) {
            t.next;
            var e = t.bu,
              n = t.u;
            Wo(t, !1), zo(), e && K(e), Wo(t, !0), Bo(t, Fo(t)), n && Ho(n)
          } else Vi((function () {
            Mo(t, !0)
          }), t), Bo(t, Fo(t))
        }), (function () {
          return oi(t.update)
        }), t.scope),
        r = t.update = n.run.bind(n);
      r.id = t.uid, Wo(t, !0), r()
    }(n), n.proxy
}
var Uo = function (t) {
  var e;
  for (var n in t)("class" === n || "style" === n || y(n)) && ((e || (e = {}))[n] = t[n]);
  return e
};

function Fo(t) {
  var e, n = t.type,
    r = t.vnode,
    i = t.proxy,
    s = t.withProxy,
    a = t.props,
    u = o(t.propsOptions, 1)[0],
    c = t.slots,
    h = t.attrs,
    l = t.emit,
    f = t.render,
    p = t.renderCache,
    d = t.data,
    v = t.setupState,
    g = t.ctx,
    m = t.uid,
    y = t.appContext.app.config.globalProperties.pruneComponentPropsCache,
    b = t.inheritAttrs;
  t.$templateRefs = [], t.$ei = 0, y(m), t.__counter = 0 === t.__counter ? 1 : 0;
  var x = gi(t);
  try {
    if (4 & r.shapeFlag) {
      Ko(b, a, u, h);
      var w = s || i;
      e = f.call(w, w, p, a, v, d, g)
    } else {
      Ko(b, a, u, n.props ? h : Uo(h));
      var S = n;
      e = S.length > 1 ? S(a, {
        attrs: h,
        slots: c,
        emit: l
      }) : S(a, null)
    }
  } catch (n) {
    Wr(n, t, 1), e = !1
  }
  return Mo(t), gi(x), e
}

function Ko(t, e, n, r) {
  if (e && r && !1 !== t) {
    var i = Object.keys(r).filter((function (t) {
      return "class" !== t && "style" !== t
    }));
    if (!i.length) return;
    n && i.some(b) ? i.forEach((function (t) {
      b(t) && t.slice(9) in n || (e[t] = r[t])
    })) : i.forEach((function (t) {
      return e[t] = r[t]
    }))
  }
}
var zo = function (t) {
  jn(), ui(), Bn()
};

function Go() {
  var t = this.$scopedSlotsData;
  if (t && 0 !== t.length) {
    var e = this.ctx.$scope,
      n = e.data,
      r = Object.create(null);
    t.forEach((function (t) {
      var e = t.path,
        i = t.index,
        o = t.data,
        s = function t(e, n) {
          if (A(n)) {
            var r = (n = n.replace(/\[(\d+)\]/g, ".$1")).split("."),
              i = r[0];
            return e || (e = {}), 1 === r.length ? e[i] : t(e[i], r.slice(1).join("."))
          }
        }(n, e),
        a = A(i) ? "".concat(e, ".").concat(i) : "".concat(e, "[").concat(i, "]");
      if (void 0 === s || void 0 === s[i]) r[a] = o;
      else {
        var u = Ro(o, s[i]);
        Object.keys(u).forEach((function (t) {
          r[a + "." + t] = u[t]
        }))
      }
    })), t.length = 0, Object.keys(r).length && e.setData(r)
  }
}

function Wo(t, e) {
  var n = t.effect,
    r = t.update;
  n.allowRecurse = r.allowRecurse = e
}
var Zo, Jo = function (t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  k(t) || (t = Object.assign({}, t)), null == e || C(e) || (e = null);
  var n = lo(),
    r = new Set,
    i = n.app = {
      _uid: fo++,
      _component: t,
      _props: e,
      _container: null,
      _context: n,
      _instance: null,
      version: "3.2.47",
      get config() {
        return n.config
      },
      set config(t) {},
      use: function (t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
        return r.has(t) || (t && k(t.install) ? (r.add(t), t.install.apply(t, [i].concat(n))) : k(t) && (r.add(t), t.apply(void 0, [i].concat(n)))), i
      },
      mixin: function (t) {
        return n.mixins.includes(t) || n.mixins.push(t), i
      },
      component: function (t, e) {
        return e ? (n.components[t] = e, i) : n.components[t]
      },
      directive: function (t, e) {
        return e ? (n.directives[t] = e, i) : n.directives[t]
      },
      mount: function () {},
      unmount: function () {},
      provide: function (t, e) {
        return n.provides[t] = e, i
      }
    };
  return i
};

function Yo(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  ("undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof my ? my : void 0).__VUE__ = !0;
  var n = Jo(t, e),
    r = n._context;
  r.config.globalProperties.$nextTick = function (t) {
    return Vo(this.$, t)
  };
  var i = function (t) {
      return t.appContext = r, t.shapeFlag = 6, t
    },
    o = function (t, e) {
      return qo(i(t), e)
    },
    s = function (t) {
      return t && function (t) {
        var e = t.bum,
          n = t.scope,
          r = t.update,
          i = t.um;
        e && K(e), n.stop(), r && (r.active = !1), i && Ho(i), Ho((function () {
          t.isUnmounted = !0
        }))
      }(t.$)
    };
  return n.mount = function () {
    t.render = v;
    var e = qo(i({
      type: t
    }), {
      mpType: Ao.APP,
      mpInstance: null,
      parentComponent: null,
      slots: [],
      props: null
    });
    return n._instance = e.$, e.$app = n, e.$createComponent = o, e.$destroyComponent = s, r.$appInstance = e, e
  }, n.unmount = function () {}, n
}

function Qo(t, e, n, r) {
  k(e) && Di(t, e.bind(n), r)
}

function Xo(t, e, n) {
  ! function (t, e, n) {
    var r = t.mpType || n.$mpType;
    r && "component" !== r && Object.keys(t).forEach((function (r) {
      if (kt(r, t[r], !1)) {
        var i = t[r];
        T(i) ? i.forEach((function (t) {
          return Qo(r, t, n, e)
        })) : Qo(r, i, n, e)
      }
    }))
  }(t, e, n)
}

function ts(t, e, n) {
  return t[e] = n
}

function es(t) {
  for (var e = this[t], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
  return e ? e.apply(void 0, r) : null
}

function ns(t) {
  return function (e, n, r) {
    if (!n) throw e;
    var i = t._instance;
    if (!i || !i.proxy) throw e;
    i.proxy.$callHook(J, e)
  }
}

function rs(t, e) {
  return t ? s(new Set([].concat(t, e))) : e
}
var is = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  os = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

function ss() {
  var t, e, n = Sn.getStorageSync("uni_id_token") || "",
    r = n.split(".");
  if (!n || 3 !== r.length) return {
    uid: null,
    role: [],
    permission: [],
    tokenExpired: 0
  };
  try {
    t = JSON.parse((e = r[1], decodeURIComponent(Zo(e).split("").map((function (t) {
      return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2)
    })).join(""))))
  } catch (t) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + t.message)
  }
  return t.tokenExpired = 1e3 * t.exp, delete t.exp, delete t.iat, t
}
Zo = "function" != typeof atob ? function (t) {
  if (t = String(t).replace(/[\t\n\f\r ]+/g, ""), !os.test(t)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
  var e;
  t += "==".slice(2 - (3 & t.length));
  for (var n, r, i = "", o = 0; o < t.length;) e = is.indexOf(t.charAt(o++)) << 18 | is.indexOf(t.charAt(o++)) << 12 | (n = is.indexOf(t.charAt(o++))) << 6 | (r = is.indexOf(t.charAt(o++))), i += 64 === n ? String.fromCharCode(e >> 16 & 255) : 64 === r ? String.fromCharCode(e >> 16 & 255, e >> 8 & 255) : String.fromCharCode(e >> 16 & 255, e >> 8 & 255, 255 & e);
  return i
} : atob;
var as = Object.create(null);

function us(t) {
  delete as[t]
}

function cs(t) {
  if (t) {
    var e = t.split(","),
      n = o(e, 2),
      r = n[0],
      i = n[1];
    return as[r] ? as[r][parseInt(i)] : void 0
  }
}
var hs = {
  install: function (t) {
    (function (t) {
      var e, n = t._context.config;
      n.errorHandler = Dt(t, ns), e = n.optionMergeStrategies, Et.forEach((function (t) {
        e[t] = rs
      }));
      var r = n.globalProperties;
      ! function (t) {
        t.uniIDHasRole = function (t) {
          return ss().role.indexOf(t) > -1
        }, t.uniIDHasPermission = function (t) {
          var e = ss().permission;
          return this.uniIDHasRole("admin") || e.indexOf(t) > -1
        }, t.uniIDTokenValid = function () {
          return ss().tokenExpired > Date.now()
        }
      }(r), r.$set = ts, r.$applyOptions = Xo, r.$callMethod = es, Sn.invokeCreateVueAppHook(t)
    })(t), t.config.globalProperties.pruneComponentPropsCache = us;
    var e = t.mount;
    t.mount = function (n) {
      var r = e.call(t, n),
        i = function () {
          var t = "createApp";
          return "undefined" != typeof global ? global[t] : "undefined" != typeof my ? my[t] : void 0
        }();
      return i ? i(r) : "undefined" != typeof createMiniProgramApp && createMiniProgramApp(r), r
    }
  }
};
var ls = ["tap", "longpress", "longtap", "transitionend", "animationstart", "animationiteration", "animationend", "touchforcechange"];

function fs(t) {
  return A(t) ? t : function (t) {
    var e = "";
    if (!t || A(t)) return e;
    for (var n in t) e += "".concat(n.startsWith("--") ? n : H(n), ":").concat(t[n], ";");
    return e
  }(function t(e) {
    if (T(e)) {
      for (var n = {}, r = 0; r < e.length; r++) {
        var i = e[r],
          o = A(i) ? l(i) : t(i);
        if (o)
          for (var s in o) n[s] = o[s]
      }
      return n
    }
    return A(e) || C(e) ? e : void 0
  }(t))
}
var ps = ["createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent"];

function ds(t, e) {
  var n = t.ctx;
  n.mpType = e.mpType, n.$mpType = e.mpType, n.$mpPlatform = "mp-weixin", n.$scope = e.mpInstance, n.$mp = {}, n._self = {}, t.slots = {}, T(e.slots) && e.slots.length && (e.slots.forEach((function (e) {
    t.slots[e] = !0
  })), t.slots.d && (t.slots.default = !0)), n.getOpenerEventChannel = function () {
    return e.mpInstance.getOpenerEventChannel()
  }, n.$hasHook = vs, n.$callHook = gs, t.emit = function (t, e) {
    return function (n) {
      for (var r = e.$scope, i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) o[s - 1] = arguments[s];
      if (r && n) {
        var a = {
          __args__: o
        };
        r.triggerEvent(n, a)
      }
      return t.apply(this, [n].concat(o))
    }
  }(t.emit, n)
}

function vs(t) {
  var e = this.$[t];
  return !(!e || !e.length)
}

function gs(t, e) {
  "mounted" === t && (gs.call(this, "bm"), this.$.isMounted = !0, t = "m");
  var n = this.$[t];
  return n && function (t, e) {
    for (var n, r = 0; r < t.length; r++) n = t[r](e);
    return n
  }(n, e)
}
var ms = [tt, G, W, nt, it, at, ut, ct, lt];

function ys(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
  if (t) {
    Object.keys(t).forEach((function (n) {
      kt(n, t[n]) && e.add(n)
    }));
    var n = t.extends,
      r = t.mixins;
    r && r.forEach((function (t) {
      return ys(t, e)
    })), n && ys(n, e)
  }
  return e
}

function bs(t, e, n) {
  -1 !== n.indexOf(e) || _(t, e) || (t[e] = function (t) {
    return this.$vm && this.$vm.$callHook(e, t)
  })
}
var xs = [et];

function ws(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xs;
  e.forEach((function (e) {
    return bs(t, e, n)
  }))
}

function Ss(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xs;
  ys(e).forEach((function (e) {
    return bs(t, e, n)
  }))
}
var _s = bt((function () {
    var t = [],
      e = k(getApp) && getApp({
        allowDefault: !0
      });
    if (e && e.$vm && e.$vm.$) {
      var n = e.$vm.$.appContext.mixins;
      if (T(n)) {
        var r = Object.keys(Ot);
        n.forEach((function (e) {
          r.forEach((function (n) {
            _(e, n) && !t.includes(n) && t.push(n)
          }))
        }))
      }
    }
    return t
  })),
  Ts = [G, W, J, Y, Q, X];

function Es(t, e) {
  var n = t.$,
    r = {
      globalData: t.$options && t.$options.globalData || {},
      $vm: t,
      onLaunch: function (e) {
        this.$vm = t;
        var r = n.ctx;
        this.$vm && r.$scope || (ds(n, {
          mpType: "app",
          mpInstance: this,
          slots: []
        }), r.globalData = this.globalData, t.$callHook(Z, e))
      }
    };
  n.onError && (n.appContext.config.errorHandler = function (e) {
      t.$callHook(J, e)
    }),
    function (t) {
      var e = function (t) {
        return function (t, e) {
          return Mr(t) ? t : new Lr(t, !1)
        }(t)
      }(Ht(wx.getSystemInfoSync().language) || Bt);
      Object.defineProperty(t, "$locale", {
        get: function () {
          return e.value
        },
        set: function (t) {
          e.value = t
        }
      })
    }(t);
  var i = t.$.type;
  ws(r, Ts), Ss(r, i);
  var o = i.methods;
  return o && x(r, o), e && e.parse(r), r
}

function Os(t, e) {
  if (k(t.onLaunch)) {
    var n = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    t.onLaunch(n)
  }
  k(t.onShow) && wx.onAppShow && wx.onAppShow((function (t) {
    e.$callHook("onShow", t)
  })), k(t.onHide) && wx.onAppHide && wx.onAppHide((function (t) {
    e.$callHook("onHide", t)
  }))
}
var ks = ["externalClasses"],
  As = /_(.*)_worklet_factory_/;
var Ds = ["eO", "uR", "uRIF", "uI", "uT", "uP", "uS"];

function Cs(t) {
  t.properties || (t.properties = {}), x(t.properties, function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = {};
    return e || (Ds.forEach((function (t) {
      n[t] = {
        type: null,
        value: ""
      }
    })), n.uS = {
      type: null,
      value: [],
      observer: function (t) {
        var e = Object.create(null);
        t && t.forEach((function (t) {
          e[t] = !0
        })), this.setData({
          $slots: e
        })
      }
    }), t.behaviors && t.behaviors.includes("wx://form-field") && (t.properties && t.properties.name || (n.name = {
      type: null,
      value: ""
    }), t.properties && t.properties.value || (n.value = {
      type: null,
      value: ""
    })), n
  }(t), function (t) {
    var e = {};
    return t && t.virtualHost && (e.virtualHostStyle = {
      type: null,
      value: ""
    }, e.virtualHostClass = {
      type: null,
      value: ""
    }), e
  }(t.options))
}
var Ps, Rs, Is = [String, Number, Boolean, Object, Array, null];

function Ns(t, e) {
  var n = function (t, e) {
    return T(t) && 1 === t.length ? t[0] : t
  }(t);
  return -1 !== Is.indexOf(n) ? n : null
}

function Vs(t, e) {
  return (e ? function (t) {
    var e = {};
    return N(t) && Object.keys(t).forEach((function (n) {
      -1 === Ds.indexOf(n) && (e[n] = t[n])
    })), e
  }(t) : cs(t.uP)) || {}
}

function js(t) {
  t.observers || (t.observers = {}), t.observers.uP = function () {
    var t = this.properties.uP;
    t && (this.$vm ? function (t, e) {
      var n, r = Ir(e.props),
        i = cs(t) || {};
      Bs(r, i) && (function (t, e, n, r) {
        var i = t.props,
          s = t.attrs,
          a = t.vnode.patchFlag,
          u = Ir(i),
          c = o(t.propsOptions, 1)[0],
          h = !1;
        if (!(a > 0) || 16 & a) {
          var l;
          for (var f in io(t, e, i, s) && (h = !0), u) e && (_(e, f) || (l = H(f)) !== f && _(e, l)) || (c ? !n || void 0 === n[f] && void 0 === n[l] || (i[f] = oo(c, u, f, void 0, t, !0)) : delete i[f]);
          if (s !== u)
            for (var p in s) e && _(e, p) || (delete s[p], h = !0)
        } else if (8 & a)
          for (var d = t.vnode.dynamicProps, v = 0; v < d.length; v++) {
            var g = d[v];
            if (!di(t.emitsOptions, g)) {
              var m = e[g];
              if (c)
                if (_(s, g)) m !== s[g] && (s[g] = m, h = !0);
                else {
                  var y = M(g);
                  i[y] = oo(c, u, y, m, t, !1)
                }
              else m !== s[g] && (s[g] = m, h = !0)
            }
          }
        h && Ln(t, "set", "$attrs")
      }(e, i, r), n = e.update, Yr.indexOf(n) > -1 && function (t) {
        var e = Yr.indexOf(t);
        e > Qr && Yr.splice(e, 1)
      }(e.update), e.update())
    }(t, this.$vm.$) : "m" === this.properties.uT && function (t, e) {
      var n = e.properties,
        r = cs(t) || {};
      Bs(n, r, !1) && e.setData(r)
    }(t, this))
  }
}

function Bs(t, e) {
  var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
    r = Object.keys(e);
  if (n && r.length !== Object.keys(t).length) return !0;
  for (var i = 0; i < r.length; i++) {
    var o = r[i];
    if (e[o] !== t[o]) return !0
  }
  return !1
}

function $s(t, e) {
  var n = e.parse,
    r = e.mocks,
    i = e.isPage,
    o = e.initRelation,
    s = e.handleLink,
    a = e.initLifetimes;
  t = t.default || t;
  var u = {
    multipleSlots: !0,
    addGlobalClass: !0,
    pureDataPattern: /^uP$/
  };
  T(t.mixins) && t.mixins.forEach((function (t) {
    C(t.options) && x(u, t.options)
  })), t.options && x(u, t.options);
  var c, h, l, f, p = {
    options: u,
    lifetimes: a({
      mocks: r,
      isPage: i,
      initRelation: o,
      vueOptions: t
    }),
    pageLifetimes: {
      show: function () {
        this.$vm && this.$vm.$callHook("onPageShow")
      },
      hide: function () {
        this.$vm && this.$vm.$callHook("onPageHide")
      },
      resize: function (t) {
        this.$vm && this.$vm.$callHook("onPageResize", t)
      }
    },
    methods: {
      __l: s
    }
  };
  return function (t, e) {
      t.data = {}, t.behaviors = function (t) {
        var e = t.behaviors,
          n = t.props;
        n || (t.props = n = []);
        var r = [];
        return T(e) && e.forEach((function (t) {
          r.push(t.replace("uni://", "wx://")), "uni://form-field" === t && (T(n) ? (n.push("name"), n.push("modelValue")) : (n.name = {
            type: String,
            default: ""
          }, n.modelValue = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ""
          }))
        })), r
      }(e)
    }(p, t), Cs(p), js(p),
    function (t, e) {
      ks.forEach((function (n) {
        _(e, n) && (t[n] = e[n])
      }))
    }(p, t), c = p.methods, h = t.wxsCallMethods, T(h) && h.forEach((function (t) {
      c[t] = function (e) {
        return this.$vm[t](e)
      }
    })), l = p.methods, (f = t.methods) && Object.keys(f).forEach((function (t) {
      var e = t.match(As);
      if (e) {
        var n = e[1];
        l[t] = f[t], l[n] = f[n]
      }
    })), n && n(p, {
      handleLink: s
    }), p
}

function Ms() {
  return getApp().$vm
}
var Ls = Page,
  Hs = Component;

function qs(t) {
  var e = t.triggerEvent,
    n = function (n) {
      for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
      return e.apply(t, [(s = n, M(s.replace(yt, "-")))].concat(i));
      var s
    };
  try {
    t.triggerEvent = n
  } catch (e) {
    t._triggerEvent = n
  }
}

function Us(t, e, n) {
  var r = e[t];
  e[t] = r ? function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    return qs(this), r.apply(this, e)
  } : function () {
    qs(this)
  }
}
Page = function (t) {
  return Us(tt, t), Ls(t)
}, Component = function (t) {
  return Us("created", t), t.properties && t.properties.uP || (Cs(t), js(t)), Hs(t)
};
var Fs, Ks = Object.freeze({
    __proto__: null,
    handleLink: function (t) {
      var e, n = t.detail || t.value,
        r = n.vuePid;
      r && (e = function t(e, n) {
        for (var r, i = e.$children, o = i.length - 1; o >= 0; o--) {
          var s = i[o];
          if (s.$scope._$vueId === n) return s
        }
        for (var a = i.length - 1; a >= 0; a--)
          if (r = t(i[a], n)) return r
      }(this.$vm, r)), e || (e = this.$vm), n.parent = e
    },
    initLifetimes: function (t) {
      var e = t.mocks,
        n = t.isPage,
        r = t.initRelation,
        i = t.vueOptions;
      return {
        attached: function () {
          var t = this.properties;
          ! function (t, e) {
            if (t) {
              var n = t.split(","),
                r = n.length;
              1 === r ? e._$vueId = n[0] : 2 === r && (e._$vueId = n[0], e._$vuePid = n[1])
            }
          }(t.uI, this);
          var o = {
            vuePid: this._$vuePid
          };
          r(this, o);
          var s = this,
            a = n(s),
            u = t;
          this.$vm = function (t, e) {
            Ps || (Ps = Ms().$createComponent);
            var n = Ps(t, e);
            return Eo(n.$) || n
          }({
            type: i,
            props: Vs(u, a)
          }, {
            mpType: a ? "page" : "component",
            mpInstance: s,
            slots: t.uS || {},
            parentComponent: o.parent && o.parent.$,
            onBeforeSetup: function (t, n) {
              ! function (t, e) {
                Object.defineProperty(t, "refs", {
                  get: function () {
                    var t = {};
                    return function (t, e, n) {
                      t.selectAllComponents(".r").forEach((function (t) {
                        var e = t.properties.uR;
                        n[e] = t.$vm || t
                      }))
                    }(e, 0, t), e.selectAllComponents(".r-i-f").forEach((function (e) {
                      var n = e.properties.uR;
                      n && (t[n] || (t[n] = []), t[n].push(e.$vm || e))
                    })), t
                  }
                })
              }(t, s),
              function (t, e, n) {
                var r = t.ctx;
                n.forEach((function (n) {
                  _(e, n) && (t[n] = r[n] = e[n])
                }))
              }(t, s, e),
              function (t, e) {
                ds(t, e);
                var n = t.ctx;
                ps.forEach((function (t) {
                  n[t] = function () {
                    for (var e = n.$scope, r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                    if (e && e[t]) return e[t].apply(e, i)
                  }
                }))
              }(t, n)
            }
          }), a || function (t) {
            var e = t.$options;
            T(e.behaviors) && e.behaviors.includes("uni://form-field") && t.$watch("modelValue", (function () {
              t.$scope && t.$scope.setData({
                name: t.name,
                value: t.modelValue
              })
            }), {
              immediate: !0
            })
          }(this.$vm)
        },
        ready: function () {
          this.$vm && (this.$vm.$callHook("mounted"), this.$vm.$callHook(et))
        },
        detached: function () {
          var t;
          this.$vm && (us(this.$vm.$.uid), t = this.$vm, Rs || (Rs = Ms().$destroyComponent), Rs(t))
        }
      }
    },
    initRelation: function (t, e) {
      t.triggerEvent("__l", e)
    },
    isPage: function (t) {
      return !!t.route
    },
    mocks: ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"]
  }),
  zs = (Fs = Ks, function (t) {
    return Component(function (t, e) {
      var n = e.parse,
        r = e.mocks,
        i = e.isPage,
        o = e.initRelation,
        s = e.handleLink,
        a = $s(t, {
          mocks: r,
          isPage: i,
          initRelation: o,
          handleLink: s,
          initLifetimes: e.initLifetimes
        });
      ! function (t, e) {
        var n = t.properties;
        T(e) ? e.forEach((function (t) {
          n[t] = {
            type: String,
            value: ""
          }
        })) : N(e) && Object.keys(e).forEach((function (t) {
          var r = e[t];
          if (N(r)) {
            var i = r.default;
            k(i) && (i = i());
            var o = r.type;
            r.type = Ns(o), n[t] = {
              type: r.type,
              value: i
            }
          } else n[t] = {
            type: Ns(r)
          }
        }))
      }(a, (t.default || t).props);
      var u = a.methods;
      return u.onLoad = function (t) {
          var e;
          return this.options = t, this.$page = {
            fullPath: (e = this.route + St(t), function (t) {
              return 0 === t.indexOf("/")
            }(e) ? e : "/" + e)
          }, this.$vm && this.$vm.$callHook(tt, t)
        }, ws(u, ms), Ss(u, t),
        function (t, e) {
          e && Object.keys(Ot).forEach((function (n) {
            e & Ot[n] && bs(t, n, [])
          }))
        }(u, t.__runtimeHooks), ws(u, _s()), n && n(a, {
          handleLink: s
        }), a
    }(t, Fs))
  }),
  Gs = function (t) {
    return function (e) {
      return Component($s(e, t))
    }
  }(Ks),
  Ws = function (t) {
    Os(Es(t, void 0), t)
  },
  Zs = function (t) {
    var e = Es(t, void 0),
      n = k(getApp) && getApp({
        allowDefault: !0
      });
    if (n) {
      t.$.ctx.$scope = n;
      var r = n.globalData;
      r && Object.keys(e.globalData).forEach((function (t) {
        _(r, t) || (r[t] = e.globalData[t])
      })), Object.keys(e).forEach((function (t) {
        _(n, t) || (n[t] = e[t])
      })), Os(e, t)
    }
  };
wx.createApp = global.createApp = function (t) {
  return App(Es(t, void 0))
}, wx.createPage = zs, wx.createComponent = Gs, wx.createPluginApp = global.createPluginApp = Ws, wx.createSubpackageApp = global.createSubpackageApp = Zs;

function Js(t) {
  return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
}

function Ys(t, e) {
  return t & e
}

function Qs(t, e) {
  return t | e
}

function Xs(t, e) {
  return t ^ e
}

function ta(t, e) {
  return t & ~e
}

function ea(t) {
  if (0 == t) return -1;
  var e = 0;
  return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e
}

function na(t) {
  for (var e = 0; 0 != t;) t &= t - 1, ++e;
  return e
}
var ra, ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function oa(t) {
  var e, n, r = "";
  for (e = 0; e + 3 <= t.length; e += 3) n = parseInt(t.substring(e, e + 3), 16), r += ia.charAt(n >> 6) + ia.charAt(63 & n);
  for (e + 1 == t.length ? (n = parseInt(t.substring(e, e + 1), 16), r += ia.charAt(n << 2)) : e + 2 == t.length && (n = parseInt(t.substring(e, e + 2), 16), r += ia.charAt(n >> 2) + ia.charAt((3 & n) << 4));
    (3 & r.length) > 0;) r += "=";
  return r
}

function sa(t) {
  var e, n = "",
    r = 0,
    i = 0;
  for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
    var o = ia.indexOf(t.charAt(e));
    o < 0 || (0 == r ? (n += Js(o >> 2), i = 3 & o, r = 1) : 1 == r ? (n += Js(i << 2 | o >> 4), i = 15 & o, r = 2) : 2 == r ? (n += Js(i), n += Js(o >> 2), i = 3 & o, r = 3) : (n += Js(i << 2 | o >> 4), n += Js(15 & o), r = 0))
  }
  return 1 == r && (n += Js(i << 2)), n
}
var aa, ua = {
    decode: function (t) {
      var e;
      if (void 0 === aa) {
        for (aa = Object.create(null), e = 0; e < 64; ++e) aa["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
        for (aa["-"] = 62, aa._ = 63, e = 0; e < 9; ++e) aa["= \f\n\r\t \u2028\u2029".charAt(e)] = -1
      }
      var n = [],
        r = 0,
        i = 0;
      for (e = 0; e < t.length; ++e) {
        var o = t.charAt(e);
        if ("=" == o) break;
        if (-1 != (o = aa[o])) {
          if (void 0 === o) throw new Error("Illegal character at offset " + e);
          r |= o, ++i >= 4 ? (n[n.length] = r >> 16, n[n.length] = r >> 8 & 255, n[n.length] = 255 & r, r = 0, i = 0) : r <<= 6
        }
      }
      switch (i) {
        case 1:
          throw new Error("Base64 encoding incomplete: at least 2 bits missing");
        case 2:
          n[n.length] = r >> 10;
          break;
        case 3:
          n[n.length] = r >> 16, n[n.length] = r >> 8 & 255
      }
      return n
    },
    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
    unarmor: function (t) {
      var e = ua.re.exec(t);
      if (e)
        if (e[1]) t = e[1];
        else {
          if (!e[2]) throw new Error("RegExp out of sync");
          t = e[2]
        } return ua.decode(t)
    }
  },
  ca = 1e13,
  ha = function () {
    function t(t) {
      this.buf = [+t || 0]
    }
    return t.prototype.mulAdd = function (t, e) {
      var n, r, i = this.buf,
        o = i.length;
      for (n = 0; n < o; ++n)(r = i[n] * t + e) < ca ? e = 0 : r -= (e = 0 | r / ca) * ca, i[n] = r;
      e > 0 && (i[n] = e)
    }, t.prototype.sub = function (t) {
      var e, n, r = this.buf,
        i = r.length;
      for (e = 0; e < i; ++e)(n = r[e] - t) < 0 ? (n += ca, t = 1) : t = 0, r[e] = n;
      for (; 0 === r[r.length - 1];) r.pop()
    }, t.prototype.toString = function (t) {
      if (10 != (t || 10)) throw new Error("only base 10 is supported");
      for (var e = this.buf, n = e[e.length - 1].toString(), r = e.length - 2; r >= 0; --r) n += (ca + e[r]).toString().substring(1);
      return n
    }, t.prototype.valueOf = function () {
      for (var t = this.buf, e = 0, n = t.length - 1; n >= 0; --n) e = e * ca + t[n];
      return e
    }, t.prototype.simplify = function () {
      var t = this.buf;
      return 1 == t.length ? t[0] : this
    }, t
  }(),
  la = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
  fa = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

function pa(t, e) {
  return t.length > e && (t = t.substring(0, e) + "…"), t
}
var da, va = function () {
    function t(e, n) {
      this.hexDigits = "0123456789ABCDEF", e instanceof t ? (this.enc = e.enc, this.pos = e.pos) : (this.enc = e, this.pos = n)
    }
    return t.prototype.get = function (t) {
      if (void 0 === t && (t = this.pos++), t >= this.enc.length) throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
      return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t]
    }, t.prototype.hexByte = function (t) {
      return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
    }, t.prototype.hexDump = function (t, e, n) {
      for (var r = "", i = t; i < e; ++i)
        if (r += this.hexByte(this.get(i)), !0 !== n) switch (15 & i) {
          case 7:
            r += "  ";
            break;
          case 15:
            r += "\n";
            break;
          default:
            r += " "
        }
      return r
    }, t.prototype.isASCII = function (t, e) {
      for (var n = t; n < e; ++n) {
        var r = this.get(n);
        if (r < 32 || r > 176) return !1
      }
      return !0
    }, t.prototype.parseStringISO = function (t, e) {
      for (var n = "", r = t; r < e; ++r) n += String.fromCharCode(this.get(r));
      return n
    }, t.prototype.parseStringUTF = function (t, e) {
      for (var n = "", r = t; r < e;) {
        var i = this.get(r++);
        n += i < 128 ? String.fromCharCode(i) : i > 191 && i < 224 ? String.fromCharCode((31 & i) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & i) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++))
      }
      return n
    }, t.prototype.parseStringBMP = function (t, e) {
      for (var n, r, i = "", o = t; o < e;) n = this.get(o++), r = this.get(o++), i += String.fromCharCode(n << 8 | r);
      return i
    }, t.prototype.parseTime = function (t, e, n) {
      var r = this.parseStringISO(t, e),
        i = (n ? la : fa).exec(r);
      return i ? (n && (i[1] = +i[1], i[1] += +i[1] < 70 ? 2e3 : 1900), r = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4], i[5] && (r += ":" + i[5], i[6] && (r += ":" + i[6], i[7] && (r += "." + i[7]))), i[8] && (r += " UTC", "Z" != i[8] && (r += i[8], i[9] && (r += ":" + i[9]))), r) : "Unrecognized time: " + r
    }, t.prototype.parseInteger = function (t, e) {
      for (var n, r = this.get(t), i = r > 127, o = i ? 255 : 0, s = ""; r == o && ++t < e;) r = this.get(t);
      if (0 == (n = e - t)) return i ? -1 : 0;
      if (n > 4) {
        for (s = r, n <<= 3; 0 == (128 & (+s ^ o));) s = +s << 1, --n;
        s = "(" + n + " bit)\n"
      }
      i && (r -= 256);
      for (var a = new ha(r), u = t + 1; u < e; ++u) a.mulAdd(256, this.get(u));
      return s + a.toString()
    }, t.prototype.parseBitString = function (t, e, n) {
      for (var r = this.get(t), i = "(" + ((e - t - 1 << 3) - r) + " bit)\n", o = "", s = t + 1; s < e; ++s) {
        for (var a = this.get(s), u = s == e - 1 ? r : 0, c = 7; c >= u; --c) o += a >> c & 1 ? "1" : "0";
        if (o.length > n) return i + pa(o, n)
      }
      return i + o
    }, t.prototype.parseOctetString = function (t, e, n) {
      if (this.isASCII(t, e)) return pa(this.parseStringISO(t, e), n);
      var r = e - t,
        i = "(" + r + " byte)\n";
      r > (n /= 2) && (e = t + n);
      for (var o = t; o < e; ++o) i += this.hexByte(this.get(o));
      return r > n && (i += "…"), i
    }, t.prototype.parseOID = function (t, e, n) {
      for (var r = "", i = new ha, o = 0, s = t; s < e; ++s) {
        var a = this.get(s);
        if (i.mulAdd(128, 127 & a), o += 7, !(128 & a)) {
          if ("" === r)
            if ((i = i.simplify()) instanceof ha) i.sub(80), r = "2." + i.toString();
            else {
              var u = i < 80 ? i < 40 ? 0 : 1 : 2;
              r = u + "." + (i - 40 * u)
            }
          else r += "." + i.toString();
          if (r.length > n) return pa(r, n);
          i = new ha, o = 0
        }
      }
      return o > 0 && (r += ".incomplete"), r
    }, t
  }(),
  ga = function () {
    function t(t, e, n, r, i) {
      if (!(r instanceof ma)) throw new Error("Invalid tag value.");
      this.stream = t, this.header = e, this.length = n, this.tag = r, this.sub = i
    }
    return t.prototype.typeName = function () {
      switch (this.tag.tagClass) {
        case 0:
          switch (this.tag.tagNumber) {
            case 0:
              return "EOC";
            case 1:
              return "BOOLEAN";
            case 2:
              return "INTEGER";
            case 3:
              return "BIT_STRING";
            case 4:
              return "OCTET_STRING";
            case 5:
              return "NULL";
            case 6:
              return "OBJECT_IDENTIFIER";
            case 7:
              return "ObjectDescriptor";
            case 8:
              return "EXTERNAL";
            case 9:
              return "REAL";
            case 10:
              return "ENUMERATED";
            case 11:
              return "EMBEDDED_PDV";
            case 12:
              return "UTF8String";
            case 16:
              return "SEQUENCE";
            case 17:
              return "SET";
            case 18:
              return "NumericString";
            case 19:
              return "PrintableString";
            case 20:
              return "TeletexString";
            case 21:
              return "VideotexString";
            case 22:
              return "IA5String";
            case 23:
              return "UTCTime";
            case 24:
              return "GeneralizedTime";
            case 25:
              return "GraphicString";
            case 26:
              return "VisibleString";
            case 27:
              return "GeneralString";
            case 28:
              return "UniversalString";
            case 30:
              return "BMPString"
          }
          return "Universal_" + this.tag.tagNumber.toString();
        case 1:
          return "Application_" + this.tag.tagNumber.toString();
        case 2:
          return "[" + this.tag.tagNumber.toString() + "]";
        case 3:
          return "Private_" + this.tag.tagNumber.toString()
      }
    }, t.prototype.content = function (t) {
      if (void 0 === this.tag) return null;
      void 0 === t && (t = 1 / 0);
      var e = this.posContent(),
        n = Math.abs(this.length);
      if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + n, t);
      switch (this.tag.tagNumber) {
        case 1:
          return 0 === this.stream.get(e) ? "false" : "true";
        case 2:
          return this.stream.parseInteger(e, e + n);
        case 3:
          return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + n, t);
        case 4:
          return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + n, t);
        case 6:
          return this.stream.parseOID(e, e + n, t);
        case 16:
        case 17:
          return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
        case 12:
          return pa(this.stream.parseStringUTF(e, e + n), t);
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 26:
          return pa(this.stream.parseStringISO(e, e + n), t);
        case 30:
          return pa(this.stream.parseStringBMP(e, e + n), t);
        case 23:
        case 24:
          return this.stream.parseTime(e, e + n, 23 == this.tag.tagNumber)
      }
      return null
    }, t.prototype.toString = function () {
      return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
    }, t.prototype.toPrettyString = function (t) {
      void 0 === t && (t = "");
      var e = t + this.typeName() + " @" + this.stream.pos;
      if (this.length >= 0 && (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"), e += "\n", null !== this.sub) {
        t += "  ";
        for (var n = 0, r = this.sub.length; n < r; ++n) e += this.sub[n].toPrettyString(t)
      }
      return e
    }, t.prototype.posStart = function () {
      return this.stream.pos
    }, t.prototype.posContent = function () {
      return this.stream.pos + this.header
    }, t.prototype.posEnd = function () {
      return this.stream.pos + this.header + Math.abs(this.length)
    }, t.prototype.toHexString = function () {
      return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
    }, t.decodeLength = function (t) {
      var e = t.get(),
        n = 127 & e;
      if (n == e) return n;
      if (n > 6) throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
      if (0 === n) return null;
      e = 0;
      for (var r = 0; r < n; ++r) e = 256 * e + t.get();
      return e
    }, t.prototype.getHexStringValue = function () {
      var t = this.toHexString(),
        e = 2 * this.header,
        n = 2 * this.length;
      return t.substr(e, n)
    }, t.decode = function (e) {
      var n;
      n = e instanceof va ? e : new va(e, 0);
      var r = new va(n),
        i = new ma(n),
        o = t.decodeLength(n),
        s = n.pos,
        a = s - r.pos,
        u = null,
        c = function () {
          var e = [];
          if (null !== o) {
            for (var r = s + o; n.pos < r;) e[e.length] = t.decode(n);
            if (n.pos != r) throw new Error("Content size is not correct for container starting at offset " + s)
          } else try {
            for (;;) {
              var i = t.decode(n);
              if (i.tag.isEOC()) break;
              e[e.length] = i
            }
            o = s - n.pos
          } catch (t) {
            throw new Error("Exception while decoding undefined length content: " + t)
          }
          return e
        };
      if (i.tagConstructed) u = c();
      else if (i.isUniversal() && (3 == i.tagNumber || 4 == i.tagNumber)) try {
        if (3 == i.tagNumber && 0 != n.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
        u = c();
        for (var h = 0; h < u.length; ++h)
          if (u[h].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.")
      } catch (t) {
        u = null
      }
      if (null === u) {
        if (null === o) throw new Error("We can't skip over an invalid tag with undefined length at offset " + s);
        n.pos = s + Math.abs(o)
      }
      return new t(r, a, o, i, u)
    }, t
  }(),
  ma = function () {
    function t(t) {
      var e = t.get();
      if (this.tagClass = e >> 6, this.tagConstructed = 0 != (32 & e), this.tagNumber = 31 & e, 31 == this.tagNumber) {
        var n = new ha;
        do {
          e = t.get(), n.mulAdd(128, 127 & e)
        } while (128 & e);
        this.tagNumber = n.simplify()
      }
    }
    return t.prototype.isUniversal = function () {
      return 0 === this.tagClass
    }, t.prototype.isEOC = function () {
      return 0 === this.tagClass && 0 === this.tagNumber
    }, t
  }(),
  ya = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
  ba = (1 << 26) / ya[ya.length - 1],
  xa = function () {
    function t(t, e, n) {
      null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
    }
    return t.prototype.toString = function (t) {
      if (this.s < 0) return "-" + this.negate().toString(t);
      var e;
      if (16 == t) e = 4;
      else if (8 == t) e = 3;
      else if (2 == t) e = 1;
      else if (32 == t) e = 5;
      else {
        if (4 != t) return this.toRadix(t);
        e = 2
      }
      var n, r = (1 << e) - 1,
        i = !1,
        o = "",
        s = this.t,
        a = this.DB - s * this.DB % e;
      if (s-- > 0)
        for (a < this.DB && (n = this[s] >> a) > 0 && (i = !0, o = Js(n)); s >= 0;) a < e ? (n = (this[s] & (1 << a) - 1) << e - a, n |= this[--s] >> (a += this.DB - e)) : (n = this[s] >> (a -= e) & r, a <= 0 && (a += this.DB, --s)), n > 0 && (i = !0), i && (o += Js(n));
      return i ? o : "0"
    }, t.prototype.negate = function () {
      var e = Ea();
      return t.ZERO.subTo(this, e), e
    }, t.prototype.abs = function () {
      return this.s < 0 ? this.negate() : this
    }, t.prototype.compareTo = function (t) {
      var e = this.s - t.s;
      if (0 != e) return e;
      var n = this.t;
      if (0 != (e = n - t.t)) return this.s < 0 ? -e : e;
      for (; --n >= 0;)
        if (0 != (e = this[n] - t[n])) return e;
      return 0
    }, t.prototype.bitLength = function () {
      return this.t <= 0 ? 0 : this.DB * (this.t - 1) + Ia(this[this.t - 1] ^ this.s & this.DM)
    }, t.prototype.mod = function (e) {
      var n = Ea();
      return this.abs().divRemTo(e, null, n), this.s < 0 && n.compareTo(t.ZERO) > 0 && e.subTo(n, n), n
    }, t.prototype.modPowInt = function (t, e) {
      var n;
      return n = t < 256 || e.isEven() ? new Sa(e) : new _a(e), this.exp(t, n)
    }, t.prototype.clone = function () {
      var t = Ea();
      return this.copyTo(t), t
    }, t.prototype.intValue = function () {
      if (this.s < 0) {
        if (1 == this.t) return this[0] - this.DV;
        if (0 == this.t) return -1
      } else {
        if (1 == this.t) return this[0];
        if (0 == this.t) return 0
      }
      return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
    }, t.prototype.byteValue = function () {
      return 0 == this.t ? this.s : this[0] << 24 >> 24
    }, t.prototype.shortValue = function () {
      return 0 == this.t ? this.s : this[0] << 16 >> 16
    }, t.prototype.signum = function () {
      return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
    }, t.prototype.toByteArray = function () {
      var t = this.t,
        e = [];
      e[0] = this.s;
      var n, r = this.DB - t * this.DB % 8,
        i = 0;
      if (t-- > 0)
        for (r < this.DB && (n = this[t] >> r) != (this.s & this.DM) >> r && (e[i++] = n | this.s << this.DB - r); t >= 0;) r < 8 ? (n = (this[t] & (1 << r) - 1) << 8 - r, n |= this[--t] >> (r += this.DB - 8)) : (n = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --t)), 0 != (128 & n) && (n |= -256), 0 == i && (128 & this.s) != (128 & n) && ++i, (i > 0 || n != this.s) && (e[i++] = n);
      return e
    }, t.prototype.equals = function (t) {
      return 0 == this.compareTo(t)
    }, t.prototype.min = function (t) {
      return this.compareTo(t) < 0 ? this : t
    }, t.prototype.max = function (t) {
      return this.compareTo(t) > 0 ? this : t
    }, t.prototype.and = function (t) {
      var e = Ea();
      return this.bitwiseTo(t, Ys, e), e
    }, t.prototype.or = function (t) {
      var e = Ea();
      return this.bitwiseTo(t, Qs, e), e
    }, t.prototype.xor = function (t) {
      var e = Ea();
      return this.bitwiseTo(t, Xs, e), e
    }, t.prototype.andNot = function (t) {
      var e = Ea();
      return this.bitwiseTo(t, ta, e), e
    }, t.prototype.not = function () {
      for (var t = Ea(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
      return t.t = this.t, t.s = ~this.s, t
    }, t.prototype.shiftLeft = function (t) {
      var e = Ea();
      return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
    }, t.prototype.shiftRight = function (t) {
      var e = Ea();
      return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
    }, t.prototype.getLowestSetBit = function () {
      for (var t = 0; t < this.t; ++t)
        if (0 != this[t]) return t * this.DB + ea(this[t]);
      return this.s < 0 ? this.t * this.DB : -1
    }, t.prototype.bitCount = function () {
      for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n) t += na(this[n] ^ e);
      return t
    }, t.prototype.testBit = function (t) {
      var e = Math.floor(t / this.DB);
      return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
    }, t.prototype.setBit = function (t) {
      return this.changeBit(t, Qs)
    }, t.prototype.clearBit = function (t) {
      return this.changeBit(t, ta)
    }, t.prototype.flipBit = function (t) {
      return this.changeBit(t, Xs)
    }, t.prototype.add = function (t) {
      var e = Ea();
      return this.addTo(t, e), e
    }, t.prototype.subtract = function (t) {
      var e = Ea();
      return this.subTo(t, e), e
    }, t.prototype.multiply = function (t) {
      var e = Ea();
      return this.multiplyTo(t, e), e
    }, t.prototype.divide = function (t) {
      var e = Ea();
      return this.divRemTo(t, e, null), e
    }, t.prototype.remainder = function (t) {
      var e = Ea();
      return this.divRemTo(t, null, e), e
    }, t.prototype.divideAndRemainder = function (t) {
      var e = Ea(),
        n = Ea();
      return this.divRemTo(t, e, n), [e, n]
    }, t.prototype.modPow = function (t, e) {
      var n, r, i = t.bitLength(),
        o = Ra(1);
      if (i <= 0) return o;
      n = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6, r = i < 8 ? new Sa(e) : e.isEven() ? new Ta(e) : new _a(e);
      var s = [],
        a = 3,
        u = n - 1,
        c = (1 << n) - 1;
      if (s[1] = r.convert(this), n > 1) {
        var h = Ea();
        for (r.sqrTo(s[1], h); a <= c;) s[a] = Ea(), r.mulTo(h, s[a - 2], s[a]), a += 2
      }
      var l, f, p = t.t - 1,
        d = !0,
        v = Ea();
      for (i = Ia(t[p]) - 1; p >= 0;) {
        for (i >= u ? l = t[p] >> i - u & c : (l = (t[p] & (1 << i + 1) - 1) << u - i, p > 0 && (l |= t[p - 1] >> this.DB + i - u)), a = n; 0 == (1 & l);) l >>= 1, --a;
        if ((i -= a) < 0 && (i += this.DB, --p), d) s[l].copyTo(o), d = !1;
        else {
          for (; a > 1;) r.sqrTo(o, v), r.sqrTo(v, o), a -= 2;
          a > 0 ? r.sqrTo(o, v) : (f = o, o = v, v = f), r.mulTo(v, s[l], o)
        }
        for (; p >= 0 && 0 == (t[p] & 1 << i);) r.sqrTo(o, v), f = o, o = v, v = f, --i < 0 && (i = this.DB - 1, --p)
      }
      return r.revert(o)
    }, t.prototype.modInverse = function (e) {
      var n = e.isEven();
      if (this.isEven() && n || 0 == e.signum()) return t.ZERO;
      for (var r = e.clone(), i = this.clone(), o = Ra(1), s = Ra(0), a = Ra(0), u = Ra(1); 0 != r.signum();) {
        for (; r.isEven();) r.rShiftTo(1, r), n ? (o.isEven() && s.isEven() || (o.addTo(this, o), s.subTo(e, s)), o.rShiftTo(1, o)) : s.isEven() || s.subTo(e, s), s.rShiftTo(1, s);
        for (; i.isEven();) i.rShiftTo(1, i), n ? (a.isEven() && u.isEven() || (a.addTo(this, a), u.subTo(e, u)), a.rShiftTo(1, a)) : u.isEven() || u.subTo(e, u), u.rShiftTo(1, u);
        r.compareTo(i) >= 0 ? (r.subTo(i, r), n && o.subTo(a, o), s.subTo(u, s)) : (i.subTo(r, i), n && a.subTo(o, a), u.subTo(s, u))
      }
      return 0 != i.compareTo(t.ONE) ? t.ZERO : u.compareTo(e) >= 0 ? u.subtract(e) : u.signum() < 0 ? (u.addTo(e, u), u.signum() < 0 ? u.add(e) : u) : u
    }, t.prototype.pow = function (t) {
      return this.exp(t, new wa)
    }, t.prototype.gcd = function (t) {
      var e = this.s < 0 ? this.negate() : this.clone(),
        n = t.s < 0 ? t.negate() : t.clone();
      if (e.compareTo(n) < 0) {
        var r = e;
        e = n, n = r
      }
      var i = e.getLowestSetBit(),
        o = n.getLowestSetBit();
      if (o < 0) return e;
      for (i < o && (o = i), o > 0 && (e.rShiftTo(o, e), n.rShiftTo(o, n)); e.signum() > 0;)(i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e), (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n), e.compareTo(n) >= 0 ? (e.subTo(n, e), e.rShiftTo(1, e)) : (n.subTo(e, n), n.rShiftTo(1, n));
      return o > 0 && n.lShiftTo(o, n), n
    }, t.prototype.isProbablePrime = function (t) {
      var e, n = this.abs();
      if (1 == n.t && n[0] <= ya[ya.length - 1]) {
        for (e = 0; e < ya.length; ++e)
          if (n[0] == ya[e]) return !0;
        return !1
      }
      if (n.isEven()) return !1;
      for (e = 1; e < ya.length;) {
        for (var r = ya[e], i = e + 1; i < ya.length && r < ba;) r *= ya[i++];
        for (r = n.modInt(r); e < i;)
          if (r % ya[e++] == 0) return !1
      }
      return n.millerRabin(t)
    }, t.prototype.copyTo = function (t) {
      for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
      t.t = this.t, t.s = this.s
    }, t.prototype.fromInt = function (t) {
      this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
    }, t.prototype.fromString = function (e, n) {
      var r;
      if (16 == n) r = 4;
      else if (8 == n) r = 3;
      else if (256 == n) r = 8;
      else if (2 == n) r = 1;
      else if (32 == n) r = 5;
      else {
        if (4 != n) return void this.fromRadix(e, n);
        r = 2
      }
      this.t = 0, this.s = 0;
      for (var i = e.length, o = !1, s = 0; --i >= 0;) {
        var a = 8 == r ? 255 & +e[i] : Pa(e, i);
        a < 0 ? "-" == e.charAt(i) && (o = !0) : (o = !1, 0 == s ? this[this.t++] = a : s + r > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, (s += r) >= this.DB && (s -= this.DB))
      }
      8 == r && 0 != (128 & +e[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), o && t.ZERO.subTo(this, this)
    }, t.prototype.clamp = function () {
      for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
    }, t.prototype.dlShiftTo = function (t, e) {
      var n;
      for (n = this.t - 1; n >= 0; --n) e[n + t] = this[n];
      for (n = t - 1; n >= 0; --n) e[n] = 0;
      e.t = this.t + t, e.s = this.s
    }, t.prototype.drShiftTo = function (t, e) {
      for (var n = t; n < this.t; ++n) e[n - t] = this[n];
      e.t = Math.max(this.t - t, 0), e.s = this.s
    }, t.prototype.lShiftTo = function (t, e) {
      for (var n = t % this.DB, r = this.DB - n, i = (1 << r) - 1, o = Math.floor(t / this.DB), s = this.s << n & this.DM, a = this.t - 1; a >= 0; --a) e[a + o + 1] = this[a] >> r | s, s = (this[a] & i) << n;
      for (a = o - 1; a >= 0; --a) e[a] = 0;
      e[o] = s, e.t = this.t + o + 1, e.s = this.s, e.clamp()
    }, t.prototype.rShiftTo = function (t, e) {
      e.s = this.s;
      var n = Math.floor(t / this.DB);
      if (n >= this.t) e.t = 0;
      else {
        var r = t % this.DB,
          i = this.DB - r,
          o = (1 << r) - 1;
        e[0] = this[n] >> r;
        for (var s = n + 1; s < this.t; ++s) e[s - n - 1] |= (this[s] & o) << i, e[s - n] = this[s] >> r;
        r > 0 && (e[this.t - n - 1] |= (this.s & o) << i), e.t = this.t - n, e.clamp()
      }
    }, t.prototype.subTo = function (t, e) {
      for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i;) r += this[n] - t[n], e[n++] = r & this.DM, r >>= this.DB;
      if (t.t < this.t) {
        for (r -= t.s; n < this.t;) r += this[n], e[n++] = r & this.DM, r >>= this.DB;
        r += this.s
      } else {
        for (r += this.s; n < t.t;) r -= t[n], e[n++] = r & this.DM, r >>= this.DB;
        r -= t.s
      }
      e.s = r < 0 ? -1 : 0, r < -1 ? e[n++] = this.DV + r : r > 0 && (e[n++] = r), e.t = n, e.clamp()
    }, t.prototype.multiplyTo = function (e, n) {
      var r = this.abs(),
        i = e.abs(),
        o = r.t;
      for (n.t = o + i.t; --o >= 0;) n[o] = 0;
      for (o = 0; o < i.t; ++o) n[o + r.t] = r.am(0, i[o], n, o, 0, r.t);
      n.s = 0, n.clamp(), this.s != e.s && t.ZERO.subTo(n, n)
    }, t.prototype.squareTo = function (t) {
      for (var e = this.abs(), n = t.t = 2 * e.t; --n >= 0;) t[n] = 0;
      for (n = 0; n < e.t - 1; ++n) {
        var r = e.am(n, e[n], t, 2 * n, 0, 1);
        (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, r, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV, t[n + e.t + 1] = 1)
      }
      t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)), t.s = 0, t.clamp()
    }, t.prototype.divRemTo = function (e, n, r) {
      var i = e.abs();
      if (!(i.t <= 0)) {
        var o = this.abs();
        if (o.t < i.t) return null != n && n.fromInt(0), void(null != r && this.copyTo(r));
        null == r && (r = Ea());
        var s = Ea(),
          a = this.s,
          u = e.s,
          c = this.DB - Ia(i[i.t - 1]);
        c > 0 ? (i.lShiftTo(c, s), o.lShiftTo(c, r)) : (i.copyTo(s), o.copyTo(r));
        var h = s.t,
          l = s[h - 1];
        if (0 != l) {
          var f = l * (1 << this.F1) + (h > 1 ? s[h - 2] >> this.F2 : 0),
            p = this.FV / f,
            d = (1 << this.F1) / f,
            v = 1 << this.F2,
            g = r.t,
            m = g - h,
            y = null == n ? Ea() : n;
          for (s.dlShiftTo(m, y), r.compareTo(y) >= 0 && (r[r.t++] = 1, r.subTo(y, r)), t.ONE.dlShiftTo(h, y), y.subTo(s, s); s.t < h;) s[s.t++] = 0;
          for (; --m >= 0;) {
            var b = r[--g] == l ? this.DM : Math.floor(r[g] * p + (r[g - 1] + v) * d);
            if ((r[g] += s.am(0, b, r, m, 0, h)) < b)
              for (s.dlShiftTo(m, y), r.subTo(y, r); r[g] < --b;) r.subTo(y, r)
          }
          null != n && (r.drShiftTo(h, n), a != u && t.ZERO.subTo(n, n)), r.t = h, r.clamp(), c > 0 && r.rShiftTo(c, r), a < 0 && t.ZERO.subTo(r, r)
        }
      }
    }, t.prototype.invDigit = function () {
      if (this.t < 1) return 0;
      var t = this[0];
      if (0 == (1 & t)) return 0;
      var e = 3 & t;
      return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
    }, t.prototype.isEven = function () {
      return 0 == (this.t > 0 ? 1 & this[0] : this.s)
    }, t.prototype.exp = function (e, n) {
      if (e > 4294967295 || e < 1) return t.ONE;
      var r = Ea(),
        i = Ea(),
        o = n.convert(this),
        s = Ia(e) - 1;
      for (o.copyTo(r); --s >= 0;)
        if (n.sqrTo(r, i), (e & 1 << s) > 0) n.mulTo(i, o, r);
        else {
          var a = r;
          r = i, i = a
        } return n.revert(r)
    }, t.prototype.chunkSize = function (t) {
      return Math.floor(Math.LN2 * this.DB / Math.log(t))
    }, t.prototype.toRadix = function (t) {
      if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
      var e = this.chunkSize(t),
        n = Math.pow(t, e),
        r = Ra(n),
        i = Ea(),
        o = Ea(),
        s = "";
      for (this.divRemTo(r, i, o); i.signum() > 0;) s = (n + o.intValue()).toString(t).substr(1) + s, i.divRemTo(r, i, o);
      return o.intValue().toString(t) + s
    }, t.prototype.fromRadix = function (e, n) {
      this.fromInt(0), null == n && (n = 10);
      for (var r = this.chunkSize(n), i = Math.pow(n, r), o = !1, s = 0, a = 0, u = 0; u < e.length; ++u) {
        var c = Pa(e, u);
        c < 0 ? "-" == e.charAt(u) && 0 == this.signum() && (o = !0) : (a = n * a + c, ++s >= r && (this.dMultiply(i), this.dAddOffset(a, 0), s = 0, a = 0))
      }
      s > 0 && (this.dMultiply(Math.pow(n, s)), this.dAddOffset(a, 0)), o && t.ZERO.subTo(this, this)
    }, t.prototype.fromNumber = function (e, n, r) {
      if ("number" == typeof n)
        if (e < 2) this.fromInt(1);
        else
          for (this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), Qs, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(n);) this.dAddOffset(2, 0), this.bitLength() > e && this.subTo(t.ONE.shiftLeft(e - 1), this);
      else {
        var i = [],
          o = 7 & e;
        i.length = 1 + (e >> 3), n.nextBytes(i), o > 0 ? i[0] &= (1 << o) - 1 : i[0] = 0, this.fromString(i, 256)
      }
    }, t.prototype.bitwiseTo = function (t, e, n) {
      var r, i, o = Math.min(t.t, this.t);
      for (r = 0; r < o; ++r) n[r] = e(this[r], t[r]);
      if (t.t < this.t) {
        for (i = t.s & this.DM, r = o; r < this.t; ++r) n[r] = e(this[r], i);
        n.t = this.t
      } else {
        for (i = this.s & this.DM, r = o; r < t.t; ++r) n[r] = e(i, t[r]);
        n.t = t.t
      }
      n.s = e(this.s, t.s), n.clamp()
    }, t.prototype.changeBit = function (e, n) {
      var r = t.ONE.shiftLeft(e);
      return this.bitwiseTo(r, n, r), r
    }, t.prototype.addTo = function (t, e) {
      for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i;) r += this[n] + t[n], e[n++] = r & this.DM, r >>= this.DB;
      if (t.t < this.t) {
        for (r += t.s; n < this.t;) r += this[n], e[n++] = r & this.DM, r >>= this.DB;
        r += this.s
      } else {
        for (r += this.s; n < t.t;) r += t[n], e[n++] = r & this.DM, r >>= this.DB;
        r += t.s
      }
      e.s = r < 0 ? -1 : 0, r > 0 ? e[n++] = r : r < -1 && (e[n++] = this.DV + r), e.t = n, e.clamp()
    }, t.prototype.dMultiply = function (t) {
      this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
    }, t.prototype.dAddOffset = function (t, e) {
      if (0 != t) {
        for (; this.t <= e;) this[this.t++] = 0;
        for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
      }
    }, t.prototype.multiplyLowerTo = function (t, e, n) {
      var r = Math.min(this.t + t.t, e);
      for (n.s = 0, n.t = r; r > 0;) n[--r] = 0;
      for (var i = n.t - this.t; r < i; ++r) n[r + this.t] = this.am(0, t[r], n, r, 0, this.t);
      for (i = Math.min(t.t, e); r < i; ++r) this.am(0, t[r], n, r, 0, e - r);
      n.clamp()
    }, t.prototype.multiplyUpperTo = function (t, e, n) {
      --e;
      var r = n.t = this.t + t.t - e;
      for (n.s = 0; --r >= 0;) n[r] = 0;
      for (r = Math.max(e - this.t, 0); r < t.t; ++r) n[this.t + r - e] = this.am(e - r, t[r], n, 0, 0, this.t + r - e);
      n.clamp(), n.drShiftTo(1, n)
    }, t.prototype.modInt = function (t) {
      if (t <= 0) return 0;
      var e = this.DV % t,
        n = this.s < 0 ? t - 1 : 0;
      if (this.t > 0)
        if (0 == e) n = this[0] % t;
        else
          for (var r = this.t - 1; r >= 0; --r) n = (e * n + this[r]) % t;
      return n
    }, t.prototype.millerRabin = function (e) {
      var n = this.subtract(t.ONE),
        r = n.getLowestSetBit();
      if (r <= 0) return !1;
      var i = n.shiftRight(r);
      (e = e + 1 >> 1) > ya.length && (e = ya.length);
      for (var o = Ea(), s = 0; s < e; ++s) {
        o.fromInt(ya[Math.floor(Math.random() * ya.length)]);
        var a = o.modPow(i, this);
        if (0 != a.compareTo(t.ONE) && 0 != a.compareTo(n)) {
          for (var u = 1; u++ < r && 0 != a.compareTo(n);)
            if (0 == (a = a.modPowInt(2, this)).compareTo(t.ONE)) return !1;
          if (0 != a.compareTo(n)) return !1
        }
      }
      return !0
    }, t.prototype.square = function () {
      var t = Ea();
      return this.squareTo(t), t
    }, t.prototype.gcda = function (t, e) {
      var n = this.s < 0 ? this.negate() : this.clone(),
        r = t.s < 0 ? t.negate() : t.clone();
      if (n.compareTo(r) < 0) {
        var i = n;
        n = r, r = i
      }
      var o = n.getLowestSetBit(),
        s = r.getLowestSetBit();
      if (s < 0) e(n);
      else {
        o < s && (s = o), s > 0 && (n.rShiftTo(s, n), r.rShiftTo(s, r));
        setTimeout((function t() {
          (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n), (o = r.getLowestSetBit()) > 0 && r.rShiftTo(o, r), n.compareTo(r) >= 0 ? (n.subTo(r, n), n.rShiftTo(1, n)) : (r.subTo(n, r), r.rShiftTo(1, r)), n.signum() > 0 ? setTimeout(t, 0) : (s > 0 && r.lShiftTo(s, r), setTimeout((function () {
            e(r)
          }), 0))
        }), 10)
      }
    }, t.prototype.fromNumberAsync = function (e, n, r, i) {
      if ("number" == typeof n)
        if (e < 2) this.fromInt(1);
        else {
          this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), Qs, this), this.isEven() && this.dAddOffset(1, 0);
          var o = this;
          setTimeout((function r() {
            o.dAddOffset(2, 0), o.bitLength() > e && o.subTo(t.ONE.shiftLeft(e - 1), o), o.isProbablePrime(n) ? setTimeout((function () {
              i()
            }), 0) : setTimeout(r, 0)
          }), 0)
        }
      else {
        var s = [],
          a = 7 & e;
        s.length = 1 + (e >> 3), n.nextBytes(s), a > 0 ? s[0] &= (1 << a) - 1 : s[0] = 0, this.fromString(s, 256)
      }
    }, t
  }(),
  wa = function () {
    function t() {}
    return t.prototype.convert = function (t) {
      return t
    }, t.prototype.revert = function (t) {
      return t
    }, t.prototype.mulTo = function (t, e, n) {
      t.multiplyTo(e, n)
    }, t.prototype.sqrTo = function (t, e) {
      t.squareTo(e)
    }, t
  }(),
  Sa = function () {
    function t(t) {
      this.m = t
    }
    return t.prototype.convert = function (t) {
      return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
    }, t.prototype.revert = function (t) {
      return t
    }, t.prototype.reduce = function (t) {
      t.divRemTo(this.m, null, t)
    }, t.prototype.mulTo = function (t, e, n) {
      t.multiplyTo(e, n), this.reduce(n)
    }, t.prototype.sqrTo = function (t, e) {
      t.squareTo(e), this.reduce(e)
    }, t
  }(),
  _a = function () {
    function t(t) {
      this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
    }
    return t.prototype.convert = function (t) {
      var e = Ea();
      return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(xa.ZERO) > 0 && this.m.subTo(e, e), e
    }, t.prototype.revert = function (t) {
      var e = Ea();
      return t.copyTo(e), this.reduce(e), e
    }, t.prototype.reduce = function (t) {
      for (; t.t <= this.mt2;) t[t.t++] = 0;
      for (var e = 0; e < this.m.t; ++e) {
        var n = 32767 & t[e],
          r = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
        for (t[n = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[n] >= t.DV;) t[n] -= t.DV, t[++n]++
      }
      t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
    }, t.prototype.mulTo = function (t, e, n) {
      t.multiplyTo(e, n), this.reduce(n)
    }, t.prototype.sqrTo = function (t, e) {
      t.squareTo(e), this.reduce(e)
    }, t
  }(),
  Ta = function () {
    function t(t) {
      this.m = t, this.r2 = Ea(), this.q3 = Ea(), xa.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t)
    }
    return t.prototype.convert = function (t) {
      if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
      if (t.compareTo(this.m) < 0) return t;
      var e = Ea();
      return t.copyTo(e), this.reduce(e), e
    }, t.prototype.revert = function (t) {
      return t
    }, t.prototype.reduce = function (t) {
      for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
      for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
    }, t.prototype.mulTo = function (t, e, n) {
      t.multiplyTo(e, n), this.reduce(n)
    }, t.prototype.sqrTo = function (t, e) {
      t.squareTo(e), this.reduce(e)
    }, t
  }();

function Ea() {
  return new xa(null)
}

function Oa(t, e) {
  return new xa(t, e)
}
var ka = "undefined" != typeof navigator;
ka && "Microsoft Internet Explorer" == navigator.appName ? (xa.prototype.am = function (t, e, n, r, i, o) {
  for (var s = 32767 & e, a = e >> 15; --o >= 0;) {
    var u = 32767 & this[t],
      c = this[t++] >> 15,
      h = a * u + c * s;
    i = ((u = s * u + ((32767 & h) << 15) + n[r] + (1073741823 & i)) >>> 30) + (h >>> 15) + a * c + (i >>> 30), n[r++] = 1073741823 & u
  }
  return i
}, da = 30) : ka && "Netscape" != navigator.appName ? (xa.prototype.am = function (t, e, n, r, i, o) {
  for (; --o >= 0;) {
    var s = e * this[t++] + n[r] + i;
    i = Math.floor(s / 67108864), n[r++] = 67108863 & s
  }
  return i
}, da = 26) : (xa.prototype.am = function (t, e, n, r, i, o) {
  for (var s = 16383 & e, a = e >> 14; --o >= 0;) {
    var u = 16383 & this[t],
      c = this[t++] >> 14,
      h = a * u + c * s;
    i = ((u = s * u + ((16383 & h) << 14) + n[r] + i) >> 28) + (h >> 14) + a * c, n[r++] = 268435455 & u
  }
  return i
}, da = 28), xa.prototype.DB = da, xa.prototype.DM = (1 << da) - 1, xa.prototype.DV = 1 << da, xa.prototype.FV = Math.pow(2, 52), xa.prototype.F1 = 52 - da, xa.prototype.F2 = 2 * da - 52;
var Aa, Da, Ca = [];
for (Aa = "0".charCodeAt(0), Da = 0; Da <= 9; ++Da) Ca[Aa++] = Da;
for (Aa = "a".charCodeAt(0), Da = 10; Da < 36; ++Da) Ca[Aa++] = Da;
for (Aa = "A".charCodeAt(0), Da = 10; Da < 36; ++Da) Ca[Aa++] = Da;

function Pa(t, e) {
  var n = Ca[t.charCodeAt(e)];
  return null == n ? -1 : n
}

function Ra(t) {
  var e = Ea();
  return e.fromInt(t), e
}

function Ia(t) {
  var e, n = 1;
  return 0 != (e = t >>> 16) && (t = e, n += 16), 0 != (e = t >> 8) && (t = e, n += 8), 0 != (e = t >> 4) && (t = e, n += 4), 0 != (e = t >> 2) && (t = e, n += 2), 0 != (e = t >> 1) && (t = e, n += 1), n
}
xa.ZERO = Ra(0), xa.ONE = Ra(1);
var Na, Va, ja = function () {
    function t() {
      this.i = 0, this.j = 0, this.S = []
    }
    return t.prototype.init = function (t) {
      var e, n, r;
      for (e = 0; e < 256; ++e) this.S[e] = e;
      for (n = 0, e = 0; e < 256; ++e) n = n + this.S[e] + t[e % t.length] & 255, r = this.S[e], this.S[e] = this.S[n], this.S[n] = r;
      this.i = 0, this.j = 0
    }, t.prototype.next = function () {
      var t;
      return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
    }, t
  }(),
  Ba = null;

function $a() {
  if (null == Na) {
    for (Na = new ja; Va < 256;) {
      var t = Math.floor(65536 * Math.random());
      Ba[Va++] = 255 & t
    }
    for (Na.init(Ba), Va = 0; Va < Ba.length; ++Va) Ba[Va] = 0;
    Va = 0
  }
  return Na.next()
}
null == Ba && (Ba = [], Va = 0);
var Ma = function () {
    function t() {}
    return t.prototype.nextBytes = function (t) {
      for (var e = 0; e < t.length; ++e) t[e] = $a()
    }, t
  }(),
  La = function () {
    function t() {
      this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
    }
    return t.prototype.doPublic = function (t) {
      return t.modPowInt(this.e, this.n)
    }, t.prototype.doPrivate = function (t) {
      if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
      for (var e = t.mod(this.p).modPow(this.dmp1, this.p), n = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(n) < 0;) e = e.add(this.p);
      return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
    }, t.prototype.setPublic = function (t, e) {
      null != t && null != e && t.length > 0 && e.length > 0 && (this.n = Oa(t, 16), this.e = parseInt(e, 16))
    }, t.prototype.encrypt = function (t) {
      var e = this.n.bitLength() + 7 >> 3,
        n = function (t, e) {
          if (e < t.length + 11) return null;
          for (var n = [], r = t.length - 1; r >= 0 && e > 0;) {
            var i = t.charCodeAt(r--);
            i < 128 ? n[--e] = i : i > 127 && i < 2048 ? (n[--e] = 63 & i | 128, n[--e] = i >> 6 | 192) : (n[--e] = 63 & i | 128, n[--e] = i >> 6 & 63 | 128, n[--e] = i >> 12 | 224)
          }
          n[--e] = 0;
          for (var o = new Ma, s = []; e > 2;) {
            for (s[0] = 0; 0 == s[0];) o.nextBytes(s);
            n[--e] = s[0]
          }
          return n[--e] = 2, n[--e] = 0, new xa(n)
        }(t, e);
      if (null == n) return null;
      var r = this.doPublic(n);
      if (null == r) return null;
      for (var i = r.toString(16), o = i.length, s = 0; s < 2 * e - o; s++) i = "0" + i;
      return i
    }, t.prototype.setPrivate = function (t, e, n) {
      null != t && null != e && t.length > 0 && e.length > 0 && (this.n = Oa(t, 16), this.e = parseInt(e, 16), this.d = Oa(n, 16))
    }, t.prototype.setPrivateEx = function (t, e, n, r, i, o, s, a) {
      null != t && null != e && t.length > 0 && e.length > 0 && (this.n = Oa(t, 16), this.e = parseInt(e, 16), this.d = Oa(n, 16), this.p = Oa(r, 16), this.q = Oa(i, 16), this.dmp1 = Oa(o, 16), this.dmq1 = Oa(s, 16), this.coeff = Oa(a, 16))
    }, t.prototype.generate = function (t, e) {
      var n = new Ma,
        r = t >> 1;
      this.e = parseInt(e, 16);
      for (var i = new xa(e, 16);;) {
        for (; this.p = new xa(t - r, 1, n), 0 != this.p.subtract(xa.ONE).gcd(i).compareTo(xa.ONE) || !this.p.isProbablePrime(10););
        for (; this.q = new xa(r, 1, n), 0 != this.q.subtract(xa.ONE).gcd(i).compareTo(xa.ONE) || !this.q.isProbablePrime(10););
        if (this.p.compareTo(this.q) <= 0) {
          var o = this.p;
          this.p = this.q, this.q = o
        }
        var s = this.p.subtract(xa.ONE),
          a = this.q.subtract(xa.ONE),
          u = s.multiply(a);
        if (0 == u.gcd(i).compareTo(xa.ONE)) {
          this.n = this.p.multiply(this.q), this.d = i.modInverse(u), this.dmp1 = this.d.mod(s), this.dmq1 = this.d.mod(a), this.coeff = this.q.modInverse(this.p);
          break
        }
      }
    }, t.prototype.decrypt = function (t) {
      var e = Oa(t, 16),
        n = this.doPrivate(e);
      return null == n ? null : function (t, e) {
        for (var n = t.toByteArray(), r = 0; r < n.length && 0 == n[r];) ++r;
        if (n.length - r != e - 1 || 2 != n[r]) return null;
        for (++r; 0 != n[r];)
          if (++r >= n.length) return null;
        for (var i = ""; ++r < n.length;) {
          var o = 255 & n[r];
          o < 128 ? i += String.fromCharCode(o) : o > 191 && o < 224 ? (i += String.fromCharCode((31 & o) << 6 | 63 & n[r + 1]), ++r) : (i += String.fromCharCode((15 & o) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2]), r += 2)
        }
        return i
      }(n, this.n.bitLength() + 7 >> 3)
    }, t.prototype.generateAsync = function (t, e, n) {
      var r = new Ma,
        i = t >> 1;
      this.e = parseInt(e, 16);
      var o = new xa(e, 16),
        s = this;
      setTimeout((function e() {
        var a = function () {
            if (s.p.compareTo(s.q) <= 0) {
              var t = s.p;
              s.p = s.q, s.q = t
            }
            var r = s.p.subtract(xa.ONE),
              i = s.q.subtract(xa.ONE),
              a = r.multiply(i);
            0 == a.gcd(o).compareTo(xa.ONE) ? (s.n = s.p.multiply(s.q), s.d = o.modInverse(a), s.dmp1 = s.d.mod(r), s.dmq1 = s.d.mod(i), s.coeff = s.q.modInverse(s.p), setTimeout((function () {
              n()
            }), 0)) : setTimeout(e, 0)
          },
          u = function t() {
            s.q = Ea(), s.q.fromNumberAsync(i, 1, r, (function () {
              s.q.subtract(xa.ONE).gcda(o, (function (e) {
                0 == e.compareTo(xa.ONE) && s.q.isProbablePrime(10) ? setTimeout(a, 0) : setTimeout(t, 0)
              }))
            }))
          };
        setTimeout((function e() {
          s.p = Ea(), s.p.fromNumberAsync(t - i, 1, r, (function () {
            s.p.subtract(xa.ONE).gcda(o, (function (t) {
              0 == t.compareTo(xa.ONE) && s.p.isProbablePrime(10) ? setTimeout(u, 0) : setTimeout(e, 0)
            }))
          }))
        }), 0)
      }), 0)
    }, t.prototype.sign = function (t, e, n) {
      var r = function (t, e) {
        if (e < t.length + 22) return null;
        for (var n = e - t.length - 6, r = "", i = 0; i < n; i += 2) r += "ff";
        return Oa("0001" + r + "00" + t, 16)
      }(function (t) {
        return Ha[t] || ""
      }(n) + e(t).toString(), this.n.bitLength() / 4);
      if (null == r) return null;
      var i = this.doPrivate(r);
      if (null == i) return null;
      var o = i.toString(16);
      return 0 == (1 & o.length) ? o : "0" + o
    }, t.prototype.verify = function (t, e, n) {
      var r = Oa(e, 16),
        i = this.doPublic(r);
      return null == i ? null : function (t) {
        for (var e in Ha)
          if (Ha.hasOwnProperty(e)) {
            var n = Ha[e],
              r = n.length;
            if (t.substr(0, r) == n) return t.substr(r)
          } return t
      }(i.toString(16).replace(/^1f+00/, "")) == n(t).toString()
    }, t.prototype.encryptLong = function (t) {
      var e = this,
        n = "",
        r = (this.n.bitLength() + 7 >> 3) - 11;
      return this.setSplitChn(t, r).forEach((function (t) {
        n += e.encrypt(t)
      })), n
    }, t.prototype.decryptLong = function (t) {
      var e = "",
        n = this.n.bitLength() + 7 >> 3,
        r = 2 * n;
      if (t.length > r) {
        for (var i = t.match(new RegExp(".{1," + r + "}", "g")) || [], o = [], s = 0; s < i.length; s++) {
          var a = Oa(i[s], 16),
            u = this.doPrivate(a);
          if (null == u) return null;
          o.push(u)
        }
        e = function (t, e) {
          for (var n = [], r = 0; r < t.length; r++) {
            for (var i = t[r].toByteArray(), o = 0; o < i.length && 0 == i[o];) ++o;
            if (i.length - o != e - 1 || 2 != i[o]) return null;
            for (++o; 0 != i[o];)
              if (++o >= i.length) return null;
            n = n.concat(i.slice(o + 1))
          }
          for (var s = n, a = -1, u = ""; ++a < s.length;) {
            var c = 255 & s[a];
            c < 128 ? u += String.fromCharCode(c) : c > 191 && c < 224 ? (u += String.fromCharCode((31 & c) << 6 | 63 & s[a + 1]), ++a) : (u += String.fromCharCode((15 & c) << 12 | (63 & s[a + 1]) << 6 | 63 & s[a + 2]), a += 2)
          }
          return u
        }(o, n)
      } else e = this.decrypt(t);
      return e
    }, t.prototype.setSplitChn = function (t, e, n) {
      void 0 === n && (n = []);
      for (var r = t.split(""), i = 0, o = 0; o < r.length; o++) {
        var s = r[o].charCodeAt(0);
        if ((i += s <= 127 ? 1 : s <= 2047 ? 2 : s <= 65535 ? 3 : 4) > e) {
          var a = t.substring(0, o);
          return n.push(a), this.setSplitChn(t.substring(o), e, n)
        }
      }
      return n.push(t), n
    }, t
  }(),
  Ha = {
    md2: "3020300c06082a864886f70d020205000410",
    md5: "3020300c06082a864886f70d020505000410",
    sha1: "3021300906052b0e03021a05000414",
    sha224: "302d300d06096086480165030402040500041c",
    sha256: "3031300d060960864801650304020105000420",
    sha384: "3041300d060960864801650304020205000430",
    sha512: "3051300d060960864801650304020305000440",
    ripemd160: "3021300906052b2403020105000414"
  },
  qa = {};
qa.lang = {
  extend: function (t, e, n) {
    if (!e || !t) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
    var r = function () {};
    if (r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t, t.superclass = e.prototype, e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e), n) {
      var i;
      for (i in n) t.prototype[i] = n[i];
      var o = function () {},
        s = ["toString", "valueOf"];
      try {
        /MSIE/.test(navigator.userAgent) && (o = function (t, e) {
          for (i = 0; i < s.length; i += 1) {
            var n = s[i],
              r = e[n];
            "function" == typeof r && r != Object.prototype[n] && (t[n] = r)
          }
        })
      } catch (t) {}
      o(t.prototype, n)
    }
  }
};
var Ua = {};
void 0 !== Ua.asn1 && Ua.asn1 || (Ua.asn1 = {}), Ua.asn1.ASN1Util = new function () {
  this.integerToByteHex = function (t) {
    var e = t.toString(16);
    return e.length % 2 == 1 && (e = "0" + e), e
  }, this.bigIntToMinTwosComplementsHex = function (t) {
    var e = t.toString(16);
    if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
    else {
      var n = e.substr(1).length;
      n % 2 == 1 ? n += 1 : e.match(/^[0-7]/) || (n += 2);
      for (var r = "", i = 0; i < n; i++) r += "f";
      e = new xa(r, 16).xor(t).add(xa.ONE).toString(16).replace(/^-/, "")
    }
    return e
  }, this.getPEMStringFromHex = function (t, e) {
    return hextopem(t, e)
  }, this.newObject = function (t) {
    var e = Ua.asn1,
      n = e.DERBoolean,
      r = e.DERInteger,
      i = e.DERBitString,
      o = e.DEROctetString,
      s = e.DERNull,
      a = e.DERObjectIdentifier,
      u = e.DEREnumerated,
      c = e.DERUTF8String,
      h = e.DERNumericString,
      l = e.DERPrintableString,
      f = e.DERTeletexString,
      p = e.DERIA5String,
      d = e.DERUTCTime,
      v = e.DERGeneralizedTime,
      g = e.DERSequence,
      m = e.DERSet,
      y = e.DERTaggedObject,
      b = e.ASN1Util.newObject,
      x = Object.keys(t);
    if (1 != x.length) throw "key of param shall be only one.";
    var w = x[0];
    if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + w + ":")) throw "undefined key: " + w;
    if ("bool" == w) return new n(t[w]);
    if ("int" == w) return new r(t[w]);
    if ("bitstr" == w) return new i(t[w]);
    if ("octstr" == w) return new o(t[w]);
    if ("null" == w) return new s(t[w]);
    if ("oid" == w) return new a(t[w]);
    if ("enum" == w) return new u(t[w]);
    if ("utf8str" == w) return new c(t[w]);
    if ("numstr" == w) return new h(t[w]);
    if ("prnstr" == w) return new l(t[w]);
    if ("telstr" == w) return new f(t[w]);
    if ("ia5str" == w) return new p(t[w]);
    if ("utctime" == w) return new d(t[w]);
    if ("gentime" == w) return new v(t[w]);
    if ("seq" == w) {
      for (var S = t[w], _ = [], T = 0; T < S.length; T++) {
        var E = b(S[T]);
        _.push(E)
      }
      return new g({
        array: _
      })
    }
    if ("set" == w) {
      for (S = t[w], _ = [], T = 0; T < S.length; T++) E = b(S[T]), _.push(E);
      return new m({
        array: _
      })
    }
    if ("tag" == w) {
      var O = t[w];
      if ("[object Array]" === Object.prototype.toString.call(O) && 3 == O.length) {
        var k = b(O[2]);
        return new y({
          tag: O[0],
          explicit: O[1],
          obj: k
        })
      }
      var A = {};
      if (void 0 !== O.explicit && (A.explicit = O.explicit), void 0 !== O.tag && (A.tag = O.tag), void 0 === O.obj) throw "obj shall be specified for 'tag'.";
      return A.obj = b(O.obj), new y(A)
    }
  }, this.jsonToASN1HEX = function (t) {
    return this.newObject(t).getEncodedHex()
  }
}, Ua.asn1.ASN1Util.oidHexToInt = function (t) {
  for (var e = "", n = parseInt(t.substr(0, 2), 16), r = (e = Math.floor(n / 40) + "." + n % 40, ""), i = 2; i < t.length; i += 2) {
    var o = ("00000000" + parseInt(t.substr(i, 2), 16).toString(2)).slice(-8);
    r += o.substr(1, 7), "0" == o.substr(0, 1) && (e = e + "." + new xa(r, 2).toString(10), r = "")
  }
  return e
}, Ua.asn1.ASN1Util.oidIntToHex = function (t) {
  var e = function (t) {
      var e = t.toString(16);
      return 1 == e.length && (e = "0" + e), e
    },
    n = function (t) {
      var n = "",
        r = new xa(t, 10).toString(2),
        i = 7 - r.length % 7;
      7 == i && (i = 0);
      for (var o = "", s = 0; s < i; s++) o += "0";
      for (r = o + r, s = 0; s < r.length - 1; s += 7) {
        var a = r.substr(s, 7);
        s != r.length - 7 && (a = "1" + a), n += e(parseInt(a, 2))
      }
      return n
    };
  if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
  var r = "",
    i = t.split("."),
    o = 40 * parseInt(i[0]) + parseInt(i[1]);
  r += e(o), i.splice(0, 2);
  for (var s = 0; s < i.length; s++) r += n(i[s]);
  return r
}, Ua.asn1.ASN1Object = function () {
  this.getLengthHexFromValue = function () {
    if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
    if (this.hV.length % 2 == 1) throw "value hex must be even length: n=0,v=" + this.hV;
    var t = this.hV.length / 2,
      e = t.toString(16);
    if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
    var n = e.length / 2;
    if (n > 15) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
    return (128 + n).toString(16) + e
  }, this.getEncodedHex = function () {
    return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
  }, this.getValueHex = function () {
    return this.getEncodedHex(), this.hV
  }, this.getFreshValueHex = function () {
    return ""
  }
}, Ua.asn1.DERAbstractString = function (t) {
  Ua.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function () {
    return this.s
  }, this.setString = function (t) {
    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s)
  }, this.setStringHex = function (t) {
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
  }, this.getFreshValueHex = function () {
    return this.hV
  }, void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex))
}, qa.lang.extend(Ua.asn1.DERAbstractString, Ua.asn1.ASN1Object), Ua.asn1.DERAbstractTime = function (t) {
  Ua.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function (t) {
    return utc = t.getTime() + 6e4 * t.getTimezoneOffset(), new Date(utc)
  }, this.formatDate = function (t, e, n) {
    var r = this.zeroPadding,
      i = this.localDateToUTC(t),
      o = String(i.getFullYear());
    "utc" == e && (o = o.substr(2, 2));
    var s = o + r(String(i.getMonth() + 1), 2) + r(String(i.getDate()), 2) + r(String(i.getHours()), 2) + r(String(i.getMinutes()), 2) + r(String(i.getSeconds()), 2);
    if (!0 === n) {
      var a = i.getMilliseconds();
      if (0 != a) {
        var u = r(String(a), 3);
        s = s + "." + (u = u.replace(/[0]+$/, ""))
      }
    }
    return s + "Z"
  }, this.zeroPadding = function (t, e) {
    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
  }, this.getString = function () {
    return this.s
  }, this.setString = function (t) {
    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(t)
  }, this.setByDateValue = function (t, e, n, r, i, o) {
    var s = new Date(Date.UTC(t, e - 1, n, r, i, o, 0));
    this.setByDate(s)
  }, this.getFreshValueHex = function () {
    return this.hV
  }
}, qa.lang.extend(Ua.asn1.DERAbstractTime, Ua.asn1.ASN1Object), Ua.asn1.DERAbstractStructured = function (t) {
  Ua.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function (t) {
    this.hTLV = null, this.isModified = !0, this.asn1Array = t
  }, this.appendASN1Object = function (t) {
    this.hTLV = null, this.isModified = !0, this.asn1Array.push(t)
  }, this.asn1Array = new Array, void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array)
}, qa.lang.extend(Ua.asn1.DERAbstractStructured, Ua.asn1.ASN1Object), Ua.asn1.DERBoolean = function () {
  Ua.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff"
}, qa.lang.extend(Ua.asn1.DERBoolean, Ua.asn1.ASN1Object), Ua.asn1.DERInteger = function (t) {
  Ua.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function (t) {
    this.hTLV = null, this.isModified = !0, this.hV = Ua.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
  }, this.setByInteger = function (t) {
    var e = new xa(String(t), 10);
    this.setByBigInteger(e)
  }, this.setValueHex = function (t) {
    this.hV = t
  }, this.getFreshValueHex = function () {
    return this.hV
  }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
}, qa.lang.extend(Ua.asn1.DERInteger, Ua.asn1.ASN1Object), Ua.asn1.DERBitString = function (t) {
  if (void 0 !== t && void 0 !== t.obj) {
    var e = Ua.asn1.ASN1Util.newObject(t.obj);
    t.hex = "00" + e.getEncodedHex()
  }
  Ua.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function (t) {
    this.hTLV = null, this.isModified = !0, this.hV = t
  }, this.setUnusedBitsAndHexValue = function (t, e) {
    if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
    var n = "0" + t;
    this.hTLV = null, this.isModified = !0, this.hV = n + e
  }, this.setByBinaryString = function (t) {
    var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
    8 == e && (e = 0);
    for (var n = 0; n <= e; n++) t += "0";
    var r = "";
    for (n = 0; n < t.length - 1; n += 8) {
      var i = t.substr(n, 8),
        o = parseInt(i, 2).toString(16);
      1 == o.length && (o = "0" + o), r += o
    }
    this.hTLV = null, this.isModified = !0, this.hV = "0" + e + r
  }, this.setByBooleanArray = function (t) {
    for (var e = "", n = 0; n < t.length; n++) 1 == t[n] ? e += "1" : e += "0";
    this.setByBinaryString(e)
  }, this.newFalseArray = function (t) {
    for (var e = new Array(t), n = 0; n < t; n++) e[n] = !1;
    return e
  }, this.getFreshValueHex = function () {
    return this.hV
  }, void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array))
}, qa.lang.extend(Ua.asn1.DERBitString, Ua.asn1.ASN1Object), Ua.asn1.DEROctetString = function (t) {
  if (void 0 !== t && void 0 !== t.obj) {
    var e = Ua.asn1.ASN1Util.newObject(t.obj);
    t.hex = e.getEncodedHex()
  }
  Ua.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04"
}, qa.lang.extend(Ua.asn1.DEROctetString, Ua.asn1.DERAbstractString), Ua.asn1.DERNull = function () {
  Ua.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500"
}, qa.lang.extend(Ua.asn1.DERNull, Ua.asn1.ASN1Object), Ua.asn1.DERObjectIdentifier = function (t) {
  var e = function (t) {
      var e = t.toString(16);
      return 1 == e.length && (e = "0" + e), e
    },
    n = function (t) {
      var n = "",
        r = new xa(t, 10).toString(2),
        i = 7 - r.length % 7;
      7 == i && (i = 0);
      for (var o = "", s = 0; s < i; s++) o += "0";
      for (r = o + r, s = 0; s < r.length - 1; s += 7) {
        var a = r.substr(s, 7);
        s != r.length - 7 && (a = "1" + a), n += e(parseInt(a, 2))
      }
      return n
    };
  Ua.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function (t) {
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
  }, this.setValueOidString = function (t) {
    if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
    var r = "",
      i = t.split("."),
      o = 40 * parseInt(i[0]) + parseInt(i[1]);
    r += e(o), i.splice(0, 2);
    for (var s = 0; s < i.length; s++) r += n(i[s]);
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = r
  }, this.setValueName = function (t) {
    var e = Ua.asn1.x509.OID.name2oid(t);
    if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
    this.setValueOidString(e)
  }, this.getFreshValueHex = function () {
    return this.hV
  }, void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
}, qa.lang.extend(Ua.asn1.DERObjectIdentifier, Ua.asn1.ASN1Object), Ua.asn1.DEREnumerated = function (t) {
  Ua.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function (t) {
    this.hTLV = null, this.isModified = !0, this.hV = Ua.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
  }, this.setByInteger = function (t) {
    var e = new xa(String(t), 10);
    this.setByBigInteger(e)
  }, this.setValueHex = function (t) {
    this.hV = t
  }, this.getFreshValueHex = function () {
    return this.hV
  }, void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
}, qa.lang.extend(Ua.asn1.DEREnumerated, Ua.asn1.ASN1Object), Ua.asn1.DERUTF8String = function (t) {
  Ua.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c"
}, qa.lang.extend(Ua.asn1.DERUTF8String, Ua.asn1.DERAbstractString), Ua.asn1.DERNumericString = function (t) {
  Ua.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12"
}, qa.lang.extend(Ua.asn1.DERNumericString, Ua.asn1.DERAbstractString), Ua.asn1.DERPrintableString = function (t) {
  Ua.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13"
}, qa.lang.extend(Ua.asn1.DERPrintableString, Ua.asn1.DERAbstractString), Ua.asn1.DERTeletexString = function (t) {
  Ua.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14"
}, qa.lang.extend(Ua.asn1.DERTeletexString, Ua.asn1.DERAbstractString), Ua.asn1.DERIA5String = function (t) {
  Ua.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16"
}, qa.lang.extend(Ua.asn1.DERIA5String, Ua.asn1.DERAbstractString), Ua.asn1.DERUTCTime = function (t) {
  Ua.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function (t) {
    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)
  }, this.getFreshValueHex = function () {
    return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV
  }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
}, qa.lang.extend(Ua.asn1.DERUTCTime, Ua.asn1.DERAbstractTime), Ua.asn1.DERGeneralizedTime = function (t) {
  Ua.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", this.withMillis = !1, this.setByDate = function (t) {
    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)
  }, this.getFreshValueHex = function () {
    return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV
  }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), !0 === t.millis && (this.withMillis = !0))
}, qa.lang.extend(Ua.asn1.DERGeneralizedTime, Ua.asn1.DERAbstractTime), Ua.asn1.DERSequence = function (t) {
  Ua.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function () {
    for (var t = "", e = 0; e < this.asn1Array.length; e++) t += this.asn1Array[e].getEncodedHex();
    return this.hV = t, this.hV
  }
}, qa.lang.extend(Ua.asn1.DERSequence, Ua.asn1.DERAbstractStructured), Ua.asn1.DERSet = function (t) {
  Ua.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function () {
    for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
      var n = this.asn1Array[e];
      t.push(n.getEncodedHex())
    }
    return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV
  }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
}, qa.lang.extend(Ua.asn1.DERSet, Ua.asn1.DERAbstractStructured), Ua.asn1.DERTaggedObject = function (t) {
  Ua.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function (t, e, n) {
    this.hT = e, this.isExplicit = t, this.asn1Object = n, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = n.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
  }, this.getFreshValueHex = function () {
    return this.hV
  }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
}, qa.lang.extend(Ua.asn1.DERTaggedObject, Ua.asn1.ASN1Object);
var Fa, Ka = globalThis && globalThis.__extends || (Fa = function (t, e) {
    return (Fa = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function (t, e) {
        t.__proto__ = e
      } || function (t, e) {
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
      })(t, e)
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function n() {
      this.constructor = t
    }
    Fa(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  }),
  za = function (t) {
    function e(n) {
      var r = t.call(this) || this;
      return n && ("string" == typeof n ? r.parseKey(n) : (e.hasPrivateKeyProperty(n) || e.hasPublicKeyProperty(n)) && r.parsePropertiesFrom(n)), r
    }
    return Ka(e, t), e.prototype.parseKey = function (t) {
      try {
        var e = 0,
          n = 0,
          r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? function (t) {
            var e;
            if (void 0 === ra) {
              var n = "0123456789ABCDEF";
              for (ra = {}, e = 0; e < 16; ++e) ra[n.charAt(e)] = e;
              for (n = n.toLowerCase(), e = 10; e < 16; ++e) ra[n.charAt(e)] = e;
              for (e = 0; e < 8; ++e) ra[" \f\n\r\t \u2028\u2029".charAt(e)] = -1
            }
            var r = [],
              i = 0,
              o = 0;
            for (e = 0; e < t.length; ++e) {
              var s = t.charAt(e);
              if ("=" == s) break;
              if (-1 != (s = ra[s])) {
                if (void 0 === s) throw new Error("Illegal character at offset " + e);
                i |= s, ++o >= 2 ? (r[r.length] = i, i = 0, o = 0) : i <<= 4
              }
            }
            if (o) throw new Error("Hex encoding incomplete: 4 bits missing");
            return r
          }(t) : ua.unarmor(t),
          i = ga.decode(r);
        if (3 === i.sub.length && (i = i.sub[2].sub[0]), 9 === i.sub.length) {
          e = i.sub[1].getHexStringValue(), this.n = Oa(e, 16), n = i.sub[2].getHexStringValue(), this.e = parseInt(n, 16);
          var o = i.sub[3].getHexStringValue();
          this.d = Oa(o, 16);
          var s = i.sub[4].getHexStringValue();
          this.p = Oa(s, 16);
          var a = i.sub[5].getHexStringValue();
          this.q = Oa(a, 16);
          var u = i.sub[6].getHexStringValue();
          this.dmp1 = Oa(u, 16);
          var c = i.sub[7].getHexStringValue();
          this.dmq1 = Oa(c, 16);
          var h = i.sub[8].getHexStringValue();
          this.coeff = Oa(h, 16)
        } else {
          if (2 !== i.sub.length) return !1;
          var l = i.sub[1].sub[0];
          e = l.sub[0].getHexStringValue(), this.n = Oa(e, 16), n = l.sub[1].getHexStringValue(), this.e = parseInt(n, 16)
        }
        return !0
      } catch (t) {
        return !1
      }
    }, e.prototype.getPrivateBaseKey = function () {
      var t = {
        array: [new Ua.asn1.DERInteger({
          int: 0
        }), new Ua.asn1.DERInteger({
          bigint: this.n
        }), new Ua.asn1.DERInteger({
          int: this.e
        }), new Ua.asn1.DERInteger({
          bigint: this.d
        }), new Ua.asn1.DERInteger({
          bigint: this.p
        }), new Ua.asn1.DERInteger({
          bigint: this.q
        }), new Ua.asn1.DERInteger({
          bigint: this.dmp1
        }), new Ua.asn1.DERInteger({
          bigint: this.dmq1
        }), new Ua.asn1.DERInteger({
          bigint: this.coeff
        })]
      };
      return new Ua.asn1.DERSequence(t).getEncodedHex()
    }, e.prototype.getPrivateBaseKeyB64 = function () {
      return oa(this.getPrivateBaseKey())
    }, e.prototype.getPublicBaseKey = function () {
      var t = new Ua.asn1.DERSequence({
          array: [new Ua.asn1.DERObjectIdentifier({
            oid: "1.2.840.113549.1.1.1"
          }), new Ua.asn1.DERNull]
        }),
        e = new Ua.asn1.DERSequence({
          array: [new Ua.asn1.DERInteger({
            bigint: this.n
          }), new Ua.asn1.DERInteger({
            int: this.e
          })]
        }),
        n = new Ua.asn1.DERBitString({
          hex: "00" + e.getEncodedHex()
        });
      return new Ua.asn1.DERSequence({
        array: [t, n]
      }).getEncodedHex()
    }, e.prototype.getPublicBaseKeyB64 = function () {
      return oa(this.getPublicBaseKey())
    }, e.wordwrap = function (t, e) {
      if (!t) return t;
      var n = "(.{1," + (e = e || 64) + "})( +|$\n?)|(.{1," + e + "})";
      return t.match(RegExp(n, "g")).join("\n")
    }, e.prototype.getPrivateKey = function () {
      var t = "-----BEGIN RSA PRIVATE KEY-----\n";
      return (t += e.wordwrap(this.getPrivateBaseKeyB64()) + "\n") + "-----END RSA PRIVATE KEY-----"
    }, e.prototype.getPublicKey = function () {
      var t = "-----BEGIN PUBLIC KEY-----\n";
      return (t += e.wordwrap(this.getPublicBaseKeyB64()) + "\n") + "-----END PUBLIC KEY-----"
    }, e.hasPublicKeyProperty = function (t) {
      return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e")
    }, e.hasPrivateKeyProperty = function (t) {
      return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
    }, e.prototype.parsePropertiesFrom = function (t) {
      this.n = t.n, this.e = t.e, t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff)
    }, e
  }(La),
  Ga = function () {
    function t(t) {
      void 0 === t && (t = {}), t = t || {}, this.default_key_size = t.default_key_size ? parseInt(t.default_key_size, 10) : 1024, this.default_public_exponent = t.default_public_exponent || "010001", this.log = t.log || !1, this.key = null
    }
    return t.prototype.setKey = function (t) {
      this.log && this.key, this.key = new za(t)
    }, t.prototype.setPrivateKey = function (t) {
      this.setKey(t)
    }, t.prototype.setPublicKey = function (t) {
      this.setKey(t)
    }, t.prototype.decrypt = function (t) {
      try {
        return this.getKey().decrypt(sa(t))
      } catch (t) {
        return !1
      }
    }, t.prototype.encrypt = function (t) {
      try {
        return oa(this.getKey().encrypt(t))
      } catch (t) {
        return !1
      }
    }, t.prototype.encryptLong = function (t) {
      try {

        var abc= this.getKey().encryptLong(t);
        console.log("加密结果：",abc);
        var result = oa(abc);
        console.log("转码结果：",result);
        
        return result;
        //return oa(this.getKey().encryptLong(t))
      } catch (t) {
        return !1
      }
    }, t.prototype.decryptLong = function (t) {
      try {
        return this.getKey().decryptLong(sa(t))
      } catch (t) {
        return !1
      }
    }, t.prototype.sign = function (t, e, n) {
      try {
        return oa(this.getKey().sign(t, e, n))
      } catch (t) {
        return !1
      }
    }, t.prototype.verify = function (t, e, n) {
      try {
        return this.getKey().verify(t, sa(e), n)
      } catch (t) {
        return !1
      }
    }, t.prototype.getKey = function (t) {
      if (!this.key) {
        if (this.key = new za, t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
        this.key.generate(this.default_key_size, this.default_public_exponent)
      }
      return this.key
    }, t.prototype.getPrivateKey = function () {
      return this.getKey().getPrivateKey()
    }, t.prototype.getPrivateKeyB64 = function () {
      return this.getKey().getPrivateBaseKeyB64()
    }, t.prototype.getPublicKey = function () {
      return this.getKey().getPublicKey()
    }, t.prototype.getPublicKeyB64 = function () {
      return this.getKey().getPublicBaseKeyB64()
    }, t.version = "3.2.1", t
  }();

function Wa(t, e) {
  Object.keys(t).forEach((function (n) {
    return e(t[n], n)
  }))
}

function Za(t) {
  return null !== t && "object" == r(t)
}

function Ja(t, e, n) {
  return e.indexOf(t) < 0 && (n && n.prepend ? e.unshift(t) : e.push(t)),
    function () {
      var n = e.indexOf(t);
      n > -1 && e.splice(n, 1)
    }
}

function Ya(t, e) {
  t._actions = Object.create(null), t._mutations = Object.create(null), t._wrappedGetters = Object.create(null), t._modulesNamespaceMap = Object.create(null);
  var n = t.state;
  Xa(t, n, [], t._modules.root, !0), Qa(t, n, e)
}

function Qa(t, e, n) {
  var r = t._state,
    i = t._scope;
  t.getters = {}, t._makeLocalGettersCache = Object.create(null);
  var o = t._wrappedGetters,
    s = {},
    a = {},
    u = new _n(!0);
  u.run((function () {
    Wa(o, (function (e, n) {
      s[n] = function (t, e) {
        return function () {
          return t(e)
        }
      }(e, t), a[n] = Oo((function () {
        return s[n]()
      })), Object.defineProperty(t.getters, n, {
        get: function () {
          return a[n].value
        },
        enumerable: !0
      })
    }))
  })), t._state = kr({
    data: e
  }), t._scope = u, t.strict && function (t) {
    bi((function () {
      return t._state.data
    }), (function () {}), {
      deep: !0,
      flush: "sync"
    })
  }(t), r && n && t._withCommit((function () {
    r.data = null
  })), i && i.stop()
}

function Xa(t, e, n, r, i) {
  var o = !n.length,
    s = t._modules.getNamespace(n);
  if (r.namespaced && (t._modulesNamespaceMap[s], t._modulesNamespaceMap[s] = r), !o && !i) {
    var a = tu(e, n.slice(0, -1)),
      u = n[n.length - 1];
    t._withCommit((function () {
      a[u] = r.state
    }))
  }
  var c = r.context = function (t, e, n) {
    var r = "" === e,
      i = {
        dispatch: r ? t.dispatch : function (n, r, i) {
          var o = eu(n, r, i),
            s = o.payload,
            a = o.options,
            u = o.type;
          return a && a.root || (u = e + u), t.dispatch(u, s)
        },
        commit: r ? t.commit : function (n, r, i) {
          var o = eu(n, r, i),
            s = o.payload,
            a = o.options,
            u = o.type;
          a && a.root || (u = e + u), t.commit(u, s, a)
        }
      };
    return Object.defineProperties(i, {
      getters: {
        get: r ? function () {
          return t.getters
        } : function () {
          return function (t, e) {
            if (!t._makeLocalGettersCache[e]) {
              var n = {},
                r = e.length;
              Object.keys(t.getters).forEach((function (i) {
                if (i.slice(0, r) === e) {
                  var o = i.slice(r);
                  Object.defineProperty(n, o, {
                    get: function () {
                      return t.getters[i]
                    },
                    enumerable: !0
                  })
                }
              })), t._makeLocalGettersCache[e] = n
            }
            return t._makeLocalGettersCache[e]
          }(t, e)
        }
      },
      state: {
        get: function () {
          return tu(t.state, n)
        }
      }
    }), i
  }(t, s, n);
  r.forEachMutation((function (e, n) {
    ! function (t, e, n, r) {
      (t._mutations[e] || (t._mutations[e] = [])).push((function (e) {
        n.call(t, r.state, e)
      }))
    }(t, s + n, e, c)
  })), r.forEachAction((function (e, n) {
    var r = e.root ? n : s + n,
      i = e.handler || e;
    ! function (t, e, n, r) {
      (t._actions[e] || (t._actions[e] = [])).push((function (e) {
        var i, o = n.call(t, {
          dispatch: r.dispatch,
          commit: r.commit,
          getters: r.getters,
          state: r.state,
          rootGetters: t.getters,
          rootState: t.state
        }, e);
        return (i = o) && "function" == typeof i.then || (o = Promise.resolve(o)), t._devtoolHook ? o.catch((function (e) {
          throw t._devtoolHook.emit("vuex:error", e), e
        })) : o
      }))
    }(t, r, i, c)
  })), r.forEachGetter((function (e, n) {
    ! function (t, e, n, r) {
      t._wrappedGetters[e] || (t._wrappedGetters[e] = function (t) {
        return n(r.state, r.getters, t.state, t.getters)
      })
    }(t, s + n, e, c)
  })), r.forEachChild((function (r, o) {
    Xa(t, e, n.concat(o), r, i)
  }))
}

function tu(t, e) {
  return e.reduce((function (t, e) {
    return t[e]
  }), t)
}

function eu(t, e, n) {
  return Za(t) && t.type && (n = e, e = t, t = t.type), {
    type: t,
    payload: e,
    options: n
  }
}
var nu = function (t, e) {
    this.runtime = e, this._children = Object.create(null), this._rawModule = t;
    var n = t.state;
    this.state = ("function" == typeof n ? n() : n) || {}
  },
  ru = {
    namespaced: {
      configurable: !0
    }
  };
ru.namespaced.get = function () {
  return !!this._rawModule.namespaced
}, nu.prototype.addChild = function (t, e) {
  this._children[t] = e
}, nu.prototype.removeChild = function (t) {
  delete this._children[t]
}, nu.prototype.getChild = function (t) {
  return this._children[t]
}, nu.prototype.hasChild = function (t) {
  return t in this._children
}, nu.prototype.update = function (t) {
  this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters)
}, nu.prototype.forEachChild = function (t) {
  Wa(this._children, t)
}, nu.prototype.forEachGetter = function (t) {
  this._rawModule.getters && Wa(this._rawModule.getters, t)
}, nu.prototype.forEachAction = function (t) {
  this._rawModule.actions && Wa(this._rawModule.actions, t)
}, nu.prototype.forEachMutation = function (t) {
  this._rawModule.mutations && Wa(this._rawModule.mutations, t)
}, Object.defineProperties(nu.prototype, ru);
var iu = function (t) {
  this.register([], t, !1)
};
iu.prototype.get = function (t) {
  return t.reduce((function (t, e) {
    return t.getChild(e)
  }), this.root)
}, iu.prototype.getNamespace = function (t) {
  var e = this.root;
  return t.reduce((function (t, n) {
    return t + ((e = e.getChild(n)).namespaced ? n + "/" : "")
  }), "")
}, iu.prototype.update = function (t) {
  ! function t(e, n, r) {
    if (n.update(r), r.modules)
      for (var i in r.modules) {
        if (!n.getChild(i)) return;
        t(e.concat(i), n.getChild(i), r.modules[i])
      }
  }([], this.root, t)
}, iu.prototype.register = function (t, e, n) {
  var r = this;
  void 0 === n && (n = !0);
  var i = new nu(e, n);
  0 === t.length ? this.root = i : this.get(t.slice(0, -1)).addChild(t[t.length - 1], i), e.modules && Wa(e.modules, (function (e, i) {
    r.register(t.concat(i), e, n)
  }))
}, iu.prototype.unregister = function (t) {
  var e = this.get(t.slice(0, -1)),
    n = t[t.length - 1],
    r = e.getChild(n);
  r && r.runtime && e.removeChild(n)
}, iu.prototype.isRegistered = function (t) {
  var e = this.get(t.slice(0, -1)),
    n = t[t.length - 1];
  return !!e && e.hasChild(n)
};
var ou = function (t) {
    var e = this;
    void 0 === t && (t = {});
    var n = t.plugins;
    void 0 === n && (n = []);
    var r = t.strict;
    void 0 === r && (r = !1);
    var i = t.devtools;
    this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new iu(t), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._makeLocalGettersCache = Object.create(null), this._scope = null, this._devtools = i;
    var o = this,
      s = this.dispatch,
      a = this.commit;
    this.dispatch = function (t, e) {
      return s.call(o, t, e)
    }, this.commit = function (t, e, n) {
      return a.call(o, t, e, n)
    }, this.strict = r;
    var u = this._modules.root.state;
    Xa(this, u, [], this._modules.root), Qa(this, u), n.forEach((function (t) {
      return t(e)
    }))
  },
  su = {
    state: {
      configurable: !0
    }
  };
ou.prototype.install = function (t, e) {
  t.provide(e || "store", this), t.config.globalProperties.$store = this, void 0 !== this._devtools && this._devtools
}, su.state.get = function () {
  return this._state.data
}, su.state.set = function (t) {}, ou.prototype.commit = function (t, e, n) {
  var r = this,
    i = eu(t, e, n),
    o = i.type,
    s = i.payload,
    a = {
      type: o,
      payload: s
    },
    u = this._mutations[o];
  u && (this._withCommit((function () {
    u.forEach((function (t) {
      t(s)
    }))
  })), this._subscribers.slice().forEach((function (t) {
    return t(a, r.state)
  })))
}, ou.prototype.dispatch = function (t, e) {
  var n = this,
    r = eu(t, e),
    i = r.type,
    o = r.payload,
    s = {
      type: i,
      payload: o
    },
    a = this._actions[i];
  if (a) {
    try {
      this._actionSubscribers.slice().filter((function (t) {
        return t.before
      })).forEach((function (t) {
        return t.before(s, n.state)
      }))
    } catch (t) {}
    var u = a.length > 1 ? Promise.all(a.map((function (t) {
      return t(o)
    }))) : a[0](o);
    return new Promise((function (t, e) {
      u.then((function (e) {
        try {
          n._actionSubscribers.filter((function (t) {
            return t.after
          })).forEach((function (t) {
            return t.after(s, n.state)
          }))
        } catch (t) {}
        t(e)
      }), (function (t) {
        try {
          n._actionSubscribers.filter((function (t) {
            return t.error
          })).forEach((function (e) {
            return e.error(s, n.state, t)
          }))
        } catch (t) {}
        e(t)
      }))
    }))
  }
}, ou.prototype.subscribe = function (t, e) {
  return Ja(t, this._subscribers, e)
}, ou.prototype.subscribeAction = function (t, e) {
  return Ja("function" == typeof t ? {
    before: t
  } : t, this._actionSubscribers, e)
}, ou.prototype.watch = function (t, e, n) {
  var r = this;
  return bi((function () {
    return t(r.state, r.getters)
  }), e, Object.assign({}, n))
}, ou.prototype.replaceState = function (t) {
  var e = this;
  this._withCommit((function () {
    e._state.data = t
  }))
}, ou.prototype.registerModule = function (t, e, n) {
  void 0 === n && (n = {}), "string" == typeof t && (t = [t]), this._modules.register(t, e), Xa(this, this.state, t, this._modules.get(t), n.preserveState), Qa(this, this.state)
}, ou.prototype.unregisterModule = function (t) {
  var e = this;
  "string" == typeof t && (t = [t]), this._modules.unregister(t), this._withCommit((function () {
    delete tu(e.state, t.slice(0, -1))[t[t.length - 1]]
  })), Ya(this)
}, ou.prototype.hasModule = function (t) {
  return "string" == typeof t && (t = [t]), this._modules.isRegistered(t)
}, ou.prototype.hotUpdate = function (t) {
  this._modules.update(t), Ya(this, !0)
}, ou.prototype._withCommit = function (t) {
  var e = this._committing;
  this._committing = !0, t(), this._committing = e
}, Object.defineProperties(ou.prototype, su);
var au = hu((function (t, e) {
    var n = {};
    return cu(e).forEach((function (e) {
      var r = e.key,
        i = e.val;
      n[r] = function () {
        var e = this.$store.state,
          n = this.$store.getters;
        if (t) {
          var r = lu(this.$store, "mapState", t);
          if (!r) return;
          e = r.context.state, n = r.context.getters
        }
        return "function" == typeof i ? i.call(this, e, n) : e[i]
      }, n[r].vuex = !0
    })), n
  })),
  uu = hu((function (t, e) {
    var n = {};
    return cu(e).forEach((function (e) {
      var r = e.key,
        i = e.val;
      n[r] = function () {
        for (var e = [], n = arguments.length; n--;) e[n] = arguments[n];
        var r = this.$store.dispatch;
        if (t) {
          var o = lu(this.$store, "mapActions", t);
          if (!o) return;
          r = o.context.dispatch
        }
        return "function" == typeof i ? i.apply(this, [r].concat(e)) : r.apply(this.$store, [i].concat(e))
      }
    })), n
  }));

function cu(t) {
  return function (t) {
    return Array.isArray(t) || Za(t)
  }(t) ? Array.isArray(t) ? t.map((function (t) {
    return {
      key: t,
      val: t
    }
  })) : Object.keys(t).map((function (e) {
    return {
      key: e,
      val: t[e]
    }
  })) : []
}

function hu(t) {
  return function (e, n) {
    return "string" != typeof e ? (n = e, e = "") : "/" !== e.charAt(e.length - 1) && (e += "/"), t(e, n)
  }
}

function lu(t, e, n) {
  return t._modulesNamespaceMap[n]
}
var fu = {
    trustTags: bu("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),
    blockTags: bu("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),
    inlineTags: bu("abbr,b,big,code,del,em,i,ins,label,q,small,span,strong,sub,sup"),
    ignoreTags: bu("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),
    voidTags: bu("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),
    entities: {
      lt: "<",
      gt: ">",
      quot: '"',
      apos: "'",
      ensp: " ",
      emsp: " ",
      nbsp: " ",
      semi: ";",
      ndash: "–",
      mdash: "—",
      middot: "·",
      lsquo: "‘",
      rsquo: "’",
      ldquo: "“",
      rdquo: "”",
      bull: "•",
      hellip: "…",
      larr: "←",
      uarr: "↑",
      rarr: "→",
      darr: "↓"
    },
    tagStyle: {
      address: "font-style:italic",
      big: "display:inline;font-size:1.2em",
      caption: "display:table-caption;text-align:center",
      center: "text-align:center",
      cite: "font-style:italic",
      dd: "margin-left:40px",
      mark: "background-color:yellow",
      pre: "font-family:monospace;white-space:pre",
      s: "text-decoration:line-through",
      small: "display:inline;font-size:0.8em",
      strike: "text-decoration:line-through",
      u: "text-decoration:underline"
    },
    svgDict: {
      animatetransform: "animateTransform",
      lineargradient: "linearGradient",
      viewbox: "viewBox",
      attributename: "attributeName",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur"
    }
  },
  pu = {},
  du = Sn.getSystemInfoSync(),
  vu = du.windowWidth,
  gu = du.system,
  mu = bu(" ,\r,\n,\t,\f"),
  yu = 0;

function bu(t) {
  for (var e = Object.create(null), n = t.split(","), r = n.length; r--;) e[n[r]] = !0;
  return e
}

function xu(t, e) {
  for (var n = t.indexOf("&"); - 1 !== n;) {
    var r = t.indexOf(";", n + 3),
      i = void 0;
    if (-1 === r) break;
    "#" === t[n + 1] ? (i = parseInt(("x" === t[n + 2] ? "0" : "") + t.substring(n + 2, r)), isNaN(i) || (t = t.substr(0, n) + String.fromCharCode(i) + t.substr(r + 1))) : (i = t.substring(n + 1, r), (fu.entities[i] || "amp" === i && e) && (t = t.substr(0, n) + (fu.entities[i] || "&") + t.substr(r + 1))), n = t.indexOf("&", n + 1)
  }
  return t
}

function wu(t) {
  for (var e = t.length - 1, n = e; n >= -1; n--)(-1 === n || t[n].c || !t[n].name || "div" !== t[n].name && "p" !== t[n].name && "h" !== t[n].name[0] || (t[n].attrs.style || "").includes("inline")) && (e - n >= 5 && t.splice(n + 1, e - n, {
    name: "div",
    attrs: {},
    children: t.slice(n + 1, e + 1)
  }), e = n - 1)
}

function Su(t) {
  this.options = t || {}, this.tagStyle = Object.assign({}, fu.tagStyle, this.options.tagStyle), this.imgList = t.imgList || [], this.imgList._unloadimgs = 0, this.plugins = t.plugins || [], this.attrs = Object.create(null), this.stack = [], this.nodes = [], this.pre = (this.options.containerStyle || "").includes("white-space") && this.options.containerStyle.includes("pre") ? 2 : 0
}

function _u(t) {
  this.handler = t
}
Su.prototype.parse = function (t) {
  for (var e = this.plugins.length; e--;) this.plugins[e].onUpdate && (t = this.plugins[e].onUpdate(t, fu) || t);
  for (new _u(this).parse(t); this.stack.length;) this.popNode();
  return this.nodes.length > 50 && wu(this.nodes), this.nodes
}, Su.prototype.expose = function () {
  for (var t = this.stack.length; t--;) {
    var e = this.stack[t];
    if (e.c || "a" === e.name || "video" === e.name || "audio" === e.name) return;
    e.c = 1
  }
}, Su.prototype.hook = function (t) {
  for (var e = this.plugins.length; e--;)
    if (this.plugins[e].onParse && !1 === this.plugins[e].onParse(t, this)) return !1;
  return !0
}, Su.prototype.getUrl = function (t) {
  var e = this.options.domain;
  return "/" === t[0] ? "/" === t[1] ? t = (e ? e.split("://")[0] : "http") + ":" + t : e && (t = e + t) : t.includes("data:") || t.includes("://") || e && (t = e + "/" + t), t
}, Su.prototype.parseStyle = function (t) {
  var e = t.attrs,
    n = (this.tagStyle[t.name] || "").split(";").concat((e.style || "").split(";")),
    r = {},
    i = "";
  e.id && !this.xml && (this.options.useAnchor ? this.expose() : "img" !== t.name && "a" !== t.name && "video" !== t.name && "audio" !== t.name && (e.id = void 0)), e.width && (r.width = parseFloat(e.width) + (e.width.includes("%") ? "%" : "px"), e.width = void 0), e.height && (r.height = parseFloat(e.height) + (e.height.includes("%") ? "%" : "px"), e.height = void 0);
  for (var o = 0, s = n.length; o < s; o++) {
    var a = n[o].split(":");
    if (!(a.length < 2)) {
      var u = a.shift().trim().toLowerCase(),
        c = a.join(":").trim();
      if ("-" === c[0] && c.lastIndexOf("-") > 0 || c.includes("safe")) i += ";".concat(u, ":").concat(c);
      else if (!r[u] || c.includes("import") || !r[u].includes("import")) {
        if (c.includes("url")) {
          var h = c.indexOf("(") + 1;
          if (h) {
            for (;
              '"' === c[h] || "'" === c[h] || mu[c[h]];) h++;
            c = c.substr(0, h) + this.getUrl(c.substr(h))
          }
        } else c.includes("rpx") && (c = c.replace(/[0-9.]+\s*rpx/g, (function (t) {
          return parseFloat(t) * vu / 750 + "px"
        })));
        r[u] = c
      }
    }
  }
  return t.attrs.style = i, r
}, Su.prototype.onTagName = function (t) {
  this.tagName = this.xml ? t : t.toLowerCase(), "svg" === this.tagName && (this.xml = (this.xml || 0) + 1, fu.ignoreTags.style = void 0)
}, Su.prototype.onAttrName = function (t) {
  "data-" === (t = this.xml ? t : t.toLowerCase()).substr(0, 5) ? "data-src" !== t || this.attrs.src ? "img" === this.tagName || "a" === this.tagName ? this.attrName = t : this.attrName = void 0 : this.attrName = "src" : (this.attrName = t, this.attrs[t] = "T")
}, Su.prototype.onAttrVal = function (t) {
  var e = this.attrName || "";
  "style" === e || "href" === e ? this.attrs[e] = xu(t, !0) : e.includes("src") ? this.attrs[e] = this.getUrl(xu(t, !0)) : e && (this.attrs[e] = t)
}, Su.prototype.onOpenTag = function (t) {
  var e = Object.create(null);
  e.name = this.tagName, e.attrs = this.attrs, this.options.nodes.length && (e.type = "node"), this.attrs = Object.create(null);
  var n = e.attrs,
    r = this.stack[this.stack.length - 1],
    i = r ? r.children : this.nodes,
    o = this.xml ? t : fu.voidTags[e.name];
  if (pu[e.name] && (n.class = pu[e.name] + (n.class ? " " + n.class : "")), "embed" === e.name) {
    var s = n.src || "";
    s.includes(".mp4") || s.includes(".3gp") || s.includes(".m3u8") || (n.type || "").includes("video") ? e.name = "video" : (s.includes(".mp3") || s.includes(".wav") || s.includes(".aac") || s.includes(".m4a") || (n.type || "").includes("audio")) && (e.name = "audio"), n.autostart && (n.autoplay = "T"), n.controls = "T"
  }
  if ("video" !== e.name && "audio" !== e.name || ("video" !== e.name || n.id || (n.id = "v" + yu++), n.controls || n.autoplay || (n.controls = "T"), e.src = [], n.src && (e.src.push(n.src), n.src = void 0), this.expose()), o) {
    if (!this.hook(e) || fu.ignoreTags[e.name]) return void("base" !== e.name || this.options.domain ? "source" === e.name && r && ("video" === r.name || "audio" === r.name) && n.src && r.src.push(n.src) : this.options.domain = n.href);
    var a = this.parseStyle(e);
    if ("img" === e.name) {
      if (n.src && (n.src.includes("webp") && (e.webp = "T"), n.src.includes("data:") && !n["original-src"] && (n.ignore = "T"), !n.ignore || e.webp || n.src.includes("cloud://"))) {
        for (var u = this.stack.length; u--;) {
          var c = this.stack[u];
          "a" === c.name && (e.a = c.attrs), "table" !== c.name || e.webp || n.src.includes("cloud://") || (!a.display || a.display.includes("inline") ? e.t = "inline-block" : e.t = a.display, a.display = void 0);
          var h = c.attrs.style || "";
          if (!h.includes("flex:") || h.includes("flex:0") || h.includes("flex: 0") || a.width && !(parseInt(a.width) > 100))
            if (h.includes("flex") && "100%" === a.width)
              for (var l = u + 1; l < this.stack.length; l++) {
                var f = this.stack[l].attrs.style || "";
                if (!f.includes(";width") && !f.includes(" width") && 0 !== f.indexOf("width")) {
                  a.width = "";
                  break
                }
              } else h.includes("inline-block") && (a.width && "%" === a.width[a.width.length - 1] ? (c.attrs.style += ";max-width:" + a.width, a.width = "") : c.attrs.style += ";max-width:100%");
            else {
              a.width = "100% !important", a.height = "";
              for (var p = u + 1; p < this.stack.length; p++) this.stack[p].attrs.style = (this.stack[p].attrs.style || "").replace("inline-", "")
            } c.c = 1
        }
        n.i = this.imgList.length.toString();
        var d = n["original-src"] || n.src;
        if (this.imgList.includes(d)) {
          var v = d.indexOf("://");
          if (-1 !== v) {
            v += 3;
            for (var g = d.substr(0, v); v < d.length && "/" !== d[v]; v++) g += Math.random() > .5 ? d[v].toUpperCase() : d[v];
            g += d.substr(v), d = g
          }
        }
        this.imgList.push(d), e.t || (this.imgList._unloadimgs += 1)
      }
      "inline" === a.display && (a.display = ""), n.ignore && (a["max-width"] = a["max-width"] || "100%", n.style += ";-webkit-touch-callout:none"), parseInt(a.width) > vu && (a.height = void 0), isNaN(parseInt(a.width)) || (e.w = "T"), !isNaN(parseInt(a.height)) && (!a.height.includes("%") || r && (r.attrs.style || "").includes("height")) && (e.h = "T")
    } else if ("svg" === e.name) return i.push(e), this.stack.push(e), void this.popNode();
    for (var m in a) a[m] && (n.style += ";".concat(m, ":").concat(a[m].replace(" !important", "")));
    n.style = n.style.substr(1) || void 0, n.style || delete n.style
  } else("pre" === e.name || (n.style || "").includes("white-space") && n.style.includes("pre")) && 2 !== this.pre && (this.pre = e.pre = 1), e.children = [], this.stack.push(e);
  i.push(e)
}, Su.prototype.onCloseTag = function (t) {
  var e;
  for (t = this.xml ? t : t.toLowerCase(), e = this.stack.length; e-- && this.stack[e].name !== t;);
  if (-1 !== e)
    for (; this.stack.length > e;) this.popNode();
  else "p" !== t && "br" !== t || (this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes).push({
    name: t,
    attrs: {
      class: pu[t] || "",
      style: this.tagStyle[t] || ""
    }
  })
}, Su.prototype.popNode = function () {
  var t = this.stack.pop(),
    e = t.attrs,
    n = t.children,
    r = this.stack[this.stack.length - 1],
    i = r ? r.children : this.nodes;
  if (!this.hook(t) || fu.ignoreTags[t.name]) return "title" === t.name && n.length && "text" === n[0].type && this.options.setTitle && Sn.setNavigationBarTitle({
    title: n[0].text
  }), void i.pop();
  if (t.pre && 2 !== this.pre) {
    this.pre = t.pre = void 0;
    for (var o = this.stack.length; o--;) this.stack[o].pre && (this.pre = 1)
  }
  var s = {};
  if ("svg" === t.name) {
    if (this.xml > 1) return void this.xml--;
    var a = "",
      u = e.style;
    return e.style = "", e.xmlns = "http://www.w3.org/2000/svg",
      function t(e) {
        if ("text" !== e.type) {
          var n = fu.svgDict[e.name] || e.name;
          for (var r in a += "<" + n, e.attrs) {
            var i = e.attrs[r];
            i && (a += " ".concat(fu.svgDict[r] || r, '="').concat(i, '"'))
          }
          if (e.children) {
            a += ">";
            for (var o = 0; o < e.children.length; o++) t(e.children[o]);
            a += "</" + n + ">"
          } else a += "/>"
        } else a += e.text
      }(t), t.name = "img", t.attrs = {
        src: "data:image/svg+xml;utf8," + a.replace(/#/g, "%23"),
        style: u,
        ignore: "T"
      }, t.children = void 0, this.xml = !1, void(fu.ignoreTags.style = !0)
  }
  if (e.align && ("table" === t.name ? "center" === e.align ? s["margin-inline-start"] = s["margin-inline-end"] = "auto" : s.float = e.align : s["text-align"] = e.align, e.align = void 0), e.dir && (s.direction = e.dir, e.dir = void 0), "font" === t.name && (e.color && (s.color = e.color, e.color = void 0), e.face && (s["font-family"] = e.face, e.face = void 0), e.size)) {
    var c = parseInt(e.size);
    isNaN(c) || (c < 1 ? c = 1 : c > 7 && (c = 7), s["font-size"] = ["x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large"][c - 1]), e.size = void 0
  }
  if ((e.class || "").includes("align-center") && (s["text-align"] = "center"), Object.assign(s, this.parseStyle(t)), "table" !== t.name && parseInt(s.width) > vu && (s["max-width"] = "100%", s["box-sizing"] = "border-box"), fu.blockTags[t.name] ? t.name = "div" : fu.trustTags[t.name] || this.xml || (t.name = "span"), "a" === t.name || "ad" === t.name) this.expose();
  else if ("video" === t.name)(s.height || "").includes("auto") && (s.height = void 0);
  else if ("ul" !== t.name && "ol" !== t.name || !t.c) {
    if ("table" === t.name) {
      var h = parseFloat(e.cellpadding),
        l = parseFloat(e.cellspacing),
        f = parseFloat(e.border),
        p = s["border-color"],
        d = s["border-style"];
      if (t.c && (isNaN(h) && (h = 2), isNaN(l) && (l = 2)), f && (e.style += ";border:".concat(f, "px ").concat(d || "solid", " ").concat(p || "gray")), t.flag && t.c) {
        s.display = "grid", l ? (s["grid-gap"] = l + "px", s.padding = l + "px") : f && (e.style += ";border-left:0;border-top:0");
        var v = [],
          g = [],
          m = [],
          y = {};
        ! function t(e) {
          for (var n = 0; n < e.length; n++) "tr" === e[n].name ? g.push(e[n]) : t(e[n].children || [])
        }(n);
        for (var b = 1; b <= g.length; b++) {
          for (var x = 1, w = 0; w < g[b - 1].children.length; w++) {
            var S = g[b - 1].children[w];
            if ("td" === S.name || "th" === S.name) {
              for (; y[b + "." + x];) x++;
              var _ = S.attrs.style || "",
                T = _.indexOf("width") ? _.indexOf(";width") : 0;
              if (-1 !== T) {
                var E = _.indexOf(";", T + 6); - 1 === E && (E = _.length), S.attrs.colspan || (v[x] = _.substring(T ? T + 7 : 6, E)), _ = _.substr(0, T) + _.substr(E)
              }
              if (-1 !== (T = (_ += ";display:flex").indexOf("vertical-align"))) {
                var O = _.substr(T + 15, 10);
                O.includes("middle") ? _ += ";align-items:center" : O.includes("bottom") && (_ += ";align-items:flex-end")
              } else _ += ";align-items:center";
              if (-1 !== (T = _.indexOf("text-align"))) {
                var k = _.substr(T + 11, 10);
                k.includes("center") ? _ += ";justify-content: center" : k.includes("right") && (_ += ";justify-content: right")
              }
              if (_ = (f ? ";border:".concat(f, "px ").concat(d || "solid", " ").concat(p || "gray") + (l ? "" : ";border-right:0;border-bottom:0") : "") + (h ? ";padding:".concat(h, "px") : "") + ";" + _, S.attrs.colspan && (_ += ";grid-column-start:".concat(x, ";grid-column-end:").concat(x + parseInt(S.attrs.colspan)), S.attrs.rowspan || (_ += ";grid-row-start:".concat(b, ";grid-row-end:").concat(b + 1)), x += parseInt(S.attrs.colspan) - 1), S.attrs.rowspan) {
                _ += ";grid-row-start:".concat(b, ";grid-row-end:").concat(b + parseInt(S.attrs.rowspan)), S.attrs.colspan || (_ += ";grid-column-start:".concat(x, ";grid-column-end:").concat(x + 1));
                for (var A = 1; A < S.attrs.rowspan; A++)
                  for (var D = 0; D < (S.attrs.colspan || 1); D++) y[b + A + "." + (x - D)] = 1
              }
              _ && (S.attrs.style = _), m.push(S), x++
            }
          }
          if (1 === b) {
            for (var C = "", P = 1; P < x; P++) C += (v[P] ? v[P] : "auto") + " ";
            s["grid-template-columns"] = C
          }
        }
        t.children = m
      } else t.c && (s.display = "table"), isNaN(l) || (s["border-spacing"] = l + "px"), (f || h) && function t(e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          "th" === r.name || "td" === r.name ? (f && (r.attrs.style = "border:".concat(f, "px ").concat(d || "solid", " ").concat(p || "gray", ";").concat(r.attrs.style || "")), h && (r.attrs.style = "padding:".concat(h, "px;").concat(r.attrs.style || ""))) : r.children && t(r.children)
        }
      }(n);
      if (this.options.scrollTable && !(e.style || "").includes("inline")) {
        var R = Object.assign({}, t);
        t.name = "div", t.attrs = {
          style: "overflow:auto"
        }, t.children = [R], e = R.attrs
      }
    } else if ("td" !== t.name && "th" !== t.name || !e.colspan && !e.rowspan)
      if ("ruby" === t.name) {
        t.name = "span";
        for (var I = 0; I < n.length - 1; I++) "text" === n[I].type && "rt" === n[I + 1].name && (n[I] = {
          name: "div",
          attrs: {
            style: "display:inline-block;text-align:center"
          },
          children: [{
            name: "div",
            attrs: {
              style: "font-size:50%;" + (n[I + 1].attrs.style || "")
            },
            children: n[I + 1].children
          }, n[I]]
        }, n.splice(I + 1, 1))
      } else t.c && function t(e) {
        e.c = 2;
        for (var n = e.children.length; n--;) {
          var r = e.children[n];
          r.name && (fu.inlineTags[r.name] || (r.attrs.style || "").includes("inline") && r.children) && !r.c && t(r), r.c && "table" !== r.name || (e.c = 1)
        }
      }(t);
    else
      for (var N = this.stack.length; N--;)
        if ("table" === this.stack[N].name) {
          this.stack[N].flag = 1;
          break
        }
  } else {
    var V = {
      a: "lower-alpha",
      A: "upper-alpha",
      i: "lower-roman",
      I: "upper-roman"
    };
    V[e.type] && (e.style += ";list-style-type:" + V[e.type], e.type = void 0);
    for (var j = n.length; j--;) "li" === n[j].name && (n[j].c = 1)
  }
  if ((s.display || "").includes("flex") && !t.c)
    for (var B = n.length; B--;) {
      var $ = n[B];
      $.f && ($.attrs.style = ($.attrs.style || "") + $.f, $.f = void 0)
    }
  var M = r && ((r.attrs.style || "").includes("flex") || (r.attrs.style || "").includes("grid")) && !(t.c && wn.getNFCAdapter);
  for (var L in M && (t.f = ";max-width:100%"), n.length >= 50 && t.c && !(s.display || "").includes("flex") && wu(n), s)
    if (s[L]) {
      var H = ";".concat(L, ":").concat(s[L].replace(" !important", ""));
      M && (L.includes("flex") && "flex-direction" !== L || "align-self" === L || L.includes("grid") || "-" === s[L][0] || L.includes("width") && H.includes("%")) ? (t.f += H, "width" === L && (e.style += ";width:100%")) : e.style += H
    } for (var q in e.style = e.style.substr(1) || void 0, e) e[q] || delete e[q]
}, Su.prototype.onText = function (t) {
  if (!this.pre) {
    for (var e, n = "", r = 0, i = t.length; r < i; r++) mu[t[r]] ? (" " !== n[n.length - 1] && (n += " "), "\n" !== t[r] || e || (e = !0)) : n += t[r];
    if (" " === n) {
      if (e) return;
      var o = this.stack[this.stack.length - 1];
      if (o && "t" === o.name[0]) return
    }
    t = n
  }
  var s = Object.create(null);
  s.type = "text", s.text = xu(t), this.hook(s) && ("force" === this.options.selectable && gu.includes("iOS") && !Sn.canIUse("rich-text.user-select") && this.expose(), (this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes).push(s))
}, _u.prototype.parse = function (t) {
  this.content = t || "", this.i = 0, this.start = 0, this.state = this.text;
  for (var e = this.content.length; - 1 !== this.i && this.i < e;) this.state()
}, _u.prototype.checkClose = function (t) {
  var e = "/" === this.content[this.i];
  return !!(">" === this.content[this.i] || e && ">" === this.content[this.i + 1]) && (t && this.handler[t](this.content.substring(this.start, this.i)), this.i += e ? 2 : 1, this.start = this.i, this.handler.onOpenTag(e), "script" === this.handler.tagName ? (this.i = this.content.indexOf("</", this.i), -1 !== this.i && (this.i += 2, this.start = this.i), this.state = this.endTag) : this.state = this.text, !0)
}, _u.prototype.text = function () {
  if (this.i = this.content.indexOf("<", this.i), -1 !== this.i) {
    var t = this.content[this.i + 1];
    if (t >= "a" && t <= "z" || t >= "A" && t <= "Z") this.start !== this.i && this.handler.onText(this.content.substring(this.start, this.i)), this.start = ++this.i, this.state = this.tagName;
    else if ("/" === t || "!" === t || "?" === t) {
      this.start !== this.i && this.handler.onText(this.content.substring(this.start, this.i));
      var e = this.content[this.i + 2];
      if ("/" === t && (e >= "a" && e <= "z" || e >= "A" && e <= "Z")) return this.i += 2, this.start = this.i, void(this.state = this.endTag);
      var n = "--\x3e";
      "!" === t && "-" === this.content[this.i + 2] && "-" === this.content[this.i + 3] || (n = ">"), this.i = this.content.indexOf(n, this.i), -1 !== this.i && (this.i += n.length, this.start = this.i)
    } else this.i++
  } else this.start < this.content.length && this.handler.onText(this.content.substring(this.start, this.content.length))
}, _u.prototype.tagName = function () {
  if (mu[this.content[this.i]]) {
    for (this.handler.onTagName(this.content.substring(this.start, this.i)); mu[this.content[++this.i]];);
    this.i < this.content.length && !this.checkClose() && (this.start = this.i, this.state = this.attrName)
  } else this.checkClose("onTagName") || this.i++
}, _u.prototype.attrName = function () {
  var t = this.content[this.i];
  if (mu[t] || "=" === t) {
    this.handler.onAttrName(this.content.substring(this.start, this.i));
    for (var e = "=" === t, n = this.content.length; ++this.i < n;)
      if (t = this.content[this.i], !mu[t]) {
        if (this.checkClose()) return;
        if (e) return this.start = this.i, void(this.state = this.attrVal);
        if ("=" !== this.content[this.i]) return this.start = this.i, void(this.state = this.attrName);
        e = !0
      }
  } else this.checkClose("onAttrName") || this.i++
}, _u.prototype.attrVal = function () {
  var t = this.content[this.i],
    e = this.content.length;
  if ('"' === t || "'" === t) {
    if (this.start = ++this.i, this.i = this.content.indexOf(t, this.i), -1 === this.i) return;
    this.handler.onAttrVal(this.content.substring(this.start, this.i))
  } else
    for (; this.i < e; this.i++) {
      if (mu[this.content[this.i]]) {
        this.handler.onAttrVal(this.content.substring(this.start, this.i));
        break
      }
      if (this.checkClose("onAttrVal")) return
    }
  for (; mu[this.content[++this.i]];);
  this.i < e && !this.checkClose() && (this.start = this.i, this.state = this.attrName)
}, _u.prototype.endTag = function () {
  var t = this.content[this.i];
  if (mu[t] || ">" === t || "/" === t) {
    if (this.handler.onCloseTag(this.content.substring(this.start, this.i)), ">" !== t && (this.i = this.content.indexOf(">", this.i), -1 === this.i)) return;
    this.start = ++this.i, this.state = this.text
  } else this.i++
}, exports.JSEncrypt = Ga, exports.Parser = Su, exports._export_sfc = function (e, n) {
  var r, i = e.__vccOpts || e,
    s = t(n);
  try {
    for (s.s(); !(r = s.n()).done;) {
      var a = o(r.value, 2),
        u = a[0],
        c = a[1];
      i[u] = c
    }
  } catch (t) {
    s.e(t)
  } finally {
    s.f()
  }
  return i
}, exports.createSSRApp = function (t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  return t && (t.mpType = "app"), Yo(t, e).use(hs)
}, exports.createStore = function (t) {
  return new ou(t)
}, exports.e = function (t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
  return x.apply(void 0, [t].concat(n))
}, exports.f = function (t, e) {
  return function (t, e) {
    var n;
    if (T(t) || A(t)) {
      n = new Array(t.length);
      for (var r = 0, i = t.length; r < i; r++) n[r] = e(t[r], r, r)
    } else if ("number" == typeof t) {
      n = new Array(t);
      for (var o = 0; o < t; o++) n[o] = e(o + 1, o, o)
    } else if (C(t))
      if (t[Symbol.iterator]) n = Array.from(t, (function (t, n) {
        return e(t, n, n)
      }));
      else {
        var s = Object.keys(t);
        n = new Array(s.length);
        for (var a = 0, u = s.length; a < u; a++) {
          var c = s[a];
          n[a] = e(t[c], c, a)
        }
      }
    else n = [];
    return n
  }(t, e)
}, exports.index = Sn, exports.initVueI18n = function (t) {
  var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = arguments.length > 2 ? arguments[2] : void 0,
    i = arguments.length > 3 ? arguments[3] : void 0;
  "string" != typeof t && (t = (e = [n, t])[0], n = e[1]), "string" != typeof t && (t = void 0 !== Sn && Sn.getLocale ? Sn.getLocale() : "undefined" != typeof global && global.getLocale ? global.getLocale() : Bt), "string" != typeof r && (r = "undefined" != typeof __uniConfig && __uniConfig.fallbackLocale || Bt);
  var o = new qt({
      locale: t,
      fallbackLocale: r,
      messages: n,
      watcher: i
    }),
    s = function (t, e) {
      if ("function" != typeof getApp) s = function (t, e) {
        return o.t(t, e)
      };
      else {
        var n = !1;
        s = function (t, e) {
          var r = getApp().$vm;
          return r && (r.$locale, n || (n = !0, function (t, e) {
            t.$watchLocale ? t.$watchLocale((function (t) {
              e.setLocale(t)
            })) : t.$watch((function () {
              return t.$locale
            }), (function (t) {
              e.setLocale(t)
            }))
          }(r, o))), o.t(t, e)
        }
      }
      return s(t, e)
    };
  return {
    i18n: o,
    f: function (t, e, n) {
      return o.f(t, e, n)
    },
    t: function (t, e) {
      return s(t, e)
    },
    add: function (t, e) {
      var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      return o.add(t, e, n)
    },
    watch: function (t) {
      return o.watchLocale(t)
    },
    getLocale: function () {
      return o.getLocale()
    },
    setLocale: function (t) {
      return o.setLocale(t)
    }
  }
}, exports.mapActions = uu, exports.mapState = au, exports.n = function (t) {
  return function t(e) {
    var n = "";
    if (A(e)) n = e;
    else if (T(e))
      for (var r = 0; r < e.length; r++) {
        var i = t(e[r]);
        i && (n += i + " ")
      } else if (C(e))
        for (var o in e) e[o] && (n += o + " ");
    return n.trim()
  }(t)
}, exports.o = function (t, e) {
  return function (t, e) {
    var n = bo(),
      i = n.ctx,
      o = void 0 === e || "mp-weixin" !== i.$mpPlatform && "mp-qq" !== i.$mpPlatform || !A(e) && "number" != typeof e ? "" : "_" + e,
      s = "e" + n.$ei++ + o,
      a = i.$scope;
    if (!t) return delete a[s], s;
    var u = a[s];
    return u ? u.value = t : a[s] = function (t, e) {
      var n = function t(n) {
        var i;
        (i = n).type && i.target && (i.preventDefault = v, i.stopPropagation = v, i.stopImmediatePropagation = v, _(i, "detail") || (i.detail = {}), _(i, "markerId") && (i.detail = "object" == r(i.detail) ? i.detail : {}, i.detail.markerId = i.markerId), N(i.detail) && _(i.detail, "checked") && !_(i.detail, "value") && (i.detail.value = i.detail.checked), N(i.detail) && (i.target = x({}, i.target, i.detail)));
        var o = [n];
        n.detail && n.detail.__args__ && (o = n.detail.__args__);
        var s = t.value,
          a = function () {
            return Gr(function (t, e) {
              if (T(e)) {
                var n = t.stopImmediatePropagation;
                return t.stopImmediatePropagation = function () {
                  n && n.call(t), t._stopped = !0
                }, e.map((function (t) {
                  return function (e) {
                    return !e._stopped && t(e)
                  }
                }))
              }
              return e
            }(n, s), e, 5, o)
          },
          u = n.target,
          c = !!u && !!u.dataset && "true" === String(u.dataset.eventsync);
        if (!ls.includes(n.type) || c) {
          var h = a();
          if ("input" === n.type && (T(h) || P(h))) return;
          return h
        }
        setTimeout(a)
      };
      return n.value = t, n
    }(t, n), s
  }(t, e)
}, exports.p = function (t) {
  return function (t) {
    var e = bo(),
      n = e.uid,
      r = e.__counter;
    return n + "," + ((as[n] || (as[n] = [])).push(function (t) {
      return t ? Cr(e = t) || Pr(e) || "__vInternal" in t ? x({}, t) : t : null;
      var e
    }(t)) - 1) + "," + r
  }(t)
}, exports.resolveComponent = function (t, e) {
  return function (t, e) {
    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      r = vi || yo;
    if (r) {
      var i = r.type;
      if (t === Hi) {
        var o = function (t) {
          var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return k(t) ? t.displayName || t.name : t.name || e && t.__name
        }(i, !1);
        if (o && (o === e || o === M(e) || o === q(M(e)))) return i
      }
      var s = qi(r[t] || i[t], e) || qi(r.appContext[t], e);
      return !s && n ? i : s
    }
  }(Hi, t, !0, e) || t
}, exports.s = function (t) {
  return fs(t)
}, exports.sr = function (t, e, n) {
  return function (t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = bo(),
      i = r.$templateRefs;
    i.push({
      i: e,
      r: t,
      k: n.k,
      f: n.f
    })
  }(t, e, n)
}, exports.t = function (t) {
  return function (t) {
    return A(t) ? t : null == t ? "" : T(t) || C(t) && (t.toString === R || !k(t.toString)) ? JSON.stringify(t, f, 2) : String(t)
  }(t)
}, exports.useCssVars = function (t) {
  var e = bo();
  e && function (t, e) {
    t.ctx.__cssVars = function () {
      var n = e(t.proxy),
        r = {};
      for (var i in n) r["--".concat(i)] = n[i];
      return r
    }
  }(e, t)
}, exports.wx$1 = wn;