var t = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  o = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  e = require("../../22CF3566AD7FA6DF44A95D614D730E96.js"),
  a = require("mini-i18n"),
  i = 60;
Page({
  behaviors: [e.languageBehaviors],
  data: {
    phoneNum: "",
    verificationCode: "",
    showCountdown: !1,
    captchaImgBase64: "",
    vid: "",
    vcode: ""
  },
  timer: "",
  onLoad: function(t) {
    this.setData({
      codeStr: (0, a.t)("logout.getSmsVCode"),
      phoneNum: t.phone
    }), this.updateImgCode()
  },
  verificationCodeInput: function(t) {
    this.setData({
      verificationCode: t.detail.value
    })
  },
  codeBtnClick: function(e) {
    var n = this;
    if (console.log("vcode", this.data.vcode), 1 != this.data.showCountdown)
      if (this.data.vcode) {
        var s = this.data,
          d = s.phoneNum,
          u = s.vcode,
          c = s.vid;
        (0, t.getQuerySmsVCode)(d, u, c).then((function(t) {
          200 === t.code ? ((0, o.toast)(t.data), i = 60, n.setData({
            showCountdown: !0,
            countDownStr: (0, a.t)("logout.countDown", i)
          }), clearTimeout(n.timer), n.timer = setInterval((function() {
            0 == i && (clearInterval(n.timer), i = 60, n.setData({
              showCountdown: !1
            })), --i, n.setData({
              countDownStr: (0, a.t)("logout.countDown", i)
            })
          }), 1e3)) : (i = 60, n.setData({
            showCountdown: !1
          }), (0, o.modal)(t.msg, (function() {
            n.updateImgCode()
          })))
        }))
      } else wx.showToast({
        title: (0, a.t)("logout.imageVCodeHint1"),
        icon: "none"
      })
  },
  imgCodeInput: function(t) {
    this.setData({
      vcode: t.detail.value
    })
  },
  updateImgCode: function() {
    var e = this;
    (0, t.saasQueryVCode)().then((function(t) {
      if (200 == t.code) {
        var i = t.data.image.replace(/[\r\n]/g, "");
        e.setData({
          captchaImgBase64: i,
          vid: t.data.vid
        })
      } else(0, o.toast)((0, a.t)("logout.imageVCodeHint2"))
    }))
  },
  loginClick: function(e) {
    var i = this;
    "" == this.data.vcode ? wx.showToast({
      title: (0, a.t)("logout.imageVCodeHint3"),
      icon: "none"
    }) : "" == this.data.verificationCode ? wx.showToast({
      title: (0, a.t)("logout.smsVCodeHint1"),
      icon: "none"
    }) : (0, o.modalWithCancel)((0, a.t)("logout.tips"), (function() {
      (0, o.showLoading)();
      var e = i.data.verificationCode;
      (0, t.logOut)(e).then((function(t) {
        (0, o.hideLoading)(), 200 === t.code ? ((0, o.toast)((0, a.t)("logout.success")), getApp().globalData.authorizationc = "", getApp().globalData.userInfo = null, wx.clearStorage(), setTimeout((function() {
          wx.restartMiniProgram({
            path: "../index/index"
          })
        }), 2500)) : ((0, o.modal)((0, a.t)("logout.failed") + t.msg), console.error("注销失败，" + t.msg))
      })).catch((function(t) {
        (0, o.hideLoading)(), (0, o.modal)((0, a.t)("logout.failed") + JSON.stringify(t)), console.error("注销失败，" + JSON.stringify(t))
      }))
    }))
  }
});