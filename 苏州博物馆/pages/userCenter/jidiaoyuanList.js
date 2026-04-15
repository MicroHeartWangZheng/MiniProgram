var e = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  t = require("../../22CF3566AD7FA6DF44A95D614D730E96.js");

function a(t) {
  (0, e.teamReserveLeaders)(getApp().globalData.userInfo.customerId).then((function(e) {
    if (200 == e.code) {
      var a = e.data,
        o = !1,
        s = [];
      a.forEach((function(e) {
        e.myself = 0, e.guideId === getApp().globalData.userInfo.customerId && (o = !0, e.myself = 1), s.push(e)
      })), t.setData({
        isHasSelf: o,
        contactsArr: s
      })
    } else wx.showToast({
      title: e.msg
    })
  }))
}
Page({
  behaviors: [t.languageBehaviors],
  data: {
    contactsArr: [],
    maxCount: 10,
    isHasSelf: !1
  },
  onLoad: function(e) {
    a(this)
  },
  addBtnClick: function(e) {
    var t = {
      isTeamAppoint: !1
    };
    t.isHasSelf = this.data.isHasSelf, t.isAdd = !0;
    var a = JSON.stringify(t);
    wx.navigateTo({
      url: "../teamAppoint/addJidiaoyuan?data=" + a
    })
  },
  deleteClick: function(t) {
    var o = this,
      s = t.currentTarget.dataset.index,
      n = this.data.contactsArr[s],
      i = n.agencyId,
      c = n.guideId;
    wx.showModal({
      title: "提示",
      content: "确定删除吗？",
      success: function(t) {
        t.confirm ? (console.log("用户点击确定"), (0, e.deleteLeaderDeleteById)(i, c).then((function(e) {
          200 == e.code ? (wx.showToast({
            title: "删除成功！"
          }), a(o)) : wx.showToast({
            title: e.msg
          })
        })).catch((function(e) {
          console.error("删除联系人失败" + e)
        }))) : t.cancel && console.log("用户点击取消")
      }
    })
  },
  reloadContactsData: function() {
    a(this)
  }
});