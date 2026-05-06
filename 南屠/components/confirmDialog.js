var t = require("../302F12419CEDE14F56497A46F35AA3A7.js"),
  e = {
    components: {
      dialogWrap: function() {
        return "./dialogWrap.js"
      }
    },
    props: {
      title: {
        type: String
      },
      content: {
        type: String
      },
      cancelText: {
        type: String,
        default: "我再想想"
      },
      confirmText: {
        type: String,
        default: "确定取消"
      }
    },
    data: function() {
      return {}
    },
    methods: {
      open: function() {
        this.$refs.dialog.open()
      },
      close: function() {
        this.$refs.dialog.close()
      },
      cancel: function() {
        this.$emit("cancel"), this.close()
      },
      sure: function() {
        this.$emit("confirm")
      }
    }
  };
Array || t.resolveComponent("dialogWrap")();
var n = t._export_sfc(e, [
  ["render", function(e, n, o, r, c, i) {
    return {
      a: t.t(o.title),
      b: t.t(o.content),
      c: t.t(o.cancelText),
      d: t.o((function() {
        return i.cancel && i.cancel.apply(i, arguments)
      })),
      e: t.t(o.confirmText),
      f: t.o((function() {
        return i.sure && i.sure.apply(i, arguments)
      })),
      g: t.sr("dialog", "07a570e9-0"),
      h: t.p({
        position: "center"
      })
    }
  }],
  ["__scopeId", "data-v-07a570e9"]
]);
wx.createComponent(n);