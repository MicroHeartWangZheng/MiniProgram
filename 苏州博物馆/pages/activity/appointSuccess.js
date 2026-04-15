var a = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  e = require("../../22CF3566AD7FA6DF44A95D614D730E96.js");
Page({
  behaviors: [e.languageBehaviors],
  data: {
    num: "",
    s: "",
    e: "",
    tips: "",
    img: "",
    orderId: ""
  },
  onLoad: function(e) {
    var r = e.data,
      t = JSON.parse(decodeURIComponent(r)),
      i = (0, a.fullImageUrlSaaS)(t.img);
    this.setData({
      num: t.num,
      s: t.start,
      e: t.end,
      tips: t.tip,
      img: i,
      orderId: t.orderListId
    })
  },
  back: function() {
    wx.navigateBack({
      delta: 4
    })
  },
  detail: function() {
    var a = this.data.orderId;
    wx.navigateTo({
      url: "./orderDetail?orderListId=".concat(a)
    })
  }
});