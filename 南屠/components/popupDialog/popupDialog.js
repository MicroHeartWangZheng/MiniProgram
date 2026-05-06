var e = require("../../302F12419CEDE14F56497A46F35AA3A7.js"),
  t = {
    name: "dialog",
    props: {
      refName: {
        type: String,
        default: "dialogRef"
      },
      title: {
        type: String,
        default: ""
      },
      isMaskClick: {
        type: Boolean,
        default: !0
      },
      isHideMask: {
        type: Boolean,
        default: !1
      },
      btnName: {
        type: String,
        default: function() {
          return "取消"
        }
      },
      isActive: {
        type: Boolean,
        default: function() {
          return !0
        }
      },
      popupData: {
        type: Array,
        default: function() {}
      }
    },
    watch: {
      popupData: {
        handler: function(e, t) {
          this.popupDataNew = JSON.parse(JSON.stringify(e))
        },
        deep: !0
      }
    },
    data: function() {
      return {
        popupDataNew: [],
        checkUrl: this.$settings.imgUrl + "mine/check.png"
      }
    },
    mounted: function() {
      this.popupDataNew = JSON.parse(JSON.stringify(this.popupData))
    },
    methods: {
      openPopup: function(e) {
        var t = this;
        e && this.popupDataNew.map((function(a) {
          t.$set(a, "active", a.name == e.name)
        })), this.$refs[this.refName].open("bottom"), this.isHideMask && this.$refs[this.refName].closeMask()
      },
      popupChange: function(e) {
        this.$emit("onDialogVisibleChange", e.show)
      },
      selcetClick: function(e) {
        this.$emit("onSelcetClick", e)
      },
      closePopup: function() {
        this.$refs[this.refName].close(), this.$emit("closePopup")
      }
    }
  };
Array || e.resolveComponent("uni-popup")(), Math;
var a = e._export_sfc(t, [
  ["render", function(t, a, i, n, o, p) {
    return e.e({
      a: i.title
    }, i.title ? {
      b: e.t(i.title)
    } : {}, {
      c: e.f(o.popupDataNew, (function(t, a, n) {
        return e.e({
          a: t.img
        }, t.img ? e.e({
          b: "share" == t.type
        }, "share" == t.type ? {
          c: t.img,
          d: e.t(t.name)
        } : {
          e: e.t(t.name)
        }) : e.e({
          f: "share" == t.type
        }, "share" == t.type ? {
          g: e.t(t.name)
        } : {
          h: e.t(t.name)
        }, {
          i: t.active
        }, t.active ? {
          j: o.checkUrl
        } : {}), {
          k: 0 != a ? 1 : "",
          l: t.active && i.isActive ? 1 : "",
          m: t.img ? 1 : "",
          n: a,
          o: e.o((function(e) {
            return p.selcetClick(t)
          }), a)
        })
      })),
      d: e.s((i.title, "")),
      e: e.t(i.btnName),
      f: e.o((function() {
        return p.closePopup && p.closePopup.apply(p, arguments)
      })),
      g: e.sr(i.refName, "37acdb73-0"),
      h: i.refName,
      i: e.o(p.popupChange),
      j: e.o(p.closePopup),
      k: e.p({
        "background-color": "",
        "is-mask-click": i.isMaskClick,
        "safe-area": !1
      })
    })
  }],
  ["__scopeId", "data-v-37acdb73"]
]);
wx.createComponent(a);