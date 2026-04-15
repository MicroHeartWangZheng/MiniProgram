var t = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  a = require("../../FA9D4A90AD7FA6DF9CFB2297F7F30E96.js"),
  e = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  i = require("../../22CF3566AD7FA6DF44A95D614D730E96.js"),
  r = require("mini-i18n"),
  s = require("../../2A6E79D2AD7FA6DF4C0811D564840E96.js");
Page({
  behaviors: [i.languageBehaviors],
  data: {
    cardtypeArr: [],
    model: {},
    cardTypeStr: "",
    cardTypeIdStr: "",
    countryTypeStr: "",
    countryTypeIdStr: "",
    countryTypeArr: [],
    nameStr: "",
    phoneStr: "",
    cardNumStr: "",
    visitorContactId: "",
    isMySelf: !1,
    isVip: 0,
    xieyiSeleced: !1,
    isHasSelf: !1,
    isCanChooseVip: !0,
    phoneInputType: "number"
  },
  onLoad: function(e) {
    var i, s = JSON.parse(e.data);
    null != s.isHasSelf ? (this.setData({
      model: s,
      isHasSelf: s.isHasSelf
    }), 1 == s.isTeamAppoint && (wx.setNavigationBarTitle({
      title: "添加团员"
    }), 1 == s.isEdit && (this.setData({
      nameStr: s.nameStr,
      phoneStr: s.phoneStr,
      cardNumStr: s.cardNumStr,
      cardTypeStr: s.cardTypeStr,
      cardTypeIdStr: s.documentType,
      countryTypeStr: s.countryTypeStr,
      countryTypeIdStr: s.countryTypeIdStr,
      isVip: s.isVip
    }), wx.setNavigationBarTitle({
      title: "修改团员信息"
    })))) : (i = this, (0, t.customerContactQueryPageList)().then((function(t) {
      if (200 == t.code) {
        for (var a = t.data.records, e = !1, r = 0; r < a.length; r++)
          if (1 === a[r].myself) {
            e = !0;
            break
          } i.setData({
          isHasSelf: e
        })
      } else wx.showToast({
        title: t.data.msg,
        icon: "none"
      })
    })).catch((function(t) {
      console.error("获取联系人失败" + t)
    })));
    var n = "zh_CN" == r.i18n.getLocales() ? a.cardTypeArr : a.cardTypeArrEn;
    1 == this.data.model.isTeamAppoint && 1 == this.data.model.isEdit ? this.setData({
      cardtypeArr: n
    }) : this.setData({
      cardTypeStr: n[0].text,
      cardTypeIdStr: n[0].id,
      cardtypeArr: n
    })
  },
  autoRefreshData: function(t) {
    this.setData({
      xieyiSeleced: !0
    })
  },
  radioLabChange: function(t) {
    var a = t.currentTarget.dataset.id;
    console.log(a), this.setData({
      isVip: a
    })
  },
  xieyiViewClick: function(t) {
    wx.navigateTo({
      url: "../contacts/privacyAgreement"
    })
  },
  chooseTureImgClick: function(t) {
    this.setData({
      isMySelf: !0
    })
  },
  chooseFalseImgClick: function(t) {
    this.setData({
      isMySelf: !1
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
    var a = this;
    if (this.setData({
        cardNumStr: t.detail.value,
        isCanChooseVip: !0
      }), console.log("证件号码输入eee"), "身份证" == this.data.cardTypeStr) {
      var i = (0, e.getAgeByCard)(this.data.cardNumStr);
      console.log("证件号码" + i), i > 18 ? this.setData({
        isCanChooseVip: !0
      }) : this.setData({
        isCanChooseVip: !1,
        isVip: 0
      }), 1 == this.data.model.isAddChild && i > 18 && wx.showModal({
        title: "提示",
        content: "您所添加的证件信息为非儿童，是否确认添加？请注意！若确认添加，所加信息将不会出现在儿童列表中。",
        cancelColor: "",
        showCancel: !0,
        success: function(t) {
          if (t.confirm);
          else if (t.cancel) return void a.setData({
            cardNumStr: ""
          })
        }
      })
    } else this.setData({
      isCanChooseVip: !0
    })
  },
  cardTypePickerChange: function(t) {
    var a = t.detail.value;
    this.setData({
      cardTypeStr: this.data.cardtypeArr[a].text,
      cardTypeIdStr: this.data.cardtypeArr[a].id,
      phoneInputType: "RLY0101" == this.data.cardtypeArr[a].id ? "number" : "text"
    })
  },
  cancleBtnClick: function(t) {
    wx.navigateBack({})
  },
  sureBtnClick: function(a) {
    var i = this,
      n = this.data.nameStr.replace(/\s+/g, ""),
      d = this.data.phoneStr.replace(/\s+/g, ""),
      o = this.data.cardNumStr.replace(/\s+/g, "");
    if (this.setData({
        nameStr: n,
        phoneStr: d,
        cardNumStr: o
      }), "" === this.data.nameStr)(0, e.toast)((0, r.t)("addContact.nameHint"));
    else if ("" === this.data.phoneStr)(0, e.toast)((0, r.t)("addContact.phoneHint"));
    else if (this.data.cardTypeIdStr.length <= 0)(0, e.toast)("请选择证件类型");
    else if ("身份证" != this.data.cardTypeStr || /^1[3456789]\d{9}$/.test(this.data.phoneStr))
      if ("身份证" == this.data.cardTypeStr || /^(?:\d-?){5,13}\d$/.test(this.data.phoneStr))
        if (this.data.cardNumStr.length < 5) "zh_CN" == this.data.currentLanguage ? (0, e.toast)("请输入正确的".concat(this.data.cardTypeStr, "号")) : (0, e.toast)((0, r.t)("addContact.idNumErr"));
        else if (0 == this.data.xieyiSeleced)(0, e.toast)((0, r.t)("addContact.readFirst"));
    else {
      if ("身份证" == this.data.cardTypeStr) {
        var c = this.data.cardNumStr;
        if (!s.checkIdCardNo(c)) return void("zh_CN" == this.data.currentLanguage ? (0, e.toast)("请输入正确的".concat(this.data.cardTypeStr, "号")) : (0, e.toast)((0, r.t)("addContact.idNumErr")))
      }
      "护照（Passport）" != this.data.cardTypeStr && this.setData({
        countryTypeIdStr: "",
        countryTypeStr: ""
      }), 1 == this.data.model.isTeamAppoint ? 1 == this.data.model.isEdit ? (0, t.updateTeamMember)(this.data.model.teamShareCode, this.data.nameStr, this.data.phoneStr, this.data.cardTypeIdStr, this.data.countryTypeIdStr, this.data.cardNumStr, this.data.model.detailId, this.data.isVip).then((function(t) {
        if (200 == t.code) {
          var a = getCurrentPages(),
            e = a[a.length - 2];
          wx.navigateBack({
            success: function() {
              e.reloadContactsData()
            }
          }), wx.showToast({
            title: "修改成功",
            icon: "none"
          })
        } else wx.showToast({
          title: t.msg,
          icon: "none"
        })
      })) : (0, t.addTeamMember)(this.data.model.teamShareCode, this.data.nameStr, this.data.phoneStr, this.data.cardTypeIdStr, this.data.countryTypeIdStr, this.data.cardNumStr, this.data.isVip).then((function(t) {
        if (200 == t.code) {
          var a = getCurrentPages(),
            e = a[a.length - 2];
          wx.navigateBack({
            success: function() {
              e.reloadContactsData()
            }
          }), wx.showToast({
            title: "添加成功",
            icon: "none"
          })
        } else wx.showToast({
          title: t.msg,
          icon: "none"
        })
      })) : "身份证" != this.data.cardTypeStr && 1 == this.data.model.isAddChild ? wx.showModal({
        title: "提示",
        content: "您所添加的证件信息为非儿童，是否确认添加？请注意！若确认添加，所加信息将不会出现在儿童列表中。",
        cancelColor: "",
        showCancel: !0,
        success: function(a) {
          if (a.confirm)(0, t.customerContactSave)(i.data.nameStr, i.data.phoneStr, i.data.cardTypeIdStr, i.data.countryTypeIdStr, i.data.cardNumStr, i.data.isVip, i.data.isMySelf ? 1 : 0).then((function(t) {
            if (200 == t.code) {
              var a = getCurrentPages(),
                e = a[a.length - 2];
              wx.navigateBack({
                success: function() {
                  e.reloadContactsData()
                }
              }), wx.showToast({
                title: "添加成功",
                icon: "none"
              })
            } else wx.showToast({
              title: t.msg,
              icon: "none"
            })
          }));
          else if (a.cancel) return void i.setData({
            cardNumStr: ""
          })
        }
      }) : ((0, e.showLoading)(), (0, t.customerContactSave)(this.data.nameStr, this.data.phoneStr, this.data.cardTypeIdStr, this.data.countryTypeIdStr, this.data.cardNumStr, this.data.isVip, this.data.isMySelf ? 1 : 0).then((function(t) {
        if ((0, e.hideLoading)(), 200 == t.code) {
          var a = getCurrentPages(),
            i = a[a.length - 2];
          wx.navigateBack({
            success: function() {
              i.reloadContactsData()
            }
          }), (0, e.toast)((0, r.t)("addContact.addSuccess"))
        } else wx.showToast({
          title: t.msg,
          icon: "none"
        })
      })).catch((function(t) {
        (0, e.hideLoading)(), (0, e.toast)("保存失败"), (0, e.onlineLog)("保存联系人失败，" + JSON.stringify(t))
      })))
    } else(0, e.toast)((0, r.t)("addContact.phoneErr"));
    else(0, e.toast)((0, r.t)("addContact.phoneErr"))
  }
});