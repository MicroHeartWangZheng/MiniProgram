var e = require("./barCode"),
  t = require("./qrCode");

function r(e) {
  var windowInfo = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
  return Math.round(windowInfo.windowWidth * e / 750)
}
module.exports = {
  barcode: function (t, n, o, a) {
    e.code128(wx.createCanvasContext(t), n, r(o), r(a))
  },
  qrcode: function (e, n, o, a) {
    t.api.draw(n, {
      ctx: wx.createCanvasContext(e),
      width: r(o),
      height: r(a)
    })
  }
};