var e = function (e) {
  return (e = e.toString())[1] ? e : "0" + e
};
var t = function (e) {
  wx.showToast({
    title: e,
    duration: 2e3,
    mask: !0,
    icon: "none"
  })
};
module.exports = {
  formatTime: function (t) {
    var n = (new Date).getTimezoneOffset(),
      o = (t = new Date(t.getTime() + 60 * n * 1e3 + 288e5)).getFullYear(),
      r = t.getMonth() + 1,
      a = t.getDate(),
      i = t.getHours(),
      u = t.getMinutes(),
      f = t.getSeconds();
    return [o, r, a].map(e).join("/") + " " + [i, u, f].map(e).join(":")
  },
  formatDate: function (t) {
    var n = (new Date).getTimezoneOffset();
    return [(t = new Date(t.getTime() + 60 * n * 1e3 + 288e5)).getFullYear(), t.getMonth() + 1, t.getDate()].map(e).join("-")
  },
  formatMonth: function (t) {
    var n = (new Date).getTimezoneOffset();
    return [(t = new Date(t.getTime() + 60 * n * 1e3 + 288e5)).getFullYear(), t.getMonth() + 1].map(e).join("-")
  },
  formatYear: function (t) {
    var n = (new Date).getTimezoneOffset();
    return [(t = new Date(t.getTime() + 60 * n * 1e3 + 288e5)).getFullYear()].map(e) + ""
  },
  throttle: function (e, t) {
    null != t && null != t || (t = 1500);
    var n = null;
    return function () {
      var o = +new Date;
      (o - n > t || !n) && (e.apply(this, arguments), n = o)
    }
  },
  isNull: function (e) {
    return !e || "undefined" == e
  },
  showMsg: t,
  showButMsg: function (e) {
    wx.showModal({
      title: "提示",
      content: e,
      showCancel: !1
    })
  },
  compareVersion: function (e, t) {
    e = e.split("."), t = t.split(".");
    for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");
    for (; t.length < n;) t.push("0");
    for (var o = 0; o < n; o++) {
      var r = parseInt(e[o]),
        a = parseInt(t[o]);
      if (r > a) return 1;
      if (r < a) return -1
    }
    return 0
  },
  showLoad: function (e) {
    wx.showLoading({
      title: e || "处理中",
      mask: !0
    })
  },
  pageExpire: function (e) {
    t("页面失效，即将返回首页"), setTimeout((function () {
      wx.reLaunch({
        url: e
      })
    }), 2e3)
  },
  reLogin: function () {
    t("登录数据失效，请重新登录"), setTimeout((function () {
      wx.switchTab({
        url: "/pages/index/index"
      })
    }), 2e3)
  },
  toDou: function (e) {
    return e < 10 ? "0" + e : "" + e
  }
};