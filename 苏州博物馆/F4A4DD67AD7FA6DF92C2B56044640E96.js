Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.requestActivitySubscribeMessage = function() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
  return n(["xHbwtARGmYJEQ00VInYyLl9ngF6tm2sR3slsUWn97MA", "eNwqCeheqXdfDuxi9vUi9VCleXiryqSEeuw0jFQ0phM", "lU4SUNBoyRKE1ez72VlCWhJM-wPq28iTA9KibF7qlc4"], e)
}, exports.requestActivitySubscribeMessageTui = function() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
  return n(["eNwqCeheqXdfDuxi9vUi9VCleXiryqSEeuw0jFQ0phM", "lU4SUNBoyRKE1ez72VlCWhJM-wPq28iTA9KibF7qlc4"], e)
}, exports.requestExhSubscribeMessage = function(e) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  return s(e, ["nI3SZNwMssiwGkW46cxldlekSjD3IjdC-Xzmt4rMI58", "1rpPkvoS_ry7w5FqH_yrVUMoAT_DeD44RPBhG5lC8LU", "1DvU13S__yHKpFXao83w5VQDoIb1atYDBdZBDaatY1Y", "IhLxi-yY9FMMGcx1wn88v-uq4_4nK1Pm7ijOtZSeglg", "b1fkRg4OZQoLyL4o6H66dkodXr6qHGxhUF6NTWzMUZs"], n)
}, exports.requestPersonSubscribeMessage = function() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
  return n(["o5jZXZ2JXjJwskWJufSN-F59aKv4lSfhcnJGUwtC7bA", "IhLxi-yY9FMMGcx1wn88v-uq4_4nK1Pm7ijOtZSeglg", "QsdJTSEjGc3gflLrKRZwGumtgIst6EksiJSs9ZN7yMs"], e)
}, exports.requestTeamSubscribeMessage = function() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
  return n(["2TmmuaUlsRoGX6MGCJWkINecP302DGXcp4kai8n9-RI", "X6NB90Fo6cP4eaLrFrgIJxQQsZ-NScpOAik2n-ZUcko", "O9F2_w1pzLoQE4coVSjudQ2VqMh3VP62d2BDO5spfRc"], e)
};
var e = require("3D59DF82AD7FA6DF5B3FB785C1340E96.js");

function n(n, s) {
  return new Promise((function(t, o) {
    var r = Date.now();
    wx.requestSubscribeMessage({
      tmplIds: n,
      success: function(n) {
        console.log("订阅消息耗时" + (Date.now() - r)), (0, e.hideLoading)(), t(n), i(s), console.log("订阅消息授权正确，" + JSON.stringify(n))
      },
      fail: function(n) {
        (0, e.hideLoading)(), o(n), i(s), console.log("订阅消息授权错误信息，" + JSON.stringify(n))
      }
    })
  }))
}

function s(e, n, s) {
  wx.requestSubscribeMessage({
    tmplIds: n,
    success: function(n) {
      e(), i(s), console.log("订阅消息授权正确，" + JSON.stringify(n))
    },
    fail: function(n) {
      e(), i(s), console.log("订阅消息授权错误信息，" + JSON.stringify(n))
    }
  })
}

function i(e) {
  null != e && wx.navigateTo({
    url: e
  })
}