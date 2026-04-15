var t = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  e = require("../../22CF3566AD7FA6DF44A95D614D730E96.js"),
  a = require("mini-i18n"),
  n = require("../../2745A015AD7FA6DF4123C81257040E96.js");
Page({
  behaviors: [e.languageBehaviors],
  data: {
    useName: (0, a.t)("userCenter.login"),
    userIcon: "../../images/center/touxiang.png",
    customerMenu: {}
  },
  onLoad: function() {},
  onShow: function() {
    "" == getApp().globalData.authorizationc ? this.setData({
      useName: (0, a.t)("userCenter.login")
    }) : (this.queryCert(!1), this.consfirmCommercial())
  },
  login: function() {
    this.data.useName == (0, a.t)("userCenter.login") ? wx.navigateTo({
      url: "../login/login"
    }) : this.data.useName == (0, a.t)("userCenter.realName") && wx.navigateTo({
      url: "../contacts/realNameCertification"
    })
  },
  reloadContactsData: function() {
    this.queryCert(!0)
  },
  itemClick: function(e) {
    var i = e.currentTarget.dataset.index;
    this.data.useName == (0, a.t)("userCenter.login") ? (0, t.navigateTo)("../login/login") : this.data.useName == (0, a.t)("userCenter.realName") ? (0, t.navigateTo)("../contacts/realNameCertification") : 1 == i ? (0, t.navigateTo)("userInfo") : 2 == i ? (0, t.navigateTo)("../contacts/contactsList") : 3 == i ? (0, t.navigateTo)("../appointment/myOrderList") : 4 == i ? (0, t.navigateTo)("../vip/information?isinner=true") : 5 == i ? (0, t.navigateTo)("../vip/vipCenter/verification") : 6 == i ? (0, n.szCustomerLogin)().then((function(e) {
      var a, n = null == e || null === (a = e.data) || void 0 === a ? void 0 : a.authorizationu;
      200 === (null == e ? void 0 : e.code) && n ? (getApp().globalData.authorizationu = n, (0, t.navigateTo)("../dataBoard/dataBoard")) : wx.showToast({
        title: "请重新登录",
        icon: "none",
        duration: 2e3
      })
    })) : 7 == i ? (0, n.szCustomerLogin)().then((function(e) {
      var a, n = null == e || null === (a = e.data) || void 0 === a ? void 0 : a.authorizationu;
      200 === (null == e ? void 0 : e.code) && n ? (getApp().globalData.authorizationu = n, (0, t.navigateTo)("../dataBoard/salesReporting")) : wx.showToast({
        title: "请重新登录",
        icon: "none",
        duration: 2e3
      })
    })) : 8 == i ? (0, t.navigateTo)("complaints") : 9 == i ? (0, t.navigateTo)("../appointment/myOrderList") : 10 == i ? (0, t.navigateTo)("../appointment/myOrderList?tabIndex=2") : 11 == i ? (0, t.navigateTo)("../appointment/myOrderList?tabIndex=1") : 12 == i && (0, t.navigateTo)("../appointment/myOrderList?tabIndex=4")
  },
  queryCert: function(e) {
    var n = this;
    (0, t.getRealNameInfo)((function(t) {
      n.setData({
        useName: null == t ? (0, a.t)("userCenter.realName") : t.customerName
      })
    }), null, e)
  },
  consfirmCommercial: function() {
    var t = this;
    wx.getStorage({
      key: "customerMenu",
      success: function(e) {
        t.setData({
          customerMenu: e.data
        })
      },
      fail: function(e) {
        (0, n.queryCustomerMenu)().then((function(e) {
          200 === e.code && (wx.setStorage({
            key: "customerMenu",
            data: e.data
          }), t.setData({
            customerMenu: e.data
          }))
        }))
      }
    })
  }
});