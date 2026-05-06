var t = require("../../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  e = {
    name: "calendar-select",
    props: {
      showCalendar: {
        type: Boolean,
        default: !1
      },
      mode: {
        type: String,
        default: "date"
      },
      title: {
        type: String,
        default: "可预约日期查询"
      },
      minDate: {
        type: [Number, String],
        default: "1950-01-01"
      },
      maxDate: {
        type: [Number, String],
        default: ""
      },
      isWeekend: {
        type: Boolean,
        default: !1
      },
      altPrice: {
        type: Array,
        default: [{
          date: "1950-01-01",
          price: ""
        }]
      },
      maxMonth: {
        type: Number,
        default: 6
      },
      field: {
        type: String,
        default: ""
      },
      isPage: {
        type: Boolean,
        default: !0
      },
      rangeInArr: {
        type: Boolean,
        default: !1
      }
    },
    data: function() {
      return {
        isInit: !1,
        triggered: !0,
        nowYear: (new Date).getFullYear(),
        nowMonth: (new Date).getMonth() + 1,
        nowDay: (new Date).getDate(),
        tipImg: this.$fileUrl + "/img/tip.png",
        listData: [],
        scrollTop: 100,
        datePrice: [],
        addOrRemoveData: [],
        weekday: 1,
        weekdayArr: [],
        days: 0,
        daysArr: [],
        showTitle: "",
        year: 2020,
        month: 0,
        day: 0,
        startYear: 0,
        startMonth: 0,
        startDay: 0,
        startWeek: "",
        endYear: 0,
        endMonth: 0,
        endDay: 0,
        endWeek: "",
        today: "",
        activeDate: "",
        startDate: "",
        endDate: "",
        isStart: !0,
        min: null,
        max: null,
        weekDayZh: ["日", "一", "二", "三", "四", "五", "六"]
      }
    },
    computed: {
      dataChange: function() {
        return "".concat(this.mode, "-").concat(this.minDate, "-").concat(this.maxDate)
      },
      dayLen: function() {
        if (this.startMonth && this.endMonth) {
          var t = new Date(this.startYear + "/" + this.startMonth + "/" + this.startDay).getTime(),
            e = new Date(this.endYear + "/" + this.endMonth + "/" + this.endDay).getTime();
          return parseInt((e - t) / 1e3 / 24 / 3600)
        }
        return 0
      }
    },
    mounted: function() {
      this.init(), t.index.$on("onReachBottom", this.onReachBottom)
    },
    beforeUnmount: function() {
      t.index.$off("onReachBottom")
    },
    methods: {
      onReachBottom: function() {
        this.isInit && this.changeMonthHandler(1)
      },
      timebul: function(t) {
        return 2 == (t + "").length ? t : "0" + t
      },
      submit: function() {
        var e = this.timebul(this.startMonth),
          a = this.timebul(this.startDay),
          n = this.timebul(this.endMonth),
          i = this.timebul(this.endDay),
          s = {
            start: this.startYear + "-" + e + "-" + a,
            end: this.endYear + "-" + n + "-" + i,
            startYear: this.startYear,
            startMonth: e,
            startDay: a,
            endYear: this.endYear,
            endMonth: n,
            endDay: i,
            diff: this.dayLen
          };
        this.isPage ? (this.$store.dispatch("setState", {
          key: this.field,
          value: s
        }), t.index.navigateBack(-1)) : this.$emit("submit", s)
      },
      init: function() {
        var t = this.$store.state.indexDateRange || {};
        this.rangeInArr || (this.addOrRemoveData = [t.start, t.end]);
        var e = new Date;
        this.year = e.getFullYear(), this.month = e.getMonth() + 1;
        var a = this.month + 6;
        this.day = e.getDate(), this.today = "".concat(e.getFullYear(), "-").concat(e.getMonth() + 1, "-").concat(e.getDate());
        var n = "".concat(e.getFullYear(), "-").concat(a, "-").concat(e.getDate());
        this.activeDate = this.today, this.min = this.initDate(this.minDate || this.today), this.max = this.initDate(this.maxDate || n), this.startWeek = "", this.rangeInArr || (this.startDate = t.start || "", this.startYear = t.startYear || 0, this.startMonth = t.startMonth || 0, this.startDay = t.startDay || 0, this.endYear = t.endYear || 0, this.endMonth = t.endMonth || 0, this.endDay = t.endDay || 0, this.endDate = t.end || ""), this.endWeek = "", this.isStart = !0, this.listData = [], this.initMonthList();
        var i = this;
        this.addOrRemoveData.length > 0 && setTimeout((function() {
          i.addOrRemoveChange()
        }), 200)
      },
      initMonthList: function() {
        var t = this,
          e = 0;
        (function a() {
          e < t.maxMonth ? e < t.listData.length ? (e++, t.changeMonthHandler(1), setTimeout((function() {
            a()
          }), 100)) : setTimeout((function() {
            a()
          }), 100) : t.isInit = !0
        })(), this.changeData(1)
      },
      initDate: function(t) {
        var e = t.split("-");
        return {
          year: Number(e[0] || 1920),
          month: Number(e[1] || 1),
          day: Number(e[2] || 1)
        }
      },
      openDisAbled: function(t, e, a) {
        var n = !0,
          i = "".concat(t, "/").concat(e, "/").concat(a);
        this.today.replace(/\-/g, "/");
        var s = "".concat(this.min.year, "/").concat(this.min.month, "/").concat(this.min.day),
          r = "".concat(this.max.year, "/").concat(this.max.month, "/").concat(this.max.day),
          h = new Date(i).getTime();
        return (h < new Date(s).getTime() || h > new Date(r).getTime()) && (n = !1), !this.isWeekend || "星期六" !== this.getWeekText(i) && "星期日" !== this.getWeekText(i) || (n = !1), n
      },
      startIsDisabled: function(e, a, n) {
        var i = !0;
        if (this.rangeInArr) {
          var s = e + "-" + (a - 9 > 0 ? a : "0" + a) + "-" + (n - 9 > 0 ? n : "0" + n);
          this.altPrice.find((function(t) {
            return t.date == s
          })) ? i = !0 : (i = !1, t.index.showToast({
            title: "".concat(s, "不可预约"),
            icon: "none"
          }))
        }
        return i
      },
      endIsDisabled: function(e, a, n) {
        var i = new Date(e + "/" + a + "/" + n);
        i.setDate(n - 1), e = i.getFullYear(), a = i.getMonth() + 1, n = i.getDate();
        var s = !0;
        if (this.rangeInArr) {
          var r = e + "-" + (a - 9 > 0 ? a : "0" + a) + "-" + (n - 9 > 0 ? n : "0" + n);
          this.altPrice.find((function(t) {
            return t.date == r
          })) ? s = !0 : (s = !1, t.index.showToast({
            title: "".concat(r, "不可预约"),
            icon: "none"
          }))
        }
        return s
      },
      openStartOrend: function(t, e, a) {
        var n = !1,
          i = "".concat(t, "/").concat(e, "/").concat(a),
          s = this.startDate.replace(/\-/g, "/"),
          r = this.endDate.replace(/\-/g, "/"),
          h = new Date(i).getTime();
        return h > new Date(s).getTime() && h < new Date(r).getTime() && (n = !0), n
      },
      viewDayAlt: function(t, e, a) {
        var n = this.altPrice.find((function(n) {
          var i = n.date.replace(/\-/g, "/");
          return new Date("".concat(t, "/").concat(e, "/").concat(a)).getTime() === new Date(i).getTime()
        }));
        if (n) return Number.isNaN(n.price) ? n.price : "￥" + n.price
      },
      generateArray: function(t, e) {
        return Array.from(new Array(e + 1).keys()).slice(t)
      },
      formatNum: function(t) {
        return t < 10 ? "0" + t : t + ""
      },
      getMonthDay: function(t, e) {
        return new Date(t, e, 0).getDate()
      },
      getWeekday: function(t, e) {
        return new Date("".concat(t, "/").concat(e, "/01 00:00:00")).getDay()
      },
      checkRange: function(e) {
        var a = !1;
        return (e < this.minYear || e > this.maxYear) && (t.index.showToast({
          title: "日期超出范围啦~",
          icon: "none"
        }), a = !0), a
      },
      onRestore: function() {
        this.triggered = "restore"
      },
      changeMonthHandler: function(t) {
        if (this.triggered = !1, 1 == t) {
          var e = [];
          if (0 == this.listData.length) e = [now.getFullYear(), now.getMonth() + 1];
          else {
            var a = this.listData[this.listData.length - 1];
            e = [a.year, a.month]
          }
          var n = e[1] + 1,
            i = n > 12 ? e[0] + 1 : e[0];
          if (i > this.max.year) return !1;
          if (i == this.max.year && n >= this.max.month) return !1;
          this.checkRange(i) || (this.month = n > 12 ? 1 : n, this.year = i, this.changeData(t))
        } else {
          var s = [];
          if (0 == this.listData.length) s = [now.getFullYear(), now.getMonth() + 1];
          else {
            var r = this.listData[0];
            s = [r.year, r.month]
          }
          var h = s[1] - 1,
            o = h < 1 ? s[0] - 1 : s[0];
          if (o < this.min.year) return !1;
          if (o == this.min.year && h <= this.min.month) return !1;
          this.checkRange(o) || (this.month = h < 1 ? 12 : h, this.year = o, this.changeData(t))
        }
      },
      changeYearHandler: function(t) {
        var e = t ? this.year + 1 : this.year - 1;
        this.checkRange(e) || (this.year = e, this.changeData())
      },
      changeData: function(t) {
        this.days = this.getMonthDay(this.year, this.month), this.daysArr = this.generateArray(1, this.days), this.weekday = this.getWeekday(this.year, this.month), this.weekdayArr = this.generateArray(1, this.weekday), this.showTitle = "".concat(this.year, "年").concat(this.month, "月"), this.isChange && "date" == this.mode && this.btnFix(!0), this.setDayText(t)
      },
      setDayText: function(t) {
        1 == t ? this.listData.push({
          year: this.year,
          month: this.month,
          weekdayArr: this.weekdayArr,
          daysArr: this.daysArr,
          showTitle: this.showTitle
        }) : this.listData.unshift({
          year: this.year,
          month: this.month,
          weekdayArr: this.weekdayArr,
          daysArr: this.daysArr,
          showTitle: this.showTitle
        })
      },
      addOrRemoveChange: function() {
        var t = this,
          e = this;
        this.addOrRemoveData.forEach((function(a, n) {
          var i = a.replace(/\-/g, "/"),
            s = new Date(i),
            r = s.getFullYear(),
            h = s.getMonth() + 1,
            o = s.getDate() - 1;
          0 === n ? t.dateClick({
            year: r,
            month: h
          }, o) : setTimeout((function() {
            e.dateClick({
              year: r,
              month: h
            }, o)
          }), 300)
        }))
      },
      dateClick: function(t, e) {
        if (e += 1, this.openDisAbled(t.year, t.month, e)) {
          this.day = e;
          var a = "".concat(t.year, "-").concat(t.month, "-").concat(e);
          if ("date" == this.mode) this.activeDate = a, this.btnFix(!0);
          else {
            var n = new Date(a.replace(/\-/g, "/")).getTime() < new Date(this.startDate.replace(/\-/g, "/")).getTime();
            if (this.isStart || n) {
              if (!this.startIsDisabled(t.year, t.month, e)) return;
              this.startDate = a, this.startYear = t.year, this.startMonth = t.month, this.startDay = this.day, this.endYear = 0, this.endMonth = 0, this.endDay = 0, this.endDate = "", this.activeDate = "", this.startWeek = this.getWeekText(this.startDate), this.isStart = !1, this.datePrice = [{
                date: a,
                price: "入住"
              }]
            } else {
              if (this.startDate == a) return;
              if (!this.endIsDisabled(t.year, t.month, e)) return;
              this.endDate = a, this.endYear = t.year, this.endMonth = t.month, this.endDay = this.day, this.endWeek = this.getWeekText(this.endDate), this.isStart = !0, this.datePrice.push({
                date: a,
                price: "离店"
              }), this.btnFix(!0)
            }
          }
        }
      },
      close: function() {
        this.scrollTop = 0, this.$emit("input", !1)
      },
      getWeekText: function(t) {
        return "星期" + ["日", "一", "二", "三", "四", "五", "六"][(t = new Date("".concat(t.replace(/\-/g, "/"), " 00:00:00"))).getDay()]
      },
      btnFix: function(t) {
        if (t || this.close(), "date" == this.mode) {
          var e = this.activeDate.split("-"),
            a = this.isChange ? this.year : Number(e[0]),
            n = this.isChange ? this.month : Number(e[1]),
            i = this.isChange ? this.day : Number(e[2]),
            s = this.getMonthDay(a, n),
            r = "".concat(a, "-").concat(this.formatNum(n), "-").concat(this.formatNum(i)),
            h = this.getWeekText(r),
            o = !1;
          "".concat(a, "-").concat(n, "-").concat(i) == this.today && (o = !0), this.$emit("change", {
            year: a,
            month: n,
            day: i,
            days: s,
            activeDate: this.activeDate,
            result: r,
            week: h,
            isToday: o
          })
        } else {
          if (!this.startDate || !this.endDate) return;
          var c = this.formatNum(this.startMonth),
            d = this.formatNum(this.startDay),
            y = "".concat(this.startYear, "-").concat(c, "-").concat(d),
            m = this.getWeekText(y),
            u = this.formatNum(this.endMonth),
            D = this.formatNum(this.endDay),
            l = "".concat(this.endYear, "-").concat(u, "-").concat(D),
            g = this.getWeekText(l);
          this.startYear, this.startMonth - 9 > 0 ? this.startMonth : this.startMonth, this.startDay - 9 > 0 ? this.startDay : this.startDay;
          "-" + this.endYear + "." + (this.endMonth - 9 > 0 ? this.endMonth : "0" + this.endMonth) + "." + (this.endDay - 9 > 0 ? this.endDay : "0" + this.endDay), this.$emit("change", {
            startYear: this.startYear,
            startMonth: this.startMonth,
            startDay: this.startDay,
            startDate: y,
            startWeek: m,
            endYear: this.endYear,
            endMonth: this.endMonth,
            endDay: this.endDay,
            endDate: l,
            endWeek: g
          })
        }
      }
    }
  },
  a = t._export_sfc(e, [
    ["render", function(e, a, n, i, s, r) {
      return t.e({
        a: n.showCalendar
      }, n.showCalendar ? t.e({
        b: t.f(s.weekDayZh, (function(e, a, n) {
          return {
            a: t.t(e),
            b: a
          }
        })),
        c: t.t(s.startMonth || "--"),
        d: t.t(s.startDay || "--"),
        e: t.t(s.endMonth || "--"),
        f: t.t(s.endDay || "--"),
        g: s.endMonth
      }, s.endMonth ? {
        h: t.t(r.dayLen),
        i: t.o((function() {
          return r.submit && r.submit.apply(r, arguments)
        }))
      } : (s.startMonth, {}), {
        j: s.startMonth,
        k: t.f(s.listData, (function(e, a, i) {
          return {
            a: t.t(e.showTitle),
            b: t.f(e.weekdayArr, (function(t, e, a) {
              return {
                a: e
              }
            })),
            c: t.f(e.daysArr, (function(a, i, h) {
              return t.e({
                a: t.t(i + 1),
                b: !!r.viewDayAlt(e.year, e.month, i + 1)
              }, r.viewDayAlt(e.year, e.month, i + 1) ? {
                c: t.t(r.viewDayAlt(e.year, e.month, i + 1))
              } : {}, {
                d: i,
                e: r.openDisAbled(e.year, e.month, i + 1) ? "" : 1,
                f: r.openDisAbled(e.year, e.month, i + 1) ? 1 : "",
                g: "date" == n.mode && s.activeDate == "".concat(e.year, "-").concat(e.month, "-").concat(i + 1) ? 1 : "",
                h: "range" == n.mode && s.startDate == "".concat(e.year, "-").concat(e.month, "-").concat(i + 1) ? 1 : "",
                i: "range" == n.mode && r.openStartOrend(e.year, e.month, i + 1) ? 1 : "",
                j: "range" == n.mode && s.endDate == "".concat(e.year, "-").concat(e.month, "-").concat(i + 1) ? 1 : "",
                k: (i + e.weekdayArr.length) % 7 == 0 || (i + e.weekdayArr.length) % 7 == 6 ? 1 : "",
                l: e.year == s.nowYear && e.month == s.nowMonth && s.nowDay == i + 1 ? 1 : "",
                m: t.o((function(t) {
                  return r.dateClick(e, i)
                }), i)
              })
            })),
            d: e.showTitle
          }
        })),
        l: "range" == n.mode ? 1 : ""
      }) : {})
    }],
    ["__scopeId", "data-v-93315db4"]
  ]);
wx.createComponent(a);