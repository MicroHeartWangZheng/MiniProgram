var t = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  e = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  i = function(t, e) {
    if (!e && t && t.__esModule) return t;
    if (null === t || "object" != typeof t && "function" != typeof t) return {
      default: t
    };
    var i = r(e);
    if (i && i.has(t)) return i.get(t);
    var a = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var n in t)
      if ("default" !== n && Object.prototype.hasOwnProperty.call(t, n)) {
        var s = c ? Object.getOwnPropertyDescriptor(t, n) : null;
        s && (s.get || s.set) ? Object.defineProperty(a, n, s) : a[n] = t[n]
      } a.default = t, i && i.set(t, a);
    return a
  }(require("../../04BA0E47AD7FA6DF62DC664011540E96.js")),
  a = require("../../22CF3566AD7FA6DF44A95D614D730E96.js");

function r(t) {
  if ("function" != typeof WeakMap) return null;
  var e = new WeakMap,
    i = new WeakMap;
  return (r = function(t) {
    return t ? i : e
  })(t)
}
var c = "";

function n(a) {
  (0, t.queryOrderActivityList)(c).then((function(r) {
    if (console.log("activityId", r), 200 == r.code) {
      null != r.data.activity.cost && "" != r.data.activity.cost || (r.data.activity.cost = 0);
      var c = r.data.list,
        n = r.data.activity;
      null === n.endTime || "" === n.endTime ? (n.startTime = n.startTime.substring(0, 16), n.timeLabelStr = n.startTime + " 开始") : (n.startTime = n.startTime.substring(0, 16), n.endTime = n.endTime.substring(0, 16), n.timeLabelStr = n.startTime + "至" + n.endTime), a.setData({
        activity: n,
        list: c
      }), r.data.list.length > 0 ? r.data.list.forEach((function(t, e) {
        (0, i.default)(t.reserveNo, "canvas".concat(e), 300)
      })) : (0, e.modal)("未预约当前活动", (function() {
        wx.redirectTo({
          url: "./activityDetail?id=".concat(r.data.activity.activityId)
        })
      }))
    } else(0, t.showWarningToast)(r, "活动签到失败")
  })).catch((function(e) {
    (0, t.defaultCatch)(e, "活动签到异常")
  }))
}
Page({
  behaviors: [a.languageBehaviors],
  data: {
    checkedIds: [],
    activity: {},
    list: [],
    qrcode_w: (0, i.rpx2px)(300)
  },
  onLoad: function(t) {
    c = t.activityId, n(this)
  },
  activityTitleClick: function(t) {
    wx.redirectTo({
      url: "../activity/activityDetail?id=" + c
    })
  },
  radioTap: function(t) {
    var e = t.currentTarget.dataset.index,
      i = this.data.list;
    if (console.log("list", i[e].reserveStatus), 0 == i[e].reserveStatus || 4 == i[e].reserveStatus) {
      var a = this.data.checkedIds;
      i[e].checked = !i[e].checked;
      var r = a.indexOf(i[e].orderActivityId);
      i[e].checked && -1 == r ? a.push(i[e].orderActivityId) : i[e].checked || -1 == r || a.splice(r, 1), this.setData({
        list: i,
        checkedIds: a
      })
    }
  },
  btnClick: function() {
    var i = this;
    (0, t.activitySignIn)(this.data.checkedIds).then((function(t) {
      200 == t.code ? (i.setData({
        checkedIds: []
      }), (0, e.modalWithCancel)("签到成功", (function() {
        n(i)
      }))) : (0, e.toast)(t.msg)
    })).catch((function(e) {
      (0, t.defaultCatch)(e, "签到异常")
    }))
  }
});