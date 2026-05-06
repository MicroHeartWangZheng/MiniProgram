var e = require("../../B5FE78D69CEDE14FD39810D1421AA3A7.js"),
  t = require("../../302F12419CEDE14F56497A46F35AA3A7.js");
require("../../F13970549CEDE14F975F18534C3AA3A7.js"), require("../../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../../E6064C639CEDE14F806024649ACAA3A7.js"), require("../../99A56A709CEDE14FFFC30277932AA3A7.js"), require("../../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../../42DF72329CEDE14F24B91A35674AA3A7.js"), require("../../2800CA079CEDE14F4E66A20028DAA3A7.js");
var i = {
  components: {
    dialogWrap: function() {
      return "../dialogWrap.js"
    },
    mpHtml: function() {
      return "../../node-modules/mp-html/dist/uni-app/components/mp-html/mp-html.js"
    }
  },
  data: function() {
    return {
      isShow: !1,
      info: "",
      timer: null,
      time: 5,
      isAgree: !1
    }
  },
  mounted: function() {
    this.init()
  },
  unmounted: function() {
    clearTimeout(this.timer)
  },
  methods: {
    startDown: function() {
      var e = this;
      clearTimeout(this.timer);
      ! function t() {
        e.time > 0 && (e.timer = setTimeout((function() {
          e.time--, t()
        }), 1e3))
      }()
    },
    toggleAgree: function() {
      this.isAgree = !this.isAgree
    },
    init: function() {
      var t = this,
        i = (new Date).getTime();
      e.readFileDeail(this.$settings.fileDownUrl + "/json/appointmentTips.json?A=" + i).then((function(e) {
        1e3 == e.code && (t.info = e.data, t.isShow && t.startDown())
      }))
    },
    open: function() {
      this.$store.state.indexShowDialog && (this.$refs.dialogWrap.open(), this.info ? this.startDown() : this.isShow = !0)
    },
    close: function() {
      this.time <= 0 && this.isAgree && (this.$refs.dialogWrap.close(), this.$store.dispatch("setState", {
        key: "indexShowDialog",
        value: !1
      }), this.time = 5)
    }
  }
};
Array || (t.resolveComponent("mpHtml") + t.resolveComponent("uni-icons") + t.resolveComponent("dialog-wrap"))(), Math;
var o = t._export_sfc(i, [
  ["render", function(e, i, o, n, s, r) {
    return t.e({
      a: t.p({
        content: s.info
      }),
      b: t.p({
        type: s.isAgree ? "checkbox-filled" : "circle",
        color: "#A87E6C",
        size: "24"
      }),
      c: t.o((function() {
        return r.toggleAgree && r.toggleAgree.apply(r, arguments)
      })),
      d: s.time || !s.isAgree
    }, s.time || !s.isAgree ? {
      e: t.t(s.time ? "（0".concat(s.time, "s）") : "")
    } : {}, {
      f: s.time > 0 || !s.isAgree ? 1 : "",
      g: t.o((function() {
        return r.close && r.close.apply(r, arguments)
      })),
      h: t.sr("dialogWrap", "4c559ef7-0"),
      i: t.p({
        position: "center",
        isMaskClick: !1
      })
    })
  }],
  ["__scopeId", "data-v-4c559ef7"]
]);
wx.createComponent(o);