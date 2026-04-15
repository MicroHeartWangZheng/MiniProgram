var e = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  a = require("../../22CF3566AD7FA6DF44A95D614D730E96.js"),
  t = "";
Page({
  behaviors: [a.languageBehaviors],
  data: {
    privacyAgreementChecked: !1
  },
  onLoad: function(e) {
    t = e.phone
  },
  privacyAgreementCheckedChange: function() {
    this.setData({
      privacyAgreementChecked: !this.data.privacyAgreementChecked
    })
  },
  sureBtnClick: function() {
    (0, e.navigateTo)("logout", {
      phone: t
    })
  }
});