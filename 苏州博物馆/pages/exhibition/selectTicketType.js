var t = require("../../@babel/runtime/helpers/toConsumableArray"),
  a = require("../../E83DACF5AD7FA6DF8E5BC4F28CD30E96.js"),
  n = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  i = 999;
Page({
  data: {
    info: {},
    everyMaxNumber: 0,
    ticketTypeArr: [],
    expand: !1,
    expandId: ""
  },
  onLoad: function(e) {
    var t, n, r = JSON.parse(decodeURIComponent(e.info));
    this.setData({
      info: r
    }), t = this, n = r.displayInfoId, (0, a.queryExhibitionBookRule)(n).then((function(e) {
      200 == e.code ? t.setData({
        everyMaxNumber: e.data.everyMaxNumber
      }) : toast(e.msg)
    })).catch((function(e) {
      console.debug("获取预约须知失败" + e)
    })), this.getTicketType(r.displayInfoId), i = 999
  },
  getTicketType: function(t) {
    var n = this;
    (0, a.getExhibitionTicketType)(t).then((function(t) {
      200 == t.code ? n.setData({
        ticketTypeArr: t.data
      }) : showWarningToast(e, "获取展览票类型失败")
    }))
  },
  expandText: function(e) {
    var t = this;
    console.log("展开", e);
    var a = e.currentTarget.id;
    if (a !== this.data.expandId) this.setData({
      expand: !1,
      expandId: ""
    }, (function() {
      var e = t.data.expand;
      t.setData({
        expand: !e,
        expandId: a
      })
    }));
    else {
      var n = this.data.expand;
      this.setData({
        expand: !n,
        expandId: a
      })
    }
  },
  buyTicketBtnTap: function(e) {
    i = parseInt(e.currentTarget.dataset.index);
    var a = this.data.ticketTypeArr,
      r = a[i];
    r.selected = !0, r.contactsArr = [];
    var o = a.filter((function(e, t) {
        return t !== i
      })),
      d = [r].concat(t(o)),
      s = (0, n.objCopy)(this.data.info, ["systemId", "companyInfoId", "displayInfoId", "name", "timeLabelStr", "companyName", "place", "isMachineVerify"]);
    s.everyMaxNumber = this.data.everyMaxNumber;
    var c = "exhibitionAppoint?data=" + encodeURIComponent(JSON.stringify(s)) + "&ticketArr=" + encodeURIComponent(JSON.stringify(d));
    this.setData({
      hiddleTongzhiPop: !0
    }), wx.navigateTo({
      url: c
    })
  }
});