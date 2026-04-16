var t = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  e = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  a = require("../../FA9D4A90AD7FA6DF9CFB2297F7F30E96.js"),
  i = require("../../22CF3566AD7FA6DF44A95D614D730E96.js"),
  u = require("mini-i18n");

function r(t) {
  return t.getFullYear() + "-" + o(t.getMonth() + 1) + "-" + o(t.getDate())
}

function o(t) {
  return t <= 9 ? "0" + t : "" + t
}

function s(t) {
  var e = t[0];
  if (!e) return [];
  for (var a = t[t.length - 1], i = 0, n = new Date(e.subscribeDate.replace(/-/g, "/")), s = e.dayWeek - 1; s >= 1; s--) {
    var c = {
      dayWeek: s,
      canSelected: !1,
      statusValue: -1,
      subscribeDate: r(new Date(n.getTime() - 24 * ++i * 36e5))
    };
    t.unshift(c)
  }
  i = 0;
  for (var d = new Date(a.subscribeDate.replace(/-/g, "/")), u = a.dayWeek + 1; u <= 7; u++) {
    var l = {
      dayWeek: u,
      canSelected: !1,
      statusValue: -2,
      subscribeDate: r(new Date(d.getTime() + 24 * ++i * 36e5))
    };
    t.push(l)
  }
  if (t.length < 14) {
    i = 0, d = new Date(t[t.length - 1].subscribeDate.replace(/-/g, "/"));
    for (var h = 1; h <= 7; h++) {
      var f = {
        dayWeek: h,
        canSelected: !1,
        statusValue: -2,
        subscribeDate: r(new Date(d.getTime() + 24 * ++i * 36e5))
      };
      t.push(f)
    }
  }
  return t
}

function d(t, e) {
  var a = e.home;
  return void 0 === t || 0 === t ? a.available : 1 === t ? a.full : a.closed
}

