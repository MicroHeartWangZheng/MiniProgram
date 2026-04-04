var t, a = (t = require("../../utils/postRequest")) && t.__esModule ? t : {
  default: t
};
var e = require("../../utils/util.js"),
  i = require("../../utils/abc.js"),
  n = getApp().globalData.url;
Page({
  data: {
    animCss1: {},
    animCss2: {},
    animCss3: {},
    animCss4: {},
    dotCss1: {},
    dotCss2: {},
    dotCss3: {},
    wList: 0
  },
  onLoad: function (t) {
    var e = getApp().globalData.isIphoneX,
      i = getApp().globalData.titleBarHeight,
      n = getApp().globalData.navTop,
      s = getApp().globalData.menuHeight;
    this.setData({
      isIphoneX: e,
      titleBarHeight: i,
      navTop: n,
      menuHeight: s,
      animCss1: "-webkit-animation: anim1 1s cubic-bezier(.29,.68,.47,1.43) forwards;animation: anim1 1s cubic-bezier(.29,.68,.47,1.43) forwards",
      animCss2: "-webkit-animation: anim2 1s cubic-bezier(.29,.68,.47,1.43) forwards;animation: anim2 1s cubic-bezier(.29,.68,.47,1.43) forwards",
      animCss3: "-webkit-animation: anim3 1s cubic-bezier(.29,.68,.47,1.43) forwards;animation: anim3 1s cubic-bezier(.29,.68,.47,1.43) forwards",
      animCss4: "-webkit-animation: anim4 1s cubic-bezier(.29,.68,.47,1.43) forwards;animation: anim4 1s cubic-bezier(.29,.68,.47,1.43) forwards",
      animCss5: "-webkit-animation: anim5 1s cubic-bezier(.29,.68,.47,1.43) forwards;animation: anim5 1s cubic-bezier(.29,.68,.47,1.43) forwards",
      dotCss1: "-webkit-animation: animdot1 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 1s forwards;animation: animdot1 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 1s forwards;",
      dotCss2: "-webkit-animation: animdot2 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 1s forwards;animation: animdot2 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 1s forwards;",
      dotCss3: "-webkit-animation: animdot3 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 1s forwards;-animation: animdot3 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 1s forwards;"
    }), this.postRequest = new a.default(this), wx.showShareMenu({
      withShareTicket: !0
    })
  },
  onShow: function () {
    this.data.userId = wx.getStorageSync("userId"), this.data.openId = wx.getStorageSync("openId"), this.data.tel = wx.getStorageSync("tel")
  },
  getUserMsg1: e.throttle((function (t) {
    wx.showLoading({
      title: "加载中",
      mask: !0
    }), wx.request({
      url: n + "ticketWechat/out/getNotice.do",
      data: {},
      header: {
        "content-type": "application/json"
      },
      success: function (a) {
        if (200 == a.statusCode && "0000" == a.data.status) {
          var n = JSON.parse(i.decrypt(a.data.data));
          t.currentTarget.dataset.url;
          wx.setStorageSync("closeHour", n.data.closeHour), wx.setStorageSync("ticketTip", n.data.ticketTip), null != n.data.msg && "" != n.data.msg ? wx.showModal({
            title: "温馨提示",
            content: "" + n.data.msg,
            showCancel: !1,
            success: function (t) {
              t.confirm && wx.navigateTo({
                url: "/pages/selTicketType/selTicketType?etype=1"
              })
            }
          }) : wx.navigateTo({
            url: "/pages/selTicketType/selTicketType?etype=1"
          })
        } else e.showMsg(a.data.msg ? a.data.msg : "程序异常")
      },
      fail: function () {
        wx.showToast({
          title: "网络错误，请重试",
          icon: "none",
          duration: 2e3
        })
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  }), 2e3),
  getUserMsg: e.throttle((function (t) {
    this.goNext(t.currentTarget.dataset.url)
  }), 2e3),
  goNext: function (t) {
    var a = this.data.userId,
      e = this.data.tel;
    "toWenba0" == t ? wx.navigateTo({
      url: "/wbpackage/pages/wenba/wenba"
    }) : "toWenba1" == t ? wx.navigateTo({
      url: "/wbpackage/pages/wblist/wblist?id=1"
    }) : "toWenba2" == t ? wx.navigateTo({
      url: "/wbpackage/pages/wblist/wblist?id=2"
    }) : "toWenba3" == t ? wx.navigateTo({
      url: "/wbpackage/pages/wblist/wblist?id=3"
    }) : "toWenba4" == t ? wx.navigateTo({
      url: "/wbpackage/pages/wblist/wblist?id=4"
    }) : "toOther" == t ? a && e ? wx.navigateToMiniProgram({
      appId: "wxd194fd0d80f89a44",
      path: "pages/ticket/index/index",
      extraData: {
        userId: a,
        tel: e
      },
      fail: function () {
        butable = !0
      }
    }) : (wx.showToast({
      title: "请先登录",
      icon: "none",
      duration: 2e3
    }), setTimeout((function () {
      wx.switchTab({
        url: "/pages/member/member"
      })
    }), 1e3)) : wx.navigateTo({
      url: t
    })
  },
  checkTime: function () {
    var t = new Date,
      a = t.getHours(),
      e = t.getDay();
    if (a < 9) return !1;
    var i = t.getMinutes();
    return !(1 == e && a > 11) && (1 == e || !(a > 17 || 14 == a && i > 30))
  },
  authorize: function (t, a) {
    var e = this;
    wx.getSetting({
      success: function (i) {
        i.authSetting["scope.userLocation"] ? t(a) : wx.authorize({
          scope: "scope.userLocation",
          success: function () {
            t(a)
          },
          fail: function (i) {
            "authorize:fail authorize no response" !== i.errMsg ? (e.setData({
              setting: !0
            }), butable = !0) : e.authorize(t, a)
          }
        })
      }
    })
  },
  getLocation: function (t) {
    var a = this;
    wx.getLocation({
      success: function (e) {
        e.latitude, e.longitude;
        if (e.latitude > 32.034201 && e.latitude < 32.047988 && e.longitude > 118.815422 && e.longitude < 118.833232)
          if (1 == t) wx.navigateTo({
            url: "/wbpackage/pages/wenba/wenba"
          });
          else {
            var i = a.data.wList;
            wx.navigateTo({
              url: "/wbpackage/pages/wblist/wblist?id=" + i
            })
          }
        else a.setData({
          tip: !0
        }), butable = !0
      },
      fail: function (t) {
        wx.showModal({
          title: "提示",
          content: "定位失败，请于系统设置中允许微信访问位置信息",
          showCancel: !1
        }), butable = !0
      },
      complete: function () {}
    })
  },
  setted: function (t) {
    t.detail.authSetting["scope.userLocation"] && (this.setData({
      setting: !1
    }), this.getLocation())
  },
  hideModal: function () {
    this.setData({
      tip: !1
    })
  },
  onHide: function () {},
  onUnload: function () {},
  onShareAppMessage: function () {
    return {
      title: "南京博物院",
      imageUrl: "/lib/images/share.jpg",
      path: "/pages/ticket/ticket"
    }
  },
  toPark: function () {
    wx.navigateToMiniProgram({
      appId: "wxbd08b4baa10fcc1d",
      path: "pages/order/order",
      extraData: {
        union_id: "200139",
        park_id: "51297"
      }
    })
  },
  toBus: function () {
    wx.navigateToMiniProgram({
      appId: "wxbd08b4baa10fcc1d",
      path: "pages/order/order",
      extraData: {
        union_id: "200334",
        park_id: "58741"
      }
    })
  },
  openPrivacyContract: function () {
    wx.navigateTo({
      url: "/pages/privacyContractH5/privacyContractH5"
    })
  }
});