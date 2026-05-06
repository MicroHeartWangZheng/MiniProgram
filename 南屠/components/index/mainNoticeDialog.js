var e = require("../../302F12419CEDE14F56497A46F35AA3A7.js"),
  t = require("../../42DF72329CEDE14F24B91A35674AA3A7.js"),
  o = {
    components: {
      dialogWrap: function() {
        return "../dialogWrap.js"
      }
    },
    props: {
      notice: {
        type: Object,
        default: function() {
          return {}
        }
      }
    },
    data: function() {
      return {}
    },
    methods: {
      open: function() {
        this.$refs.dialogWrap.open()
      },
      close: function() {
        this.$emit("close"), this.$refs.dialogWrap.close()
      }
    }
  };
Array || e.resolveComponent("dialog-wrap")();
var i = e._export_sfc(o, [
  ["render", function(o, i, n, r, c, s) {
    return e.e({
      a: n.notice
    }, n.notice ? e.e({
      b: n.notice.imageUrl
    }, n.notice.imageUrl ? {
      c: n.notice.imageUrl
    } : {
      d: t._imports_3,
      e: e.t(n.notice.title),
      f: e.t(n.notice.content),
      g: e.t(n.notice.phone),
      h: e.t(n.notice.miniTips1),
      i: e.t(n.notice.miniTips2)
    }) : {}, {
      j: e.sr("dialogWrap", "50be2078-0"),
      k: e.p({
        position: "center",
        isMaskClick: !1
      })
    })
  }],
  ["__scopeId", "data-v-50be2078"]
]);
wx.createComponent(i);