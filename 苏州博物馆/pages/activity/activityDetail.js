var e, t = require("../../@babel/runtime/helpers/objectSpread2"),
  a = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  i = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  n = (e = require("../../E5529FA7AD7FA6DF8334F7A08A930E96.js")) && e.__esModule ? e : {
    default: e
  },
  r = require("../../22CF3566AD7FA6DF44A95D614D730E96.js");
var o = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "Augest",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
};

function s(e) {
  return e.getFullYear() + "-" + c(e.getMonth() + 1) + "-" + c(e.getDate())
}

function c(e) {
  return e <= 9 ? "0" + e : e
}
Page({
  behaviors: [r.languageBehaviors],
  data: {
    id: "",
    detail: {},
    dateArr: [],
    activityType: 0,
    startTime: "",
    endTime: "",
    selectAct: [],
    showDate: [],
    allMonth: [(new Date).getMonth() + 1],
    showMonth: (new Date).getMonth() + 1,
    monthViewText: "",
    riliView: !1,
    ticketType: [],
    isVip: !1,
    isVol: !1,
    canRe: !0,
    selTicketId: "",
    specialId: "53d3902627e94484988ff204ee3c24ca,4b061cb7f96b49d78b2080dcd7132e0d"
  },
  onLoad: function(e) {
    var t = wx.getMenuButtonBoundingClientRect(),
      a = "en_US" === this.data.currentLanguage ? o[(new Date).getMonth() + 1] + " " + (new Date).getFullYear() : (new Date).getFullYear() + "年" + (Number((new Date).getMonth()) + 1) + "月";
    console.log("currentLanguage", this.data.currentLanguage, a), this.setData({
      id: e.id,
      titleBarTop: (0, i.px2rpx)(t.top + t.height / 2) - 32,
      monthViewText: a
    }), this.getDetail(e.id)
  },
  onShow: function() {
    this.getUserInfo()
  },
  getUserInfo: function() {
    var e = this;
    if ("" != getApp().globalData.authorizationc) {
      var t = wx.getStorageSync(getApp().globalData.openId + "__realName");
      if (t) {
        var n = JSON.parse(t).showDocumentNumber;
        (0, a.queryIsVip)().then((function(t) {
          t.data && 1 == t.data.state && e.setData({
            isVip: !0
          })
        })), (0, a.queryIsVolByDocumentNumber)([n]).then((function(t) {
          t.data[0] && e.setData({
            isVol: !0
          })
        }))
      } else(0, i.toast)("请实名认证后预约")
    } else(0, i.modalWithCancel)("请先登录", (function() {
      (0, i.navigateTo)("../login/login")
    }))
  },
  getDetail: function(e) {
    var r = this;
    (0, i.showLoading)(), (0, a.activityQueryById)(e).then((function(e) {
      if ((0, i.hideLoading)(), 200 === e.code) {
        var o = e.data;
        if (o.coverImage = o.coverImage ? (0, a.fullImageUrlSaaS)(o.coverImage) : "../../images/actappoint/defaultImg.jpg", o.time = o.mainType ? "".concat(o.startTime, "~").concat(o.endTime) : (0, i.formatTimeInterval)(o.startTime, o.endTime), o.reserveTime = "", o.reserveStartTime && o.reserveEndTime && (o.reserveTime = (0, i.formatTimeInterval2)(o.reserveStartTime, o.reserveEndTime)), (0, n.default)(o, !1), o.remark = o.remark ? r.richImgAuto(o.remark) : "", 1 == o.mainType && o.buyTicketVOS.length > 0) {
          var l = o.buyTicketVOS;
          (l = function(e) {
            for (var t = e[0], a = e[e.length - 1], n = 0, r = new Date(null == t ? void 0 : t.dayTime.replace(/-/g, "/")), o = t.dayWeek - 1; o >= 1; o--) {
              var c = {
                dayWeek: o,
                canSelected: !1,
                status: -1,
                dayTime: s(new Date(r.getTime() - 24 * ++n * 3600 * 1e3))
              };
              e.unshift(c)
            }
            n = 0;
            for (var l = new Date(a.dayTime.replace(/-/g, "/")), u = a.dayWeek + 1; u <= 7; u++) {
              var d = {
                dayWeek: u,
                canSelected: !1,
                status: -2,
                dayTime: s(new Date(l.getTime() + 24 * ++n * 3600 * 1e3))
              };
              e.push(d)
            }
            var m = e[0].dayTime.split("-")[0],
              g = e[e.length - 1].dayTime.split("-")[0],
              h = e[0].dayTime.split("-")[1],
              f = e[e.length - 1].dayTime.split("-")[1],
              p = Number(e[0].dayTime.split("-")[2]),
              v = e[e.length - 1].dayTime.split("-")[2],
              T = new Date(e[0].dayTime.replace(/-/g, "/")),
              y = new Date(e[e.length - 1].dayTime.replace(/-/g, "/"));
            if (Number(p) > 1)
              for (var w = 0; w < p - 1; w++) {
                var D = new Date(T.getTime() - 864e5 * (w + 1)),
                  b = (0, i.getFormatDate)(D),
                  k = D.getDay();
                e.unshift({
                  dayTime: b,
                  week: k,
                  ishave: 1,
                  status: -1
                })
              }
            if (h === f) {
              var x = function(e, t, a, n) {
                for (var r = [], o = new Date(e, Number(t), 0).getDate() - Number(a), s = 0; s < o; s++) {
                  var c = new Date(n.getTime() + 864e5 * (s + 1)),
                    l = (0, i.getFormatDate)(c),
                    u = c.getDay();
                  r.push({
                    dayTime: l,
                    week: u,
                    ishave: 1,
                    status: -1
                  })
                }
                return r
              }(m, h, v, y);
              e = e.concat(x)
            } else
              for (var I = new Date(g, Number(f), 0).getDate() - Number(v), N = 0; N < I; N++) {
                var M = new Date(y.getTime() + 864e5 * (N + 1)),
                  S = (0, i.getFormatDate)(M),
                  A = M.getDay();
                e.push({
                  dayTime: S,
                  week: A,
                  ishave: 1,
                  status: -1
                })
              }
            for (var V = e[0].week, O = new Date(e[0].dayTime.replace(/-/g, "/")), L = 0; L < V - 1; L++) {
              var C = new Date(O - 864e5 * (L + 1)),
                $ = (0, i.getFormatDate)(C),
                B = C.getDay();
              e.unshift({
                dayTime: $,
                week: B,
                ishave: 1,
                status: -1
              })
            }
            return e
          }(l)).forEach((function(e) {
            var t = new Date(e.dayTime.replace(/-/g, "/"));
            e.dayNum = c(t.getDate()), e.month = c(t.getMonth() + 1), e.isToday = !1
          }));
          var u = l.find((function(e) {
            return new Date(e.dayTime.replace(/-/g, "/")).getTime() == new Date((new Date).toDateString()).getTime()
          }));
          null != u && (u.isToday = !0);
          var d = l.findIndex((function(e) {
              return 0 == e.status && e.ticketList.length > 0
            })),
            m = -1; - 1 != d && (m = l[d].ticketList.findIndex((function(e) {
            return e.surplusCount > 0
          })));
          var g = r.data.allMonth,
            h = l.map((function(e) {
              return Number(e.month)
            }));
          h = Array.from(new Set(h));
          var f = l.filter((function(e) {
            return Number(e.month) == g[0]
          }));
          if (1 !== f[0].week) {
            var p = Number(f[0].week) - 1,
              v = l.findLastIndex((function(e) {
                return Number(e.month) == Number(g[0])
              })),
              T = l.findIndex((function(e) {
                return Number(e.month) == Number(g[0])
              }));
            f = l.slice(T - p, v + 1)
          }
          r.setData({
            currentDateIndex: d,
            currentTimeIndex: m,
            dateArr: l,
            showDate: f,
            allMonth: h,
            selectAct: l[d]
          })
        }
        delete o.buyTicketVOS, r.setData({
          detail: t({}, o),
          activityType: e.data.mainType
        }, (function() {
          r.getUserInfo()
        }))
      } else wx.showToast({
        title: e.msg,
        icon: "none",
        duration: 1500
      }), setTimeout((function() {
        wx.navigateBack(-1)
      }), 1500)
    }))
  },
  nextMonth: function() {
    var e = this.data,
      t = (e.dateArr, e.allMonth, e.showMonth);
    this.skipMonth(t + 1)
  },
  lastMonth: function() {
    var e = this.data,
      t = (e.dateArr, e.allMonth, e.showMonth);
    this.skipMonth(t - 1)
  },
  skipMonth: function(e) {
    var t = this.data.dateArr,
      a = t.filter((function(t) {
        return Number(t.month) == Number(e)
      })),
      i = a;
    if (1 !== a[0].week) {
      var n = Number(a[0].week) - 1,
        r = t.findLastIndex((function(t) {
          return Number(t.month) == Number(e)
        })),
        s = t.findIndex((function(t) {
          return Number(t.month) == Number(e)
        }));
      i = t.slice(s - n, r + 1)
    }
    var c = "en_US" === this.data.currentLanguage ? o[Number(a[0].dayTime.split("-")[1])] + " " + a[0].dayTime.split("-")[0] : a[0].dayTime.split("-")[0] + "年" + a[0].dayTime.split("-")[1] + "月";
    this.setData({
      showDate: i,
      showMonth: Number(a[0].month),
      monthViewText: c
    })
  },
  back: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  dateViewClick: function(e) {
    var t, a, i = this.data.showDate,
      n = e.currentTarget.dataset.index;
    console.log("status", i[n].status);
    var r = this.getState(i[n].status);
    (0 == i[n].status || 4 == i[n].status) && (null === (t = i[n]) || void 0 === t || null === (a = t.ticketList) || void 0 === a ? void 0 : a.length) > 0 ? this.setData({
      selectAct: i[n],
      riliView: !1
    }) : r && wx.showToast({
      title: "当前日期活动" + r,
      icon: "none"
    })
  },
  hiddenDate: function() {
    this.setData({
      riliView: !1
    })
  },
  getState: function(e) {
    return 0 == e ? "可预约" : 1 == e ? "闭馆" : 2 == e ? "已停售" : 3 == e ? "无场次" : 4 == e ? "已告罄" : 5 == e ? "待放票" : ""
  },
  toSelDate: function() {
    var e = this,
      t = this.data,
      a = t.riliView,
      i = t.selectAct;
    this.setData({
      riliView: !a
    }, (function() {
      e.skipMonth(i.month)
    }))
  },
  reserve: function(e) {
    if ("" != getApp().globalData.authorizationc) {
      var a = e.currentTarget.dataset,
        n = a.status,
        r = a.ticketid;
      a.doo;
      if (!(a.num < 1)) {
        var o = this.data,
          s = o.activityType,
          c = o.selectAct,
          l = o.isVip,
          u = o.isVol,
          d = o.detail;
        if ("志愿者,会员" == d.activityObject && 1 == d.groupOriented) {
          if (!l && !u) return l ? void 0 : void wx.showModal({
            title: "本活动为苏州博物馆会员专属活动，欢迎申请加入苏州博物馆会员。",
            cancelText: "我再想想",
            confirmText: "成为会员",
            complete: function(e) {
              e.cancel, e.confirm && wx.navigateTo({
                url: "../vip/information"
              })
            }
          })
        } else if ("志愿者" == d.activityObject && 1 == d.groupOriented) {
          if (!u) return
        } else if ("会员" == d.activityObject && 1 == d.groupOriented && !l) return void wx.showModal({
          title: "本活动为苏州博物馆会员专属活动，欢迎申请加入苏州博物馆会员。",
          cancelText: "我再想想",
          confirmText: "成为会员",
          complete: function(e) {
            e.cancel, e.confirm && wx.navigateTo({
              url: "../vip/information"
            })
          }
        });
        if (s) {
          if (1 !== n) return;
          var m = c.ticketList.filter((function(e) {
              return e.ticketId === r
            })),
            g = this.data,
            h = g.selTicketId,
            f = g.detail;
          if (!h && 1 == f.ticketTypeEnable) return void(0, i.toast)("请选择票种");
          var p = t(t({}, this.data.detail), {}, {
            ticktDetail: m[0],
            activityType: s,
            labelType: this.data.detail.activityType
          });
          if (1 == f.ticketTypeEnable) {
            var v = {},
              T = this.data.detail.ticketTypeList.map((function(e, a) {
                return e.ticketTypeId === h ? (v = t(t({}, e), {}, {
                  sel: !0,
                  index: -1
                }), t(t({}, e), {}, {
                  sel: !0,
                  index: -1
                })) : t(t({}, e), {}, {
                  index: a
                })
              }));
            T = T.sort((function(e) {
              return e.index
            })), T = 1 == v.isPackage ? [v] : T.filter((function(e) {
              return 1 !== e.isPackage
            })), p.ticketTypeList = T
          }
          var y = encodeURIComponent(JSON.stringify(p));
          wx.navigateTo({
            url: "appointmentInfo?detail=".concat(y)
          })
        } else {
          var w = t(t({}, this.data.detail), {}, {
              activityType: s,
              labelType: this.data.detail.activityType
            }),
            D = encodeURIComponent(JSON.stringify(w));
          wx.navigateTo({
            url: "./appointmentInfo?detail=".concat(D)
          })
        }
      }
    } else(0, i.modalWithCancel)("请先登录", (function() {
      (0, i.navigateTo)("../login/login")
    }))
  },
  reserveBtnClick: function(e) {
    if ("" != getApp().globalData.authorizationc)
      if (wx.getStorageSync(getApp().globalData.openId + "__realName")) {
        var a = e.currentTarget.dataset.ticketid,
          n = this.data,
          r = n.activityType,
          o = n.detail,
          s = n.isVip,
          c = n.isVol;
        if ("报名进行中" === o.appointBtnStr) {
          if ("志愿者,会员" == o.activityObject && 1 == o.groupOriented) {
            if (!s && !c) return s ? void 0 : void wx.showModal({
              title: "本活动为苏州博物馆会员专属活动，欢迎申请加入苏州博物馆会员。",
              cancelText: "我再想想",
              confirmText: "成为会员",
              complete: function(e) {
                e.cancel, e.confirm && wx.navigateTo({
                  url: "../vip/information"
                })
              }
            })
          } else if ("志愿者" == o.activityObject && 1 == o.groupOriented) {
            if (!c) return
          } else if ("会员" == o.activityObject && 1 == o.groupOriented && !s) return void wx.showModal({
            title: "本活动为苏州博物馆会员专属活动，欢迎申请加入苏州博物馆会员。",
            cancelText: "我再想想",
            confirmText: "成为会员",
            complete: function(e) {
              e.cancel, e.confirm && wx.navigateTo({
                url: "../vip/information"
              })
            }
          });
          if (r);
          else {
            var l = {},
              u = this.data.detail.ticketTypeList.map((function(e, i) {
                return e.ticketTypeId === a ? (l = t(t({}, e), {}, {
                  sel: !0,
                  index: -1
                }), t(t({}, e), {}, {
                  sel: !0,
                  index: -1
                })) : t(t({}, e), {}, {
                  index: i
                })
              }));
            u = u.sort((function(e) {
              return e.index
            })), u = 1 == l.isPackage ? [l] : u.filter((function(e) {
              return 1 !== e.isPackage
            }));
            var d = encodeURIComponent(JSON.stringify(t(t({}, this.data.detail), {}, {
              ticketTypeList: u,
              activityType: r,
              labelType: this.data.detail.activityType
            })));
            wx.navigateTo({
              url: "./appointmentInfo?detail=".concat(d)
            })
          }
        }
      } else(0, i.toast)("请实名认证后预约");
    else(0, i.modalWithCancel)("请先登录", (function() {
      (0, i.navigateTo)("../login/login")
    }))
  },
  zhouQiTicket: function(e) {
    var t = e.currentTarget.dataset.ticketid;
    this.data.selTicketId == t ? this.setData({
      selTicketId: ""
    }) : this.setData({
      selTicketId: t
    })
  },
  richImgAuto: function(e) {
    return e.replace(/<p([^>]*)style="([^"]*)text-indent:\s*[^;]+;?([^"]*)"([^>]*)>(\s*<img[^>]*>)/g, '<p$1style="$2$3"$4>$5').replace(/<img([^>]*?)\s+(width|height)="[^"]*"/g, "<img$1").replace(/<img([^>]*?)style="([^"]*?)\s*(width|height):\s*[^;]+;?([^"]*?)"/g, '<img$1style="$2$4"').replace(/<img([^>]*?)style="\s*"/g, "<img$1").replace(/<img([^>]*?)style="([^"]*?)"/g, '<img$1style="$2 max-width: 100%; height: auto;"').replace(/<img((?!style)[^>]*)>/g, '<img$1 style="max-width: 100%; height: auto;">').replace(/\/\s*style=/g, "style=")
  },
  bindDateChange: function(e) {
    var t = e.detail.value,
      a = this.data.dateArr.filter((function(e) {
        return e.dayTime == t
      }));
    a.length > 0 && a[0].ticketList.length > 0 ? this.setData({
      selectAct: a[0]
    }) : wx.showToast({
      title: "当前日期无活动场次",
      icon: "none"
    })
  },
  timeViewClick: function(e) {
    var t = parseInt(e.currentTarget.dataset.index);
    this.data.dateArr[this.data.currentDateIndex].ticketList[t].surplusCount <= 0 ? (0, i.toast)("请重新选择可预约时段") : this.setData({
      currentTimeIndex: t
    })
  },
  handleRichTextTap: function(e) {
    console.log("e", e)
  }
});