var t = a(require("../../utils/postRequest")),
  e = a(require("../../utils/util"));

function a(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var n, o = require("../../utils/abc.js"),
  i = getApp().globalData.url;
Page({
  data: {
    backFlag: 1,
    hiddenBox: !1,
    timeFlag: !0,
    second: 6,
    noticeBox: !0,
    goType: 1,
    msg: ""
  },
  onLoad: function (e) {
    var a = getApp().globalData.titleBarHeight,
      n = getApp().globalData.navTop,
      o = getApp().globalData.menuHeight;
    if (this.setData({
        titleBarHeight: a,
        navTop: n,
        menuHeight: o,
        hiddenBox: !1,
        timeFlag: !0,
        second: 6
      }), this.postRequest = new t.default(this), this.countdown(), 2 == getApp().globalData.backFlag) this.setData({
      backFlag: 2
    });
    else if (e && e.backFlag) {
      var i = e.backFlag;
      i && this.setData({
        backFlag: i
      })
    }
    e && e.etype && this.setData({
      etype: e.etype
    })
  },
  countdown: function () {
    var t = this,
      e = t.data.second;
    n = setInterval((function () {
      e--, t.setData({
        second: e
      }), 0 == e && (clearInterval(n), t.setData({
        second: 6,
        timeFlag: !1
      }))
    }), 1e3)
  },
  closeBox: function () {
    clearInterval(n), this.setData({
      second: 6,
      timeFlag: !0,
      hiddenBox: !0
    })
  },
  getNotice: function (t) {
    var a = this;
    wx.showLoading({
      title: "加载中",
      mask: !0
    }), a.postRequest.postRequest(i + "ticketWechat/out/getNotice.do", {}, 0).then((function (n) {
      if (wx.hideLoading(), "0000" == n.status) {
        var i = JSON.parse(o.decrypt(n.data));
        wx.setStorageSync("closeHour", i.data.closeHour), wx.setStorageSync("ticketTip", i.data.ticketTip), null != i.data.msg && "" != i.data.msg ? a.setData({
          noticeBox: !1,
          msg: i.data.msg,
          goType: t
        }) : a.goNext(t)
      } else e.default.showMsg(n.msg ? n.msg : "程序异常")
    }))
  },
  goNext1: e.default.throttle((function () {
    this.goNext(this.data.goType), this.setData({
      noticeBox: !0
    })
  }), 2e3),
  goNext: function (t) {
    1 == t ? wx.navigateTo({
      url: "/pages/ticket/ticket?ticketType=normal"
    }) : 2 == t ? wx.navigateTo({
      url: "/pages/pathDetail/pathDetail?id=1"
    }) : (e.default.showMsg("数据丢失，即将返回首页"), setTimeout((function () {
      wx.switchTab({
        url: "/pages/index/index"
      })
    }), 1e3))
  },
  ticNotice: function (t) {
    this.setData({
      backFlag: 0
    }), 1 == this.data.etype ? this.goNext(2) : this.getNotice(2)
  },
  toTicket: e.default.throttle((function (t) {
    this.setData({
      backFlag: 0
    }), 1 == this.data.etype ? this.goNext(1) : this.getNotice(1)
  }), 1500),
  goback: function () {
    if (1 == this.data.etype) {
      var t = getCurrentPages();
      null != t && t.length > 1 ? wx.navigateBack({
        delta: 1
      }) : wx.switchTab({
        url: "/pages/index/index"
      })
    } else wx.navigateToMiniProgram({
      appId: "wx6e063f3c2759c7af",
      path: "/page/index/index"
    })
  },
  tolinkman: e.default.throttle((function (t) {
    var a = this;
    a.setData({
      backFlag: 0
    });
    var n = wx.getStorageSync("userId"),
      s = wx.getStorageSync("openId"),
      g = wx.getStorageSync("token1");
    n && s && g ? wx.navigateTo({
      url: "/pages/myLinkman/myLinkman"
    }) : wx.login({
      success: function (t) {
        if (t.code) {
          var n = t.code,
            s = (new Date).getTime(),
            g = {
              code: n,
              timestamp: s,
              sign: o.signNoParam(s)
            };
          a.postRequest.postRequest(i + "ticketWechat/out/getUnionId2021.do", o.encrypt(JSON.stringify(g)), 0).then((function (t) {
            if ("0000" == t.status) {
              var n = JSON.parse(o.decrypt(t.data)).data;
              0 == n.flag ? (a.data.openId = n.openId, a.data.tel = n.tel, wx.setStorageSync("userId", n.id), wx.setStorageSync("openId", n.openId), wx.setStorageSync("token1", n.token1), wx.setStorageSync("no", n.no), wx.setStorageSync("createTime", n.createTime), wx.setStorageSync("tel", n.tel), wx.navigateTo({
                url: "/pages/myLinkman/myLinkman"
              })) : 2 == n.flag ? e.default.showMsg("失败，请重试") : (wx.setStorageSync("openId", n.openId), wx.setStorageSync("token1", n.token1), wx.navigateTo({
                url: "/pages/phone/phone?toUrl=/pages/myLinkman/myLinkman&unionId=" + n.unionId
              }))
            } else e.default.showMsg(t.msg ? t.msg : "程序异常")
          }))
        } else e.default.showMsg("失败，请重试")
      },
      fail: function () {
        e.default.showMsg("失败，请重试")
      }
    })
  }), 2e3),
  onReady: function () {},
  onShow: function () {},
  onHide: function () {
    1 == getApp().globalData.backFlag && 1 == this.data.backFlag && wx.switchTab({
      url: "/pages/index/index"
    })
  },
  onUnload: function () {
    1 == getApp().globalData.backFlag && 1 == this.data.backFlag && wx.switchTab({
      url: "/pages/index/index"
    }), clearInterval(n)
  },
  toTeam: e.default.throttle((function () {
    this.setData({
      backFlag: 0
    }), wx.navigateTo({
      url: "/pages/teamTipsH5/teamTipsH5"
    })
  }), 2e3),
  toVR: e.default.throttle((function () {
    this.setData({
      backFlag: 0
    }), wx.navigateToMiniProgram({
      appId: "wx6e063f3c2759c7af",
      path: "/dist/pages/njbwyTicket/index"
    })
  }), 2e3),
  onPullDownRefresh: function () {},
  onReachBottom: function () {}
});