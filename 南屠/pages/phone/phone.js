var e, t = (e = require("../../utils/postRequest")) && e.__esModule ? e : {
  default: e
};
var a = require("../../utils/util.js"),
  i = require("../../utils/abc.js"),
  s = getApp().globalData.url;
Page({
  data: {
    status: 0,
    second: 60,
    subType: !1,
    getPhone: !0,
    usePrivacy: !1,
    checked: !1,
    telType: !1
  },
  onLoad: function (e) {
    var i = this;
    if (this.postRequest = new t.default(this), wx.getAppBaseInfo) {
      var s = wx.getAppBaseInfo().SDKVersion;
      a.compareVersion(s, "2.32.3") >= 0 && i.setData({
        usePrivacy: !0
      }), a.compareVersion(s, "2.21.2") >= 0 && i.setData({
        telType: !0
      })
    }
    var o = e.unionId,
      n = e.toUrl;
    !o || o.length < 10 ? (wx.showToast({
      title: "数据丢失，请重试",
      icon: "none",
      duration: 2e3
    }), setTimeout((function () {
      wx.switchTab({
        url: "/pages/index/index"
      })
    }), 2e3)) : (i.data.unionId = o, i.data.toUrl = n, wx.login({
      success: function (e) {
        e.code ? i.data.loginCode = e.code : i.setData({
          getPhone: !1
        })
      },
      fail: function () {
        i.setData({
          getPhone: !1
        })
      }
    }))
  },
  getPhoneNumber: function (e) {
    var t = this;
    if ("getPhoneNumber:ok" === e.detail.errMsg) {
      wx.showLoading({
        title: "处理中"
      });
      var o = s + "ticketWechat/out/getEXTel2021.do",
        n = (new Date).getTime(),
        r = {
          iv: e.detail.iv,
          encryptedData: e.detail.encryptedData,
          code: t.data.loginCode,
          unionId: t.data.unionId,
          timestamp: n,
          sign: i.signNoParam(n)
        };
      1 == t.data.telType && (o = s + "ticketWechat/out/getEXTel2024.do", r = {
        code: e.detail.code,
        unionId: t.data.unionId,
        timestamp: n,
        sign: i.signNoParam(n)
      }), t.postRequest.postRequest(o, i.encrypt(JSON.stringify(r)), 0).then((function (e) {
        if ("0000" == e.status) {
          var s = JSON.parse(i.decrypt(e.data)).data,
            o = s.flag;
          if (-1 == o) wx.hideLoading(), t.setData({
            getPhone: !1
          });
          else if (3 == o) wx.hideLoading(), wx.showToast({
            title: "该手机号已注册",
            icon: "none",
            duration: 2e3
          });
          else {
            var n = s.id,
              r = s.tel;
            wx.setStorageSync("userId", s.id), wx.setStorageSync("tel", s.tel), wx.setStorageSync("createTime", s.createTime), wx.setStorageSync("no", s.no), wx.hideLoading(), wx.showToast({
              title: "登录成功！",
              icon: "success",
              duration: 2e3
            });
            var d = t.data.toUrl;
            d && n && r ? "toWenba0" == d ? wx.redirectTo({
              url: "/wbpackage/pages/wenba/wenba"
            }) : "toWenba1" == d ? wx.redirectTo({
              url: "/wbpackage/pages/wblist/wblist?id=1"
            }) : "toWenba2" == d ? wx.redirectTo({
              url: "/wbpackage/pages/wblist/wblist?id=2"
            }) : "toWenba3" == d ? wx.redirectTo({
              url: "/wbpackage/pages/wblist/wblist?id=3"
            }) : "toWenba4" == d ? wx.redirectTo({
              url: "/wbpackage/pages/wblist/wblist?id=4"
            }) : "toOther" == d ? wx.navigateToMiniProgram({
              appId: "wxd194fd0d80f89a44",
              path: "pages/ticket/index/index",
              extraData: {
                userId: n,
                tel: r
              }
            }) : wx.redirectTo({
              url: d
            }) : wx.reLaunch({
              url: "/pages/index/index"
            })
          }
        } else wx.hideLoading(), a.showMsg(e.msg ? e.msg : "程序异常")
      }))
    } else a.showButMsg("获取失败，请重试")
  },
  getTel: function (e) {
    var t = e.detail.value;
    this.isPoneAvailable(t) ? (this.setData({
      tel: t
    }), this.data.code ? this.setData({
      subType: !0
    }) : this.setData({
      subType: !1
    })) : this.setData({
      subType: !1,
      tel: ""
    })
  },
  setCode: function (e) {
    var t = e.detail.value;
    this.setData({
      code: t
    }), this.data.tel && this.data.code ? this.setData({
      subType: !0
    }) : this.setData({
      subType: !1
    })
  },
  isPoneAvailable: function (e) {
    return !!e && !!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(e)
  },
  getCode: function () {
    var e = this,
      t = e.data.tel;
    if (t) {
      var s = (new Date).getTime(),
        o = {
          tel: t,
          timestamp: s,
          sign: i.signNoParam(s)
        };
      wx.request({
        url: getApp().globalData.codeUrl + "codeWechat/out/getCode.do",
        data: i.encrypt(JSON.stringify(o)),
        method: "POST",
        header: {
          "content-type": "application/json"
        },
        success: function (t) {
          if (200 == t.statusCode && "0000" == t.data.status) {
            var s = JSON.parse(i.decrypt(t.data.data)).data;
            e.setData({
              sessionId: s
            });
            var o = 60,
              n = setInterval((function () {
                0 == --o ? (e.setData({
                  status: 0,
                  second: o
                }), clearInterval(n)) : e.setData({
                  status: 1,
                  second: o
                })
              }), 1e3)
          } else a.showMsg(t.data.msg ? t.data.msg : "程序异常")
        }
      })
    } else e.setData({
      telstyl: "error"
    })
  },
  register: function (e) {
    var t = this,
      s = e.detail.value;
    if (t.data.subType) {
      var o = t.data.sessionId;
      s.unionId = t.data.unionId;
      var n = (new Date).getTime();
      s.timestamp = n, s.sign = i.signNoParam(n), wx.request({
        url: getApp().globalData.codeUrl + "codeWechat/out/register.do",
        data: i.encrypt(JSON.stringify(s)),
        method: "POST",
        header: {
          "content-type": "application/json",
          Cookie: "JSESSIONID=" + o
        },
        success: function (e) {
          if (200 == e.statusCode && "0000" == e.data.status) {
            var s = JSON.parse(i.decrypt(e.data.data)).data;
            if (0 == s.flag) {
              var o = s.id,
                n = s.tel;
              wx.setStorageSync("userId", o), wx.setStorageSync("tel", n), wx.setStorageSync("createTime", s.createTime), wx.setStorageSync("no", s.no), wx.showToast({
                title: "注册成功！",
                icon: "success",
                duration: 2e3
              });
              var r = t.data.toUrl;
              r && o && n ? "toWenba0" == r ? wx.redirectTo({
                url: "/wbpackage/pages/wenba/wenba"
              }) : "toWenba1" == r ? wx.redirectTo({
                url: "/wbpackage/pages/wblist/wblist?id=1"
              }) : "toWenba2" == r ? wx.redirectTo({
                url: "/wbpackage/pages/wblist/wblist?id=2"
              }) : "toWenba3" == r ? wx.redirectTo({
                url: "/wbpackage/pages/wblist/wblist?id=3"
              }) : "toWenba4" == r ? wx.redirectTo({
                url: "/wbpackage/pages/wblist/wblist?id=4"
              }) : "toOther" == r ? wx.navigateToMiniProgram({
                appId: "wxd194fd0d80f89a44",
                path: "pages/ticket/index/index",
                extraData: {
                  userId: o,
                  tel: n
                }
              }) : wx.redirectTo({
                url: r
              }) : wx.navigateBack()
            } else 1 == s.flag ? wx.showToast({
              title: "验证码输入错误",
              icon: "none",
              duration: 2e3
            }) : 2 == s.flag ? wx.showToast({
              title: "手机号输入错误",
              icon: "none",
              duration: 2e3
            }) : wx.showToast({
              title: "该手机号已注册",
              icon: "none",
              duration: 2e3
            })
          } else a.showMsg(e.data.msg ? e.data.msg : "程序异常")
        },
        fail: function () {
          wx.showToast({
            title: "注册失败",
            icon: "none",
            duration: 2e3
          })
        }
      })
    }
  },
  radioChange: function (e) {
    this.setData({
      checked: !this.data.checked
    })
  },
  back: function () {
    wx.switchTab({
      url: "/pages/index/index"
    })
  },
  openPrivacyContract: function (e) {
    wx.navigateTo({
      url: "/pages/privacyContractH5/privacyContractH5?type=" + e.currentTarget.dataset.type
    })
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {}
});