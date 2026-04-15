var e, a = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  t = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  i = (e = require("../../C4256B46AD7FA6DFA2430341AA540E96.js")) && e.__esModule ? e : {
    default: e
  },
  n = require("../../22CF3566AD7FA6DF44A95D614D730E96.js");
Page({
  behaviors: [n.languageBehaviors],
  data: {
    imgArr: []
  },
  onLoad: function(e) {
    var a = this;
    console.log(e), wx.showNavigationBarLoading(), (0, t.showLoading)(), "" === getApp().globalData.authorizationc ? getApp().tokenReadyCallback = function(i) {
      200 == i.code ? a.getGuide(e.companyInfoId) : ((0, t.hideLoading)(), console.error("模板消息界面进入时未获取到token"))
    } : this.getGuide(e.companyInfoId)
  },
  getGuide: function(e) {
    var n = this;
    (0, a.queryManualByVenueId)(e).then((function(e) {
      if ((0, t.hideLoading)(), wx.hideNavigationBarLoading(), 200 == e.code)
        if (null != e.data && null != e.data.manualContent) {
          for (var o, r = (0, i.default)(e.data.manualContent), u = [], l = /<img\s[^>]*?src\s*=\s*['"]([^'"]*?)['"][^>]*?>/gi; null !== (o = l.exec(r));) u.push(o[1]);
          n.setData({
            richTextNode: r,
            imgArr: u
          })
        } else n.setData({
          richTextNode: "暂无导览手册"
        });
      else(0, a.showWarningToast)(e, "获取导览手册失败")
    })).catch((function(e) {
      (0, a.defaultCatch)(e, "获取导览手册异常")
    }))
  },
  openImage: function() {
    wx.previewImage({
      current: this.data.imgArr[0],
      urls: this.data.imgArr
    })
  }
});