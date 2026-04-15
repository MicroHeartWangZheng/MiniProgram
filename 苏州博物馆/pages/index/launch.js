var t = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  e = require("../../E83DACF5AD7FA6DF8E5BC4F28CD30E96.js"),
  n = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js");
Page({
  data: {
    posterUrl: "",
    countdown: 5,
    timer: null
  },
  onLoad: function(t) {
    var e = wx.getMenuButtonBoundingClientRect();
    this.setData({
      btnTop: (0, n.px2rpx)(e.bottom) + 30,
      btnLeft: (0, n.px2rpx)(e.left)
    }), this.getPoster(), this.startCountdown()
  },
  getPoster: function() {
    var n = this;
    (0, e.getLatestPoster)().then((function(e) {
      200 == e.code && null != e.data ? n.setData({
        posterUrl: (0, t.fullImageUrlSaaS)(e.data.posterUrl)
      }) : n.setData({
        posterUrl: "https://newticket.szmuseum.com/file/exhfile/exh1.webp"
      })
    })).catch((function() {
      n.setData({
        posterUrl: "https://newticket.szmuseum.com/file/exhfile/exh1.webp"
      })
    }))
  },
  startCountdown: function() {
    var t = this;
    this.data.timer = setInterval((function() {
      t.setData({
        countdown: t.data.countdown - 1
      }), t.data.countdown <= 0 && t.goToIndex()
    }), 1e3)
  },
  goToIndex: function() {
    clearInterval(this.data.timer), (0, n.redirectTo)("./index")
  },
  onUnload: function() {
    this.data.timer && clearInterval(this.data.timer)
  },
  onShareAppMessage: function() {}
});