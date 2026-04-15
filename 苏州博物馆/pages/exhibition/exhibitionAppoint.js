var t = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  e = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  a = require("../../E83DACF5AD7FA6DF8E5BC4F28CD30E96.js"),
  i = require("../../F4A4DD67AD7FA6DF92C2B56044640E96.js"),
  r = null,
  n = null,
  c = [];

function s(t) {
  return t.getFullYear() + "-" + o(t.getMonth() + 1) + "-" + o(t.getDate())
}

function o(t) {
  return t <= 9 ? "0" + t : t
}
Page({
  options: {
    pureDataPattern: /^_/
  },
  data: {
    info: {},
    dateArr: [],
    currentDateIndex: -1,
    currentTimeIndex: -1,
    maxCount: 0,
    isHasSelf: !1,
    ticketArr: {},
    hideOtherTickets: !0,
    otherTicketsExpand: !1,
    _clickTicketIndex: -1,
    aidEncrypted: "",
    type: "normal"
  },
  onLoad: function(i) {
    var n = JSON.parse(decodeURIComponent(i.data)),
      c = JSON.parse(decodeURIComponent(i.ticketArr));
    console.log(n), console.log(c);
    var o, d, u, l = 1 == c[0].isEarlyBird || 1 == c[0].isPackage ? [c[0]] : c.filter((function(t) {
        return 1 != t.isEarlyBird && 1 != t.isPackage
      })),
      h = l[0],
      f = 1 == n.isMachineVerify,
      m = "normal";
    "earlyBirdExchange" == i.type ? m = "earlyBirdExchange" : 1 == h.isEarlyBird && (m = "earlyBirdAppointment"), this.setData({
      type: m,
      showCaptcha: f,
      info: n,
      ticketArr: l,
      maxCount: n.everyMaxNumber,
      maxCountStr: 1 == h.isPackage ? "包含".concat(h.adultCount, "名成人、").concat(h.childCount, "名儿童") : "最多".concat(n.everyMaxNumber, "人"),
      hideOtherTickets: 1 == h.isEarlyBird || 1 == h.isPackage
    }), "normal" != m && "earlyBirdExchange" != m || (o = this, d = n.displayInfoId, u = "earlyBirdExchange" == m ? 1 : 0, (0, a.queryExhibitionTicketById)(d, u).then((function(a) {
      if (200 === a.code) {
        var i = a.data,
          r = i[0];
        (i = function(t) {
          var e = t[0];
          if (!e) return [];
          for (var a = t[t.length - 1], i = 0, r = new Date(e.subscribeDate.replace(/-/g, "/")), n = e.dayWeek - 1; n >= 1; n--) {
            var c = {
              dayWeek: n,
              canSelected: !1,
              statusValue: -1,
              subscribeDate: s(new Date(r.getTime() - 24 * ++i * 3600 * 1e3))
            };
            t.unshift(c)
          }
          i = 0;
          for (var o = new Date(a.subscribeDate.replace(/-/g, "/")), d = a.dayWeek + 1; d <= 7; d++) {
            var u = {
              dayWeek: d,
              canSelected: !1,
              statusValue: -2,
              subscribeDate: s(new Date(o.getTime() + 24 * ++i * 3600 * 1e3))
            };
            t.push(u)
          }
          if (t.length < 14) {
            i = 0, o = new Date(t[t.length - 1].subscribeDate.replace(/-/g, "/"));
            for (var l = 1; l <= 7; l++) {
              var h = {
                dayWeek: l,
                canSelected: !1,
                statusValue: -2,
                subscribeDate: s(new Date(o.getTime() + 24 * ++i * 3600 * 1e3))
              };
              t.push(h)
            }
          }
          return t
        }(i)).forEach((function(t) {
          t.dayNum = t.subscribeDate.substr(8, 2), t.month = t.subscribeDate.substr(5, 2) + "月", t.isToday = !1
        }));
        var n = i.find((function(e) {
          return new Date(e.subscribeDate.replace(/-/g, "/")).getTime() == new Date((0, t.getCurrentDateTime)().substr(0, 10)).getTime()
        }));
        null != n && (n.isToday = !0);
        var c = i.indexOf(r);
        o.setData({
          dateArr: i,
          currentDateIndex: c
        })
      } else(0, e.showWarningToast)(a)
    }))), this.getSelf(), (0, t.getVipInfo)((function(t) {
      r = t
    })), f && this.getCaptcha()
  },
  reloadContactsData: function() {
    this.setData({
      isHasSelf: !0
    })
  },
  getSelf: function() {
    var e = this;
    (0, t.getRealNameInfo)((function(a) {
      null == a ? (e.setData({
        isHasSelf: !1
      }), (0, t.modal)("请先进行实名认证", (function() {
        (0, t.navigateTo)("../contacts/realNameCertification")
      }))) : e.setData({
        isHasSelf: !0
      })
    }))
  },
  dateViewClick: function(e) {
    var a = parseInt(e.currentTarget.dataset.index);
    this.data.currentDateIndex != a && (0 == this.data.dateArr[a].statusValue ? this.setData({
      currentDateIndex: a,
      currentTimeIndex: -1
    }) : (0, t.toast)("请重新选择可预约日期"))
  },
  timeViewClick: function(e) {
    var a = parseInt(e.currentTarget.dataset.index);
    this.data.currentTimeIndex != a && (0 == this.data.dateArr[this.data.currentDateIndex].subscribeTimeLineInfoList[a].statusValue ? this.setData({
      currentTimeIndex: a
    }) : (0, t.toast)("请重新选择可预约时段"))
  },
  jiantouViewClick: function() {
    if (this.setData({
        otherTicketsExpand: !this.data.otherTicketsExpand
      }), !this.data.otherTicketsExpand) {
      var t = this.data.ticketArr;
      t.forEach((function(t, e) {
        0 !== e && (t.contactsArr = [])
      })), this.setData({
        ticketArr: t
      })
    }
  },
  deleteBtnClick: function(t) {
    console.log(t);
    var e = t.target.dataset.ticket_index,
      a = t.target.dataset.contact_index;
    console.log(e, a);
    var i = this.data.ticketArr;
    i[e].contactsArr.splice(a, 1), this.setData({
      ticketArr: i
    })
  },
  selectContactsClick: function(e) {
    if (!1 === this.data.isHasSelf)(0, t.modal)("请先进行实名认证", (function() {
      (0, t.navigateTo)("../contacts/realNameCertification")
    }));
    else {
      var a = parseInt(e.currentTarget.dataset.index);
      this.setData({
        _clickTicketIndex: a
      });
      var i = this.data.ticketArr[a],
        r = {
          maxCount: this.data.maxCount,
          selectDataArr: null != i.contactsArr ? i.contactsArr : [],
          from: "exh"
        },
        n = JSON.stringify(r);
      (0, t.navigateTo)("../contacts/selectContacts?data=" + n)
    }
  },
  selectedContactBack: function(t) {
    var e = this.data.ticketArr;
    e[this.data._clickTicketIndex].contactsArr = t, this.setData({
      ticketArr: e
    })
  },
  getCaptcha: function() {
    var t = this;
    (0, a.exhEncryptSP)().then((function(e) {
      200 == e.code && t.setData({
        aidEncrypted: e.data
      })
    }))
  },
  handlerVerify: function(t) {
    0 === t.detail.ret && (console.log("ticket:", t), n.ticket = t.detail.ticket, this.submit())
  },
  handlerReady: function() {
    console.log("验证码准备就绪")
  },
  handlerClose: function(t) {
    t && t.detail.ret && 2 === t.detail.ret ? console.log("点击了关闭按钮，验证码弹框准备关闭") : console.log("验证完成，验证码弹框准备关闭")
  },
  handlerError: function(t) {
    console.log(t.detail.errMsg)
  },
  appointBtnClick: function() {
    var e = this;
    if (-1 == this.data.currentDateIndex && "earlyBirdAppointment" != this.data.type)(0, t.toast)("请先选择观展日期");
    else if (-1 == this.data.currentTimeIndex && "earlyBirdAppointment" != this.data.type)(0, t.toast)("请先选择观展时段");
    else if ("earlyBirdExchange" == this.data.type)
      if (this.data.ticketArr[0].contactsArr.length <= 0)(0, t.toast)("请先选择参观者");
      else {
        var a = this.data.dateArr[this.data.currentDateIndex],
          s = {
            info: this.data.info,
            ticketAndContacts: this.data.ticketArr[0],
            reserveDate: a.subscribeDate,
            reserveTime: a.subscribeTimeLineInfoList[this.data.currentTimeIndex].timeLine,
            ticketId: a.subscribeTimeLineInfoList[this.data.currentTimeIndex].ticketId
          };
        wx.redirectTo({
          url: "earlyBirdTicketExchange?data=" + encodeURIComponent(JSON.stringify(s))
        })
      }
    else if (c = [], this.data.ticketArr.forEach((function(t) {
        var e;
        null === (e = t.contactsArr) || void 0 === e || e.forEach((function(e) {
          c.push({
            contactId: e.customerContactId,
            contactName: e.contactName,
            contactPhone: e.contactPhone,
            customerContactId: e.customerContactId,
            contactPhoneFull: e.contactPhoneFull,
            documentNumber: e.documentNumber,
            documentNumberFull: e.documentNumberFull,
            myself: e.myself,
            ticketTypeId: t.ticketTypeId,
            ticketCost: t.ticketCost,
            ticketName: t.ticketName,
            isPackage: t.isPackage
          })
        }))
      })), c.length <= 0)(0, t.toast)("请先选择参观者");
    else {
      var o = c.map((function(t) {
          return t.customerContactId
        })),
        d = new Set(o);
      if (o.length !== d.size) return void(0, t.toast)("单笔订单同一人只能购买一个票种类型");
      if (c.length > this.data.maxCount) return void(0, t.toast)("最多只能同时预约".concat(this.data.maxCount));
      this.data.ticketArr;
      var u = 0;
      c.forEach((function(t) {
        u += t.ticketCost
      }));
      var l = c.map((function(t) {
          return {
            contactId: t.contactId,
            ticketTypeId: t.ticketTypeId
          }
        })),
        h = 0;
      u > 0 && (h = 1);
      var f = null,
        m = null;
      "earlyBirdAppointment" != this.data.type && (m = (f = this.data.dateArr[this.data.currentDateIndex]).subscribeTimeLineInfoList[this.data.currentTimeIndex]), n = {
        displayInfoId: this.data.info.displayInfoId,
        ticketId: "earlyBirdAppointment" == this.data.type ? void 0 : m.ticketId,
        reserveDate: "earlyBirdAppointment" == this.data.type ? void 0 : f.subscribeDate,
        reserveTime: "earlyBirdAppointment" == this.data.type ? void 0 : m.timeLine,
        customerTicketList: l,
        isSubmit: h,
        vipId: null != r ? r.id : void 0
      }, (0, t.throttle)((function() {
        (0, i.requestExhSubscribeMessage)((function() {
          e.data.showCaptcha ? e.selectComponent("#captcha").show() : e.submit()
        }))
      }))
    }
  },
  submit: function() {
    var e = this;
    (0, t.showLoading)("加载中...", !0), (0, a.submitExhibitionOrder)(n).then((function(a) {
      if (wx.hideLoading(), 200 == a.code) {
        var i = a.data,
          r = e.data.info;
        r.commitData = n, r.selectedContactsArr = c, r.orderCost = i.orderCost, r.countdown = i.countdown, r.orderId = i.orderId, r.isReserveTrial = i.isReserveTrial, r.type = e.data.type;
        var s = encodeURIComponent(JSON.stringify(r));
        wx.redirectTo({
          url: "exhibitionSureOrder?data=" + s
        })
      } else console.debug("提交订单" + a.msg), (0, t.modal)("预约失败，" + a.msg)
    })).catch((function(e) {
      (0, t.hideLoading)(), console.error(e), (0, t.modal)("当前排队人数较多，请稍后重试")
    }))
  }
});