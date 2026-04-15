Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = exports.api = void 0;
var e = require("./@babel/runtime/helpers/regeneratorRuntime.js"),
  t = require("./@babel/runtime/helpers/asyncToGenerator.js"),
  n = require("./@babel/runtime/helpers/classCallCheck.js"),
  o = require("./@babel/runtime/helpers/createClass.js"),
  i = require("miniprogram_npm/mini-i18n/index.js"),
  a = function(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
      default: e
    };
    var n = r(t);
    if (n && n.has(e)) return n.get(e);
    var o = {},
      i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e)
      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
        var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
        s && (s.get || s.set) ? Object.defineProperty(o, a, s) : o[a] = e[a]
      } o.default = e, n && n.set(e, o);
    return o
  }(require("C070D367AD7FA6DFA616BB605C640E96.js"));

function r(e) {
  if ("function" != typeof WeakMap) return null;
  var t = new WeakMap,
    n = new WeakMap;
  return (r = function(e) {
    return e ? n : t
  })(e)
}
var s = ["personalReserve/queryPersonal"],
  u = new(function() {
    function r() {
      n(this, r)
    }
    var u, p;
    return o(r, [{
      key: "baseOptions",
      value: function(e, t, n, o) {
        var r = getApp(),
          u = e.url,
          p = e.data,
          c = "application/json";
        return c = e.contentType || c, new Promise((function(e, l) {
          var m = {
            "content-type": c,
            Accept: "application/json"
          };
          1 === n ? "" != r.globalData.authorizationc ? (m.AuthorizationC = r.globalData.authorizationc, m.token = (0, a.default)(), m.appId = a.appId) : (m.token = (0, a.default)(), m.appId = a.appId) : 2 === n ? (m.token = (0, a.default)(), m.appId = a.appId) : 3 === n ? (m.Authorizationu = r.globalData.authorizationu, m["Login-Type"] = "mobile") : 4 === n && (m.AuthorizationC = r.globalData.authorizationc, m.token = (0, a.default)(), m.appId = a.appId, m["Login-Type"] = "mobile"), wx.request({
            url: u,
            data: p,
            method: t,
            header: m,
            timeout: o,
            success: function(t) {
              console.info("请求", u, m, p), 200 == t.statusCode ? (e(t.data), console.info("响应", t.data)) : (t.statusCode, -1 != s.findIndex((function(e) {
                return -1 != u.indexOf(e)
              })) || wx.showToast({
                title: (0, i.t)("home.tooMany1"),
                icon: "none",
                duration: 2e3
              }), l(t))
            },
            fail: function(e) {
              console.info("请求", u, m, p), console.error("请求失败", JSON.stringify(e)), l({
                msg: JSON.stringify(e),
                url: u,
                method: t,
                data: p
              })
            }
          })
        }))
      }
    }, {
      key: "get",
      value: (p = t(e().mark((function t(n) {
        var o, i, a, r, s = arguments;
        return e().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return o = s.length > 1 && void 0 !== s[1] ? s[1] : {}, i = s.length > 2 && void 0 !== s[2] ? s[2] : 1, a = s.length > 3 && void 0 !== s[3] ? s[3] : 6e4, r = {
                url: n,
                data: o
              }, e.abrupt("return", this.baseOptions(r, "GET", i, a));
            case 5:
            case "end":
              return e.stop()
          }
        }), t, this)
      }))), function(e) {
        return p.apply(this, arguments)
      })
    }, {
      key: "post",
      value: (u = t(e().mark((function t(n) {
        var o, i, a, r, s, u = arguments;
        return e().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return o = u.length > 1 && void 0 !== u[1] ? u[1] : {}, i = u.length > 2 && void 0 !== u[2] ? u[2] : 1, a = u.length > 3 && void 0 !== u[3] ? u[3] : void 0, r = u.length > 4 && void 0 !== u[4] ? u[4] : 6e4, s = {
                url: n,
                data: o,
                contentType: a
              }, e.abrupt("return", this.baseOptions(s, "POST", i, r));
            case 6:
            case "end":
              return e.stop()
          }
        }), t, this)
      }))), function(e) {
        return u.apply(this, arguments)
      })
    }]), r
  }());
exports.default = u;
var p = {};
exports.api = p, p.saas = "https://newticket.szmuseum.com/japi/sw-saas-cloud/", p.trm = "https://newticket.szmuseum.com/japi/sw-trm-cloud/", p.trmSign = "https://newticket.szmuseum.com/japi/sw-trm-sign/", p.cms = "https://newticket.szmuseum.com/japi/sw-cms/", p.activity = "https://newticket.szmuseum.com/japi/sw-act-cloud/", p.exh = "https://newticket.szmuseum.com/japi/sw-exh-cloud/", p.vol = "https://newticket.szmuseum.com/japi/sw-vol-cloud/", p.vip = "https://newticket.szmuseum.com/japi/sw-vip-cloud/", p.storeVip = "https://newticket.szmuseum.com/japi/sw-poi-cloud/", p.sbDynamic = "https://api.szmuseum.com/API/CMS/", p.file = "https://newticket.szmuseum.com/japi/sw-file-cloud/", p.fileLoad = "https://newticket.szmuseum.com/file/", p.cockpit = "https://newticket.szmuseum.com/japi/";