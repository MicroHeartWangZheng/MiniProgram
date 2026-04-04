var e, t, i, r, n, a = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  c = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("../../comm/utils/util"),
  d = require("../utils/signature.js"),
  s = require("../../comm/storage.js"),
  l = require("../comm/local.js"),
  u = require("../comm/packet").p4b2886c6,
  f = require("../comm/model/dfpmodel.js"),
  I = require("../comm/punish"),
  m = require("../comm/rcode"),
  p = require("../../comm/proxy.js"),
  k = require("../comm/consts/consts.js"),
  T = (require("../../comm/utils/logutil.js"), require("../statis/statisProxy")),
  v = new p.Handle(k.Statis_Name + k.Statis_Interface_Dfpticket),
  _ = f.ba1e86003();

function E() {
  return (E = c(a().mark((function t(n, c, o, f, I) {
    var p, k, v, E;
    return a().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          return p = b(), _.featureObj[1] = p, _.featureObj[2] = l.getLocalTicket(i).ticket + "", _.timestamp = (new Date).getTime(), T.doStatisTimeEvent(I, T.eventId.EId_TId_GDft_Start), k = [], t.next = 8, e.featurebuilder.bc4bf3e6e(_.featureObj, e, k, f.page);
        case 8:
          v = JSON.stringify(_), v = JSON.parse(v), T.doStatisTimeEvent(I, T.eventId.EId_TId_GDft_End, m.commCode.SUCCESS, k.toString()), v.statisticsInfo[11] = T.getReqId(I), v.statisticsInfo[10] = d.sign(v.timestamp, v.featureObj), E = u(v, v.sdkInfo.channel, p, r.tk), T.doStatisTimeEvent(I, T.eventId.EId_TId_GDfp_Start), o.request(E, (function (e) {
            var t = null;
            if (0 === e.ret && e.data && e.data.resp) {
              if (t = e.data.resp, T.doStatisTimeEvent(I, T.eventId.EId_TId_GDfp_End, t.ret), t.ret >= 0) {
                var a = "";
                t.extraIds && t.extraIds[0] && (a = t.extraIds[0]), l.setTicket(i, t.ticketID, t.overtime, a), s.setLocal(r.tk, t.token), t.ret = 0
              }
              t.ret == m.CODE_RET_INVALID_REQ && s.delLocal(r.tk), "function" == typeof n && n(t)
            } else if (e && e.data && e.data.resp && e.data.resp.ret == m.CODE_RET_INVALID_REQ && s.delLocal(r.tk), "function" == typeof c) {
              var o = {
                ret: e && e.ret ? e.ret : m.ERROR_BIZ_TICKET_FAILD,
                err: ""
              };
              c(o)
            }
          }), c, e.config.apiUrl);
        case 16:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}

function g(e, t, r, a) {
  var c = p.buildBizImplement();
  c.handleBiz = function (e, a, c) {
    var d = l.getLocalTicket(i),
      s = d.ticket,
      u = d.tdid;
    if (!d.expired && d.ticket) {
      var p = f.buildTickM(m.commCode.SUCCESS, s);
      return o.isEmpty(u) || (p.tdid = u), void(null != e && e(p))
    }! function (e, t, i, r, n) {
      E.apply(this, arguments)
    }((function (t) {
      var i = "";
      t.ticketID && (i = t.ticketID), "" === i || null === i ? m.isExternalFactors(t.ret) || I.saveFaild(n.faildk) : (I.delByKey(n.timesk), I.delByKey(n.faildk));
      var r = f.buildTickM(t.ret, i);
      t.extraIds && t.extraIds[0] && (r.tdid = t.extraIds[0]), null != e && e(r)
    }), (function (t) {
      I.saveFaild(n.faildk);
      var i = t && "number" != typeof t.ret ? 0 : t.ret,
        r = f.buildTickM(m.castDfpCode(i));
      s && (r.ticketID = s), o.isEmpty(u) || (r.tdid = u), r.err = t.err || "", T.doStatisTimeEvent(c, T.eventId.EId_TId_GDfp_End, r.ret, r.err), null != e && e(r)
    }), t, r, c)
  }, c.handleError = function (e, t) {
    return f.buildTickM(m.commCode.ERROR_BIZ_CRASH, "", "", e)
  }, c.handleTimeout = function (e, t) {
    e(f.buildTickM(m.ERROR_BIZ_TICKET_TIME_OUT))
  }, v.proxyHandle(e, c, {
    statisHandle: a
  })
}

function b() {
  return l.getUUID(t, r.tk, r.rk) + ""
}
module.exports = {
  initDfp: function (a, c) {
    e = a, _.requireType = e.config.requireType, _.sdkInfo = e.config.sdkInfo, t = l.buildUUidKey(e.salt), r = l.buildTokenKeys(e.salt), i = l.buildTicketKey(e.salt), n = l.buildTuringPunishKey(e.salt), a.uuid = b(), _.sdkInfo.channel = e.args.channel || "", _.productInfo.clientVer = e.args.productInfo.clientVer || "", _.productInfo.requestPackageName = e.args.productInfo.requestPackageName || "";
    var o = e.args.clientInfo;
    _.clientInfo.requestSeq = o.requestSeq || "", _.clientInfo.metaData = o.metaData || "", _.clientInfo.channel = o.channel || "", _.clientInfo.buildNo = o.buildNo || 0, _.clientInfo.version = o.version || "", _.clientInfo.lc = o.lc || "", _.clientInfo.extraInfo = o.extraInfo || "", _.clientInfo.wx_appid = e.account.appid;
    var d = e.args.subappid;
    _.clientInfo.appid = d || "";
    var s = e.args.type;
    _.clientInfo.type = s || 0, e.args.type = _.clientInfo.type, _.extraIds[1] = e.args.accountId || ""
  },
  getDfpTicket: function (e, t, r, a) {
    var c = l.getLocalTicket(i),
      d = c.ticket,
      s = c.tdid;
    if (!c.expired && c.ticket) {
      var u = f.buildTickM(m.commCode.SUCCESS, d);
      o.isEmpty(s) || (u.tdid = s), null != e && e(u)
    } else {
      if (c.ticket) {
        var p = f.buildTickM(m.commCode.SUCCESS, d);
        null != e && e(p), e = null
      }
      if (I.isLmitByTimes(n.timesk) && I.isLimitByHalfHour(n.timesk)) {
        var k = f.buildTickM(m.ERROR_BIZ_TIMES_LIMIT);
        return void(null != e && e(k))
      }
      if (I.isLimitByFaild(n.faildk, n.timesk)) {
        var T = f.buildTickM(m.ERROR_BIZ_FAILD_LIMIT);
        return void(null != e && e(T))
      }
      var v = (new Date).getTime();
      I.saveTimes(n.timesk, v), g(e, t, r, a)
    }
  },
  getDfpLocalTicket: function () {
    return l.getLocalTicket(i)
  }
};