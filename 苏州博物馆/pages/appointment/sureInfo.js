var t = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  e = require("../../22CF3566AD7FA6DF44A95D614D730E96.js");

Page({
  behaviors: [e.languageBehaviors],
  data: {
    draft: null,
    maxCount: 5,
    selectedContactsArr: []
  },
  onShow: function() {
    this._syncDraft()
  },
  /**
   * 从全局草稿同步展示数据
   */
  _syncDraft: function() {
    var e = getApp().globalData.personalReserveDraft;
    e ? this.setData({
      draft: e,
      maxCount: (getApp().globalData.personalReserveRule || {}).everyMaxNumber || (getApp().globalData.personalReserveRule || {}).maxNumber || 5
    }) : this.setData({
      draft: null
    })
  },
  /**
   * 跳转选择参观者
   */
  goSelectContacts: function() {
    var a = this.data,
      i = a.maxCount,
      n = a.draft;
    if (!n) return void(0, t.toast)("缺少预约信息，请返回重选时段");
    var o = {
      maxCount: i,
      selectDataArr: this.data.selectedContactsArr || [],
      allAddChildArr: [],
      isAddChild: !1,
      leaderContactId: "",
      addIndex: 999,
      isExhibitionChoose: !1,
      ticketid: "",
      ticketInfo: {},
      vipId: "",
      from: ""
    };
    wx.navigateTo({
      url: "../contacts/selectContacts?data=" + encodeURIComponent(JSON.stringify(o))
    })
  },
  /**
   * 返回重选日期
   */
  goBackHome: function() {
    wx.navigateBack({
      delta: 2
    })
  }
});
