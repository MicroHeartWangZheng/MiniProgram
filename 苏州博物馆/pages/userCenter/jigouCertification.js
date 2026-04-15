var e = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  t = require("../../AC0CE581AD7FA6DFCA6A8D86B5E30E96.js"),
  a = require("../../FA9D4A90AD7FA6DF9CFB2297F7F30E96.js"),
  i = function(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
      default: e
    };
    var a = o(t);
    if (a && a.has(e)) return a.get(e);
    var i = {},
      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var r in e)
      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
        var s = n ? Object.getOwnPropertyDescriptor(e, r) : null;
        s && (s.get || s.set) ? Object.defineProperty(i, r, s) : i[r] = e[r]
      } i.default = e, a && a.set(e, i);
    return i
  }(require("../../C070D367AD7FA6DFA616BB605C640E96.js")),
  n = require("../../22CF3566AD7FA6DF44A95D614D730E96.js");

function o(e) {
  if ("function" != typeof WeakMap) return null;
  var t = new WeakMap,
    a = new WeakMap;
  return (o = function(e) {
    return e ? a : t
  })(e)
}
require("../../2A6E79D2AD7FA6DF4C0811D564840E96.js");
Page({
  behaviors: [n.languageBehaviors],
  data: {
    model: {},
    jigouTypeArr: [],
    jigouTypeStr: "",
    jigouTypeIdStr: "",
    jigouTypeDict: {},
    jigouNameStr: "",
    jigouIdStr: "",
    farenNameStr: "",
    farenIdStr: "",
    qiyeNameStr: "",
    qiyeIdStr: "",
    jigouImg: "",
    yewuImg: "",
    farenCardImg1: "",
    farenCardImg2: "",
    lianxirenCardImg1: "",
    lianxirenCardImg2: "",
    renzhenImg: "",
    ziliaoType: 1,
    isHiddenCardType: !1
  },
  onLoad: function(t) {
    var a;
    a = this, (0, e.queryCurrentCertification)().then((function(e) {
        if (200 == e.code) {
          var t = e.data;
          t.hiddenShenq = !1, t.reasonTitle = "", 0 == t.status ? (t.reserveStatusStr = "待审核", t.hiddenShenq = !0) : 1 == t.status ? (t.reserveStatusStr = "审核中", t.reserveStatusImg = "../../images/center/shenhezhong.png", t.hiddenShenq = !0) : 2 == t.status ? (t.reserveStatusStr = "上传成功", t.reserveStatusImg = "../../images/center/shenhetongguo.png", t.hiddenShenq = !0) : 3 == t.status ? (t.reserveStatusStr = "已拒绝", t.reasonTitle = "拒绝原因", t.hiddenShenq = !1, t.reserveStatusImg = "../../images/center/yijujue.png") : 4 == t.status && (t.reserveStatusStr = "已解约", t.reasonTitle = "解约原因", t.hiddenShenq = !1, t.reserveStatusImg = "../../images/center/yijieyue.png"), "其他" != t.agencyTypeStr && a.setData({
            isHiddenCardType: !0
          }), a.setData({
            model: t,
            jigouTypeIdStr: t.agencyType,
            jigouTypeStr: t.agencyTypeStr,
            jigouNameStr: t.agencyName,
            jigouIdStr: t.creditCode,
            jigouImg: t.businessLicense,
            qiyeNameStr: t.contactName,
            qiyeIdStr: t.contactDocumentNumber,
            lianxirenCardImg1: t.contactFrontCard,
            lianxirenCardImg2: t.contactReverseCard,
            renzhenImg: t.officialLetter,
            ziliaoType: t.dataType
          })
        } else wx.showToast({
          title: e.msg,
          icon: "none"
        })
      })),
      function(t) {
        wx.showLoading({
          title: "加载中...",
          mask: !0
        }), (0, e.getAgencyTypeList)().then((function(e) {
          wx.hideLoading(), 200 === e.code && t.setData({
            jigouTypeArr: e.data
          })
        }))
      }(this)
  },
  onReady: function() {},
  onShow: function() {},
  ziliaoTypeViewClick: function(e) {
    if (console.log(e), 1 != this.data.model.hiddenShenq) {
      var t = e.currentTarget.dataset.index;
      1 == t ? this.setData({
        ziliaoType: 1
      }) : 2 == t && this.setData({
        ziliaoType: 2
      })
    }
  },
  inputClick: function(e) {
    console.log(e.target.dataset.index);
    var t = e.target.dataset.index;
    1 == t ? this.setData({
      jigouNameStr: e.detail.value
    }) : 2 == t ? this.setData({
      jigouIdStr: e.detail.value
    }) : 3 == t ? this.setData({
      farenNameStr: e.detail.value
    }) : 4 == t ? this.setData({
      farenIdStr: e.detail.value
    }) : 5 == t ? this.setData({
      qiyeNameStr: e.detail.value
    }) : 6 == t && this.setData({
      qiyeIdStr: e.detail.value
    })
  },
  jigouTypePickerChange: function(e) {
    console.log(e.detail.value);
    var t = e.detail.value;
    this.setData({
      jigouTypeDict: this.data.jigouTypeArr[t],
      jigouTypeStr: this.data.jigouTypeArr[t].text,
      jigouTypeIdStr: this.data.jigouTypeArr[t].id
    }), "其他" == this.data.jigouTypeStr ? this.setData({
      isHiddenCardType: !1,
      ziliaoType: 1
    }) : this.setData({
      isHiddenCardType: !0,
      ziliaoType: 1
    })
  },
  appointBtnClick: function(t) {
    var a = this,
      i = this;
    if (this.data.jigouTypeStr.length <= 0) wx.showToast({
      title: "请选择机构类型",
      icon: "none"
    });
    else if (this.data.jigouNameStr.length <= 0) wx.showToast({
      title: "请输入机构名称",
      icon: "none"
    });
    else if (this.data.jigouIdStr.length <= 0) "机关部委" == this.data.jigouTypeStr ? wx.showToast({
      title: "请输入组织机构代码",
      icon: "none"
    }) : wx.showToast({
      title: "请输入统一社会信用代码",
      icon: "none"
    });
    else if (this.data.jigouImg.length <= 0 && "旅行社" == this.data.jigouTypeStr) wx.showToast({
      title: "请上传机构营业执照",
      icon: "none"
    });
    else if (this.data.renzhenImg.length <= 0 && "旅行社" != this.data.jigouTypeStr) wx.showToast({
      title: "请上传介绍信",
      icon: "none"
    });
    else {
      i = this;
      wx.showModal({
        title: "提示",
        content: "修改资料后需要重新审核才允许再次预约，是否修改？",
        showCancel: !0,
        success: function(t) {
          t.confirm && (0, e.reSubmitOrganizationCertification)(a.data.jigouTypeIdStr, a.data.jigouNameStr, a.data.jigouIdStr, a.data.jigouImg, a.data.qiyeNameStr, a.data.qiyeIdStr, a.data.lianxirenCardImg1, a.data.lianxirenCardImg2, a.data.renzhenImg, i.data.model.agencyId, a.data.ziliaoType).then((function(e) {
            200 == e.code ? wx.showModal({
              title: "提示",
              content: "团队注册材料重新提交成功，所提交资料将在48小时内完成审核，审核未通过前将不能进行预约操作，请留意审核结果。",
              showCancel: !1,
              success: function(e) {
                e.confirm && wx.navigateBack({})
              }
            }) : wx.showToast({
              title: e.msg,
              icon: "none"
            })
          }))
        }
      })
    }
  },
  cellImgClick: function(e) {
    console.log(e.target.dataset.index);
    var n = e.target.dataset.index;
    if (!this.data.model.hiddenShenq) {
      var o = this;
      wx.chooseMedia({
        count: 1,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        camera: "back",
        success: function(e) {
          console.log(e);
          var r = e.tempFiles[0].tempFilePath;
          console.log("件路径列表" + r), wx.uploadFile({
            filePath: r,
            name: "trackData",
            header: {
              appId: i.appId,
              token: (0, i.default)(),
              systemId: a.systemId,
              "Content-Type": "multipart/form-data"
            },
            formData: {
              code: "TRM_COMPANY_PHOTO"
            },
            url: t.api.file + "file/normalUploadByCode/TRM_COMPANY_PHOTO/FKYY/" + a.systemId,
            success: function(e) {
              if (413 != e.statusCode && null != e.data) {
                var a = JSON.parse(e.data);
                200 == a.code ? (console.log("上传成功", a.data.filePath + a.data.fileName), r = t.api.fileLoad + a.data.filePath + a.data.fileName, 1 == n ? o.setData({
                  jigouImg: r
                }) : 2 == n ? o.setData({
                  yewuImg: r
                }) : 3 == n ? o.setData({
                  farenCardImg1: r
                }) : 4 == n ? o.setData({
                  farenCardImg2: r
                }) : 5 == n ? o.setData({
                  lianxirenCardImg1: r
                }) : 6 == n ? o.setData({
                  lianxirenCardImg2: r
                }) : 7 == n && o.setData({
                  renzhenImg: r
                })) : wx.showToast({
                  title: "请上传小于1M的图片"
                })
              } else wx.showToast({
                title: "请上传小于1M的图片",
                icon: "none"
              })
            },
            fail: function(e) {
              console.error("上传失败", e)
            }
          })
        }
      })
    }
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});