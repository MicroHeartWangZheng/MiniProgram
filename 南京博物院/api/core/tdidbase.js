var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../comm/utils/util.js"),
  i = require("./comm/rcode.js"),
  r = require("./comm/model/riskmodel.js"),
  o = require("./comm/model/dfpmodel.js"),
  a = require("./comm/model/initmodel.js"),
  c = require("./comm/model/riskargs.js").buildRiskArgs,
  d = require("./comm/model/ticketargs.js").buildTicketArgs,
  u = require("./tdid.js"),
  l = require("../comm/proxy.js"),
  s = require("./statis/statisProxy.js"),
  _ = require("./comm/consts/consts.js"),
  I = require("../comm/utils/logutil.js"),
  T = require("./comm/rcode.js"),
  v = new l.Handle(_.Statis_Name + _.Statis_Interface_Init),
  m = new l.Handle(_.Statis_Name + _.Statis_Interface_Ticket),
  f = new l.Handle(_.Statis_Name + _.Statis_Interface_Token);

function g() {
  return u.getCctx()
}

function E(e, t, n, r, o) {
  if (g().inited) {
    var c = a.buildInitModel(i.commCode.SUCCESS, "", _.SDK_INIED);
    n && n(c)
  } else {
    var d = l.buildBizImplement();
    d.handleBizStart = function (e) {
      s.doStatisDefaultEvent(e, s.eventId.EId_TId_Init_Start)
    }, d.handleBiz = function (n, i, o) {
      u.init(e, t, (function (e) {
        n(a.buildInitModel(e.ret, s.getReqId(o), e.err))
      }), r, o)
    }, d.handleTimeout = function (e, t) {
      e(a.buildInitModel(i.ERROR_BIZ_INIT_TIME_OUT, s.getReqId(t)))
    }, d.handleError = function (e, t) {
      return a.buildInitModel(i.commCode.ERROR_BIZ_CRASH, s.getReqId(t), e)
    }, d.handleBizEnd = function (e, t) {
      var n = e && e.resp ? e.resp : "",
        r = n ? n.ret : i.commCode.ERROR_RESULT_ISEMPTY,
        o = n && n.err ? n.err : "";
      s.doStatisTimeEvent(t, s.eventId.EId_TId_Init_End, r, o), s.reportStatis(t, g())
    }, v.proxyHandle(n, d, {
      statisHandle: s.buildStatisHandle(t.channel, _.Statis_Name + _.Statis_Interface_Init, g().isStatis(t.isStatis), o)
    })
  }
}

function S(e, t, n) {
  if (!g().inited) {
    var r = o.buildTickM(i.ERROR_BIZ_INIT, "", "", _.SDK_NOT_INIT);
    return I.error(_.SDK_NOT_INIT), void(e && e(r))
  }
  var a = l.buildBizImplement();
  a.handleBizStart = function (e) {
    s.doStatisDefaultEvent(e, s.eventId.EId_TId_GTt_Start)
  }, a.handleBiz = function (e, n, i) {
    u.getTicket((function (t) {
      e(o.buildTickM(t.ret, t.ticketID, s.getReqId(i), t.err))
    }), t, i)
  }, a.handleTimeout = function (e, t) {
    e(o.buildTickM(i.ERROR_BIZ_TICKET_TIME_OUT, "", s.getReqId(t)))
  }, a.handleError = function (e, t) {
    return o.buildTickM(i.commCode.ERROR_BIZ_CRASH, "", s.getReqId(t), e)
  }, a.handleBizEnd = function (e, t) {
    var n = e && e.resp ? e.resp : "",
      r = n ? n.ret : i.commCode.ERROR_RESULT_ISEMPTY,
      o = n && n.err ? n.err : "";
    s.doStatisTimeEvent(t, s.eventId.EId_TId_GTt_End, r, o), s.reportStatis(t, g())
  }, m.proxyHandle(e, a, {
    statisHandle: s.buildStatisHandle(g().config.sdkInfo.channel, _.Statis_Name + _.Statis_Interface_Ticket, g().isStatis(), n)
  })
}

function R(e, t, n, i) {
  return D.apply(this, arguments)
}

