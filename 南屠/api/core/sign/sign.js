var e = require("../../comm/random.js").generateUUID,
  t = require("../../comm/utils/util"),
  r = require("../../comm/storage"),
  i = require("../comm/local"),
  a = require("../comm/rcode"),
  o = require("../../comm/utils/murmurhash2"),
  s = require("../../comm/utils/cryptojs/hmac-sha1"),
  c = require("../../comm/utils/cryptojs/enc-base64"),
  u = require("../../comm/utils/cryptojs/core"),
  m = (require("../../comm/utils/logutil"), "");
module.exports = {
  saveSignKey: function (e, a, o) {
    if (!t.isEmpty(o) && !t.isEmpty(a)) {
      var s = i.buildLocalStorageKey(e, "a2dfb8a0"),
        c = r.getLocal(s);
      (c = t.isEmpty(c) ? [] : JSON.parse(c)).length >= 20 && c.shift(), c.push(a + ":" + o);
      var u = JSON.stringify(c);
      r.setLocal(s, u)
    }
  },
  activateSign: function (e, s) {
    try {
      if (t.isEmpty(s)) return a.ERROR_ACTIVATE_SIGN_INVALID_PARAM;
      var c = s.split(":");
      if (c.length < 2) return a.ERROR_ACTIVATE_SIGN_INVALID_PARAM;
      var u, l, n = c[0],
        g = (c[1], r.getLocal(i.buildLocalStorageKey(e, "a2dfb8a0")));
      if (g = JSON.parse(g), t.isEmpty(g)) return a.ERROR_ACTIVATE_SIGN_NO_SIGN_KEY;
      for (var R = 0; R < g.length; R++) {
        var _ = g[R].split(":");
        if (_.length >= 2)
          if (o.hash32(_[1], 0, !1) == n) {
            l = _[0], u = _[1];
            break
          }
      }
      if (t.isEmpty(u)) return a.ERROR_ACTIVATE_SIGN_NO_MATCH_SIGN_KEY;
      var E = r.getLocal(i.buildLocalStorageKey(e, "6aa48df2"));
      if (t.isEmpty(E)) m = l + ";" + u + ";" + s, r.setLocal(i.buildLocalStorageKey(e, "6aa48df2"), m);
      else {
        var f = E.split(";");
        f.length >= 3 && f[0] < l && (m = l + ";" + u + ";" + s, r.setLocal(i.buildLocalStorageKey(e, "6aa48df2"), m))
      }
      return 0
    } catch (e) {
      return a.commCode.ERROR_BIZ_CRASH
    }
  },
  isActivate: function (e) {
    try {
      return !t.isEmpty(r.getLocal(i.buildLocalStorageKey(e, "6aa48df2")))
    } catch (e) {
      return !1
    }
  },
  signData: function (o, l) {
    var n = {
      ret: 0,
      msg: ""
    };
    try {
      if (t.isEmpty(l)) return n.ret = a.ERROR_SIGN_EMPTY_PARAM, n;
      if (t.isEmpty(m) && (m = r.getLocal(i.buildLocalStorageKey(o, "6aa48df2"))), t.isEmpty(m)) return n.ret = a.ERROR_SIGN_BEFORE_ACTIVATE, n;
      var g = m.split(";");
      if (g.length < 3) return n.ret = a.ERROR_SIGN_INVALID_SIGN_TOKEN, n;
      var R = g[1],
        _ = g[2],
        E = "" + e(),
        f = (new Date).getTime(),
        y = {
          sign: c.stringify(s(l + E + f, R)),
          nonce: E,
          timestamp: f,
          token: _,
          signMethod: "HmacSHA1"
        };
      return n.ret = 0, n.msg = c.stringify(u.enc.Utf8.parse(JSON.stringify(y))), n
    } catch (e) {
      return n.ret = a.commCode.ERROR_BIZ_CRASH, n
    }
  }
};