var e, t, r, n, i, a = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  s = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  c = require("../../comm/utils/util"),
  o = require("../../comm/storage.js"),
  u = require("../comm/local.js"),
  l = require("../comm/packet").p4b2886c6,
  d = require("../comm/model/riskmodel.js"),
  m = require("../comm/model/featuremodel.js"),
  p = require("../comm/rcode"),
  f = require("../../comm/proxy.js"),
  g = require("../sign/sign"),
  v = require("../comm/consts/consts.js"),
  b = require("../utils/tokenutil.js"),
  I = require("../utils/signature.js"),
  y = require("../../comm/utils/encryptutil.js"),
  k = (require("../../comm/utils/logutil.js"), require("../statis/statisProxy")),
  E = require("../comm/feature/touchs/feature_touchs.js"),
  S = new f.Handle(v.Statis_Name + v.Statis_Interface_Risktoken),
  _ = "",
  T = d.b567507b2();

function h() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    t = arguments.length > 1 ? arguments[1] : void 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
  if (!c.isEmpty(t)) {
    var i = (new Date).getTime(),
      a = i + 1e3 * e,
      s = t + "||" + i + "||" + a + "||" + n;
    _ = n, o.setLocal(r, s)
  }
}

function q(e, t, r, n, i) {
  return O.apply(this, arguments)
}

function O() {
  return (O = s(a().mark((function r(s, m, f, v, b) {
    var y, S, _, q, O;
    return a().wrap((function (r) {
      for (;;) switch (r.prev = r.next) {
        case 0:
          return T.timestamp = (new Date).getTime(), y = u.getUUID(n, t.tk, t.rk) + "", T.deviceObj[1] = y, T.deviceObj[2] = s + "", S = e.args ? e.args.implement : null, T.deviceObj[122] = E.f36a0cb61(S), k.doStatisTimeEvent(b, k.eventId.EId_TId_GRft_Start), _ = [], r.next = 10, e.featurebuilder.b8bf33e58(T.deviceObj, e, _);
        case 10:
          k.doStatisTimeEvent(b, k.eventId.EId_TId_GRft_End, p.commCode.SUCCESS, _.toString()), q = JSON.stringify(T), (q = JSON.parse(q)).statisticsInfo[11] = k.getReqId(b), q.statisticsInfo[10] = I.sign(q.timestamp, q.deviceObj), O = l(q, q.sdkInfo.channel, y, t.rk), k.doStatisTimeEvent(b, k.eventId.EId_TId_GRisk_Start), f.request(O, (function (r) {
            k.doStatisTimeEvent(b, k.eventId.EId_TId_GRisk_End);
            var n = d.buildDetectM(p.commCode.SUCCESS);
            if (r.data && r.data.resp) {
              n.ret = r.data.resp.ret, n.deviceToken = r.data.resp.msgBlock;
              var a = c.isEmpty(r.data.resp.signKey) ? "" : r.data.resp.signKey;
              h(r.data.resp.overtime, n.deviceToken, a), c.isEmpty(r.data.resp.token) || o.setLocal(t.rk, r.data.resp.token), c.isEmpty(r.data.resp.ctrlFlags) || o.setLocal(i, r.data.resp.ctrlFlags), r.data.resp.signKey && r.data.resp.signKeySeq && g.saveSignKey(e.salt, r.data.resp.signKeySeq, r.data.resp.signKey), n.ret != p.CODE_RISK_TOKEN_INVALID_1 && n.ret != p.CODE_RISK_TOKEN_INVALID_2 || o.delLocal(t.rk)
            }
            null != m && m(n)
          }), (function (e) {
            var t = "number" != typeof e.ret ? 0 : e.ret,
              r = d.buildDetectM(p.castRiskCode(t));
            r.err = e.err || "", k.doStatisTimeEvent(b, k.eventId.EId_TId_GRisk_End, r.ret, r.err), null != m && m(r)
          }), e.config.riskUrl);
        case 18:
        case "end":
          return r.stop()
      }
    }), r)
  })))).apply(this, arguments)
}

function R(e, t, n, i, a) {
  var s = f.buildBizImplement();
  s.handleBiz = function (t, a, s) {
    var u = o.getLocal(r);
    if (c.isEmpty(u)) q(e, t, n, i, s);
    else {
      if (i) {
        var l = u.split("||"),
          d = l[0],
          m = l[1],
          p = l[2],
          f = (new Date).getTime() - m,
          g = p - m;
        if (Math.abs(f) < Math.abs(g)) return void t({
          ret: 0,
          deviceToken: d
        })
      }
      q(e, t, n, i, s)
    }
  }, s.handleError = function (e, t) {
    return d.buildDetectM(p.commCode.ERROR_BIZ_CRASH, "", "", e)
  }, s.handleTimeout = function (e, t) {
    var r = d.buildDetectM();
    r.ret = p.ERROR_BIZ_TIME_OUT, e(r)
  }, S.proxyHandle(t, s, {
    statisHandle: a
  })
}

function j() {
  return (j = s(a().mark((function r(i) {
    var s, c;
    return a().wrap((function (r) {
      for (;;) switch (r.prev = r.next) {
        case 0:
          return T.timestamp = (new Date).getTime(), T.deviceObj[1] = u.getUUID(n, t.tk, t.rk) + "", T.deviceObj[2] = i + "", s = e.args ? e.args.implement : null, T.deviceObj[122] = E.f36a0cb61(s), r.next = 7, e.featurebuilder.b8bf33e58(T.deviceObj, e, []);
        case 7:
          return c = JSON.stringify(T), (c = JSON.parse(c)).statisticsInfo[10] = I.sign(c.timestamp, c.deviceObj), r.abrupt("return", c);
        case 11:
        case "end":
          return r.stop()
      }
    }), r)
  })))).apply(this, arguments)
}

