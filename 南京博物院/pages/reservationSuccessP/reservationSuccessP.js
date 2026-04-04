var a = require("../../utils/util.js");
Page({
  data: {
    isFolded: !0,
    backFlag: 1,
    rankNum: 0,
    closeHour: ""
  },
  onLoad: function (e) {
    var t = getApp().globalData.url,
      i = getApp().globalData.isIphoneX,
      n = e.time,
      o = e.period,
      s = e.ticketType,
      l = e.rankNum;
    if (l = null == l ? 0 : l, a.isNull(n) || a.isNull(o) || a.isNull(s) || a.isNull(e.linkmansStr)) this.setData({
      backFlag: 0
    }), wx.showModal({
      content: "数据丢失",
      showCancel: !1,
      confirmColor: "#AC732E",
      success: function (a) {
        a.confirm && wx.reLaunch({
          url: "/pages/myReservation/myReservation"
        })
      }
    });
    else {
      var r = JSON.parse(e.linkmansStr),
        c = JSON.parse(o),
        u = wx.getStorageSync("closeHour");
      this.setData({
        url: t,
        isIphoneX: i,
        time: n,
        period: c,
        ticketType: s,
        rankNum: l,
        closeHour: a.isNull(u) ? "" : u
      }), this.data.linkmanName = r[0].name, this.data.linkmanCardNo = r[0].cardNo
    }
  },
  goback: function () {
    wx.switchTab({
      url: "/pages/index/index"
    })
  },
  goTicket: function () {
    this.setData({
      backFlag: 0
    }), wx.reLaunch({
      url: "/pages/myReservation/myReservation"
    })
  },
  rowTap: function (a) {
    this.setData({
      isFolded: !this.data.isFolded
    })
  },
  onShow: function () {},
  onHide: function () {
    1 == this.data.backFlag && wx.switchTab({
      url: "/pages/index/index"
    })
  },
  onUnload: function () {
    1 == this.data.backFlag && wx.switchTab({
      url: "/pages/index/index"
    })
  },
  onPullDownRefresh: function () {},
  onReachBottom: function () {}
});