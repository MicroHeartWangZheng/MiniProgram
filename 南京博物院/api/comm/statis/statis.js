var e = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/createClass"),
  i = require("../random.js").generateReqId,
  s = require("../storage.js"),
  r = s.setLocal,
  n = s.getLocal,
  a = s.delLocal,
  u = require("../utils/murmurhash2.js").hash32,
  h = require("../utils/util.js"),
  l = require("./event.js"),
  o = (require("../utils/logutil"), function () {
    function s(t, r) {
      var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      e(this, s), this.isStatis = n, this.reqId = i(), this.channel = t, this.key = this._getStatisK(t + r), this.event = l, this.startTime = (new Date).getTime(), this.startConsumeTime = this.startTime
    }
    return t(s, [{
      key: "_getStatisK",
      value: function (e) {
        return u(e + "", 0).toString(16) + "uidsk"
      }
    }, {
      key: "_getStatis",
      value: function () {
        var e = this.key,
          t = n(e);
        return h.isEmpty(t) ? [] : t = JSON.parse(t)
      }
    }, {
      key: "_delStatis",
      value: function () {
        var e = this.key;
        a(e)
      }
    }, {
      key: "_reCacheStatis",
      value: function (e) {
        try {
          if (!this.isStatis || !e) return;
          var t = this.key,
            i = n(t);
          (i = (i = h.isEmpty(i) ? [] : JSON.parse(i)).concat(e)).length > 5 && i.shift();
          var s = JSON.stringify(i);
          r(t, s)
        } catch (e) {}
      }
    }, {
      key: "getReqId",
      value: function () {
        return this.reqId
      }
    }, {
      key: "getEvent",
      value: function () {
        return this.event
      }
    }, {
      key: "resetStartConsumeTime",
      value: function () {
        return this.startConsumeTime = (new Date).getTime(), this.startConsumeTime
      }
    }, {
      key: "getConsumeTime",
      value: function (e) {
        return (new Date).getTime() - e
      }
    }, {
      key: "getStartTime",
      value: function () {
        return this.startTime
      }
    }, {
      key: "doStatis",
      value: function (e, t) {
        try {
          if (!this.isStatis || !e) return;
          var i = this.key,
            s = n(i);
          s = h.isEmpty(s) ? [] : JSON.parse(s);
          var a = {
            seq: t,
            events: []
          };
          for (var u in s)
            if (s[u].seq === t) {
              s[u].events.push(e), s[u].events.length > 30 && s[u].events.shift(), a.events = s[u].events;
              break
            } a.events.length <= 0 && (a.events.push(e), s.push(a)), s.length > 5 && s.shift();
          var l = JSON.stringify(s);
          r(i, l)
        } catch (e) {}
      }
    }, {
      key: "reportReq",
      value: function (e, t, i, s, r, n, a, u, h) {
        var l = {
          channel: this.channel,
          platform: i,
          events: a,
          buildno: s,
          uuid: r,
          seq: n
        };
        e.request(l, u, h, t)
      }
    }, {
      key: "reportStatis",
      value: function (e, t, i, s, r) {
        var n = this;
        try {
          if (!this.isStatis || !e) return;
          var a = this._getStatis();
          if (!a || a.length <= 0) return;
          this._delStatis();
          var u = function () {
            var u = a[h];
            u && u.seq && u.events && u.events.length > 0 && n.reportReq(e, t, i, s, r, u.seq, u.events, (function (e) {
              e && 0 != e.ret && n._reCacheStatis(u)
            }), (function (e) {
              n._reCacheStatis(u)
            }))
          };
          for (var h in a) u()
        } catch (e) {}
      }
    }]), s
  }());
module.exports = {
  Handle: o,
  buildStatisHandle: function (e, t, i) {
    return i ? new o(e, t, i) : null
  },
  buildIsStatis: function (e) {
    return "boolean" != typeof e || e
  }
};