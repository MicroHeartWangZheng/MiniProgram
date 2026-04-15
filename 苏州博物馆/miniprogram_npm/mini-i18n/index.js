require("../../@babel/runtime/helpers/Arrayincludes");
var e, t, n, a = require("../../@babel/runtime/helpers/typeof");
module.exports = (e = {}, n = function(t, n) {
  if (!e[t]) return require(n);
  if (!e[t].status) {
    var o = e[t].m;
    o._exports = o._tempexports;
    var r = Object.getOwnPropertyDescriptor(o, "exports");
    r && r.configurable && Object.defineProperty(o, "exports", {
      set: function(e) {
        "object" === a(e) && e !== o._exports && (o._exports.__proto__ = e.__proto__, Object.keys(e).forEach((function(t) {
          o._exports[t] = e[t]
        }))), o._tempexports = e
      },
      get: function() {
        return o._tempexports
      }
    }), e[t].status = 1, e[t].func(e[t].req, o, o.exports)
  }
  return e[t].m.exports
}, (t = function(t, n, a) {
  e[t] = {
    status: 0,
    func: n,
    req: a,
    m: {
      exports: {},
      _tempexports: {}
    }
  }
})(1718689573652, (function(e, t, n) {
  var a = this && this.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.t = n.order = n.i18n = void 0;
  var o = e("./until"),
    r = e("./until/common"),
    i = a(e("./until/merge")),
    c = function() {
      function e() {
        this.allLangData = Object.create(null), this.lang = "en-US", this.defualtLang = "en-US", this.langTag = "en", this.defualtLangTag = "en", this.themeColor = "#000", this.homePath = "", this.isVerifiyApi = !1, this.isHint = !1
      }
      return e.prototype.init = function(e) {
        console.log("mini-i18n init..."), this.isVerifiyApi = e.isVerifiyApi || this.isVerifiyApi, this.isVerifiyApi && (0, o._canIUse)(), this.themeColor = e.themeColor || this.themeColor, this.allLangData = e.locales || Object.create(null), this.defualtLang = e.defualtLang || this.defualtLang, this.defualtLangTag = this._formatLanguageTag(this.defualtLang) || this.defualtLangTag;
        var t = (0, o._storage)("get");
        if (console.log("localLang", t), this.lang = e.lang || t || this.defualtLang || (0, o.getLang)(), this.langTag = this._formatLanguageTag(this.lang), (0, o._storage)("set", this.lang), e.isHint && (0, o._listener)(this), this.homePath = e.homePath || this.homePath, !e.locales[this._formatLanguageTag(this.defualtLang)]) throw "默认语言 ‘".concat(this.defualtLang, "’ 的文件不存在, 请检查多语言文件配置是否正确")
      }, e.prototype.getLocales = function() {
        return (0, o._storage)("get") || this.lang
      }, e.prototype.getEnv = function() {
        return o._env
      }, e.prototype.getLanguagePackList = function() {
        return Object.keys(this.allLangData)
      }, e.prototype.setLocales = function(e) {
        var t = e.lang,
          n = e.isReload,
          a = void 0 !== n && n,
          r = e.path,
          i = void 0 === r ? "" : r,
          c = e.query,
          l = void 0 === c ? {} : c;
        (0, o._storage)("set", t), this.lang = t, this.langTag = this._formatLanguageTag(t), console.log("setLocales", {
          lang: t,
          isReload: a
        }), a && (0, o._reload)(this, {
          path: i,
          query: l
        })
      }, e.prototype.updateLocale = function(e) {
        var t = e.locales,
          n = e.isReload,
          a = void 0 !== n && n,
          c = e.isAnalyticalData,
          l = void 0 === c || c,
          u = e.mark,
          s = void 0 === u ? "." : u,
          g = e.path,
          f = void 0 === g ? "" : g,
          d = e.query,
          h = void 0 === d ? {} : d,
          y = l ? r.dealData.analyticalData(t, s) : t;
        this.allLangData = (0, i.default)(this.allLangData, y), console.log("updateLocale", {
          locales: t,
          isReload: a,
          isAnalyticalData: l,
          mark: s
        }, this.allLangData), a && (0, o._reload)(this, {
          path: f,
          query: h
        })
      }, e.prototype._formatLanguageTag = function(e) {
        var t = e.includes("_") ? e.replace("_", "-").toLowerCase() : e.toLowerCase();
        return o.region[t] ? o.region[t] : this.defualtLangTag
      }, e
    }();
  n.i18n = new c, n.order = function(e, t, n) {
    return n = n || "%", e.includes(n) ? e.replace(n, t.toString()) : e
  }, n.t = function(e, t, a) {
    var o = n.i18n.allLangData[n.i18n.langTag],
      i = n.i18n.allLangData[n.i18n.defualtLangTag],
      c = e.split(".");
    if ("[object Object]" === Object.prototype.toString.call(o) && 0 !== Object.keys(o).length) try {
      return (l = (0, r.getValue)(o, c)) ? void 0 !== t ? (0, n.order)(l, t, a) : l : (console.warn("mini-i18n: 语言包 ".concat(n.i18n.langTag, " 中的 key：").concat(e, " 不存在，请检查接词条")), c[c.length - 1])
    } catch (e) {
      return console.warn(e), c[c.length - 1]
    }
    if (console.warn("mini-i18n: 语言包 ".concat(n.i18n.langTag, " 内容为空，请检查接口或本地文件内容")), "[object Object]" === Object.prototype.toString.call(i) && 0 !== Object.keys(i).length) try {
      var l;
      return (l = (0, r.getValue)(o, c)) ? void 0 !== t ? (0, n.order)(l, t, a) : l : (console.warn("mini-i18n: 兜底语言包 ".concat(n.i18n.defualtLangTag, " 中的 key：").concat(e, " 不存在，请检查接词条")), c[c.length - 1])
    } catch (e) {
      return console.warn(e), c[c.length - 1]
    }
    return console.warn("mini-i18n: 语言包 ".concat(n.i18n.defualtLangTag, " 内容为空，请检查接口或本地文件内容")), c[c.length - 1]
  }
}), (function(e) {
  return n({
    "./until": 1718689573653,
    "./until/common": 1718689573662,
    "./until/merge": 1718689573663
  } [e], e)
})), t(1718689573653, (function(e, t, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n._canIUse = n.ty = n._hint = n._listener = n.getLang = n._storage = n._reload = n.region = n._env = void 0;
  var a = e("./env");
  Object.defineProperty(n, "_env", {
    enumerable: !0,
    get: function() {
      return a._env
    }
  }), Object.defineProperty(n, "ty", {
    enumerable: !0,
    get: function() {
      return a.ty
    }
  });
  var o = e("./ua");
  Object.defineProperty(n, "region", {
    enumerable: !0,
    get: function() {
      return o.region
    }
  });
  var r = e("./reload");
  Object.defineProperty(n, "_reload", {
    enumerable: !0,
    get: function() {
      return r._reload
    }
  });
  var i = e("./storage");
  Object.defineProperty(n, "_storage", {
    enumerable: !0,
    get: function() {
      return i._storage
    }
  });
  var c = e("./getLang");
  Object.defineProperty(n, "getLang", {
    enumerable: !0,
    get: function() {
      return c.getLang
    }
  });
  var l = e("./listener");
  Object.defineProperty(n, "_listener", {
    enumerable: !0,
    get: function() {
      return l._listener
    }
  });
  var u = e("./hint");
  Object.defineProperty(n, "_hint", {
    enumerable: !0,
    get: function() {
      return u._hint
    }
  });
  var s = e("./canIUse");
  Object.defineProperty(n, "_canIUse", {
    enumerable: !0,
    get: function() {
      return s._canIUse
    }
  })
}), (function(e) {
  return n({
    "./env": 1718689573654,
    "./ua": 1718689573655,
    "./reload": 1718689573656,
    "./storage": 1718689573657,
    "./getLang": 1718689573658,
    "./listener": 1718689573659,
    "./hint": 1718689573660,
    "./canIUse": 1718689573661
  } [e], e)
})), t(1718689573654, (function(e, t, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n._env = n.ty = void 0, n._env = "undefined" != typeof wx && wx.getAppBaseInfo ? (n.ty = wx, "wechat") : "undefined" != typeof my && my.getSystemInfo ? (n.ty = my, "alipay") : "undefined" != typeof tt && tt.getSystemInfo ? (n.ty = tt, "bytedance") : "undefined" != typeof swan && swan.getSystemInfo ? (n.ty = swan, "baidu") : "undefined" != typeof qq && qq.getSystemInfo ? (n.ty = qq, "qq") : "undefined" != typeof jd && jd.getSystemInfo ? (n.ty = jd, "jd") : "undefined" != typeof window ? "browser" : void console.error("_env: 不支持当前环境")
}), (function(e) {
  return n({} [e], e)
})), t(1718689573655, (function(e, t, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.region = void 0, n.region = {
    "ar-eg": "ar",
    "az-az": "az",
    "bg-bg": "bg",
    "by-by": "",
    "ca-es": "",
    "cs-cz": "cs",
    "da-dk": "da",
    "de-de": "de",
    "el-gr": "el",
    "en-gb": "en_GB",
    "en-us": "en",
    "es-es": "es",
    "et-ee": "et",
    "fa-ir": "fa",
    "fi-fi": "fi",
    "fr-be": "",
    "fr-ca": "",
    "fr-fr": "fr",
    "ga-ie": "",
    "gl-es": "",
    "he-il": "he",
    "hi-in": "hi",
    "hr-hr": "hr",
    "hu-hu": "hu",
    "hy-am": "",
    "id-id": "id",
    "is-is": "",
    "it-it": "it",
    "ja-jp": "",
    "kk-kz": "kk",
    "kmr-iq": "",
    "kn-in": "",
    "ko-kr": "ko",
    "ku-iq": "",
    "lt-lt": "lt",
    "lv-lv": "lv",
    "mk-mk": "mk",
    "mn-mn": "mn",
    "ms-my": "ms",
    "nb-no": "no",
    "ne-np": "ne",
    "nl-be": "",
    "nl-nl": "nl",
    "pl-pl": "pl",
    "pt-br": "pt_BR",
    "pt-pt": "pt",
    "ro-ro": "ro",
    "ru-ru": "ru",
    "sk-sk": "sk",
    "sl-si": "sl",
    "sr-rs": "sr",
    "sv-se": "sv",
    "ta-in": "ta",
    "th-th": "th",
    "tr-tr": "tr",
    "uk-ua": "uk",
    "vi-vn": "vi",
    "zh-cn": "zh-Hans",
    "zh-hk": "",
    "zh-tw": "zh-Hant",
    "ja-ap": "ja",
    ja: "ja",
    ru: "ru",
    ko: "ko",
    ar: "ar",
    en: "en",
    "zh-hans": "zh-Hans",
    "zh-hant": "zh-Hant"
  }
}), (function(e) {
  return n({} [e], e)
})), t(1718689573656, (function(e, t, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n._reload = void 0;
  var a = e("./env");

  function o(e, t) {
    var n = t.path ? t.path : e.homePath,
      o = t.query;
    console.log("reload", n);
    var r = o && 0 !== Object.keys(o).length;
    a.ty.redirectTo({
      url: r ? i(n, o) : n,
      fail: function(e) {
        console.warn("_reload_redirectTo", {
          _env: a._env,
          err: e,
          log: "path:".concat(n, " 非tabbar页面, 即将使用 reLaunch 跳转页面："),
          path: n,
          query: o
        }), a.ty.reLaunch({
          url: n,
          fail: function(e) {
            console.warn("_reload_reLaunch:", {
              _env: a._env,
              err: e,
              path: n,
              query: o
            })
          }
        })
      }
    })
  }

  function r(e) {
    var t = e.path ? e.path : i18n.homePath,
      n = e.query,
      o = n && 0 !== Object.keys(n).length;
    a.ty.redirectTo({
      url: o ? i(t, n) : t,
      fail: function(e) {
        console.warn("_reload_redirectTo", {
          _env: a._env,
          err: e,
          path: t,
          query: n
        })
      }
    })
  }

  function i(e, t) {
    var n = Object.keys(t).length,
      a = e + (0 !== n ? "?" : "");
    return Object.keys(t).forEach((function(e, o) {
      a += e + "=" + t[e] + (o === n - 1 ? "" : "&")
    })), a
  }
  n._reload = function(e, t) {
    switch (a._env) {
      case "wechat":
        o(e, t);
        break;
      case "alipay":
        r(t);
        break;
      case "baidu":
      case "qq":
      case "jd":
      case "bytedance":
        o(e, t);
        break;
      case "browser":
        window.location.reload();
      default:
        console.error("i18n_reload不支持当前环境:", a._env)
    }
  }
}), (function(e) {
  return n({
    "./env": 1718689573654
  } [e], e)
})), t(1718689573657, (function(e, t, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n._storage = void 0;
  var a = e("./env");

  function o(e) {
    throw "".concat(e, ": Please check params")
  }
  n._storage = function(e, t) {
    return "wechat" === a._env || "baidu" === a._env || "qq" === a._env || "jd" === a._env || "bytedance" === a._env ? function(e, t) {
      if ("get" === e) try {
        var n = a.ty.getStorageSync("ty_locale");
        if (n) return n
      } catch (e) {
        console.error(e)
      } else "set" === e ? a.ty.setStorage({
        key: "ty_locale",
        data: t
      }) : o("_wxStorage")
    }(e, t) : "alipay" === a._env ? function(e, t) {
      if ("get" === e) try {
        var n = a.ty.getStorageSync({
          key: "ty_locale"
        });
        if (!n.error) return n.data
      } catch (e) {
        console.error(e)
      } else "set" === e ? a.ty.setStorage({
        key: "ty_locale",
        data: t
      }) : o("_alipayStorage")
    }(e, t) : "browser" === a._env ? function(e, t) {
      if ("get" === e) return localStorage.getItem("ty_locale");
      "set" === e && localStorage.setItem("ty_locale", t || "")
    }(e, t) : void console.error("不支持当前环境")
  }
}), (function(e) {
  return n({
    "./env": 1718689573654
  } [e], e)
})), t(1718689573658, (function(e, t, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.getLang = void 0;
  var a = e("./env");
  n.getLang = function() {
    return "wechat" === a._env ? (console.log("微信环境使用getAppBaseInfo().language"), a.ty.getAppBaseInfo().language) : "baidu" === a._env || "qq" === a._env || "jd" === a._env || "bytedance" === a._env ? a.ty.getSystemInfoSync().language : "alipay" === a._env ? a.ty.env.language || "" : void("browser" === a._env ? window.navigator.language : console.error("不支持当前环境"))
  }
}), (function(e) {
  return n({
    "./env": 1718689573654
  } [e], e)
})), t(1718689573659, (function(e, t, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n._listener = void 0;
  var a = e("../until"),
    o = e("./hint");
  n._listener = function(e) {
    "wechat" === a._env || "baidu" === a._env || "qq" === a._env || "jd" === a._env || "bytedance" === a._env || "alipay" === a._env ? function(e) {
      a.ty.onAppShow((function(t) {
        (0, o._hint)(e)
      }))
    }(e) : "browser" === a._env || console.error("_listener: 不支持当前环境")
  }
}), (function(e) {
  return n({
    "../until": 1718689573653,
    "./hint": 1718689573660
  } [e], e)
})), t(1718689573660, (function(e, t, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n._hint = void 0;
  var a = e("../until");
  n._hint = function(e) {
    "wechat" === a._env || "baidu" === a._env || "qq" === a._env || "jd" === a._env || "bytedance" === a._env ? function(e) {
      var t = e.getLanguagePackList(),
        n = (0, a.getLang)(),
        o = e._formatLanguageTag(n),
        r = "zh-Hans" === o,
        i = t.findIndex((function(e) {
          return e === o
        }));
      n !== e.lang && (-1 !== i ? a.ty.showModal({
        title: r ? "提示" : "Hint",
        cancelText: r ? "取消" : "Cancel",
        confirmText: r ? "切换" : "Switch",
        confirmColor: e.themeColor,
        content: r ? "当前系统语言为".concat(n, "，是否切换？") : "\n        The current system language is ".concat(n, ", do you want to switch?"),
        success: function(t) {
          t.confirm ? e.setLocales({
            lang: n,
            isReload: !0
          }) : t.cancel && console.log("用户点击取消")
        }
      }) : e.lang !== e._formatLanguageTag(e.defualtLang) && a.ty.showModal({
        title: r ? "提示" : "Hint",
        cancelText: r ? "取消" : "Cancel",
        confirmText: r ? "切换" : "Switch",
        confirmColor: e.themeColor,
        content: r ? "不支持当前系统语言".concat(n, "，是否切换为英文？") : "\n        The current system language ".concat(n, " is not supported, should you switch to English?"),
        success: function(t) {
          t.confirm ? e.setLocales(e.defualtLang) : t.cancel && console.log("用户点击取消")
        }
      }))
    }(e) : "alipay" === a._env ? function(e) {
      var t = "zh-Hans" === e.langTag,
        n = e.getLanguagePackList(),
        o = (0, a.getLang)(),
        r = e._formatLanguageTag(o),
        i = n.findIndex((function(e) {
          return e === r
        }));
      o !== e.lang && (-1 !== i ? a.ty.confirm({
        title: t ? "提示" : "Hint",
        cancelButtonText: t ? "取消" : "Cancel",
        confirmButtonText: t ? "切换" : "Switch",
        content: t ? "当前系统语言为".concat(o, "，是否切换？") : "\n        The current system language is ".concat(o, ", do you want to switch?"),
        success: function(t) {
          t.confirm ? e.setLocales(o) : t.cancel && console.log("用户点击取消")
        }
      }) : e.lang !== e._formatLanguageTag(e.defualtLang) && a.ty.confirm({
        title: t ? "提示" : "Hint",
        cancelButtonText: t ? "取消" : "Cancel",
        confirmButtonText: t ? "切换" : "Switch",
        content: t ? "不支持当前系统语言".concat(o, "，是否切换为英文？") : "\n        The current system language ".concat(o, " is not supported, should you switch to English?"),
        success: function(t) {
          t.confirm ? e.setLocales(e.defualtLang) : t.cancel && console.log("用户点击取消")
        }
      }))
    }(e) : "browser" === a._env ? window.location.reload() : console.error("不支持当前环境")
  }
}), (function(e) {
  return n({
    "../until": 1718689573653
  } [e], e)
})), t(1718689573661, (function(e, t, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n._canIUse = void 0;
  var a = e("./env"),
    o = {
      public: {
        getSystemInfoSync: "getSystemInfoSync",
        showModal: "showModal",
        onAppShow: "onAppShow",
        reLaunch: "reLaunch",
        getStorageSync: "getStorageSync",
        setStorage: "setStorage"
      },
      alipay: {
        env: "env.language",
        confirm: "confirm"
      }
    };
  n._canIUse = function() {
    "wechat" === a._env || "baidu" === a._env || "qq" === a._env || "jd" === a._env || "bytedance" === a._env ? (Object.keys(o.public).forEach((function(e, t) {
      if (!a.ty.canIUse(o.public[e])) throw "".concat(e, " 不支持当前版本，请升级到支持 Api ").concat(e, " 的基础库或开发工具到指定版本。")
    })), console.log("mini-i18n: Api 在当前环境可用")) : "alipay" === a._env ? (Object.keys(o).forEach((function(e, t) {
      Object.keys(o[e]).forEach((function(t, n) {
        if (!a.ty.canIUse(o[e][t])) throw "".concat(t, " 不支持当前版本，请升级到支持 Api ").concat(t, " 的基础库或开发工具到指定版本。")
      }))
    })), console.log("mini-i18n: Api 在当前环境可用")) : console.error("mini-i18n: 不支持当前环境")
  }
}), (function(e) {
  return n({
    "./env": 1718689573654
  } [e], e)
})), t(1718689573662, (function(e, t, n) {
  var a = this && this.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.getValue = n.dealData = void 0;
  var o = a(e("./merge")),
    r = function() {
      function e() {
        this.newData = {}
      }
      return e.prototype.analyticalData = function(e, t) {
        var n = this;
        return Object.keys(e).forEach((function(a, r) {
          n.newData[a] = {};
          var i = {};
          Object.keys(e[a]).forEach((function(r, c) {
            var l = n.stringToObject({
              key: r,
              value: e[a][r],
              mark: t
            });
            (0, o.default)(i, l)
          })), n.newData[a] = i
        })), this.newData
      }, e.prototype.stringToObject = function(e) {
        var t = e.key,
          n = e.value,
          a = e.mark,
          o = t.split(a),
          r = o.length,
          i = {};
        return r > 1 && void 0 === i[o[0]] ? i[o[0]] = {} : 1 === r && (i[o[0]] = n), r > 2 && void 0 === i[o[0]][o[1]] ? i[o[0]][o[1]] = {} : 2 === r && (i[o[0]][o[1]] = n), 3 === r && (i[o[0]][o[1]][o[2]] = n), i
      }, e
    }();
  n.dealData = new r, n.getValue = function(e, t) {
    var n = e;
    return t.forEach((function(e) {
      n = n && n[e]
    })), n || ""
  }
}), (function(e) {
  return n({
    "./merge": 1718689573663
  } [e], e)
})), t(1718689573663, (function(e, t, n) {
  var a = function e(t, n) {
      return Object.keys(n).forEach((function(a, r) {
        o(n[a]) ? e(t[a], n[a]) : t[a] = n[a]
      })), t
    },
    o = function(e) {
      return "[object Object]" === Object.prototype.toString.call(e)
    };
  t.exports = function(e, t) {
    return a(e, t)
  }
}), (function(e) {
  return n({} [e], e)
})), n(1718689573652));