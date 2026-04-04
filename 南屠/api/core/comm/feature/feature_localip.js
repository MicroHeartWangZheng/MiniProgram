var e = require("../../utils/promiseutil.js"),
  r = require("../rcode.js"),
  i = (require("../../../comm/utils/logutil"), require("../consts/ft_code.js")),
  d = require("../../../comm/model/resmodel"),
  s = require("../../../comm/utils/util");
module.exports = {
  ffeddad0f: function () {
    return e.buildPromise((function (e, u) {
      wx.getLocalIPAddress ? wx.getLocalIPAddress({
        success: function (r) {
          e(r.localip)
        },
        fail: function (e) {
          u(i.buildErrMsg(d.buildResModel(r.ERROR_BIZ_FEATURE_FAILD, "", s.getError(e)), i.e60dfd20a))
        }
      }) : u(i.buildErrMsg(d.buildResModel(r.ERROR_BIZ_API_FAILD), i.e60dfd20a))
    }), i.e60dfd20a, 500)
  }
};