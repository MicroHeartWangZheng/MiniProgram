var t = require("../E6064C639CEDE14F806024649ACAA3A7.js"),
  n = require("../302F12419CEDE14F56497A46F35AA3A7.js");
require("../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../99A56A709CEDE14FFFC30277932AA3A7.js"), require("../F13970549CEDE14F975F18534C3AA3A7.js"), require("../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../42DF72329CEDE14F24B91A35674AA3A7.js"), require("../2800CA079CEDE14F4E66A20028DAA3A7.js");
var e = {
    props: {
      imgUrl: {
        type: String,
        default: t.utils.getImgUrl("index/empty.png")
      },
      emptyType: {
        type: [String, Number],
        default: function() {
          return ""
        }
      },
      tips: {
        type: String,
        default: function() {
          return "暂无数据"
        }
      },
      actionButtonsConfig: {
        type: Array,
        default: function() {
          return []
        }
      },
      leftBtn: {
        type: String,
        default: function() {
          return "草稿箱"
        }
      },
      rightBtn: {
        type: String,
        default: function() {
          return "新建"
        }
      },
      marginTop: {
        type: String,
        default: function() {
          return "334rpx"
        }
      }
    },
    watch: {
      actionButtonsConfig: {
        handler: function(t, n) {
          this.actionButtonsConfigNew = JSON.parse(JSON.stringify(t))
        },
        deep: !0
      }
    },
    data: function() {
      return {
        utils: t.utils,
        actionButtonsConfigNew: []
      }
    },
    mounted: function() {
      this.actionButtonsConfigNew = JSON.parse(JSON.stringify(this.actionButtonsConfig))
    },
    methods: {
      btnClcik: function(t, n) {
        this.$emit("onBtnClcik", t, n)
      },
      addClick: function() {
        this.$emit("onAddClick")
      },
      draftsClick: function() {
        this.$emit("onDraftsClick")
      }
    }
  },
  i = function() {
    n.useCssVars((function(t) {
      return {
        "118319ec": t.marginTop
      }
    }))
  },
  r = e.setup;
e.setup = r ? function(t, n) {
  return i(), r(t, n)
} : i;
var u = e,
  o = n._export_sfc(u, [
    ["render", function(t, e, i, r, u, o) {
      return n.e({
        a: n.t(i.tips || "暂无数据"),
        b: 1 == i.emptyType ? 1 : "",
        c: i.emptyType && 1 == i.emptyType
      }, i.emptyType && 1 == i.emptyType ? {
        d: n.f(u.actionButtonsConfigNew, (function(t, e, i) {
          return n.e({
            a: "分享至微信" == t.btnName
          }, "分享至微信" == t.btnName ? {
            b: n.t(t.btnName || "返回"),
            c: n.n(t.class)
          } : {
            d: n.t(t.btnName || "返回"),
            e: n.n(t.class),
            f: n.o((function(n) {
              return o.btnClcik(t, n)
            }), e)
          }, {
            g: e
          })
        }))
      } : {}, {
        e: i.emptyType && 0 == i.emptyType
      }, i.emptyType && 0 == i.emptyType ? {
        f: n.t(i.leftBtn),
        g: n.o((function() {
          return o.draftsClick && o.draftsClick.apply(o, arguments)
        })),
        h: n.t(i.rightBtn),
        i: n.o((function() {
          return o.addClick && o.addClick.apply(o, arguments)
        }))
      } : {}, {
        j: n.s(t.__cssVars())
      })
    }],
    ["__scopeId", "data-v-bc01826a"]
  ]);
wx.createComponent(o);