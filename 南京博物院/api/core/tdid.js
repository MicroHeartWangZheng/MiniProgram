var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("./ctx/corectx"),
  n = r.cctx,
  i = r.initCtx,
  c = r.getSDKInfo,
  o = r.existCanvasNode,
  u = require("../comm/utils/util"),
  a = require("./dfp/dfp"),
  l = require("./risk/risk"),
  f = require("./comm/rcode"),
  s = require("./comm/model/riskmodel.js"),
  v = require("./comm/model/dfpmodel.js"),
  g = require("./sign/sign"),
  d = require("./utils/tokenutil.js"),
  k = require("../comm/utils/logutil.js");

function E(e, t, r, i) {
  var c = r ? r.ret : f.ERROR_BIZ_TICKET_FAILD,
    o = r ? r.ticketID : "";
  if (!o) {
    var u = s.buildDetectM(c);
    return r && r.err && (u.err = r.err), void e(u)
  }
  l.getRisk(o, e, n.netWork, t.cache, i)
}
var T = {
  init: function (e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      n = arguments.length > 3 ? arguments[3] : void 0,
      c = arguments.length > 4 ? arguments[4] : void 0;
    i(e, t, r, n, c, a, l)
  },
  getTicket: function (e, t, r) {
    try {
      ! function (e, t, r) {
        a.getDfpTicket(e, n.netWork, t, r)
      }(e, t, r)
    } catch (t) {
      var i = v.buildTickM(f.ERROR_BIZ_TICKET, "", "", u.getError(t));
      null != e && e(i)
    }
  },
  getDeviceToken: function (e, t, r, n) {
    try {
      E(e, t, r, n)
    } catch (t) {
      var i = s.buildDetectM(f.ERROR_BIZ_DETECT, "", "", u.getError(t));
      null != e && e(i)
    }
  },
  getDeviceTokenV3: function (e, t, r, n) {
    try {
      ! function (e, t, r, n) {
        E((function (r) {
          if (f.isExternalFactors(r.ret)) e(r);
          else {
            var i = r.deviceToken;
            u.isEmpty(i) && t.cache && (i = l.getLocalDeviceToken());
            var c = "";
            if (u.isEmpty(i)) {
              var o = a.getDfpLocalTicket();
              c = o && o.ticket ? o.ticket : ""
            }
            l.getRisk3058693fV3(r.ret, r.err, i, t, c, n).then((function (t) {
              var r = s.buildDetectM(f.commCode.SUCCESS, t);
              null != e && e(r)
            })).catch((function (t) {
              var r = s.buildDetectM(f.ERROR_BIZ_DETECT, "", "", u.getError(t));
              null != e && e(r)
            }))
          }
        }), t, r, n)
      }(e, t, r, n)
    } catch (r) {
      this.getLocalDeviceTokenV3((function (t) {
        if (u.isEmpty(t)) {
          var n = s.buildDetectM(f.ERROR_BIZ_DETECT, "", "", u.getError(r));
          null != e && e(n)
        } else {
          var i = s.buildDetectM(f.commCode.SUCCESS, t);
          null != e && e(i)
        }
      }), t, f.ERROR_BIZ_DETECT, u.getError(r), n)
    }
  },
  getLocalDeviceToken: function (e) {
    try {
      var t = l.getLocalDeviceToken();
      null != e && e(t)
    } catch (t) {
      null != e && e("")
    }
  },
  getLocalDeviceTokenV3: function (e, t, r) {
    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
      i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
    try {
      var c = t.cache ? l.getLocalDeviceToken() : "",
        o = "";
      if (u.isEmpty(c)) {
        var f = a.getDfpLocalTicket();
        o = f && f.ticket ? f.ticket : ""
      }
      l.getRisk3058693fV3(r, n, c, t, o, i).then((function (t) {
        null != e && e(t)
      })).catch((function (t) {
        null != e && e("")
      }))
    } catch (t) {
      null != e && e("")
    }
  },
  getDeviceTokenInfo: function (r, i) {
    try {
      ! function (r, i) {
        var c = s.buildDetectInfoM(i.ret);
        0 === i.ret && i.deviceToken ? new Promise(function () {
          var r = t(e().mark((function t(r) {
            var i;
            return e().wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, n.featurebuilder.b5d16ffe3();
                case 2:
                  i = e.sent, i = JSON.stringify(i), r(i);
                case 5:
                case "end":
                  return e.stop()
              }
            }), t)
          })));
          return function (e) {
            return r.apply(this, arguments)
          }
        }()).then((function (e) {
          var t = l.getSignKey(),
            n = d.v312e7988(i.deviceToken, e, t);
          null != r && (c.deviceTokenInfo = n, r(c))
        })).catch((function (e) {
          c.ret = f.ERROR_BIZ_DETECT, c.err = u.getError(e), null != r && r(c)
        })) : (c.err = i.err, null != r && r(c))
      }(r, i)
    } catch (e) {
      var c = s.buildDetectInfoM(f.ERROR_BIZ_DETECT, "", "", u.getError(e));
      null != r && r(c)
    }
  },
  getCctx: function () {
    return n
  },
  existCanvasNode: function (e) {
    try {
      return o(e)
    } catch (e) {
      return k.error("tdid_existCanvasNode_err", e), ""
    }
  },
  getSDKVer: function () {
    try {
      return c()
    } catch (e) {
      return k.error("tdid_tdid_getSDKVer", e), ""
    }
  },
  getDeviceInfo: function () {
    return n.featurebuilder.b5d16ffe3()
  },
  get3058693f: function () {
    return e = a.getDfpLocalTicket(), l.getRisk3058693f(e.ticket);
    var e
  },
  activateSign: function (e) {
    return g.activateSign(n.salt, e)
  },
  signData: function (e) {
    return g.signData(n.salt, e)
  },
  isActivate: function () {
    return g.isActivate(n.salt)
  }
};
module.exports = T;