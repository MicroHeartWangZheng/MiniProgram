var e = require("../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  i = require("../../../46BCF2769CEDE14F20DA9A714F2AA3A7.js"),
  r = require("../../../42DF72329CEDE14F24B91A35674AA3A7.js");
require("../../../F13970549CEDE14F975F18534C3AA3A7.js"), require("../../../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../../../E6064C639CEDE14F806024649ACAA3A7.js"), require("../../../99A56A709CEDE14FFFC30277932AA3A7.js"), require("../../../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../../../2800CA079CEDE14F4E66A20028DAA3A7.js");
var a = {
  components: {
    dialogWrap: function() {
      return "../../../components/dialogWrap.js"
    },
    additionalInfo: function() {
      return "./compontents/additionalInfo.js"
    },
    uploadList: function() {
      return "../../components/uploadList.js"
    },
    previewImages: function() {
      return "./compontents/previewImages.js"
    },
    statusIcon: function() {
      return "./compontents/statusIcon.js"
    }
  },
  data: function() {
    return {
      isLoading: !1,
      orderNum: "",
      formData: {
        hallName: "",
        orderDate: "",
        visitorNum: "",
        orderStatusDesc: "",
        entranceType: ""
      },
      personnelList: [],
      chaperoneList: [],
      childList: [],
      editVisitor: {},
      contentKey: !1,
      isHint: !1,
      visitorTagList: {
        1: "老年人",
        2: "献血荣誉证书持有者",
        3: "医务人员",
        4: "退役军人",
        5: "残障人士",
        6: "消防救援人员",
        7: "“三属”",
        8: "残障人士",
        9: "“三属”"
      },
      fileItem: {
        bind: "relationshipImageUrl",
        name: "直系亲属证明材料"
      },
      reClickFlag: !0,
      pageType: ""
    }
  },
  onLoad: function(e) {
    this.orderNum = e.orderNum, this.pageType = e.type, this.init(e.orderNum)
  },
  onShow: function() {},
  methods: {
    fmtBgColor: function(e, t) {
      return "relation_ship_wait_add_info" == t ? "#c7ab7e" : "待入馆" == e ? "#a87e6c" : "已入馆" == e ? "#B5B5B6" : "#DCDEDD"
    },
    copyText: function(e) {
      e && t.index.setClipboardData({
        data: e,
        success: function() {
          t.index.showToast({
            title: "复制成功",
            icon: "success"
          })
        }
      })
    },
    init: function(e) {
      var t = this;
      i.orderDetail({
        orderNum: e
      }).then((function(e) {
        1e3 == e.code && (e.data.orderDate = "".concat(e.data.visitDate.replace(/-/g, "."), " ").concat(e.data.timeSharingStart, "-").concat(e.data.timeSharingEnd), "DTSYNTB" == e.data.hallCode && (e.data.appointmentType, e.data.entrance = "1号门"), "SGBS" == e.data.hallCode && (e.data.appointmentType, e.data.entrance = "7号门"), "NJLJXWASJZ" == e.data.hallCode && (e.data.appointmentType, e.data.entrance = "陈列馆入口安检处"), t.formData = e.data, t.personnelList = e.data.normalList, t.childList = e.data.childList, e.data.companionList.length > 0 ? t.chaperoneList = e.data.companionList.map((function(e) {
          return e.relationshipImageUrl && (e.tempLocalImgList = e.relationshipImageUrl.split(",")), e
        })) : t.chaperoneList = e.data.companionList, t.contentKey = !t.contentKey)
      }))
    },
    startCountdown: function() {
      var e = this;
      this.childList.forEach((function(t, i) {
        "待入馆" == t.type && (t.count = 10, t.timer = setInterval((function() {
          t.count > 0 ? t.count-- : t.count = 10, e.$set(e.childList, i, t)
        }), 1e3))
      }))
    },
    resetTime: function(e) {
      var t = this;
      this.childList.forEach((function(i, r) {
        e == r && (i.count = 10, t.$set(t.childList, r, i))
      }))
    },
    cancel: function(e, t) {
      var i = t;
      if (3 == this.formData.entranceType) {
        var r = this.personnelList[0];
        8 != r.specialType && 9 != r.specialType || (i = !0)
      }
      var a = 0;
      this.personnelList.forEach((function(e) {
        "待入馆" != e.childOrderStatusDesc && "预约中" != e.childOrderStatusDesc && "待窗口核验" != e.childOrderStatusDesc && "待审核" != e.childOrderStatusDesc || a++
      })), this.editVisitor = e, this.isHint = !(1 != a || !i), this.$refs.dialogWrapRef.open()
    },
    confirm: function() {
      var e = this;
      this.isLoading || (this.isLoading = !0, i.orderRefund({
        orderNum: this.orderNum,
        detailCode: this.editVisitor.detailCode
      }).then((function(i) {
        1e3 == i.code ? (t.index.showToast({
          title: "取消成功",
          icon: "none"
        }), e.back(), e.init(e.orderNum)) : t.index.showToast({
          title: i.msg || "取消失败",
          icon: "none"
        })
      })).finally((function() {
        setTimeout((function() {
          e.isLoading = !1
        }), 1e3)
      })))
    },
    back: function() {
      this.$refs.dialogWrapRef.close()
    },
    navigation: function() {
      var e, i;
      "DTSYNTB" == this.formData.hallCode ? (1 == this.formData.entranceType || this.formData.entranceType, e = 118.7449967758921, 1 == this.formData.entranceType || this.formData.entranceType, i = 32.03495988835356) : "SGBS" == this.formData.hallCode ? (1 == this.formData.entranceType || this.formData.entranceType, e = 118.73990000000003, 1 == this.formData.entranceType || this.formData.entranceType, i = 32.03553) : "NJLJXWASJZ" == this.formData.hallCode && (1 == this.formData.entranceType || this.formData.entranceType, e = 118.79772200000002, 1 == this.formData.entranceType || this.formData.entranceType, i = 32.038989000000036), t.index.openLocation({
        latitude: parseFloat(i),
        longitude: parseFloat(e)
      })
    },
    submit: function() {
      var r = this;
      if (this.chaperoneList.every((function(e) {
          return e.relationshipImageUrl
        }))) {
        if (!this.reClickFlag) return;
        this.reClickFlag = !1;
        var a = this.chaperoneList.filter((function(e) {
            return "relation_ship_wait_add_info" === e.childOrderStatus
          })).map((function(e) {
            return {
              detailCode: e.detailCode,
              relationshipImageUrl: e.relationshipImageUrl
            }
          })),
          n = this.personnelList.map((function(e) {
            return {
              detailCode: e.detailCode
            }
          }));
        a = [].concat(e(a), e(n));
        var o = {
          orderNum: this.orderNum,
          orderDetailList: a
        };
        i.orderUpdateRelationShipInfo(o).then((function(e) {
          1e3 === e.code && (t.index.showToast({
            title: "材料提交成功",
            icon: "none"
          }), r.backToPrevPage())
        })).finally((function(e) {
          r.reClickFlag = !0
        }))
      } else t.index.showToast({
        title: "请上传材料",
        icon: "none"
      })
    },
    backToPrevPage: function() {
      var e = this;
      setTimeout((function() {
        var i = getCurrentPages();
        i[i.length - 1];
        var r = i[i.length - 2];
        r.$vm.orderNum = e.orderNum, r.$vm.isBack = !0, t.index.navigateBack({})
      }), 2e3)
    }
  },
  beforeDestroy: function() {}
};
Array || (t.resolveComponent("page-head") + t.resolveComponent("statusIcon") + t.resolveComponent("uni-icons") + t.resolveComponent("uploadList") + t.resolveComponent("previewImages") + t.resolveComponent("dialogWrap"))(), Math;
var n = t._export_sfc(a, [
  ["render", function(e, i, a, n, o, s) {
    return t.e({
      a: t.p({
        title: "预约详情"
      }),
      b: t.t(o.formData.orderStatusDesc),
      c: t.t(1 == o.formData.entranceType ? "普通预约" : 2 == o.formData.entranceType ? "亲子预约" : 3 == o.formData.entranceType ? "优待预约" : ""),
      d: r._imports_0$4,
      e: t.t(o.formData.hallName),
      f: r._imports_1$2,
      g: t.t(o.formData.orderDate),
      h: !1
    }, {}, {
      j: o.personnelList && o.personnelList.length > 0 && !1
    }, (o.personnelList && o.personnelList.length, {}), {
      l: 1 != o.formData.entranceType && o.chaperoneList && o.chaperoneList.length > 0
    }, 1 != o.formData.entranceType && o.chaperoneList && o.chaperoneList.length > 0 ? t.e({
      m: r._imports_0$6,
      n: o.chaperoneList && o.chaperoneList.length > 0
    }, o.chaperoneList && o.chaperoneList.length > 0 ? {
      o: t.f(o.chaperoneList, (function(e, i, r) {
        return t.e({
          a: "c7ffeb70-4-" + r,
          b: t.p({
            childOrderStatusDesc: e.childOrderStatusDesc
          }),
          c: t.f((e.childOrderStatusDesc || "").length, (function(i, r, a) {
            return {
              a: t.t(e.childOrderStatusDesc.substring(r, r + 1)),
              b: r
            }
          })),
          d: t.s("background:".concat(s.fmtBgColor(e.childOrderStatusDesc, e.childOrderStatus))),
          e: t.t(e.visitorName),
          f: t.t(e.visitorIdTypeDesc),
          g: t.t(e.visitorIdNo),
          h: "relation_ship_wait_add_info" == e.childOrderStatus
        }, "relation_ship_wait_add_info" == e.childOrderStatus ? t.e({
          i: 2 == o.pageType
        }, 2 == o.pageType ? {
          j: "c7ffeb70-5-" + r,
          k: t.p({
            isTipVisible: !1,
            item: o.fileItem,
            form: e,
            tempLocalImgList: e.tempLocalImgList,
            maxCount: 9,
            uploadIconMode: "row"
          })
        } : {}, {
          l: 1 == o.pageType
        }, 1 == o.pageType ? {
          m: "c7ffeb70-6-" + r,
          n: t.p({
            imgUrl: e.relationshipImageUrl
          })
        } : {}) : {}, {
          o: ("audit_refuse" == e.childOrderStatus || "relation_ship_wait_add_info" == e.childOrderStatus) && e.rejectReasonType && 3 == o.formData.entranceType
        }, "audit_refuse" != e.childOrderStatus && "relation_ship_wait_add_info" != e.childOrderStatus || !e.rejectReasonType || 3 != o.formData.entranceType ? {} : {
          p: "c7ffeb70-7-" + r,
          q: t.p({
            type: "help-filled",
            size: "36rpx",
            color: "#C7AB7E"
          }),
          r: t.t("refuse_other" == e.rejectReasonType ? e.rejectReason : e.rejectReasonTypeName)
        }, {
          s: "待入馆" == e.childOrderStatusDesc || "预约中" == e.childOrderStatusDesc || "待窗口核验" == e.childOrderStatusDesc || "待审核" == e.childOrderStatusDesc
        }, "待入馆" == e.childOrderStatusDesc || "预约中" == e.childOrderStatusDesc || "待窗口核验" == e.childOrderStatusDesc || "待审核" == e.childOrderStatusDesc ? {
          t: "c7ffeb70-8-" + r,
          v: t.p({
            type: "clear",
            size: "24",
            color: "#A87E6C"
          }),
          w: t.s("audit_refuse" == e.childOrderStatus && e.rejectReasonType && 3 == o.formData.entranceType ? "height:280rpx" : ""),
          x: t.o((function(t) {
            return s.cancel(e, !1, 2)
          }), i)
        } : {}, {
          y: t.s("border-color: " + ("待入馆" == e.childOrderStatusDesc ? "#c7ab7e" : "已入馆" == e.childOrderStatusDesc ? "#B5B5B6" : "#DCDEDD")),
          z: i
        })
      }))
    } : {}) : {}, {
      p: 1 != o.formData.entranceType && o.childList && o.childList.length > 0
    }, 1 != o.formData.entranceType && o.childList && o.childList.length > 0 ? t.e({
      q: r._imports_0$6,
      r: o.childList && o.childList.length > 0
    }, o.childList && o.childList.length > 0 ? {
      s: t.f(o.childList, (function(e, i, r) {
        return t.e({
          a: "c7ffeb70-9-" + r,
          b: t.p({
            childOrderStatusDesc: e.childOrderStatusDesc
          }),
          c: t.f((e.childOrderStatusDesc || "").length, (function(i, r, a) {
            return {
              a: t.t(e.childOrderStatusDesc.substring(r, r + 1)),
              b: r
            }
          })),
          d: t.s("background:" + ("待入馆" == e.childOrderStatusDesc ? "#c7ab7e" : "已入馆" == e.childOrderStatusDesc ? "#B5B5B6" : "#DCDEDD")),
          e: t.t(e.visitorName),
          f: t.t(e.visitorIdTypeDesc),
          g: t.t(e.visitorIdNo),
          h: "待入馆" == e.childOrderStatusDesc || "预约中" == e.childOrderStatusDesc || "待窗口核验" == e.childOrderStatusDesc || "待审核" == e.childOrderStatusDesc
        }, "待入馆" == e.childOrderStatusDesc || "预约中" == e.childOrderStatusDesc || "待窗口核验" == e.childOrderStatusDesc || "待审核" == e.childOrderStatusDesc ? {
          i: "c7ffeb70-10-" + r,
          j: t.p({
            type: "clear",
            size: "24",
            color: "#A87E6C"
          }),
          k: t.s("audit_refuse" == e.childOrderStatus && e.rejectReasonType && 3 == o.formData.entranceType ? "height:280rpx" : ""),
          l: t.o((function(t) {
            return s.cancel(e, !1, 2)
          }), i)
        } : {}, {
          m: i,
          n: t.s("border-color: " + ("待入馆" == e.childOrderStatusDesc ? "#c7ab7e" : "已入馆" == e.childOrderStatusDesc ? "#B5B5B6" : "#DCDEDD"))
        })
      }))
    } : {}) : {}, {
      t: 2 == o.pageType
    }, 2 == o.pageType ? {
      v: t.o((function() {
        return s.submit && s.submit.apply(s, arguments)
      }))
    } : {}, {
      w: o.contentKey,
      x: r._imports_3,
      y: !o.isHint || 1 == o.formData.entranceType
    }, o.isHint && 1 != o.formData.entranceType ? {} : {
      z: t.t(o.editVisitor ? o.editVisitor.visitorName : "")
    }, {
      A: 2 == o.formData.entranceType && o.isHint
    }, 2 == o.formData.entranceType && o.isHint ? {
      B: t.t(o.editVisitor ? o.editVisitor.visitorName : "")
    } : {}, {
      C: 3 == o.formData.entranceType && o.isHint
    }, 3 == o.formData.entranceType && o.isHint ? {
      D: t.t(o.editVisitor ? o.editVisitor.visitorName : "")
    } : {}, {
      E: t.o((function() {
        return s.back && s.back.apply(s, arguments)
      })),
      F: t.t(o.isLoading ? "取消中..." : "确定"),
      G: t.o((function() {
        return s.confirm && s.confirm.apply(s, arguments)
      })),
      H: t.sr("dialogWrapRef", "c7ffeb70-11"),
      I: t.p({
        position: "center"
      })
    })
  }],
  ["__scopeId", "data-v-c7ffeb70"]
]);
wx.createPage(n);