var a = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  t = require("../../FA9D4A90AD7FA6DF9CFB2297F7F30E96.js"),
  e = require("../../22CF3566AD7FA6DF44A95D614D730E96.js"),
  r = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  i = require("mini-i18n"),
  n = require("../../2A6E79D2AD7FA6DF4C0811D564840E96.js");
Page({
  behaviors: [e.languageBehaviors],
  data: {
    cardtypeArr: [],
    cardTypeStr: "",
    cardTypeIdStr: "",
    nameStr: "",
    cardNumStr: "",
    pageUrl: "",
    xieyiSeleced: !1
  },
  onLoad: function(a) {
    "0" == a.pageUrl && this.setData({
      pageUrl: "../appointment/home?isTeamAppoint=false"
    });
    var e = "zh_CN" == i.i18n.getLocales() ? t.cardTypeArr : t.cardTypeArrEn;
    this.setData({
      cardtypeArr: e,
      cardTypeStr: e[0].text,
      cardTypeIdStr: e[0].id
    })
  },
  autoRefreshData: function(a) {
    this.setData({
      xieyiSeleced: !0
    })
  },
  onShow: function() {},
  xieyiViewClick: function(a) {
    wx.navigateTo({
      url: "../contacts/privacyAgreement"
    })
  },
  userNameInput: function(a) {
    this.setData({
      nameStr: a.detail.value
    })
  },
  cardNumInput: function(a) {
    this.setData({
      cardNumStr: a.detail.value
    })
  },
  cardTypePickerChange: function(a) {
    console.log(a.detail.value);
    var t = a.detail.value;
    this.setData({
      cardTypeStr: this.data.cardtypeArr[t].text,
      cardTypeIdStr: this.data.cardtypeArr[t].id
    })
  },
  surebtnClick: function(t) {
    var e = this.data.nameStr.replace(/\s+/g, ""),
      s = this.data.cardNumStr.replace(/\s+/g, "");
    this.setData({
      nameStr: e,
      cardNumStr: s
    });
    var c = this;
    if (this.data.nameStr.length <= 0)(0, r.toast)((0, i.t)("realNameCertification.nameHint"));
    else if (this.data.cardTypeIdStr.length <= 0) wx.showToast({
      title: "请选择证件类型",
      icon: "none"
    });
    else if (this.data.cardNumStr.length < 5)(0, r.toast)((0, i.t)("realNameCertification.idNumHint"));
    else if (0 == this.data.xieyiSeleced)(0, r.toast)((0, i.t)("realNameCertification.readFirst"));
    else {
      if (console.log(this.data.cardTypeStr), "身份证" == this.data.cardTypeStr) {
        var o = this.data.cardNumStr;
        if (!n.checkIdCardNo(o)) return void("zh_CN" == this.data.currentLanguage ? (0, r.toast)("请输入正确的".concat(this.data.cardTypeStr, "号")) : (0, r.toast)((0, i.t)("realNameCertification.idNumErr")))
      }(0, r.showLoading)(), (0, a.saveCert)(this.data.nameStr, this.data.cardTypeIdStr, this.data.cardNumStr).then((function(a) {
        if ((0, r.hideLoading)(), 200 == a.code && null != a.data) {
          console.log("实名认证成功，保存本地缓存");
          var t = a.data;
          t.contactName = t.customerName, t.documentNumberFull = t.showDocumentNumber, t.contactPhoneFull = t.phoneNumber, t.myself = 1, getApp().globalData.userInfo = t, wx.setStorage({
            key: getApp().globalData.openId + "__realName",
            data: JSON.stringify(a.data)
          }), wx.showToast({
            title: (0, i.t)("realNameCertification.success"),
            complete: function() {
              if ("" != c.data.pageUrl) wx.redirectTo({
                url: c.data.pageUrl
              });
              else {
                var a = getCurrentPages(),
                  t = a[a.length - 2];
                wx.navigateBack({
                  success: function() {
                    null != t.reloadContactsData && t.reloadContactsData()
                  }
                })
              }
            }
          })
        } else wx.showToast({
          title: a.msg,
          icon: "none"
        })
      })).catch((function(a) {
        wx.hideLoading(), console.error("实名认证失败" + a)
      }))
    }
  }
});