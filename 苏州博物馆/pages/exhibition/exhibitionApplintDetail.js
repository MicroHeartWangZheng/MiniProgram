require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  a = require("../../E83DACF5AD7FA6DF8E5BC4F28CD30E96.js"),
  n = function(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
      default: e
    };
    var r = o(t);
    if (r && r.has(e)) return r.get(e);
    var a = {},
      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e)
      if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
        var d = n ? Object.getOwnPropertyDescriptor(e, i) : null;
        d && (d.get || d.set) ? Object.defineProperty(a, i, d) : a[i] = e[i]
      } a.default = e, r && r.set(e, a);
    return a
  }(require("../../04BA0E47AD7FA6DF62DC664011540E96.js"));
require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js");

function o(e) {
  if ("function" != typeof WeakMap) return null;
  var t = new WeakMap,
    r = new WeakMap;
  return (o = function(e) {
    return e ? r : t
  })(e)
}
var i, d = getApp(),
  s = -1;

function c(e, t) {
  console.log("特展id" + t), (0, r.showLoading)(), (0, a.exhibitionQueryOrderDetail)(t).then((function(t) {
    if ((0, r.hideLoading)(), 200 == t.code) {
      var o = t.data;
      (0, a.queryExhibitionBookRule)(o.displayInfoId).then((function(t) {
        200 == t.code && t.data && e.setData({
          bookRule: t.data
        })
      })).catch((function(e) {
        console.error("获取预约规则配置失败", e)
      })), o.isPackage = o.childOrderList.some((function(e) {
        return 1 == e.isPackage
      })) ? 1 : 0, 0 === o.orderStatus && (e.setData({
        payEndTime: o.cutTime.replace(/-/g, "/")
      }), e.countDown()), o.childOrderList.forEach((function(e, t) {
        e.selected = !1
      })), null === o.subscribeEndDate || "" === o.subscribeEndDate ? o.timeLabelStr = o.subscribeStartDate + " 开幕" : o.timeLabelStr = o.subscribeStartDate + " 至 " + o.subscribeEndDate, o.priceStr = 0 == o.orderCost || null == o.orderCost ? "免费" : "¥" + o.orderCost;
      var i = !1;
      i = 1 == o.isPackage ? null != o.childOrderList && o.childOrderList.every((function(e) {
        return 1 == e.reserveStatus || 4 == e.reserveStatus || 7 == e.reserveStatus
      })) : null != o.childOrderList && o.childOrderList.some((function(e) {
        return 1 == e.reserveStatus || 4 == e.reserveStatus || 7 == e.reserveStatus
      }));
      var d = null != o.childOrderList && o.childOrderList.some((function(e) {
        return (1 == e.reserveStatus || 3 == e.reserveStatus) && 1 == e.isReserveTrial
      }));
      e.setData({
        model: o,
        canRefund: i,
        canBuyTrial: d,
        canExchange: null != o.childOrderList && o.childOrderList.some((function(e) {
          return 7 == e.reserveStatus
        }))
      }, (function() {
        o.childOrderList.forEach((function(e, t) {
          if (7 != e.reserveStatus) {
            var r = "canvas" + t;
            (0, n.default)(e.childOrderId, r)
          }
        }))
      }))
    } else(0, r.toast)(t.msg)
  }))
}

function l(e, t, r) {
  if (!e.reserveDate) return 0;
  var a = new Date;
  if (a.setHours(0, 0, 0, 0), r) {
    var n = new Date(r.replace(/-/g, "/"));
    if (n.setHours(0, 0, 0, 0), a > n) return t.costRatioEnd || 0
  }
  var o = new Date(e.reserveDate.replace(/-/g, "/"));
  o.setHours(0, 0, 0, 0);
  var i = Math.floor((o - a) / 864e5);
  return i > 0 ? t.costRatioBefore || 0 : 0 === i ? t.costRatio || 0 : t.costRatioAfter || 0
}

