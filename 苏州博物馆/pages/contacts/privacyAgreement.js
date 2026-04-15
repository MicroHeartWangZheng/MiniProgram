var e = require("../../22CF3566AD7FA6DF44A95D614D730E96.js");
Page({
  behaviors: [e.languageBehaviors],
  data: {
    richTextNode: ""
  },
  onLoad: function(e) {},
  onReady: function() {},
  onShow: function() {},
  sureBtnClick: function(e) {
    var a = getCurrentPages(),
      n = a[a.length - 2];
    wx.navigateBack({
      success: function() {
        n.autoRefreshData()
      }
    })
  },
  onHide: function() {}
});