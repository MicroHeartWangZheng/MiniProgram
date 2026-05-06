var e = require("../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  a = require("../../../../A3BFACA09CEDE14FC5D9C4A73B8AA3A7.js"),
  i = require("../../../../92E224319CEDE14FF4844C361F7AA3A7.js"),
  n = {
    name: "UniDatetimePicker",
    options: {
      virtualHost: !0
    },
    components: {
      Calendar: function() {
        return "./calendar.js"
      },
      TimePicker: function() {
        return "./time-picker.js"
      }
    },
    data: function() {
      return {
        isRange: !1,
        hasTime: !1,
        displayValue: "",
        inputDate: "",
        calendarDate: "",
        pickerTime: "",
        calendarRange: {
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        },
        displayRangeValue: {
          startDate: "",
          endDate: ""
        },
        tempRange: {
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        },
        startMultipleStatus: {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        },
        endMultipleStatus: {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        },
        pickerVisible: !1,
        pickerPositionStyle: null,
        isEmitValue: !1,
        isPhone: !1,
        isFirstShow: !0,
        i18nT: function() {}
      }
    },
    props: {
      type: {
        type: String,
        default: "datetime"
      },
      value: {
        type: [String, Number, Array, Date],
        default: ""
      },
      modelValue: {
        type: [String, Number, Array, Date],
        default: ""
      },
      start: {
        type: [Number, String],
        default: ""
      },
      end: {
        type: [Number, String],
        default: ""
      },
      returnType: {
        type: String,
        default: "string"
      },
      placeholder: {
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
      rangeSeparator: {
        type: String,
        default: "-"
      },
      border: {
        type: [Boolean],
        default: !0
      },
      disabled: {
        type: [Boolean],
        default: !1
      },
      clearIcon: {
        type: [Boolean],
        default: !0
      },
      hideSecond: {
        type: [Boolean],
        default: !1
      },
      defaultValue: {
        type: [String, Object, Array],
        default: ""
      },
      selected: {
        type: Array,
        default: []
      },
      isCustomSelect: {
        type: [Boolean],
        default: !1
      }
    },
    watch: {
      type: {
        immediate: !0,
        handler: function(e) {
          this.hasTime = -1 !== e.indexOf("time"), this.isRange = -1 !== e.indexOf("range")
        }
      },
      modelValue: {
        immediate: !0,
        handler: function(e) {
          this.isEmitValue ? this.isEmitValue = !1 : this.initPicker(e)
        }
      },
      start: {
        immediate: !0,
        handler: function(e) {
          e && (this.calendarRange.startDate = i.getDate(e), this.hasTime && (this.calendarRange.startTime = i.getTime(e)))
        }
      },
      end: {
        immediate: !0,
        handler: function(e) {
          e && (this.calendarRange.endDate = i.getDate(e), this.hasTime && (this.calendarRange.endTime = i.getTime(e, this.hideSecond)))
        }
      }
    },
    computed: {
      timepickerStartTime: function() {
        return (this.isRange ? this.tempRange.startDate : this.inputDate) === this.calendarRange.startDate ? this.calendarRange.startTime : ""
      },
      timepickerEndTime: function() {
        return (this.isRange ? this.tempRange.endDate : this.inputDate) === this.calendarRange.endDate ? this.calendarRange.endTime : ""
      },
      mobileCalendarTime: function() {
        var e = {
          start: this.tempRange.startTime,
          end: this.tempRange.endTime
        };
        return this.isRange ? e : this.pickerTime
      },
      mobSelectableTime: function() {
        return {
          start: this.calendarRange.startTime,
          end: this.calendarRange.endTime
        }
      },
      datePopupWidth: function() {
        return this.isRange ? 653 : 301
      },
      singlePlaceholderText: function() {
        return this.placeholder || ("date" === this.type ? this.selectDateText : this.selectDateTimeText)
      },
      startPlaceholderText: function() {
        return this.startPlaceholder || this.startDateText
      },
      endPlaceholderText: function() {
        return this.endPlaceholder || this.endDateText
      },
      selectDateText: function() {
        return this.i18nT("uni-datetime-picker.selectDate")
      },
      selectDateTimeText: function() {
        return this.i18nT("uni-datetime-picker.selectDateTime")
      },
      selectTimeText: function() {
        return this.i18nT("uni-datetime-picker.selectTime")
      },
      startDateText: function() {
        return this.startPlaceholder || this.i18nT("uni-datetime-picker.startDate")
      },
      startTimeText: function() {
        return this.i18nT("uni-datetime-picker.startTime")
      },
      endDateText: function() {
        return this.endPlaceholder || this.i18nT("uni-datetime-picker.endDate")
      },
      endTimeText: function() {
        return this.i18nT("uni-datetime-picker.endTime")
      },
      okText: function() {
        return this.i18nT("uni-datetime-picker.ok")
      },
      clearText: function() {
        return this.i18nT("uni-datetime-picker.clear")
      },
      showClearIcon: function() {
        return this.clearIcon && !this.disabled && (this.displayValue || this.displayRangeValue.startDate && this.displayRangeValue.endDate)
      }
    },
    created: function() {
      this.initI18nT(), this.platform()
    },
    methods: {
      monthSwitch: function(e) {
        this.$emit("monthSwitch", e)
      },
      initI18nT: function() {
        var e = t.initVueI18n(a.i18nMessages);
        this.i18nT = e.t
      },
      initPicker: function(t) {
        var a = this;
        if (!t && !this.defaultValue || Array.isArray(t) && !t.length) this.$nextTick((function() {
          a.clear(!1)
        }));
        else if (Array.isArray(t) || this.isRange) {
          var n = e(t, 2),
            s = n[0],
            r = n[1];
          if (!s && !r) return;
          var h = i.getDate(s),
            l = i.getTime(s, this.hideSecond),
            d = i.getDate(r),
            c = i.getTime(r, this.hideSecond),
            o = h,
            m = d;
          this.displayRangeValue.startDate = this.tempRange.startDate = o, this.displayRangeValue.endDate = this.tempRange.endDate = m, this.hasTime && (this.displayRangeValue.startDate = "".concat(h, " ").concat(l), this.displayRangeValue.endDate = "".concat(d, " ").concat(c), this.tempRange.startTime = l, this.tempRange.endTime = c);
          var u = {
            before: h,
            after: d
          };
          this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, u, {
            which: "right"
          }), this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, u, {
            which: "left"
          })
        } else t ? (this.displayValue = this.inputDate = this.calendarDate = i.getDate(t), this.hasTime && (this.pickerTime = i.getTime(t, this.hideSecond), this.displayValue = "".concat(this.displayValue, " ").concat(this.pickerTime))) : this.defaultValue && (this.inputDate = this.calendarDate = i.getDate(this.defaultValue), this.hasTime && (this.pickerTime = i.getTime(this.defaultValue, this.hideSecond)))
      },
      updateLeftCale: function(e) {
        var t = this.$refs.left;
        t.cale.setHoverMultiple(e.after), t.setDate(this.$refs.left.nowDate.fullDate)
      },
      updateRightCale: function(e) {
        var t = this.$refs.right;
        t.cale.setHoverMultiple(e.after), t.setDate(this.$refs.right.nowDate.fullDate)
      },
      platform: function() {
        var e = t.index.getSystemInfoSync().windowWidth;
        this.isPhone = e <= 500, this.windowWidth = e
      },
      show: function() {
        var e = this;
        if (!this.disabled) {
          if (this.platform(), this.isPhone) return this.$refs.mobile.open(), void this.showCalendar();
          this.pickerPositionStyle = {
            top: "10px"
          }, t.index.createSelectorQuery().in(this).select(".uni-date-editor").boundingClientRect((function(t) {
            e.windowWidth - t.left < e.datePopupWidth && (e.pickerPositionStyle.right = 0)
          })).exec(), setTimeout((function() {
            if (e.pickerVisible = !e.pickerVisible, !e.isPhone && e.isRange && e.isFirstShow) {
              e.isFirstShow = !1;
              var t = e.calendarRange,
                a = t.startDate,
                i = t.endDate;
              a && i ? e.diffDate(a, i) < 30 && e.$refs.right.changeMonth("pre") : (e.$refs.right.changeMonth("next"), e.$refs.right.cale.lastHover = !1)
            }
          }), 50)
        }
      },
      close: function() {
        var e = this;
        setTimeout((function() {
          e.pickerVisible = !1, e.$emit("maskClick", e.value), e.$refs.mobile && e.$refs.mobile.close(), e.hideCalendar()
        }), 20)
      },
      hideCalendar: function() {
        this.$emit("close")
      },
      showCalendar: function() {
        this.$emit("show")
      },
      setEmit: function(e) {
        "timestamp" !== this.returnType && "date" !== this.returnType || (Array.isArray(e) ? (this.hasTime || (e[0] = e[0] + " 00:00:00", e[1] = e[1] + " 00:00:00"), e[0] = this.createTimestamp(e[0]), e[1] = this.createTimestamp(e[1]), "date" === this.returnType && (e[0] = new Date(e[0]), e[1] = new Date(e[1]))) : (this.hasTime || (e += " 00:00:00"), e = this.createTimestamp(e), "date" === this.returnType && (e = new Date(e)))), this.$emit("update:modelValue", e), this.$emit("input", e), this.$emit("change", e), this.isEmitValue = !0
      },
      createTimestamp: function(e) {
        return e = i.fixIosDateFormat(e), Date.parse(new Date(e))
      },
      singleChange: function(e) {
        this.calendarDate = this.inputDate = e.fulldate, this.hasTime || this.confirmSingleChange()
      },
      confirmSingleChange: function() {
        if (!i.checkDate(this.inputDate)) {
          var t = new Date;
          this.calendarDate = this.inputDate = i.getDate(t), this.pickerTime = i.getTime(t, this.hideSecond)
        }
        var a, n, s = !1;
        if (this.start) {
          var r, h, l = this.start;
          "number" == typeof this.start && (l = i.getDateTime(this.start, this.hideSecond)), r = l.split(" "), a = (h = e(r, 2))[0], n = h[1], this.start && !i.dateCompare(a, this.inputDate) && (s = !0, this.inputDate = a)
        }
        var d, c, o = !1;
        if (this.end) {
          var m, u, p = this.end;
          "number" == typeof this.end && (p = i.getDateTime(this.end, this.hideSecond)), m = p.split(" "), d = (u = e(m, 2))[0], c = u[1], this.end && !i.dateCompare(this.inputDate, d) && (o = !0, this.inputDate = d)
        }
        this.hasTime ? (s && (this.pickerTime = n || i.getDefaultSecond(this.hideSecond)), o && (this.pickerTime = c || i.getDefaultSecond(this.hideSecond)), this.pickerTime || (this.pickerTime = i.getTime(Date.now(), this.hideSecond)), this.displayValue = "".concat(this.inputDate, " ").concat(this.pickerTime)) : this.displayValue = this.inputDate, this.setEmit(this.displayValue), this.pickerVisible = !1
      },
      leftChange: function(e) {
        var t = e.range,
          a = t.before,
          i = t.after;
        this.rangeChange(a, i);
        var n = {
          before: e.range.before,
          after: e.range.after,
          data: e.range.data,
          fulldate: e.fulldate
        };
        this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, n)
      },
      rightChange: function(e) {
        var t = e.range,
          a = t.before,
          i = t.after;
        this.rangeChange(a, i);
        var n = {
          before: e.range.before,
          after: e.range.after,
          data: e.range.data,
          fulldate: e.fulldate
        };
        this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, n)
      },
      mobileChange: function(e) {
        if (this.isRange) {
          var t = e.range,
            a = t.before,
            i = t.after;
          if (!a || !i) return;
          if (this.handleStartAndEnd(a, i, !0), this.hasTime) {
            var n = e.timeRange,
              s = n.startTime,
              r = n.endTime;
            this.tempRange.startTime = s, this.tempRange.endTime = r
          }
          this.confirmRangeChange()
        } else this.hasTime ? this.displayValue = e.fulldate + " " + e.time : this.displayValue = e.fulldate, this.setEmit(this.displayValue);
        this.$refs.mobile.close(), this.hideCalendar()
      },
      rangeChange: function(e, t) {
        e && t && (this.handleStartAndEnd(e, t, !0), this.hasTime || this.confirmRangeChange())
      },
      confirmRangeChange: function() {
        var t;
        if (this.tempRange.startDate && this.tempRange.endDate) {
          var a, n;
          i.checkDate(this.tempRange.startDate) || (this.tempRange.startDate = i.getDate(Date.now())), i.checkDate(this.tempRange.endDate) || (this.tempRange.endDate = i.getDate(Date.now()));
          var s, r, h = !1,
            l = !1;
          if (this.start) {
            var d, c, o = this.start;
            "number" == typeof this.start && (o = i.getDateTime(this.start, this.hideSecond)), d = o.split(" "), s = (c = e(d, 2))[0], r = c[1], this.start && !i.dateCompare(this.start, this.tempRange.startDate) && (h = !0, this.tempRange.startDate = s), this.start && !i.dateCompare(this.start, this.tempRange.endDate) && (l = !0, this.tempRange.endDate = s)
          }
          var m, u, p = !1,
            g = !1;
          if (this.end) {
            var f, T, D = this.end;
            "number" == typeof this.end && (D = i.getDateTime(this.end, this.hideSecond)), f = D.split(" "), m = (T = e(f, 2))[0], u = T[1], this.end && !i.dateCompare(this.tempRange.startDate, this.end) && (p = !0, this.tempRange.startDate = m), this.end && !i.dateCompare(this.tempRange.endDate, this.end) && (g = !0, this.tempRange.endDate = m)
          }
          this.hasTime ? (h ? this.tempRange.startTime = r || i.getDefaultSecond(this.hideSecond) : p && (this.tempRange.startTime = u || i.getDefaultSecond(this.hideSecond)), this.tempRange.startTime || (this.tempRange.startTime = i.getTime(Date.now(), this.hideSecond)), l ? this.tempRange.endTime = r || i.getDefaultSecond(this.hideSecond) : g && (this.tempRange.endTime = u || i.getDefaultSecond(this.hideSecond)), this.tempRange.endTime || (this.tempRange.endTime = i.getTime(Date.now(), this.hideSecond)), a = this.displayRangeValue.startDate = "".concat(this.tempRange.startDate, " ").concat(this.tempRange.startTime), n = this.displayRangeValue.endDate = "".concat(this.tempRange.endDate, " ").concat(this.tempRange.endTime)) : (a = this.displayRangeValue.startDate = this.tempRange.startDate, n = this.displayRangeValue.endDate = this.tempRange.endDate), i.dateCompare(a, n) || (a = (t = [n, a])[0], n = t[1]), this.displayRangeValue.startDate = a, this.displayRangeValue.endDate = n;
          var R = [a, n];
          this.setEmit(R), this.pickerVisible = !1
        } else this.pickerVisible = !1
      },
      handleStartAndEnd: function(e, t) {
        var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (e && t) {
          var n = a ? "tempRange" : "range",
            s = i.dateCompare(e, t);
          this[n].startDate = s ? e : t, this[n].endDate = s ? t : e
        }
      },
      dateCompare: function(e, t) {
        return (e = new Date(e.replace("-", "/").replace("-", "/"))) <= new Date(t.replace("-", "/").replace("-", "/"))
      },
      diffDate: function(e, t) {
        e = new Date(e.replace("-", "/").replace("-", "/"));
        var a = ((t = new Date(t.replace("-", "/").replace("-", "/"))) - e) / 864e5;
        return Math.abs(a)
      },
      clear: function() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.isRange ? (this.displayRangeValue.startDate = "", this.displayRangeValue.endDate = "", this.tempRange.startDate = "", this.tempRange.startTime = "", this.tempRange.endDate = "", this.tempRange.endTime = "", this.isPhone ? this.$refs.mobile && this.$refs.mobile.clearCalender() : (this.$refs.left && this.$refs.left.clearCalender(), this.$refs.right && this.$refs.right.clearCalender(), this.$refs.right && this.$refs.right.changeMonth("next")), e && (this.$emit("change", []), this.$emit("input", []), this.$emit("update:modelValue", []))) : (this.displayValue = "", this.inputDate = "", this.pickerTime = "", this.isPhone ? this.$refs.mobile && this.$refs.mobile.clearCalender() : this.$refs.pcSingle && this.$refs.pcSingle.clearCalender(), e && (this.$emit("change", ""), this.$emit("input", ""), this.$emit("update:modelValue", "")))
      }
    }
  };
