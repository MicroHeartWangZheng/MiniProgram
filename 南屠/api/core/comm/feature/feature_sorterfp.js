var e = require("../../utils/promiseutil.js"),
  r = require("../rcode.js"),
  i = (require("../../../comm/utils/logutil"), require("../consts/ft_code.js")),
  u = require("../../../comm/model/resmodel.js"),
  o = require("../../../comm/utils/util.js");
module.exports = {
  f585445: function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    return e.buildPromise((function (e, l) {
      try {
        if (!t) return void l(i.buildErrMsg(u.buildResModel(r.ERROR_BIZ_FEATURE_FAILD, "", ""), i.e1915f732));
        t.obtainFingerPrintFeature(e, (function (e) {
          l(i.buildErrMsg(u.buildResModel(r.ERROR_BIZ_FEATURE_FAILD, "", o.getError(e)), i.e1915f732))
        }))
      } catch (e) {
        l(i.buildErrMsg(u.buildResModel(r.ERROR_BIZ_FEATURE_CRASH, "", o.getError(e)), i.e1915f732))
      }
    }), i.e1915f732)
  }
};