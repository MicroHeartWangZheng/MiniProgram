var e = require("../../utils/promiseutil.js"),
  r = require("../rcode.js"),
  i = (require("../../../comm/utils/logutil"), require("../consts/ft_code.js")),
  u = require("../../../comm/model/resmodel"),
  o = require("../../../comm/utils/util");
module.exports = {
  f590f88c6: function () {
    return e.buildPromise((function (e, s) {
      wx.getNetworkType ? wx.getNetworkType({
        success: function (r) {
          e(r)
        },
        fail: function (e) {
          s(i.buildErrMsg(u.buildResModel(r.ERROR_BIZ_FEATURE_FAILD, "", o.getError(e)), i.e2eafb921))
        }
      }) : s(i.buildErrMsg(u.buildResModel(r.ERROR_BIZ_API_FAILD), i.e2eafb921))
    }), i.e2eafb921, 500)
  }
};