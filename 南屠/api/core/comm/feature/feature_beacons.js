var e = require("../../utils/promiseutil.js"),
  r = require("../rcode.js"),
  i = (require("../../../comm/utils/logutil"), require("../../../comm/utils/util")),
  d = require("../../../comm/model/resmodel.js"),
  u = require("../consts/ft_code.js");

function o(e, o, s) {
  try {
    s.obtainBeacons(e, (function (e) {
      o(u.buildErrMsg(d.buildResModel(r.ERROR_BIZ_FEATURE_FAILD, "", i.getError(e)), u.e8ea8e9dd))
    }))
  } catch (e) {
    o(u.buildErrMsg(d.buildResModel(r.ERROR_BIZ_FEATURE_CRASH, "", i.getError(e)), u.e8ea8e9dd))
  }
}
module.exports = {
  f9b094045: function () {
    var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    return e.buildPromise((function (e, t) {
      try {
        if (wx.getBeacons) return void wx.getBeacons({
          success: function (r) {
            e(r)
          },
          fail: function (l) {
            s ? o(e, t, s) : t(u.buildErrMsg(d.buildResModel(r.ERROR_BIZ_FEATURE_FAILD, "", i.getError(l)), u.e8ea8e9dd))
          }
        });
        s ? o(e, t, s) : t(u.buildErrMsg(d.buildResModel(r.ERROR_BIZ_API_FAILD), u.e8ea8e9dd))
      } catch (l) {
        s ? o(e, t, s) : t(u.buildErrMsg(d.buildResModel(r.ERROR_BIZ_FEATURE_CRASH, "", i.getError(l)), u.e8ea8e9dd))
      }
    }), u.e8ea8e9dd)
  }
};