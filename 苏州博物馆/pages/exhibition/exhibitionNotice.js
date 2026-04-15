var a = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  t = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js");
Page({
  data: {
    richTextNode: "",
    displayInfoId: "",
    dataInfo: {}
  },
  onLoad: function(i) {
    var n, o, d = JSON.parse(i.data);
    this.setData({
      dataInfo: d,
      displayInfoId: d.displayInfoId
    }), n = this, o = this.data.displayInfoId, (0, t.queryExhibitionNotice)(o).then((function(t) {
      200 == t.code ? n.setData({
        richTextNode: "" == t.data || null == t.data ? "暂无预约须知" : t.data
      }) : (0, a.toast)(t.msg)
    })).catch((function(a) {
      console.debug("获取预约须知失败" + a)
    }))
  },
  sureBtnClick: function(a) {
    var t = JSON.stringify(this.data.dataInfo);
    wx.navigateTo({
      url: "exhibitionAppoint?data=" + t
    })
  },
  onShow: function() {}
});