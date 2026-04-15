var t = require("../../@babel/runtime/helpers/objectSpread2"),
  e = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  a = function(t, e) {
    if (!e && t && t.__esModule) return t;
    if (null === t || "object" != typeof t && "function" != typeof t) return {
      default: t
    };
    var a = i(e);
    if (a && a.has(t)) return a.get(t);
    var r = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var n in t)
      if ("default" !== n && Object.prototype.hasOwnProperty.call(t, n)) {
        var d = o ? Object.getOwnPropertyDescriptor(t, n) : null;
        d && (d.get || d.set) ? Object.defineProperty(r, n, d) : r[n] = t[n]
      } r.default = t, a && a.set(t, r);
    return r
  }(require("../../04BA0E47AD7FA6DF62DC664011540E96.js"));
require("../../F4A4DD67AD7FA6DF92C2B56044640E96.js");

function i(t) {
  if ("function" != typeof WeakMap) return null;
  var e = new WeakMap,
    a = new WeakMap;
  return (i = function(t) {
    return t ? a : e
  })(t)
}
var r = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  o = r.activityQueryOrderDetail,
  n = r.cancelActivity,
  d = r.queryActivitysureOrderPay,
  s = r.activityOrderPaySuccess,
  c = r.cancelActivityPay,
  l = wx.getWindowInfo().windowWidth,
  u = "";
