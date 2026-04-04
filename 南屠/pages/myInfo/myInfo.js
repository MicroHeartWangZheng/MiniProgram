var t, e = (t = require("../../utils/postRequest")) && t.__esModule ? t : {
  default: t
};
var o = require("../../utils/util.js"),
  n = require("../../utils/abc.js"),
  a = getApp().globalData.url;
Page({
  data: {},
  onLoad: function (t) {
    this.postRequest = new e.default(this)
  },
  getUserMsg: o.throttle((function (t) {
    var e = this,
      s = t.currentTarget.dataset.url,
      i = wx.getStorageSync("userId"),
      r = wx.getStorageSync("openId"),
      c = wx.getStorageSync("token1");
    i && r && c ? e.goNext(s, i) : wx.login({
      success: function (t) {
        if (t.code) {
          var i = t.code,
            r = (new Date).getTime(),
            c = {
              code: i,
              timestamp: r,
              sign: n.signNoParam(r)
            };
          e.postRequest.postRequest(a + "ticketWechat/out/getUnionId2021.do", n.encrypt(JSON.stringify(c)), 0).then((function (t) {
            if ("0000" == t.status) {
              var a = JSON.parse(n.decrypt(t.data)).data;
              0 == a.flag ? (e.data.openId = a.openId, e.data.tel = a.tel, wx.setStorageSync("userId", a.id), wx.setStorageSync("openId", a.openId), wx.setStorageSync("token1", a.token1), wx.setStorageSync("no", a.no), wx.setStorageSync("createTime", a.createTime), wx.setStorageSync("tel", a.tel), e.goNext(s, a.id)) : 2 == a.flag ? o.showMsg("失败，请重试") : (wx.setStorageSync("openId", a.openId), wx.setStorageSync("token1", a.token1), wx.navigateTo({
                url: "/pages/phone/phone?toUrl=" + s + "&unionId=" + a.unionId
              }))
            } else o.showMsg(t.msg ? t.msg : "程序异常")
          }))
        } else o.showMsg("失败，请重试")
      },
      fail: function () {
        o.showMsg("失败，请重试")
      }
    })
  }), 2e3),
  goNext: function (t, e) {
    e ? wx.navigateTo({
      url: t
    }) : wx.showToast({
      title: "登录失败,请重试",
      icon: "none",
      duration: 2e3
    })
  },
  toSysInfo: function (t) {
    wx.navigateTo({
      url: "/pages/privacyContractH5/privacyContractH5?type=3"
    })
  },
  onReady: function () {},
  onShow: function () {
    wx.setNavigationBarTitle({
      title: "我的南博"
    })
  },
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {}
});