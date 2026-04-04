var r = require("./zblibutil/deflate.js").deflate,
  n = require("./base64.js"),
  e = n.base64Encode;
n.base64Decode, require("./logutil.js");

function t(r) {
  for (var n, t = 0, i = r.length, u = ""; t < i;) n = r.subarray(t, Math.min(t + 32768, i)), u += String.fromCharCode.apply(null, n), t += 32768;
  return e(u)
}
module.exports = {
  zlibStringToUint8Array: function (n) {
    return r(n)
  },
  zlibUint8Array: function (n) {
    return r(n)
  },
  zipStr: function (n) {
    return t(r(n))
  },
  zip: function (n) {
    var e = JSON.stringify(n);
    return t(r(e))
  },
  unzip: function (r) {}
};