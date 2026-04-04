Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../@babel/runtime/helpers/classCallCheck"),
  a = require("../@babel/runtime/helpers/createClass"),
  t = require("/abc.js"),
  r = function () {
    function r(a) {
      e(this, r), this._page = a
    }
    return a(r, [{
      key: "getPageData",
      value: function (e, a, r, s) {
        var i = this._page;
        r = r ? "application/x-www-form-urlencoded" : "application/json", wx.showLoading({
          title: "加载中"
        }), wx.request({
          url: e,
          data: a,
          method: "POST",
          header: {
            "content-type": r
          },
          success: function (e) {
            if (wx.hideLoading(), 200 == e.statusCode) {
              if ("0000" == e.data.status) {
                var a = JSON.parse(t.decrypt(e.data.data));
                if ("0000" == a.status) {
                  var r = a.data.pm.datas;
                  if (i.setData({
                      refreshLoading: !1,
                      searchLoadingComplete: !1
                    }), r.length > 0) {
                    var o = [];
                    o = 1 == s ? r : i.data.items.concat(r), i.setData({
                      items: o,
                      loadZero: !1
                    })
                  } else 0 == s ? i.setData({
                    searchLoadingComplete: !0,
                    searchLoading: !1
                  }) : i.setData({
                    searchLoadingComplete: !0,
                    items: []
                  }), i.setData({
                    loadZero: !0
                  })
                }
              }
            } else wx.navigateTo({
              url: "/pages/error/error?init=1"
            })
          },
          fail: function (e) {
            wx.navigateTo({
              url: "/pages/error/error?init=1"
            })
          },
          complete: function () {
            wx.hideLoading()
          }
        })
      }
    }]), r
  }();
exports.default = r;