function u(e, t, r, a, n) {
  var o = [];
  if (1 == a) {
    var i = l(e[0], t, r),
      d = n,
      s = parseFloat((d * i / 100).toFixed(2)),
      c = parseFloat((d - s).toFixed(2));
    o.push("票价：" + d + "元 退票手续费：" + s + "元 应退金额：" + c + "元。")
  } else e.forEach((function(e) {
    var a = l(e, t, r),
      n = e.orderCost,
      i = parseFloat((n * a / 100).toFixed(2)),
      d = parseFloat((n - i).toFixed(2));
    o.push("【" + e.name + "】票价：" + n + "元 退票手续费：" + i + "元 应退金额：" + d + "元。")
  }));
  return o.join("") + "退款将在7-10个工作日退回到原支付账户，是否确定退订？"
}
Page({
  options: {
    pureDataPattern: /^_/
  },
  data: {
    orderId: "",
    model: {},
    memberArr: [],
    qrcode_w: (0, n.rpx2px)(320),
    payEndTime: "",
    orderStatusStr: "",
    refundChildOrderIdArr: [],
    canRefund: !1,
    canExchange: !1,
    brightness: .5,
    canBuyTrial: !1,
    bookRule: null
  },
  onLoad: function(e) {
    var t = this;
    console.log(e), this.setData({
      orderId: e.orderListId
    }), "" != d.globalData.authorizationc ? c(this, e.orderListId) : ((0, r.showLoading)(), d.tokenReadyCallback = function(a) {
      (0, r.hideLoading)(), 200 == a.code ? c(t, e.orderListId) : 100 == a.code ? (0, r.navigateTo)("../login/login") : (0, r.modal)("系统异常，" + a.code + "，" + a.msg)
    }, d.tokenFailedCallback = function(e) {
      (0, r.hideLoading)(), (0, r.modal)(e)
    })
  },
  onShow: function() {
    var e = this;
    wx.getScreenBrightness({
      success: function(t) {
        e.setData({
          brightness: t.value
        }), wx.setScreenBrightness({
          value: 1,
          success: function(e) {
            console.log("设置高亮成功")
          },
          fail: function(e) {
            console.log("设置高亮失败" + e)
          }
        })
      },
      fail: function(e) {
        console.log(e)
      }
    })
  },
  payBtnClick: function() {
    ! function(e) {
      (0, r.showLoading)("加载中...", !0);
      var t = e.data.model;
      (0, a.exihibitionPayment)(t.orderId).then((function(t) {
        wx.hideLoading(), 200 == t.code ? (console.log("获取支付参数成功"), null != t.data && wx.requestPayment({
          timeStamp: t.data.timeStamp,
          nonceStr: t.data.nonceStr,
          package: t.data.package,
          signType: t.data.signType,
          paySign: t.data.paySign,
          appId: wx.getAccountInfoSync().miniProgram.appId,
          success: function() {
            c(e, e.data.orderId), (0, r.toast)("支付成功")
          },
          fail: function(e) {
            console.error("支付失败" + e)
          },
          complete: function() {}
        })) : (0, r.toast)("支付失败，" + t.msg)
      }))
    }(this)
  },
  orderListClick: function(e) {
    if (1 != this.data.model.isPackage) {
      var t = parseInt(e.currentTarget.dataset.index),
        r = this.data.model.childOrderList;
      if (1 == r[t].reserveStatus || 4 == r[t].reserveStatus || 7 == r[t].reserveStatus) {
        r[t].selected = !r[t].selected;
        var a = this.data.refundChildOrderIdArr;
        if (r[t].selected) a.push(r[t].childOrderId);
        else {
          t = a.indexOf(r[t].childOrderId);
          a.splice(t, 1)
        }
        this.data.model.childOrderList = r, this.setData({
          refundChildOrderIdArr: a,
          "model.childOrderList": r
        })
      }
    }
  },
  cancelBtnClick: (i = t(e().mark((function t() {
    var n, o, i, d, s, l, h = this;
    return e().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (console.log(this.data.refundChildOrderIdArr), n = this, o = [], i = [], 1 == this.data.model.isPackage ? (o = this.data.model.childOrderList.map((function(e) {
              return e.childOrderId
            })), i = this.data.model.childOrderList) : (o = this.data.refundChildOrderIdArr, i = this.data.model.childOrderList.filter((function(e) {
              return o.includes(e.childOrderId)
            }))), !(n.data.model.orderCost <= 0)) {
            e.next = 8;
            break
          }
          return (0, r.modalWithCancel)("确定退订吗？", (function() {
            (0, r.showLoading)("加载中...", !0), (0, a.exihibitionRefund)(h.data.model.orderId, h.data.model.displayInfoId, h.data.model.orderTime, o).then((function(e) {
              (0, r.hideLoading)(), 200 == e.code ? (e.data.status, (0, r.modal)(e.data.orderMessage), c(n, n.data.orderId)) : (console.debug("退订失败" + e.msg), (0, r.modal)("退订失败，" + e.msg))
            })).catch((function(e) {
              (0, r.hideLoading)(), (0, r.toast)("退订失败"), console.debug("退订失败", e)
            }))
          })), e.abrupt("return");
        case 8:
          if (d = n.data.bookRule) {
            e.next = 23;
            break
          }
          return (0, r.showLoading)("加载配置中..."), e.prev = 11, e.next = 14, (0, a.queryExhibitionBookRule)(n.data.model.displayInfoId);
        case 14:
          s = e.sent, (0, r.hideLoading)(), 200 == s.code && s.data && (d = s.data, n.setData({
            bookRule: d
          })), e.next = 23;
          break;
        case 19:
          e.prev = 19, e.t0 = e.catch(11), (0, r.hideLoading)(), console.error("获取预约规则配置失败", e.t0);
        case 23:
          if (d) {
            e.next = 26;
            break
          }
          return (0, r.modal)("获取配置失败，请重试"), e.abrupt("return");
        case 26:
          l = u(i, d, n.data.model.subscribeEndDate, n.data.model.isPackage, n.data.model.orderCost), (0, r.modalWithCancel)(l, (function() {
            (0, r.showLoading)("加载中...", !0), (0, a.changeStatusBeforeRefund)(n.data.model.orderId, n.data.model.displayInfoId, n.data.model.orderTime, o).then((function(e) {
              200 == e.code ? (n.setData({
                refundChildOrderIdArr: []
              }), (0, a.exihibitionRefund)(n.data.model.orderId, n.data.model.displayInfoId, n.data.model.orderTime, o).then((function(e) {
                (0, r.hideLoading)(), 200 == e.code ? (e.data.status, (0, r.modal)(e.data.orderMessage), c(n, n.data.orderId)) : ((0, r.hideLoading)(), console.debug("退订失败" + e.msg), (0, r.modal)("退款失败，" + e.msg))
              })).catch((function(e) {
                (0, r.hideLoading)(), (0, r.modal)("退款异常，" + JSON.stringify(e)), console.debug("退订失败", e)
              }))) : ((0, r.hideLoading)(), (0, r.modal)("修改订单状态失败，暂时不能退款，" + e.msg))
            })).catch((function(e) {
              (0, r.hideLoading)(), (0, r.modal)("修改订单状态异常，暂时不能退款，" + JSON.stringify(e)), console.debug("退订失败", e)
            }))
          }));
        case 28:
        case "end":
          return e.stop()
      }
    }), t, this, [
      [11, 19]
    ])
  }))), function() {
    return i.apply(this, arguments)
  }),
  timeFormat: function(e) {
    return e < 10 ? "0" + e : e
  },
  recoverScreenBrightnes: function() {
    var e = wx.getDeviceInfo();
    wx.setScreenBrightness({
      value: "android" === e.platform ? -1 : this.data.brightness,
      success: function(e) {
        console.log("恢复亮度成功")
      },
      fail: function(e) {
        console.log("恢复亮度失败" + e)
      }
    })
  },
  onUnload: function() {
    -1 != s && clearInterval(s), this.recoverScreenBrightnes()
  },
  countDown: function() {
    var e = this; - 1 != s && clearInterval(s);
    var t = new Date(this.data.payEndTime).getTime();
    s = setInterval((function() {
      var r = "00",
        a = "00",
        n = "00",
        o = (new Date).getTime();
      if (t - o > 0) {
        var i = (t - o) / 1e3;
        r = e.timeFormat(parseInt(i % 86400 / 3600)), a = e.timeFormat(parseInt(i % 86400 % 3600 / 60)), n = e.timeFormat(parseInt(i % 86400 % 3600 % 60));
        var d = r > 0 ? "支付中（付款倒计时:" + r + "小时" + a + "分" + n + "秒）" : "支付中（付款倒计时:" + a + "分" + n + "秒）";
        e.setData({
          orderStatusStr: d
        })
      } else clearInterval(s), s = -1, wx.navigateBack()
    }), 1e3)
  },
  reserveTrialClick: function() {
    var e = this.data.model;
    this.recoverScreenBrightnes(), (0, r.navigateTo)("../appointment/guide/selectTime?type=3&exhId=".concat(e.displayInfoId, "&exhName=").concat(encodeURIComponent(e.name)))
  },
  exchangeBtnClick: function() {
    var e = this,
      t = this.data.model;
    (0, r.showLoading)(), (0, a.checkExchangeTicket)(t.orderId).then((function(a) {
      if ((0, r.hideLoading)(), 200 != a.code)(0, r.modal)(a.msg);
      else {
        var n = t.childOrderList.filter((function(e) {
            return 7 == e.reserveStatus
          })),
          o = (0, r.objCopy)(t, ["systemId", "companyInfoId", "displayInfoId", "name", "timeLabelStr", "companyName", "place", "orderId"]);
        o.everyMaxNumber = n.length;
        var i = n.map((function(e) {
            return {
              contactName: e.name,
              documentNumber: e.documentNumber,
              orderVisitId: e.orderVisitId
            }
          })),
          d = {
            ticketName: n[0].ticketName,
            ticketCost: n[0].orderCost,
            contactsArr: i,
            isEarlyBird: 1
          };
        e.recoverScreenBrightnes(), (0, r.navigateTo)("exhibitionAppoint?type=earlyBirdExchange&data=".concat(encodeURIComponent(JSON.stringify(o)), "&ticketArr=").concat(encodeURIComponent(JSON.stringify([d]))))
      }
    })).catch((function(e) {
      (0, r.hideLoading)(), (0, r.toast)("兑换失败，请重试"), console.error(e)
    }))
  }
});