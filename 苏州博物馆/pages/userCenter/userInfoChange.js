var t = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  e = require("../../FA9D4A90AD7FA6DF9CFB2297F7F30E96.js"),
  a = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  n = require("../../22CF3566AD7FA6DF44A95D614D730E96.js"),
  i = require("mini-i18n"),
  r = require("../../2A6E79D2AD7FA6DF4C0811D564840E96.js"),
  o = 0,
  s = 60;

function h(e) {
  e.setData({
    codeInputStr: ""
  }), (0, t.saasQueryVCode)().then((function(t) {
    if (200 == t.code) {
      var a = t.data.image.replace(/[\r\n]/g, "");
      e.setData({
        captchaImgBase64: a,
        vid: t.data.vid
      })
    } else o = 0, wx.showToast({
      title: t.msg,
      icon: "none"
    })
  })).catch((function(t) {
    o = 0, hideLoading(), console.error("验证码失败" + t)
  }))
}
Page({
  behaviors: [n.languageBehaviors],
  data: {
    oldStr: "",
    newStr: "",
    titleStr: "",
    codeInputStr: "",
    captchaImgBase64: "",
    vid: "",
    showCountdown: !1,
    nameStr: "",
    cardtypeArr: [],
    cardTypeStr: "",
    cardTypeIdStr: "",
    cardNumStr: "",
    hideCardNumStr: "",
    phoneStr: "",
    hidePhoneStr: "",
    showPhoneNew: "",
    vcodeStr: "",
    xianShiImg: !1
  },
  onLoad: function(t) {
    var a, n, r, o = JSON.parse(t.data);
    "姓名" == o.titleStr ? (a = (0, i.t)("userInfoChange.name"), n = (0, i.t)("userInfoChange.afterChangeHint", a), r = (0, i.t)("userInfoChange.afterChange", a)) : "手机号" == o.titleStr ? (a = (0, i.t)("userInfoChange.phone"), n = (0, i.t)("userInfoChange.afterChangeHint", a), r = (0, i.t)("userInfoChange.afterChange", a)) : (n = "请输入变更后的" + (a = o.titleStr), r = "变更后的" + a), wx.setNavigationBarTitle({
      title: (0, i.t)("userInfoChange.change") + a
    }), this.setData({
      titleStr: a,
      afterChangeHint: n,
      afterChange: r,
      oldStr: o.oldStr,
      hidePhoneStr: o.oldStr,
      showPhoneNew: o.showPhoneNew,
      hideCardNumStr: o.hideCardNumStr
    }), "证件号" == o.titleStr && this.setData({
      cardNumStr: o.cardNumStr,
      cardtypeArr: "zh_CN" == i.i18n.getLocales() ? e.cardTypeArr : e.cardTypeArrEn
    })
  },
  onReady: function() {},
  onShow: function() {
    o = (new Date).getTime(), h(this)
  },
  tuwenCaptchaClick: function(t) {
    var e = (new Date).getTime();
    e - o > 3e3 ? (o = e, h(this)) : (0, a.toast)((0, i.t)("userInfoChange.tooFast"))
  },
  captchaCodeInput: function(t) {
    this.setData({
      codeInputStr: t.detail.value
    })
  },
  xianShiImgClick: function(t) {
    var e = this.data.hidePhoneStr,
      a = this.data.showPhoneNew;
    this.data.titleStr == (0, i.t)("userInfoChange.phone") ? 1 == this.data.xianShiImg ? this.setData({
      xianShiImg: !1,
      oldStr: e
    }) : this.setData({
      xianShiImg: !0,
      oldStr: a
    }) : 1 == this.data.xianShiImg ? this.setData({
      xianShiImg: !1
    }) : this.setData({
      xianShiImg: !0
    })
  },
  newStrInput: function(t) {
    this.setData({
      newStr: t.detail.value
    })
  },
  cardTypePickerChange: function(t) {
    console.log(t.detail.value);
    var e = t.detail.value;
    this.setData({
      cardTypeStr: this.data.cardtypeArr[e].text,
      cardTypeIdStr: this.data.cardtypeArr[e].id
    })
  },
  vcodeInput: function(t) {
    this.setData({
      vcodeStr: t.detail.value
    })
  },
  captchaClick: function(e) {
    var n = this;
    if (1 != this.data.showCountdown)
      if ("" == this.data.newStr)(0, a.toast)((0, i.t)("userInfoChange.afterChangeHint", this.data.titleStr));
      else if (this.data.titleStr == (0, i.t)("userInfoChange.name") && this.data.newStr == this.data.oldStr)(0, a.toast)((0, i.t)("userInfoChange.noChange"));
    else if (this.data.titleStr == (0, i.t)("userInfoChange.phone") && this.data.newStr == this.data.showPhoneNew)(0, a.toast)((0, i.t)("userInfoChange.noChange"));
    else if ("证件号" == this.data.titleStr && this.data.newStr == this.data.hideCardNumStr)(0, a.toast)((0, i.t)("userInfoChange.noChange"));
    else {
      if (this.data.codeInputStr.length <= 0) return void(0, a.toast)((0, i.t)("userInfoChange.imageVCodeHint"));
      s = 60, this.setData({
          showCountdown: !0,
          countDownStr: (0, i.t)("userInfoChange.countDown", s)
        }), clearTimeout(this.timer), this.timer = setInterval((function() {
          s <= 0 && (clearInterval(n.timer), s = 60, n.setData({
            showCountdown: !1
          })), --s, n.setData({
            countDownStr: (0, i.t)("userInfoChange.countDown", s)
          })
        }), 1e3),
        function(e) {
          e.setData({
            captchaInputStr: ""
          });
          var n = "";
          if (e.data.titleStr == (0, i.t)("userInfoChange.phone")) {
            if (!/^1[3456789]\d{9}$/.test(e.data.newStr)) return void(0, a.toast)("realNameCertification.phoneErr");
            n = e.data.newStr
          } else n = getApp().globalData.userInfo.phoneNumber;
          (0, t.getQuerySmsVCode)(n, e.data.codeInputStr, e.data.vid).then((function(t) {
            200 == t.code ? (0, a.toast)((0, i.t)("userInfoChange.sendSuccess")) : (s = 60, e.setData({
              showCountdown: !1
            }), wx.showToast({
              title: t.msg,
              icon: "none"
            }))
          })).catch((function(t) {
            s = 60, e.setData({
              showCountdown: !1
            }), (0, a.toast)((0, i.t)("userInfoChange.sendFailed")), console.error("获取验证码失败" + t)
          }))
        }(this)
    }
  },
  sureBtnClick: function(e) {
    if ("" == this.data.newStr)(0, a.toast)(this.data.afterChangeHint);
    else if (this.data.titleStr !== (0, i.t)("userInfoChange.phone") || /^1[3456789]\d{9}$/.test(this.data.newStr))
      if ("证件号" === this.data.titleStr && this.data.cardTypeIdStr.length <= 0) wx.showToast({
        title: "请选择证件类型",
        icon: "none"
      });
      else if ("证件号" === this.data.titleStr && this.data.newStr.length < 5) wx.showToast({
      title: "请正确输入证件号",
      icon: "none"
    });
    else if (this.data.codeInputStr.length <= 0)(0, a.toast)((0, i.t)("userInfoChange.imageVCodeHint"));
    else if (this.data.vcodeStr.length <= 0)(0, a.toast)((0, i.t)("userInfoChange.smsVCodeHint"));
    else {
      if ("证件号" === this.data.titleStr && "身份证" == this.data.cardTypeStr) {
        var n = this.data.newStr;
        if (!r.checkIdCardNo(n)) return void wx.showToast({
          title: "证件号码输入有误",
          icon: "none"
        })
      }
      var o = null,
        s = null,
        h = null,
        d = null;
      this.data.titleStr === (0, i.t)("userInfoChange.name") && (o = this.data.newStr), this.data.titleStr === (0, i.t)("userInfoChange.phone") && (d = this.data.newStr), "证件号" === this.data.titleStr && (s = this.data.cardTypeIdStr, h = this.data.newStr), (0, t.customerUpdateCert)(o, s, h, d, this.data.vcodeStr).then((function(t) {
        if (200 == t.code) {
          var e = getCurrentPages(),
            a = e[e.length - 2];
          wx.navigateBack({
            success: function() {
              a.reloadContactsData()
            }
          })
        } else wx.showToast({
          title: t.msg,
          icon: "none"
        })
      }))
    } else(0, a.toast)((0, i.t)("realNameCertification.phoneErr"))
  },
  onUnload: function() {
    null != this.timer && -1 != this.timer && clearInterval(this.timer)
  }
});