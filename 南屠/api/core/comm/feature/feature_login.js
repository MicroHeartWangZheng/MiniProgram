var e = require("../../utils/promiseutil.js"),
  i = require("../rcode.js"),
  r = (require("../../../comm/utils/logutil"), require("../consts/ft_code.js")),
  u = require("../../../comm/model/resmodel"),
  o = require("../../../comm/utils/util");
module.exports = {
  f5483132b: function () {
    return e.buildPromise((function (e, s) {
      wx.pluginLogin ? wx.pluginLogin({
        success: function (i) {
          e(i.code)
        },
        fail: function (e) {
          s(r.buildErrMsg(u.buildResModel(i.ERROR_BIZ_FEATURE_FAILD, "", o.getError(e)), r.e77816d81))
        }
      }) : s(r.buildErrMsg(u.buildResModel(i.ERROR_BIZ_API_FAILD), r.e77816d81))
    }), r.e77816d81)
  }
};