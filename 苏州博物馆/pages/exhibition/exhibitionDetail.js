var t, i = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  e = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  n = require("../../E83DACF5AD7FA6DF8E5BC4F28CD30E96.js"),
  o = (t = require("../../C4256B46AD7FA6DFA2430341AA540E96.js")) && t.__esModule ? t : {
    default: t
  };
var a = getApp(),
  r = -1,
  u = 10;

function d(t) {
  return t.description = (0, o.default)(t.description), t.introduction = (0, o.default)(t.introduction), t.information = (0, o.default)(t.information), t.timeLabelStr = t.startTime + " 至 " + t.endTime, null !== t.endTime && "" !== t.endTime || (t.timeLabelStr = t.startTime + " 开幕"), t.thumb = null == t.displayPoster ? "../../images/actappoint/defaultImg.jpg" : (0, e.fullImageUrlSaaS)(t.displayPoster), t
}
Page({
  data: {
    info: {},
    hiddleTongzhiPop: !0,
    ExhibitionId: "",
    noticeBtnStr: "我已阅读并同意购票须知（10s）"
  },
  onLoad: function(t) {
    var i, o;
    u = 10, this.setData({
      ExhibitionId: t.id
    }), i = this, o = t.id, (0, n.queryExhibitionById)(o).then((function(t) {
      200 === t.code ? i.setData({
        info: d(t.data)
      }) : (0, e.showWarningToast)(t)
    }))
  },
  onShow: function() {
    this.setData({
      hiddleTongzhiPop: !0
    })
  },
  appointmentOnTap: function() {},
  openMap: function() {
    var t = this.data.info;
    console.log("latitude" + t.latitude + "longitude" + t.longitude), null != t.latitude && "" != t.latitude && "" != t.longitude && null != t.longitude && wx.openLocation({
      latitude: Number(t.latitude),
      longitude: Number(t.longitude),
      name: t.companyAddress
    })
  },
  readNoticeBtnClick: function() {
    var t = JSON.parse(JSON.stringify(this.data.info));
    t.information = void 0, t.introduction = void 0, t.tips = void 0, (0, i.navigateTo)("selectTicketType?info=" + encodeURIComponent(JSON.stringify(t)))
  },
  buyTicketBtnTap: function(t) {
    var e = this;
    "EXH0202" == this.data.info.status ? "" == a.globalData.authorizationc ? wx.navigateTo({
      url: "../login/login"
    }) : (this.setData({
      hiddleTongzhiPop: !1
    }), r = setInterval((function() {
      --u > 0 ? e.setData({
        noticeBtnStr: "我已阅读并同意购票须知（".concat(u, "s）")
      }) : (clearInterval(r), r = -1, e.setData({
        noticeBtnStr: "我已阅读并同意购票须知"
      }))
    }), 1e3)) : (0, i.toast)("该展览当前暂时不能预订")
  },
  openImg: function() {
    wx.previewImage({
      urls: [this.data.info.thumb]
    })
  },
  tempTouchmove: function() {}
});