var t = require("../../@babel/runtime/helpers/slicedToArray"),
  a = require("../../302F12419CEDE14F56497A46F35AA3A7.js"),
  e = require("../../42DF72329CEDE14F24B91A35674AA3A7.js"),
  i = {
    data: function() {
      return {
        yyjg: "待入馆",
        entrance: "",
        hint: "",
        formData: {
          appointmentType: "",
          yycg: "",
          yysj: "",
          yyrs: ""
        },
        orderNum: ""
      }
    },
    onLoad: function(t) {
      var a = this.$store.state.formData;
      if (this.orderNum = t.orderNum, a) {
        var e = JSON.parse(a);
        2 == e.specialType || 4 == e.specialType || 6 == e.specialType || 7 == e.specialType ? e.sanjun = !0 : e.sanjun = !1, 2 != e.visitors[0].visitorIdType && 3 != e.visitors[0].visitorIdType && 4 != e.visitors[0].visitorIdType || 1 != e.specialType || (e.sanjun = !0), e.yycg = "DTSYNTB" == e.hallCode ? "南京大屠杀史实展" : "SGBS" == e.hallCode ? "正义必胜 和平必胜 人民必胜——中国战区反法西斯战争胜利暨审判日本战犯史实展" : "NJLJXWASJZ" == e.hallCode ? "南京利济巷慰安所旧址陈列馆" : "", "DTSYNTB" == e.hallCode && (e.appointmentType, this.entrance = "1号门"), "SGBS" == e.hallCode && (e.appointmentType, this.entrance = "7号门"), "NJLJXWASJZ" == e.hallCode && (e.appointmentType, this.entrance = "陈列馆入口安检处"), this.identityVerification(e) ? 3 == e.appointmentType ? e.sanjun ? 3 == e.visitorTag ? this.yyjg = "待审核" : this.yyjg = "待入馆" : 1 == e.specialType ? this.yyjg = "待入馆" : (3 == e.visitorTag ? this.yyjg = "待审核" : this.yyjg = "待入馆", e.isKinsfolk && (this.yyjg = "待审核")) : this.yyjg = "待入馆" : this.yyjg = "待实名验证", e.yysj = "".concat(e.date.replace(/-/g, "."), " ").concat(e.timeSharingStart.substring(0, 5), "-").concat(e.timeSharingEnd.substring(0, 5)), e.yyrs = e.visitors.map((function(t) {
          return t.visitorName
        })).join("、");
        var i = this.checkTime(e.timeSharingStart);
        if ("上午" == i) {
          var n = this.modifyTime(e.timeSharingEnd, "plus");
          this.hint = "最迟可于".concat(n, "入馆")
        } else if ("下午" == i) {
          var o = this.modifyTime(e.timeSharingStart, "minus");
          this.hint = "最早可提前至".concat(o, "入馆")
        }
        this.formData = e
      }
    },
    onShow: function() {},
    methods: {
      identityVerification: function(t) {
        var a = t.visitors.filter((function(t) {
          return 1 == t.visitorIdType
        }));
        return !(a.length > 0) || a.every((function(t) {
          return 2 != t.sfzAuditStatus
        }))
      },
      view: function() {
        this.$utils.userRedirectTo("/jdm_pages/my/subscribe/details?orderNum=".concat(this.orderNum))
      },
      navigation: function() {
        var t, e;
        "DTSYNTB" == this.formData.hallCode ? (1 == this.formData.appointmentType || this.formData.appointmentType, t = 118.7449967758921, 1 == this.formData.appointmentType || this.formData.appointmentType, e = 32.03495988835356) : "SGBS" == this.formData.hallCode ? (1 == this.formData.appointmentType || this.formData.appointmentType, t = 118.73990000000003, 1 == this.formData.appointmentType || this.formData.appointmentType, e = 32.03553) : "NJLJXWASJZ" == this.formData.hallCode && (1 == this.formData.appointmentType || this.formData.appointmentType, t = 118.79772200000002, 1 == this.formData.appointmentType || this.formData.appointmentType, e = 32.038989000000036), a.index.openLocation({
          latitude: parseFloat(e),
          longitude: parseFloat(t)
        })
      },
      checkTime: function(a) {
        var e = a.split(":"),
          i = t(e, 2),
          n = i[0],
          o = (i[1], parseInt(n));
        return o >= 0 && o < 12 ? "上午" : "下午"
      },
      modifyTime: function(a, e) {
        var i = a.split(":"),
          n = t(i, 2),
          o = n[0],
          r = n[1],
          p = parseInt(o),
          s = parseInt(r);
        return "plus" === e ? (s += 30) >= 60 && (p++, s -= 60) : "minus" === e && ((s -= 30) < 0 && (p--, s += 60)), "".concat(p.toString().padStart(2, "0"), ":").concat(s.toString().padStart(2, "0"))
      }
    },
    unmounted: function() {
      this.$store.dispatch("setFormData", null)
    }
  };
