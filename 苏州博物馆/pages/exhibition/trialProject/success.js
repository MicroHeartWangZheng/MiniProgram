require("../../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js");
Page({
  data: {
    richTextNode: ""
  },
  onLoad: function(e) {
    console.log(e.info), this.setData(JSON.parse(decodeURIComponent(e.info)))
  },
  backBtnClick: function() {
    wx.reLaunch({
      url: "../../index/index"
    })
  },
  detailBtnClick: function() {
    wx.redirectTo({
      url: "orderDetail?id=" + this.data.orderListId
    })
  }
});