var t, i = (t = require("../../utils/postRequest")) && t.__esModule ? t : {
  default: t
};
require("../../utils/card.js");
var n, a = require("../../utils/util.js"),
  s = require("../../utils/abc.js"),
  o = require("../../utils/log.js"),
  d = !0,
  r = require("../../utils/turingSDK.js"),
  c = "",
  l = !1;
Page({
  data: {
    ticketIndex: -1,
    hiddenMask: !0,
    hiddenModal: !0,
    tipsModal: !0,
    tipsModal2: !0,
    items: [],
    sumItem: null
  },
  onReady: function () {
    c = "", l = !1;
    var t = wx.getStorageSync("openId");
    t && r.init({
      channel: "109020",
      openid: t,
      implement: {
        getTouch: function (t) {
          null != (n = t) && n.onTouch("cbtn", e)
        }
      }
    }, (function (t) {
      0 == t.ret ? l = !0 : (o.warn(wx.getStorageSync("tel") + "turingSDK初始化失败： " + JSON.stringify(t)), o.setFilterMsg("turingSDK"))
    }))
  },
  onLoad: function (t) {
    d = !1;
    var e = getApp().globalData.isIphoneX,
      n = getApp().globalData.url,
      s = t.date,
      o = t.ticketType;
    o = a.isNull(o) ? "normal" : o, this.setData({
      url: n,
      isIphoneX: e,
      date: s,
      ticketType: o
    }), this.postRequest = new i.default(this), this.initPage()
  },
  initPage: function () {
    wx.showLoading({
      title: "加载中",
      mask: !0
    });
    var t = this,
      e = t.data.url,
      i = (new Date).getTime(),
      n = wx.getStorageSync("userId"),
      d = wx.getStorageSync("no"),
      r = wx.getStorageSync("token1"),
      c = {
        date: t.data.date,
        userId: n,
        checkstr: d,
        token1: r,
        timestamp: i,
        sign: s.sign(i, n)
      };
    this.postRequest.postRequest(e + "ticketWechat/out/getEntranceTicketP.do", s.encrypt(JSON.stringify(c)), 0, 1).then((function (e) {
      if (wx.hideLoading(), "0000" == e.status) {
        var i = JSON.parse(s.decrypt(e.data)).data;
        if (i) try {
          for (var n = i.list, d = 0; d < n.length; d++) {
            var r = n[d];
            if (r.stopDiff > 0 && r.num > 0) {
              t.setData({
                ticketIndex: d
              });
              break
            }
          }
          t.setData({
            items: n,
            sumItem: i.sumItem,
            time: i.dateStr
          })
        } catch (t) {
          o.warn("init页面setData出错 " + JSON.stringify(i))
        } else o.warn("查询ticket失败到错误页面"), wx.navigateTo({
          url: "/pages/error/error?init=1"
        })
      } else a.showMsg(e.msg ? e.msg : "程序异常")
    }))
  },
  onShow: function () {
    d = !0
  },
  selectTap: function (t) {
    var e = t.target.dataset.index;
    try {
      var i = this.data.items[e];
      if (this.data.ticketIndex === e) return !1;
      if (!i) return !1;
      if (i.num < 1 || i.stopDiff <= 0) return !1;
      this.setData({
        ticketIndex: e
      })
    } catch (t) {
      o.warn("查询票段失败 " + id)
    }
  },
  hideModal: function () {
    this.setData({
      hiddenMask: !0,
      hiddenModal: !0,
      tipsModal: !0,
      tipsModal2: !0,
      msg1: "",
      msg2: ""
    })
  },
  del: function (t) {
    var e = t.currentTarget.dataset.index;
    this.setData({
      hiddenMask: !1,
      hiddenModal: !1,
      delOne: e
    })
  },
  delLink: function () {
    var t = this.data.delOne,
      e = this.data.linkmans;
    e.splice(t, 1), this.setData({
      linkmans: e
    }), this.hideModal()
  },
  toAddLinkman: a.throttle((function (t) {
    wx.showLoading({
      title: "加载中",
      mask: !0
    });
    var e = "";
    this.data.linkmans && this.data.linkmans.length > 0 && (e = JSON.stringify(this.data.linkmans)), wx.navigateTo({
      url: "/pages/addLinkman/addLinkman?ticketType=" + this.data.ticketType + "&time=" + this.data.time + "&linkmans=" + e
    })
  }), 1e3),
  order: a.throttle((function (t) {
    wx.showLoading({
      title: "校验中",
      mask: !0
    });
    var e = this,
      i = e.data.items[e.data.ticketIndex];
    if (l && i && 1 == i.riskType) {
      r.getDeviceTokenV2((function (t) {
        wx.hideLoading(), 0 == t.ret ? (c = t.deviceToken, e.showTips()) : (c = "", e.showTips(), o.warn(wx.getStorageSync("tel") + "turingSDK获取token失败： " + JSON.stringify(t)), o.setFilterMsg("turingSDK"))
      }), !0, {
        page: this,
        timeout: 1e4
      })
    } else wx.hideLoading(), c = "", e.showTips()
  }), 1e3),
  showTips: function () {
    this.setData({
      hiddenMask: !1,
      tipsModal: !1
    })
  },
  closeTips: a.throttle((function (t) {
    if (d) {
      d = !1;
      var e = this;
      e.setData({
        hiddenMask: !0,
        tipsModal: !0,
        tipsModal2: !0
      });
      var i = wx.getStorageSync("userId"),
        n = wx.getStorageSync("tel");
      if (i && n && "" != i && "" != n) {
        wx.showLoading({
          title: "下单中",
          mask: !0
        });
        var o = e.data.linkmans,
          r = e.data.ticketType,
          l = e.data.items[e.data.ticketIndex];
        if (l)
          if (o.length > l.num) wx.hideLoading(), wx.showToast({
            content: "抱歉!预约人数超过剩余票数！",
            icon: "none",
            duration: 3e3
          }), d = !0;
          else if (o && o.length > 5) wx.hideLoading(), wx.showToast({
          content: "抱歉!最多可预约5个人！",
          icon: "none",
          duration: 3e3
        }), d = !0;
        else if (o && o.length > 0) {
          if ("normal" != r) {
            for (var g = 0, h = 0, u = 0; u < o.length; u++) o[u].isChild ? h++ : g++;
            if (h > 3) return wx.hideLoading(), wx.showToast({
              content: "抱歉!一个订单最多只能有三位未成年人！",
              icon: "none",
              duration: 3e3
            }), d = !0, !1;
            if (h < 1) return wx.hideLoading(), wx.showToast({
              content: "抱歉!一个订单最少要有一位未成年人！",
              icon: "none",
              duration: 3e3
            }), d = !0, !1;
            if (g < 1) return wx.hideLoading(), wx.showToast({
              content: "抱歉!一个订单最少要有一位成年人！",
              icon: "none",
              duration: 3e3
            }), d = !0, !1;
            o[0].childNum = h
          }
          var w = e.data.url + "ticketWechat/out/saveOrderTicketP.do",
            m = JSON.stringify(o),
            f = (new Date).getTime(),
            k = wx.getStorageSync("no"),
            p = wx.getStorageSync("token1"),
            x = {
              deviceToken: c,
              date: e.data.time,
              userId: i,
              linkmans: m,
              ticketId: l.id,
              tel: n,
              ticketType: r,
              timestamp: f,
              checkstr: k,
              token1: p,
              sign: s.sign(f, i)
            };
          e.postRequest.postRequest(w, s.encrypt(JSON.stringify(x)), 0, 0).then((function (t) {
            if ("0000" == t.status) {
              var i = JSON.parse(s.decrypt(t.data)).data,
                n = i.code;
              d = !0, wx.hideLoading(), 0 == n ? wx.redirectTo({
                url: "/pages/reservationSuccessP/reservationSuccessP?time=" + e.data.time + "&period=" + JSON.stringify(l) + "&linkmansStr=" + m + "&ticketType=" + r + "&rankNum=" + i.myRank
              }) : -1 == n ? wx.showModal({
                content: i.msg ? i.msg : "操作失败",
                showCancel: !1,
                confirmColor: "#AC732E",
                success: function (t) {
                  t.confirm && wx.redirectTo({
                    url: "/pages/ticket/ticket?ticketType=" + r
                  })
                }
              }) : -10 == n ? i.type && 1 == i.type ? e.setData({
                hiddenMask: !1,
                tipsModal2: !1,
                msg1: i.msg,
                msg2: i.msg2
              }) : wx.showModal({
                content: i.msg ? i.msg : "操作失败",
                showCancel: !1,
                confirmColor: "#AC732E"
              }) : wx.showModal({
                content: "预约失败，请重试",
                showCancel: !1,
                confirmColor: "#AC732E"
              })
            } else wx.hideLoading(), d = !0, a.showMsg(t.msg ? t.msg : "程序异常")
          }))
        } else wx.hideLoading(), a.showMsg("系统异常，请重试");
        else wx.hideLoading(), a.showMsg("请选择进馆时间段")
      } else wx.showModal({
        content: "缓存数据丢失，请重新进入",
        showCancel: !1,
        confirmColor: "#AC732E",
        success: function (t) {
          t.confirm && wx.switchTab({
            url: "/pages/index/index"
          })
        }
      })
    }
  }), 1e3)
});