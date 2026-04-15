var e = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  t = require("../../22CF3566AD7FA6DF44A95D614D730E96.js");
Page({
  behaviors: [t.languageBehaviors],
  data: {
    userModel: {}
  },
  onLoad: function() {
    this.queryCert()
  },
  onShow: function() {},
  reloadContactsData: function() {
    this.queryCert(!0)
  },
  cellviewClick: function(e) {
    var t = e.currentTarget.dataset.index;
    console.log(t);
    var a = {};
    1 == t ? a = {
      oldStr: this.data.userModel.customerName,
      titleStr: "姓名",
      showPhoneNew: "",
      hideCardNumStr: ""
    } : 2 == t && (a = {
      oldStr: this.data.userModel.hidePhoneNew,
      showPhoneNew: this.data.userModel.phoneNumber,
      titleStr: "手机号",
      hideCardNumStr: ""
    }), 3 == t && (a = {
      oldStr: this.data.userModel.documentTypeName,
      cardNumStr: this.data.userModel.documentNumber,
      hideCardNumStr: this.data.userModel.showDocumentNumber,
      cardTypeIdStr: this.data.userModel.documentType,
      titleStr: "证件号",
      showPhoneNew: ""
    }), 4 == t && (a = {
      oldStr: this.data.userModel.documentTypeName,
      cardNumStr: this.data.userModel.documentNumber,
      hideCardNumStr: this.data.userModel.showDocumentNumber,
      cardTypeIdStr: this.data.userModel.documentType,
      titleStr: "证件号",
      showPhoneNew: ""
    });
    var o = JSON.stringify(a);
    wx.navigateTo({
      url: "userInfoChange?data=" + o
    })
  },
  logoutClick: function() {
    (0, e.navigateTo)("logOutNotice", {
      phone: this.data.userModel.phoneNumber
    })
  },
  queryCert: function() {
    var e = this,
      t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    t ? getApp().userLogin().then((function(a) {
      e.getRealName(t)
    })).catch((function(a) {
      e.getRealName(t)
    })) : this.getRealName(t)
  },
  getRealName: function(t) {
    var a = this;
    (0, e.getRealNameInfo)((function(t) {
      t.hidePhoneNew = (0, e.hidePhoneNum)(t.phoneNumber), a.setData({
        userModel: t
      })
    }), null, t)
  }
});