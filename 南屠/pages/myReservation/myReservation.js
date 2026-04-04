require("../../utils/md5.js");
var a = require("../../utils/util.js"),
  t = require("../../utils/abc.js");
Page({
  data: {
    list: [],
    page: 0,
    allPage: 0,
    searchLoading: !1,
    searchLoadingComplete: !1,
    searchFlag: !0,
    typeIndex: 0,
    typeList: ["身份证", "港澳台居民居住证", "外籍护照", "港澳居民来往内地通行证", "台湾居民来往大陆通行证", "外国人永久居留身份证"]
  },
  onLoad: function () {
    var a = getApp().globalData.url,
      t = getApp().globalData.isIphoneX;
    this.setData({
      url: a,
      isIphoneX: t
    })
  },
  onShow: function () {
    this.getMyData(2)
  },
  getMyData: function (e) {
    var s = this,
      i = s.data.page;
    wx.showLoading({
      title: "加载中",
      mask: !0
    });
    var n = wx.getStorageSync("userId");
    if (a.isNull(n)) wx.hideLoading(), wx.showToast({
      title: "缓存数据丢失，请重试",
      icon: "none",
      duration: 2e3
    }), setTimeout((function () {
      wx.switchTab({
        url: "/pages/index/index"
      })
    }), 2e3);
    else {
      var o = (new Date).getTime(),
        r = wx.getStorageSync("no"),
        g = wx.getStorageSync("token1"),
        l = {
          page: i,
          userId: n,
          timestamp: o,
          checkstr: r,
          token1: g,
          sign: t.sign(o, n)
        };
      wx.request({
        url: s.data.url + "ticketWechat/out/getMyTicketOrders.do",
        data: t.encrypt(JSON.stringify(l)),
        method: "POST",
        header: {
          "content-type": "application/json"
        },
        success: function (e) {
          if (200 == e.statusCode && "0000" == e.data.status) {
            var n = JSON.parse(t.decrypt(e.data.data)),
              o = n.data.allPage,
              r = n.data.list,
              g = [];
            if (0 == i) g = r;
            else {
              g = s.data.list;
              for (var l = 0; l < r.length; l++) g.push(r[l])
            }
            s.setData({
              list: g,
              allPage: o
            }), i > o && s.setData({
              page: i - 1
            }), i == n.data.allPage && s.setData({
              searchLoadingComplete: !0
            })
          } else a.showMsg(e.data.msg ? e.data.msg : "程序异常")
        },
        complete: function () {
          setTimeout((function () {
            s.setData({
              searchFlag: !0
            })
          }), 1e3), wx.hideLoading(), 0 == e ? wx.stopPullDownRefresh() : 1 == e && s.setData({
            searchLoading: !1
          })
        }
      })
    }
  },
  cancelTap: function (a) {
    var t = a.currentTarget.dataset.id,
      e = a.currentTarget.dataset.type;
    wx.navigateTo({
      url: "/pages/cancelReservation/cancelReservation?id=" + t + "&ticketType=" + e
    })
  },
  pathDetail: function () {
    wx.navigateTo({
      url: "/pages/pathDetail/pathDetail?id=0"
    })
  },
  goTicket: function () {
    wx.switchTab({
      url: "/pages/index/index"
    })
  },
  onPullDownRefresh: function () {
    this.data.searchFlag ? (this.setData({
      page: 0,
      searchFlag: !1
    }), this.getMyData(0)) : wx.stopPullDownRefresh()
  },
  onReachBottom: function () {
    if (this.data.searchFlag) {
      var a = this.data.page;
      this.setData({
        searchLoading: !0,
        searchFlag: !1,
        page: a + 1
      }), this.getMyData(1)
    }
  }
});