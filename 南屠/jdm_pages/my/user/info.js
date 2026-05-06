var i = require("../../../@babel/runtime/helpers/objectSpread2"),
  e = require("../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  t = require("../../../46BCF2769CEDE14F20DA9A714F2AA3A7.js"),
  o = require("../../../B5FE78D69CEDE14FD39810D1421AA3A7.js"),
  s = require("../../../42DF72329CEDE14F24B91A35674AA3A7.js");
require("../../../F13970549CEDE14F975F18534C3AA3A7.js"), require("../../../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../../../E6064C639CEDE14F806024649ACAA3A7.js"), require("../../../99A56A709CEDE14FFFC30277932AA3A7.js"), require("../../../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../../../2800CA079CEDE14F4E66A20028DAA3A7.js");
var r = {
  components: {
    dialogInfo: function() {
      return "../../../components/dialogInfo.js"
    },
    dialogInfo2: function() {
      return "./components/dialogInfo.js"
    },
    uploadImg: function() {
      return "../../components/upload.js"
    },
    CountrySelect: function() {
      return "../../components/countrySelect.js"
    },
    dialogWrap: function() {
      return "../../../components/dialogWrap.js"
    },
    expBlood: function() {
      return "./components/expBlood.js"
    },
    uploadList: function() {
      return "../../components/uploadList.js"
    }
  },
  computed: {
    visitorIdType: function() {
      var i = this,
        e = this.typeList.find((function(e) {
          return e.value == i.form.visitorIdType
        }));
      return e ? e.name : null
    },
    differenceList: function() {
      var i = null;
      return 1 == this.form.visitorIdType ? i = this.differenceListN : 5 == this.form.visitorIdType && (i = this.differenceListW), i
    },
    title: function() {
      return "add" == this.popType ? "新增常用联系人" : "edit" == this.popType ? "编辑常用联系人" : void 0
    },
    isBtn: function() {
      return !(!this.form.visitorName || !this.form.visitorIdNo || 4 == this.form.visitorIdType && !this.form.nationality || (!this.form.specialType || this.form.specialType - 1 > 0) && !this.form.specialCertUrl && 0 != this.form.specialType)
    }
  },
  data: function() {
    return {
      isChildren: !1,
      portList: {
        visitorSaveGa: t.visitorSaveGa,
        visitorSaveHz: t.visitorSaveHz,
        visitorSaveSfz: t.visitorSaveSfz,
        visitorSaveSfzYd: t.visitorSaveSfzYd,
        visitorSaveSfzet: t.visitorSaveSfzet,
        visitorSaveSfzlr: t.visitorSaveSfzlr,
        visitorSaveTw: t.visitorSaveTw,
        visitorSaveYj: t.visitorSaveYj,
        visitorSaveYjYd: t.visitorSaveYjYd,
        visitorSaveYjet: t.visitorSaveYjet,
        visitorSaveYjlr: t.visitorSaveYjlr,
        visitorUpdate: t.visitorUpdate
      },
      countryItem: {
        bind: "nationality",
        bindName: "nationalityName",
        placeHolder: "选择国籍",
        name: "国籍"
      },
      age: 0,
      fileItem: {
        bind: "specialCertUrl",
        name: "献血证"
      },
      differenceListW: [{
        name: "无优待证件",
        value: 0
      }, {
        name: "老年人",
        value: 1
      }],
      differenceListN: [{
        name: "无优待证件",
        value: 0
      }, {
        name: "老年人",
        value: 1
      }, {
        name: "残障人士",
        value: 5
      }, {
        name: "消防救援人员",
        value: 6
      }, {
        name: "退役军人",
        value: 4
      }, {
        name: "献血荣誉证书持有者",
        value: 2
      }, {
        name: "医务人员",
        value: 3
      }, {
        name: "烈士遗属、因公牺牲军人遗属、病故军人遗属",
        value: 7
      }, {
        name: "残障人士",
        value: 8
      }, {
        name: "烈士遗属、因公牺牲军人遗属、病故军人遗属",
        value: 9
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
        name: "中华人民共和国外国人永久居留身份证",
        value: 5
      }, {
        name: "护照",
        value: 4
      }],
      content: "<p>特殊群体免预约与绑定:</p><p>未成年人(未满18周岁)、消防员、退伍军人、现役军人在参观时，无需进行预约，也无需绑定用户信息，直接凭有效身份证明入场。</p><p><br></p><p>优待人群参观规定:</p><p>1、65周岁(含)及以上老年人</p><p>老年人参观时须携带本人有效身份证件(如身份证、户口本等)，需有一名65周岁以下的监护人陪同。老年人及其监护人需同步完成预约流程，同步走优待预约通道。监护人信息包括但不限于姓名、联系方式等，以确保紧急情况下的及时联系与协助。</p><p>2、献血荣誉证书持有者:献血荣誉证书持有者需携带本人有效身份证件及国家颁发的有效献血荣誉证书，作为享受优待的凭证，入园时出示给工作人员核验。</p><p>3、道德模范:</p><p>道德模范需携带本人有效身份证件及由相关部门颁发的道德模范证书，以确认其身份，并凭此文件入园。</p><p>4、医务人员:</p><p>医务人员需携带本人有效身份证件及本人的工作证件(如医师执业证书、护士执业证书等)，以享受优待入园政策。</p><p>5、残障人士:</p><p>残障人士需携带本人有效身份证件、残疾人证或其他有效残障证明文件，以享受优待入园政策。</p><p><br></p><p>注意事项:</p><p>上述特殊人、优待人群仅适用于持有身份证的中国人，在入园时，请主动向工作人员出示相关身份证件或证明文件，以便快速核验井享受优待政策。</p><p>如遇证件遗失或无法提供有效证明文件的情况，可能需按照普通游客的流程进行预约和购票入园。</p><p>园区保留对优待政策的最终解释权，并根据实际情况进行适时调整。</p>",
      contentUpload: "<p>残疾人：可提供残疾人证</p><p><br></p><p>退役军人：可提供中华人民共和国退役军人优待证</p><p><br></p><p>烈士遗属、因公牺牲军人遗属、病故军人遗属：可提供中华人民共和国烈士遗属、因公牺牲军人遗属、病故军人遗属、因公牺牲军人遗属、病故军人遗属优待证</p><p><br></p><p>消防救援人员：可提供国家综合性消防救援队伍干部证、国家综合性消防救援队伍消防员证</p><p><br></p><p>献血荣誉证持有者：可提供献血荣誉证（三免卡）、国家无偿献血奉献奖、无偿捐献造血干细胞奖、无偿献血志愿服务终身荣誉奖或献血记录超过4000ml</p><p><br></p><p>医务人员：可提供医师资格证或执业证、注册护士资格证或执业证、执业药师证、临床医学检验技士或技师以上证件、医院工作证</p>",
      styles: {
        color: "#2C2C2C",
        backgroundColor: "#f2f2f2",
        disableColor: "#f2f2f2",
        borderColor: "#f2f2f2"
      },
      closeImg: this.$utils.getImgUrl("room/close.png"),
      placeholderStyle: "font-size:28rpx;color:#B5B5B6;",
      form: {
        visitorName: "",
        phone: "",
        visitorIdNo: "",
        visitorIdType: 1,
        isDefault: 0,
        specialType: 0,
        specialCertUrl: "",
        birthdate: ""
      },
      isEdit: null,
      isMobile: !1,
      isCredentialsCode: !1,
      editId: null,
      isAdd: !0,
      popType: null,
      isLoading: !1,
      saveConfig: {},
      maxDate: "",
      isclers: !1,
      differenceListisclers: [{
        name: "无优待证件",
        value: 0
      }, {
        name: "老年人",
        value: 1
      }],
      tyjr: "",
      listmb: [],
      listxx: [],
      timer: null,
      time: 5
    }
  },
  onLoad: function(i) {
    if (i.data) {
      var e = JSON.parse(i.data);
      e.specialCertUrl = "", 3 != e.sfzAuditStatus && (e.visitorIdNo = ""), this.form = e, this.isEdit = !0
    } else this.isEdit = !1;
    this.chooseTimed(), this.readFileDeailshow()
  },
  methods: {
    startDown: function() {
      var i = this;
      this.time = 5, clearTimeout(this.timer);
      ! function e() {
        i.time > 0 && (i.timer = setTimeout((function() {
          i.time--, e()
        }), 1e3))
      }()
    },
    sfzVerifiedSuccessfully: function(i) {
      return !this.isEdit || "证件类型" != i && 3 != this.form.sfzAuditStatus
    },
    readFileDeailshow: function() {
      var i = this;
      o.readFileDeail("https://jdmqn.19371213.com.cn/json/specialTemplate0212.json").then((function(e) {
        1e3 == e.code && (i.tyjr = e.data.tyjr, i.listmb = e.data.yw, i.listxx = e.data.wcxxz)
      }))
    },
    isDifference: function(i) {
      return this.isChildren ? 8 == i.value || 9 == i.value || 0 == i.value : 8 != i.value && 9 != i.value
    },
    opencalendar: function() {
      this.$refs.calendar.open()
    },
    bindDateChange: function(i) {
      this.form.birthdate = i.detail.value, this.calculateAge(this.form.birthdate) - 65 >= 0 ? this.$set(this.form, "specialType", 1) : (this.$set(this.form, "specialCertUrl", ""), this.$set(this.form, "specialType", 0)), this.isclers = !0
    },
    closecalendar: function() {},
    chooseTimed: function() {
      var i = new Date,
        e = i.getFullYear(),
        t = i.getMonth() + 1,
        o = i.getDate();
      t <= 9 && (t = "0" + t), o <= 9 && (o = "0" + o), this.maxDate = e + "-" + t + "-" + o
    },
    changeDiff2: function(i) {
      this.$set(this.form, "specialCertUrl", ""), 1 == i ? this.calculateAge(this.form.birthdate) - 65 >= 0 && this.$set(this.form, "specialType", i) : this.$set(this.form, "specialType", i)
    },
    calculateAge: function(i) {
      var e = new Date,
        t = new Date(i),
        o = e.getFullYear() - t.getFullYear(),
        s = e.getMonth() - t.getMonth();
      return (s < 0 || 0 === s && e.getDate() < t.getDate()) && o--, o
    },
    handleInput: function(i) {
      var e = this;
      if (1 == this.form.visitorIdType) {
        var t = i;
        t = t.replace(/[^\uD800-\uDFFF·\u3400-\u4DBF·\u4E00-\u9FFF▪]/g, ""), this.$nextTick((function() {
          e.$set(e.form, "visitorName", t)
        }))
      }
    },
    changeDiff: function(i) {
      var e;
      (this.$set(this.form, "specialCertUrl", ""), /^[1-9]\d{5}(18|19|20|21|22)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|[Xx])$/.test(this.form.visitorIdNo) && this.$utils.getAgeByCardId(this.form.visitorIdNo), 1 == i) ? (15 == this.form.visitorIdNo.length ? /^(?:[A-Za-z]{3}\d{12}|\d{18})$/ : /^[1-9]\d{5}(18|19|20|21|22)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|[Xx])$/).test(this.form.visitorIdNo) && (e = 5 == this.form.visitorIdType && 15 == this.form.visitorIdNo.length ? this.$utils.getAgeByCardId2(this.form.visitorIdNo) : this.$utils.getAgeByCardId(this.form.visitorIdNo), this.age = e, e - 65 >= 0 && this.$set(this.form, "specialType", i)): this.$set(this.form, "specialType", i)
    },
    openSelect: function() {
      this.sfzVerifiedSuccessfully("证件类型") && this.$refs.popupSelect.open()
    },
    changeType: function(i) {
      this.$set(this.form, "visitorIdType", i), this.form.visitorIdNo = "", this.form.visitorName = "", this.form.birthdate = "", 1 != i && 5 != i || (this.isclers = !1)
    },
    showTip: function() {
      this.$refs.dialogInfo2Ref.open({
        title: "观众绑定及参观说明",
        isHtml: !0,
        content: this.content,
        btn: "我已知晓"
      })
    },
    showUploadTip: function() {
      this.$refs.dialogInfo.open({
        title: "优待人群证件说明",
        isHtml: !0,
        content: this.contentUpload,
        btn: "我已知晓"
      })
    },
    open: function(i, e) {
      this.popType = e, i ? this.getDetails(i.id) : (this.editId = "", this.form = {
        visitorName: "",
        phone: "",
        visitorIdNo: "",
        visitorIdType: 1,
        isDefault: 0
      }), this.$refs.dialog.open()
    },
    changeFn: function(i) {
      var e = i.detail.value;
      this.form.isDefault = e ? 1 : 0
    },
    getDetails: function(i) {
      var e = this;
      this.isMobile = !0, this.isCredentialsCode = !0, this.editId = i, queryDetailContact({
        id: i
      }).then((function(i) {
        1e3 == i.code && (e.isChildren = 6 == i.data.visitorTag, e.form = {
          visitorCode: i.data.visitorCode,
          visitorName: i.data.visitorName,
          phone: i.data.phone,
          visitorIdNo: "",
          visitorIdType: i.data.visitorIdType,
          isDefault: i.data.isDefault
        })
      }))
    },
    mobileVerification: function(i) {
      i.detail.value && (/^1[3456789]\d{9}$/.test(i.detail.value) ? this.isMobile = !0 : (e.index.showToast({
        title: "手机号码格式不正确",
        icon: "none"
      }), this.isMobile = !1))
    },
    creVerification: function(i) {
      var t;
      if (i.detail.value)
        if (1 == this.form.visitorIdType || 4 == this.form.visitorIdType || 5 == this.form.visitorIdType)
          if (1 == this.form.visitorIdType && (t = /^[1-9]\d{5}(18|19|20|21|22)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|[Xx])$/), 5 == this.form.visitorIdType && (t = /^(?:[A-Za-z]{3}\d{12}|^9\d{5}(18|19|20|21|22)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{4})$/), 2 == this.form.visitorIdType && (t = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/), 3 == this.form.visitorIdType && (t = /^[0-9]{8}$/), 4 == this.form.visitorIdType && (t = /^[A-Za-z0-9]{7,10}$/), t.test(i.detail.value)) {
            if (4 == this.form.visitorIdType) return void(this.isCredentialsCode = !0);
            var o;
            if (this.isCredentialsCode = !0, 5 == this.form.visitorIdType) {
              if (o = 15 == this.form.visitorIdNo.length ? this.$utils.getAgeByCardId2(this.form.visitorIdNo) : this.$utils.getAgeByCardId(this.form.visitorIdNo), 15 == this.form.visitorIdNo.length) {
                var s = this.form.visitorIdNo.split("");
                s[0] = s[0].toUpperCase(), s[1] = s[1].toUpperCase(), s[2] = s[2].toUpperCase(), this.form.visitorIdNo = s.join("")
              }
            } else o = this.$utils.getAgeByCardId(this.form.visitorIdNo);
            if (!o || o < 0) return e.index.showToast({
              title: "证件号码格式不正确",
              icon: "none"
            }), this.isCredentialsCode = !1, void(this.form.specialType = 0);
            this.isChildren = o < 14, o - 65 >= 0 ? 0 == this.form.specialType && this.$set(this.form, "specialType", 1) : 1 == this.form.specialType && this.$set(this.form, "specialType", 0)
          } else e.index.showToast({
            title: "证件号码格式不正确",
            icon: "none"
          }), this.isCredentialsCode = !1, this.form.specialType = 0;
      else this.isCredentialsCode = !0
    },
    del: function() {
      this.startDown(), this.$refs.dialogWrapRef.open()
    },
    confirm: function() {
      var i = this;
      this.time > 0 || this.isLoading || (this.isLoading = !0, t.visitorDel({
        visitorCode: this.form.visitorCode
      }).then((function(t) {
        1e3 == t.code ? (e.index.showToast({
          title: "操作成功！",
          icon: "none"
        }), setTimeout((function() {
          e.index.navigateBack()
        }), 1e3)) : (e.index.showToast({
          title: t.msg || "删除失败",
          icon: "none"
        }), i.$refs.dialogWrapRef.close())
      })).finally((function() {
        setTimeout((function() {
          i.isLoading = !1
        }), 1500)
      })))
    },
    save: function() {
      if (this.isAdd)
        if (this.form.visitorName)
          if (!this.form.visitorIdNo || this.isCredentialsCode || this.isEdit)
            if (4 != this.form.visitorIdType || this.form.nationality)
              if (this.form.specialType = this.form.specialType || 0, 1 != this.form.visitorIdType && 5 != this.form.visitorIdType || 0 == this.form.specialType || 1 == this.form.specialType || this.form.specialCertUrl)
                if (!this.form.specialType || 1 == this.form.specialType || 4 == this.form.specialType || 7 == this.form.specialType || 9 == this.form.specialType || this.form.visitorSpecialIdNo)
                  if (2 != this.form.visitorIdType && 3 != this.form.visitorIdType && 4 != this.form.visitorIdType || 1 != this.form.specialType || this.form.specialCertUrl)
                    if (2 != this.form.visitorIdType && 3 != this.form.visitorIdType && 4 != this.form.visitorIdType || this.form.birthdate) {
                      var t, o = i({}, this.form);
                      if (this.isAdd = !1, 5 == this.form.visitorIdType) this.age = 15 == o.visitorIdNo.length ? this.$utils.getAgeByCardId2(o.visitorIdNo) : this.$utils.getAgeByCardId(o.visitorIdNo);
                      else {
                        var s = 1 == o.visitorIdType && this.isEdit && 3 == this.form.sfzAuditStatus ? this.form.visitorIdNo1 : o.visitorIdNo;
                        this.age = this.$utils.getAgeByCardId(s)
                      }
                      if (1 == this.form.visitorIdType ? t = 0 == this.form.specialType ? this.age < 14 ? "visitorSaveSfzet" : "visitorSaveSfz" : 1 == this.form.specialType ? "visitorSaveSfzlr" : "visitorSaveSfzYd" : 2 == this.form.visitorIdType ? t = "visitorSaveGa" : 3 == this.form.visitorIdType ? t = "visitorSaveTw" : 4 == this.form.visitorIdType ? t = "visitorSaveHz" : 5 == this.form.visitorIdType && (t = 0 == this.form.specialType ? this.age < 14 ? "visitorSaveYjet" : "visitorSaveYj" : 1 == this.form.specialType ? "visitorSaveYjlr" : "visitorSaveYjYd"), 2 == o.visitorIdType || 3 == o.visitorIdType || 4 == o.visitorIdType) {
                        var r = this.calculateAge(o.birthdate);
                        r > 13 && r < 65 && 0 == o.specialType ? o.visitorTag = 1 : r >= 65 && 1 == o.specialType ? o.visitorTag = 3 : r < 14 ? o.visitorTag = 6 : r >= 65 && 0 == o.specialType && (o.visitorTag = 1)
                      }
                      this.saveConfig = {
                        prot: this.portList[t],
                        params: o
                      };
                      var a = e.index.getStorageSync("userInfo") ? JSON.parse(e.index.getStorageSync("userInfo")) : {};
                      this.isEdit ? a && a.status && 2 == a.status ? this.confirmSave() : this.$refs.dialogWrapRef3.open() : this.$refs.dialogWrapRef2.open()
                    } else e.index.showToast({
                      title: "您需要完善所有信息",
                      icon: "none"
                    });
      else e.index.showToast({
        title: "您需要完善所有信息",
        icon: "none"
      });
      else e.index.showToast({
        title: "您需要完善所有信息",
        icon: "none"
      });
      else e.index.showToast({
        title: "您需要完善所有信息",
        icon: "none"
      });
      else e.index.showToast({
        title: "您需要完善所有信息",
        icon: "none"
      });
      else e.index.showToast({
        title: "身份信息有误，请修改后重新提交",
        icon: "none"
      });
      else e.index.showToast({
        title: "您需要完善所有信息",
        icon: "none"
      })
    },
    confirmSave: function() {
      var i = this;
      this.isLoading || (this.isLoading = !0, 1 == this.saveConfig.params.visitorIdType && this.isEdit && 3 == this.form.sfzAuditStatus && (this.saveConfig.params.visitorIdNo = this.form.visitorIdNo1), this.saveConfig.params.visitorIdNo = this.saveConfig.params.visitorIdNo.replace(/[a-zA-Z]/g, (function(i) {
        return i.toUpperCase()
      })), this.saveConfig.params.visitorIdNo = this.saveConfig.params.visitorIdNo.replace(/\s+/g, ""), this.saveConfig.prot(this.saveConfig.params).then((function(t) {
        1e3 == t.code ? (e.index.showToast({
          title: "观众信息绑定成功，请回到预约页面进行预约。",
          icon: "none",
          duration: 5e3
        }), setTimeout((function() {
          e.index.navigateBack()
        }), 3e3)) : t.msg.length < 18 ? e.index.showToast({
          title: t.msg,
          icon: "none"
        }) : (i.$refs.dialogWrapRef.close(), i.$refs.dialogWrapRef2.close(), i.$refs.dialogWrapTextRef.open(t.msg))
      })).finally((function() {
        i.isAdd = !0, setTimeout((function() {
          i.isLoading = !1
        }), 1500)
      })))
    },
    close: function() {
      this.$refs.dialog.close()
    },
    bindPickerChange: function(i) {}
  }
};
Array || (e.resolveComponent("page-head") + e.resolveComponent("uni-easyinput") + e.resolveComponent("country-select") + e.resolveComponent("uploadImg") + e.resolveComponent("uploadList") + e.resolveComponent("expBlood") + e.resolveComponent("uni-popup-select") + e.resolveComponent("dialogInfo") + e.resolveComponent("dialogInfo2") + e.resolveComponent("dialogWrap") + e.resolveComponent("dialogWrapText"))(), Math || (function() {
  return "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js"
} + function() {
  return "../../../uni_modules/uni-popup-select/components/uni-popup-select/uni-popup-select.js"
} + function() {
  return "../../../components/dialogWrapText/dialogWrapText.js"
})();
var a = e._export_sfc(r, [
  ["render", function(i, t, o, r, a, n) {
    var p = this;
    return e.e({
      a: e.p({
        title: a.isEdit ? "编辑常用观众" : "新增观众"
      }),
      b: !a.isEdit
    }, a.isEdit ? {} : {
      c: e.o((function() {
        return n.showTip && n.showTip.apply(n, arguments)
      }))
    }, {
      d: a.form.visitorIdType
    }, a.form.visitorIdType ? {
      e: e.t(n.visitorIdType),
      f: n.sfzVerifiedSuccessfully("证件类型") ? "" : 1
    } : {}, {
      g: n.sfzVerifiedSuccessfully("证件类型")
    }, n.sfzVerifiedSuccessfully("证件类型") ? {
      h: s._imports_0$7
    } : {}, {
      i: e.o((function() {
        return n.openSelect && n.openSelect.apply(n, arguments)
      })),
      j: 4 != a.form.visitorIdType
    }, 4 != a.form.visitorIdType ? {
      k: e.o(n.handleInput),
      l: e.o((function(i) {
        return a.form.visitorName = i
      })),
      m: e.p({
        disabled: !n.sfzVerifiedSuccessfully(),
        maxlength: "15",
        styles: a.styles,
        placeholderStyle: a.placeholderStyle,
        inputBorder: !1,
        clearable: !1,
        errorMessage: !0,
        placeholder: "请填写联系人姓名",
        modelValue: a.form.visitorName
      })
    } : {}, {
      n: 4 == a.form.visitorIdType
    }, 4 == a.form.visitorIdType ? {
      o: e.o(n.handleInput),
      p: e.o((function(i) {
        return a.form.visitorName = i
      })),
      q: e.p({
        maxlength: "50",
        styles: a.styles,
        placeholderStyle: a.placeholderStyle,
        inputBorder: !1,
        clearable: !1,
        errorMessage: !0,
        placeholder: "请填写联系人姓名",
        modelValue: a.form.visitorName
      })
    } : {}, {
      r: 4 == a.form.visitorIdType
    }, 4 == a.form.visitorIdType ? {
      s: e.p({
        form: a.form,
        item: a.countryItem
      })
    } : {}, {
      t: e.o(n.creVerification),
      v: e.o((function(i) {
        return a.form.visitorIdNo = i
      })),
      w: e.p({
        disabled: !n.sfzVerifiedSuccessfully(),
        maxlength: "18",
        styles: a.styles,
        placeholderStyle: a.placeholderStyle,
        inputBorder: !1,
        clearable: !0,
        errorMessage: !0,
        placeholder: "请填写证件号码",
        modelValue: a.form.visitorIdNo
      }),
      x: 2 == a.form.visitorIdType || 3 == a.form.visitorIdType || 4 == a.form.visitorIdType
    }, 2 == a.form.visitorIdType || 3 == a.form.visitorIdType || 4 == a.form.visitorIdType ? e.e({
      y: a.form.birthdate
    }, a.form.birthdate ? {
      z: e.t(a.form.birthdate)
    } : {}, {
      A: s._imports_0$7,
      B: a.form.birthdate,
      C: a.maxDate,
      D: e.o((function() {
        return n.bindDateChange && n.bindDateChange.apply(n, arguments)
      }))
    }) : {}, {
      E: a.isclers
    }, a.isclers ? {
      F: e.f(a.differenceListisclers, (function(i, t, o) {
        return {
          a: e.t(i.name),
          b: e.o((function(e) {
            return n.changeDiff2(i.value)
          }), t),
          c: a.form.specialType == i.value ? 1 : "",
          d: t
        }
      })),
      G: s._imports_1$3
    } : {}, {
      H: (2 == a.form.visitorIdType || 3 == a.form.visitorIdType || 4 == a.form.visitorIdType) && 1 == a.form.specialType
    }, 2 != a.form.visitorIdType && 3 != a.form.visitorIdType && 4 != a.form.visitorIdType || 1 != a.form.specialType ? {} : {
      I: e.o((function() {
        return n.showUploadTip && n.showUploadTip.apply(n, arguments)
      })),
      J: e.p({
        form: a.form,
        item: a.fileItem
      })
    }, {
      K: n.differenceList && a.form.visitorIdNo && (a.isCredentialsCode || a.isEdit)
    }, n.differenceList && a.form.visitorIdNo && (a.isCredentialsCode || a.isEdit) ? {
      L: e.f(n.differenceList, (function(i, t, o) {
        return e.e({
          a: n.isDifference(i)
        }, n.isDifference(i) ? {
          b: e.t(i.name),
          c: s._imports_1$3,
          d: e.o((function(e) {
            return n.changeDiff(i.value)
          }), t),
          e: a.form.specialType == i.value ? 1 : ""
        } : {}, {
          f: t
        })
      }))
    } : {}, {
      M: a.form.specialType && 1 != a.form.specialType && 4 != a.form.specialType && 7 != a.form.specialType && 9 != a.form.specialType
    }, a.form.specialType && 1 != a.form.specialType && 4 != a.form.specialType && 7 != a.form.specialType && 9 != a.form.specialType ? {
      N: e.o((function(i) {
        return a.form.visitorSpecialIdNo = i
      })),
      O: e.p({
        maxlength: "32",
        styles: a.styles,
        placeholderStyle: a.placeholderStyle,
        inputBorder: !1,
        clearable: !0,
        errorMessage: !0,
        placeholder: "请填写证件编号",
        modelValue: a.form.visitorSpecialIdNo
      })
    } : {}, {
      P: 2 == a.form.specialType
    }, 2 == a.form.specialType ? {
      Q: e.o((function() {
        return n.showUploadTip && n.showUploadTip.apply(n, arguments)
      })),
      R: e.p({
        form: a.form,
        item: a.fileItem
      })
    } : {}, {
      S: 3 == a.form.specialType
    }, 3 == a.form.specialType ? {
      T: e.o((function() {
        return n.showUploadTip && n.showUploadTip.apply(n, arguments)
      })),
      U: e.p({
        form: a.form,
        item: a.fileItem,
        maxCount: 3
      })
    } : {}, {
      V: 4 == a.form.specialType
    }, 4 == a.form.specialType ? {
      W: e.o((function() {
        return n.showUploadTip && n.showUploadTip.apply(n, arguments)
      })),
      X: e.p({
        form: a.form,
        item: a.fileItem,
        flags: !0,
        tyjr: a.tyjr
      })
    } : {}, {
      Y: 5 == a.form.specialType
    }, 5 == a.form.specialType ? {
      Z: e.o((function() {
        return n.showUploadTip && n.showUploadTip.apply(n, arguments)
      })),
      aa: e.p({
        form: a.form,
        item: a.fileItem
      })
    } : {}, {
      ab: 6 == a.form.specialType
    }, 6 == a.form.specialType ? {
      ac: e.o((function() {
        return n.showUploadTip && n.showUploadTip.apply(n, arguments)
      })),
      ad: e.p({
        form: a.form,
        item: a.fileItem,
        flags: !0
      })
    } : {}, {
      ae: 7 == a.form.specialType
    }, 7 == a.form.specialType ? {
      af: e.o((function() {
        return n.showUploadTip && n.showUploadTip.apply(n, arguments)
      })),
      ag: e.p({
        form: a.form,
        item: a.fileItem,
        flags: !0
      })
    } : {}, {
      ah: 8 == a.form.specialType
    }, 8 == a.form.specialType ? {
      ai: e.o((function() {
        return n.showUploadTip && n.showUploadTip.apply(n, arguments)
      })),
      aj: e.p({
        form: a.form,
        item: a.fileItem
      })
    } : {}, {
      ak: 9 == a.form.specialType
    }, 9 == a.form.specialType ? {
      al: e.o((function() {
        return n.showUploadTip && n.showUploadTip.apply(n, arguments)
      })),
      am: e.p({
        form: a.form,
        item: a.fileItem
      })
    } : {}, {
      an: 3 == a.form.specialType
    }, 3 == a.form.specialType ? {
      ao: e.f(a.listmb, (function(i, t, o) {
        return {
          a: i.picUrl[0] + "?timestamp=" + (new Date).getTime(),
          b: i.picUrl[1] + "?timestamp=" + (new Date).getTime(),
          c: e.t(i.picName),
          d: t
        }
      }))
    } : {}, {
      ap: 2 == a.form.specialType
    }, 2 == a.form.specialType ? {
      aq: e.p({
        list: a.listxx,
        tipWidthType: 1
      })
    } : {}, {
      ar: !a.isEdit
    }, (a.isEdit, {}), {
      as: a.isEdit
    }, a.isEdit ? {
      at: e.o((function() {
        return n.del && n.del.apply(n, arguments)
      }))
    } : {}, {
      av: e.s(n.isBtn ? "" : "background: rgb(233, 233, 235);"),
      aw: e.o((function() {
        return n.save && n.save.apply(n, arguments)
      })),
      ax: a.isEdit ? 1 : "",
      ay: e.sr("popupSelect", "6c2fddb2-16"),
      az: e.o(n.changeType),
      aA: e.o((function(i) {
        return a.typeId = i
      })),
      aB: e.p({
        subTitle: "",
        safeArea: !1,
        dataList: a.typeList,
        value: a.typeId
      }),
      aC: e.sr("dialogInfo", "6c2fddb2-17"),
      aD: e.sr("dialogInfo2Ref", "6c2fddb2-18"),
      aE: s._imports_3,
      aF: e.t(a.form ? a.form.deleteEffectDay : ""),
      aG: e.o((function() {
        p.$refs.dialogWrapRef.close()
      })),
      aH: e.t(a.isLoading ? "删除中..." : "确定"),
      aI: e.t(a.time ? "（0".concat(a.time, "s）") : ""),
      aJ: a.time > 0 ? 1 : "",
      aK: e.o((function() {
        return n.confirm && n.confirm.apply(n, arguments)
      })),
      aL: e.sr("dialogWrapRef", "6c2fddb2-19"),
      aM: e.p({
        position: "center",
        isMaskClick: !1
      }),
      aN: s._imports_3,
      aO: e.o((function() {
        a.isLoading = !1, a.isAdd = !0, p.$refs.dialogWrapRef2.close()
      })),
      aP: e.t(a.isLoading ? "保存中..." : "确定"),
      aQ: e.o((function() {
        return n.confirmSave && n.confirmSave.apply(n, arguments)
      })),
      aR: e.sr("dialogWrapRef2", "6c2fddb2-20"),
      aS: e.p({
        position: "center",
        isMaskClick: !1
      }),
      aT: s._imports_3,
      aU: e.o((function() {
        a.isLoading = !1, a.isAdd = !0, p.$refs.dialogWrapRef3.close()
      })),
      aV: e.t(a.isLoading ? "修改中..." : "确定"),
      aW: e.o((function() {
        return n.confirmSave && n.confirmSave.apply(n, arguments)
      })),
      aX: e.sr("dialogWrapRef3", "6c2fddb2-21"),
      aY: e.p({
        position: "center",
        isMaskClick: !1
      }),
      aZ: e.sr("dialogWrapTextRef", "6c2fddb2-22")
    })
  }],
  ["__scopeId", "data-v-6c2fddb2"]
]);
wx.createPage(a);