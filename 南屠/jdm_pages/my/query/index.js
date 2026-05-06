var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  i = require("../../../46BCF2769CEDE14F20DA9A714F2AA3A7.js"),
  o = require("../../../42DF72329CEDE14F24B91A35674AA3A7.js");
require("../../../F13970549CEDE14F975F18534C3AA3A7.js"), require("../../../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../../../E6064C639CEDE14F806024649ACAA3A7.js"), require("../../../99A56A709CEDE14FFFC30277932AA3A7.js"), require("../../../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../../../2800CA079CEDE14F4E66A20028DAA3A7.js");
var n = {
  components: {
    dialogInfo: function() {
      return "../../../components/dialogInfo.js"
    }
  },
  computed: {
    visitorIdType: function() {
      var e = this,
        t = this.typeList.find((function(t) {
          return t.value == e.form.visitorIdType
        }));
      return t ? t.name : null
    },
    title: function() {
      return "add" == this.popType ? "新增常用联系人" : "edit" == this.popType ? "编辑常用联系人" : void 0
    }
  },
  data: function() {
    return {
      fieldList2: [],
      fieldList: [],
      differenceList: [{
        name: "无优待证件",
        value: 0
      }, {
        name: "老年人",
        value: 1
      }, {
        name: "献血荣誉证书持有者",
        value: 2
      }, {
        name: "消防救援人员",
        value: 3
      }, {
        name: "医务人员",
        value: 4
      }, {
        name: "残疾人",
        value: 5
      }, {
        name: "退役军人",
        value: 6
      }, {
        name: "“三属”",
        value: 7
      }],
      typeId: 1,
      typeList: [{
        name: "居民身份证",
        value: 1
      }, {
        name: "港澳居民来往内地通行证",
        value: 2
      }, {
        name: "台湾居民来往大陆通行证",
        value: 3
      }, {
        name: "护照",
        value: 4
      }, {
        name: "中华人民共和国外国人永久居留身份证",
        value: 5
      }],
      content: "<p>特殊群体免预约与绑定:</p><p>未成年人(未满18周岁)、消防员、退伍军人、现役军人在参观时，无需进行预约，也无需绑定用户信息，直接凭有效身份证明入场。</p><p><br></p><p>优待人群参观规定:</p><p>1、65周岁(含)及以上老年人</p><p>老年人参观时须携带本人有效身份证件(如身份证、户口本等)，需有一名65周岁以下的监护人陪同。老年人及其监护人需同步完成预约流程，同步走优待预约通道。监护人信息包括但不限于姓名、联系方式等，以确保紧急情况下的及时联系与协助。</p><p>2、献血荣誉证书持有者:献血荣誉证书持有者需携带本人有效身份证件及国家颁发的有效献血荣誉证书，作为享受优待的凭证，入园时出示给工作人员核验。</p><p>3、道德模范:</p><p>道德模范需携带本人有效身份证件及由相关部门颁发的道德模范证书，以确认其身份，并凭此文件入园。</p><p>4、医务人员:</p><p>医务人员需携带本人有效身份证件及本人的工作证件(如医师执业证书、护士执业证书等)，以享受优待入园政策。</p><p>5、残障人士:</p><p>残障人士需携带本人有效身份证件、残疾人证或其他有效残障证明文件，以享受优待入园政策。</p><p><br></p><p>注意事项:</p><p>上述特殊人、优待人群仅适用于持有身份证的中国人，在入园时，请主动向工作人员出示相关身份证件或证明文件，以便快速核验井享受优待政策。</p><p>如遇证件遗失或无法提供有效证明文件的情况，可能需按照普通游客的流程进行预约和购票入园。</p><p>园区保留对优待政策的最终解释权，并根据实际情况进行适时调整。</p>",
      styles: {
        color: "#2C2C2C",
        backgroundColor: "#F9F9F9",
        disableColor: "#F7F6F6",
        borderColor: "#F9F9F9"
      },
      closeImg: this.$utils.getImgUrl("room/close.png"),
      placeholderStyle: "font-size:28rpx;color:#B5B5B6;",
      form: {
        visitorName: "",
        phone: "",
        visitorIdNo: "",
        detailCode: "",
        visitorIdType: 1,
        isDefault: 0
      },
      isMobile: !1,
      isCredentialsCode: !1,
      editId: null,
      isAdd: !0,
      certList: ["身份证"],
      certIndex: 0,
      popType: null
    }
  },
  methods: {
    openSelect: function() {
      this.$refs.popupSelect.open()
    },
    changeType: function(e) {
      this.$set(this.form, "visitorIdType", e)
    },
    showTip: function() {
      this.$refs.dialogInfo.open({
        title: "观众绑定及参观说明",
        isHtml: !0,
        content: this.content,
        btn: "我已知晓"
      })
    },
    open: function(e, t) {
      this.popType = t, e ? this.getDetails(e.id) : (this.editId = "", this.form = {
        visitorName: "",
        phone: "",
        visitorIdNo: "",
        detailCode: "",
        visitorIdType: 1,
        isDefault: 0
      }), this.$refs.dialog.open()
    },
    changeFn: function(e) {
      var t = e.detail.value;
      this.form.isDefault = t ? 1 : 0
    },
    getDetails: function(e) {
      var t = this;
      this.isMobile = !0, this.isCredentialsCode = !0, this.editId = e, queryDetailContact({
        id: e
      }).then((function(e) {
        1e3 == e.code && (t.form = {
          visitorName: e.data.visitorName,
          phone: e.data.phone,
          visitorIdNo: e.data.visitorIdNo,
          visitorIdType: e.data.visitorIdType,
          isDefault: e.data.isDefault
        })
      }))
    },
    mobileVerification: function(e) {
      e.detail.value && (/^1[3456789]\d{9}$/.test(e.detail.value) ? this.isMobile = !0 : (t.index.showToast({
        title: "手机号码格式不正确",
        icon: "none"
      }), this.isMobile = !1))
    },
    creVerification: function(e) {
      e.detail.value && (/^[1-9]\d{5}(18|19|20|21|22)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|[Xx])$/.test(e.detail.value) ? this.isCredentialsCode = !0 : (t.index.showToast({
        title: "身份证号码格式不正确",
        icon: "none"
      }), this.isCredentialsCode = !1))
    },
    save: function() {
      var o = this;
      if (this.isAdd)
        if (this.form.visitorName)
          if (this.form.visitorIdNo)
            if (this.form.detailCode)
              if (!this.form.visitorIdNo || this.isCredentialsCode) {
                var n = e(e({}, this.form), {}, {
                  visitorIdTypeName: {
                    1: "身份证",
                    2: "港澳居民来往内地通行证（回乡证）",
                    3: "台湾居民来往大陆通行证（台胞证）",
                    4: "护照（非中国国籍）",
                    5: "中华人民共和国外国人永久居留身份证"
                  } [this.form.visitorIdType]
                });
                i.appointmentQuery(n).then((function(e) {
                  if (1e3 == e.code) {
                    var t = [{
                      name: "预约场馆",
                      value: e.data.hallName
                    }, {
                      name: "预约时段",
                      value: "".concat(e.data.visitDate, " ").concat(e.data.timeSharingStart, "-").concat(e.data.timeSharingEnd)
                    }, {
                      name: "预约状态",
                      value: e.data.childOrderStatusName
                    }];
                    o.$set(o, "fieldList", t)
                  }
                }))
              } else t.index.showToast({
                title: "身份信息有误，请修改后重新提交",
                icon: "none"
              });
      else t.index.showToast({
        title: "请输入子订单编号!",
        icon: "none"
      });
      else t.index.showToast({
        title: "请输入证件号码!",
        icon: "none"
      });
      else t.index.showToast({
        title: "请输入姓名!",
        icon: "none"
      })
    },
    close: function() {
      this.$refs.dialog.close()
    },
    bindPickerChange: function(e) {}
  }
};
Array || (t.resolveComponent("page-head") + t.resolveComponent("uni-easyinput") + t.resolveComponent("uni-popup-select") + t.resolveComponent("dialogInfo"))(), Math || (function() {
  return "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js"
} + function() {
  return "../../../uni_modules/uni-popup-select/components/uni-popup-select/uni-popup-select.js"
})();
var s = t._export_sfc(n, [
  ["render", function(e, i, n, s, a, r) {
    return t.e({
      a: t.p({
        title: "查询预约"
      }),
      b: a.form.visitorIdType
    }, a.form.visitorIdType ? {
      c: t.t(r.visitorIdType)
    } : {}, {
      d: o._imports_0$7,
      e: t.o((function() {
        return r.openSelect && r.openSelect.apply(r, arguments)
      })),
      f: t.o((function(e) {
        return a.form.visitorName = e
      })),
      g: t.p({
        maxlength: "11",
        styles: a.styles,
        placeholderStyle: a.placeholderStyle,
        inputBorder: !1,
        clearable: !1,
        errorMessage: !0,
        placeholder: "请填写姓名",
        modelValue: a.form.visitorName
      }),
      h: t.o(r.creVerification),
      i: t.o((function(e) {
        return a.form.visitorIdNo = e
      })),
      j: t.p({
        maxlength: "70",
        styles: a.styles,
        placeholderStyle: a.placeholderStyle,
        inputBorder: !1,
        clearable: !1,
        errorMessage: !0,
        placeholder: "请填写证件号码",
        modelValue: a.form.visitorIdNo
      }),
      k: t.o((function(e) {
        return a.form.detailCode = e
      })),
      l: t.p({
        maxlength: "70",
        styles: a.styles,
        placeholderStyle: a.placeholderStyle,
        inputBorder: !1,
        clearable: !1,
        errorMessage: !0,
        placeholder: "请填写子订单编码",
        modelValue: a.form.detailCode
      }),
      m: t.o((function() {
        return r.save && r.save.apply(r, arguments)
      })),
      n: a.fieldList && a.fieldList.length > 0
    }, a.fieldList && a.fieldList.length > 0 ? {
      o: t.f(a.fieldList, (function(e, i, o) {
        return {
          a: t.t(e.name),
          b: t.t(e.value),
          c: i
        }
      }))
    } : {}, {
      p: t.sr("popupSelect", "e019be1d-4"),
      q: t.o(r.changeType),
      r: t.o((function(e) {
        return a.typeId = e
      })),
      s: t.p({
        subTitle: "",
        safeArea: !1,
        dataList: a.typeList,
        value: a.typeId
      }),
      t: t.sr("dialogInfo", "e019be1d-5")
    })
  }],
  ["__scopeId", "data-v-e019be1d"]
]);
wx.createPage(s);