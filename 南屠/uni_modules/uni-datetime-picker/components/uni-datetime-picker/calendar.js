var e = require("../../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../../@babel/runtime/helpers/slicedToArray"),
  i = require("../../../../92E224319CEDE14FF4844C361F7AA3A7.js"),
  a = require("../../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  n = require("../../../../A3BFACA09CEDE14FC5D9C4A73B8AA3A7.js"),
  s = a.initVueI18n(n.i18nMessages).t,
  r = {
    components: {
      calendarItem: function() {
        return "./calendar-item.js"
      },
      timePicker: function() {
        return "./time-picker.js"
      }
    },
    props: {
      date: {
        type: String,
        default: ""
      },
      defTime: {
        type: [String, Object],
        default: ""
      },
      selectableTimes: {
        type: [Object],
        default: function() {
          return {}
        }
      },
      selected: {
        type: Array,
        default: function() {
          return []
        }
      },
      isCustomSelect: {
        type: [Boolean],
        default: !1
      },
      startDate: {
        type: String,
        default: ""
      },
      endDate: {
        type: String,
        default: ""
      },
      startPlaceholder: {
        type: String,
        default: ""
      },
      endPlaceholder: {
        type: String,
        default: ""
      },
      range: {
        type: Boolean,
        default: !1
      },
      hasTime: {
        type: Boolean,
        default: !1
      },
      insert: {
        type: Boolean,
        default: !0
      },
      showMonth: {
        type: Boolean,
        default: !0
      },
      clearDate: {
        type: Boolean,
        default: !0
      },
      checkHover: {
        type: Boolean,
        default: !0
      },
      hideSecond: {
        type: [Boolean],
        default: !1
      },
      pleStatus: {
        type: Object,
        default: function() {
          return {
            before: "",
            after: "",
            data: [],
            fulldate: ""
          }
        }
      },
      defaultValue: {
        type: [String, Object, Array],
        default: ""
      }
    },
    data: function() {
      return {
        show: !1,
        weeks: [],
        calendar: {},
        nowDate: {},
        aniMaskShow: !1,
        firstEnter: !0,
        time: "",
        timeRange: {
          startTime: "",
          endTime: ""
        },
        tempSingleDate: "",
        tempRange: {
          before: "",
          after: ""
        }
      }
    },
    watch: {
      date: {
        immediate: !0,
        handler: function(e) {
          var t = this;
          this.range || (this.tempSingleDate = e, setTimeout((function() {
            t.init(e)
          }), 100))
        }
      },
      defTime: {
        immediate: !0,
        handler: function(e) {
          this.range ? (this.timeRange.startTime = e.start, this.timeRange.endTime = e.end) : this.time = e
        }
      },
      startDate: function(e) {
        this.cale && (this.cale.setStartDate(e), this.cale.setDate(this.nowDate.fullDate), this.weeks = this.cale.weeks)
      },
      endDate: function(e) {
        this.cale && (this.cale.setEndDate(e), this.cale.setDate(this.nowDate.fullDate), this.weeks = this.cale.weeks)
      },
      selected: {
        handler: function(e, t) {
          this.cale && (this.weeks = this.cale.weeks, this.setExtInfo(this.weeks))
        },
        deep: !0
      },
      pleStatus: {
        immediate: !0,
        handler: function(e) {
          var t = this,
            i = e.before,
            a = e.after,
            n = e.fulldate,
            s = e.which;
          this.tempRange.before = i, this.tempRange.after = a, setTimeout((function() {
            if (n)
              if (t.cale.setHoverMultiple(n), i && a) {
                if (t.cale.lastHover = !0, t.rangeWithinMonth(a, i)) return;
                t.setDate(i)
              } else t.cale.setMultiple(n), t.setDate(t.nowDate.fullDate), t.calendar.fullDate = "", t.cale.lastHover = !1;
            else {
              if (!t.cale) return;
              t.cale.setDefaultMultiple(i, a), "left" === s && i ? (t.setDate(i), t.weeks = t.cale.weeks) : a && (t.setDate(a), t.weeks = t.cale.weeks), t.cale.lastHover = !0
            }
          }), 16)
        }
      }
    },
    computed: {
      timepickerStartTime: function() {
        return (this.range ? this.tempRange.before : this.calendar.fullDate) === this.startDate ? this.selectableTimes.start : ""
      },
      timepickerEndTime: function() {
        return (this.range ? this.tempRange.after : this.calendar.fullDate) === this.endDate ? this.selectableTimes.end : ""
      },
      selectDateText: function() {
        return s("uni-datetime-picker.selectDate")
      },
      startDateText: function() {
        return this.startPlaceholder || s("uni-datetime-picker.startDate")
      },
      endDateText: function() {
        return this.endPlaceholder || s("uni-datetime-picker.endDate")
      },
      okText: function() {
        return s("uni-datetime-picker.ok")
      },
      yearText: function() {
        return s("uni-datetime-picker.year")
      },
      monthText: function() {
        return s("uni-datetime-picker.month")
      },
      MONText: function() {
        return s("uni-calender.MON")
      },
      TUEText: function() {
        return s("uni-calender.TUE")
      },
      WEDText: function() {
        return s("uni-calender.WED")
      },
      THUText: function() {
        return s("uni-calender.THU")
      },
      FRIText: function() {
        return s("uni-calender.FRI")
      },
      SATText: function() {
        return s("uni-calender.SAT")
      },
      SUNText: function() {
        return s("uni-calender.SUN")
      },
      confirmText: function() {
        return s("uni-calender.confirm")
      }
    },
    created: function() {
      this.cale = new i.Calendar({
        selected: this.selected,
        startDate: this.startDate,
        endDate: this.endDate,
        range: this.range
      }), this.init(this.date)
    },
    methods: {
      setExtInfo: function(e) {
        var t = this;
        e.forEach((function(e) {
          e.forEach((function(e) {
            var i = t.selected.find((function(t) {
              return t.date == e.fullDate
            }));
            i && (e.extraInfo = e.extraInfo || i)
          }))
        }))
      },
      leaveCale: function() {
        this.firstEnter = !0
      },
      handleMouse: function(e) {
        if (!e.disable && !this.cale.lastHover) {
          var t = this.cale.multipleStatus,
            i = t.before;
          t.after;
          i && (this.calendar = e, this.cale.setHoverMultiple(this.calendar.fullDate), this.weeks = this.cale.weeks, this.firstEnter && (this.$emit("firstEnterCale", this.cale.multipleStatus), this.firstEnter = !1))
        }
      },
      rangeWithinMonth: function(e, i) {
        var a = e.split("-"),
          n = t(a, 2),
          s = n[0],
          r = n[1],
          l = i.split("-"),
          o = t(l, 2),
          c = o[0],
          h = o[1];
        return s === c && r === h
      },
      maskClick: function() {
        this.close(), this.$emit("maskClose")
      },
      clearCalender: function() {
        this.range ? (this.timeRange.startTime = "", this.timeRange.endTime = "", this.tempRange.before = "", this.tempRange.after = "", this.cale.multipleStatus.before = "", this.cale.multipleStatus.after = "", this.cale.multipleStatus.data = [], this.cale.lastHover = !1) : (this.time = "", this.tempSingleDate = ""), this.calendar.fullDate = "", this.setDate(new Date)
      },
      bindDateChange: function(e) {
        var t = e.detail.value + "-1";
        this.setDate(t)
      },
      init: function(t) {
        if (this.cale && (this.cale.setDate(t || new Date), this.weeks = this.cale.weeks, this.nowDate = this.cale.getInfo(t), this.$emit("monthSwitch", this.nowDate), this.calendar = e({}, this.nowDate), !t && (this.calendar.fullDate = "", this.defaultValue && !this.range))) {
          var a = new Date(this.defaultValue),
            n = i.getDate(a),
            s = a.getFullYear(),
            r = a.getMonth() + 1,
            l = a.getDate(),
            o = a.getDay();
          this.calendar = {
            fullDate: n,
            year: s,
            month: r,
            date: l,
            day: o
          }, this.tempSingleDate = n, this.time = i.getTime(a, this.hideSecond)
        }
      },
      open: function() {
        var e = this;
        this.clearDate && !this.insert && (this.cale.cleanMultipleStatus(), this.init(this.date)), this.show = !0, this.$nextTick((function() {
          setTimeout((function() {
            e.aniMaskShow = !0
          }), 50)
        }))
      },
      close: function() {
        var e = this;
        this.aniMaskShow = !1, this.$nextTick((function() {
          setTimeout((function() {
            e.show = !1, e.$emit("close")
          }), 300)
        }))
      },
      confirm: function() {
        this.setEmit("confirm"), this.close()
      },
      change: function() {
        this.insert && this.setEmit("change")
      },
      monthSwitch: function() {
        var e = this.nowDate,
          t = e.year,
          i = e.month;
        this.$emit("monthSwitch", {
          year: t,
          month: Number(i)
        })
      },
      setEmit: function(e) {
        this.range || (this.calendar.fullDate || (this.calendar = this.cale.getInfo(new Date), this.tempSingleDate = this.calendar.fullDate), this.hasTime && !this.time && (this.time = i.getTime(new Date, this.hideSecond)));
        var t = this.calendar,
          a = t.year,
          n = t.month,
          s = t.date,
          r = t.fullDate,
          l = t.extraInfo;
        this.$emit(e, {
          range: this.cale.multipleStatus,
          year: a,
          month: n,
          date: s,
          time: this.time,
          timeRange: this.timeRange,
          fulldate: r,
          extraInfo: l || {}
        })
      },
      choiceDate: function(e) {
        if ((!this.isCustomSelect || e && e.extraInfo && e.extraInfo.date) && !e.disable) {
          this.calendar = e, this.calendar.userChecked = !0, this.cale.setMultiple(this.calendar.fullDate, !0), this.weeks = this.cale.weeks, this.tempSingleDate = this.calendar.fullDate;
          var t = new Date(this.cale.multipleStatus.before).getTime(),
            i = new Date(this.cale.multipleStatus.after).getTime();
          t > i && i ? (this.tempRange.before = this.cale.multipleStatus.after, this.tempRange.after = this.cale.multipleStatus.before) : (this.tempRange.before = this.cale.multipleStatus.before, this.tempRange.after = this.cale.multipleStatus.after), this.change()
        }
      },
      changeMonth: function(e) {
        var t;
        "pre" === e ? t = this.cale.getPreMonthObj(this.nowDate.fullDate).fullDate : "next" === e && (t = this.cale.getNextMonthObj(this.nowDate.fullDate).fullDate), this.setDate(t), this.monthSwitch()
      },
      setDate: function(e) {
        this.cale.setDate(e), this.weeks = this.cale.weeks, this.nowDate = this.cale.getInfo(e)
      }
    }
  };
Array || (a.resolveComponent("calendar-item") + a.resolveComponent("time-picker") + a.resolveComponent("uni-icons"))(), Math;
var l = a._export_sfc(r, [
  ["render", function(e, t, i, n, s, r) {
    return a.e({
      a: !i.insert && s.show
    }, !i.insert && s.show ? {
      b: s.aniMaskShow ? 1 : "",
      c: a.o((function() {
        return r.maskClick && r.maskClick.apply(r, arguments)
      }))
    } : {}, {
      d: i.insert || s.show
    }, i.insert || s.show ? a.e({
      e: a.o((function(e) {
        return r.changeMonth("pre")
      })),
      f: a.t((s.nowDate.year || "") + r.yearText + (s.nowDate.month || "") + r.monthText),
      g: i.date,
      h: a.o((function() {
        return r.bindDateChange && r.bindDateChange.apply(r, arguments)
      })),
      i: a.o((function(e) {
        return r.changeMonth("next")
      })),
      j: !i.insert
    }, i.insert ? {} : {
      k: a.o((function() {
        return r.close && r.close.apply(r, arguments)
      }))
    }, {
      l: i.insert ? "" : 1,
      m: i.showMonth
    }, i.showMonth ? {
      n: a.t(s.nowDate.month)
    } : {}, {
      o: a.t(r.SUNText),
      p: a.t(r.MONText),
      q: a.t(r.TUEText),
      r: a.t(r.WEDText),
      s: a.t(r.THUText),
      t: a.t(r.FRIText),
      v: a.t(r.SATText),
      w: a.f(s.weeks, (function(e, t, n) {
        return {
          a: a.f(e, (function(e, t, l) {
            return {
              a: a.o(r.choiceDate, t),
              b: a.o(r.handleMouse, t),
              c: "20c67a89-0-" + n + "-" + l,
              d: a.p({
                weeks: e,
                calendar: s.calendar,
                selected: i.selected,
                "is-custom-select": i.isCustomSelect,
                checkHover: i.range
              }),
              e: t
            }
          })),
          b: t
        }
      })),
      x: !i.insert && !i.range && i.hasTime
    }, i.insert || i.range || !i.hasTime ? {} : {
      y: a.t(s.tempSingleDate ? s.tempSingleDate : r.selectDateText),
      z: a.o((function(e) {
        return s.time = e
      })),
      A: a.p({
        type: "time",
        start: r.timepickerStartTime,
        end: r.timepickerEndTime,
        disabled: !s.tempSingleDate,
        border: !1,
        "hide-second": i.hideSecond,
        modelValue: s.time
      })
    }, {
      B: !i.insert && i.range && i.hasTime
    }, !i.insert && i.range && i.hasTime ? {
      C: a.t(s.tempRange.before ? s.tempRange.before : r.startDateText),
      D: a.o((function(e) {
        return s.timeRange.startTime = e
      })),
      E: a.p({
        type: "time",
        start: r.timepickerStartTime,
        border: !1,
        "hide-second": i.hideSecond,
        disabled: !s.tempRange.before,
        modelValue: s.timeRange.startTime
      }),
      F: a.p({
        type: "arrowthinright",
        color: "#999"
      }),
      G: a.t(s.tempRange.after ? s.tempRange.after : r.endDateText),
      H: a.o((function(e) {
        return s.timeRange.endTime = e
      })),
      I: a.p({
        type: "time",
        end: r.timepickerEndTime,
        border: !1,
        "hide-second": i.hideSecond,
        disabled: !s.tempRange.after,
        modelValue: s.timeRange.endTime
      })
    } : {}, {
      J: !i.insert
    }, i.insert ? {} : {
      K: a.t(r.confirmText),
      L: a.o((function() {
        return r.confirm && r.confirm.apply(r, arguments)
      }))
    }, {
      M: i.insert ? "" : 1,
      N: s.aniMaskShow ? 1 : "",
      O: s.aniMaskShow ? 1 : ""
    }) : {}, {
      P: i.isCustomSelect ? 1 : "",
      Q: a.o((function() {
        return r.leaveCale && r.leaveCale.apply(r, arguments)
      }))
    })
  }]
]);
wx.createComponent(l);