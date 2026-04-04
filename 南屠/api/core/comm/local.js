var e = require("../../comm/random.js"),
  t = require("../../comm/storage.js"),
  i = require("../../comm/utils/murmurhash2.js").hash32,
  r = require("../../comm/utils/logutil.js");
module.exports = {
  getUUID: function (i, r, n) {
    var u = t.getLocal(i);
    return u || (u = e.generateUUID(), t.setLocal(i, u), t.delLocal(r), t.delLocal(n)), u
  },
  setTicket: function (e, i, r) {
    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
      u = (new Date).getTime(),
      o = u + 1e3 * r;
    t.setLocal(e, o + "|" + i + "|" + n)
  },
  getLocalTicket: function (e) {
    var i = t.getLocal(e),
      n = "",
      u = !1,
      o = "",
      c = (new Date).getTime();
    try {
      if (i) {
        var l = i.split("|");
        c < +l[0] ? (n = l[1], o = l[2]) : (n = l[1], o = l[2], u = !0)
      }
    } catch (e) {
      return r.error(e), {
        expired: u,
        ticket: n,
        tdid: o
      }
    }
    return {
      expired: u,
      ticket: n,
      tdid: o
    }
  },
  buildTokenKeys: function (e) {
    return {
      tk: e + i("_TURING_TOKEN", 0).toString(16),
      rk: e + i("_RISK_TOKEN", 0).toString(16)
    }
  },
  buildTuringPunishKey: function (e) {
    return {
      timesk: e + i("key_turing_times_limit", 0).toString(16),
      faildk: e + i("key_turing_faild_limit", 0).toString(16)
    }
  },
  buildDeviceTokenKey: function (e) {
    return e + "d29118e0"
  },
  buildTicketKey: function (e) {
    return e + "bd7dcc4c"
  },
  buildUUidKey: function (e) {
    return e + "f1fe7b11"
  },
  buildCtrFlagKey: function (e) {
    return e + "97717caf"
  },
  buildLocalStorageKey: function (e, t) {
    return e + t
  }
};