var e = require("../comm/rcode.js"),
  t = require("../../comm/model/resmodel").buildResModel,
  r = require("../../comm/utils/util"),
  i = require("../../comm/utils/logutil.js"),
  o = require("../comm/consts/consts.js"),
  m = "promiseutil_";
module.exports = {
  buildPromise: function (u, n) {
    var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Feature_Timeout;
    return new Promise((function (o) {
      var s = 0;
      try {
        s = (new Date).getTime();
        var c = setTimeout((function () {
          clearTimeout(c), c = null, o(t(e.ERROR_BIZ_FEATURE_TIMEOUT, "", n + " obtain timeout", n, l))
        }), l);
        u.apply(this, [function (r) {
          c && (clearTimeout(c), o(t(e.commCode.SUCCESS, r, "", n, (new Date).getTime() - s)))
        }, function (r) {
          c && (clearTimeout(c), r = r && "string" != typeof r ? JSON.stringify(r) : r, o(t(e.ERROR_BIZ_FEATURE_FAILD, "", r, n, (new Date).getTime() - s)))
        }].concat([u]))
      } catch (u) {
        i.error(m + "buildPromise_err: ", u), o(t(e.ERROR_BIZ_FEATURE_CRASH, "", r.getError(u), n, (new Date).getTime() - s))
      }
    }))
  },
  promiseAll: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return !e || e.length <= 0 ? [] : Promise.all(e)
  }
};