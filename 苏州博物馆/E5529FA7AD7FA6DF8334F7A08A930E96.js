Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = function(e) {
  var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if (0 == e.reserveType) e.isCanAppoint = !1, e.appointBtnStr = (0, i.t)("activityList.no_re");
  else if (2 == e.reserveType) e.isCanAppoint = !1, e.appointBtnStr = (0, i.t)("activityList.phone_re");
  else if (1 == e.reserveType) {
    var r = (new Date).getTime();
    if (0 == e.mainType) {
      var p = new Date(e.reserveStartTime.replace(/-/g, "/")).getTime(),
        a = new Date(e.reserveEndTime.replace(/-/g, "/")).getTime();
      r < p ? (e.isCanAppoint = !1, e.appointBtnStr = (0, i.t)("activityList.re_will")) : r > a ? (e.isCanAppoint = !1, e.appointBtnStr = (0, i.t)("activityList.re_done")) : e.surplusNum <= 0 ? (e.isCanAppoint = !1, e.appointBtnStr = (0, i.t)("activityList.full_re")) : (e.isCanAppoint = !0, e.appointBtnStr = (0, i.t)("activityList.re_doing"))
    } else {
      var o, s, l, v, d;
      e.isCanAppoint = !0;
      var u = null === (o = (0, t.getNowFormatDate)()) || void 0 === o || null === (s = o.split("-")) || void 0 === s ? void 0 : s.join(""),
        y = e.reserveDeadline ? null === (l = e.reserveDeadline.split("-")) || void 0 === l ? void 0 : l.join("") : null === (v = e.endTime) || void 0 === v || null === (d = v.split("-")) || void 0 === d ? void 0 : d.join("");
      n && Number(y) < Number(u) ? (e.appointBtnStr = (0, i.t)("activityList.re_done"), e.isCanAppoint = !1) : e.appointBtnStr = (0, i.t)("activityList.re_doing")
    }
  }
  return e
};
var t = require("3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  i = require("miniprogram_npm/mini-i18n/index.js");