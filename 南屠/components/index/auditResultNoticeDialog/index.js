var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../CEEEAD579CEDE14FA888C550C20AA3A7.js"),
  n = require("../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  o = require("../../../42DF72329CEDE14F24B91A35674AA3A7.js");
require("../../../F13970549CEDE14F975F18534C3AA3A7.js"), require("../../../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../../../E6064C639CEDE14F806024649ACAA3A7.js"), require("../../../99A56A709CEDE14FFFC30277932AA3A7.js"), require("../../../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../../../2800CA079CEDE14F4E66A20028DAA3A7.js");
var r = {
  components: {
    dialogWrap: function() {
      return "../../dialogWrap.js"
    },
    mpHtml: function() {
      return "../../../node-modules/mp-html/dist/uni-app/components/mp-html/mp-html.js"
    }
  },
  data: function() {
    return {
      dialogContent: {
        CN: {
          content: "您的证件审核状态已更新 <br/>请及时查看详情",
          btnText: "点击查看"
        },
        EN: {
          content: "Your ID verification status has been updated. Please check the details in a timely manner.",
          btnText: "click to view"
        }
      },
      result: ""
    }
  },
  mounted: function() {},
  computed: e({}, n.mapState(["versioncontrol"])),
  unmounted: function() {},
  methods: {
    open: function() {
      var e = this;
      this.$store.state.indexAuditResultShowDialog && t.getSpecialResultNotice().then((function(t) {
        1e3 == t.code && t.data && (e.result = t.data, e.$refs.dialogWrap.open())
      }))
    },
    skip: function() {
      this.close(), this.$utils.userNavigateTo("/jdm_pages/my/subscribe/index")
    },
    close: function() {
      this.$store.dispatch("setState", {
        key: "indexAuditResultShowDialog",
        value: !1
      }), this.$refs.dialogWrap.close()
    }
  }
};
Array || (n.resolveComponent("mpHtml") + n.resolveComponent("dialog-wrap"))();
var i = n._export_sfc(r, [
  ["render", function(e, t, r, i, s, l) {
    var u, a, c, p, d, m, v, g;
    return n.e({
      a: "useFront" == (null == (u = s.result) ? void 0 : u.alertType)
    }, "useFront" == (null == (a = s.result) ? void 0 : a.alertType) ? n.e({
      b: 3 == e.versioncontrol
    }, 3 == e.versioncontrol ? {
      c: n.p({
        content: s.dialogContent.EN.content
      })
    } : {
      d: n.p({
        content: s.dialogContent.CN.content
      })
    }) : {}, {
      e: "useFront" == (null == (c = s.result) ? void 0 : c.alertType)
    }, "useFront" == (null == (p = s.result) ? void 0 : p.alertType) ? {
      f: n.t(3 == e.versioncontrol ? s.dialogContent.EN.btnText : s.dialogContent.CN.btnText),
      g: n.o((function(e) {
        return l.skip()
      }))
    } : {}, {
      h: "useServer" == (null == (d = s.result) ? void 0 : d.alertType)
    }, "useServer" == (null == (m = s.result) ? void 0 : m.alertType) ? {
      i: n.t(3 == e.versioncontrol ? null == (v = s.result) ? void 0 : v.resultEnReason : null == (g = s.result) ? void 0 : g.resultReason)
    } : {}, {
      j: 2 == e.versioncontrol ? 1 : "",
      k: o._imports_0$2,
      l: n.o((function() {
        return l.close && l.close.apply(l, arguments)
      })),
      m: n.sr("dialogWrap", "daa23e5a-0"),
      n: n.p({
        position: "center",
        isMaskClick: !1
      })
    })
  }],
  ["__scopeId", "data-v-daa23e5a"]
]);
wx.createComponent(i);