var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  n = (require("../../comm/utils/logutil"), require("../../comm/utils/util")),
  i = require("./model/riskmodel"),
  r = require("./feature/feature_systeminfo"),
  f = require("./feature/feature_networktype"),
  a = require("./feature/feature_beacons"),
  s = require("./feature/feature_wifi"),
  u = require("./feature/feature_minpcanvas"),
  o = require("./feature/feature_minpwebgl"),
  c = require("./feature/feature_sorterfp"),
  d = require("./feature/feature_offscreencanvas"),
  p = require("./feature/feature_offscreenwebgl"),
  l = require("./feature/feature_bssid"),
  m = require("./feature/feature_lnglat"),
  b = require("./feature/feature_localip"),
  h = require("./feature/feature_login"),
  y = require("./consts/consts.js"),
  g = require("./consts/ft_code"),
  v = require("../comm/packet"),
  E = require("../../comm/utils/murmurhash2"),
  U = require("../utils/promiseutil"),
  w = null,
  S = 0,
  q = {
    ftSystemInfo: null,
    ftNetworkType: null,
    ftBeacons: null,
    ftWifi: null,
    ftMinpcanvas: null,
    ftMinpwebgl: null,
    ftOffscreenCanvas: null,
    ftOffscreenWebgl: null,
    ftSorterFp: null,
    ftBssid: null,
    ftLnglat: null,
    ftLocalip: null,
    ftLogincode: null
  };

function k(e) {
  n.isUndefined(e[1]) || (e[1] = e[1] ? v.p2baeeec4(e[1], v.pb89649de, !0) + "" : "")
}

function x(e, t) {
  n.isUndefined(e[4]) || (e[4] = t && !n.isEmpty(t.platform) ? t.platform + "" : "")
}

function C(e, t) {
  n.isUndefined(e[43]) || (e[43] = t && !n.isEmpty(t.networkType) ? t.networkType + "" : "")
}

function _(e, t) {
  var i = t.args.openid;
  0 == t.args.type ? n.isUndefined(e[101]) || (e[101] = i || "") : n.isUndefined(e[119]) || (e[119] = i || "")
}

function A(e, t) {
  n.isUndefined(e[103]) || (e[103] = t && !n.isEmpty(t.SDKVersion) ? t.SDKVersion + "" : "")
}

function I(e, t) {
  n.isUndefined(e[104]) || (e[104] = t && !n.isEmpty(t.brand) ? t.brand + "" : "")
}

function L(e, t) {
  n.isUndefined(e[105]) || (e[105] = t && !n.isEmpty(t.model) ? t.model + "" : "")
}

function N(e, t) {
  n.isUndefined(e[106]) || (e[106] = t && !n.isEmpty(t.screenHeight) ? t.screenHeight + "*" + t.screenWidth : "")
}

function T(e, t) {
  n.isUndefined(e[107]) || (e[107] = t && !n.isEmpty(t.system) ? t.system + "" : "")
}

function z(e, t) {
  n.isUndefined(e[108]) || (e[108] = t && !n.isEmpty(t.language) ? t.language + "" : "")
}

function O(e, t, i) {
  n.isUndefined(e[109]) || (t = JSON.stringify(t), e[109] = t && !n.isEmpty(t) ? v.p2baeeec4(t, E.hash32(i + "109", 256), !0) + "" : "")
}

function D(e, t, i) {
  n.isUndefined(e[110]) || (t = JSON.stringify(t), e[110] = t && !n.isEmpty(t) ? v.p2baeeec4(t, E.hash32(i + "110", 256), !0) + "" : "")
}

function B(e, t) {
  n.isUndefined(e[111]) || (e[111] = t && !n.isEmpty(t.version) ? t.version + "" : "")
}

function M(e, t) {
  n.isUndefined(e[116]) || (e[116] = t && !n.isEmpty(t.statusBarHeight) ? t.statusBarHeight + "" : "")
}

function W(e, t) {
  n.isUndefined(e[117]) || (e[117] = t && !n.isEmpty(t.benchmarkLevel) ? t.benchmarkLevel + "" : "")
}

