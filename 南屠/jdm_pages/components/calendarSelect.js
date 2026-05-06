var t = require("../../@babel/runtime/helpers/objectSpread2"),
  e = require("../../302F12419CEDE14F56497A46F35AA3A7.js"),
  a = require("../../B5FE78D69CEDE14FD39810D1421AA3A7.js"),
  i = require("../../42DF72329CEDE14F24B91A35674AA3A7.js");
require("../../F13970549CEDE14F975F18534C3AA3A7.js"), require("../../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../../E6064C639CEDE14F806024649ACAA3A7.js"), require("../../99A56A709CEDE14FFFC30277932AA3A7.js"), require("../../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../../2800CA079CEDE14F4E66A20028DAA3A7.js");
var n = {
    props: {
      venue: {
        type: String,
        default: ""
      },
      type: {
        type: [Number, String],
        default: ""
      }
    },
    data: function() {
      return {
        appointmentTime: "",
        nowDate: "",
        list: [],
        selectDate: null,
        selectTime: null
      }
    },
    mounted: function() {
      this.calendarGetAppointmentTime()
    },
    methods: {
      clear: function() {
        this.selectDate = null, this.selectTime = null
      },
      calendarGetAppointmentTime: function() {
        var t = this;
        a.calendarGetAppointmentTime().then((function(a) {
          1e3 == a.code ? (0 == a.data.status && (t.appointmentTime = a.data.appointmentTime, t.$emit("setAppointmentTime", t.appointmentTime)), t.getDays()) : e.index.showToast({
            title: a.msg || "请稍后再试",
            icon: "none"
          })
        }))
      },
      changeDate: function(t, e) {
        this.nowDate = t.cnDateStr, 0 == t.closeStatus && (this.selectDate = JSON.parse(JSON.stringify(t)), this.selectTime = null, this.$emit("selectTime", ""))
      },
      changeTime: function(e) {
        if (0 == e.timeSharingStoreStatus) {
          var a = new Date(this.selectDate.date.replace(/-/g, "/")).getDay();
          a = 0 == a ? 7 : a, this.selectTime = e, this.$emit("selectTime", t(t({}, e), {}, {
            week: a,
            weekDate: this.selectDate.date
          }))
        }
      },
      getDays: function() {
        var t = new Date,
          e = t.getDay(),
          a = t.getDate(),
          i = t.getFullYear(),
          n = t.getMonth() + 1;
        n = 2 == (n + "").length ? n : "0" + n, this.nowDate = i + "年" + n + "月", a = a - e - 1, t.setDate(a);
        for (var r = [], s = 0; s < 14; s++) {
          var o = t.getDate();
          o += 1, t.setDate(o);
          var u = t.getFullYear(),
            c = t.getMonth() + 1;
          o = t.getDate(), c = 2 == (c + "").length ? c : "0" + c, o = 2 == (o + "").length ? o : "0" + o, r.push({
            isHistory: s < e,
            isFuture: s >= e + 7,
            date: u + "-" + c + "-" + o,
            day: o,
            month: c,
            year: u
          })
        }
        this.getCalendar(r)
      },
      getCalendar: function(t) {
        var i = this;
        a.calendarGetCalendar({
          appointmentTime: this.appointmentTime,
          hallCode: this.venue,
          entranceType: 3 == this.type ? 3 : 1
        }).then((function(a) {
          if (1e3 === a.code) {
            var n = a.data || [];
            t.forEach((function(t) {
              var e = n.find((function(e) {
                return e.dateStr == t.date
              })) || {};
              e && e.dateStr ? t.isFuture = !1 : t.isFuture = !0, e.tip = "不可约", 0 == e.closeStatus ? e.tip = "可预约" : 1 == e.closeStatus ? e.tip = "闭馆" : 2 == e.closeStatus ? e.tip = "不可约" : 3 == e.closeStatus && (e.dateStr === i.getTodayDate() || "DTSYNTB" === i.venue && e.dateStr === i.getNextDate() && i.getHour() ? e.tip = "已约满" : e.tip = "待放票"), i.appointmentTime || (e.tip = "不可约", e.closeStatus = 2), Object.assign(t, e)
            })), i.list = t;
            var r = null;
            i.list.forEach((function(t, e) {
              "可预约" == t.tip && null == r && (r = e)
            })), (r || 0 == r) && i.changeDate(i.list[r])
          } else e.index.showToast({
            title: a.msg || "请稍后再试",
            icon: "none"
          })
        }))
      },
      getTodayDate: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          e = new Date,
          a = e.getFullYear(),
          i = String(e.getMonth() + 1).padStart(2, "0"),
          n = String(e.getDate()).padStart(2, "0"),
          r = String(e.getHours()).padStart(2, "0"),
          s = String(e.getMinutes()).padStart(2, "0"),
          o = String(e.getSeconds()).padStart(2, "0");
        return 1 == t ? "".concat(a, "-").concat(i, "-").concat(n) : "".concat(a, "-").concat(i, "-").concat(n, " ").concat(r, ":").concat(s, ":").concat(o)
      },
      getNextDate: function() {
        var t = new Date,
          e = new Date(t.getTime() + 864e5);
        return e.getFullYear() + "-" + ("0" + (e.getMonth() + 1)).slice(-2) + "-" + ("0" + e.getDate()).slice(-2)
      },
      getHour: function() {
        var t = new Date;
        return +String(t.getHours()).padStart(2, "0") > 16
      },
      statusColor: function(t, e, a) {
        return 3 == t && e == this.getTodayDate() || 1 == t || "DTSYNTB" === this.venue && e === this.getNextDate() && "已约满" == a
      }
    }
  },
  r = e._export_sfc(n, [
    ["render", function(t, a, n, r, s, o) {
      return e.e({
        a: i._imports_0$10,
        b: e.t(s.nowDate),
        c: e.f(s.list, (function(t, a, i) {
          return e.e({
            a: e.t(t.day),
            b: !t.isFuture && !t.isHistory
          }, t.isFuture || t.isHistory ? {} : e.e({
            c: 0 == t.closeStatus
          }, 0 == t.closeStatus ? {
            d: e.t(t.tip)
          } : {
            e: e.t(t.tip),
            f: o.statusColor(t.closeStatus, t.date, t.tip) ? 1 : ""
          }), {
            g: t.isFuture || t.isHistory ? 1 : "",
            h: t.date == (s.selectDate && s.selectDate.date) ? 1 : "",
            i: e.o((function(e) {
              return o.changeDate(t, a)
            }), t.date),
            j: t.date
          })
        })),
        d: 3 != n.type
      }, 3 != n.type ? e.e({
        e: i._imports_1$6,
        f: "DTSYNTB" == n.venue
      }, "DTSYNTB" == n.venue ? {
        g: e.t(o.getHour() ? "次日8:00" : "下午17:00")
      } : {}) : {}, {
        h: i._imports_1$6,
        i: 3 == n.type ? 1 : "",
        j: s.selectDate
      }, s.selectDate ? {
        k: i._imports_2$2,
        l: e.f(s.selectDate.timeSharingStoreDtoList, (function(t, a, i) {
          return e.e({
            a: e.t((t.timeSharingStart || "").substring(0, 5)),
            b: e.t((t.timeSharingEnd || "").substring(0, 5)),
            c: 0 == t.timeSharingStoreStatus
          }, (0 == t.timeSharingStoreStatus || 1 == t.timeSharingStoreStatus || 2 == t.timeSharingStoreStatus || t.timeSharingStoreStatus, {}), {
            d: 1 == t.timeSharingStoreStatus,
            e: 2 == t.timeSharingStoreStatus,
            f: 3 == t.timeSharingStoreStatus,
            g: t.timeSharing == (s.selectTime && s.selectTime.timeSharing) ? 1 : "",
            h: 0 != t.timeSharingStoreStatus ? 1 : "",
            i: e.o((function(e) {
              return o.changeTime(t)
            }), a),
            j: a
          })
        }))
      } : {})
    }],
    ["__scopeId", "data-v-3ba89595"]
  ]);
wx.createComponent(r);