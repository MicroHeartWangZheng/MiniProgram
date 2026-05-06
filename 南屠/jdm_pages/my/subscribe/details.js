var t = require("../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  e = require("../../../46BCF2769CEDE14F20DA9A714F2AA3A7.js"),
  a = require("../../../42DF72329CEDE14F24B91A35674AA3A7.js");
require("../../../F13970549CEDE14F975F18534C3AA3A7.js"), require("../../../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../../../E6064C639CEDE14F806024649ACAA3A7.js"), require("../../../99A56A709CEDE14FFFC30277932AA3A7.js"), require("../../../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../../../2800CA079CEDE14F4E66A20028DAA3A7.js");
var r = {
  components: {
    dialogWrap: function() {
      return "../../../components/dialogWrap.js"
    },
    additionalInfo: function() {
      return "./compontents/additionalInfo.js"
    },
    infoToBeCompleteBtns: function() {
      return "./compontents/infoToBeCompleteBtns.js"
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
      isBack: !1,
      childrenInfoToBeCompleteFlag: !1
    }
  },
  onLoad: function(t) {
    this.orderNum = t.orderNum, this.init(t.orderNum)
  },
  onShow: function() {
    this.isBack && (this.childrenInfoToBeCompleteFlag = !1, this.init(this.orderNum))
  },
  methods: {
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
    init: function(t) {
      var a = this;
      e.orderDetail({
        orderNum: t
      }).then((function(t) {
        1e3 == t.code && (t.data.orderDate = "".concat(t.data.visitDate.replace(/-/g, "."), " ").concat(t.data.timeSharingStart, "-").concat(t.data.timeSharingEnd), "DTSYNTB" == t.data.hallCode && (t.data.appointmentType, t.data.entrance = "1号门"), "SGBS" == t.data.hallCode && (t.data.appointmentType, t.data.entrance = "7号门"), "NJLJXWASJZ" == t.data.hallCode && (t.data.appointmentType, t.data.entrance = "陈列馆入口安检处"), a.formData = t.data, a.personnelList = t.data.normalList, a.childList = t.data.childList, a.chaperoneList = t.data.companionList, a.contentKey = !a.contentKey, a.isChildrenInfoToBeComplete(t.data.companionList))
      }))
    },
    isChildrenInfoToBeComplete: function(t) {
      for (var e = 0; e < t.length; e++)
        if ("relation_ship_wait_add_info" === t[e].childOrderStatus) {
          this.childrenInfoToBeCompleteFlag = !0;
          break
        }
    },
    startCountdown: function() {
      var t = this;
      this.childList.forEach((function(e, a) {
        "待入馆" == e.type && (e.count = 10, e.timer = setInterval((function() {
          e.count > 0 ? e.count-- : e.count = 10, t.$set(t.childList, a, e)
        }), 1e3))
      }))
    },
    resetTime: function(t) {
      var e = this;
      this.childList.forEach((function(a, r) {
        t == r && (a.count = 10, e.$set(e.childList, r, a))
      }))
    },
    cancel: function(t, e) {
      var a = e;
      if (3 == this.formData.entranceType) {
        var r = this.personnelList[0];
        8 != r.specialType && 9 != r.specialType || (a = !0)
      }
      var o = 0;
      this.personnelList.forEach((function(t) {
        "待入馆" != t.childOrderStatusDesc && "预约中" != t.childOrderStatusDesc && "待窗口核验" != t.childOrderStatusDesc && "待审核" != t.childOrderStatusDesc || o++
      })), this.editVisitor = t, this.isHint = !(1 != o || !a), this.$refs.dialogWrapRef.open()
    },
    confirm: function() {
      var a = this;
      this.isLoading || (this.isLoading = !0, e.orderRefund({
        orderNum: this.orderNum,
        detailCode: this.editVisitor.detailCode
      }).then((function(e) {
        1e3 == e.code ? (t.index.showToast({
          title: "取消成功",
          icon: "none"
        }), a.back(), a.childrenInfoToBeCompleteFlag = !1, a.init(a.orderNum)) : t.index.showToast({
          title: e.msg || "取消失败",
          icon: "none"
        })
      })).finally((function() {
        setTimeout((function() {
          a.isLoading = !1
        }), 1e3)
      })))
    },
    back: function() {
      this.$refs.dialogWrapRef.close()
    },
    navigation: function() {
      var e, a;
      "DTSYNTB" == this.formData.hallCode ? (1 == this.formData.entranceType || this.formData.entranceType, e = 118.7449967758921, 1 == this.formData.entranceType || this.formData.entranceType, a = 32.03495988835356) : "SGBS" == this.formData.hallCode ? (1 == this.formData.entranceType || this.formData.entranceType, e = 118.73990000000003, 1 == this.formData.entranceType || this.formData.entranceType, a = 32.03553) : "NJLJXWASJZ" == this.formData.hallCode && (1 == this.formData.entranceType || this.formData.entranceType, e = 118.79772200000002, 1 == this.formData.entranceType || this.formData.entranceType, a = 32.038989000000036), t.index.openLocation({
        latitude: parseFloat(a),
        longitude: parseFloat(e)
      })
    },
    fmtColor: function(t, e) {
      var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = "";
      return 1 == a ? r = "relation_ship_wait_add_info" == e ? "#c7ab7e" : "tickets_success" == e || "order_success" == e ? "#a87e6c" : "已入馆" == t ? "#B5B5B6" : "#DCDEDD" : 2 == a && ("待审核" != t && "待窗口核验" != t && "审核失败" != t && "待实名验证" != t && "实名验证失败" != t || (r = "#333333!important")), r
    }
  },
  beforeDestroy: function() {}
};
Array || (t.resolveComponent("page-head") + t.resolveComponent("statusIcon") + t.resolveComponent("uni-icons") + t.resolveComponent("infoToBeCompleteBtns") + t.resolveComponent("dialogWrap"))(), Math;
var o = t._export_sfc(r, [
  ["render", function(e, r, o, i, n, s) {
    return t.e({
      a: t.p({
        title: "预约详情"
      }),
      b: t.t(n.formData.orderStatusDesc),
      c: t.t(1 == n.formData.entranceType ? "普通预约" : 2 == n.formData.entranceType ? "亲子预约" : 3 == n.formData.entranceType ? "优待预约" : ""),
      d: a._imports_0$4,
      e: t.t(n.formData.hallName),
      f: a._imports_1$2,
      g: t.t(n.formData.orderDate),
      h: a._imports_0$6,
      i: n.personnelList && n.personnelList.length > 0
    }, n.personnelList && n.personnelList.length > 0 ? {
      j: t.f(n.personnelList, (function(e, a, r) {
        return t.e({
          a: "786822cc-1-" + r,
          b: t.p({
            childOrderStatusDesc: e.childOrderStatus
          }),
          c: t.f((e.childOrderStatusDesc || "").length, (function(a, r, o) {
            return {
              a: t.t(e.childOrderStatusDesc.substring(r, r + 1)),
              b: r
            }
          })),
          d: t.s("color:".concat(s.fmtColor(e.childOrderStatusDesc, e.childOrderStatus, 2))),
          e: t.s("background:".concat(s.fmtColor(e.childOrderStatusDesc, e.childOrderStatus))),
          f: e.specialType && 0 != e.specialType && 3 == n.formData.entranceType
        }, e.specialType && 0 != e.specialType && 3 == n.formData.entranceType ? {
          g: t.t(n.visitorTagList[e.specialType])
        } : {}, {
          h: t.t(e.visitorName),
          i: t.t(e.visitorIdTypeDesc),
          j: t.t(e.visitorIdNo),
          k: "audit_refuse" == e.childOrderStatus && e.rejectReasonType && 3 == n.formData.entranceType
        }, "audit_refuse" == e.childOrderStatus && e.rejectReasonType && 3 == n.formData.entranceType ? {
          l: "786822cc-2-" + r,
          m: t.p({
            type: "help-filled",
            size: "36rpx",
            color: "#C7AB7E"
          }),
          n: t.t("refuse_other" == e.rejectReasonType ? e.rejectReason : e.rejectReasonTypeName)
        } : {}, {
          o: "待入馆" == e.childOrderStatusDesc || "预约中" == e.childOrderStatusDesc || "待窗口核验" == e.childOrderStatusDesc || "待审核" == e.childOrderStatusDesc || "gongan_check_wait" == e.childOrderStatus
        }, "待入馆" == e.childOrderStatusDesc || "预约中" == e.childOrderStatusDesc || "待窗口核验" == e.childOrderStatusDesc || "待审核" == e.childOrderStatusDesc || "gongan_check_wait" == e.childOrderStatus ? {
          p: "786822cc-3-" + r,
          q: t.p({
            type: "clear",
            size: "24",
            color: "#A87E6C"
          }),
          r: t.s("audit_refuse" == e.childOrderStatus && e.rejectReasonType && 3 == n.formData.entranceType ? "height:280rpx" : ""),
          s: t.o((function(t) {
            return s.cancel(e, !0, 1)
          }), a)
        } : {}, {
          t: t.s("border-color: " + ("待入馆" == e.childOrderStatusDesc ? "#c7ab7e" : "已入馆" == e.childOrderStatusDesc ? "#B5B5B6" : "#DCDEDD")),
          v: a
        })
      }))
    } : {}, {
      k: 1 != n.formData.entranceType && n.chaperoneList && n.chaperoneList.length > 0
    }, 1 != n.formData.entranceType && n.chaperoneList && n.chaperoneList.length > 0 ? t.e({
      l: a._imports_0$6,
      m: n.chaperoneList && n.chaperoneList.length > 0
    }, n.chaperoneList && n.chaperoneList.length > 0 ? {
      n: t.f(n.chaperoneList, (function(e, a, r) {
        return t.e({
          a: "786822cc-4-" + r,
          b: t.p({
            childOrderStatusDesc: e.childOrderStatus
          }),
          c: t.f((e.childOrderStatusDesc || "").length, (function(a, r, o) {
            return {
              a: t.t(e.childOrderStatusDesc.substring(r, r + 1)),
              b: r
            }
          })),
          d: t.s("color:".concat(s.fmtColor(e.childOrderStatusDesc, e.childOrderStatus, 2))),
          e: t.s("background:".concat(s.fmtColor(e.childOrderStatusDesc, e.childOrderStatus))),
          f: t.t(e.visitorName),
          g: t.t(e.visitorIdTypeDesc),
          h: t.t(e.visitorIdNo),
          i: "audit_refuse" == e.childOrderStatus && e.rejectReasonType && 3 == n.formData.entranceType
        }, "audit_refuse" == e.childOrderStatus && e.rejectReasonType && 3 == n.formData.entranceType ? {
          j: "786822cc-5-" + r,
          k: t.p({
            type: "help-filled",
            size: "36rpx",
            color: "#C7AB7E"
          }),
          l: t.t("refuse_other" == e.rejectReasonType ? e.rejectReason : e.rejectReasonTypeName)
        } : {}, {
          m: "待入馆" == e.childOrderStatusDesc || "预约中" == e.childOrderStatusDesc || "待窗口核验" == e.childOrderStatusDesc || "待审核" == e.childOrderStatusDesc || "relation_ship_wait_add_info" == e.childOrderStatus || "gongan_check_wait" == e.childOrderStatus
        }, "待入馆" == e.childOrderStatusDesc || "预约中" == e.childOrderStatusDesc || "待窗口核验" == e.childOrderStatusDesc || "待审核" == e.childOrderStatusDesc || "relation_ship_wait_add_info" == e.childOrderStatus || "gongan_check_wait" == e.childOrderStatus ? {
          n: "786822cc-6-" + r,
          o: t.p({
            type: "clear",
            size: "24",
            color: "#A87E6C"
          }),
          p: t.s("audit_refuse" == e.childOrderStatus && e.rejectReasonType && 3 == n.formData.entranceType ? "height:280rpx" : ""),
          q: t.o((function(t) {
            return s.cancel(e, !1, 2)
          }), a)
        } : {}, {
          r: t.s("border-color: " + ("待入馆" == e.childOrderStatusDesc ? "#c7ab7e" : "已入馆" == e.childOrderStatusDesc ? "#B5B5B6" : "#DCDEDD")),
          s: a
        })
      }))
    } : {}) : {}, {
      o: 1 != n.formData.entranceType && n.childList && n.childList.length > 0
    }, 1 != n.formData.entranceType && n.childList && n.childList.length > 0 ? t.e({
      p: a._imports_0$6,
      q: n.childList && n.childList.length > 0
    }, n.childList && n.childList.length > 0 ? {
      r: t.f(n.childList, (function(e, a, r) {
        return t.e({
          a: "786822cc-7-" + r,
          b: t.p({
            childOrderStatusDesc: e.childOrderStatus
          }),
          c: t.f((e.childOrderStatusDesc || "").length, (function(a, r, o) {
            return {
              a: t.t(e.childOrderStatusDesc.substring(r, r + 1)),
              b: r
            }
          })),
          d: t.s("color:".concat(s.fmtColor(e.childOrderStatusDesc, e.childOrderStatus, 2))),
          e: t.s("background:".concat(s.fmtColor(e.childOrderStatusDesc, e.childOrderStatus))),
          f: t.t(e.visitorName),
          g: t.t(e.visitorIdTypeDesc),
          h: t.t(e.visitorIdNo),
          i: "待入馆" == e.childOrderStatusDesc || "预约中" == e.childOrderStatusDesc || "待窗口核验" == e.childOrderStatusDesc || "待审核" == e.childOrderStatusDesc || "gongan_check_wait" == e.childOrderStatus
        }, "待入馆" == e.childOrderStatusDesc || "预约中" == e.childOrderStatusDesc || "待窗口核验" == e.childOrderStatusDesc || "待审核" == e.childOrderStatusDesc || "gongan_check_wait" == e.childOrderStatus ? {
          j: "786822cc-8-" + r,
          k: t.p({
            type: "clear",
            size: "24",
            color: "#A87E6C"
          }),
          l: t.s("audit_refuse" == e.childOrderStatus && e.rejectReasonType && 3 == n.formData.entranceType ? "height:280rpx" : ""),
          m: t.o((function(t) {
            return s.cancel(e, !1, 2)
          }), a)
        } : {}, {
          n: a,
          o: t.s("border-color: " + ("待入馆" == e.childOrderStatusDesc ? "#c7ab7e" : "已入馆" == e.childOrderStatusDesc ? "#B5B5B6" : "#DCDEDD"))
        })
      }))
    } : {}) : {}, {
      s: "DTSYNTB" == n.formData.hallCode
    }, "DTSYNTB" == n.formData.hallCode ? {
      t: t.o((function() {
        return s.navigation && s.navigation.apply(s, arguments)
      }))
    } : {}, {
      v: "SGBS" == n.formData.hallCode
    }, "SGBS" == n.formData.hallCode ? {
      w: t.o((function() {
        return s.navigation && s.navigation.apply(s, arguments)
      }))
    } : {}, {
      x: "NJLJXWASJZ" == n.formData.hallCode
    }, "NJLJXWASJZ" == n.formData.hallCode ? {
      y: t.o((function() {
        return s.navigation && s.navigation.apply(s, arguments)
      }))
    } : {}, {
      z: a._imports_3$1,
      A: t.o((function() {
        return s.navigation && s.navigation.apply(s, arguments)
      })),
      B: "NJLJXWASJZ" == n.formData.hallCode
    }, "NJLJXWASJZ" == n.formData.hallCode ? t.e({
      C: "DTSYNTB" == n.formData.hallCode
    }, (n.formData.hallCode, {}), {
      D: "SGBS" == n.formData.hallCode
    }, (n.formData.hallCode, {}), {
      E: "NJLJXWASJZ" == n.formData.hallCode
    }, (n.formData.hallCode, {}), {
      F: "NJLJXWASJZ" == n.formData.hallCode
    }, (n.formData.hallCode, {}), {
      G: "DTSYNTB" == n.formData.hallCode || "SGBS" == n.formData.hallCode
    }, ("DTSYNTB" == n.formData.hallCode || n.formData.hallCode, {}), {
      H: "NJLJXWASJZ" == n.formData.hallCode
    }, (n.formData.hallCode, {})) : t.e({
      I: t.t(n.formData.entrance),
      J: t.t((n.formData.hallCode, "")),
      K: t.t("NJLJXWASJZ" == n.formData.hallCode ? "陈列馆入口安检处" : "纪念馆1号门"),
      L: t.t("NJLJXWASJZ" == n.formData.hallCode ? "陈列馆入口安检处" : "纪念馆1号门"),
      M: "DTSYNTB" == n.formData.hallCode
    }, (n.formData.hallCode, {}), {
      N: "SGBS" == n.formData.hallCode
    }, (n.formData.hallCode, {}), {
      O: "NJLJXWASJZ" == n.formData.hallCode
    }, (n.formData.hallCode, {}), {
      P: "NJLJXWASJZ" == n.formData.hallCode
    }, (n.formData.hallCode, {}), {
      Q: "DTSYNTB" == n.formData.hallCode || "SGBS" == n.formData.hallCode
    }, ("DTSYNTB" == n.formData.hallCode || n.formData.hallCode, {}), {
      R: "NJLJXWASJZ" == n.formData.hallCode
    }, (n.formData.hallCode, {})), {
      S: n.childrenInfoToBeCompleteFlag
    }, n.childrenInfoToBeCompleteFlag ? {
      T: t.p({
        orderNum: n.formData.orderNum,
        visibleType: 2
      })
    } : {}, {
      U: n.contentKey,
      V: a._imports_3,
      W: !n.isHint || 1 == n.formData.entranceType
    }, n.isHint && 1 != n.formData.entranceType ? {} : {
      X: t.t(n.editVisitor ? n.editVisitor.visitorName : "")
    }, {
      Y: 2 == n.formData.entranceType && n.isHint
    }, 2 == n.formData.entranceType && n.isHint ? {
      Z: t.t(n.editVisitor ? n.editVisitor.visitorName : "")
    } : {}, {
      aa: 3 == n.formData.entranceType && n.isHint
    }, 3 == n.formData.entranceType && n.isHint ? {
      ab: t.t(n.editVisitor ? n.editVisitor.visitorName : "")
    } : {}, {
      ac: t.o((function() {
        return s.back && s.back.apply(s, arguments)
      })),
      ad: t.t(n.isLoading ? "取消中..." : "确定"),
      ae: t.o((function() {
        return s.confirm && s.confirm.apply(s, arguments)
      })),
      af: t.sr("dialogWrapRef", "786822cc-10"),
      ag: t.p({
        position: "center"
      })
    })
  }],
  ["__scopeId", "data-v-786822cc"]
]);
wx.createPage(o);