function F(e, t) {
  if (!n.isUndefined(e[118])) {
    var i = "";
    if (t) i = (t.albumAuthorized ? Number(t.albumAuthorized) : 0) + ":" + (t.cameraAuthorized ? Number(t.cameraAuthorized) : 0) + ":" + (t.locationAuthorized ? Number(t.locationAuthorized) : 0) + ":" + (t.microphoneAuthorized ? Number(t.microphoneAuthorized) : 0) + ":" + (t.notificationAuthorized ? Number(t.notificationAuthorized) : 0) + ":" + (t.bluetoothEnabled ? Number(t.bluetoothEnabled) : 0) + ":" + (t.locationEnabled ? Number(t.locationEnabled) : 0) + ":" + (t.wifiEnabled ? Number(t.wifiEnabled) : 0);
    e[118] = i + ""
  }
}

function H(e, t) {
  if (!n.isUndefined(e[121])) {
    var i = t && !n.isEmpty(t) ? t + "" : "";
    e[121] = i + ""
  }
}

function J(e, t) {
  if (!n.isUndefined(e[123])) {
    var i = t && !n.isEmpty(t) ? t + "" : "";
    e[123] = i + ""
  }
}

function V(e, t) {
  n.isUndefined(e[124]) || (e[124] = t && !n.isEmpty(t.enableDebug) ? t.enableDebug + "" : "")
}

function K(e, t) {
  n.isUndefined(e[126]) || (e[126] = t && !n.isEmpty(t.fontSizeSetting) ? t.fontSizeSetting + "" : "")
}

function j(e, t) {
  n.isUndefined(e[127]) || (e[127] = t.account.version || "")
}

function G(e, t) {
  n.isUndefined(e[128]) || (e[128] = t && !n.isEmpty(t) ? t + "" : "")
}

function R(e, t) {
  n.isUndefined(e[129]) || (e[129] = t.account.envVersion || "")
}

function P(e, t) {
  n.isUndefined(e[130]) || (e[130] = t || "")
}

function Q(e, t, i) {
  if (!n.isUndefined(e[1e3]) && !n.isEmpty(t)) {
    var r = E.hash32(t, 256);
    e[1e3] = v.p2baeeec4(r, E.hash32(i + "1000", 256), !0)
  }
}

function X(e, t, i) {
  if (!n.isUndefined(e[1001]) && !n.isEmpty(t)) {
    var r = E.hash32(t, 256);
    e[1001] = v.p2baeeec4(r, E.hash32(i + "1001", 256), !0)
  }
}

function Y(e, t, i) {
  n.isUndefined(e[1002]) || (e[1002] = t && !n.isEmpty(t.cpu_id) ? v.p2baeeec4(t.cpu_id, E.hash32(i + "1002", 256), !0) + "" : "")
}

function Z(e, t, i) {
  n.isUndefined(e[1003]) || n.isEmpty(t) || (e[1003] = t && !n.isEmpty(t.uid) ? v.p2baeeec4(t.uid, E.hash32(i + "1003", 256), !0) + "" : "")
}

function $(e, t, i) {
  if (!n.isUndefined(e[1006]) && !n.isEmpty(t)) {
    var r = E.hash32(t, 256);
    e[1006] = v.p2baeeec4(r, E.hash32(i + "1006", 256), !0)
  }
}

function ee(e, t, i) {
  if (!n.isUndefined(e[1007]) && !n.isEmpty(t)) {
    var r = E.hash32(t, 256);
    e[1007] = v.p2baeeec4(r, E.hash32(i + "1007", 256), !0)
  }
}

function te(e, t) {
  var i = 0 != e.ret || n.isEmpty(e.res) ? "" : e.res;
  if (n.isEmpty(i) && !n.isEmpty(e.err)) t.push(e.err);
  else {
    var r = {
      ftCode: e.ftCode,
      dur: e.dur
    };
    t.push(JSON.stringify(r))
  }
  return i
}