Page({
  data: {
    orderId: "",
    model: {},
    qrcode_w: 320 / (750 / l),
    selectedArr: []
  },
  onLoad: function(t) {
    var a = this;
    u = t.orderListId, "" !== getApp().globalData.authorizationc ? this.getDetailById(t.orderListId) : (getApp().tokenReadyCallback = function(i) {
      200 == i.code ? a.getDetailById(t.orderListId) : (0, e.navigateTo)("../login/login")
    }, getApp().tokenFailedCallback = function() {
      console.error("登录失败")
    })
  },
  getDetailById: function(t) {
    var i = this;
    (0, e.showLoading)(), o(t).then((function(t) {
      if ((0, e.hideLoading)(), 200 == t.code) {
        var r;
        console.log(t);
        var o = t.data;
        null === (r = o.orderActivityList) || void 0 === r || r.forEach((function(t, e) {
          t.selected = !1, -1 == t.reserveStatus || (4 == t.reserveStatus ? t.reserveStatusImg = "../../images/center/yidaoguan.png" : "已预约" == t.reserveStatusStr ? t.reserveStatusImg = "../../images/center/yiyuyue.png" : "待使用" == t.reserveStatusStr ? t.reserveStatusImg = "../../images/center/daishiyong.png" : "已过期" == t.reserveStatusStr ? t.reserveStatusImg = "../../images/center/yiguoqi.png" : "已取消" == t.reserveStatusStr ? t.reserveStatusImg = "../../images/center/yiquxiao.png" : "已签到" == t.reserveStatusStr ? t.reserveStatusImg = "../../images/center/yiqiandao2.png" : "已使用" == t.reserveStatusStr && (t.reserveStatusImg = "../../images/center/yishiyong.png"));
          var i = "canvas" + e;
          (0, a.default)(t.reserveNo, i)
        })), o.time = o.activity.mainType ? o.reserveDate + " " + o.reserveTime : (0, e.formatTimeInterval)(o.activity.startTime, o.activity.endTime), console.log("dict", o), i.setData({
          model: o
        })
      } else(0, e.toast)(t.msg)
    })).catch((function(t) {
      console.error(t), (0, e.hideLoading)()
    }))
  },
  activityTitleClick: function() {
    wx.navigateTo({
      url: "activityDetail?id=" + this.data.model.activityId
    })
  },
  orderListClick: function(e) {
    var a = parseInt(e.currentTarget.dataset.index),
      i = this.data.model,
      r = i.orderActivityList[a];
    if ("已预约" == r.reserveStatusStr) {
      r.selected = !r.selected;
      var o = i.orderActivityList.filter((function(t) {
        return t.selected
      }));
      i.isPackage && (o = i.orderActivityList.map((function(e) {
        return t(t({}, e), {}, {
          selected: !0
        })
      })), i.orderActivityList = o), this.setData({
        model: i,
        selectedArr: o
      })
    }
  },
  cancelBtnClick: function() {
    var t = this,
      a = this.data.selectedArr,
      i = a.map((function(t) {
        return t.visitorName
      })).join("、");
    console.log("model", this.data.model), this.data.model.isPackage ? (a = this.data.model.orderActivityList, wx.showModal({
      title: "提示",
      content: "此票为陪同票,确定退订吗？",
      success: function(i) {
        if (i.confirm) {
          var r = t.data.model,
            o = a.map((function(t) {
              return t.orderActivityId
            }));
          (0, e.showLoading)(), n(o, r.activityId, r.orderListId).then((function(a) {
            (0, e.hideLoading)(), 200 == a.code ? (0, e.modal)("退票成功！", (function() {
              t.setData({
                selectedArr: []
              }), t.getDetailById(u);
              var e = getCurrentPages(),
                a = e[e.length - 2];
              null != a.reloadData && a.reloadData(1)
            })) : (0, e.toast)(a.msg)
          })).catch((function(t) {
            wx.hideLoading()
          }))
        }
      }
    })) : wx.showModal({
      title: "提示",
      content: "确定退订【".concat(i, "】的票吗？"),
      success: function(i) {
        if (i.confirm) {
          var r = t.data.model,
            o = a.map((function(t) {
              return t.orderActivityId
            }));
          (0, e.showLoading)(), n(o, r.activityId, r.orderListId).then((function(a) {
            (0, e.hideLoading)(), 200 == a.code ? (0, e.modal)("退票成功！", (function() {
              t.setData({
                selectedArr: []
              }), t.getDetailById(u);
              var e = getCurrentPages(),
                a = e[e.length - 2];
              null != a.reloadData && a.reloadData(1)
            })) : (0, e.toast)(a.msg)
          })).catch((function(t) {
            wx.hideLoading()
          }))
        }
      }
    })
  },
  payBtnClick: function() {
    var a = this.data.model.orderActivityList.map((function(e) {
        return t(t({}, e), {}, {
          contactName: e.visitorName
        })
      })),
      i = this.data.model.activity.mainType ? "".concat(this.data.model.activity.startTime, "~").concat(this.data.model.activity.endTime) : (0, e.formatTimeInterval)(this.data.model.activity.startTime, this.data.model.activity.endTime),
      r = t(t({}, this.data.model.activity), {}, {
        time: i,
        companyInfoName: this.data.model.companyInfoName,
        activityName: this.data.model.orderTitle,
        cost: this.data.model.orderCost,
        ticktDetail: {
          reserveDate: this.data.model.reserveDate,
          reserveTime: this.data.model.reserveTime
        },
        activityId: this.data.model.activityId
      }),
      o = {
        num: this.data.model.orderNum,
        start: this.data.model.activity.startTime,
        end: this.data.model.activity.endTime,
        tip: this.data.model.activity.attention,
        img: this.data.model.photoUrl,
        orderListId: this.data.model.orderListId
      };
    if (1 == this.data.model.activity.activityType) {
      var n, d = null === (n = this.data.model.reserveTime) || void 0 === n ? void 0 : n.split("-");
      o.start = r.ticktDetail.reserveDate + " " + d[0], o.end = r.ticktDetail.reserveDate + " " + d[1]
    }
    console.log("dataObj", o);
    var s = encodeURIComponent(JSON.stringify(t(t({}, this.data.model), {}, {
      visitList: a,
      detail: r,
      orderId: this.data.model.orderListId,
      dataObj: o
    })));
    wx.navigateTo({
      url: "./order?data=".concat(s)
    })
  },
  cancelpayBtnClick: function() {
    var t = this,
      e = this.data.model.orderListId;
    wx.showModal({
      title: "确定要取消待支付订单吗？",
      complete: function(a) {
        a.cancel, a.confirm && (wx.showLoading(), c(e).then((function(a) {
          wx.hideLoading(), 200 == a.code ? t.getDetailById(e) : wx.showToast({
            title: a.msg,
            icon: "none"
          })
        })))
      }
    })
  },
  pay: function(t) {
    var e = {
      orderId: t.data.model.orderListId,
      payFrom: "JSAPI"
    };
    wx.showLoading({
      title: "支付中"
    }), d(e).then((function(e) {
      wx.hideLoading(), console.log("saveForWeChatPay", e);
      200 == e.code ? (e.data.prepay_id, void 0 !== e.data && wx.requestPayment({
        timeStamp: e.data.timeStamp,
        nonceStr: e.data.nonceStr,
        package: e.data.package,
        signType: e.data.signType,
        paySign: e.data.paySign,
        success: function(e) {
          s(t.data.model.orderListId).then((function(e) {
            200 == e.code && wx.showToast({
              title: "支付成功",
              icon: "none",
              success: function() {
                t.getDetailById(t.data.model.orderListId);
                var e = getCurrentPages(),
                  a = e[e.length - 2];
                null != a.reloadData && a.reloadData(1)
              }
            })
          }))
        },
        fail: function(t) {
          console.error("请确保微信支付已开通320" + t)
        },
        complete: function(t) {}
      })) : wx.showToast({
        title: e.msg,
        icon: "none"
      })
    }), (function(t) {
      console.error("请确保微信支付已开通284" + t), wx.showToast({
        title: "系统繁忙，请稍后再试。",
        icon: "none"
      })
    }))
  }
});