function D() {
  return (D = s(a().mark((function r(i, o, l, p, f, g) {
    return a().wrap((function (r) {
      for (;;) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", new Promise(function () {
            var r = s(a().mark((function r(s, v) {
              var S, h, q, O, R, j, D, K, N, w;
              return a().wrap((function (r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    if (r.prev = 0, S = e.featurebuilder.bac496093(T.sdkInfo.channel, T.productInfo.requestPackageName), h = p.cache ? 0 : 1, (q = d.b615db065(S, h)).ret = i, c.isEmpty(l)) {
                      r.next = 9;
                      break
                    }
                    q.deviceToken = l, r.next = 37;
                    break;
                  case 9:
                    if (T.timestamp = (new Date).getTime(), O = T.deviceObj, c.isEmpty(f) && (O = m.bd279861f()), R = u.getUUID(n, t.tk, t.rk) + "", O[1] = R, O[2] = f, j = e.args ? e.args.implement : null, O[122] = E.f36a0cb61(j), D = [], !c.isEmpty(f)) {
                      r.next = 24;
                      break
                    }
                    return r.next = 21, e.featurebuilder.baa821607(O, e, D, p.page);
                  case 21:
                    r.t0 = r.sent, r.next = 27;
                    break;
                  case 24:
                    return r.next = 26, e.featurebuilder.b8bf33e58(O, e, D);
                  case 26:
                    r.t0 = r.sent;
                  case 27:
                    O = r.t0, K = JSON.stringify(T), K = JSON.parse(K), N = JSON.stringify(O), K.deviceObj = JSON.parse(N), K.statisticsInfo[11] = k.getReqId(g), K.statisticsInfo[10] = I.sign(K.timestamp, K.deviceObj), q.raw = K, q.signKey = x(), c.isEmpty(q.signKey) && (_ = y.randomSignKey(), q.signKey = _);
                  case 37:
                    q.msg = o + "", w = b.v1f664446("v3", e.config.sdkInfo.platform, q.timestamp, q, e.config.xxteaKeyPre), s(w), r.next = 45;
                    break;
                  case 42:
                    r.prev = 42, r.t1 = r.catch(0), v(r.t1);
                  case 45:
                  case "end":
                    return r.stop()
                }
              }), r, null, [
                [0, 42]
              ])
            })));
            return function (e, t) {
              return r.apply(this, arguments)
            }
          }()));
        case 1:
        case "end":
          return r.stop()
      }
    }), r)
  })))).apply(this, arguments)
}

function x() {
  var e = "",
    t = o.getLocal(r);
  if (!c.isEmpty(t)) {
    var n = t.split("||");
    return n.length >= 4 && (e = n[3]), e
  }
  return _
}
module.exports = {
  initRisk: function (a, s) {
    e = a, T.sdkInfo = e.config.sdkInfo;
    var c = e.args.clientInfo;
    T.clientInfo.requestSeq = c.requestSeq || "", T.clientInfo.metaData = c.metaData || "", T.clientInfo.channel = c.channel || "", T.clientInfo.buildNo = c.buildNo || 0, T.clientInfo.version = c.version || "", T.clientInfo.lc = c.lc || "", T.clientInfo.extraInfo = c.extraInfo || "", T.clientInfo.wx_appid = e.account.appid;
    var o = e.args.subappid;
    T.clientInfo.appid = o || "";
    var l = e.args.type;
    T.clientInfo.type = l || 0, e.args.type = T.clientInfo.type, T.extraIds[1] = e.args.accountId || "", t = u.buildTokenKeys(e.salt), T.productInfo.clientVer = e.args.productInfo.clientVer || "", T.productInfo.requestPackageName = e.args.productInfo.requestPackageName || "", r = u.buildDeviceTokenKey(e.salt), n = u.buildUUidKey(e.salt), i = u.buildCtrFlagKey(e.salt);
    var d = a.args ? e.args.implement : null;
    E.monitor(d)
  },
  getRisk: function (e, t, n, a, s) {
    if (c.isEmpty(e)) {
      t(d.buildDetectM(p.ERROR_BIZ_DETECT_NOTICKET))
    } else {
      if (!a) {
        var u = o.getLocal(i);
        "number" != typeof u && (u = u || 0), 1 == u && (a = !0)
      }
      if (a) {
        var l = o.getLocal(r);
        if (c.isEmpty(l)) return void R(e, t, n, a, s);
        var m = l.split("||"),
          f = m[0],
          g = m[1],
          v = m[2],
          b = (new Date).getTime() - g,
          I = v - g,
          y = d.buildDetectM(p.commCode.SUCCESS, f);
        if (Math.abs(b) < Math.abs(I)) return void t(y);
        t(y), t = null
      }
      R(e, t, n, a, s)
    }
  },
  getRisk3058693f: function (e) {
    return j.apply(this, arguments)
  },
  getRisk3058693fV3: function (e, t, r, n, i, a) {
    return D.apply(this, arguments)
  },
  getLocalDeviceToken: function () {
    var e = o.getLocal(r);
    return c.isEmpty(e) ? "" : e.split("||")[0]
  },
  getSignKey: x
};