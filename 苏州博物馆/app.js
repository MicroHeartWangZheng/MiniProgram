var e, n = require("./@babel/runtime/helpers/regeneratorRuntime"),
  a = require("./@babel/runtime/helpers/asyncToGenerator"),
  o = require("88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  r = require("FA9D4A90AD7FA6DF9CFB2297F7F30E96.js"),
  t = require("mini-i18n"),
  l = (e = require("E7A8DB16AD7FA6DF81CEB311EC630E96.js")) && e.__esModule ? e : {
    default: e
  };
App({
  globalData: {
    openId: "",
    openIdType: 4,
    museumName: r.museumName1,
    companyInfoId: r.companyInfoId1,
    userInfo: null,
    authorizationc: "",
    ruleData: {},
    personalReserveRule: null,
    encryptKeyVersion: -1
  },
  tokenReadyCallback: null,
  tokenFailedCallback: null,
  onLaunch: function() {
    var e = this,
      n = wx.getDeviceInfo();
    if ("windows" != n.platform && "mac" != n.platform) {
      t.i18n.init({
        locales: l.default,
        defualtLang: "zh_CN",
        isHint: !1,
        themeColor: "#ff6600",
        homePath: "/pages/index/index"
      }), this.userLogin().then((function(n) {
        null != e.tokenReadyCallback && e.tokenReadyCallback(n)
      })).catch((function(n) {
        null != e.tokenFailedCallback && e.tokenFailedCallback()
      }));
      var a = wx.getUpdateManager();
      a.onCheckForUpdate((function(e) {
        console.log(e.hasUpdate)
      })), a.onUpdateReady((function() {
        a.applyUpdate()
      })), a.onUpdateFailed((function() {}))
    }
  },
  userLogin: function() {
    var e = this;
    return a(n().mark((function a() {
      return n().wrap((function(n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", new Promise((function(n, a) {
              wx.login().then((function(r) {
                r.code ? (0, o.login)(r.code).then((function(o) {
                  if (200 == o.code) e.globalData.authorizationc = o.data.authorizationc, e.globalData.openId = o.data.openid, e.globalData.encryptKeyVersion = o.data.version, n(o);
                  else if (100 == o.code) {
                    n(o);
                    var r = JSON.parse(o.msg);
                    e.globalData.openId = r.openid, e.globalData.openIdType = r.openIdType
                  } else console.error("系统异常", o.msg), a("系统异常" + o.msg)
                })).catch((function(e) {
                  console.error("登录失败，接口请求失败", e), a("网络异常，请检查网络并下拉刷新")
                })) : (a("微信登录异常，" + r.errMsg), console.error("微信登录异常", r.errMsg))
              }))
            })));
          case 1:
          case "end":
            return n.stop()
        }
      }), a)
    })))()
  }
});