var e = require("../../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  a = require("../../../E83DACF5AD7FA6DF8E5BC4F28CD30E96.js"),
  t = require("../../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  n = -1;
Page({
  data: {},
  onLoad: function(e) {
    console.log(e.info), null != e.info ? (this.setData(JSON.parse(decodeURIComponent(e.info))), this.countDown()) : this.getOrderDetailData(e.id)
  },
  submitClick: function() {
    var e = this;
    (0, t.showLoading)(), (0, a.payment)(this.data.exhTrialOrder.orderId).then((function(r) {
      if ((0, t.hideLoading)(), 200 == r.code && null != r.data) {
        var o = r.data;
        wx.requestPayment({
          timeStamp: o.timeStamp,
          nonceStr: o.nonceStr,
          package: o.package,
          signType: o.signType,
          paySign: o.paySign,
          success: function() {
            (0, a.confirmPayOrder)(e.data.exhTrialOrder.orderId), -1 != n && (clearInterval(n), n = -1);
            var t = e.data.exhTrialOrder,
              r = {
                reserveDate: t.reserveDate,
                reserveTime: t.reserveTime,
                companyInfoId: t.companyInfoId,
                museumName: t.companyInfoName,
                orderNum: t.orderNum,
                orderListId: t.orderId,
                tips: e.data.exhTrialProject.tips
              };
            wx.redirectTo({
              url: "success?info=" + encodeURIComponent(JSON.stringify(r))
            })
          },
          fail: function(e) {
            (0, t.modal)("支付失败", (function() {
              wx.redirectTo({
                url: "../myOrderList?tabIndex=6"
              })
            })), console.error("请确保微信支付已开通320,", e)
          }
        })
      } else(0, t.modal)("支付失败，" + r.msg), (0, t.onlineLog)("体验项目预约支付失败," + r.msg)
    })).catch((function(e) {
      (0, t.hideLoading)(), (0, t.modal)("支付异常"), (0, t.onlineLog)("体验项目预约支付异常," + JSON.stringify(e))
    }))
  },
  getOrderDetailData: function(n) {
    var r = this;
    (0, t.showLoading)(), (0, a.getTrialProjectOrderDetail)(n).then((function(a) {
      if ((0, t.hideLoading)(), 200 == a.code) {
        var n = a.data;
        r.setData(n), r.countDown()
      } else(0, e.showWarningToast)(a, "获取订单失败")
    })).catch((function(e) {
      (0, t.hideLoading)(), console.error("获取订单异常", e), (0, t.modal)("获取订单异常", (function() {
        wx.navigateBack()
      }))
    }))
  },
  countDown: function() {
    var e = this,
      a = this.data.exhTrialOrder.expireTime;
    if (null != a) {
      var r = Math.round((new Date(a.replace(/-/g, "/")).getTime() - (new Date).getTime()) / 1e3);
      n = setInterval((function() {
        --r <= 0 ? ((0, t.toast)("由于超时，已自动取消订单"), wx.navigateBack(), clearInterval(n), n = -1) : e.setData({
          countDownStr: "".concat(Math.floor(r / 60), "分").concat(r % 60, "秒")
        })
      }), 1e3)
    }
  },
  onUnload: function() {
    -1 != n && (clearInterval(n), n = -1)
  }
});