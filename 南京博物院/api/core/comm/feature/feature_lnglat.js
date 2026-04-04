var t = require("../../utils/promiseutil.js"),
  i = require("../../../comm/utils/util"),
  e = require("../consts/ft_code.js");
module.exports = {
  fa8fd8a44: function (r) {
    return t.buildPromise((function (t, e) {
      var n = "";
      r && r.getLngAndLat ? r.getLngAndLat((function (e) {
        n = e, i.isEmpty(n) || "string" == typeof n || (n = JSON.stringify(n)), t(n)
      })) : t(n)
    }), e.e701a9308)
  }
};