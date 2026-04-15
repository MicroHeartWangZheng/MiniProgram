Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.cancelTrialProjectOrder = function(e) {
  return r.default.post(r.api.exh + "applet/trialProjectReserve/cancelOrder", e)
}, exports.changeStatusBeforeRefund = function(e, t, o, i) {
  return r.default.post(r.api.exh + "order/noticeToRefund", {
    orderId: e,
    displayInfoId: t,
    reserveDate: o,
    childOrderIds: i,
    remark: ""
  })
}, exports.checkExchangeTicket = function(e) {
  return r.default.post(r.api.exh + "order/checkExchangeTicket", {
    orderId: e
  })
}, exports.closeExhOrder = function(e) {
  return r.default.get(r.api.exh + "order/closeOrder", {
    orderId: e
  })
}, exports.closeOrder = function(e) {
  return r.default.post(r.api.exh + "applet/trialProjectReserve/closeOrder", {
    orderId: e
  })
}, exports.confirmPayOrder = function(e) {
  return r.default.post(r.api.exh + "applet/trialProjectReserve/confirmPayOrder", {
    orderId: e
  })
}, exports.exchangeTicket = function(e) {
  return r.default.post(r.api.exh + "order/exchangeTicket", e)
}, exports.exhEncryptSP = function() {
  return r.default.post(r.api.exh + "order/encryptSP", {})
}, exports.exhibitionAppointQueryImgCode = function() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
  return r.default.post(r.api.exh + "order/queryImgCode", {
    type: e
  })
}, exports.exhibitionQueryOrderDetail = function(e) {
  return r.default.get(r.api.exh + "order/queryOrderDetails/" + e, {})
}, exports.exhibitionQueryOrderHexiaoDetail = function(e) {
  return r.default.get(r.api.exh + "specialShow/queryTodayVisitList/" + e, {})
}, exports.exhibitionQueryOrderList = function(e) {
  return r.default.post(r.api.exh + "order/queryOrder", {
    param: {
      pageSize: 10,
      pageNum: e
    },
    entity: {}
  })
}, exports.exihibitionConfirmOrder = function(e) {
  return r.default.post(r.api.exh + "order/confirmOrder", {
    orderId: e,
    openId: getApp().globalData.openId,
    payType: "WXPay"
  })
}, exports.exihibitionPayment = function(e) {
  return r.default.post(r.api.exh + "order/payment", {
    orderId: e,
    openId: getApp().globalData.openId,
    type: 1
  })
}, exports.exihibitionRefund = function(e, t, o, i) {
  return r.default.post(r.api.exh + "order/unsubscribe", {
    orderId: e,
    displayInfoId: t,
    reserveDate: o,
    childOrderIds: i,
    remark: "",
    source: "EXH0305"
  })
}, exports.getExhibitionTicketType = function(e) {
  return r.default.get(r.api.exh + "specialShow/getTicketType", {
    id: e
  })
}, exports.getLatestPoster = function() {
  return r.default.get(r.api.exh + "specialShow/getLatestPoster", {}, 2)
}, exports.getReserveDate = function(e) {
  return r.default.post(r.api.exh + "applet/trialProjectReserve/getReserveDate", {
    displayInfoId: e
  })
}, exports.getReserveProject = function(e, t) {
  return r.default.post(r.api.exh + "applet/trialProjectReserve/getReserveProject", {
    displayInfoId: e,
    reserveDate: t
  })
}, exports.getTrialProjectOrderDetail = function(e) {
  return r.default.get(r.api.exh + "applet/trialProjectReserve/getOrderDetail", {
    orderId: e
  })
}, exports.getTrialProjectOrderList = function(e) {
  return r.default.post(r.api.exh + "applet/trialProjectReserve/queryOrderPageList", {
    param: {
      pageSize: 10,
      pageNum: e
    }
  })
}, exports.payment = function(e) {
  return r.default.post(r.api.exh + "applet/trialProjectReserve/payment", {
    openId: getApp().globalData.openId,
    orderId: e,
    source: "1",
    type: "1"
  })
}, exports.queryExhibition = function(e, t, o) {
  var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
  return r.default.post(r.api.exh + "specialShow/queryByPage", {
    param: {
      pageSize: i,
      pageNum: t
    },
    entity: {
      companyInfoId: e,
      name: o,
      recommend: a
    }
  }, 2)
}, exports.queryExhibitionBookRule = function(e) {
  return r.default.get(r.api.exh + "exhBookRule/queryBookRule/" + e, {})
}, exports.queryExhibitionById = function(e) {
  return r.default.get("".concat(r.api.exh, "specialShow/queryById/"), {
    id: e
  })
}, exports.queryExhibitionTicketById = function(e, t) {
  return r.default.get("".concat(r.api.exh, "specialShow/ticket?id=").concat(e, "&isEarlyBird=").concat(t))
}, exports.submitExhibitionOrder = function(t) {
  return r.default.post(r.api.exh + "order/submitOrder", e(e({}, t), {}, {
    imgCode: "",
    source: "EXH0305"
  }))
}, exports.submitFreeOrder = function(e, t, o, i, a, n, p) {
  return r.default.post(r.api.exh + "order/submitFreeOrder", {
    displayInfoId: e,
    reserveDate: t,
    reserveTime: o,
    appContactsList: i,
    imgCode: a,
    source: "EXH0305",
    isSubmit: n,
    ticketTypeId: p,
    openId: getApp().globalData.openId
  })
}, exports.submitOrder = function(e) {
  return r.default.post(r.api.exh + "applet/trialProjectReserve/submitOrder", e)
};
var e = require("./@babel/runtime/helpers/objectSpread2.js"),
  r = function(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
      default: e
    };
    var o = t(r);
    if (o && o.has(e)) return o.get(e);
    var i = {},
      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var n in e)
      if ("default" !== n && Object.prototype.hasOwnProperty.call(e, n)) {
        var p = a ? Object.getOwnPropertyDescriptor(e, n) : null;
        p && (p.get || p.set) ? Object.defineProperty(i, n, p) : i[n] = e[n]
      } i.default = e, o && o.set(e, i);
    return i
  }(require("AC0CE581AD7FA6DFCA6A8D86B5E30E96.js"));

function t(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap,
    o = new WeakMap;
  return (t = function(e) {
    return e ? o : r
  })(e)
}