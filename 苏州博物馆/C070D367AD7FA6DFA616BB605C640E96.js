Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.decrypt = exports.appId = void 0, exports.default = function() {
  var t = "ZW8H3S4S-Z2ZCB02W-02UAWH3B-HGDIT8VY".replace(/-/g, ""),
    r = (new Date).getTime().toString(),
    n = function() {
      for (var e = "", t = 0; t < 6; t++) {
        e += Math.floor(10 * Math.random())
      }
      return e
    }() + r;
  return function(t, r) {
    return e.AES.encrypt(r, e.enc.Utf8.parse(t), {
      mode: e.mode.ECB,
      padding: e.pad.Pkcs7
    }).toString()
  }(t, n)
}, exports.getDate = t, exports.getOrderTime = function(r, n, a, o, c, p, d) {
  var i = t(),
    u = p.map((function(e) {
      return e.documentNumber
    })).join(""),
    s = n + a + o + c + i + u + r + d;
  return e.MD5(s).toString()
};
var e = require("4FC87BF1AD7FA6DF29AE13F6F5140E96.js");
exports.appId = "9eadb789046543df8b229ae99bb6e8ec";

function t() {
  var e = new Date,
    t = e.getFullYear(),
    r = String(e.getMonth() + 1).padStart(2, "0"),
    n = String(e.getDate()).padStart(2, "0");
  return "".concat(t, "-").concat(r, "-").concat(n)
}
exports.decrypt = function(t, r) {
  if (!r) return "";
  var n = e.enc.Base64.parse(r);
  return e.AES.decrypt({
    ciphertext: n
  }, e.enc.Utf8.parse(t), {
    mode: e.mode.ECB,
    padding: e.pad.Pkcs7
  }).toString(e.enc.Utf8)
};