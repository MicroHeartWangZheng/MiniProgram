var t, e = (t = require("../../utils/postRequest")) && t.__esModule ? t : {
  default: t
};
var a = require("../../utils/card.js"),
  i = require("../../utils/util.js"),
  s = require("../../utils/abc.js"),
  n = (require("../../utils/md5.js"), []),
  o = [],
  d = [],
  r = "",
  h = "",
  c = "",
  l = "",
  u = -1,
  g = 0;
Page({
  data: {
    items: [],
    addModalStatus: !1,
    hiddenMask: !0,
    hiddenModal: !0,
    selectedNums: 0,
    linkmanType: "normal",
    typeIndex: 0,
    typeList: ["身份证", "港澳台居民居住证", "外籍护照", "港澳居民来往内地通行证", "台湾居民来往大陆通行证", "外国人永久居留身份证"],
    typeList1: ["身份证", "港澳台居民居住证"],
    isShowIdModal: !0
  },
  onLoad: function (t) {
    n = [], o = [], d = [], r = "", h = "", u = -1, !1, g = 0;
    var a = t.ticketType,
      s = "family" == (a = i.isNull(a) ? "normal" : a) ? "adult" : a;
    if (t.linkmans && "" != t.linkmans)
      for (var c = JSON.parse(t.linkmans), l = 0; l < c.length; l++) c[l].isChild ? d.push(c[l]) : o.push(c[l]);
    r = t.time, this.postRequest = new e.default(this);
    var w = getApp().globalData.isIphoneX,
      m = getApp().globalData.url;
    this.setData({
      url: m,
      linkmanType: s,
      isIphoneX: w
    }), this.initPage()
  },
  initPage: function () {
    if (h = wx.getStorageSync("userId"), c = wx.getStorageSync("no"), l = wx.getStorageSync("token1"), h && "" != h) {
      wx.showLoading({
        title: "加载中",
        mask: !0
      });
      var t = this,
        e = t.data.linkmanType,
        a = "",
        n = null,
        d = (new Date).getTime();
      "adult" == e ? (n = {
        userId: h,
        time: r,
        timestamp: d,
        checkstr: c,
        token1: l,
        sign: s.sign(d, h)
      }, a = t.data.url + "ticketWechat/out/getAdultLinkmans.do") : (n = {
        userId: h,
        timestamp: d,
        checkstr: c,
        token1: l,
        sign: s.sign(d, h)
      }, a = t.data.url + "ticketWechat/out/getLinkmans.do"), this.postRequest.postRequest(a, s.encrypt(JSON.stringify(n)), 0, 1).then((function (e) {
        if ("0000" == e.status) {
          var a = JSON.parse(s.decrypt(e.data)).data,
            n = 0;
          if (o.length > 0)
            for (var d = 0; d < a.length; d++)
              for (var r = 0; r < o.length; r++)
                if (a[d].id == o[r].id) {
                  a[d].isChecked = !0, n++;
                  break
                } wx.hideLoading(), t.setData({
            items: a,
            selectedNums: n
          })
        } else wx.hideLoading(), i.showMsg(e.msg ? e.msg : "程序异常")
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
      i = t.detail.value.cardNo,
      s = this.data.typeIndex;
    if (!0, e && "" != e)
      if (i && "" != i) {
        var n;
        if ((n = a.checkIdCardNo(i, s)) && "false" !== n && "" !== n && "ysz" !== n) {
          var o = this.data.linkmanType,
            d = parseInt(i.substr(6, 8)),
            h = parseInt(r.replace(/-/g, "")) - 14e4;
          "child" === o && d < h ? (wx.hideLoading(), wx.showToast({
            title: "该联系人大于14岁",
            icon: "none",
            duration: 2e3
          }), !1) : "adult" === o && d >= h ? (wx.hideLoading(), wx.showToast({
            title: "请先添加成年人",
            icon: "none",
            duration: 2e3
          }), !1) : this.addData(e, i, o)
        } else wx.hideLoading(), wx.showToast({
          title: "证件号不正确",
          icon: "none",
          duration: 2e3
        }), !1
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
  addData: function (t, e, a) {
    var n = wx.getStorageSync("userId"),
      o = wx.getStorageSync("no"),
      d = wx.getStorageSync("token1"),
      r = this.data.typeIndex;
    if (n && "" != n) {
      var h = this,
        c = null;
      h.data.linkman && (c = h.data.linkman.id);
      var l = (new Date).getTime(),
        g = {
          data: {
            name: t,
            cardNo: e,
            type: r,
            userId: n,
            id: c
          },
          userId: n,
          timestamp: l,
          checkstr: o,
          token1: d,
          sign: s.sign(l, n)
        },
        w = h.data.url + "ticketWechat/out/saveLinkmanAll.do";
      this.postRequest.postRequest(w, s.encrypt(JSON.stringify(g)), 0, 0).then((function (n) {
        if ("0000" == n.status) {
          var o = JSON.parse(s.decrypt(n.data)).data,
            d = o.code;
          if (0 === d) !1, wx.hideLoading(), wx.showToast({
            title: "该证件号在黑名单中",
            icon: "none",
            duration: 2e3
          });
          else if (-1 === d) !1, wx.hideLoading(), wx.showToast({
            title: "您已有该证件号的联系人",
            icon: "none",
            duration: 2e3
          });
          else if (-2 === d) !1, wx.hideLoading(), wx.showToast({
            title: "请输入正确证件号",
            icon: "none",
            duration: 2e3
          });
          else if (-3 === d) !1, wx.hideLoading(), wx.showToast({
            title: "" + o.msg == "undefined" ? "操作失败" : o.msg,
            icon: "none",
            duration: 2e3
          });
          else {
            var l = h.data.items,
              g = e.replace(e.substring(4, e.length - 1), "*************");
            if (null != c) {
              (w = l[u]).name = t, w.cardNo = e, w.cardNoS = g, w.type = r
            } else {
              if ("child" === a) var w = {
                name: t,
                id: d,
                cardNo: e,
                type: r,
                isBlacklist: 0,
                cardNoS: g,
                isChild: !0
              };
              else w = {
                name: t,
                id: d,
                cardNo: e,
                type: r,
                isBlacklist: 0,
                cardNoS: g,
                isChild: !1
              };
              l.push(w)
            }
            h.hideModal(), h.setData({
              items: l
            }), !1, wx.hideLoading()
          }
        } else wx.hideLoading(), i.showMsg(n.msg ? n.msg : "程序异常")
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
  checkboxChange: function (t) {
    for (var e = t.detail.value, a = this.data.items, i = 0; i < a.length; i++) - 1 != e.indexOf(i + "") ? a[i].isChecked = !0 : a[i].isChecked = !1;
    var s = this.data.linkmanType,
      n = e.length;
    "child" == s && (n += g), this.setData({
      items: a,
      selectedNums: n
    })
  },
  nextToChild: function () {
    wx.showLoading({
      title: "加载中",
      mask: !0
    });
    for (var t = this.data.items, e = 0; e < t.length; e++) t[e].isChecked && n.push(t[e]);
    0 == n.length ? (wx.hideLoading(), wx.showToast({
      title: "请至少选择一个成年人",
      icon: "none",
      duration: 2e3
    })) : (g = n.length, this.setData({
      linkmanType: "child"
    }), this.getChildLink())
  },
  getChildLink: function () {
    var t = wx.getStorageSync("userId"),
      e = wx.getStorageSync("no"),
      a = wx.getStorageSync("token1");
    if (t && "" != t) {
      wx.showLoading({
        title: "加载中",
        mask: !0
      });
      var n = this;
      n.setData({
        items: []
      });
      var o = (new Date).getTime(),
        h = {
          userId: t,
          time: r,
          timestamp: o,
          checkstr: e,
          token1: a,
          sign: s.sign(o, t)
        },
        c = n.data.url + "ticketWechat/out/getChildLinkmans.do";
      this.postRequest.postRequest(c, s.encrypt(JSON.stringify(h)), 0, 1).then((function (t) {
        if (wx.hideLoading(), "0000" == t.status) {
          var e = JSON.parse(s.decrypt(t.data)).data,
            a = [];
          e && null != e && "" != e && (a = e);
          var o = g;
          if (d.length > 0) {
            o += d.length;
            for (var r = 0; r < a.length; r++)
              for (var h = 0; h < d.length; h++)
                if (a[r].id == d[h].id) {
                  a[r].isChecked = !0;
                  break
                }
          }
          n.setData({
            items: a,
            selectedNums: o
          })
        } else i.showMsg(t.msg ? t.msg : "程序异常")
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
  finishSelect: function () {
    var t = this.data.items,
      e = this.data.selectedNums,
      a = parseInt(e) - parseInt(g),
      i = this.data.linkmanType;
    if (0 == e) wx.showToast({
      title: "请至少选择一个联系人",
      icon: "none",
      duration: 2e3
    });
    else if (e > 5) wx.showToast({
      title: "最多可选择5个人",
      icon: "none",
      duration: 2e3
    });
    else {
      if ("child" === i) {
        if (a < 1) return wx.showToast({
          title: "一个订单最少要有一位未成年人",
          icon: "none",
          duration: 2e3
        }), !1;
        if (a > 3) return wx.showToast({
          title: "一个订单最多只能有三位未成年人",
          icon: "none",
          duration: 2e3
        }), !1
      }
      for (var s = 0; s < t.length; s++) t[s].isChecked && n.push(t[s]);
      var o = getCurrentPages(),
        d = o[o.length - 2];
      d && d.setData({
        linkmans: n
      }), wx.navigateBack()
    }
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
      i = this.data.startY,
      s = t.changedTouches[0].clientX,
      n = t.changedTouches[0].clientY,
      o = this.angle({
        X: a,
        Y: i
      }, {
        X: s,
        Y: n
      });
    this.data.items.forEach((function (t, i) {
      t.isTouchMove = !1, Math.abs(o) > 30 || i == e && (t.isTouchMove = !(s > a))
    })), this.setData({
      items: this.data.items
    })
  },
  angle: function (t, e) {
    var a = e.X - t.X,
      i = e.Y - t.Y;
    return 360 * Math.atan(i / a) / (2 * Math.PI)
  },
  editTap: function (t) {
    u = t.currentTarget.dataset.index;
    var e = this.data.items[u];
    this.setData({
      addModalStatus: !0,
      linkman: e,
      typeIndex: e.type
    })
  },
  hideModal: function () {
    u = -1, !1, this.setData({
      hiddenMask: !0,
      hiddenModal: !0,
      addModalStatus: !1,
      linkman: null
    })
  },
  delTap: function (t) {
    var e = wx.getStorageSync("userId"),
      a = wx.getStorageSync("no"),
      n = wx.getStorageSync("token1");
    if (e && "" != e) {
      var o = this,
        d = t.currentTarget.dataset.index;
      wx.showModal({
        title: "提示",
        content: "您确定删除此人信息？",
        success: function (t) {
          if (t.confirm) {
            wx.showLoading({
              title: "处理中",
              mask: !0
            });
            var r = o.data.items,
              h = r[d].id,
              c = (new Date).getTime(),
              l = {
                id: h,
                userId: e,
                timestamp: c,
                checkstr: a,
                token1: n,
                sign: s.sign(c, e)
              },
              u = o.data.url + "ticketWechat/out/delLinkman.do";
            o.postRequest.postRequest(u, s.encrypt(JSON.stringify(l)), 0, 0).then((function (t) {
              if (wx.hideLoading(), "0000" == t.status) {
                var e = JSON.parse(s.decrypt(t.data));
                if (1 === e.data) {
                  if (r[d].isChecked) {
                    var a = o.data.selectedNums - 1;
                    o.setData({
                      selectedNums: a
                    })
                  }
                  r.splice(d, 1), o.setData({
                    items: r
                  })
                } else wx.showToast({
                  title: e.msg ? e.msg : "删除失败",
                  icon: "none",
                  duration: 2e3
                })
              } else i.showMsg(t.msg ? t.msg : "程序异常")
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