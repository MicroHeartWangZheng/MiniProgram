var t = require("./@babel/runtime/helpers/toConsumableArray.js"),
  e = require("./@babel/runtime/helpers/classCallCheck.js"),
  a = require("./@babel/runtime/helpers/createClass.js");

function s(t) {
  t = n(t);
  var e = (t = new Date(t)).getFullYear(),
    a = t.getMonth() + 1,
    s = t.getDate();
  return "".concat(e, "-").concat(i(a), "-").concat(i(s))
}

function u(t, e) {
  t = n(t);
  var a = (t = new Date(t)).getHours(),
    s = t.getMinutes(),
    u = t.getSeconds();
  return e ? "".concat(i(a), ":").concat(i(s)) : "".concat(i(a), ":").concat(i(s), ":").concat(i(u))
}

function i(t) {
  return t < 10 && (t = "0".concat(t)), t
}

function r(t, e) {
  return (t = new Date(n(t))) <= new Date(n(e))
}
var l = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])( [0-5][0-9]:[0-5][0-9]:[0-5][0-9])?$/;

function n(t) {
  return "string" == typeof t && l.test(t) && (t = t.replace(/-/g, "/")), t
}
exports.Calendar = function() {
  function u() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      a = t.selected,
      s = t.startDate,
      i = t.endDate,
      r = t.range;
    e(this, u), this.date = this.getDateObj(new Date), this.selected = a || [], this.startDate = s, this.endDate = i, this.range = r, this.cleanMultipleStatus(), this.weeks = {}, this.lastHover = !1
  }
  return a(u, [{
    key: "setDate",
    value: function(t) {
      var e = this.getDateObj(t);
      this.getWeeks(e.fullDate)
    }
  }, {
    key: "cleanMultipleStatus",
    value: function() {
      this.multipleStatus = {
        before: "",
        after: "",
        data: []
      }
    }
  }, {
    key: "setStartDate",
    value: function(t) {
      this.startDate = t
    }
  }, {
    key: "setEndDate",
    value: function(t) {
      this.endDate = t
    }
  }, {
    key: "getPreMonthObj",
    value: function(t) {
      t = n(t);
      var e = (t = new Date(t)).getMonth();
      t.setMonth(e - 1);
      var a = t.getMonth();
      return 0 !== e && a - e == 0 && t.setMonth(a - 1), this.getDateObj(t)
    }
  }, {
    key: "getNextMonthObj",
    value: function(t) {
      t = n(t);
      var e = (t = new Date(t)).getMonth();
      t.setMonth(e + 1);
      var a = t.getMonth();
      return a - e > 1 && t.setMonth(a - 1), this.getDateObj(t)
    }
  }, {
    key: "getDateObj",
    value: function(t) {
      return t = n(t), {
        fullDate: s(t = new Date(t)),
        year: t.getFullYear(),
        month: i(t.getMonth() + 1),
        date: i(t.getDate()),
        day: t.getDay()
      }
    }
  }, {
    key: "getPreMonthDays",
    value: function(t, e) {
      for (var a = [], s = t - 1; s >= 0; s--) {
        var u = e.month - 1;
        a.push({
          date: new Date(e.year, u, -s).getDate(),
          month: u,
          disable: !0
        })
      }
      return a
    }
  }, {
    key: "getCurrentMonthDays",
    value: function(t, e) {
      for (var a = this, s = [], u = this.date.fullDate, l = function() {
          var t = "".concat(e.year, "-").concat(e.month, "-").concat(i(n)),
            l = u === t,
            o = a.selected && a.selected.find((function(e) {
              if (a.dateEqual(t, e.date)) return e
            }));
          a.startDate && r(a.startDate, t), a.endDate && r(t, a.endDate);
          var h = a.multipleStatus.data,
            f = -1;
          a.range && h && (f = h.findIndex((function(e) {
            return a.dateEqual(e, t)
          })));
          var c = -1 !== f;
          s.push({
            fullDate: t,
            year: e.year,
            date: n,
            multiple: !!a.range && c,
            beforeMultiple: a.isLogicBefore(t, a.multipleStatus.before, a.multipleStatus.after),
            afterMultiple: a.isLogicAfter(t, a.multipleStatus.before, a.multipleStatus.after),
            month: e.month,
            disable: a.startDate && !r(a.startDate, t) || a.endDate && !r(t, a.endDate),
            isToday: l,
            userChecked: !1,
            extraInfo: o
          })
        }, n = 1; n <= t; n++) l();
      return s
    }
  }, {
    key: "_getNextMonthDays",
    value: function(t, e) {
      for (var a = [], s = e.month + 1, u = 1; u <= t; u++) a.push({
        date: u,
        month: s,
        disable: !0
      });
      return a
    }
  }, {
    key: "getInfo",
    value: function(t) {
      var e = this;
      return t || (t = new Date), this.calendar.find((function(a) {
        return a.fullDate === e.getDateObj(t).fullDate
      }))
    }
  }, {
    key: "dateEqual",
    value: function(t, e) {
      return t = new Date(n(t)), e = new Date(n(e)), t.valueOf() === e.valueOf()
    }
  }, {
    key: "isLogicBefore",
    value: function(t, e, a) {
      var s = e;
      return e && a && (s = r(e, a) ? e : a), this.dateEqual(s, t)
    }
  }, {
    key: "isLogicAfter",
    value: function(t, e, a) {
      var s = a;
      return e && a && (s = r(e, a) ? a : e), this.dateEqual(s, t)
    }
  }, {
    key: "geDateAll",
    value: function(t, e) {
      var a = [],
        s = t.split("-"),
        u = e.split("-"),
        i = new Date;
      i.setFullYear(s[0], s[1] - 1, s[2]);
      var r = new Date;
      r.setFullYear(u[0], u[1] - 1, u[2]);
      for (var l = i.getTime() - 864e5, n = r.getTime() - 864e5, o = l; o <= n;) o += 864e5, a.push(this.getDateObj(new Date(parseInt(o))).fullDate);
      return a
    }
  }, {
    key: "setMultiple",
    value: function(t) {
      if (this.range) {
        var e = this.multipleStatus,
          a = e.before,
          s = e.after;
        if (a && s) {
          if (!this.lastHover) return void(this.lastHover = !0);
          this.multipleStatus.before = t, this.multipleStatus.after = "", this.multipleStatus.data = [], this.multipleStatus.fulldate = "", this.lastHover = !1
        } else a ? (this.multipleStatus.after = t, r(this.multipleStatus.before, this.multipleStatus.after) ? this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after) : this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before), this.lastHover = !0) : (this.multipleStatus.before = t, this.lastHover = !1);
        this.getWeeks(t)
      }
    }
  }, {
    key: "setHoverMultiple",
    value: function(t) {
      this.range && !this.lastHover && (this.multipleStatus.before ? (this.multipleStatus.after = t, r(this.multipleStatus.before, this.multipleStatus.after) ? this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after) : this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before)) : this.multipleStatus.before = t, this.getWeeks(t))
    }
  }, {
    key: "setDefaultMultiple",
    value: function(t, e) {
      this.multipleStatus.before = t, this.multipleStatus.after = e, t && e && (r(t, e) ? (this.multipleStatus.data = this.geDateAll(t, e), this.getWeeks(e)) : (this.multipleStatus.data = this.geDateAll(e, t), this.getWeeks(t)))
    }
  }, {
    key: "getWeeks",
    value: function(e) {
      for (var a = this.getDateObj(e), s = a.year, u = a.month, i = new Date(s, u - 1, 1).getDay(), r = this.getPreMonthDays(i, this.getDateObj(e)), l = new Date(s, u, 0).getDate(), n = 42 - i - l, o = [].concat(t(r), t(this.getCurrentMonthDays(l, this.getDateObj(e))), t(this._getNextMonthDays(n, this.getDateObj(e)))), h = new Array(6), f = 0; f < o.length; f++) {
        var c = Math.floor(f / 7);
        h[c] || (h[c] = new Array(7)), h[c][f % 7] = o[f]
      }
      this.calendar = o, this.weeks = h
    }
  }]), u
}(), exports.checkDate = function(t) {
  return t.match(/((19|20)\d{2})(-|\/)\d{1,2}(-|\/)\d{1,2}/g)
}, exports.dateCompare = r, exports.fixIosDateFormat = n, exports.getDate = s, exports.getDateTime = function(t, e) {
  return "".concat(s(t), " ").concat(u(t, e))
}, exports.getDefaultSecond = function(t) {
  return t ? "00:00" : "00:00:00"
}, exports.getTime = u;