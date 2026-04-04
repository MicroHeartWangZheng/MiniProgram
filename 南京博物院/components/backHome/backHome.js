Component({
  properties: {},
  data: {
    winWidth: 0,
    winHeight: 0,
    btnTop: 0,
    btnLeft: 0
  },
  pageLifetimes: {
    show: function () {
      var windowInfo = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
      this.setData({
        winWidth: windowInfo.windowWidth,
        winHeight: windowInfo.windowHeight,
        btnLeft: windowInfo.windowWidth - 65,
        btnTop: 0.8 * windowInfo.windowHeight
      });
    }
  },
  methods: {}
});