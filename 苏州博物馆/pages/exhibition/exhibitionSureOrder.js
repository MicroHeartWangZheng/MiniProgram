var e = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  t = require("../../E83DACF5AD7FA6DF8E5BC4F28CD30E96.js"),
  a = -1;
Page({
  data: {
    info: {},
    orderStatusStr: "",
    orderCost: "",
    payBtnStr: "",
    hidenPayBtn: !1
  },
  onLoad: function(e) {
    var t = JSON.parse(decodeURIComponent(e.data));
    t.orderCost > 0 ? (this.setData({
      payBtnStr: "立即支付",
      hidenPayBtn: !1,
      info: t,
      orderCost: t.orderCost
    }), this.countDown()) : this.setData({
      payBtnStr: "确认订单",
      hidenPayBtn: !1,
      orderStatusStr: "免费",
      info: t,
      orderCost: t.orderCost
    })
  },
  payBtnClick: function(a) {
    (0, e.showLoading)("加载中...", !0);
    var i = this.data.info;
    if (this.data.orderCost > 0)(0, t.exihibitionPayment)(i.orderId).then((function(n) {
      wx.hideLoading(), 200 == n.code ? null != n.data && wx.requestPayment({
        timeStamp: n.data.timeStamp,
        nonceStr: n.data.nonceStr,
        package: n.data.package,
        signType: n.data.signType,
        paySign: n.data.paySign,
        appId: wx.getAccountInfoSync().miniProgram.appId,
        success: function() {
          (0, t.exihibitionConfirmOrder)(i.orderId).then((function(e) {
            if (200 == e.code) {
              var t = {
                  name: i.name,
                  visitorNum: i.selectedContactsArr.length,
                  time: i.commitData.reserveDate + " " + i.commitData.reserveTime,
                  orderId: i.orderId,
                  tips: e.data.tips,
                  isReserveTrial: i.isReserveTrial,
                  displayInfoId: i.displayInfoId,
                  type: i.type
                },
                n = encodeURIComponent(JSON.stringify(t));
              wx.redirectTo({
                url: "exhibitionAppointSuccess?data=" + n
              })
            } else wx.hideLoading(), console.debug("提交订单失败", a)
          })).catch((function(e) {
            wx.hideLoading(), console.debug("提交订单失败", e)
          }))
        },
        fail: function(t) {
          (0, e.toast)("未支付成功"), console.error("请确保微信支付已开通320" + t)
        },
        complete: function() {}
      }) : (0, e.toast)("支付失败，" + n.msg)
    })).catch((function(e) {
      wx.hideLoading(), console.debug("提交订单失败", e)
    }));
    else {
      var n = i.commitData;
      n.isSubmit = 1, (0, t.submitExhibitionOrder)(n).then((function(t) {
        if (wx.hideLoading(), 200 == t.code) {
          (0, e.toast)("确认成功");
          var a = {
              name: i.name,
              displayInfoId: i.displayInfoId,
              visitorNum: i.selectedContactsArr.length,
              time: n.reserveDate + " " + n.reserveTime,
              orderId: t.data.orderId,
              tips: t.data.tips,
              isReserveTrial: i.isReserveTrial,
              type: i.type
            },
            o = encodeURIComponent(JSON.stringify(a));
          wx.redirectTo({
            url: "exhibitionAppointSuccess?data=" + o
          })
        } else(0, e.toast)(t.msg)
      })).catch((function(e) {
        wx.hideLoading(), console.debug("提交订单失败", e)
      }))
    }
  },
  timeFormat: function(e) {
    return e < 10 ? "0" + e : e
  },
  onUnload: function() {
    -1 != a && clearInterval(a)
  },
  countDown: function() {
    var e = this; - 1 != a && clearInterval(a);
    var t = new Date(this.data.info.countdown.replace(/-/g, "/")).getTime();
    a = setInterval((function() {
      var i = "00",
        n = "00",
        o = "00",
        r = (new Date).getTime();
      if (t - r > 0) {
        var s = (t - r) / 1e3;
        i = e.timeFormat(parseInt(s % 86400 / 3600)), n = e.timeFormat(parseInt(s % 86400 % 3600 / 60)), o = e.timeFormat(parseInt(s % 86400 % 3600 % 60));
        var d = i > 0 ? "支付中（付款倒计时:" + i + "小时" + n + "分" + o + "秒）" : "支付中（付款倒计时:" + n + "分" + o + "秒）";
        e.setData({
          orderStatusStr: d
        })
      } else e.setData({
        hidenPayBtn: !0,
        orderStatusStr: "未支付，订单已取消"
      }), clearInterval(a)
    }), 1e3)
  }
});