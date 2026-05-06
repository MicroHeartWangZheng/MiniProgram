var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../@babel/runtime/helpers/objectSpread2"),
  o = require("../../302F12419CEDE14F56497A46F35AA3A7.js");
require("../../99A56A709CEDE14FFFC30277932AA3A7.js"), require("../../B5FE78D69CEDE14FD39810D1421AA3A7.js"), require("../../F13970549CEDE14F975F18534C3AA3A7.js"), require("../../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../../E6064C639CEDE14F806024649ACAA3A7.js"), require("../../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../../42DF72329CEDE14F24B91A35674AA3A7.js"), require("../../2800CA079CEDE14F4E66A20028DAA3A7.js");
var t = {
  computed: n(n({}, o.mapState(["versioncontrol"])), {}, {
    isDisAllowScroll: function() {
      return this.$store.state.isDisAllowScroll || !1
    }
  }),
  components: {
    standard: function() {
      return "./standard.js"
    },
    oldage: function() {
      return "./oldage.js"
    },
    englishiver: function() {
      return "./englishiver.js"
    }
  },
  data: function() {
    return {}
  },
  onShow: function() {
    this.init(), o.index.getStorageSync("versioncontrol") ? this.$store.dispatch("setState", {
      key: "versioncontrol",
      value: o.index.getStorageSync("versioncontrol")
    }) : o.index.setStorageSync("versioncontrol", this.versioncontrol)
  },
  mounted: function() {},
  methods: {
    init: function() {
      var n = this;
      return r(e().mark((function r() {
        return e().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              1 == n.versioncontrol && n.$nextTick((function() {
                n.$refs.standard.readFileDeail()
              })), 2 == n.versioncontrol && n.$nextTick((function() {
                n.$refs.oldage.readFileDeail()
              })), 3 == n.versioncontrol && n.$nextTick((function() {
                n.$refs.englishiver.readFileDeail()
              }));
            case 1:
            case "end":
              return e.stop()
          }
        }), r)
      })))()
    }
  }
};
Array || (o.resolveComponent("standard") + o.resolveComponent("oldage") + o.resolveComponent("englishiver"))();
var i = o._export_sfc(t, [
  ["render", function(e, r, n, t, i, s) {
    return o.e({
      a: "overflow:" + (s.isDisAllowScroll ? "hidden" : "visible"),
      b: 1 == e.versioncontrol
    }, 1 == e.versioncontrol ? {
      c: o.sr("standard", "22201dd5-0")
    } : {}, {
      d: 2 == e.versioncontrol
    }, 2 == e.versioncontrol ? {
      e: o.sr("oldage", "22201dd5-1")
    } : {}, {
      f: 3 == e.versioncontrol
    }, 3 == e.versioncontrol ? {
      g: o.sr("englishiver", "22201dd5-2")
    } : {})
  }],
  ["__scopeId", "data-v-22201dd5"]
]);
wx.createPage(i);