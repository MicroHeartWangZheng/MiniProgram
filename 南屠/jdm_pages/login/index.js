var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/objectSpread2"),
  i = require("../../302F12419CEDE14F56497A46F35AA3A7.js"),
  r = require("../../99A56A709CEDE14FFFC30277932AA3A7.js");
require("../../F13970549CEDE14F975F18534C3AA3A7.js"), require("../../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../../E6064C639CEDE14F806024649ACAA3A7.js"), require("../../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../../42DF72329CEDE14F24B91A35674AA3A7.js"), require("../../2800CA079CEDE14F4E66A20028DAA3A7.js");
var o = {
  components: {},
  data: function() {
    return {
      isAgree: 1
    }
  },
  mounted: function() {},
  unmounted: function() {},
  methods: t(t({}, i.mapActions(["setState"])), {}, {
    showTip: function() {
      i.index.showToast({
        title: "请仔细阅读并确认同意《服务协议与隐私条款》",
        icon: "none",
        duration: 2e3
      })
    },
    toAgreePage: function() {
      this.$utils.navigateTo("/jdm_pages/login/agreement")
    },
    backPage: function() {
      var e = getCurrentPages(),
        n = e[e.length - 2].route,
        t = e[e.length - 2].options;
      if ("/jdm_pages/login/index" == n || "jdm_pages/login/index" == n) i.index.redirectTo({
        url: "/pages/index/index"
      });
      else {
        if ("{}" != JSON.stringify(t)) {
          var r = [];
          for (var o in t) r.push("".concat(o, "=").concat(t[o]));
          n += "?" + r.join("&")
        }
        i.index.redirectTo({
          url: "/".concat(n)
        })
      }
    },
    getUserInfo: function() {
      return n(e().mark((function n() {
        var t;
        return e().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.next = 2, r.loginGetUserInfo();
            case 2:
              1e3 == (t = e.sent).code && (i.index.setStorageSync("isUserInfo", !0), i.index.setStorageSync("userInfo", JSON.stringify(t.data)), i.index.reLaunch({
                url: "/pages/index/index"
              }));
            case 4:
            case "end":
              return e.stop()
          }
        }), n)
      })))()
    },
    getLogin: function() {
      var e = this,
        n = this;
      this.isAgree ? (i.index.showLoading({
        title: "加载中"
      }), i.index.login({
        success: function(t) {
          if (t.code) {
            var o = {
              code: t.code
            };
            r.loginAppletLogin(o).then((function(t) {
              1e3 == t.code && (i.index.setStorageSync("tokenTime", (new Date).getTime()), i.index.setStorageSync("token", t.data.token), i.index.setStorageSync("refreshToken", t.data.refreshToken), i.index.setStorageSync("isLogin", !0), n.$store.dispatch("setState", {
                key: "refreshToken",
                value: t.data.refreshToken
              }), n.$store.dispatch("setState", {
                key: "token",
                value: t.data.token
              }), n.$store.dispatch("setState", {
                key: "isLogin",
                value: !0
              }), e.getUserInfo())
            })).finally((function() {
              i.index.hideLoading()
            }))
          }
        }
      })) : i.index.showToast({
        title: "请仔细阅读并确认同意《服务协议与隐私条款》",
        icon: "none"
      })
    },
    agree: function() {
      this.isAgree = !0
    },
    toggleAgree: function() {
      this.isAgree = !this.isAgree
    }
  })
};
Array || (i.resolveComponent("page-head") + i.resolveComponent("uni-icons"))(), Math;
var s = i._export_sfc(o, [
  ["render", function(e, n, t, r, o, s) {
    return i.e({
      a: i.p({
        title: "授权登录"
      }),
      b: o.isAgree
    }, o.isAgree ? {
      c: i.o((function() {
        return s.getLogin && s.getLogin.apply(s, arguments)
      }))
    } : {
      d: i.o((function() {
        return s.showTip && s.showTip.apply(s, arguments)
      }))
    }, {
      e: i.o(s.toggleAgree),
      f: i.p({
        type: o.isAgree ? "checkbox-filled" : "circle",
        color: "#A87E6C",
        size: "20"
      }),
      g: i.o((function() {
        return s.toggleAgree && s.toggleAgree.apply(s, arguments)
      })),
      h: i.o((function() {
        return s.toAgreePage && s.toAgreePage.apply(s, arguments)
      }))
    })
  }],
  ["__scopeId", "data-v-a746e1de"]
]);
wx.createPage(s);