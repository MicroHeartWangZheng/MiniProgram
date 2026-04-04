Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../@babel/runtime/helpers/classCallCheck"),
  a = require("../@babel/runtime/helpers/createClass"),
  t = function () {
    function t(a) {
      e(this, t), this._page = a
    }
    return a(t, [{
      key: "getPageList",
      value: function (e, a, t, r) {
        console.log("type=" + r);
        var s = this._page;
        t = t ? "application/x-www-form-urlencoded" : "application/json", wx.showLoading({
          title: "加载中"
        }), wx.request({
          url: e,
          data: a,
          method: "POST",
          header: {
            "content-type": t
          },
          success: function (e) {
            if (200 == e.statusCode) {
              var t = e.data.list,
                r = e.data.allPage,
                o = (e.data.page, []);
              if (0 == a.page) o = t;
              else {
                o = s.data.list;
                for (var l = 0; l < t.length; l++) o.push(t[l])
              }
              console.log(o), s.setData({
                list: o,
                allPage: r
              }), a.page > r && s.setData({
                page: a.page - 1
              }), a.page == e.data.allPage && s.setData({
                searchLoadingComplete: !0
              })
            } else wx.navigateTo({
              url: "/pages/error/error"
            })
          },
          fail: function () {
            wx.navigateTo({
              url: "/pages/neterror/neterror"
            })
          },
          complete: function () {
            setTimeout((function () {
              s.setData({
                searchFlag: !0
              })
            }), 1e3), wx.hideLoading(), 0 == r ? wx.stopPullDownRefresh() : 1 == r && s.setData({
              searchLoading: !1
            })
          }
        })
      }
    }]), t
  }();
exports.default = t;