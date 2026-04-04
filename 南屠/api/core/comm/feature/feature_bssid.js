var i = require("../../utils/promiseutil.js"),
  t = require("../../../comm/utils/util"),
  e = require("../consts/ft_code.js");
module.exports = {
  f67c942c5: function (s) {
    return i.buildPromise((function (i, e) {
      var r = "";
      s && s.getWifiBssid ? s.getWifiBssid((function (e) {
        r = e, t.isEmpty(r) || "string" == typeof r || (r = JSON.stringify(r)), i(r)
      })) : i(r)
    }), e.ef371cec8)
  }
};