var e = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  t = require("../../FA9D4A90AD7FA6DF9CFB2297F7F30E96.js"),
  i = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  a = require("../../22CF3566AD7FA6DF44A95D614D730E96.js"),
  n = require("mini-i18n"),
  o = require("../../E83DACF5AD7FA6DF8E5BC4F28CD30E96.js");

function r(e) {
  if (null != e.q) {
    var t = decodeURIComponent(e.q);
    console.log("扫码进入，内容为--" + t);
    var a = t.indexOf("?"),
      n = "",
      o = "";
    if (-1 != a) {
      var r = t.substring(a + 1);
      if (0 != r.indexOf("&")) {
        var s = r.split("&");
        if (console.log(s), 0 != s[0].indexOf("=") && (n = s[0].split("=")[1]), 0 != s[1].indexOf("=") && (o = s[1].split("=")[1]), console.log(n + "," + o), "activitySignIn" == n) {
          var l = "../activity/activitySignIn?activityId=" + o;
          wx.navigateTo({
            url: l
          })
        } else if ("activityAppoint" == n) {
          l = "../activity/activityDetail?id=" + o;
          wx.navigateTo({
            url: l
          })
        } else if ("exhibitionAppoint" == n) {
          l = "../exhibition/exhibitionDetail?id=" + o;
          wx.navigateTo({
            url: l
          })
        } else {
          if ("survey" != n) return (0, i.toast)("请扫描正确的二维码"), "";
          l = "../other/questionSurvey?companyInfoId=" + o;
          (0, i.navigateTo)(l)
        }
      }
    }
  }
}
Page({
  behaviors: [a.languageBehaviors],
  data: {
    currentLanguage: "zh_CN",
    showStoreWindow: !1,
    aniClass: "ani openAni",
    exhList: [],
    currentIndex: 0,
    showDialog1: !1,
    showDialog2: !1,
    showDialog3: !1,
    languageBtnTop: 160,
    languageBtnLeft: 30
  },
  onLoad: function(t) {
    console.log("options", t);
    var a = wx.getDeviceInfo();
    if ("windows" != a.platform && "mac" != a.platform) {
      var n = wx.getMenuButtonBoundingClientRect();
      this.setData({
          languageBtnTop: (0, i.px2rpx)(n.bottom) + 30,
          languageBtnLeft: (0, i.px2rpx)(n.left + n.width / 2)
        }),
        function(e) {
          "" !== getApp().globalData.authorizationc ? r(e) : (getApp().tokenReadyCallback = function(t) {
            200 == t.code ? r(e) : null != e.q && (0, i.modal)("请先登录再扫码", (function() {
              (0, i.navigateTo)("../login/login")
            }))
          }, getApp().tokenFailedCallback = function() {
            console.error("登录失败")
          })
        }(t), this.getExhList(), (0, e.queryPersonalReserveRule)(getApp().globalData.companyInfoId).then((function(e) {
          200 == e.code && (getApp().globalData.personalReserveRule = e.data)
        })).catch((function(e) {
          console.error("获取预约规则失败" + e)
        }))
    } else(0, i.modal)("不支持电脑端，请在手机上使用小程序", (function() {
      wx.exitMiniProgram()
    }))
  },
  /**
   * 空捕获：阻止弹层滚动穿透到底层页面
   */
  noopCatch: function() {},
  onHide: function() {
    this.setData({
      showStoreWindow: !1
    })
  },
  bannerClick: function(e) {
    var t = parseInt(e.currentTarget.dataset.index),
      a = this.data.exhList[t];
    (0, i.navigateTo)("../exhibition/exhibitionDetail?id=" + a.displayInfoId)
  },
  onShareAppMessage: function() {
    return {
      title: "苏州博物馆",
      path: "pages/index/index"
    }
  },
  onShareTimeline: function() {
    return {
      title: "苏州博物馆",
      imageUrl: ""
    }
  },
  getExhList: function() {
    var t = this;
    (0, i.showLoading)(), (0, o.queryExhibition)(void 0, 1, void 0, 5, 1).then((function(a) {
      var n;
      if ((0, i.hideLoading)(), 200 === a.code && (null === (n = a.data) || void 0 === n ? void 0 : n.records.length) > 0) {
        var o, r = null === (o = a.data) || void 0 === o ? void 0 : o.records;
        r.forEach((function(t) {
          t.homeDisplayPoster = t.homeDisplayPoster ? (0, e.fullImageUrlSaaS)(t.homeDisplayPoster) : "../../images/actappoint/defaultImg.jpg"
        })), t.setData({
          exhList: r
        })
      }
    }))
  },
  handleChange: function(e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },
  btnTap: function(e) {
    var t = parseInt(e.currentTarget.dataset.index);
    1 == t ? this.setData({
      showDialog3: !0
    }) : 2 == t ? (0, i.navigateTo)("../exhibition/exhList") : 3 == t ? (0, i.navigateTo)("../activity/activityList") : 4 == t ? (0, i.navigateTo)("../other/visitGuide") : 5 == t ? this.setData({
      showStoreWindow: !0,
      aniClass: "ani openAni"
    }) : 6 == t ? wx.navigateToMiniProgram({
      appId: "wx4bb7b6050831f585"
    }) : 7 == t ? (0, i.navigateTo)("../userCenter/userCenter") : 8 == t ? this.setData({
      showDialog1: !0
    }) : 9 == t ? this.setData({
      showDialog2: !0
    }) : this.testTeam()
  },
  changeLanguage: function(e) {
    1 == parseInt(e.currentTarget.dataset.index) ? (n.i18n.setLocales({
      lang: "zh_CN"
    }), this.setData({
      currentLanguage: "zh_CN",
      language: (0, n.t)("index")
    })) : (n.i18n.setLocales({
      lang: "en_US"
    }), this.setData({
      currentLanguage: "en_US",
      language: (0, n.t)("index")
    }))
  },
  /**
   * 首页温馨提示弹窗点击确定：关闭各弹窗并跳转本馆个人预约
   */
  dialogAgreeClick: function() {
    this.setData({
      showDialog1: !1,
      showDialog2: !1,
      showDialog3: !1
    });
    setTimeout((function() {
      getApp().globalData.museumName = t.museumName1, getApp().globalData.companyInfoId = t.companyInfoId1, (0, i.navigateTo)("/pages/appointment/home?isTeamAppoint=false")
    }), 550)
  },
  /**
   * 温馨提示弹窗点击关闭：仅关闭弹层
   */
  dialogDisAgreeClick: function() {
    this.setData({
      showDialog1: !1,
      showDialog2: !1,
      showDialog3: !1
    })
  },
  testTeam: function() {
    (0, i.showLoading)(), (0, e.teamReserveCheckCondition)().then((function(t) {
      wx.hideLoading(), 429 === t.code ? (0, e.queryTeamCertificationTip)(getApp().globalData.companyInfoId).then((function(e) {
        200 == e.code ? (0, i.modalWithCancel)(e.data.ruleValue, (function() {
          (0, i.navigateTo)("../teamAppoint/JigouCertification")
        })) : wx.showToast({
          title: e.msg,
          icon: "none"
        })
      })) : 428 === t.code ? (0, i.modal)(t.msg, (function() {
        (0, i.navigateTo)("../userCenter/jigouCertification")
      })) : 430 === t.code || 431 === t.code ? ((0, i.toast)(t.msg), setTimeout((function() {
        wx.navigateTo({
          url: "../userCenter/jigouCertification"
        })
      }), 2e3)) : 453 === t.code ? wx.navigateTo({
        url: "../contacts/realNameCertification"
      }) : 200 == t.code ? wx.navigateTo({
        url: "/pages/appointment/home?isTeamAppoint=true"
      }) : (t.code, (0, i.modal)(t.msg, (function() {})))
    })).catch((function(e) {
      (0, i.hideLoading)(), console.error(e)
    }))
  },
  handleAgree: function(e) {
    var t = this;
    this.setData({
      aniClass: "ani closeAni"
    }), setTimeout((function() {
      t.setData({
        showStoreWindow: !1
      })
    }), 500)
  }
});