Array || (t.resolveComponent("uni-icons") + t.resolveComponent("time-picker") + t.resolveComponent("Calendar"))(), Math;
var s = t._export_sfc(n, [
  ["render", function(e, a, i, n, s, r) {
    return t.e({
      a: !s.isRange
    }, s.isRange ? {
      d: t.p({
        type: "calendar",
        color: "#c0c4cc",
        size: "22"
      }),
      e: t.t(s.displayRangeValue.startDate || r.startPlaceholderText),
      f: t.t(i.rangeSeparator),
      g: t.t(s.displayRangeValue.endDate || r.endPlaceholderText)
    } : {
      b: t.p({
        type: "calendar",
        color: "#c0c4cc",
        size: "22"
      }),
      c: t.t(s.displayValue || r.singlePlaceholderText)
    }, {
      h: r.showClearIcon
    }, r.showClearIcon ? {
      i: t.p({
        type: "clear",
        color: "#c0c4cc",
        size: "22"
      }),
      j: t.o((function() {
        return r.clear && r.clear.apply(r, arguments)
      }))
    } : {}, {
      k: i.disabled ? 1 : "",
      l: i.border ? 1 : "",
      m: t.o((function() {
        return r.show && r.show.apply(r, arguments)
      })),
      n: s.pickerVisible,
      o: t.o((function() {
        return r.close && r.close.apply(r, arguments)
      })),
      p: !s.isPhone
    }, s.isPhone ? {} : t.e({
      q: !s.isRange
    }, s.isRange ? t.e({
      K: s.hasTime
    }, s.hasTime ? {
      L: r.startDateText,
      M: s.tempRange.startDate,
      N: t.o((function(e) {
        return s.tempRange.startDate = e.detail.value
      })),
      O: r.startTimeText,
      P: !s.tempRange.startDate,
      Q: s.tempRange.startTime,
      R: t.o((function(e) {
        return s.tempRange.startTime = e.detail.value
      })),
      S: t.o((function(e) {
        return s.tempRange.startTime = e
      })),
      T: t.p({
        type: "time",
        start: r.timepickerStartTime,
        border: !1,
        disabled: !s.tempRange.startDate,
        hideSecond: i.hideSecond,
        modelValue: s.tempRange.startTime
      }),
      U: t.p({
        type: "arrowthinright",
        color: "#999"
      }),
      V: r.endDateText,
      W: s.tempRange.endDate,
      X: t.o((function(e) {
        return s.tempRange.endDate = e.detail.value
      })),
      Y: r.endTimeText,
      Z: !s.tempRange.endDate,
      aa: s.tempRange.endTime,
      ab: t.o((function(e) {
        return s.tempRange.endTime = e.detail.value
      })),
      ac: t.o((function(e) {
        return s.tempRange.endTime = e
      })),
      ad: t.p({
        type: "time",
        end: r.timepickerEndTime,
        border: !1,
        disabled: !s.tempRange.endDate,
        hideSecond: i.hideSecond,
        modelValue: s.tempRange.endTime
      })
    } : {}, {
      ae: t.sr("left", "7855cbc8-8"),
      af: t.o(r.leftChange),
      ag: t.o(r.updateRightCale),
      ah: t.o(r.monthSwitch),
      ai: t.p({
        showMonth: !1,
        "start-date": s.calendarRange.startDate,
        "end-date": s.calendarRange.endDate,
        range: !0,
        pleStatus: s.endMultipleStatus
      }),
      aj: t.sr("right", "7855cbc8-9"),
      ak: t.o(r.rightChange),
      al: t.o(r.updateLeftCale),
      am: t.o(r.monthSwitch),
      an: t.p({
        showMonth: !1,
        "start-date": s.calendarRange.startDate,
        "end-date": s.calendarRange.endDate,
        range: !0,
        pleStatus: s.startMultipleStatus
      }),
      ao: s.hasTime
    }, s.hasTime ? {
      ap: t.t(r.clearText),
      aq: t.o((function() {
        return r.clear && r.clear.apply(r, arguments)
      })),
      ar: t.t(r.okText),
      as: t.o((function() {
        return r.confirmRangeChange && r.confirmRangeChange.apply(r, arguments)
      }))
    } : {}, {
      at: t.s(s.pickerPositionStyle)
    }) : t.e({
      r: s.hasTime
    }, s.hasTime ? {
      s: r.selectDateText,
      t: s.inputDate,
      v: t.o((function(e) {
        return s.inputDate = e.detail.value
      })),
      w: r.selectTimeText,
      x: !s.inputDate,
      y: s.pickerTime,
      z: t.o((function(e) {
        return s.pickerTime = e.detail.value
      })),
      A: t.o((function(e) {
        return s.pickerTime = e
      })),
      B: t.p({
        type: "time",
        border: !1,
        disabled: !s.inputDate,
        start: r.timepickerStartTime,
        end: r.timepickerEndTime,
        hideSecond: i.hideSecond,
        modelValue: s.pickerTime
      })
    } : {}, {
      C: t.sr("pcSingle", "7855cbc8-4"),
      D: t.o(r.singleChange),
      E: t.o(r.monthSwitch),
      F: t.p({
        showMonth: !1,
        "start-date": s.calendarRange.startDate,
        "end-date": s.calendarRange.endDate,
        date: s.calendarDate,
        "default-value": i.defaultValue
      }),
      G: s.hasTime
    }, s.hasTime ? {
      H: t.t(r.okText),
      I: t.o((function() {
        return r.confirmSingleChange && r.confirmSingleChange.apply(r, arguments)
      }))
    } : {}, {
      J: t.s(s.pickerPositionStyle)
    }), {
      av: s.pickerVisible
    }), {
      aw: s.isPhone
    }, s.isPhone ? {
      ax: t.sr("mobile", "7855cbc8-10"),
      ay: t.o(r.mobileChange),
      az: t.o(r.close),
      aA: t.o(r.hideCalendar),
      aB: t.o(r.monthSwitch),
      aC: t.p({
        clearDate: !1,
        date: s.calendarDate,
        defTime: r.mobileCalendarTime,
        "start-date": s.calendarRange.startDate,
        "end-date": s.calendarRange.endDate,
        selectableTimes: r.mobSelectableTime,
        startPlaceholder: i.startPlaceholder,
        endPlaceholder: i.endPlaceholder,
        "default-value": i.defaultValue,
        selected: i.selected,
        "is-custom-select": i.isCustomSelect,
        pleStatus: s.endMultipleStatus,
        showMonth: !0,
        range: s.isRange,
        hasTime: s.hasTime,
        insert: !1,
        hideSecond: i.hideSecond
      })
    } : {})
  }]
]);
wx.createComponent(s);