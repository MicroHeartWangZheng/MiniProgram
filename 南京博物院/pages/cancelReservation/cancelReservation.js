var t = require("../../utils/util.js"),
  a = require("../../utils/abc.js");
Page({
  data: {
    list: [],
    cancelList: [],
    status: 0,
    num: 0,
    typeList: ["身份证", "港澳台居民居住证", "外籍护照", "港澳居民来往内地通行证", "台湾居民来往大陆通行证", "外国人永久居留身份证"],
    reasons: []
  },
  onLoad: function (t) {
    var a = t.id,
      e = t.ticketType,
      s = getApp().globalData.url,
      i = getApp().globalData.isIphoneX,
      n = wx.getStorageSync("userId");
    n && "" != n && a && "" != a ? (this.setData({
      url: s,
      id: a,
      isIphoneX: i,
      ticketType: e,
      userId: n
    }), this.getOrders()) : wx.showModal({
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
  getOrders: function () {
    wx.showLoading({
      title: "加载中",
      mask: !0
    });
    var e = this,
      s = e.data.ticketType,
      i = (new Date).getTime(),
      n = wx.getStorageSync("no"),
      d = wx.getStorageSync("token1"),
      o = {
        id: e.data.id,
        ticketType: s,
        checkstr: n,
        token1: d,
        userId: e.data.userId,
        timestamp: i,
        sign: a.sign(i, e.data.userId)
      };
    wx.request({
      url: e.data.url + "ticketWechat/out/getOrderLinks.do",
      data: a.encrypt(JSON.stringify(o)),
      method: "POST",
      header: {
        "content-type": "application/json"
      },
      success: function (i) {
        if (200 == i.statusCode && "0000" == i.data.status) {
          var n = JSON.parse(a.decrypt(i.data.data));
          if ("0000" == n.status) {
            var d = n.data,
              o = d.data;
            if ("normal" === s) e.setData({
              adultLinks: o.links,
              reasons: d.reasons
            });
            else {
              var r = o.adultLinks,
                c = o.childLinks;
              e.setData({
                adultLinks: r,
                childLinks: c,
                reasons: d.reasons
              })
            }
            d.tips && wx.showModal({
              title: "提示",
              content: "" + d.tips,
              showCancel: !1
            })
          } else t.showMsg(n.msg ? n.msg : "程序异常")
        } else t.showMsg(i.data.msg ? i.data.msg : "程序异常")
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  },
  checkboxChange: function (t) {
    var a = t.detail.value,
      e = this.data.ticketType,
      s = a.length,
      i = 0;
    if ("family" === e)
      for (var n = this.data.adultLinks, d = 0; d < a.length; d++) {
        var o = n[a[d]];
        if (o.childNum > 0) {
          s += o.childNum, i = 1;
          break
        }
      }
    this.setData({
      num: s,
      delChild: i
    })
  },
  cancelTap: function (e) {
    var s = this,
      i = s.data.num,
      n = e.detail.value.indexs,
      d = e.detail.value.reasonIndex;
    if (d && d > 0)
      if (i > 0) {
        var o = 0;
        wx.showLoading({
          title: "取消中",
          mask: !0
        });
        for (var r = s.data.adultLinks, c = [], l = 0; l < n.length; l++) c[l] = r[parseInt(n[l])].id;
        var u = (new Date).getTime(),
          g = wx.getStorageSync("no"),
          h = wx.getStorageSync("token1"),
          p = {
            id: s.data.id,
            ids: c,
            num: s.data.num,
            reasonIndex: d,
            userId: s.data.userId,
            checkstr: g,
            token1: h,
            timestamp: u,
            sign: a.sign(u, s.data.userId)
          };
        wx.request({
          url: s.data.url + "ticketWechat/out/cancelOrder.do",
          data: a.encrypt(JSON.stringify(p)),
          method: "POST",
          header: {
            "content-type": "application/json"
          },
          success: function (e) {
            if (200 == e.statusCode && "0000" == e.data.status) {
              var i = JSON.parse(a.decrypt(e.data.data));
              if ("0000" == i.status) {
                if (o = i.data, 0 == i.data) {
                  s.setData({
                    status: 1
                  });
                  for (var d = [], c = 0; c < n.length; c++) d[c] = r[n[c]];
                  s.setData({
                    cancelList: d
                  })
                }
              } else t.showMsg(i.msg ? i.msg : "程序异常")
            } else t.showMsg(e.data.msg ? e.data.msg : "程序异常")
          },
          complete: function () {
            wx.hideLoading(), -1 == o ? wx.showToast({
              title: "取消失败，系统错误或已取纸质票",
              icon: "none",
              duration: 3e3
            }) : -2 == o && wx.showToast({
              title: "取消失败，不可取消",
              icon: "none",
              duration: 3e3
            })
          }
        })
      } else t.showMsg("请选择要取消的人员");
    else t.showMsg("请选择取消原因")
  }
});