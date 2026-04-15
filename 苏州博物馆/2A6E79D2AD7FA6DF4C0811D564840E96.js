var r = {
  provinceAndCitys: {
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
    91: "国外"
  },
  powers: ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"],
  parityBit: ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"],
  genders: {
    male: "男",
    female: "女"
  },
  checkAddressCode: function(e) {
    return !!/^[1-9]\d{5}$/.test(e) && !!r.provinceAndCitys[parseInt(e.substring(0, 2))]
  },
  checkBirthDayCode: function(r) {
    if (!/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(r)) return !1;
    var e = parseInt(r.substring(0, 4), 10),
      t = parseInt(r.substring(4, 6), 10),
      n = parseInt(r.substring(6), 10),
      s = new Date(e, t - 1, n);
    return !(s > new Date) && (s.getFullYear() == e && s.getMonth() == t - 1 && s.getDate() == n)
  },
  getParityBit: function(e) {
    for (var t = e.substring(0, 17), n = 0, s = 0; s < 17; s++) n += parseInt(t.charAt(s), 10) * parseInt(r.powers[s]);
    var a = n % 11;
    return r.parityBit[a]
  },
  checkParityBit: function(e) {
    var t = e.charAt(17).toUpperCase();
    return r.getParityBit(e) == t
  },
  checkIdCardNo: function(e) {
    return !!/^\d{15}|(\d{17}(\d|x|X))$/.test(e) && (15 == e.length ? r.check15IdCardNo(e) : 18 == e.length && r.check18IdCardNo(e))
  },
  check15IdCardNo: function(e) {
    var t = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(e);
    if (!t) return !1;
    var n = e.substring(0, 6);
    if (!(t = r.checkAddressCode(n))) return !1;
    var s = "19" + e.substring(6, 12);
    return r.checkBirthDayCode(s)
  },
  check18IdCardNo: function(e) {
    var t = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(e);
    if (!t) return !1;
    var n = e.substring(0, 6);
    if (!(t = r.checkAddressCode(n))) return !1;
    var s = e.substring(6, 14);
    return !!(t = r.checkBirthDayCode(s)) && r.checkParityBit(e)
  },
  formateDateCN: function(r) {
    return r.substring(0, 4) + "-" + r.substring(4, 6) + "-" + r.substring(6)
  },
  getIdCardInfo: function(e) {
    var t = {
      gender: "",
      birthday: ""
    };
    if (15 == e.length) {
      var n = "19" + e.substring(6, 12);
      t.birthday = r.formateDateCN(n), parseInt(e.charAt(14)) % 2 == 0 ? t.gender = r.genders.female : t.gender = r.genders.male
    } else if (18 == e.length) {
      n = e.substring(6, 14);
      t.birthday = r.formateDateCN(n), parseInt(e.charAt(16)) % 2 == 0 ? t.gender = r.genders.female : t.gender = r.genders.male
    }
    return t
  },
  getId15: function(r) {
    return 15 == r.length ? r : 18 == r.length ? r.substring(0, 6) + r.substring(8, 17) : null
  },
  getId18: function(e) {
    if (15 == e.length) {
      var t = e.substring(0, 6) + "19" + e.substring(6);
      return t + r.getParityBit(t)
    }
    return 18 == e.length ? e : null
  }
};
module.exports = {
  checkIdCardNo: r.checkIdCardNo
};