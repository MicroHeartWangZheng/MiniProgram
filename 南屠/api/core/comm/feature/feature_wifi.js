var e = require("../../utils/promiseutil.js"),
  r = require("../rcode.js"),
  i = (require("../../../comm/utils/logutil"), require("../consts/ft_code.js")),
  t = require("../../../comm/model/resmodel.js"),
  u = require("../../../comm/utils/util.js");

function o(e, o, d) {
  try {
    d.obtainConnectedWifi(e, (function (e) {
      o(i.buildErrMsg(t.buildResModel(r.ERROR_BIZ_FEATURE_FAILD, "", u.getError(e)), i.e314c686d))
    }))
  } catch (e) {
    o(i.buildErrMsg(t.buildResModel(r.ERROR_BIZ_FEATURE_CRASH, "", u.getError(e)), i.e314c686d))
  }
}
module.exports = {
  f5728c379: function () {
    var d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    return e.buildPromise((function (e, s) {
      try {
        if (wx.startWifi && wx.getConnectedWifi) return void wx.startWifi({
          success: function (c) {
            wx.getConnectedWifi({
              success: function (r) {
                e(r)
              },
              fail: function (c) {
                d ? o(e, s, d) : s(i.buildErrMsg(t.buildResModel(r.ERROR_BIZ_FEATURE_FAILD, "", u.getError(c)), i.e314c686d))
              }
            })
          },
          fail: function (c) {
            d ? o(e, s, d) : s(i.buildErrMsg(t.buildResModel(r.ERROR_BIZ_FEATURE_FAILD, "", u.getError(c)), i.e314c686d))
          }
        });
        d ? o(e, s, d) : s(i.buildErrMsg(t.buildResModel(r.ERROR_BIZ_API_FAILD), i.e314c686d))
      } catch (c) {
        d ? o(e, s, d) : s(i.buildErrMsg(t.buildResModel(r.ERROR_BIZ_FEATURE_CRASH, "", u.getError(c)), i.e314c686d))
      }
    }), i.e314c686d)
  }
};