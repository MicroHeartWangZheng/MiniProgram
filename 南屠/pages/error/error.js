var n = require("../../@babel/runtime/helpers/typeof");
Page({
  data: {},
  backTo: function () {
    var n = getCurrentPages(),
      o = n[n.length - 2],
      t = this.data.init;
    console.log("init=" + t), wx.navigateBack({
      success: function () {
        1 == t && o.initPage()
      }
    })
  },
  onLoad: function (o) {
    var t = o.init;
    console.log("leixin=" + n(t)), void 0 === t && (t = 0), this.setData({
      init: t
    })
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {}
});