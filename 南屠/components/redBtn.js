var t = require("../302F12419CEDE14F56497A46F35AA3A7.js"),
  e = {
    components: {
      btnWrap: function() {
        return "./btnWrap.js"
      }
    },
    props: {
      btnName: {
        type: String,
        default: ""
      },
      isDisabled: {
        type: Boolean,
        default: !1
      },
      isBlock: {
        type: Boolean,
        default: !0
      },
      color: {
        type: String,
        default: "red"
      }
    },
    data: function() {
      return {
        redBtnLeft: this.$utils.getImgUrl("play2/task/red-btn-left.png"),
        redBtnCenter: this.$utils.getImgUrl("play2/task/red-btn-center.png"),
        redBtnRight: this.$utils.getImgUrl("play2/task/red-btn-right.png")
      }
    },
    mounted: function() {
      "gold" == this.color && (this.redBtnLeft = this.$utils.getImgUrl("play2/task/gold-btn-left.png"), this.redBtnCenter = this.$utils.getImgUrl("play2/task/gold-btn-center.png"), this.redBtnRight = this.$utils.getImgUrl("play2/task/gold-btn-right.png"))
    }
  };
Array || t.resolveComponent("btn-wrap")();
var n = t._export_sfc(e, [
  ["render", function(e, n, r, l, s, i) {
    return {
      a: t.t(r.btnName),
      b: s.redBtnLeft,
      c: "url('".concat(s.redBtnCenter, "')"),
      d: s.redBtnRight,
      e: t.n({
        disabled: r.isDisabled,
        block: r.isBlock
      }),
      f: t.n(r.color),
      g: t.p({
        isDisabled: r.isDisabled
      })
    }
  }],
  ["__scopeId", "data-v-ad6d7274"]
]);
wx.createComponent(n);