Page({
  behaviors: [i.languageBehaviors],
  data: {
    isBenGuan: !0,
    isTeamAppoint: !1,
    dateArr: [],
    timeList: [],
    currentDateIndex: -1,
    currentTimeIndex: -1
  },
  onLoad: function(i) {
    var n = this,
      r = "true" === (null == i ? void 0 : i.isTeamAppoint);
    this.setData({
      isTeamAppoint: r,
      isBenGuan: getApp().globalData.museumName === a.museumName1
    }), r ? this._loadTeamCalendar() : this._loadPersonalCalendar()
  },
  /**
   * 拉取个人预约日历数据
   */
  _loadPersonalCalendar: function() {
    var a = this,
      i = getApp().globalData.companyInfoId;
    i ? (0, t.showLoading)(), (0, e.queryIsOpenReserve)(i).then((function(n) {
      if (200 !== n.code) return (0, t.hideLoading)(), void(0, e.showWarningToast)(n);
      (0, e.queryPersonal)(i).then((function(e) {
        (0, t.hideLoading)(), 200 === e.code && null != e.data ? a._applyDateList(Array.isArray(e.data) ? e.data : e.data.records || e.data.list || []) : ((0, t.toast)((null == e ? void 0 : e.msg) || "加载失败"), console.error("queryPersonal", e))
      })).catch((function(e) {
        (0, t.hideLoading)(), console.error(e), (0, t.modal)("网络异常，请稍后重试")
      }))
    })).catch((function(e) {
      (0, t.hideLoading)(), console.error(e)
    })) : (0, t.toast)("缺少场馆信息")
  },
  /**
   * 拉取团队预约日历（接口返回结构不一致时仅提示）
   */
  _loadTeamCalendar: function() {
    var a = this,
      i = getApp().globalData.companyInfoId;
    i ? (0, t.showLoading)(), (0, e.queryTeamAppointPersonal)(i).then((function(e) {
      if ((0, t.hideLoading)(), 200 !== e.code) return void(0, t.toast)(e.msg || "团队预约加载失败");
      var i = Array.isArray(e.data) ? e.data : (e.data || {}).records || (e.data || {}).list || [];
      i.length ? a._applyDateList(i) : (0, t.toast)("暂无可预约日期")
    })).catch((function(e) {
      (0, t.hideLoading)(), console.error(e), (0, t.modal)("网络异常，请稍后重试")
    })) : (0, t.toast)("缺少场馆信息")
  },
  /**
   * 处理并展示日期与时段
   */
  _applyDateList: function(e) {
    var a = this,
      n = {
        home: u.t("home")
      };
    if (!e.length) return void(0, t.toast)("暂无可预约日期");
    var i = s(e);
    i.forEach((function(e) {
      e.dayNum = e.subscribeDate.substr(8, 2), e.month = e.subscribeDate.substr(5, 2) + "月";
      var a = new Date(e.subscribeDate.replace(/-/g, "/")).getTime() === new Date((0, t.getCurrentDateTime)().substr(0, 10)).getTime();
      e.isToday = !!a, e.stateText = d(e.statusValue, n)
    }));
    var o = i.find((function(t) {
        return t.isToday
      })),
      l = i.findIndex((function(t) {
        return 0 === t.statusValue
      })),
      h = o ? i.indexOf(o) : l >= 0 ? l : 0;
    this.setData({
      dateArr: i,
      currentDateIndex: h,
      currentTimeIndex: -1
    }, (function() {
      a._syncTimeList()
    }))
  },
  /**
   * 根据当前选中日期刷新时段列表
   */
  _syncTimeList: function() {
    var e = this.data,
      a = e.dateArr,
      i = e.currentDateIndex,
      n = {
        home: u.t("home")
      };
    if (!(i >= 0) || !a[i]) return void this.setData({
      timeList: [],
      currentTimeIndex: -1
    });
    var o = a[i].subscribeTimeLineInfoList || [],
      s = o.map((function(t) {
        return Object.assign({}, t, {
          statusText: d(t.statusValue, n)
        })
      })),
      c = s.findIndex((function(t) {
        return 0 === t.statusValue
      }));
    this.setData({
      timeList: s,
      currentTimeIndex: c >= 0 ? c : -1
    })
  },
  /**
   * 点击日期
   */
  onDateTap: function(e) {
    var a = parseInt(e.currentTarget.dataset.index, 10),
      i = this.data.dateArr[a];
    i && 0 === i.statusValue ? (this.setData({
      currentDateIndex: a,
      currentTimeIndex: -1
    }), this._syncTimeList()) : (0, t.toast)("请重新选择可预约日期")
  },
  /**
   * 点击时段
   */
  onTimeTap: function(e) {
    var a = parseInt(e.currentTarget.dataset.index, 10),
      i = this.data.timeList[a];
    i && 0 === i.statusValue ? this.setData({
      currentTimeIndex: a
    }) : (0, t.toast)("请重新选择可预约时段")
  },
  /**
   * 下一步：写入草稿并进入预约须知
   */
  onNext: function() {
    var a = this.data,
      i = a.dateArr,
      n = a.currentDateIndex,
      o = a.currentTimeIndex;
    if (n < 0) return void(0, t.toast)("请先选择入馆日期");
    if (o < 0) return void(0, t.toast)("请先选择入馆时段");
    var s = i[n],
      c = (s.subscribeTimeLineInfoList || [])[o];
    if (!c) return void(0, t.toast)("时段数据异常");
    getApp().globalData.personalReserveDraft = {
      reserveDate: s.subscribeDate,
      reserveTime: c.timeLine,
      ticketId: c.ticketId,
      ruleCode: c.ruleCode || s.ruleCode || (getApp().globalData.personalReserveRule || {}).ruleCode,
      isTeamAppoint: this.data.isTeamAppoint ? 1 : 0,
      companyInfoId: getApp().globalData.companyInfoId
    }, wx.navigateTo({
      url: "./notice"
    })
  }
});
