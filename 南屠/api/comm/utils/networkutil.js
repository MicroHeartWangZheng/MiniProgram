var e = require("../utils/util.js"),
  r = (require("./logutil"), require("../model/resmodel").buildResModel),
  t = {
    request: function (t, i, u, s) {
      var l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "POST",
        d = {
          url: s,
          method: o,
          data: t,
          success: function (e) {
            i(e.data)
          },
          fail: function (e) {
            var t = r();
            t.ret = e.errno || 0, t.err = e.errMsg || "", u(t)
          }
        };
      e.isEmpty(l) || (d.header = l), (new Date).getTime(), wx.request(d)
    }
  };
module.exports = t;