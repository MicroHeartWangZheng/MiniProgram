var t, e = (t = require("../../utils/postRequest")) && t.__esModule ? t : {
  default: t
};
var a = require("../../utils/card.js"),
  s = require("../../utils/util.js"),
  i = require("../../utils/abc.js"),
  n = "",
  o = -1;
Page({
  data: {
    items: [],
    addModalStatus: !1,
    hiddenMask: !0,
    hiddenModal: !0,
    typeIndex: 0,
    typeList: ["身份证", "港澳台居民居住证", "外籍护照", "港澳居民来往内地通行证", "台湾居民来往大陆通行证", "外国人永久居留身份证"],
    isShowIdModal: !0
  },
  onLoad: function (t) {
    n = "", o = -1, !1, this.postRequest = new e.default(this);
    var a = getApp().globalData.isIphoneX,
      s = getApp().globalData.url;
    this.setData({
      url: s,
      isIphoneX: a
    }), this.initPage()
  },
  initPage: function () {
    if ((n = wx.getStorageSync("userId")) && "" != n) {
      wx.showLoading({
        title: "加载中",
        mask: !0
      });
      var t, e = this,
        a = (new Date).getTime(),
        o = wx.getStorageSync("no"),
        d = wx.getStorageSync("token1"),
        c = {
          userId: n,
          timestamp: a,
          checkstr: o,
          token1: d,
          sign: i.sign(a, n)
        };
      t = e.data.url + "ticketWechat/out/getLinkmans.do", this.postRequest.postRequest(t, i.encrypt(JSON.stringify(c)), 0, 1).then((function (t) {
        if (wx.hideLoading(), "0000" == t.status) {
          var a = JSON.parse(i.decrypt(t.data)).data;
          e.setData({
            items: a
          })
        } else s.showMsg(t.msg ? t.msg : "程序异常")
      }))
    } else wx.showModal({
      content: "缓存数据丢失，请重新进入",
      showCancel: !1,
      confirmColor: "#AC732E",
      success: function (t) {
        t.confirm && wx.switchTab({
          url: "/pages/index/index"
        })
      }
    })
  },
  addTap: function () {
    this.setData({
      addModalStatus: !0,
      typeIndex: 0
    })
  },
  addLinkman: function (t) {
    wx.showLoading({
      title: "添加数据中",
      mask: !0
    });
    var e = t.detail.value.name,
      s = t.detail.value.cardNo,
      i = this.data.typeIndex;
    if (!0, e && "" != e)
      if (s && "" != s) {
        var n;
        (n = a.checkIdCardNo(s, i)) && "false" !== n && "" !== n && "ysz" !== n ? this.addData(e, s) : (wx.hideLoading(), wx.showToast({
          title: "证件号不正确",
          icon: "none",
          duration: 2e3
        }), !1)
      } else wx.hideLoading(), wx.showToast({
        title: "请输入证件号",
        icon: "none",
        duration: 2e3
      }), !1;
    else wx.hideLoading(), wx.showToast({
      title: "请输入姓名",
      icon: "none",
      duration: 2e3
    }), !1
  },
  addData: function (t, e) {
    var a = wx.getStorageSync("userId"),
      n = this.data.typeIndex;
    if (a && "" != a) {
      var d = this,
        c = null;
      d.data.linkman && (c = d.data.linkman.id);
      var r = (new Date).getTime(),
        h = wx.getStorageSync("no"),
        u = wx.getStorageSync("token1"),
        l = {
          data: {
            name: t,
            cardNo: e,
            type: n,
            userId: a,
            id: c
          },
          userId: a,
          timestamp: r,
          checkstr: h,
          token1: u,
          sign: i.sign(r, a)
        },
        g = d.data.url + "ticketWechat/out/saveLinkmanAll.do";
      this.postRequest.postRequest(g, i.encrypt(JSON.stringify(l)), 0, 0).then((function (a) {
        if ("0000" == a.status) {
          var r = JSON.parse(i.decrypt(a.data)).data,
            h = r.code;
          if (0 === h) !1, wx.hideLoading(), wx.showToast({
            title: "该证件号在黑名单中",
            icon: "none",
            duration: 2e3
          });
          else if (-1 === h) !1, wx.hideLoading(), wx.showToast({
            title: "您已有该证件号的联系人",
            icon: "none",
            duration: 2e3
          });
          else if (-2 === h) !1, wx.hideLoading(), wx.showToast({
            title: "请输入正确证件号",
            icon: "none",
            duration: 2e3
          });
          else if (-3 === h) !1, wx.hideLoading(), wx.showToast({
            title: "" + r.msg == "undefined" ? "操作失败" : r.msg,
            icon: "none",
            duration: 2e3
          });
          else {
            var u = d.data.items,
              l = e.replace(e.substring(4, e.length - 1), "*************");
            if (null != c) {
              (g = u[o]).name = t, g.cardNo = e, g.cardNoS = l, g.type = n
            } else {
              var g = {
                name: t,
                id: h,
                cardNo: e,
                type: n,
                isBlacklist: 0,
                cardNoS: l
              };
              u.push(g)
            }
            d.hideModal(), d.setData({
              items: u
            }), !1, wx.hideLoading()
          }
        } else wx.hideLoading(), s.showMsg(a.msg ? a.msg : "程序异常")
      }))
    } else wx.hideLoading(), wx.showModal({
      content: "缓存数据丢失，请重新进入",
      showCancel: !1,
      confirmColor: "#AC732E",
      success: function (t) {
        t.confirm && wx.switchTab({
          url: "/pages/index/index"
        })
      }
    })
  },
  touchstart: function (t) {
    this.data.items.forEach((function (t, e) {
      t.isTouchMove && (t.isTouchMove = !1)
    }));
    var e = 0,
      a = 0;
    t.changedTouches.hasOwnProperty(0) && (t.changedTouches[0].hasOwnProperty("clientX") && (e = t.changedTouches[0].clientX), t.changedTouches[0].hasOwnProperty("clientY") && (a = t.changedTouches[0].clientY)), this.setData({
      startX: e,
      startY: a,
      items: this.data.items
    })
  },
  touchmove: function (t) {
    var e = t.currentTarget.dataset.index,
      a = this.data.startX,
      s = this.data.startY,
      i = t.changedTouches[0].clientX,
      n = t.changedTouches[0].clientY,
      o = this.angle({
        X: a,
        Y: s
      }, {
        X: i,
        Y: n
      });
    this.data.items.forEach((function (t, s) {
      t.isTouchMove = !1, Math.abs(o) > 30 || s == e && (t.isTouchMove = !(i > a))
    })), this.setData({
      items: this.data.items
    })
  },
  angle: function (t, e) {
    var a = e.X - t.X,
      s = e.Y - t.Y;
    return 360 * Math.atan(s / a) / (2 * Math.PI)
  },
  editTap: function (t) {
    o = t.currentTarget.dataset.index;
    var e = this.data.items[o];
    this.setData({
      addModalStatus: !0,
      linkman: e,
      typeIndex: e.type
    })
  },
  hideModal: function () {
    o = -1, !1, this.setData({
      hiddenMask: !0,
      hiddenModal: !0,
      addModalStatus: !1,
      linkman: null
    })
  },
  delTap: function (t) {
    var e = wx.getStorageSync("userId");
    if (e && "" != e) {
      var a = this,
        n = t.currentTarget.dataset.index;
      wx.showModal({
        title: "提示",
        content: "您确定删除此人信息？",
        success: function (t) {
          if (t.confirm) {
            wx.showLoading({
              title: "处理中",
              mask: !0
            });
            var o = a.data.items,
              d = o[n].id,
              c = (new Date).getTime(),
              r = wx.getStorageSync("no"),
              h = wx.getStorageSync("token1"),
              u = {
                id: d,
                userId: e,
                timestamp: c,
                checkstr: r,
                token1: h,
                sign: i.sign(c, e)
              },
              l = a.data.url + "ticketWechat/out/delLinkman.do";
            a.postRequest.postRequest(l, i.encrypt(JSON.stringify(u)), 0, 0).then((function (t) {
              if (wx.hideLoading(), "0000" == t.status) {
                var e = JSON.parse(i.decrypt(t.data));
                1 === e.data ? (o.splice(n, 1), a.setData({
                  items: o
                })) : wx.showToast({
                  title: e.msg ? e.msg : "删除失败",
                  icon: "none",
                  duration: 2e3
                })
              } else s.showMsg(t.msg ? t.msg : "程序异常")
            }))
          }
        }
      })
    } else wx.showModal({
      content: "缓存数据丢失，请重新进入",
      showCancel: !1,
      confirmColor: "#AC732E",
      success: function (t) {
        t.confirm && wx.switchTab({
          url: "/pages/index/index"
        })
      }
    })
  },
  setType: function (t) {
    var e = t.currentTarget.dataset.index;
    this.setData({
      typeIndex: e,
      isShowIdModal: !0
    })
  },
  showIdModal: function () {
    this.setData({
      isShowIdModal: !1
    })
  },
  hideIdModal: function () {
    this.setData({
      isShowIdModal: !0
    })
  }
});