Array || (a.resolveComponent("page-head") + a.resolveComponent("uni-icons"))(), Math;
var n = a._export_sfc(i, [
  ["render", function(t, i, n, o, r, p) {
    return a.e({
      a: a.p({
        title: r.yyjg
      }),
      b: a.p({
        type: "checkbox-filled",
        color: "#C7AB7E",
        size: "112rpx"
      }),
      c: a.t(r.yyjg),
      d: "待窗口核验" == r.yyjg
    }, "待窗口核验" == r.yyjg ? a.e({
      e: a.t("NJLJXWASJZ" == r.formData.hallCode ? "在陈列馆入口安检处核验" : "前往参观场馆咨询窗口核验"),
      f: "NJLJXWASJZ" != r.formData.hallCode
    }, "NJLJXWASJZ" != r.formData.hallCode ? {
      g: a.t(r.entrance)
    } : {}, {
      h: a.t(r.hint)
    }) : {}, {
      i: "待审核" == r.yyjg
    }, "待审核" == r.yyjg ? {
      j: a.t(r.entrance),
      k: a.t(r.hint)
    } : {}, {
      l: "待入馆" == r.yyjg
    }, "待入馆" == r.yyjg ? {
      m: a.t(r.entrance),
      n: a.t(r.hint)
    } : {}, {
      o: "待实名验证" == r.yyjg
    }, (r.yyjg, {}), {
      p: a.t(1 == r.formData.appointmentType ? "普通预约" : 2 == r.formData.appointmentType ? "亲子预约" : 3 == r.formData.appointmentType ? "优待预约" : ""),
      q: e._imports_0$4,
      r: a.t(r.formData.yycg),
      s: e._imports_1$2,
      t: a.t(r.formData.yysj),
      v: e._imports_2,
      w: a.t(r.formData.yyrs),
      x: "DTSYNTB" == r.formData.hallCode
    }, "DTSYNTB" == r.formData.hallCode ? {
      y: a.o((function() {
        return p.navigation && p.navigation.apply(p, arguments)
      }))
    } : {}, {
      z: "SGBS" == r.formData.hallCode
    }, "SGBS" == r.formData.hallCode ? {
      A: a.o((function() {
        return p.navigation && p.navigation.apply(p, arguments)
      }))
    } : {}, {
      B: "NJLJXWASJZ" == r.formData.hallCode
    }, "NJLJXWASJZ" == r.formData.hallCode ? {
      C: a.o((function() {
        return p.navigation && p.navigation.apply(p, arguments)
      }))
    } : {}, {
      D: e._imports_3$1,
      E: a.o((function() {
        return p.navigation && p.navigation.apply(p, arguments)
      })),
      F: "DTSYNTB" == r.formData.hallCode
    }, "DTSYNTB" == r.formData.hallCode ? a.e({
      G: 3 != r.formData.entranceType
    }, (r.formData.entranceType, {})) : {}, {
      H: "SGBS" == r.formData.hallCode
    }, "SGBS" == r.formData.hallCode ? a.e({
      I: 3 != r.formData.entranceType
    }, (r.formData.entranceType, {})) : {}, {
      J: "NJLJXWASJZ" == r.formData.hallCode
    }, "NJLJXWASJZ" == r.formData.hallCode ? a.e({
      K: 3 != r.formData.entranceType
    }, (r.formData.entranceType, {})) : {}, {
      L: a.o((function() {
        return p.view && p.view.apply(p, arguments)
      }))
    })
  }],
  ["__scopeId", "data-v-dbb94038"]
]);
wx.createPage(n);