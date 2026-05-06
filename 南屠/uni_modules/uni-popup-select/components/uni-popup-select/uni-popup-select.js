var e = require("../../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  t = {
    name: "uni-popup-select",
    model: {
      prop: "value",
      event: "change"
    },
    props: {
      value: {
        type: [String, Number],
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      dataList: {
        type: Array,
        default: function() {
          return []
        }
      },
      safeArea: {
        type: Boolean,
        default: !0
      },
      cancelText: {
        type: String,
        default: "取消"
      }
    },
    data: function() {
      return {}
    },
    methods: {
      showHide: function(e) {
        0 == e.show && this.$emit("close")
      },
      changeSelect: function(e) {
        this.$emit("update:value", e.value), this.$emit("change", e.value), this.close()
      },
      open: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "bottom";
        this.$refs.popup.open(e)
      },
      close: function() {
        this.$refs.popup.close(), this.$emit("close")
      }
    }
  };
Array || (e.resolveComponent("uni-icons") + e.resolveComponent("uni-popup"))(), Math || (function() {
  return "../../../uni-icons/components/uni-icons/uni-icons.js"
} + function() {
  return "../../../uni-popup/components/uni-popup/uni-popup.js"
})();
var n = e._export_sfc(t, [
  ["render", function(t, n, o, u, a, i) {
    return e.e({
      a: !!o.subTitle
    }, o.subTitle ? {
      b: e.t(o.subTitle)
    } : {}, {
      c: e.f(o.dataList, (function(t, n, u) {
        return {
          a: e.t(t.name),
          b: "091884c6-1-" + u + ",091884c6-0",
          c: e.p({
            type: "checkmarkempty",
            size: "24",
            color: o.value == t.value ? "#3E6FC4" : ""
          }),
          d: o.value == t.value ? 1 : "",
          e: t.value,
          f: e.o((function(e) {
            return i.changeSelect(t)
          }), t.value)
        }
      })),
      d: e.t(o.cancelText),
      e: e.o((function() {
        return i.close && i.close.apply(i, arguments)
      })),
      f: e.sr("popup", "091884c6-0"),
      g: e.o(i.showHide),
      h: e.p({
        "class-name": "max-index",
        safeArea: o.safeArea
      })
    })
  }]
]);
wx.createComponent(n);