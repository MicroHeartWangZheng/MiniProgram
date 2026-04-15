Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.languageBehaviors = void 0;
var e = require("miniprogram_npm/mini-i18n/index.js"),
  t = Behavior({
    pageLifetimes: {
      show: function() {
        var t = getCurrentPages(),
          a = t[t.length - 1].route.split("/"),
          i = a[a.length - 1],
          r = (0, e.t)(i);
        null != r.title && wx.setNavigationBarTitle({
          title: r.title
        }), this.setData({
          language: r,
          currentLanguage: e.i18n.getLocales()
        })
      }
    }
  });
exports.languageBehaviors = t;