function ne(e, t) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n],
      r = te(i, t);
    i.ftCode == g.e8ea8e9dd ? q.ftBeacons = r : i.ftCode == g.e269dceda ? q.ftMinpcanvas = r : i.ftCode == g.edfded145 ? q.ftMinpwebgl = r : i.ftCode == g.e2eafb921 ? q.ftNetworkType = r : i.ftCode == g.e16b9dd22 ? q.ftOffscreenCanvas = r : i.ftCode == g.e8ad9d921 ? q.ftOffscreenWebgl = r : i.ftCode == g.e83362615 ? q.ftSystemInfo = r : i.ftCode == g.e314c686d ? q.ftWifi = r : i.ftCode == g.e1915f732 ? q.ftSorterFp = r : i.ftCode == g.e60dfd20a ? q.ftLocalip = r : i.ftCode == g.e77816d81 ? q.ftLogincode = r : i.ftCode == g.ef371cec8 ? q.ftBssid = r : i.ftCode == g.e701a9308 && (q.ftLnglat = r)
  }
}

function ie(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : q,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
  k(e), x(e, n.ftSystemInfo), C(e, n.ftNetworkType), _(e, t), A(e, n.ftSystemInfo), I(e, n.ftSystemInfo), L(e, n.ftSystemInfo), N(e, n.ftSystemInfo), T(e, n.ftSystemInfo), z(e, n.ftSystemInfo), O(e, n.ftBeacons, i), D(e, n.ftWifi, i), B(e, n.ftSystemInfo), M(e, n.ftSystemInfo), W(e, n.ftSystemInfo), F(e, n.ftSystemInfo), H(e, n.ftLnglat), J(e, n.ftBssid), V(e, n.ftSystemInfo), K(e, n.ftSystemInfo), j(e, t), G(e, n.ftLocalip), R(e, t), P(e, n.ftLogincode), Q(e, n.ftMinpcanvas, i), X(e, n.ftMinpwebgl, i), Y(e, n.ftSorterFp, i), Z(e, n.ftSorterFp, i), $(e, n.ftOffscreenCanvas, i), ee(e, n.ftOffscreenWebgl, i)
}

function re() {
  return (re = t(e().mark((function t() {
    var n;
    return e().wrap((function (e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return n = {}, e.abrupt("return", n);
        case 2:
        case "end":
          return e.stop()
      }
    }), t)
  })))).apply(this, arguments)
}

function fe() {
  return (fe = t(e().mark((function t(i, r) {
    var f, a, s, c, l, m, b, g = arguments;
    return e().wrap((function (e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (f = g.length > 2 && void 0 !== g[2] ? g[2] : [], a = g.length > 3 && void 0 !== g[3] ? g[3] : null, !n.isEmpty(i)) {
            e.next = 4;
            break
          }
          return e.abrupt("return", {});
        case 4:
          if (s = r.feature, c = i[2] || i[1] || "", (new Date).getTime(), l = [u.f3a14f72(a, s), o.fc290d0fe(a, s)], n.isUndefined(i[130]) || n.isEmpty(q.ftLogincode) || l.push(h.f5483132b()), m = !1, !((new Date).getTime() - S >= y.Feature_Timeout && w)) {
            e.next = 17;
            break
          }
          return e.next = 14, w;
        case 14:
          ne(e.sent, f), m = !0;
        case 17:
          return m ? (!n.isUndefined(i[1006]) && n.isEmpty(q.ftOffscreenCanvas) && l.push(d.f7c96989f()), !n.isUndefined(i[1007]) && n.isEmpty(q.ftOffscreenWebgl) && l.push(p.ff2a44dcd())) : w || (l = (l = l.concat(ue(r))).concat(oe(r)), m = !0), e.next = 20, U.promiseAll(l);
        case 20:
          if (b = e.sent, m || !w) {
            e.next = 27;
            break
          }
          return e.next = 24, w;
        case 24:
          ne(e.sent, f), m = !0;
        case 27:
          return ne(b, f), ie(i, r, q, c), e.abrupt("return", i);
        case 30:
        case "end":
          return e.stop()
      }
    }), t)
  })))).apply(this, arguments)
}

