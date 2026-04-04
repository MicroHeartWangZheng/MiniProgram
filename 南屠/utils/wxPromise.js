var n = require("es6-promise.js");
module.exports = {
  wxPromise: function (e) {
    return function () {
      var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return new n((function (n, i) {
        r.success = function (e) {
          n(e)
        }, r.fail = function (n) {
          i(n)
        }, e(r)
      }))
    }
  }
};