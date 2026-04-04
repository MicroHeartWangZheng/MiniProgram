var t = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    83: "台湾"
  },
  r = {
    81: "香港",
    82: "澳门",
    83: "台湾"
  },
  n = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"],
  e = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];

function s(r) {
  return !!/^[1-9]\d{5}$/.test(r) && !!t[parseInt(r.substring(0, 2))]
}

function u(t) {
  if (!/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(t)) return !1;
  var r = parseInt(t.substring(0, 4), 10),
    n = parseInt(t.substring(4, 6), 10),
    e = parseInt(t.substring(6), 10),
    s = new Date(r, n - 1, e);
  return !(s > new Date) && (s.getFullYear() == r && s.getMonth() == n - 1 && s.getDate() == e)
}

function i(t) {
  for (var r = t.substring(0, 17), s = 0, u = 0; u < 17; u++) s += parseInt(r.charAt(u), 10) * parseInt(n[u]);
  return e[s % 11]
}

function a(t) {
  var r = t.charAt(17).toUpperCase();
  return i(t) == r
}
module.exports = {
  checkIdCardNo: function (t, n) {
    return 0 == n ? !!/^\d{15}|(\d{17}(\d|X))$/.test(t) && (15 == t.length ? function (t) {
      var r = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(t);
      if (!r) return !1;
      var n = t.substring(0, 6);
      return !!(r = s(n)) && u("19" + t.substring(6, 12))
    }(t) : 18 == t.length && function (t) {
      var r = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|X)$/.test(t);
      if (!r) return !1;
      var n = t.substring(0, 6);
      if (!(r = s(n))) return !1;
      var e = t.substring(6, 14);
      return !!(r = u(e)) && a(t)
    }(t)) : 1 == n ? !!/^(\d{17}(\d|X))$/.test(t) && (18 == t.length && function (t) {
      var n = /^[8]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|X)$/.test(t);
      if (!n) return !1;
      var e = t.substring(0, 6);
      if (!(n = function (t) {
          if (!/^[8]\d{5}$/.test(t)) return !1;
          return !!r[parseInt(t.substring(0, 2))]
        }(e))) return !1;
      var s = t.substring(6, 14);
      return !!(n = u(s)) && a(t)
    }(t)) : 2 == n ? /^[A-Z0-9]{6,9}$/.test(t) : 3 == n ? /^[HM]{1}([0-9]{8})$/.test(t) : 4 == n ? /^\d{8}$|^[A-Z0-9]{10}$|^\d{18}$/.test(t) : 5 == n && (18 == t.length ? function (t) {
      var r = /^[9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|X)$/.test(t);
      if (!r) return !1;
      var n = t.substring(6, 14);
      return !!(r = u(n)) && a(t)
    }(t) : /^[A-Z]{3}\d{12}$/.test(t))
  }
};