function ae() {
  return (ae = t(e().mark((function t(i, a) {
    var u, o, c, d, p, g, v = arguments;
    return e().wrap((function (e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (u = v.length > 2 && void 0 !== v[2] ? v[2] : [], !n.isEmpty(i)) {
            e.next = 3;
            break
          }
          return e.abrupt("return", {});
        case 3:
          if (o = a.feature, c = a.args ? a.args.implement : null, d = (new Date).getTime(), !(d - S < 2 * y.Feature_Timeout && w)) {
            e.next = 19;
            break
          }
          return p = [m.fa8fd8a44(c)], e.next = 11, U.promiseAll(p);
        case 11:
          return ne(e.sent, u), e.next = 15, w;
        case 15:
          ne(e.sent, u), e.next = 25;
          break;
        case 19:
          return g = [r.f782e7cf3(o), f.f590f88c6(), s.f5728c379(o), l.f67c942c5(c), m.fa8fd8a44(c), b.ffeddad0f()], n.isEmpty(q.ftLogincode) && g.push(h.f5483132b()), e.next = 23, U.promiseAll(g);
        case 23:
          ne(e.sent, u);
        case 25:
          return ie(i, a, q, ""), e.abrupt("return", i);
        case 27:
        case "end":
          return e.stop()
      }
    }), t)
  })))).apply(this, arguments)
}

function se() {
  return (se = t(e().mark((function t(i, r) {
    var f, a, s, c, d, p, l, b = arguments;
    return e().wrap((function (e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (f = b.length > 2 && void 0 !== b[2] ? b[2] : [], a = b.length > 3 && void 0 !== b[3] ? b[3] : null, !n.isEmpty(i)) {
            e.next = 4;
            break
          }
          return e.abrupt("return", {});
        case 4:
          return s = r.feature, c = r.args ? r.args.implement : null, d = i[2] || i[1] || "", (new Date).getTime(), p = [], !n.isUndefined(i[1e3]) && n.isEmpty(q.ftMinpcanvas) && p.push(u.f3a14f72(a, s)), !n.isUndefined(i[1001]) && n.isEmpty(q.ftMinpwebgl) && p.push(o.fc290d0fe(a, s)), !n.isUndefined(i[121]) && n.isEmpty(q.ftLnglat) && p.push(m.fa8fd8a44(c)), l = U.promiseAll(p), e.next = 15, w;
        case 15:
          return ne(e.sent, f), e.next = 19, l;
        case 19:
          return ne(e.sent, f), ie(i, r, q, d), e.abrupt("return", i);
        case 23:
        case "end":
          return e.stop()
      }
    }), t)
  })))).apply(this, arguments)
}

function ue(e) {
  var t = e.feature;
  return [r.f782e7cf3(t), f.f590f88c6(), s.f5728c379(t), b.ffeddad0f(), h.f5483132b()]
}

function oe(e) {
  var t = e.feature;
  return [a.f9b094045(t), d.f7c96989f(), p.ff2a44dcd(), c.f585445(t)]
}

function ce(e) {
  var t = e.args ? e.args.implement : null;
  return [l.f67c942c5(t)]
}

function de() {
  return (de = t(e().mark((function t(n, i) {
    var r;
    return e().wrap((function (e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return (new Date).getTime(), r = (r = (r = []).concat(ue(n))).concat(ce(n)), i && (r = r.concat(oe(n))), w = U.promiseAll(r), S = (new Date).getTime(), e.abrupt("return", w);
        case 8:
        case "end":
          return e.stop()
      }
    }), t)
  })))).apply(this, arguments)
}
module.exports = {
  b5d16ffe3: function () {
    return re.apply(this, arguments)
  },
  bac496093: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      n = i.bf73daae1();
    return n[1] = "", n[2] = "", n[3] = "" + e, n[4] = "" + t, n
  },
  bc4bf3e6e: function (e, t) {
    return fe.apply(this, arguments)
  },
  b8bf33e58: function (e, t) {
    return ae.apply(this, arguments)
  },
  baa821607: function (e, t) {
    return se.apply(this, arguments)
  },
  b9109f6bd: function (e, t) {
    return de.apply(this, arguments)
  }
};