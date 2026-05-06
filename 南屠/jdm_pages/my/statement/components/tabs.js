var e = require("../../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  t = require("../../../../42DF72329CEDE14F24B91A35674AA3A7.js"),
  a = {
    props: {
      tabList: {
        type: [Array],
        default: function() {
          return []
        }
      },
      tabValue: {
        type: [String, Number],
        default: function() {
          return ""
        }
      }
    },
    data: function() {
      return {
        selectValue: ""
      }
    },
    mounted: function() {
      this.tabValue ? this.selectValue = this.tabValue : this.tabList && this.tabList.length > 0 && (this.selectValue = this.tabList[0].value)
    },
    methods: {
      chengTab: function(e) {
        this.selectValue != e.value && (this.selectValue = e.value, this.$emit("chengTab", e))
      }
    }
  },
  n = e._export_sfc(a, [
    ["render", function(a, n, s, u, i, l) {
      return {
        a: e.f(s.tabList, (function(a, n, s) {
          return e.e({
            a: e.t(a.name),
            b: a.value == i.selectValue
          }, a.value == i.selectValue ? {
            c: t._imports_0$13
          } : {}, {
            d: n,
            e: e.n(a.value == i.selectValue ? "selectItem" : ""),
            f: e.o((function(e) {
              return l.chengTab(a)
            }), n)
          })
        })),
        b: e.s("width: ".concat(100 / s.tabList.length, "%;"))
      }
    }],
    ["__scopeId", "data-v-f64eaa46"]
  ]);
wx.createComponent(n);