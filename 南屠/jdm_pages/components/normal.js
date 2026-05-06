var e, t = require("../../@babel/runtime/helpers/defineProperty"),
  r = require("../../@babel/runtime/helpers/objectSpread2"),
  i = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../302F12419CEDE14F56497A46F35AA3A7.js");
require("../../99A56A709CEDE14FFFC30277932AA3A7.js");
var s = require("../../42DF72329CEDE14F24B91A35674AA3A7.js");
require("../../F13970549CEDE14F975F18534C3AA3A7.js"), require("../../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../../E6064C639CEDE14F806024649ACAA3A7.js"), require("../../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../../2800CA079CEDE14F4E66A20028DAA3A7.js");
var o = (t(e = {
  components: {
    personnelSelect: function() {
      return "../../components/personnelSelect/index.js"
    }
  },
  props: {
    formData: {
      type: [Object],
      default: function() {
        return {}
      }
    },
    audienceList: {
      type: [Array],
      default: function() {
        return []
      }
    }
  },
  data: function() {
    return {
      userInfo: {}
    }
  },
  mounted: function() {
    var e = this;
    return n(i().mark((function t() {
      return i().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e.userInfo = a.index.getStorageSync("userInfo") ? JSON.parse(a.index.getStorageSync("userInfo")) : {};
          case 1:
          case "end":
            return t.stop()
        }
      }), t)
    })))()
  },
  computed: {
    dictList: function() {
      var e = this;
      return this.audienceList.filter((function(e) {
        return 6 != e.visitorTag && 8 != e.specialType && 9 != e.specialType
      })).map((function(t) {
        var i = JSON.parse(JSON.stringify(t));
        i.disabled = !1;
        var n = e.formData.hallCode,
          a = i.hallCodeList || [],
          s = i.visitorBlackType,
          o = !1,
          u = [],
          d = [];
        if ((n || 0 != n.length) && a.forEach((function(e) {
            n == e.hallCode && (s = e.visitorBlackType, u.push(String(new Date(e.expireTime).getMonth() + 1).padStart(2, "0")), d.push(e), o = !0)
          })), 2 == s && (i.disabled = "该观众爽约次数已达上限，暂不支持预约"), 3 == s && (i.disabled = "该观众本月预约取消次数已达上限，暂不支持预约"), 4 == s && (i.disabled = "该观众本月预约次数已达上限，暂不支持预约"), e.formData.date && 1 != i.visitorBlackType)
          if (4 == s) {
            if (o) {
              var l = new Date(e.formData.date),
                c = String(l.getMonth() + 1).padStart(2, "0"),
                p = null;
              if (u.forEach((function(e, t) {
                  e == c && (p = t)
                })), null != p) {
                var f = d[p],
                  m = f.expireTime,
                  h = new Date(m),
                  S = h.getFullYear() + "-" + String(h.getMonth() + 1).padStart(2, "0") + "-" + String(h.getDate()).padStart(2, "0"),
                  g = new Date(e.formData.date);
                new Date(S) < g && (f.disabled = !1)
              } else i.disabled = !1
            }
          } else if (2 == s || 3 == s) {
          var v = i.expireTime,
            b = new Date(v),
            D = b.getFullYear() + "-" + String(b.getMonth() + 1).padStart(2, "0") + "-" + String(b.getDate()).padStart(2, "0"),
            L = new Date(e.formData.date);
          new Date(D) < L && (i.disabled = !1)
        }
        return 1 == i.visitorBlackType && (i.disabled = "该观众账号异常，请联系工作人员025-86612230（8:00至20:00）。"), 2 == i.visitorStatus && (i.disabled = "该观众账号在编辑3天后方可使用"), 3 == i.visitorStatus && (i.disabled = "该观众处于“删除中”状态，暂不支持预约"), 6 == i.visitorTag && (i.disabled = "未成年人预约须前往亲子预约通道"), 1 == i.visitorIdType && 4 == i.sfzAuditStatus && (i.disabled = "实名验证失败"), r({}, i)
      }))
    },
    selectedNum: function() {
      return this.formData.personnelList ? this.formData.personnelList.length : 0
    }
  }
}, "data", (function() {
  return {
    personnelList: [],
    hintList: ["14周岁（不含）以下未成年人请前往“亲子预约”。"],
    waHintList: []
  }
})), t(e, "methods", {
  audienceUpdate: function(e) {}
}), e);
Array || a.resolveComponent("personnelSelect")();
var u = a._export_sfc(o, [
  ["render", function(e, t, r, i, n, o) {
    return {
      a: s._imports_0$6,
      b: a.sr("personnelSelectRef", "5d37c27e-0"),
      c: a.o(o.audienceUpdate),
      d: a.o((function(e) {
        return r.formData.personnelList = e
      })),
      e: a.p({
        type: "观众",
        dictList: o.dictList,
        topHint: "NJLJXWASJZ" == r.formData.hallCode ? n.waHintList : n.hintList,
        hint: "NJLJXWASJZ" == r.formData.hallCode ? n.waHintList : n.hintList,
        selectedNum: o.selectedNum,
        editBtn: !0,
        value: r.formData.personnelList
      })
    }
  }],
  ["__scopeId", "data-v-5d37c27e"]
]);
wx.createComponent(u);