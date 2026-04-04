var e = require("../../utils/promiseutil.js"),
  r = require("../rcode.js"),
  i = (require("../../../comm/utils/util"), require("../../../comm/utils/logutil"), require("../consts/ft_code.js")),
  u = require("../../../comm/model/resmodel.js");
module.exports = {
  f3a14f72: function () {
    var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return e.buildPromise((function (e, t) {
      o ? o.obtainCavanFeature(e, t, l) : t(i.buildErrMsg(u.buildResModel(r.ERROR_BIZ_FEATURE_CRASH, "", ""), i.e269dceda))
    }), i.e269dceda)
  }
};