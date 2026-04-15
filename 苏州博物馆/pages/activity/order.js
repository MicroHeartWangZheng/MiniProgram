var e, t = require("../../@babel/runtime/helpers/objectSpread2"),
  a = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  i = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  n = 0;
Page({
  data: {
    detail: {},
    visitList: [],
    captchaImgBase64: "",
    imgCode: "",
    payTime: 1800,
    payTimeText: "30分00秒",
    orderId: "",
    nextPageDetail: {},
    expireTime: "",
    allPrice: 0,
    paybtn: !0
  },
  onLoad: function(a) {
    var i = this;
    this.getImgCode();
    var n = JSON.parse(decodeURIComponent(a.data));
    this.setData({
      detail: t(t({}, n.detail), {}, {
        discountCost: n.discountCost
      }),
      visitList: n.visitList,
      orderId: n.orderId,
      nextPageDetail: n.dataObj,
      expireTime: n.expireTime,
      allPrice: n.orderCost
    }, (function() {
      var t = i.data,
        a = (t.detail, t.expireTime),
        n = t.allPrice;
      if (n && n > 0) {
        var o = (new Date).getTime(),
          r = new Date(a.replace(/-/g, "/")),
          c = new Date(r).getTime(),
          s = new Date(c - o),
          d = Math.floor(s.getSeconds()),
          l = s.getMinutes();
        i.setData({
          payTime: s / 1e3,
          payTimeText: l + "分" + d + "秒"
        }, (function() {
          !e && i.payTime_CountDown()
        }))
      }
    }))
  },
  onUnload: function() {
    clearInterval(e), e = null
  },
  payTime_CountDown: function() {
    var t = this;
    e = setInterval((function() {
      var a = t.data.payTime;
      a > 0 ? t.setData({
        payTime: a - 1
      }, (function() {
        var e = t.data.payTime,
          a = Math.floor(e / 60),
          i = Math.floor(e % 60);
        t.setData({
          payTimeText: a + "分" + i + "秒"
        })
      }), 1e3) : (clearInterval(e), e = null, wx.showModal({
        title: "支付超时，请重新预约",
        complete: function(e) {
          if (e.cancel) {
            var a = t.data.orderId;
            wx.navigateTo({
              url: "../activity/orderDetail?orderListId=" + a
            })
          }
          if (e.confirm) {
            var i = t.data.detail.activityId;
            wx.navigateTo({
              url: "../activity/activityDetail?id=".concat(i)
            })
          }
        }
      }))
    }), 1e3)
  },
  getImgCode: function() {
    var e = this;
    n = (new Date).getTime(), this.setData({
      imgCode: ""
    }), (0, i.showLoading)(), (0, a.activityQueryImgCode)().then((function(t) {
      if ((0, i.hideLoading)(), 200 == t.code) {
        var a = t.data.replace(/[\r\n]/g, "");
        e.setData({
          captchaImgBase64: a
        })
      } else n = 0, wx.showToast({
        title: t.msg,
        icon: "none"
      })
    })).catch((function(e) {
      n = 0, (0, i.hideLoading)(), console.error("验证码失败" + e)
    }))
  },
  captchaClick: function(e) {
    (new Date).getTime() - n > 3e3 ? this.getImgCode() : (0, i.toast)("操作太频繁，请稍后再试")
  },
  conformOrder: function() {
    var t, n, o = this.data,
      r = o.detail,
      c = o.nextPageDetail,
      s = o.allPrice,
      d = o.paybtn;
    if (s && 0 != s && 0 != r.discountCost) d && (n = {
      orderId: (t = this).data.orderId,
      payFrom: "JSAPI"
    }, t.setData({
      paybtn: !1
    }, (function() {
      (0, a.queryActivitysureOrderPay)(n).then((function(n) {
        t.setData({
          paybtn: !0
        }, (function() {
          (0, i.hideLoading)(), 200 == n.code ? (n.data.prepay_id, void 0 !== n.data && wx.requestPayment({
            timeStamp: n.data.timeStamp,
            nonceStr: n.data.nonceStr,
            package: n.data.package,
            signType: n.data.signType,
            paySign: n.data.paySign,
            success: function(i) {
              clearInterval(e), e = null, (0, a.activityOrderPaySuccess)(t.data.orderId).then((function(e) {
                e.code
              })), wx.showToast({
                title: "支付成功",
                icon: "none",
                success: function() {
                  var e = t.data.nextPageDetail,
                    a = encodeURIComponent(JSON.stringify(e));
                  console.log("nextPageDetail", e), wx.navigateTo({
                    url: "appointSuccess?data=".concat(a)
                  })
                }
              })
            },
            fail: function(e) {
              console.error("请确保微信支付已开通320" + e)
            },
            complete: function(e) {}
          })) : wx.showToast({
            title: n.msg,
            icon: "none",
            success: function() {
              console.log("订单失败")
            }
          })
        }))
      }), (function(e) {
        t.setData({
          paybtn: !0
        }), console.error("请确保微信支付已开通284" + e), wx.showToast({
          title: "系统繁忙，请稍后再试。",
          icon: "none"
        })
      }))
    })));
    else {
      var l = encodeURIComponent(JSON.stringify(c));
      wx.navigateTo({
        url: "appointSuccess?data=".concat(l)
      })
    }
  },
  codeChange: function(e) {
    this.setData({
      imgCode: e.detail.value
    })
  }
});