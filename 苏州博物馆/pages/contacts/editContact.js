var t = require("mini-i18n"),
  e = require("../../22CF3566AD7FA6DF44A95D614D730E96.js"),
  a = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  r = a.queryContactByIdData,
  i = a.updateCustomerContact,
  n = (a.getDocumentTypeList, require("../../FA9D4A90AD7FA6DF9CFB2297F7F30E96.js")),
  o = n.cardTypeArr,
  s = n.cardTypeArrEn,
  c = require("../../2A6E79D2AD7FA6DF4C0811D564840E96.js");

function d(t, e) {
  r(e).then((function(e) {
    if (200 == e.code) {
      var a = t.data.cardtypeArr,
        r = e.data,
        i = "";
      a.forEach((function(t, e) {
        t.id == r.documentType && (i = t.text)
      })), t.setData({
        isEdite: !0,
        isHiddleUserBtn: !0,
        customerContactId: r.customerContactId,
        nameStr: r.contactName,
        phoneStr: r.contactPhone,
        cardNumStr: r.documentNumber,
        cardTypeStr: i,
        cardTypeIdStr: r.documentType,
        isVip: r.isPartyMember
      })
    } else wx.showToast({
      title: e.msg,
      icon: "none"
    })
  }))
}
Page({
  behaviors: [e.languageBehaviors],
  data: {
    cardtypeArr: [],
    cardtypeNameArr: [],
    cardTypeStr: "",
    countryTypeStr: "",
    countryTypeIdStr: "",
    countryTypeArr: [],
    cardTypeIdStr: "",
    nameStr: "",
    phoneStr: "",
    cardNumStr: "",
    isEdite: !1,
    visitorContactId: "",
    isUserState: !1,
    isHiddleUserBtn: !1,
    isVip: 0,
    xieyiSeleced: !1,
    isHasSelf: !1,
    model: {}
  },
  onLoad: function(e) {
    console.log(JSON.parse(e.data));
    var a = JSON.parse(e.data);
    this.setData({
      model: a,
      countryTypeStr: a.countryTypeStr,
      countryTypeIdStr: a.countryTypeIdStr,
      cardtypeArr: "zh_CN" == t.i18n.getLocales() ? o : s
    }), d(this, this.data.model.customerContactId)
  },
  autoRefreshData: function(t) {
    this.setData({
      xieyiSeleced: !0
    })
  },
  radioLabChange: function(t) {
    var e = t.currentTarget.dataset.id;
    console.log(e), this.setData({
      isVip: e
    })
  },
  xieyiViewClick: function(t) {
    wx.navigateTo({
      url: "../contacts/privacyAgreement"
    })
  },
  cancleBtnClick: function(t) {
    wx.navigateBack({})
  },
  chooseTureImgClick: function(t) {
    console.log("点击了本人按钮");
    var e = this.data.isUserState;
    e = 1 != e, this.setData({
      isUserState: e
    })
  },
  chooseFalseImgClick: function(t) {
    console.log("点击了本人按钮");
    var e = this.data.isUserState;
    e = 1 != e, this.setData({
      isUserState: e
    })
  },
  userNameInput: function(t) {
    this.setData({
      nameStr: t.detail.value
    })
  },
  phoneNumInput: function(t) {
    this.setData({
      phoneStr: t.detail.value
    })
  },
  cardNumInput: function(t) {
    this.setData({
      cardNumStr: t.detail.value
    })
  },
  cardTypePickerChange: function(t) {
    console.log(t.detail.value);
    var e = this.data.cardtypeArr[t.detail.value].text,
      a = this.data.cardtypeArr[t.detail.value].id;
    this.setData({
      cardTypeStr: e,
      cardTypeIdStr: a
    })
  },
  countryTypePickerChange: function(t) {
    var e = t.detail.value;
    this.setData({
      countryTypeStr: this.data.countryTypeArr[e].text,
      countryTypeIdStr: this.data.countryTypeArr[e].id
    })
  },
  canclebtnClick: function(t) {
    wx.navigateBack({})
  },
  sureBtnClick: function(t) {
    var e = this.data.phoneStr.replace(/\s+/g, ""),
      a = "";
    for (var r in e) 8236 != e[r].charCodeAt() && 8237 != e[r].charCodeAt() && (a += e[r]);
    if (this.setData({
        phoneStr: a
      }), console.log(this.data.phoneStr.length), this.data.nameStr.length <= 0) wx.showToast({
      title: "请输入与证件一致的姓名",
      icon: "none"
    });
    else if ("" == this.data.phoneStr) wx.showToast({
      title: "请先输入手机号码",
      icon: "none"
    });
    else if (/^1[3456789]\d{9}$/.test(this.data.phoneStr))
      if (this.data.cardTypeIdStr.length <= 0) wx.showToast({
        title: "请选择证件类型",
        icon: "none"
      });
      else if (this.data.cardNumStr.length < 5) wx.showToast({
      title: "请填写正确的证件号码",
      icon: "none"
    });
    else if (0 == this.data.xieyiSeleced) wx.showToast({
      title: "请先阅读并同意隐私协议",
      icon: "none"
    });
    else {
      if (console.log(this.data.cardTypeStr), "身份证" == this.data.cardTypeStr) {
        var n = this.data.cardNumStr;
        if (!c.checkIdCardNo(n)) return void wx.showToast({
          title: "证件号码输入有误",
          icon: "none"
        })
      }
      1 == this.data.isEdite && i(this.data.customerContactId, this.data.nameStr, this.data.phoneStr, this.data.cardTypeIdStr, this.data.countryTypeIdStr, this.data.cardNumStr, this.data.isVip, 0).then((function(t) {
        if (200 == t.code) {
          var e = getCurrentPages(),
            a = e[e.length - 2];
          wx.navigateBack({
            success: function() {
              a.reloadContactsData()
            }
          }), wx.showToast({
            title: "修改成功",
            icon: "none"
          })
        } else wx.showToast({
          title: t.msg,
          icon: "none"
        })
      })).catch((function(t) {
        console.error("添加联系人失败" + t)
      }))
    } else wx.showToast({
      title: "请输入正确的手机号",
      icon: "none"
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {}
});