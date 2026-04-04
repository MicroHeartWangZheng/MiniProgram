var t, e = (t = require("../../utils/postRequest")) && t.__esModule ? t : {
  default: t
};
var a = require("../../utils/util.js"),
  s = require("../../utils/abc.js"),
  o = require("../../utils/createCode.js"),
  n = getApp().globalData.url;
Page({
  data: {
    showModalStatus: !1,
    status: 0,
    tel1: ""
  },
  onLoad: function () {
    this.setData({
      url: getApp().globalData.url
    }), this.postRequest = new e.default(this)
  },
  onShow: function () {
    this.showMes()
  },
  getUser: function () {
    var t = this;
    wx.showLoading({
      title: "加载中"
    }), wx.login({
      success: function (e) {
        if (e.code) {
          var i = e.code,
            r = (new Date).getTime(),
            d = {
              code: i,
              timestamp: r,
              sign: s.signNoParam(r)
            };
          t.postRequest.postRequest(n + "ticketWechat/out/getUnionId2021.do", s.encrypt(JSON.stringify(d)), 0).then((function (e) {
            if (wx.hideLoading(), "0000" == e.status) {
              var n = JSON.parse(s.decrypt(e.data)).data;
              0 == n.flag ? (t.data.userId = n.id, t.data.unionId = n.unionId, t.data.openId = n.openId, t.data.tel = n.tel, wx.setStorageSync("userId", n.id), wx.setStorageSync("openId", n.openId), wx.setStorageSync("token1", n.token1), wx.setStorageSync("no", n.no), wx.setStorageSync("createTime", n.createTime), wx.setStorageSync("tel", n.tel), o.barcode("mycanvas", n.no, 550, 150), t.setData({
                userId: n.id,
                mytel: n.tel,
                createTime: n.createTime,
                no: n.no
              }), t.getPoint()) : 2 == n.flag ? a.showMsg("失败，请重试") : (wx.setStorageSync("openId", n.openId), wx.setStorageSync("token1", n.token1), wx.navigateTo({
                url: "/pages/phone/phone?unionId=" + n.unionId
              }))
            } else a.showMsg(e.msg ? e.msg : "程序异常")
          }))
        } else wx.hideLoading(), a.showMsg("失败，请重试")
      },
      fail: function () {
        wx.hideLoading(), a.showMsg("失败，请重试")
      }
    })
  },
  showMes: function () {
    var t = wx.getStorageSync("nickName"),
      e = wx.getStorageSync("tel"),
      s = wx.getStorageSync("createTime"),
      n = wx.getStorageSync("no"),
      i = wx.getStorageSync("userId");
    a.isNull(n) || o.barcode("mycanvas", n, 550, 150), this.setData({
      userId: i,
      nickName: t,
      mytel: e,
      createTime: s,
      no: n
    }), this.getPoint()
  },
  getPoint: function () {
    var t = this,
      e = n + "ticketWechat/out/getPoint.do";
    if (i = t.data.userId) {
      var o = (new Date).getTime(),
        i = {
          userId: i,
          timestamp: o,
          sign: s.sign(o, i)
        };
      t.postRequest.postRequest(e, s.encrypt(JSON.stringify(i)), 0).then((function (e) {
        if ("0000" == e.status) {
          var o = JSON.parse(s.decrypt(e.data)).data;
          t.setData({
            point: o
          }), wx.hideLoading()
        } else wx.hideLoading(), a.showMsg(e.msg ? e.msg : "程序异常")
      }))
    }
  },
  changePhone: function () {
    this.setData({
      showModalStatus: !0
    })
  },
  getTel: function (t) {
    var e = t.detail.value;
    this.setData({
      tel1: e
    })
  },
  changError: function () {
    this.setData({
      telstyl: "right"
    })
  },
  isPoneAvailable: function (t) {
    return !!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(t)
  },
  getCode: function () {
    var t = this,
      e = t.data.tel1;
    if (t.isPoneAvailable(e)) {
      var o = (new Date).getTime(),
        n = {
          tel: e,
          timestamp: o,
          sign: s.signNoParam(o)
        };
      wx.request({
        url: getApp().globalData.codeUrl + "codeWechat/out/getCode.do",
        data: s.encrypt(JSON.stringify(n)),
        method: "POST",
        header: {
          "content-type": "application/json"
        },
        success: function (e) {
          if (200 == e.statusCode && "0000" == e.data.status) {
            var o = JSON.parse(s.decrypt(e.data.data)).data;
            t.setData({
              sessionId: o
            });
            var n = 61,
              i = setInterval((function () {
                0 == --n ? (t.setData({
                  status: 0,
                  second: n
                }), clearInterval(i)) : t.setData({
                  status: 1,
                  second: n
                })
              }), 1e3)
          } else a.showMsg(e.data.msg ? e.data.msg : "程序异常")
        }
      })
    } else t.setData({
      telstyl: "error"
    })
  },
  changeTel: function (t) {
    var e = this,
      o = t.detail.value,
      n = o.code;
    if (null == n || "" == n) e.setData({
      codestyl: "error"
    });
    else if ("right" == e.data.telstyl && 0 != o.tel.length) {
      var i = wx.getStorageSync("userId");
      i && "" != i || (i = wx.getStorageSync("userId")), o.id = i;
      var r = (new Date).getTime();
      o.userId = i, o.timestamp = r, o.checkstr = wx.getStorageSync("no"), o.token1 = wx.getStorageSync("token1"), o.sign = s.sign(r, i), wx.request({
        url: getApp().globalData.codeUrl + "codeWechat/out/changeTel2.do",
        data: s.encrypt(JSON.stringify(o)),
        method: "POST",
        header: {
          "content-type": "application/json",
          Cookie: "JSESSIONID=" + e.data.sessionId
        },
        success: function (t) {
          if (200 == t.statusCode && "0000" == t.data.status) {
            var n = JSON.parse(s.decrypt(t.data.data)).data;
            0 == n ? (e.setData({
              tel: o.tel,
              mytel: o.tel
            }), wx.setStorage({
              key: "tel",
              data: o.tel
            }), e.setData({
              showModalStatus: !1
            })) : 1 == n ? wx.showToast({
              title: "验证码输入错误",
              icon: "none",
              duration: 2e3
            }) : 2 == n ? wx.showToast({
              title: "手机号输入错误",
              icon: "none",
              duration: 2e3
            }) : 3 == n && wx.showToast({
              title: "该手机号已注册",
              icon: "none",
              duration: 2e3
            })
          } else a.showMsg(t.data.msg ? t.data.msg : "程序异常")
        }
      })
    }
  },
  showModal: function () {
    this.setData({
      showModalStatus: !0
    })
  },
  hideModal: function () {
    this.setData({
      showModalStatus: !1
    })
  },
  logOut: function () {
    wx.removeStorageSync("userId"), wx.removeStorageSync("no"), wx.removeStorageSync("openId"), wx.removeStorageSync("createTime"), wx.removeStorageSync("tel"), wx.removeStorageSync("token1"), o.barcode("mycanvas", "", 0, 0), this.setData({
      userId: "",
      mytel: "",
      createTime: "",
      no: "",
      point: ""
    })
  }
});