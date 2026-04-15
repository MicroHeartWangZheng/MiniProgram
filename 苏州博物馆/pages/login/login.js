var e = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  a = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  t = require("../../22CF3566AD7FA6DF44A95D614D730E96.js"),
  n = getApp(),
  o = "",
  i = 5,
  r = "",
  c = "";

function s(e, a) {
  wx.showModal({
    title: "登录失败",
    content: e,
    success: function(e) {
      e.confirm && a && n.userLogin()
    }
  })
}
Page({
  behaviors: [t.languageBehaviors],
  data: {
    data: {},
    openType: "",
    privacyAgreementChecked: !1
  },
  onLoad: function(e) {
    var a;
    c = null == e.pageUrl ? "" : e.pageUrl.replace(/_/g, "="), a = this, wx.showLoading({
      title: "加载中",
      mask: !0
    }), n.userLogin().then((function(e) {
      if (wx.hideLoading(), 200 == e.code) a.setData({
        openType: ""
      }), wx.showToast({
        title: "登录成功"
      }), "" != c ? wx.navigateTo({
        url: c
      }) : wx.navigateBack();
      else if (100 == e.code) {
        var t = JSON.parse(e.msg);
        o = t.openid, i = t.openIdType, r = t.session_key, console.log("openid=", o)
      }
    })).catch((function(e) {
      console.log(e), a.setData({
        openType: ""
      }), wx.hideLoading(), s(JSON.stringify(e))
    }))
  },
  onGetPhoneNumber: function(a) {
    -1 != a.detail.errMsg.indexOf("fail") ? wx.redirectTo({
      url: "phoneLogin"
    }) : function(a, t, o, i, r, g) {
      wx.showLoading({
        title: "加载中",
        mask: !0
      });
      var d = {
        encryptedData: t,
        iv: o,
        openId: i,
        openIdType: r,
        sessionKey: g,
        appId: wx.getAccountInfoSync().miniProgram.appId
      };
      (0, e.smallProgramLoginByPhone)(d).then((function(e) {
        if (wx.hideLoading(), 200 == e.code) {
          a.setData({
            openType: ""
          }), n.globalData.authorizationc = e.data.authorizationc, n.globalData.openId = e.data.openid, n.globalData.encryptKeyVersion = e.data.version;
          var t = getCurrentPages(),
            o = t[t.length - 2];
          "" != c ? (null != o.reloadContactsData && o.reloadContactsData(), wx.navigateTo({
            url: c
          })) : wx.navigateBack({
            success: function() {}
          })
        } else 310 == e.code ? (a.setData({
          openType: ""
        }), n.globalData.authorizationc = e.data.authorizationc, wx.showToast({
          title: "无法使用此微信小程序",
          icon: "none",
          duration: 3e3
        })) : (s("绑定手机号失败，" + e.msg), console.error("自动绑定失败" + e.msg))
      }))
    }(this, a.detail.encryptedData, a.detail.iv, o, i, r)
  },
  wxLogin: function() {
    this.data.privacyAgreementChecked || (0, a.toast)("请先同意《隐私协议》")
  },
  smsLogin: function() {
    this.data.privacyAgreementChecked ? wx.redirectTo({
      url: "phoneLogin"
    }) : (0, a.toast)("请先同意《隐私协议》")
  },
  notLogin: function() {
    wx.navigateBack()
  },
  privacyAgreementCheckedChange: function() {
    this.setData({
      openType: this.data.privacyAgreementChecked ? "" : "getPhoneNumber",
      privacyAgreementChecked: !this.data.privacyAgreementChecked
    })
  },
  privacyAgreementClick: function() {
    wx.navigateTo({
      url: "../contacts/privacyAgreement"
    })
  },
  autoRefreshData: function(e) {
    this.setData({
      privacyAgreementChecked: !0,
      openType: "getPhoneNumber"
    })
  }
});