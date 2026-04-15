require("../../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js");
var e, t = require("../../../3D59DF82AD7FA6DF5B3FB785C1340E96.js");
Page({
  data: {
    richTextNode: "",
    agree: !1,
    noticeText: "我已阅读并同意以上须知内容。"
  },
  onLoad: function(t) {
    console.log(t), e = t, this.setData({
      info: JSON.parse(decodeURIComponent(t.info)),
      noticeType: t.noticeType
    }), 1 == this.data.noticeType ? wx.setNavigationBarTitle({
      title: "预约须知"
    }) : 2 == this.data.noticeType && wx.setNavigationBarTitle({
      title: "领用须知"
    })
  },
  noticeCheckedChange: function() {
    this.setData({
      agree: !this.data.agree
    })
  },
  backBtnClick: function() {
    (0, t.back)()
  },
  sureBtnClick: function() {
    (0, t.redirectTo)("sureInfo", e)
  }
});