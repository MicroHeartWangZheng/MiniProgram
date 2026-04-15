var e = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js");
Page({
  data: {
    info: {}
  },
  onLoad: function(e) {
    console.log(e.data);
    var i = JSON.parse(decodeURIComponent(e.data));
    this.setData({
      info: i
    })
  },
  detailbtnClick: function(e) {
    wx.redirectTo({
      url: "../exhibition/exhibitionApplintDetail?orderListId=" + this.data.info.orderId + "&heXiaoHiddenState=true"
    })
  },
  backbtnClick: function(e) {
    wx.reLaunch({
      url: "../index/index"
    })
  },
  reserveTrialClick: function() {
    var i = this.data.info;
    (0, e.navigateTo)("../appointment/guide/selectTime?type=3&exhId=".concat(i.displayInfoId, "&exhName=").concat(encodeURIComponent(i.name)))
  }
});