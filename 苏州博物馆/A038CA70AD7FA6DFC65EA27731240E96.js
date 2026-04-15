Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = function() {
  return new Promise((function(e, t) {
    var o = new Date;
    wx.getLocation({
      highAccuracyExpireTime: 3500,
      success: function(t) {
        console.log("定位耗时" + (new Date - o)), getApp().globalData.location = {
          longitude: t.longitude,
          latitude: t.latitude
        }, e(t)
      },
      fail: function(e) {
        t(e)
      }
    })
  }))
};