function D() {
  return (D = t(e().mark((function t(o, a, c, v) {
    var m, E, S, R, D;
    return e().wrap((function (e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (g().inited) {
            e.next = 5;
            break
          }
          return m = r.buildDetectM(i.ERROR_BIZ_INIT, "", "", _.SDK_NOT_INIT), I.error(_.SDK_NOT_INIT), o && o(m), e.abrupt("return");
        case 5:
          return e.next = 7, u.existCanvasNode(a.page);
        case 7:
          if (!(E = e.sent) || E.ret == T.commCode.SUCCESS) {
            e.next = 14;
            break
          }
          if (S = r.buildDetectM(E.ret, "", "", E.err), I.error(JSON.stringify(S)), !o) {
            e.next = 14;
            break
          }
          return o(S), e.abrupt("return");
        case 14:
          (R = l.buildBizImplement()).handleBizStart = function (e) {
            s.doStatisDefaultEvent(e, s.eventId.EId_TId_GT_Start)
          }, R.handleBiz = function (e, t, o) {
            var c = d();
            c.page = a.page ? a.page : null, s.doStatisDefaultEvent(o, s.eventId.EId_TId_GTt_Start), u.getTicket((function (t) {
              s.doStatisTimeEvent(o, s.eventId.EId_TId_GTt_End, t.ret, t.err);
              var c = r.buildDetectM();
              v >= _.Device_Token_Version_3 ? u.getDeviceTokenV3((function (t) {
                c.ret = t.ret, c.deviceToken = t.deviceToken, c.err = t.err, c.seq = s.getReqId(o), e(c)
              }), a, t, o) : u.getDeviceToken((function (t) {
                c.ret = t.ret, c.deviceToken = t.deviceToken, c.err = t.err, c.seq = s.getReqId(o), c.ret == i.commCode.SUCCESS || a.cache ? e(c) : u.getLocalDeviceToken((function (t) {
                  n.isEmpty(t) || (c.ret = i.commCode.SUCCESS, c.deviceToken = t, c.err = ""), e(c)
                }))
              }), a, t, o)
            }), c, o)
          }, R.handleTimeout = function (e, t) {
            var o = r.buildDetectM(i.ERROR_BIZ_TIME_OUT);
            o.seq = s.getReqId(t), v >= _.Device_Token_Version_3 ? u.getLocalDeviceTokenV3((function (t) {
              n.isEmpty(t) || (o.ret = i.commCode.SUCCESS, o.deviceToken = t), e(o)
            }), a, o.ret, o.err, t) : u.getLocalDeviceToken((function (t) {
              n.isEmpty(t) || (o.ret = i.commCode.SUCCESS, o.deviceToken = t), e(o)
            }))
          }, R.handleError = function (e, t) {
            return r.buildDetectM(i.commCode.ERROR_BIZ_CRASH, "", s.getReqId(t), e)
          }, R.handleBizEnd = function (e, t) {
            var n = e && e.resp ? e.resp : "",
              r = n ? n.ret : i.commCode.ERROR_RESULT_ISEMPTY,
              o = n && n.err ? n.err : "";
            s.doStatisTimeEvent(t, s.eventId.EId_TId_GT_End, r, o), s.reportStatis(t, g())
          }, D = (D = a.timeout && n.isNumber(a.timeout) && a.timeout > 0 ? a.timeout : 0) <= 0 ? g().timeout : D, f.proxyHandle(o, R, {
            timeout: D,
            statisHandle: s.buildStatisHandle(g().config.sdkInfo.channel, _.Statis_Name + _.Statis_Interface_Token, g().isStatis(), c)
          });
        case 23:
        case "end":
          return e.stop()
      }
    }), t)
  })))).apply(this, arguments)
}

function h(e, t, n, o) {
  if (!g().inited) {
    var a = r.buildDetectM(i.ERROR_BIZ_INIT, "", "", _.SDK_NOT_INIT);
    return I.error(_.SDK_NOT_INIT), void(e && e(a))
  }
  R((function (t) {
    u.getDeviceTokenInfo((function (n) {
      if (null != e) {
        var i = r.buildDetectInfoM(n.ret, n.deviceTokenInfo, t.seq, n.err);
        e(i)
      }
    }), t)
  }), t, n, o)
}

function k(e, t) {
  var i = c();
  return i.cache = e, i.page = t.page ? t.page : null, i.timeout = t.timeout && n.isNumber(t.timeout) && t.timeout > 0 ? t.timeout : 0, i
}

function b(e) {
  var t = d();
  return t.page = e.page ? e.page : null, t
}
var p = {
  baseInit: function (e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      o = arguments.length > 3 ? arguments[3] : void 0,
      c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
    try {
      E(e, t, r, o, c)
    } catch (e) {
      var d = a.buildInitModel(i.ERROR_BIZ_INIT, "", n.getError(e));
      I.error("tdidbase_tdid_init", d, e), null != r && r(d)
    }
  },
  getBaseTicket: function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d(),
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    try {
      S(e, b(t), r)
    } catch (t) {
      var a = o.buildTickM(i.ERROR_BIZ_TICKET, "", "", n.getError(t));
      null != e && e(a)
    }
  },
  getBaseDeviceTokenInfoV3: function (e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c(),
      a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    try {
      h(e, k(t, o), a, _.Device_Token_Version_3)
    } catch (t) {
      var d = r.buildDetectInfoM(i.ERROR_BIZ_DETECT, "", "", n.getError(t));
      null != e && e(d)
    }
  },
  getBaseDeviceTokenV3: function (e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c(),
      a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    try {
      R(e, k(t, o), a, _.Device_Token_Version_3)
    } catch (t) {
      var d = r.buildDetectM(i.ERROR_BIZ_DETECT, "", "", n.getError(t));
      null != e && e(d)
    }
  },
  getBaseDeviceTokenInfo: function (e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c(),
      a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    try {
      h(e, k(t, o), a, _.Device_Token_Version_2)
    } catch (t) {
      var d = r.buildDetectInfoM(i.ERROR_BIZ_DETECT, "", "", n.getError(t));
      null != e && e(d)
    }
  },
  getBaseDeviceTokenV2: function (e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c(),
      a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    try {
      R(e, k(t, o), a, _.Device_Token_Version_2)
    } catch (t) {
      var d = r.buildDetectM(i.ERROR_BIZ_DETECT, "", "", n.getError(t));
      null != e && e(d)
    }
  },
  getBaseDeviceToken: function (e) {
    this.getDeviceTokenV2(e, !1)
  },
  getBaseSDKVer: function () {
    try {
      return u.getSDKVer()
    } catch (e) {
      return ""
    }
  },
  getBaseDeviceInfo: function () {
    return u.getDeviceInfo()
  },
  get3058693f: function () {
    return u.get3058693f()
  },
  baseActivateSign: function (e) {
    return u.activateSign(e)
  },
  baseSignData: function (e) {
    return u.signData(e)
  },
  baseIsActivate: function () {
    return u.isActivate()
  },
  getBaseCctx: function () {
    return g()
  }
};
module.exports = p;