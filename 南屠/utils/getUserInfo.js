Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e, t = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  n = (e = require("/postRequest")) && e.__esModule ? e : {
    default: e
  };
var o = require("/es6-promise.js"),
  s = function () {
    function e(r) {
      t(this, e), this.postRequest = new n.default(r)
    }
    return r(e, [{
      key: "getUserInfo",
      value: function (e, t, r) {
        var n = this;
        return new o((function (o, s) {
          var a = {
              encryptedData: e,
              iv: t,
              code: r
            },
            u = getApp().globalData.url + "user/out/getUnionId.do";
          n.postRequest.postRequest(u, a, 1).then((function (e) {
            var t = e;
            console.log("res=" + JSON.stringify(e)), 0 == t.flag ? (wx.setStorageSync("userId", t.id), wx.setStorageSync("openId", t.openId), wx.setStorageSync("no", t.no), wx.setStorageSync("createTime", t.createTime), wx.setStorageSync("tel", t.tel), o()) : 2 == t.flag ? s(new Error("fail")) : (wx.setStorageSync("unionId", t.unionId), wx.setStorageSync("openId", t.openId), s(new Error("noRegister")))
          }))
        }))
      }
    }]), e
  }();
exports.default = s;