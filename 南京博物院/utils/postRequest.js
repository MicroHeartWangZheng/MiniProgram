Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  n = require("/es6-promise.js"),
  r = function () {
    function r(t) {
      e(this, r)
    }
    return t(r, [{
      key: "wxPromisify",
      value: function (e) {
        return function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new n((function (n, r) {
            t.success = function (e) {
              n(e)
            }, t.fail = function (e) {
              r(e)
            }, e(t)
          }))
        }
      }
    }, {
      key: "postRequest",
      value: function (e, t, r, o) {
        r = r ? "application/x-www-form-urlencoded" : "application/json", o || (o = 0);
        return new n((function (n, i) {
          wx.request({
            url: e,
            data: t,
            method: "POST",
            header: {
              "content-type": r
            },
            success: function (e) {
              200 == e.statusCode ? n(e.data) : (wx.hideLoading(), wx.navigateTo({
                url: "/pages/error/error?init=" + o
              }))
            },
            fail: function () {
              wx.hideLoading(), wx.getNetworkType({
                success: function (e) {
                  if ("none" != e.networkType) {
                    n({
                      status: "1001",
                      msg: "网络繁忙，请稍后再试"
                    })
                  } else wx.navigateTo({
                    url: "/pages/neterror/neterror?init=" + o
                  })
                }
              })
            }
          })
        }))
      }
    }, {
      key: "postContainUser",
      value: function (e, t, r, o) {
        var i;
        return o || (o = 0), wx.getStorageSync("userId") ? i = this.postRequest(e, t, r, o) : (wx.hideLoading(), i = new n((function (e, t) {
          t(new Error("noUser"))
        }))), i
      }
    }]), r
  }();
exports.default = r;