function compareVersion(v1, v2) {
  var s1 = (v1 || "").split(".");
  var s2 = (v2 || "").split(".");
  var len = Math.max(s1.length, s2.length);
  while (s1.length < len) s1.push("0");
  while (s2.length < len) s2.push("0");
  for (var i = 0; i < len; i++) {
    var n1 = parseInt(s1[i], 10);
    var n2 = parseInt(s2[i], 10);
    if (n1 > n2) return 1;
    if (n1 < n2) return -1;
  }
  return 0;
}

App({
  onLaunch: function () {
    if (wx.canIUse("getUpdateManager")) {
      var updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(function () {});
      updateManager.onUpdateReady(function () {
        wx.showModal({
          title: "更新提示",
          content: "新版本已经准备好，需要您重启小程序以应用新版本。",
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              updateManager.applyUpdate();
            }
          }
        });
      });
      updateManager.onUpdateFailed(function () {
        wx.showModal({
          title: "提示",
          showCancel: false,
          content: "新版本下载失败，请您删除当前小程序，重新搜索打开。"
        });
      });
    }

    var app = this;
    var menuRect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
    var windowInfo = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
    var deviceInfo = wx.getDeviceInfo ? wx.getDeviceInfo() : wx.getSystemInfoSync();
    var appBaseInfo = wx.getAppBaseInfo ? wx.getAppBaseInfo() : wx.getSystemInfoSync();

    var statusBarHeight = windowInfo.statusBarHeight || 0;
    var navTop = menuRect && menuRect.top ? menuRect.top : statusBarHeight;
    var menuHeight = menuRect && menuRect.height ? menuRect.height : 32;
    var titleBarHeight = statusBarHeight + menuHeight + 2 * (navTop - statusBarHeight);

    app.globalData.statusBarHeight = statusBarHeight;
    app.globalData.navTop = navTop;
    app.globalData.titleBarHeight = titleBarHeight;
    app.globalData.menuHeight = menuHeight;

    var model = deviceInfo.model || "";
    if (model.search("iPhone") !== -1) {
      app.globalData.isIOS = true;
      if (/iphone\sx/i.test(model) || (/iphone/i.test(model) && /unknown/.test(model)) || /iphone\s11/i.test(model)) {
        app.globalData.isIphoneX = true;
      }
    } else {
      app.globalData.isIphoneX = false;
    }

    var version = appBaseInfo.version || "";
    var platform = deviceInfo.platform || appBaseInfo.platform || "";
    if (compareVersion(version, "7.0.0") < 0) {
      if (platform === "ios") {
        app.globalData.menuHeight = 32;
        app.globalData.navTop = 51;
        app.globalData.titleBarHeight = 87;
      } else if (platform === "android") {
        app.globalData.menuHeight = 32;
        app.globalData.navTop = 28;
        app.globalData.titleBarHeight = 68;
      }
    } else {
      console.log(version);
    }
  },

  globalData: {
    url: "https://wxapp.njmuseum.com.cn/reservation/",
    wburl: "https://activity.njmuseum.com.cn/reservation/",
    wsUrl: "wss://activity.njmuseum.com.cn/reservation/websocket/",
    codeUrl: "https://register.njmuseum.com.cn/reservation/",
    isIphoneX: false,
    menuHeight: 0,
    navTop: 0,
    titleBarHeight: 0,
    list: [],
    backFlag: 1
  },

  onShow: function (options) {
    if (options && options.referrerInfo && options.referrerInfo.extraData && options.referrerInfo.extraData.backFlag) {
      this.globalData.backFlag = options.referrerInfo.extraData.backFlag;
    }
  },

  onHide: function () {
    var list = this.globalData.list;
    console.log("关闭要放缓存的list=" + list);
    if (list && list.length !== 0) {
      wx.setStorageSync("questionList", list);
    }
    wx.closeSocket();
  },

  onError: function () {}
});