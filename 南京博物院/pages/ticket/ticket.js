var t, e = require("../../@babel/runtime/helpers/toConsumableArray"),
  a = (t = require("../../utils/postRequest")) && t.__esModule ? t : {
    default: t
  };
var s = require("../../utils/util.js"),
  o = require("../../utils/abc.js");
Page({
  data: {
    week: ["一", "二", "三", "四", "五", "六", "日"],
    currentDayList: [],
    showMonth: "",
    today: "",
    flag: 0,
    closeHour: "",
    ticketTip: "温馨提示：<br>参观门票分上午票和下午票。上午票最晚请于当天13:00前进馆，下午票请于当天12:00~16:00之间进馆。"
  },
  onLoad: function (t) {
    var e = t.ticketType,
      o = getApp().globalData.url,
      n = getApp().globalData.isIphoneX;
    this.postRequest = new a.default(this);
    var r = wx.getStorageSync("closeHour"),
      i = wx.getStorageSync("ticketTip");
    this.setData({
      url: o,
      isIphoneX: n,
      ticketType: e,
      closeHour: s.isNull(r) ? "" : r,
      ticketTip: s.isNull(i) ? this.data.ticketTip : i
    })
  },
  onShow: function () {
    this.getDatas()
  },
  getDatas: function (t) {
    wx.showLoading({
      title: "加载中",
      mask: !0
    });
    var e = this,
      a = e.data.url,
      n = [],
      r = t ? s.formatDate(t) : "",
      i = (new Date).getTime(),
      u = {
        date: r,
        timestamp: i,
        sign: o.signNoParam(i)
      };
    wx.request({
      url: a + "ticketWechat/out/getEntranceTickets1.do",
      data: o.encrypt(JSON.stringify(u)),
      method: "POST",
      header: {
        "content-type": "application/json"
      },
      success: function (t) {
        if (200 == t.statusCode && "0000" == t.data.status) {
          var a = JSON.parse(o.decrypt(t.data.data));
          if (null != (n = a.data.list) && n.length > 0) {
            var r = new Date(a.data.fristDay),
              i = s.formatMonth(r);
            e.setData({
              flag: a.data.flag,
              showMonth: i
            }), e.setSchedule(r, n)
          }
        } else s.showMsg(t.data.msg ? t.data.msg : "程序异常")
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
  },
  listHasDay: function (t, e) {
    for (var a = 0; a < t.length; a++)
      if (e == t[a].day) return a;
    return -1
  },
  setSchedule: function (t, a) {
    for (var s = t.getMonth() + 1, o = t.getFullYear(), n = t.getDate(), r = new Date(o, s, 0).getDate(), i = t.getDay() - (n % 7 - 1), u = i <= 0 ? 7 + i : i, d = parseInt(a[0].day), l = parseInt(a[a.length - 1].day), g = [], c = 0; c < u - 1; c++) {
      var h = {
        day: "",
        content: "",
        styl: "noday",
        morSurplusNum: "",
        aftSurplusNum: "",
        useNum: ""
      };
      g[c] = h
    }
    for (c = 1; c < d; c++) {
      h = {
        day: c,
        content: "已结束",
        styl: "showday",
        morSurplusNum: "",
        aftSurplusNum: "",
        useNum: ""
      };
      g.push(h)
    }
    g.push.apply(g, e(a));
    for (c = l + 1; c < r + 1; c++) {
      h = {
        day: c,
        content: "未开放",
        styl: "showday",
        morSurplusNum: "",
        aftSurplusNum: "",
        useNum: ""
      };
      g.push(h)
    }
    var p = 42 - r - u + 1;
    for (c = 0; c < p; c++) {
      h = {
        day: "",
        content: "",
        styl: "noday",
        morSurplusNum: "",
        aftSurplusNum: "",
        useNum: ""
      };
      g.push(h)
    }
    this.setData({
      currentDayList: g
    })
  },
  doDay: function (t) {
    var e = new Date(this.data.showMonth),
      a = e.getFullYear(),
      s = e.getMonth() + 1,
      o = "";
    o = "left" == t.currentTarget.dataset.key ? (s -= 1) <= 0 ? a - 1 + "/12/1" : a + "/" + s + "/1" : (s += 1) <= 12 ? a + "/" + s + "/1" : a + 1 + "/1/1", e = new Date(o), this.getDatas(e)
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading(), this.onShow(), wx.stopPullDownRefresh()
  },
  toReservation: s.throttle((function (t) {
    var e = this.data.ticketType,
      a = t.currentTarget.dataset.styl,
      s = t.currentTarget.dataset.date;
    if (s && ("reserve" == a || "today" == a)) {
      var o = wx.getStorageSync("userId"),
        n = wx.getStorageSync("token1");
      o && "" != o && n ? wx.navigateTo({
        url: "/pages/reservationP/reservationP?date=" + s + "&ticketType=" + e
      }) : this.getUser2(s, e)
    }
  }), 1e3),
  getUser2: function (t, e) {
    var a = this;
    wx.showLoading({
      title: "加载中"
    }), wx.login({
      success: function (n) {
        if (n.code) {
          var r = n.code,
            i = (new Date).getTime(),
            u = {
              code: r,
              timestamp: i,
              sign: o.signNoParam(i)
            };
          a.postRequest.postRequest(a.data.url + "ticketWechat/out/getUnionId2021.do", o.encrypt(JSON.stringify(u)), 0).then((function (n) {
            if (wx.hideLoading(), "0000" == n.status) {
              var r = JSON.parse(o.decrypt(n.data)).data;
              0 == r.flag ? (a.data.userId = r.id, a.data.unionId = r.unionId, a.data.openId = r.openId, a.data.tel = r.tel, wx.setStorageSync("userId", r.id), wx.setStorageSync("openId", r.openId), wx.setStorageSync("token1", r.token1), wx.setStorageSync("no", r.no), wx.setStorageSync("createTime", r.createTime), wx.setStorageSync("tel", r.tel), wx.navigateTo({
                url: "/pages/reservationP/reservationP?date=" + t + "&ticketType=" + e
              })) : 2 == r.flag ? s.showMsg("失败，请重试") : (wx.setStorageSync("openId", r.openId), wx.setStorageSync("token1", r.token1), wx.navigateTo({
                url: "/pages/phone/phone?unionId=" + r.unionId
              }))
            } else s.showMsg(n.msg ? n.msg : "程序异常")
          }))
        } else wx.hideLoading(), s.showMsg("失败，请重试")
      },
      fail: function () {
        wx.hideLoading(), s.showMsg("失败，请重试")
      }
    })
  }
});