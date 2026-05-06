var t, e = require("../@babel/runtime/helpers/defineProperty"),
  n = require("../302F12419CEDE14F56497A46F35AA3A7.js"),
  i = require("../42DF72329CEDE14F24B91A35674AA3A7.js"),
  a = {
    options: {
      styleIsolation: "shared"
    },
    name: "navigator",
    props: (t = {
      title: {
        type: String,
        default: ""
      },
      isSticky: {
        type: Boolean,
        default: !0
      },
      capsule: {
        type: Boolean,
        default: !0
      },
      isEmpty: {
        type: Boolean,
        default: !1
      },
      isDarkColor: {
        type: Boolean,
        default: !1
      }
    }, e(t, "title", String), e(t, "isShowLogo", {
      type: Boolean,
      default: !1
    }), e(t, "isShowLeft", {
      type: Boolean,
      default: !1
    }), e(t, "homeUrl", {
      type: String,
      default: ""
    }), e(t, "backUrl", {
      type: String,
      default: ""
    }), e(t, "isCustomBack", {
      type: Boolean,
      default: !1
    }), t),
    data: function() {
      return {
        navInfo: {
          navHeight: 0,
          btnWidth: 0,
          btnHeight: 0,
          statusBar: 0
        },
        logoIcon: this.$settings.imgUrl + "nav/logo.png",
        backIcon: this.$settings.imgUrl + "nav/icon-back.png",
        homeIcon: this.$settings.imgUrl + "nav/icon-home.png",
        backIconWhite: this.$settings.imgUrl + "nav/icon-back-white.png",
        homeIconWhite: this.$settings.imgUrl + "nav/icon-home-white.png",
        urlPath: ["/pages/index/index", "/pages/activity/index", "/pages/space/index", "/pages/mine/index"]
      }
    },
    mounted: function() {
      try {
        var t = n.index.getStorageSync("storage_nav_info");
        t ? (this.$emit("emit", t), this.navInfo = JSON.parse(t)) : this.getNavHeight()
      } catch (t) {
        this.getNavHeight()
      }
    },
    methods: {
      getNavHeight: function() {
        var t = this;
        n.index.getSystemInfo({
          success: function(e) {
            if (n.index.getMenuButtonBoundingClientRect) {
              var i = n.index.getMenuButtonBoundingClientRect();
              t.navInfo.navHeight = 2 * (i.top - Number(e.statusBarHeight)) + i.height, t.navInfo.btnWidth = i.width, t.navInfo.btnHeight = i.height, t.navInfo.navTop = i.top, t.navInfo.statusBar = e.statusBarHeight, t.$emit("emit", t.navInfo), n.index.setStorage({
                key: "storage_nav_info",
                data: JSON.stringify(t.navInfo),
                success: function() {}
              })
            }
          }
        })
      },
      back: function() {
        n.index.navigateBack({
          delta: 1
        })
      },
      backHome: function() {
        n.index.reLaunch({
          url: "/pages/index/index"
        })
      }
    }
  },
  o = n._export_sfc(a, [
    ["render", function(t, e, a, o, s, r) {
      return n.e({
        a: a.capsule
      }, a.capsule ? {
        b: i._imports_0,
        c: n.o((function() {
          return r.back && r.back.apply(r, arguments)
        })),
        d: i._imports_1,
        e: n.o((function() {
          return r.backHome && r.backHome.apply(r, arguments)
        })),
        f: s.navInfo.btnWidth + "px",
        g: s.navInfo.btnHeight + "px",
        h: n.t(a.title),
        i: s.navInfo.navTop + "px",
        j: s.navInfo.btnHeight + "px"
      } : {}, {
        k: a.isSticky ? 1 : "",
        l: s.navInfo.navHeight + s.navInfo.statusBar + "px"
      })
    }],
    ["__scopeId", "data-v-f9ae89e7"]
  ]);
wx.createComponent(o);