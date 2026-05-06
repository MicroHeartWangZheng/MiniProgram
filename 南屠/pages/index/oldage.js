var e = require("../../302F12419CEDE14F56497A46F35AA3A7.js"),
  i = require("../../B5FE78D69CEDE14FD39810D1421AA3A7.js"),
  o = require("../../42DF72329CEDE14F24B91A35674AA3A7.js");
require("../../F13970549CEDE14F975F18534C3AA3A7.js"), require("../../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../../E6064C639CEDE14F806024649ACAA3A7.js"), require("../../99A56A709CEDE14FFFC30277932AA3A7.js"), require("../../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../../2800CA079CEDE14F4E66A20028DAA3A7.js");
var n = {
  components: {
    tabbar: function() {
      return "../../components/tabbar/index.js"
    },
    mainNoticeDialog: function() {
      return "../../components/index/mainNoticeDialog.js"
    },
    appointNoticeDialogold: function() {
      return "../../components/index/appointNoticeDialogold.js"
    },
    auditResultNoticeDialog: function() {
      return "../../components/index/auditResultNoticeDialog/index.js"
    }
  },
  computed: {
    isDesktopForbiddenPopupVisible: function() {
      return this.$store.state.isDesktopForbiddenPopupVisible
    },
    indexIsGray: function() {
      return this.$store.state.indexIsGray || !1
    }
  },
  data: function() {
    return {
      isShowed: !1,
      notice: null,
      time: null,
      arr: []
    }
  },
  mounted: function() {},
  onLoad: function(e) {},
  onShow: function() {},
  methods: {
    versionswitching: function() {
      this.$utils.navigateTo("/pages/index/version")
    },
    readFileDeail: function() {
      var o = this,
        n = (new Date).getTime(),
        t = e.index.getStorageSync("notice"),
        s = !0;
      if (t) {
        (t = new Date(t - 0)).setHours(0), t.setMinutes(0), t.setMilliseconds(0), t.setSeconds(0), t = t.getTime();
        var a = new Date;
        a.setHours(0), a.setMinutes(0), a.setMilliseconds(0), a.setSeconds(0), (a = a.getTime()) - t < 864e5 && (s = !1)
      }
      i.readFileDeail(this.$settings.fileDownUrl + "/json/baTips.json?A=" + n).then((function(i) {
        1e3 == i.code && (0 == i.data.status && s ? (o.notice = i.data || null, o.$refs.mainNoticeDialogRef.open(), e.index.setStorageSync("notice", n)) : o.openMDialog(), i.data.isMemorialDay && o.$store.dispatch("setState", {
          key: "indexIsGray",
          value: !0
        }))
      }))
    },
    openARNDialog: function() {
      this.$refs.auditResultNoticeDialogRef.open()
    },
    openMDialog: function() {
      this.isShowed || (this.$refs.appointNoticeDialogRef.open(), this.isShowed = !0)
    },
    skip: function(i) {
      e.index.navigateTo({
        url: "/oldage_pages/appointment/index?typeIndex=" + i
      })
    }
  }
};
Array || (e.resolveComponent("page-head") + e.resolveComponent("auditResultNoticeDialog") + e.resolveComponent("mainNoticeDialog") + e.resolveComponent("appointNoticeDialogold") + e.resolveComponent("tabbar") + e.resolveComponent("desktop-forbidden"))();
var t = e._export_sfc(n, [
  ["render", function(i, n, t, s, a, r) {
    return e.e({
      a: o._imports_0$1,
      b: e.p({
        capsule: !0
      }),
      c: !r.isDesktopForbiddenPopupVisible
    }, r.isDesktopForbiddenPopupVisible ? {} : {
      d: o._imports_1$4,
      e: o._imports_2$1,
      f: e.o((function() {
        return r.versionswitching && r.versionswitching.apply(r, arguments)
      })),
      g: e.o((function(e) {
        return r.skip(1)
      })),
      h: e.o((function(e) {
        return r.skip(2)
      })),
      i: e.o((function(e) {
        return r.skip(3)
      })),
      j: e.sr("auditResultNoticeDialogRef", "2632409a-1"),
      k: e.sr("mainNoticeDialogRef", "2632409a-2"),
      l: e.o(r.openMDialog),
      m: e.p({
        notice: a.notice
      }),
      n: e.sr("appointNoticeDialogRef", "2632409a-3"),
      o: e.p({
        currentIndex: 0
      })
    }, {
      p: r.indexIsGray ? "grayscale(.95)" : "none"
    })
  }],
  ["__scopeId", "data-v-2632409a"]
]);
wx.createComponent(t);