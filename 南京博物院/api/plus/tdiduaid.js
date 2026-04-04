var e = require("../core/tdidbase"),
  t = require("../comm/utils/networkutil"),
  i = require("../comm/proxy.js"),
  n = require("./statis/eventid"),
  a = require("../core/statis/statisProxy"),
  r = require("./comm/rcode"),
  s = require("./expand/expand.js"),
  o = require("./utils/tokenutil.js"),
  u = require("./comm/const.js"),
  d = require("../comm/utils/util"),
  c = require("../core/comm/model/riskargs.js").buildRiskArgs,
  l = require("../core/comm/model/ticketargs.js").buildTicketArgs,
  m = new i.Handle(u.Statis_Name_Uaid + u.Statis_Interface_Init),
  v = new i.Handle(u.Statis_Name_Uaid + u.Statis_Interface_Token);

function T(e, t, i) {
  s.getExpandToken(u.BIZ_FLAGS_UAID, t, i).then((function (t) {
    e(t)
  }))
}

function _(e, t, i) {
  var n = {
    ret: 0,
    deviceToken: ""
  };
  if (null == t) return n.ret = r.ERROR_GET_DEVICETOKEN, void(null != e && e(n));
  if (0 != t.ret) return n.ret = t.ret, void(null != e && e(n));
  if (null != e) {
    var a = null == i ? {
        result: r.ERROR_UTOKEN_NULL
      } : i,
      s = o.castToken("x1", t, a);
    n.deviceToken = s, e(n)
  }
}
module.exports = {
  uaidInit: function (o, d, c) {
    var l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t,
      v = i.buildBizImplement();
    v.handleBizStart = function (e) {
      a.doStatisDefaultEvent(e, n.EId_UId_Init_Start)
    }, v.handleBiz = function (t, i, n) {
      if (d) {
        var a = d.timeout ? d.timeout : 2e4;
        d.timeout = a
      }
      e.baseInit(o, d, (function (i) {
        s.initExpand(e.getBaseCctx()), t(i)
      }), l, n)
    }, v.handleBizEnd = function (t, i) {
      var s = t && t.resp ? t.resp : "",
        o = s ? s.ret : r.commCode.ERROR_RESULT_ISEMPTY,
        u = s && s.err ? s.err : "";
      a.doStatisTimeEvent(i, n.EId_UId_Init_End, o, u), a.reportStatis(i, e.getBaseCctx())
    }, m.proxyHandle(c, v, {
      statisHandle: a.buildStatisHandle(d.channel, u.Statis_Name_Uaid + u.Statis_Interface_Init, e.getBaseCctx().isStatis(d.isStatis), null)
    })
  },
  getUaidTicket: e.getBaseTicket,
  getUaidDeviceToken: e.getBaseDeviceToken,
  getUaidDeviceTokenV2: e.getBaseDeviceTokenV2,
  getUaidDeviceTokenV3: e.getBaseDeviceTokenV3,
  getUaidDeviceTokenX: function (t) {
    var s = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c(),
      m = i.buildBizImplement();
    m.riskRsp = null, m.uTokenRsp = null, m.handleBizStart = function (e) {
      a.doStatisDefaultEvent(e, n.EId_UId_GT_Start)
    }, m.handleBiz = function (t, i, n) {
      var a = l();
      a.page = o.page ? o.page : null, e.getBaseTicket((function (i) {
        var a = i.ticketID;
        if (!d.isEmpty(a)) {
          var r = !1;
          return e.getBaseDeviceTokenV3((function (e) {
            m.riskRsp = e, null == m.uTokenRsp || r || (r = !0, _(t, m.riskRsp, m.uTokenRsp))
          }), s, o, n), void T((function (e) {
            m.uTokenRsp = e, null == m.riskRsp || r || (r = !0, _(t, m.riskRsp, m.uTokenRsp))
          }), a, n)
        }
        var u = {
          ret: 0,
          deviceToken: ""
        };
        i.err && (u.err = i.err), u.ret = i.ret, t(u)
      }), a, n)
    }, m.handleTimeout = function (e, t) {
      if (null == m.riskRsp) {
        var i = {
          ret: 0,
          deviceToken: ""
        };
        i.ret = r.commCode.ERROR_TIMEOUT, e(i)
      } else {
        var n = {
          result: r.commCode.ERROR_TIMEOUT
        };
        _(e, m.riskRsp, n)
      }
    }, m.handleBizEnd = function (t, i) {
      var s = t && t.resp ? t.resp : "",
        o = s ? s.ret : r.commCode.ERROR_RESULT_ISEMPTY,
        u = s && s.err ? s.err : "";
      a.doStatisTimeEvent(i, n.EId_UId_GT_End, o, u), a.reportStatis(i, e.getBaseCctx())
    };
    var k = o.timeout && d.isNumber(o.timeout) && o.timeout > 0 ? o.timeout : 0;
    k = k <= 0 ? e.getBaseCctx().timeout : k, v.proxyHandle(t, m, {
      timeout: k,
      statisHandle: a.buildStatisHandle(e.getBaseCctx().config.sdkInfo.channel, u.Statis_Name_Uaid + u.Statis_Interface_Token, e.getBaseCctx().isStatis(), null)
    })
  },
  getUaidSDKInfo: e.getBaseSDKVer,
  getUaidDeviceInfo: e.getBaseDeviceInfo,
  uaidActivateSign: e.baseActivateSign,
  uaidSignData: e.baseSignData,
  uaidIsActivate: e.baseIsActivate
};