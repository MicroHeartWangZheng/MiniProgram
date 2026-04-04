var r = require("../../comm/utils/ziputil.js"),
  t = require("../../comm/utils/xxtea_new.js"),
  i = require("../../comm/utils/base64"),
  e = (require("../../comm/utils/logutil.js"), require("../../comm/utils/codeutil.js")),
  n = require("../../comm/utils/encryptutil.js"),
  u = require("../../comm/utils/util"),
  o = [77, 35, 78, 120, 90, 98, 64, 116];
module.exports = {
  v1f664446: function (n, u, s, a) {
    var c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o,
      y = JSON.stringify(a);
    y = t.utf8Encode(y);
    var l = e.stringToUbyteArray(y),
      m = [parseInt(u, 10)],
      A = e.ubyteArrayToUint8Array(m.concat(l)),
      v = r.zlibUint8Array(A),
      b = c,
      g = e.msToUbyteArray(s),
      p = b.concat(g);
    p = new Uint8Array(p);
    var U = t.encryptUint8Array(v, p),
      d = [2],
      q = e.stringToUbyteArray(U),
      f = d.concat(g, q),
      T = e.ubyteArrayToString(f);
    return T = n + ":" + (T = i.base64Encode(T))
  },
  v312e7988: function (t, i) {
    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
      o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
      s = t + "#" + o,
      a = "";
    if (!u.isEmpty(i) && !u.isEmpty(e)) {
      var c = r.zlibStringToUint8Array(i);
      0 === o && (e = n.encrypt_SHA256(e), a = n.encrypt_AES256(c, e))
    }
    return s = s + "#" + a
  }
};