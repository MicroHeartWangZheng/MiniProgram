var e = require("../../utils/promiseutil.js"),
  r = require("../rcode.js"),
  i = (require("../../../comm/utils/util"), require("../../../comm/utils/logutil"), require("../consts/ft_code.js")),
  u = require("../../../comm/model/resmodel.js");
module.exports = {
  fc290d0fe: function () {
    var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return e.buildPromise((function (e, d) {
      o ? o.obtainWebGLFeature(e, d, l) : d(i.buildErrMsg(u.buildResModel(r.ERROR_BIZ_FEATURE_CRASH, "", ""), i.edfded145))
    }), i.edfded145)
  }
};