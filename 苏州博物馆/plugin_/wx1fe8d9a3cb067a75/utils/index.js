Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.colorRgba = function(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    a = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,
    n = "".concat(t.startsWith("#") ? "" : "#").concat(t);
  if (n = n.toLowerCase(), a.test(n)) {
    4 === n.length && (n = "#".padEnd(7, n[1]));
    for (var r = [], o = 1; o < 7; o += 2) r.push(parseInt("0x" + n.slice(o, o + 2)));
    return "rgba(".concat(r.join(","), ",").concat(e, ")")
  }
  return "rgba(26,121,255,".concat(e, ")")
}, exports.setInRange = function(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    a = Math.max(t, e[0] || 0);
  return Math.min(a, e[1] || 0)
};